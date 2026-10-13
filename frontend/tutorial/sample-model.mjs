// A small binary glTF made by hand (a stretched sphere and a flat box), for showing the model upload.
import { writeFileSync } from "node:fs";

export function writeSampleGlb(path) {
  writeFileSync(path, Uint8Array.from(makeGlb()));
  return path;
}

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
