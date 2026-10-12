// The wall solids: every wall cut into pieces at its openings, built as prisms that fold away above the cut height.

import type { Wall } from "../../geometry/walls.ts";
import type { Floor, Vec2 } from "../../model.ts";
import { CAP_OFFSET, LOWER_OFFSET, pushPrism, type GeoBuffer } from "../geo.ts";
import { NEON, SLAB } from "./look.ts";
import { clipAlong, unit } from "./outline.ts";
import { wallHeight, type roofLimits } from "./placement.ts";
import type { Span } from "./types.ts";

interface Piece {
  t0: number;
  t1: number;
  /** The height ranges the wall fills at this piece (between and around openings). */
  ranges: [number, number][];
}

/**
 * Pieces along the wall's axis, cut at every opening edge. Each piece leaves out all openings above it (two windows one
 * above the other, a window over a door), and the wall fills what remains.
 */
function piecesOf(spans: Span[], height: number): Piece[] {
  const stops = [-Infinity, ...new Set(spans.flatMap((sp) => [sp.s0, sp.s1])).values(), Infinity].sort((a, b) => a - b);
  const pieces: Piece[] = [];
  for (let i = 0; i + 1 < stops.length; i++) {
    const [t0, t1] = [stops[i], stops[i + 1]];
    if (t1 - t0 < 1e-6) continue;
    const middle = Number.isFinite(t0) && Number.isFinite(t1) ? (t0 + t1) / 2 : Number.isFinite(t0) ? t0 + 1 : t1 - 1;
    const covering = spans.filter((sp) => sp.s0 < middle && sp.s1 > middle).map((sp) => [sp.sill, sp.top] as [number, number]).sort((a, b) => a[0] - b[0]);
    const ranges: [number, number][] = [];
    let y = -SLAB;
    for (const [lower, upper] of covering) {
      if (lower > y + 1e-4) ranges.push([y, lower]);
      y = Math.max(y, upper);
    }
    if (height > y + 1e-4) ranges.push([y, height]);
    pieces.push({ t0, t1, ranges });
  }
  return pieces;
}

export function buildWallSolids(
  buf: GeoBuffer,
  floor: Floor,
  walls: Wall[],
  wallBucket: Map<Wall, number>,
  spans: Map<Wall, Span[]>,
  limits: ReturnType<typeof roofLimits>,
  hasRoof: boolean,
): void {
  const { topAt, lowestTop } = limits;
  const cut = Math.min(floor.cut_height, floor.height);
  for (const wall of walls) {
    const bucket = wallBucket.get(wall)!;
    const axis = unit([wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]]);
    const list = (spans.get(wall) ?? []).sort((p, q) => p.s0 - q.s0);
    const H = wallHeight(wall, floor.height);
    const pieces = piecesOf(list, H);
    // under a roof the pieces are cut into short steps, so each step's top lies in one roof plane
    const length = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]);
    const underRoof = hasRoof && lowestTop(wall.a, axis, 0, length, H) < H - 1e-3;
    const steps = underRoof
      ? pieces.flatMap((piece) => {
          const from = Math.max(piece.t0, -0.5);
          const to = Math.min(piece.t1, length + 0.5);
          const count = Math.max(1, Math.ceil((to - from) / 0.3));
          return Array.from({ length: count }, (_, i) => ({
            t0: i === 0 ? piece.t0 : from + ((to - from) * i) / count,
            t1: i === count - 1 ? piece.t1 : from + ((to - from) * (i + 1)) / count,
            ranges: piece.ranges,
            inner0: i > 0,
            inner1: i < count - 1,
          }));
        })
      : pieces.map((piece) => ({ ...piece, inner0: false, inner1: false }));

    const along = (p: Vec2) => (p[0] - wall.a[0]) * axis[0] + (p[1] - wall.a[1]) * axis[1];
    for (const step of steps) {
      const poly = clipAlong(wall.footprint, wall.a, axis, step.t0, step.t1);
      if (poly.length < 3) continue;
      // the faces between two steps of one piece lie inside the wall: leave them out, or they show as stripes through see-through walls
      const at = (p: Vec2, t: number) => Math.abs(along(p) - t) < 1e-4;
      const skipSide = (p: Vec2, q: Vec2) => (step.inner0 && at(p, step.t0) && at(q, step.t0)) || (step.inner1 && at(p, step.t1) && at(q, step.t1));
      // the roof over this step: the lowest point of its footprint decides what is left of each range
      const roofTop = underRoof ? Math.min(...poly.map(([x, z]) => topAt(x, z, H))) : H;
      for (const [y0, y1raw] of step.ranges) {
        const y1 = Math.min(y1raw, underRoof ? Math.max(...poly.map(([x, z]) => topAt(x, z, H))) : y1raw);
        if (y1 - y0 < 1e-4 || roofTop - y0 < 0.01) continue;
        const lintel = y0 > 0.01;
        const sloped = underRoof && y1raw > roofTop;
        const topOf = (x: number, z: number) => Math.min(y1raw, topAt(x, z, H));
        if (y0 < cut - 1e-6) {
          // the top face at the cut height is only seen while the wall is cut
          const topFold = y1 > cut + 1e-6 ? CAP_OFFSET + bucket : LOWER_OFFSET + bucket;
          const capped = sloped && roofTop < cut ? (x: number, z: number) => Math.min(cut, topOf(x, z)) : Math.min(y1, cut);
          pushPrism(buf, poly, y0, capped, NEON.wall, NEON.wallTop, { aoFrom: 0, bottom: lintel, fold: LOWER_OFFSET + bucket, topFold, skipSide });
        }
        if (y1 > cut + 1e-6 && roofTop > cut + 1e-6) pushPrism(buf, poly, Math.max(y0, cut), sloped ? topOf : y1, NEON.wall, NEON.wallTop, { aoFrom: 0, fold: bucket, bottom: lintel && y0 >= cut, skipSide });
      }
    }
  }
}
