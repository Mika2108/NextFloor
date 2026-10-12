// Growing vertex buffers for merged geometry. Every vertex carries a colour and a "fold" value that tells the shader when
// to hide it (see build.ts).

import { BufferGeometry, Color, Float32BufferAttribute } from "three";
import { EDGE_TOP } from "./colors.ts";

/** Fold value of geometry that is always shown. */
export const ALWAYS = -1;
/** Fold kinds: the value is kind * 16 + bucket (see build.ts). */
export const CUT_OFFSET = 16;
export const LOWER_OFFSET = 32;
export const CAP_OFFSET = 48;
/** The part of tall furniture above the cut height: it folds away with the walls. */
export const FURN_OFFSET = 64;

const attribute = (values: number[], size: number) => new Float32BufferAttribute(values, size);

export class GeoBuffer {
  /** Positions, colours (three numbers per vertex), and one fold value per vertex. */
  p: number[] = [];
  c: number[] = [];
  f: number[] = [];
  /** Texture coordinates; only kept when asked for. */
  uv: number[] | null;
  /** The pattern atlas tile per vertex (floors only). */
  tile: number[] | null;

  constructor(uvs = false, tiles = false) {
    this.uv = uvs ? [] : null;
    this.tile = tiles ? [] : null;
  }

  /** Adds a triangle. Without uvs it points at an empty spot of the texture. */
  tri(a: number[], b: number[], c: number[], ca: Color, cb: Color = ca, cc: Color = ca, uv?: number[], fold = ALWAYS, tile: [number, number] = [0, 1]): void {
    this.p.push(...a, ...b, ...c);
    for (const color of [ca, cb, cc]) this.c.push(color.r, color.g, color.b);
    this.f.push(fold, fold, fold);
    this.uv?.push(...(uv ?? [0.5, 0.5, 0.5, 0.5, 0.5, 0.5]));
    this.tile?.push(...tile, ...tile, ...tile);
  }

  /** The number of triangles. */
  get count(): number {
    return this.p.length / 9;
  }

  geometry(): BufferGeometry {
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", attribute(this.p, 3));
    geometry.setAttribute("color", attribute(this.c, 3));
    geometry.setAttribute("fold", attribute(this.f, 1));
    if (this.uv) geometry.setAttribute("uv", attribute(this.uv, 2));
    if (this.tile) geometry.setAttribute("tile", attribute(this.tile, 2));
    geometry.computeBoundingSphere();
    return geometry;
  }
}

export class LineBuffer {
  p: number[] = [];
  c: number[] = [];
  f: number[] = [];

  seg(a: number[], b: number[], color: Color = EDGE_TOP, fold = ALWAYS): void {
    this.p.push(...a, ...b);
    this.c.push(color.r, color.g, color.b, color.r, color.g, color.b);
    this.f.push(fold, fold);
  }

  /** A vertical or sloped segment split at the cut height: below it always shown, above it with the bucket (negative bucket: never split). */
  segSplit(a: number[], b: number[], color: Color, cut: number, bucket: number): void {
    const [low, high] = a[1] <= b[1] ? [a, b] : [b, a];
    if (high[1] <= cut + 1e-6 || bucket < 0) return this.seg(low, high, color, ALWAYS);
    if (low[1] >= cut - 1e-6) return this.seg(low, high, color, bucket);
    const t = (cut - low[1]) / (high[1] - low[1]);
    const middle = [low[0] + (high[0] - low[0]) * t, cut, low[2] + (high[2] - low[2]) * t];
    this.seg(low, middle, color, ALWAYS);
    this.seg(middle, high, color, bucket);
  }

  geometry(): BufferGeometry {
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", attribute(this.p, 3));
    geometry.setAttribute("color", attribute(this.c, 3));
    geometry.setAttribute("fold", attribute(this.f, 1));
    return geometry;
  }
}
