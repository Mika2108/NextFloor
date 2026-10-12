// Posts and beams for fences and pergolas.

import { Color } from "three";
import type { Vec2 } from "../../model.ts";
import { signedArea } from "../../model.ts";
import { ALWAYS, pushPrism, shade, type GeoBuffer } from "../geo.ts";

/** A ring running counter-clockwise, whichever way it was given. */
export const counterClockwise = (points: Vec2[]): Vec2[] => (signedArea(points) >= 0 ? points : [...points].reverse());

/** An upright square post of the given half width, from y0 up to y1. */
export function pushPost(buf: GeoBuffer, [x, z]: Vec2, half: number, y0: number, y1: number, side: number, top: number): void {
  pushPrism(buf, counterClockwise([[x - half, z - half], [x + half, z - half], [x + half, z + half], [x - half, z + half]]), y0, y1, side, top);
}

/**
 * A thin box along the segment p to q (a beam, a rafter), `width` wide, from y0 up to y1 at p. `rise` lifts the q end by that
 * much, so a beam on a sloped pergola follows the slope.
 */
export function pushBeam(buf: GeoBuffer, p: Vec2, q: Vec2, width: number, y0: number, y1: number, side: number, top: number, rise = 0): void {
  const [dx, dz] = [q[0] - p[0], q[1] - p[1]];
  const length = Math.hypot(dx, dz);
  if (length < 1e-6) return;
  const [nx, nz] = [(-dz / length) * width * 0.5, (dx / length) * width * 0.5];
  if (Math.abs(rise) < 1e-4) {
    pushPrism(buf, counterClockwise([[p[0] + nx, p[1] + nz], [q[0] + nx, q[1] + nz], [q[0] - nx, q[1] - nz], [p[0] - nx, p[1] - nz]]), y0, y1, side, top, { aoFrom: y0 - 1 });
    return;
  }
  // a sloped box: both faces of every quad, so it shows from any side without caring about the winding
  const nearEnd = (y: number, s: number): number[] => [p[0] + nx * s, y, p[1] + nz * s];
  const farEnd = (y: number, s: number): number[] => [q[0] + nx * s, y + rise, q[1] + nz * s];
  const face = (v: number[][], color: Color) => {
    for (const [a, b, c] of [[0, 1, 2], [0, 2, 3], [0, 2, 1], [0, 3, 2]]) buf.tri(v[a], v[b], v[c], color, color, color, undefined, ALWAYS);
  };
  const topColor = new Color(top);
  const sideColor = shade(side, 0.9);
  const underColor = shade(side, 0.6);
  face([nearEnd(y1, 1), farEnd(y1, 1), farEnd(y1, -1), nearEnd(y1, -1)], topColor);
  face([nearEnd(y0, 1), farEnd(y0, 1), farEnd(y0, -1), nearEnd(y0, -1)], underColor);
  face([nearEnd(y0, 1), farEnd(y0, 1), farEnd(y1, 1), nearEnd(y1, 1)], sideColor);
  face([nearEnd(y0, -1), farEnd(y0, -1), farEnd(y1, -1), nearEnd(y1, -1)], sideColor);
  face([nearEnd(y0, 1), nearEnd(y0, -1), nearEnd(y1, -1), nearEnd(y1, 1)], sideColor);
  face([farEnd(y0, 1), farEnd(y0, -1), farEnd(y1, -1), farEnd(y1, 1)], sideColor);
}
