// Colours and the fake light of the 3D scene.

import { Color } from "three";
import type { Vec2 } from "../../model.ts";

export const DEG = Math.PI / 180;

/** A colour scaled by k, each channel capped at 1 (Color.multiplyScalar alone can overflow). */
export function shade(hex: number, k: number): Color {
  const c = new Color(hex).multiplyScalar(k);
  return c.setRGB(Math.min(1, c.r), Math.min(1, c.g), Math.min(1, c.b));
}

/** Edge lines are added on top of the scene, so their colours are pre-scaled to the strength they should end up at. */
export const EDGE_TOP = shade(0x37e0ff, 0.95);
export const EDGE_CUT = shade(0x37e0ff, 1);
export const EDGE_SOFT = shade(0x5b7cff, 0.34);
export const EDGE_BASE = shade(0x5b7cff, 0.22);

/** The direction (x, z) the fake light comes from: faces turned towards it come out a bit brighter. */
export const LIGHT: Vec2 = [-0.55, 0.83];

/** Brightness of a wall side by height: dark at the foot (baked occlusion), full from 1.6 m up. */
export const heightShade = (y: number): number => 0.5 + 0.5 * Math.min(1, Math.max(0, y / 1.6));

/** How strongly a vertical face along (dx, dz) is lit, between 0.8 and 1.08. Neighbouring faces differ a little, so they separate. */
export function sideLight(dx: number, dz: number): number {
  const length = Math.hypot(dx, dz);
  return 0.8 + 0.28 * (((dz / length) * LIGHT[0] - (dx / length) * LIGHT[1] + 1) / 2);
}
