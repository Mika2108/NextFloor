// The facts behind the house's answers: which lights of the plan are on, and which windows, doors, garage doors and blinds stand open.

import { areaEntities, entityName, kindOf, openingState, type FurnitureLinks, type OpeningEntities } from "../devices.ts";
import { isLamp, pointInPolygon, type Building, type Opening } from "../model.ts";
import type { HomeAssistant } from "../types.ts";

export interface Found {
  name: string;
  room: string;
  floorId: string;
  roomId: string | null;
}

/** Every light of the plan with the room it belongs to: of the rooms' areas, placed, or linked to a lamp. */
export function planLights(hass: HomeAssistant, b: Building, links: ReadonlyMap<string, FurnitureLinks>): Map<string, Found> {
  const out = new Map<string, Found>();
  for (const floor of b.floors) {
    for (const room of floor.rooms) {
      const at = (id: string) => !out.has(id) && out.set(id, { name: entityName(hass, id), room: room.name, floorId: floor.id, roomId: room.id });
      for (const id of areaEntities(hass, room.area_id)) if (kindOf(id) === "light") at(id);
      for (const p of floor.placements) if (kindOf(p.entity_id) === "light" && room.points.length >= 3 && pointInPolygon([p.x, p.z], room.points)) at(p.entity_id);
      for (const f of floor.furniture) {
        const e = links.get(f.id)?.entity;
        if (e && isLamp(f.type) && room.points.length >= 3 && pointInPolygon([f.x, f.z], room.points)) at(e);
      }
    }
  }
  return out;
}

/** The lights of the plan that are on now. */
export const lightsOn = (hass: HomeAssistant, b: Building, links: ReadonlyMap<string, FurnitureLinks>): Found[] => [...planLights(hass, b, links)].filter(([id]) => hass.states[id]?.state === "on").map(([, f]) => f);

/** Windows, doors and garage doors that stand open or tilted (as their sensors say), named by their room. */
export function openThings(hass: HomeAssistant, b: Building, links: Map<string, OpeningEntities>, words: Record<Opening["type"], string>): Found[] {
  const out: Found[] = [];
  for (const floor of b.floors) {
    for (const o of floor.openings) {
      const link = links.get(o.id);
      if (!link || !(link.contact || link.tilt || link.contact2 || link.cover)) continue;
      const s = openingState(hass, link, o.type);
      const open = o.type === "garage" ? s.sensed && (s.cover ?? 1) < 0.95 : s.sensed && Math.max(s.open, s.tilt, s.open2, s.tilt2) >= 0.5 && (o.type !== "door" || !!link.contact);
      if (!open) continue;
      const room = floor.rooms.find((r) => r.id === o.room_id);
      out.push({ name: words[o.type], room: room?.name ?? "", floorId: floor.id, roomId: room?.id ?? null });
    }
  }
  return out;
}
