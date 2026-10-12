// Changes the panel makes to the plan while furnishing in 3D. Each one takes a building and returns a changed copy, so the caller
// only has to hand the result on to be saved.

import { keepInRoom, snapToWall } from "../geometry/snap.ts";
import type { Building, Floor, Furniture, Placement } from "../model.ts";

type FloorOf<T> = (item: T, floor: Floor) => void;

/** A copy of the building in which the furniture item with this id has been changed. */
export function changeFurniture(building: Building, id: string, change: FloorOf<Furniture>): Building {
  const next = structuredClone(building);
  for (const floor of next.floors) {
    const item = floor.furniture.find((f) => f.id === id);
    if (item) change(item, floor);
  }
  return next;
}

/** A copy of the building in which the placed device of this entity has been changed. */
export function changePlacement(building: Building, entityId: string, change: FloorOf<Placement>): Building {
  const next = structuredClone(building);
  for (const floor of next.floors) {
    const placed = floor.placements.find((p) => p.entity_id === entityId);
    if (placed) change(placed, floor);
  }
  return next;
}

export function withoutFurniture(building: Building, id: string): Building {
  const next = structuredClone(building);
  for (const floor of next.floors) floor.furniture = floor.furniture.filter((f) => f.id !== id);
  return next;
}

export function withoutPlacement(building: Building, entityId: string): Building {
  const next = structuredClone(building);
  for (const floor of next.floors) floor.placements = floor.placements.filter((p) => p.entity_id !== entityId);
  return next;
}

/** A device dragged to (x, z) stays in the room it was in: no dragging through walls. */
export function dragDevice(building: Building, entityId: string, x: number, z: number): Building {
  return changePlacement(building, entityId, (placed, floor) => {
    [placed.x, placed.z] = keepInRoom(floor, placed.x, placed.z, x, z);
  });
}

/** Furniture dragged to (x, z) stays in its room, and near a wall it turns its back to it and sits flush, as in the editor. */
export function dragFurniture(building: Building, id: string, x: number, z: number): Building {
  const wall = building.settings.wall_interior ?? 0.12;
  return changeFurniture(building, id, (item, floor) => {
    [item.x, item.z] = keepInRoom(floor, item.x, item.z, x, z);
    const snapped = snapToWall(floor, item, wall);
    if (snapped) Object.assign(item, snapped);
  });
}

/** An angle in degrees turned by `delta`, kept within 0 to 360. */
export const turned = (degrees: number, delta: number): number => (((degrees + delta) % 360) + 360) % 360;

/** Cameras turn in finer steps than lamps, as their wedge shows where they look. */
export const turnStepFor = (kind: string | null): number => (kind === "camera" ? 15 : 45);

/** A number typed into a size field: a decimal comma works too. NaN when it is not a number. */
export const parseTyped = (text: string): number => Number.parseFloat(text.replace(",", "."));

/** Rounded to the given number of decimals, for what a size field shows and stores. */
export const rounded = (value: number, decimals: number): number => Math.round(value * 10 ** decimals) / 10 ** decimals;
