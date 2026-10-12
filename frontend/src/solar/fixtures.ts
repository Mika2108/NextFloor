// Builders for the solar tests.

import { emptyBuilding, newFloor, type Building, type SolarField } from "../model.ts";

export const near = (a: number, b: number, eps = 1e-6) => {
  if (Math.abs(a - b) >= eps) throw new Error(`${a} is not close to ${b}`);
};

/** A one-floor house of 12 × 7 m with 2.6 m high walls and the given roof. */
export function cottage(roof: Building["settings"]["roof"], elevation = 0): Building {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("g", "G", elevation), height: 2.6, rooms: [{ id: "r", name: "R", area_id: null, points: [[0, 0], [12, 0], [12, 7], [0, 7]], floor_material: "wood" }] }];
  b.settings = { ...b.settings, wall_exterior: 0.3, roof };
  return b;
}

export const field = (face: string, extra: Partial<SolarField> = {}): SolarField => ({ id: "f", face, u: 0.5, v: 0.5, rows: 1, cols: 2, portrait: true, ...extra });
