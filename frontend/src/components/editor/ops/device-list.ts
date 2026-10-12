// What the device list of a room needs to know: which entities are placed in it, which in another room, and how options are ranked.

import { isLamp, pointInPolygon, type Building, type Floor, type Room } from "../../../model.ts";

/** An entity placed in the room: as a device pin, or as the light of a lamp. */
export function placedInRoom(floor: Floor | undefined, room: Room): Set<string> {
  const placed = new Set<string>();
  for (const p of floor?.placements ?? []) if (pointInPolygon([p.x, p.z], room.points)) placed.add(p.entity_id);
  for (const m of floor?.furniture ?? []) if (isLamp(m.type) && m.entity && pointInPolygon([m.x, m.z], room.points)) placed.add(m.entity);
  return placed;
}

/** Entities that are placed in a room other than this one, with the name of that room: placing them here moves them. */
export function placedElsewhere(doc: Building, room: Room): Map<string, string> {
  const elsewhere = new Map<string, string>();
  for (const floor of doc.floors) {
    const spots: [string, number, number][] = [
      ...floor.placements.map((p): [string, number, number] => [p.entity_id, p.x, p.z]),
      ...floor.furniture.filter((m) => isLamp(m.type) && m.entity).map((m): [string, number, number] => [m.entity!, m.x, m.z]),
    ];
    for (const [id, x, z] of spots) {
      const home = floor.rooms.find((r) => pointInPolygon([x, z], r.points));
      if (home && home.id !== room.id) elsewhere.set(id, home.name);
    }
  }
  return elsewhere;
}

/** A list with an id added, or removed when it is there. Empty lists give undefined in the saved plan, so callers decide. */
export const withToggled = (list: readonly string[] | undefined, id: string): string[] => ((list ?? []).includes(id) ? (list ?? []).filter((x) => x !== id) : [...(list ?? []), id]);

/** Whether an entity matches what was typed in the search box: its name (without the room's name), its id or its area. Empty matches all. */
export function matchesQuery(query: string, ...texts: (string | undefined)[]): boolean {
  const q = query.trim().toLowerCase();
  return !q || texts.some((t) => (t ?? "").toLowerCase().includes(q));
}

/** Options for a climate sensor ordered by how likely they are the room's own: its area first, then the dedicated sensors of a room. */
export function rankedBy<T extends { id: string }>(options: readonly T[], rank: (id: string) => number): T[] {
  return options.map((o) => ({ o, r: rank(o.id) })).sort((a, b) => a.r - b.r).map(({ o }) => o);
}

/** Takes the first `limit` entries of areas' entity lists in order, and reports how many did not fit. */
export function takeFirst<T>(groups: readonly { ids: readonly T[] }[], limit: number): { taken: T[][]; left: number } {
  let room = limit;
  let left = 0;
  const taken = groups.map((g) => {
    const part = g.ids.slice(0, Math.max(0, room));
    room -= part.length;
    left += g.ids.length - part.length;
    return [...part];
  });
  return { taken, left };
}
