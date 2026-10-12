// The outline of the walls' footprints, and helpers to cut and clip along a wall.

import type { Wall } from "../../geometry/walls.ts";
import type { Vec2 } from "../../model.ts";
import type { Span } from "./types.ts";

export const unit = (v: Vec2): Vec2 => {
  const length = Math.hypot(v[0], v[1]) || 1;
  return [v[0] / length, v[1] / length];
};

/** A ring running counter-clockwise, whichever way it was given. */
export function counterClockwise(points: Vec2[]): Vec2[] {
  const area = points.reduce((sum, p, i) => sum + p[0] * points[(i + 1) % points.length][1] - points[(i + 1) % points.length][0] * p[1], 0);
  return area >= 0 ? points : [...points].reverse();
}

/** Keeps the part of a polygon on the positive side of a line (Sutherland-Hodgman against one half-plane). */
function clipHalfPlane(poly: Vec2[], distance: (p: Vec2) => number): Vec2[] {
  const kept: Vec2[] = [];
  poly.forEach((a, i) => {
    const b = poly[(i + 1) % poly.length];
    const [da, db] = [distance(a), distance(b)];
    if (da >= 0) kept.push(a);
    if (da >= 0 !== db >= 0) {
      const k = da / (da - db);
      kept.push([a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k]);
    }
  });
  return kept;
}

/** The part of a polygon between two lines perpendicular to `axis` (t is measured from `origin`). */
export function clipAlong(poly: Vec2[], origin: Vec2, axis: Vec2, t0: number, t1: number): Vec2[] {
  const t = (p: Vec2) => (p[0] - origin[0]) * axis[0] + (p[1] - origin[1]) * axis[1];
  let kept = poly;
  if (Number.isFinite(t0)) kept = clipHalfPlane(kept, (p) => t(p) - t0);
  if (Number.isFinite(t1)) kept = clipHalfPlane(kept, (p) => t1 - t(p));
  return kept;
}

export interface OutlineEdge {
  a: Vec2;
  b: Vec2;
  wall: Wall;
}

export interface Outline {
  /** The edges of the merged wall footprints (joints between walls left out), counter-clockwise per wall. */
  edges: OutlineEdge[];
  /** The vertices where the outline turns a corner, with a wall they belong to. */
  corners: { p: Vec2; wall: Wall }[];
}

const millimetres = (v: number) => Math.round(v * 1000);
const vertexKey = (p: Vec2) => `${millimetres(p[0])},${millimetres(p[1])}`;
const edgeKey = (a: Vec2, b: Vec2) => {
  const [s, t] = [vertexKey(a), vertexKey(b)];
  return s < t ? `${s}|${t}` : `${t}|${s}`;
};

/** The edges of a polygon, split wherever one of `points` lies on them, so T-joints line up. */
function splitAtPoints(poly: Vec2[], points: Vec2[]): [Vec2, Vec2][] {
  const pieces: [Vec2, Vec2][] = [];
  poly.forEach((a, i) => {
    const b = poly[(i + 1) % poly.length];
    const [dx, dz] = [b[0] - a[0], b[1] - a[1]];
    const squared = dx * dx + dz * dz;
    if (squared < 1e-8) return;
    const cuts = points
      .map((p) => ({ t: ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / squared, off: Math.abs((p[0] - a[0]) * dz - (p[1] - a[1]) * dx) / Math.sqrt(squared) }))
      .filter(({ t, off }) => t > 1e-6 && t < 1 - 1e-6 && off < 1e-4)
      .map(({ t }) => t)
      .sort((p, q) => p - q);
    let previous = a;
    for (const t of cuts) {
      const cut: Vec2 = [a[0] + dx * t, a[1] + dz * t];
      if (vertexKey(cut) !== vertexKey(previous)) pieces.push([previous, cut]);
      previous = cut;
    }
    pieces.push([previous, b]);
  });
  return pieces;
}

/**
 * The outline of the walls' footprints: the edges no other footprint shares, and the vertices where those edges change
 * direction. Edges are split at `points` first, so an edge partly covered by another wall (a T-joint) keeps only its free part.
 */
export function outlineOf(walls: Wall[], points: Vec2[]): Outline {
  const pieces = walls.map((wall) => ({ wall, edges: splitAtPoints(wall.footprint, points) }));
  const uses = new Map<string, number>();
  for (const { edges } of pieces) for (const [a, b] of edges) uses.set(edgeKey(a, b), (uses.get(edgeKey(a, b)) ?? 0) + 1);

  const edges: OutlineEdge[] = [];
  const directions = new Map<string, { p: Vec2; wall: Wall; d: Vec2[] }>();
  const note = (p: Vec2, wall: Wall, d: Vec2) => {
    const key = vertexKey(p);
    if (!directions.has(key)) directions.set(key, { p, wall, d: [] });
    directions.get(key)!.d.push(d);
  };
  for (const { wall, edges: list } of pieces) {
    for (const [a, b] of list) {
      const length = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (uses.get(edgeKey(a, b)) !== 1 || length < 1e-4) continue;
      edges.push({ a, b, wall });
      const d: Vec2 = [(b[0] - a[0]) / length, (b[1] - a[1]) / length];
      note(a, wall, d);
      note(b, wall, d);
    }
  }
  // a vertex where the outline just continues straight (a T-joint seen from outside) is no corner
  const corners = [...directions.values()].filter(({ d }) => d.some((u) => d.some((v) => Math.abs(u[0] * v[1] - u[1] * v[0]) > 0.05))).map(({ p, wall }) => ({ p, wall }));
  return { edges, corners };
}

/** The parts of an outline edge outside the given opening spans (only for edges along the wall axis). */
export function subtractSpans(edge: OutlineEdge, spans: Span[]): [Vec2, Vec2][] {
  if (spans.length === 0) return [[edge.a, edge.b]];
  const axis = unit([edge.wall.b[0] - edge.wall.a[0], edge.wall.b[1] - edge.wall.a[1]]);
  const along = unit([edge.b[0] - edge.a[0], edge.b[1] - edge.a[1]]);
  if (Math.abs(axis[0] * along[0] + axis[1] * along[1]) < 0.99) return [[edge.a, edge.b]];
  const t = (p: Vec2) => (p[0] - edge.wall.a[0]) * axis[0] + (p[1] - edge.wall.a[1]) * axis[1];
  const [ta, tb] = [t(edge.a), t(edge.b)];
  let parts: [number, number][] = [[Math.min(ta, tb), Math.max(ta, tb)]];
  for (const span of spans) {
    parts = parts.flatMap(([p, q]): [number, number][] => {
      if (span.s1 <= p || span.s0 >= q) return [[p, q]];
      const remaining: [number, number][] = [];
      if (span.s0 > p) remaining.push([p, span.s0]);
      if (span.s1 < q) remaining.push([span.s1, q]);
      return remaining;
    });
  }
  const pointAt = (value: number): Vec2 => {
    const k = (value - ta) / (tb - ta || 1);
    return [edge.a[0] + (edge.b[0] - edge.a[0]) * k, edge.a[1] + (edge.b[1] - edge.a[1]) * k];
  };
  // keep the edge's direction: its normal tells which side the room is on
  return parts.filter(([p, q]) => q - p > 1e-4).map(([p, q]) => (ta <= tb ? [pointAt(p), pointAt(q)] : [pointAt(q), pointAt(p)]));
}
