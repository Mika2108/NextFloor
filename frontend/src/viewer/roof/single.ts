// The single roof over the top floor: flat or gable, over the bounding box of its rooms plus the outer walls and the overhang.

import { Color } from "three";
import type { Building, Floor } from "../../model.ts";
import { DEG, GeoBuffer, LineBuffer, pushPrism } from "../geo.ts";
import { EAVE, GABLE, RIDGE, ROOF, ROOF_TOP, THICK } from "./palette.ts";
import type { RoofGeometry } from "./types.ts";

/** The floor the single roof sits on: the highest one with rooms. */
export function roofFloor(b: Building): Floor | null {
  return b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3)).sort((p, q) => q.elevation - p.elevation)[0] ?? null;
}

type P3 = number[];

/** One roof over the top floor, in floor coordinates with y = 0 at the top of the floor's walls. */
export function buildSingleRoof(b: Building): RoofGeometry | null {
  const roof = b.settings.roof;
  const floor = roofFloor(b);
  if (!floor || !roof || roof.type === "none" || roof.type === "custom") return null;
  const xs = floor.rooms.flatMap((r) => r.points.map((p) => p[0]));
  const zs = floor.rooms.flatMap((r) => r.points.map((p) => p[1]));
  const margin = b.settings.wall_exterior + roof.overhang;
  const [x0, x1] = [Math.min(...xs) - margin, Math.max(...xs) + margin];
  const [z0, z1] = [Math.min(...zs) - margin, Math.max(...zs) + margin];
  const solid = new GeoBuffer();
  const lines = new LineBuffer();
  const result: RoofGeometry = { floor, base: floor.height, solid, lines, glass: new GeoBuffer() };

  if (roof.type === "flat") {
    const corners: [number, number][] = [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
    pushPrism(solid, corners, 0, 0.25, ROOF, ROOF_TOP, { bottom: true });
    corners.forEach(([ax, az], i) => {
      const [bx, bz] = corners[(i + 1) % 4];
      lines.seg([ax, 0.252, az], [bx, 0.252, bz], RIDGE);
      lines.seg([ax, 0, az], [bx, 0, bz], EAVE);
    });
    return result;
  }

  // a gable: the ridge runs along the longer side, or along the shorter one (terraced houses)
  const longerAlongX = x1 - x0 >= z1 - z0;
  const alongX = roof.ridge === "short" ? !longerAlongX : longerAlongX;
  const half = (alongX ? z1 - z0 : x1 - x0) / 2;
  const slope = Math.tan(roof.pitch * DEG);
  const rise = half * slope;
  // coordinates: u along the ridge, v across (from -half to +half)
  const at = (u: number, v: number, y: number): P3 => (alongX ? [u, y, (z0 + z1) / 2 + v] : [(x0 + x1) / 2 + v, y, u]);
  const [u0, u1] = alongX ? [x0, x1] : [z0, z1];
  const topColor = new Color(ROOF_TOP);
  const underColor = new Color(ROOF);
  const quad = (a: P3, b2: P3, c: P3, d: P3, color: Color) => {
    solid.tri(a, b2, c, color);
    solid.tri(a, c, d, color);
  };
  for (const side of [-1, 1]) {
    // the upper and lower face of the slope, and the eave and rake faces of its thickness
    quad(at(u0, side * half, 0), at(u1, side * half, 0), at(u1, 0, rise), at(u0, 0, rise), topColor);
    quad(at(u0, side * half, -THICK), at(u0, 0, rise - THICK), at(u1, 0, rise - THICK), at(u1, side * half, -THICK), underColor);
    quad(at(u0, side * half, -THICK), at(u1, side * half, -THICK), at(u1, side * half, 0), at(u0, side * half, 0), underColor);
    for (const u of [u0, u1]) quad(at(u, side * half, -THICK), at(u, side * half, 0), at(u, 0, rise), at(u, 0, rise - THICK), underColor);
    lines.seg(at(u0, side * half, 0), at(u1, side * half, 0), EAVE);
    for (const u of [u0, u1]) lines.seg(at(u, side * half, 0), at(u, 0, rise), EAVE);
  }
  // gable walls above the outer walls, set back by the overhang
  const inset = roof.overhang;
  const gableColor = new Color(GABLE);
  const gableHalf = half - inset;
  const gableRise = gableHalf * slope;
  for (const u of [u0 + inset, u1 - inset]) {
    solid.tri(at(u, -gableHalf, -THICK), at(u, gableHalf, -THICK), at(u, 0, gableRise - THICK), gableColor);
    solid.tri(at(u, gableHalf, -THICK), at(u, -gableHalf, -THICK), at(u, 0, gableRise - THICK), gableColor);
  }
  lines.seg(at(u0, 0, rise + 0.004), at(u1, 0, rise + 0.004), RIDGE);
  return result;
}
