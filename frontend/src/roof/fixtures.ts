// Builders for the roof tests.

import type { Room, RoofSection } from "../model.ts";

export const near = (a: number, b: number, eps = 1e-6) => {
  if (Math.abs(a - b) >= eps) throw new Error(`${a} is not close to ${b}`);
};

export const rectRoom = (id: string, x0: number, z0: number, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" });

/** A 12 × 8 m gable with 45° slopes and its eaves at 3 m; the ridge runs along x. */
export const gableSection = (patch: Partial<RoofSection> = {}): RoofSection => ({
  id: "s",
  x0: 0,
  z0: 0,
  x1: 12,
  z1: 8,
  shape: "gable",
  axis: "x",
  eave_a: 3,
  eave_b: 3,
  pitch_a: 45,
  pitch_b: 45,
  base: 3,
  ...patch,
});
