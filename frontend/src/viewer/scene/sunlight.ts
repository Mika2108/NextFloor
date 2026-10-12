// Patches of sunlight that fall through the windows onto the floor of the room behind them. A patch is laid in small cells and only
// the cells whose centre lies in the room are drawn, so it never crosses a wall or leaves the house.

import { Color } from "three";
import { pointInPolygon, type Floor } from "../../model.ts";
import type { FloorGeometry } from "../build.ts";
import { DEG, GeoBuffer } from "../geo.ts";
import type { OpeningState } from "../openings.ts";
import type { SunState } from "./types.ts";

/** Longest a patch reaches into the room (metres). */
const MAX_REACH = 7;
const CELL_DEPTH = 0.25;
const CELL_WIDTH = 0.3;
/** The sun must be this many degrees above the horizon to shine in. */
const MIN_ELEVATION = 2;
/** Colour of the patch next to the window; the far end is 45 % of it. */
const PATCH_COLOUR: [number, number, number] = [1, 0.82, 0.55];
const FAR_SHARE = 0.45;

type OpeningInfo = FloorGeometry["openings"][number];

/** A signature of what the patches depend on, so they are rebuilt only when it changes. */
export function sunSignature(sun: SunState | null, northDegrees: number, cloud: number, states: Iterable<OpeningState>): string {
  if (!sun) return "";
  return `${sun.elevation.toFixed(1)},${sun.azimuth.toFixed(1)},${northDegrees * DEG},${cloud.toFixed(2)},${[...states].map((o) => (o.cover ?? 0).toFixed(2)).join(",")}`;
}

/** The horizontal direction towards the sun in plan coordinates (x right, z down, "up" is -z). */
export const directionToSun = (azimuthDegrees: number, northDegrees: number): [number, number] => [Math.sin((northDegrees + azimuthDegrees) * DEG), -Math.cos((northDegrees + azimuthDegrees) * DEG)];

/** How much sun gets through: full from 12° up, and clouds take most of it. */
export const daylight = (elevationDegrees: number, cloud: number): number => Math.min(1, elevationDegrees / 12) * (1 - 0.8 * cloud);

/** Whether a window faces the sun, and how directly. */
export const facingSun = (info: OpeningInfo, toSun: readonly [number, number]): number => -info.toRoom[0] * toSun[0] + -info.toRoom[1] * toSun[1];

export interface SunInputs {
  floor: Floor;
  openings: readonly OpeningInfo[];
  states: ReadonlyMap<string, OpeningState>;
  sun: SunState | null;
  northDegrees: number;
  cloud: number;
}

export function sunlightPatches({ floor, openings, states, sun, northDegrees, cloud }: SunInputs): GeoBuffer {
  const buffer = new GeoBuffer();
  if (!sun || sun.elevation <= MIN_ELEVATION || cloud >= 0.97) return buffer;
  const day = daylight(sun.elevation, cloud);
  const toSun = directionToSun(sun.azimuth, northDegrees);
  // a sun low in the sky throws a patch far into the room
  const reach = 1 / Math.tan(sun.elevation * DEG);
  for (const info of openings) {
    if (info.opening.type !== "window" || !info.exterior) continue;
    const facing = facingSun(info, toSun);
    if (facing < 0.05) continue;
    // a blind lowered over the window shortens the lit part of it
    const top = info.top - (states.get(info.opening.id)?.cover ?? 0) * (info.top - info.sill);
    if (top - info.sill < 0.05) continue;
    const room = floor.rooms.find((r) => r.id === info.opening.room_id);
    if (!room || room.points.length < 3) continue;
    // where a point of the window (along it at `along`, at height `y`) lands on the floor
    const landing = (along: number, y: number): [number, number, number] => {
      const d = Math.min(MAX_REACH, y * reach);
      return [
        info.start[0] + info.axis[0] * along + info.toRoom[0] * info.faceRoom - toSun[0] * d,
        0.02,
        info.start[1] + info.axis[1] * along + info.toRoom[1] * info.faceRoom - toSun[1] * d,
      ];
    };
    const strength = 0.14 * day * Math.min(1, facing * 1.5);
    const near = new Color(PATCH_COLOUR[0] * strength, PATCH_COLOUR[1] * strength, PATCH_COLOUR[2] * strength);
    const far = near.clone().multiplyScalar(FAR_SHARE);
    const rows = Math.max(1, Math.ceil(Math.min(MAX_REACH, top * reach) / CELL_DEPTH));
    const columns = Math.max(1, Math.ceil(info.width / CELL_WIDTH));
    const height = top - info.sill;
    for (let row = 0; row < rows; row++) {
      const [y0, y1] = [info.sill + (height * row) / rows, info.sill + (height * (row + 1)) / rows];
      const [colourA, colourB] = [near.clone().lerp(far, row / rows), near.clone().lerp(far, (row + 1) / rows)];
      for (let column = 0; column < columns; column++) {
        const [s0, s1] = [(info.width * column) / columns, (info.width * (column + 1)) / columns];
        const middle = landing((s0 + s1) / 2, (y0 + y1) / 2);
        if (!pointInPolygon([middle[0], middle[2]], room.points)) continue;
        const [a, b, c, d] = [landing(s0, y0), landing(s1, y0), landing(s1, y1), landing(s0, y1)];
        buffer.tri(a, b, c, colourA, colourA, colourB);
        buffer.tri(a, c, d, colourA, colourB, colourB);
      }
    }
  }
  return buffer;
}
