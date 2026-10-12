// Building blocks for the moving parts of doors and windows. Everything is placed in a local frame of an opening: x runs
// along the opening from its start, n points from the wall axis towards the room, y is up.

import { Color } from "three";
import { ALWAYS, shade, type GeoBuffer } from "../geo.ts";

/** Maps a local (x, n, y) to world coordinates. */
export type Frame = (x: number, n: number, y: number) => number[];

export interface Box {
  x0: number;
  x1: number;
  n0: number;
  n1: number;
  y0: number;
  y1: number;
}

/** A box with all six faces; the lower, near and side faces are a little darker than the top and the far face. */
export function box(buf: GeoBuffer, frame: Frame, b: Box, side: Color, top: Color, fold: number): void {
  const p = (x: number, n: number, y: number) => frame(x, n, y);
  const { x0, x1, n0, n1, y0, y1 } = b;
  const tint = (k: number) => shade(side.getHex(), k);
  const faces: [number[], number[], number[], number[], Color][] = [
    [p(x0, n0, y1), p(x1, n0, y1), p(x1, n1, y1), p(x0, n1, y1), top],
    [p(x0, n0, y0), p(x1, n0, y0), p(x1, n1, y0), p(x0, n1, y0), tint(0.6)],
    [p(x0, n1, y0), p(x1, n1, y0), p(x1, n1, y1), p(x0, n1, y1), side],
    [p(x0, n0, y0), p(x1, n0, y0), p(x1, n0, y1), p(x0, n0, y1), tint(0.85)],
    [p(x0, n0, y0), p(x0, n1, y0), p(x0, n1, y1), p(x0, n0, y1), tint(0.92)],
    [p(x1, n0, y0), p(x1, n1, y0), p(x1, n1, y1), p(x1, n0, y1), tint(0.92)],
  ];
  for (const [a, b2, c, d, color] of faces) {
    buf.tri(a, b2, c, color, color, color, undefined, fold);
    buf.tri(a, c, d, color, color, color, undefined, fold);
  }
}

/** The cut height and the fold bucket of the wall a part sits in: what lies above the cut folds away with the wall. */
export interface Fold {
  cut: number;
  bucket: number;
}

/** A box split at the cut height: the part above folds away with its wall. */
export function splitBox(buf: GeoBuffer, frame: Frame, b: Box, side: Color, top: Color, { cut, bucket }: Fold): void {
  if (b.y1 <= cut + 1e-6) return box(buf, frame, b, side, top, ALWAYS);
  if (b.y0 >= cut - 1e-6) return box(buf, frame, b, side, top, bucket);
  box(buf, frame, { ...b, y1: cut }, side, top, ALWAYS);
  box(buf, frame, { ...b, y0: cut }, side, top, bucket);
}

/** A flat upright quad in a local plane (glass, slats), split at the cut height, with optional uvs (`vScale` metres per texture repeat). */
export function panel(buf: GeoBuffer, frame: Frame, x0: number, x1: number, n: number, y0: number, y1: number, color: Color, { cut, bucket }: Fold, vScale = 0): void {
  const piece = (ya: number, yb: number, fold: number) => {
    const v = (y: number) => (vScale ? (y1 - y) / vScale : 0.5);
    const [a, b, c, d] = [frame(x0, n, ya), frame(x1, n, ya), frame(x1, n, yb), frame(x0, n, yb)];
    buf.tri(a, b, c, color, color, color, [0, v(ya), 1, v(ya), 1, v(yb)], fold);
    buf.tri(a, c, d, color, color, color, [0, v(ya), 1, v(yb), 0, v(yb)], fold);
  };
  if (y1 <= cut + 1e-6) piece(y0, y1, ALWAYS);
  else if (y0 >= cut - 1e-6) piece(y0, y1, bucket);
  else {
    piece(y0, cut, ALWAYS);
    piece(cut, y1, bucket);
  }
}

/** A horizontal quad in the local frame at height y (the open part of a garage door). */
export function flatPanel(buf: GeoBuffer, frame: Frame, x0: number, x1: number, n0: number, n1: number, y: number, color: Color, fold: number, vScale: number): void {
  const [a, b, c, d] = [frame(x0, n0, y), frame(x1, n0, y), frame(x1, n1, y), frame(x0, n1, y)];
  const v1 = (n1 - n0) / vScale;
  buf.tri(a, b, c, color, color, color, [0, 0, 1, 0, 1, v1], fold);
  buf.tri(a, c, d, color, color, color, [0, 0, 1, v1, 0, v1], fold);
}
