import assert from "node:assert/strict";
import { test } from "node:test";
import { audioMessage, toPcm16 } from "./assist-audio.ts";

test("samples become 16-bit PCM, clipped at full scale", () => {
  assert.deepEqual([...toPcm16(new Float32Array([0, 1, -1, 2, -0.5]))], [0, 32767, -32768, 32767, -16384]);
});

test("an audio message starts with the handler id; an empty one ends the speech", () => {
  const msg = audioMessage(7, new Int16Array([1, -1]));
  assert.equal(msg[0], 7);
  assert.equal(msg.length, 5);
  assert.deepEqual([...audioMessage(3, null)], [3]);
});
