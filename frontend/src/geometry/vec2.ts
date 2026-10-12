// Two-component vector helpers for the plan geometry.

import type { Vec2 } from "../model.ts";

export const sub = (p: Vec2, q: Vec2): Vec2 => [p[0] - q[0], p[1] - q[1]];
export const add = (p: Vec2, q: Vec2): Vec2 => [p[0] + q[0], p[1] + q[1]];
export const scale = (p: Vec2, k: number): Vec2 => [p[0] * k, p[1] * k];
export const dot = (p: Vec2, q: Vec2): number => p[0] * q[0] + p[1] * q[1];
/** The z component of the 3D cross product: positive when q lies counter-clockwise from p. */
export const cross = (p: Vec2, q: Vec2): number => p[0] * q[1] - p[1] * q[0];
export const norm = (p: Vec2): number => Math.hypot(p[0], p[1]);
export const unit = (p: Vec2): Vec2 => {
  const l = norm(p) || 1;
  return [p[0] / l, p[1] / l];
};
/** Normal on the left of a direction (the side of the walls' "left" faces). */
export const leftOf = (d: Vec2): Vec2 => [-d[1], d[0]];
export const rightOf = (d: Vec2): Vec2 => [d[1], -d[0]];
