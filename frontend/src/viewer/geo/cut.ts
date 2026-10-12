// Cutting finished buffers at a height: what lies above the cut gets another fold value, so it can fold away.

import type { GeoBuffer, LineBuffer } from "./buffers.ts";

const EPS = 1e-6;

/** One vertex read back from a buffer. */
interface Vertex {
  p: number[];
  c: number[];
  uv: number[] | null;
  tile: number[] | null;
}

const blend = (a: number[], b: number[], t: number) => a.map((x, i) => x + (b[i] - x) * t);

/** The point where an edge crosses the height `cut`; colours and uvs are interpolated. */
function crossing(a: Vertex, b: Vertex, cut: number): Vertex {
  const t = (cut - a.p[1]) / (b.p[1] - a.p[1]);
  return { p: blend(a.p, b.p, t), c: blend(a.c, b.c, t), uv: a.uv && b.uv ? blend(a.uv, b.uv, t) : null, tile: a.tile };
}

function readVertex(buf: GeoBuffer, v: number): Vertex {
  return {
    p: buf.p.slice(v * 3, v * 3 + 3),
    c: buf.c.slice(v * 3, v * 3 + 3),
    uv: buf.uv ? buf.uv.slice(v * 2, v * 2 + 2) : null,
    tile: buf.tile ? buf.tile.slice(v * 2, v * 2 + 2) : null,
  };
}

function overwriteTriangle(buf: GeoBuffer, tri: number, corners: Vertex[], fold: number): void {
  corners.forEach((corner, k) => {
    const v = tri * 3 + k;
    corner.p.forEach((x, i) => (buf.p[v * 3 + i] = x));
    corner.c.forEach((x, i) => (buf.c[v * 3 + i] = x));
    if (buf.uv && corner.uv) corner.uv.forEach((x, i) => (buf.uv![v * 2 + i] = x));
    if (buf.tile && corner.tile) corner.tile.forEach((x, i) => (buf.tile![v * 2 + i] = x));
    buf.f[v] = fold;
  });
}

function appendTriangle(buf: GeoBuffer, corners: Vertex[], fold: number): void {
  for (const corner of corners) {
    buf.p.push(...corner.p);
    buf.c.push(...corner.c);
    buf.f.push(fold);
    buf.uv?.push(...(corner.uv ?? [0.5, 0.5]));
    buf.tile?.push(...(corner.tile ?? [0, 1]));
  }
}

/**
 * Cuts the triangles from `fromTri` on at the height `cut`: pieces above get `fold`, pieces below keep theirs, and a
 * triangle across the plane is split. New triangles go to the end of the buffer, so the range stays contiguous.
 * Meant for tall furniture in the cut view.
 */
export function cutAbove(buf: GeoBuffer, fromTri: number, cut: number, fold: number): void {
  const total = buf.count;
  for (let tri = fromTri; tri < total; tri++) {
    const corners = [0, 1, 2].map((k) => readVertex(buf, tri * 3 + k));
    const isAbove = corners.map((v) => v.p[1] > cut + EPS);
    const isBelow = corners.map((v) => v.p[1] < cut - EPS);
    if (!isAbove.some(Boolean)) continue;
    if (!isBelow.some(Boolean)) {
      for (let k = 0; k < 3; k++) buf.f[tri * 3 + k] = fold;
      continue;
    }
    const kept = buf.f[tri * 3];
    const upCount = isAbove.filter(Boolean).length;
    // rotate so the odd vertex out comes first, keeping the cyclic order (and so the winding)
    const odd = upCount === 1 ? isAbove.indexOf(true) : isAbove.indexOf(false);
    const [a, b, c] = [corners[odd], corners[(odd + 1) % 3], corners[(odd + 2) % 3]];
    const onAB = crossing(a, b, cut);
    const onCA = crossing(c, a, cut);
    // the small triangle at the odd vertex goes on the side it lies on, the quad (two triangles) on the other
    const [small, quad] = upCount === 1 ? [fold, kept] : [kept, fold];
    overwriteTriangle(buf, tri, [a, onAB, onCA], small);
    appendTriangle(buf, [onAB, b, c], quad);
    appendTriangle(buf, [onAB, c, onCA], quad);
  }
}

/** The same for edge lines: segments from `fromSeg` on are split at the cut height, and the upper part gets `fold`. */
export function cutLinesAbove(lines: LineBuffer, fromSeg: number, cut: number, fold: number): void {
  const total = lines.p.length / 6;
  for (let s = fromSeg; s < total; s++) {
    const a = lines.p.slice(s * 6, s * 6 + 3);
    const b = lines.p.slice(s * 6 + 3, s * 6 + 6);
    const [low, high] = a[1] <= b[1] ? [a, b] : [b, a];
    if (high[1] <= cut + EPS) continue;
    if (low[1] >= cut - EPS) {
      lines.f[s * 2] = fold;
      lines.f[s * 2 + 1] = fold;
      continue;
    }
    const t = (cut - low[1]) / (high[1] - low[1]);
    const middle = [low[0] + (high[0] - low[0]) * t, cut, low[2] + (high[2] - low[2]) * t];
    const color = lines.c.slice(s * 6, s * 6 + 3);
    // the lower part stays in place, the upper part is appended
    lines.p.splice(s * 6, 6, ...low, ...middle);
    lines.p.push(...middle, ...high);
    lines.c.push(...color, ...color);
    lines.f.push(fold, fold);
  }
}
