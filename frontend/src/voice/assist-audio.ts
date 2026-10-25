// Speech to text through Home Assistant's own Assist pipeline (the same way Home Assistant's voice dialog does it): the microphone is
// recorded at 16 kHz, sent as binary messages over Home Assistant's websocket, and the pipeline's speech-to-text answers with the
// text. Nothing goes anywhere else, and the microphone is open only while one sentence is spoken.

import type { HomeAssistant } from "../types.ts";

interface PipelineEvent {
  type: string;
  data?: { runner_data?: { stt_binary_handler_id?: number }; stt_output?: { text?: string }; code?: string; message?: string };
}

type Connection = {
  socket?: { send(data: ArrayBufferLike | ArrayBufferView): void } | null;
  subscribeMessage<T>(callback: (event: T) => void, msg: Record<string, unknown>): Promise<() => Promise<void>>;
};

const WORKLET = `class NfRecorder extends AudioWorkletProcessor {
  process(inputs) {
    const channel = inputs[0] && inputs[0][0];
    if (channel) this.port.postMessage(channel.slice(0));
    return true;
  }
}
registerProcessor("nf-recorder", NfRecorder);`;

/** Whether this browser can record for Assist (a secure page with a microphone). */
export const canListen = (): boolean => typeof window !== "undefined" && window.isSecureContext && !!navigator.mediaDevices?.getUserMedia;

/** Float samples (-1 … 1) as 16-bit PCM. */
export function toPcm16(samples: Float32Array): Int16Array {
  const out = new Int16Array(samples.length);
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    out[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return out;
}

/** One chunk for the pipeline: the handler id, then the samples. An empty chunk (only the id) ends the speech. */
export function audioMessage(handlerId: number, pcm: Int16Array | null): Uint8Array {
  const bytes = pcm ? new Uint8Array(pcm.buffer, pcm.byteOffset, pcm.byteLength) : new Uint8Array(0);
  const out = new Uint8Array(1 + bytes.length);
  out[0] = handlerId;
  out.set(bytes, 1);
  return out;
}

export interface Listening {
  /** The recognised sentence (empty when nothing was understood). */
  text: Promise<string>;
  /** Stops listening early; the pipeline then works with what it heard. */
  stop(): void;
}

/** Records one sentence and has Home Assistant's Assist pipeline turn it into text. */
export function listen(hass: HomeAssistant, onLevel?: (level: number) => void): Listening {
  const connection = (hass as unknown as { connection: Connection }).connection;
  let stopped = false;
  let finish: () => void = () => undefined;
  const text = (async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true } });
    const context = new AudioContext({ sampleRate: 16000 });
    let handler: number | null = null;
    const queue: Int16Array[] = [];
    const send = (pcm: Int16Array | null) => connection.socket?.send(audioMessage(handler!, pcm));
    const take = (samples: Float32Array) => {
      if (stopped) return;
      let peak = 0;
      for (const s of samples) peak = Math.max(peak, Math.abs(s));
      onLevel?.(peak);
      const pcm = toPcm16(samples);
      if (handler === null) queue.push(pcm);
      else send(pcm);
    };
    const source = context.createMediaStreamSource(stream);
    let node: AudioNode;
    try {
      const url = URL.createObjectURL(new Blob([WORKLET], { type: "text/javascript" }));
      await context.audioWorklet.addModule(url);
      URL.revokeObjectURL(url);
      const worklet = new AudioWorkletNode(context, "nf-recorder");
      worklet.port.onmessage = (e: MessageEvent<Float32Array>) => take(e.data);
      node = worklet;
    } catch {
      // older WebViews without audio worklets
      const processor = context.createScriptProcessor(4096, 1, 1);
      processor.onaudioprocess = (e) => take(new Float32Array(e.inputBuffer.getChannelData(0)));
      node = processor;
    }
    source.connect(node);
    node.connect(context.destination);

    const done = () => {
      if (stopped) return;
      stopped = true;
      for (const track of stream.getTracks()) track.stop();
      void context.close();
      if (handler !== null) send(null);
    };
    finish = done;
    const timeout = setTimeout(done, 12000);
    try {
      return await new Promise<string>((resolve, reject) => {
        let unsubscribe: (() => Promise<void>) | null = null;
        const end = (value: string | Error) => {
          clearTimeout(timeout);
          done();
          void unsubscribe?.();
          if (value instanceof Error) reject(value);
          else resolve(value);
        };
        void connection
          .subscribeMessage<PipelineEvent>(
            (event) => {
              if (event.type === "run-start") {
                handler = event.data?.runner_data?.stt_binary_handler_id ?? null;
                if (handler !== null) for (const pcm of queue.splice(0)) send(pcm);
              } else if (event.type === "stt-vad-end") done();
              else if (event.type === "stt-end") end(event.data?.stt_output?.text ?? "");
              else if (event.type === "error") end(new Error(event.data?.message ?? event.data?.code ?? "assist error"));
              else if (event.type === "run-end") end("");
            },
            { type: "assist_pipeline/run", start_stage: "stt", end_stage: "stt", input: { sample_rate: context.sampleRate } },
          )
          .then((u) => (unsubscribe = u))
          .catch((e: unknown) => end(e instanceof Error ? e : new Error(String(e))));
      });
    } finally {
      done();
    }
  })();
  return { text, stop: () => finish() };
}
