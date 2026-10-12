// Moving and turning a whole floor, or the whole house, as one piece: rooms, furniture, devices, outdoor areas, free walls and the
// background picture. Roof sections and the meter belong to the house and follow when all floors move.

import type { Building, Floor, Vec2 } from "../../../model.ts";

type PointMap = (p: Vec2) => Vec2;

const thousandths = (v: number) => Math.round(v * 1000) / 1000;
const quarter = (degrees: number) => (degrees + 90) % 360;

/** Applies a map of plan points to everything on a floor. With `turns`, the things that face somewhere turn a quarter as well. */
function mapFloor(floor: Floor, at: PointMap, turns: boolean): void {
  const place = <T extends { x: number; z: number }>(thing: T) => ([thing.x, thing.z] = at([thing.x, thing.z]));
  for (const room of floor.rooms) room.points = room.points.map(at);
  for (const item of floor.furniture) {
    place(item);
    if (turns) item.rotation = quarter(item.rotation);
  }
  for (const placed of floor.placements) {
    place(placed);
    if (turns) placed.rotation = quarter(placed.rotation ?? 0);
  }
  for (const area of floor.outdoor) area.points = area.points.map(at);
  for (const wall of floor.walls ?? []) [wall.a, wall.b] = [at(wall.a), at(wall.b)];
  if (floor.background) {
    place(floor.background);
    if (turns) floor.background.rotation = quarter(floor.background.rotation ?? 0);
  }
}

/** Roof sections (as the box around their moved corners) and the meter, which belong to the house and not to a floor. */
function mapHouseExtras(doc: Building, at: PointMap): void {
  for (const section of doc.settings.roof.sections ?? []) {
    const corners = [at([section.x0, section.z0]), at([section.x1, section.z0]), at([section.x1, section.z1]), at([section.x0, section.z1])];
    const [xs, zs] = [corners.map((c) => c[0]), corners.map((c) => c[1])];
    [section.x0, section.x1, section.z0, section.z1] = [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)];
    if (section.points) section.points = section.points.map(at);
  }
  const meter = doc.energy.meter;
  if (meter) [meter.x, meter.z] = at([meter.x, meter.z]);
}

/** What a move or turn covers: one floor, or every floor with the roof and meter. */
export interface Scope {
  floorId: string | null;
  allFloors: boolean;
}

function apply(doc: Building, scope: Scope, at: PointMap, turns: boolean): void {
  if (scope.allFloors) {
    for (const floor of doc.floors) mapFloor(floor, at, turns);
    mapHouseExtras(doc, at);
  } else {
    const floor = doc.floors.find((f) => f.id === scope.floorId);
    if (floor) mapFloor(floor, at, turns);
  }
}

/** Moves everything in the scope by (dx, dz) metres. */
export function translate(doc: Building, scope: Scope, dx: number, dz: number): void {
  apply(doc, scope, ([x, z]) => [thousandths(x + dx), thousandths(z + dz)], false);
}

/** The middle of the box around the rooms of the scope, or null when there are none. */
export function pivotOf(doc: Building, scope: Scope): Vec2 | null {
  const floors = scope.allFloors ? doc.floors : doc.floors.filter((f) => f.id === scope.floorId);
  const points = floors.flatMap((f) => f.rooms.flatMap((r) => r.points));
  if (points.length === 0) return null;
  const [xs, zs] = [points.map((p) => p[0]), points.map((p) => p[1])];
  return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...zs) + Math.max(...zs)) / 2];
}

/** Turns everything in the scope a quarter clockwise about the middle of its rooms, for a floor that was drawn the wrong way round. */
export function turnQuarterClockwise(doc: Building, scope: Scope): boolean {
  const pivot = pivotOf(doc, scope);
  if (!pivot) return false;
  const [cx, cz] = pivot;
  apply(doc, scope, ([x, z]) => [thousandths(cx - (z - cz)), thousandths(cz + (x - cx))], true);
  return true;
}
