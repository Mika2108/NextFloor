// Checks the in-browser model preparation against a model made on the spot: two boxes with two materials, a few thousand triangles.
// Usage (from frontend/): node screenshot-model.mjs

import { createServer } from "node:http";
import { existsSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file)) return void res.writeHead(404).end();
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const port = server.address().port;
const executablePath = [process.env.CHROME_PATH, "/usr/bin/google-chrome", "/usr/bin/chromium", `${process.env.HOME}/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome`].filter(Boolean).find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", "--no-sandbox"] });
// A binary glTF made by hand: a sphere named "Body" (many triangles) and a flat box "Glass" (see-through), pointing along +x.
function makeGlb() {
  const sphere = { positions: [], indices: [] };
  const rings = 60;
  const segments = 80;
  for (let r = 0; r <= rings; r++) {
    for (let s = 0; s < segments; s++) {
      const phi = (r / rings) * Math.PI;
      const theta = (s / segments) * Math.PI * 2;
      // stretched along x like a car, so the front can be told from the side
      sphere.positions.push(2 * Math.sin(phi) * Math.cos(theta), 0.7 * Math.cos(phi) + 0.7, Math.sin(phi) * Math.sin(theta));
    }
  }
  for (let r = 0; r < rings; r++) {
    for (let s = 0; s < segments; s++) {
      const a = r * segments + s;
      const b = r * segments + ((s + 1) % segments);
      sphere.indices.push(a, a + segments, b, b, a + segments, b + segments);
    }
  }
  const box = { positions: [-0.5, 1.5, -0.5, 0.5, 1.5, -0.5, 0.5, 1.5, 0.5, -0.5, 1.5, 0.5, -0.5, 1.8, -0.5, 0.5, 1.8, -0.5, 0.5, 1.8, 0.5, -0.5, 1.8, 0.5], indices: [0, 1, 2, 0, 2, 3, 4, 6, 5, 4, 7, 6, 0, 4, 5, 0, 5, 1, 1, 5, 6, 1, 6, 2, 2, 6, 7, 2, 7, 3, 3, 7, 4, 3, 4, 0] };
  const chunks = [];
  const views = [];
  const accessors = [];
  const add = (typed, target, type, componentType, count, extra = {}) => {
    const bytes = new Uint8Array(typed.buffer);
    const offset = chunks.reduce((n, c) => n + c.length, 0);
    views.push({ buffer: 0, byteOffset: offset, byteLength: bytes.length, target });
    accessors.push({ bufferView: views.length - 1, componentType, count, type, ...extra });
    chunks.push(bytes);
    return accessors.length - 1;
  };
  const prims = [sphere, box].map((m, i) => {
    const p = Float32Array.from(m.positions);
    const x = [0, 0, 0];
    const lo = [Infinity, Infinity, Infinity];
    const hi = [-Infinity, -Infinity, -Infinity];
    for (let k = 0; k < p.length; k += 3) for (let j = 0; j < 3; j++) { lo[j] = Math.min(lo[j], p[k + j]); hi[j] = Math.max(hi[j], p[k + j]); }
    const pos = add(p, 34962, "VEC3", 5126, p.length / 3, { min: lo, max: hi });
    const idx = add(Uint32Array.from(m.indices), 34963, "SCALAR", 5125, m.indices.length);
    return { attributes: { POSITION: pos }, indices: idx, material: i };
  });
  const total = chunks.reduce((n, c) => n + c.length, 0);
  const bin = new Uint8Array(total);
  let at = 0;
  for (const c of chunks) { bin.set(c, at); at += c.length; }
  const json = { asset: { version: "2.0" }, scene: 0, scenes: [{ nodes: [0] }], nodes: [{ mesh: 0 }], meshes: [{ primitives: prims }], materials: [{ name: "Body", pbrMetallicRoughness: { baseColorFactor: [0.8, 0.1, 0.1, 1] } }, { name: "Glass", alphaMode: "BLEND", pbrMetallicRoughness: { baseColorFactor: [0.6, 0.8, 0.9, 0.3] } }], buffers: [{ byteLength: total }], bufferViews: views, accessors };
  let text = new TextEncoder().encode(JSON.stringify(json));
  const padded = new Uint8Array(Math.ceil(text.length / 4) * 4).fill(0x20);
  padded.set(text);
  const out = new Uint8Array(12 + 8 + padded.length + 8 + bin.length);
  const view = new DataView(out.buffer);
  view.setUint32(0, 0x46546c67, true);
  view.setUint32(4, 2, true);
  view.setUint32(8, out.length, true);
  view.setUint32(12, padded.length, true);
  view.setUint32(16, 0x4e4f534a, true);
  out.set(padded, 20);
  const o = 20 + padded.length;
  view.setUint32(o, bin.length, true);
  view.setUint32(o + 4, 0x004e4942, true);
  out.set(bin, o + 8);
  return Array.from(out);
}

