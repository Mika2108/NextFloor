// The floors of the house: adding one (also from a floor of Home Assistant's registry), ordering them, and finding what is still to be
// connected to Home Assistant.

import { floorElevation, newFloor, uid, type Building, type Floor } from "../../../model.ts";
import type { HassArea, HassFloor } from "../../../types.ts";

/** A new floor, named after a Home Assistant floor when it comes from one, and placed at that floor's level or on top of the house. */
export function newFloorFor(doc: Building, from: HassFloor | null, names: { first: string; next(n: number): string }): Floor {
  const count = doc.floors.length;
  const name = from?.name ?? (count === 0 ? names.first : names.next(count));
  return { ...newFloor(uid("floor"), name, floorElevation(doc.floors, from?.level)), ha_floor: from?.floor_id ?? null };
}

/** The floors with a new one slotted in below the first floor that lies higher: floors are kept from bottom to top. */
export function floorsWith(floors: readonly Floor[], added: Floor): Floor[] {
  const above = floors.findIndex((f) => f.elevation > added.elevation);
  const at = above < 0 ? floors.length : above;
  return [...floors.slice(0, at), added, ...floors.slice(at)];
}

/** The floors with the one of this id swapped with its neighbour above (1) or below (-1). Unchanged at the ends. */
export function floorsSwapped(floors: readonly Floor[], id: string, direction: -1 | 1): Floor[] {
  const from = floors.findIndex((f) => f.id === id);
  const to = from + direction;
  if (from < 0 || to < 0 || to >= floors.length) return [...floors];
  const next = [...floors];
  [next[from], next[to]] = [next[to], next[from]];
  return next;
}

/** Floors of Home Assistant that no floor of the plan stands for yet, lowest first. */
export function freeHaFloors(doc: Building, registry: Readonly<Record<string, HassFloor>> | undefined): HassFloor[] {
  const used = new Set(doc.floors.map((f) => f.ha_floor));
  return Object.values(registry ?? {})
    .filter((f) => !used.has(f.floor_id))
    .sort((a, b) => (a.level ?? 99) - (b.level ?? 99) || a.name.localeCompare(b.name));
}

/** Areas on the Home Assistant floor of this floor that have no room in the plan yet, by name. */
export function unplacedAreas(doc: Building, floor: Floor, areas: Readonly<Record<string, HassArea>> | undefined): HassArea[] {
  if (!floor.ha_floor) return [];
  const placed = new Set(doc.floors.flatMap((f) => f.rooms.map((r) => r.area_id)));
  return Object.values(areas ?? {})
    .filter((a) => a.floor_id === floor.ha_floor && !placed.has(a.area_id))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** The Home Assistant floors a floor may be linked to: its own and the ones no other floor uses. */
export function linkableHaFloors(doc: Building, floor: Floor, registry: Readonly<Record<string, HassFloor>> | undefined): HassFloor[] {
  return Object.values(registry ?? {}).filter((f) => f.floor_id === floor.ha_floor || !doc.floors.some((other) => other.ha_floor === f.floor_id));
}
