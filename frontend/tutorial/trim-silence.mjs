// Shortens every stretch without speech that is longer than MAX seconds, in picture and sound, and moves the subtitles along.
// Keeps the start and the end of such a stretch (so actions on screen stay smooth) and cuts out the middle.
//   node tutorial/trim-silence.mjs <video-with-voice.mp4> <subtitles.srt> [max-seconds=2]
// Writes <video>.trimmed.mp4 and <srt>.trimmed.srt next to the inputs.
import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const [video, srt, maxArg] = process.argv.slice(2);
const MAX = Number(maxArg ?? 2);
if (!video || !srt) throw new Error("usage: node tutorial/trim-silence.mjs <video.mp4> <subtitles.srt> [max-seconds]");
const ffmpeg = execFileSync("python3", ["-c", "import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())"]).toString().trim();

// 1. where is nobody speaking
const detect = spawnSync(ffmpeg, ["-i", video, "-af", `silencedetect=noise=-38dB:d=${MAX}`, "-vn", "-f", "null", "-"], { encoding: "utf8", maxBuffer: 1 << 28 }).stderr;
const starts = [...detect.matchAll(/silence_start: ([\d.]+)/g)].map((m) => Number(m[1]));
const ends = [...detect.matchAll(/silence_end: ([\d.]+)/g)].map((m) => Number(m[1]));
const total = Number(/Duration: (\d+):(\d+):(\d+\.\d+)/.exec(detect).slice(1).reduce((a, v, i) => a + Number(v) * [3600, 60, 1][i], 0));
const silences = starts.map((s, i) => [s, ends[i] ?? total]).filter(([s, e]) => e - s > MAX + 0.05);
// 2. what to keep: all but the middle of each long silence (half of MAX stays on each side)
const half = MAX / 2;
const keep = [];
let at = 0;
for (const [s, e] of silences) {
  keep.push([at, s + half]);
  at = e - half;
}
keep.push([at, total]);
const cutTotal = silences.reduce((a, [s, e]) => a + (e - s - MAX), 0);
// 3. the new video
const parts = keep.map(([a, b], i) => `[0:v]trim=${a.toFixed(3)}:${b.toFixed(3)},setpts=PTS-STARTPTS[v${i}];[0:a]atrim=${a.toFixed(3)}:${b.toFixed(3)},asetpts=PTS-STARTPTS[a${i}]`);
const joined = keep.map((_, i) => `[v${i}][a${i}]`).join("") + `concat=n=${keep.length}:v=1:a=1[v][a]`;
const script = video.replace(/\.mp4$/, ".trim.filter.txt");
writeFileSync(script, parts.join(";\n") + ";\n" + joined);
const out = video.replace(/\.mp4$/, ".trimmed.mp4");
execFileSync(ffmpeg, ["-y", "-i", video, "-filter_complex_script", script, "-map", "[v]", "-map", "[a]", "-r", "12", "-c:v", "libx264", "-preset", "slow", "-crf", "30", "-tune", "stillimage", "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart", out], { stdio: "ignore" });
// 4. subtitles: a time t moves earlier by the cut parts before it
const shift = (t) => {
  let cut = 0;
  for (const [s, e] of silences) {
    if (t >= e - half) cut += e - s - MAX;
    else if (t > s + half) cut += t - (s + half);
    else break;
  }
  return t - cut;
};
const clock = (s) => {
  const ms = Math.round(s * 1000);
  const p = (n, w = 2) => String(n).padStart(w, "0");
  return `${p(Math.floor(ms / 3600000))}:${p(Math.floor(ms / 60000) % 60)}:${p(Math.floor(ms / 1000) % 60)},${p(ms % 1000, 3)}`;
};
const secs = (c) => { const [h, m, r] = c.replace(",", ".").split(":"); return Number(h) * 3600 + Number(m) * 60 + Number(r); };
const moved = readFileSync(srt, "utf8").replace(/(\d+:\d+:\d+,\d+) --> (\d+:\d+:\d+,\d+)/g, (_, a, b) => `${clock(shift(secs(a)))} --> ${clock(shift(secs(b)))}`);
writeFileSync(srt.replace(/\.srt$/, ".trimmed.srt"), moved);
console.log(`${silences.length} silences cut, ${cutTotal.toFixed(0)} s removed (${total.toFixed(0)} s → ${(total - cutTotal).toFixed(0)} s)\n${out}`);