const page = await browser.newPage();
await page.setViewport({ width: 1100, height: 900 });
page.on("pageerror", (e) => console.error("PAGE ERROR", e.message));
page.on("console", (m) => m.type() === "error" && console.error("CONSOLE", m.text()));
await page.goto(`http://127.0.0.1:${port}/preview/index.html`);
const result = await page.evaluate(async (bytes) => {
  const bundle = await import("/custom_components/nextfloor/frontend/nextfloor-3d.js");
  const data = new Uint8Array(bytes).buffer;
  const before = await bundle.inspectModel(data);
  const prepared = await bundle.prepareModel(data, { turns: 1, paint: before.paint, maxTriangles: 1500 });
  const after = await bundle.inspectModel(prepared.glb);
  let refused = "";
  try { await bundle.inspectModel(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]).buffer); } catch (e) { refused = e.reason; }
  const picture = await bundle.previewModel(prepared.glb, "#1d5bd6");
  return { before, after, bytes: prepared.glb.byteLength, refused, picture };
}, makeGlb());
const png = Buffer.from(result.picture.split(",")[1], "base64");
(await import("node:fs")).writeFileSync("/tmp/model-preview.png", png);
console.log(JSON.stringify({ before: { ...result.before, materials: result.before.materials.map((m) => m.name) }, after: { ...result.after, materials: result.after.materials.map((m) => m.name) }, bytes: result.bytes, refused: result.refused, previewBytes: png.length }));

// the page: add a model through the extensions page, as a user would
await page.goto(`http://127.0.0.1:${port}/preview/index.html`);
await new Promise((r) => setTimeout(r, 1500));
const glbPath = "/tmp/model-test.glb";
(await import("node:fs")).writeFileSync(glbPath, Buffer.from(makeGlb()));
await page.evaluate(() => { document.querySelector("nextfloor-panel")._mode = "extensions"; });
await new Promise((r) => setTimeout(r, 2500));
const found = await page.evaluateHandle(() => {
  const ext = document.querySelector("nextfloor-panel").shadowRoot.querySelector("nf-extensions");
  return ext?.shadowRoot.querySelector("nf-model-upload") ?? null;
});
const upload = found.asElement();
console.log("UPLOAD ELEMENT", !!upload);
const rows = await upload.evaluate((el) => [...el.shadowRoot.querySelectorAll(".nf-model")].map((r) => r.innerText.replace(/\s+/g, " ")));
console.log("ROWS", JSON.stringify(rows));
const input = await upload.evaluateHandle((el) => el.shadowRoot.querySelector(".nf-model input[type=file]"));
await input.asElement().uploadFile(glbPath);
await new Promise((r) => setTimeout(r, 2500));
console.log("EDITOR", await upload.evaluate((el) => el.shadowRoot.querySelector(".nf-model-edit")?.innerText.replace(/\s+/g, " ")));
await upload.screenshot({ path: "/tmp/model-ui.png" });
await upload.evaluate((el) => el.shadowRoot.querySelector(".nf-model-edit .nf-actions .nf-primary").click());
await new Promise((r) => setTimeout(r, 1500));
console.log("AFTER", await upload.evaluate((el) => el.shadowRoot.querySelector(".nf-notice")?.innerText + " | " + [...el.shadowRoot.querySelectorAll(".nf-model")][0].innerText.replace(/\s+/g, " ")));
await browser.close();
server.close();
