// A grid of ceiling spots in a room, planned in the side panel and placed in one go.

import { FURNITURE_SIZE, spotGrid, uid, bounds, type Furniture, type FurnitureType, type Room } from "../../../model.ts";
import type { SpotDraft } from "../side-state.ts";

/** The spot types the form offers. */
export const SPOT_TYPES = ["lamp_downlight", "lamp_spot", "lamp_panel", "lamp_ceiling"] as const satisfies readonly FurnitureType[];

/** Roughly one spot every 1.2 m in each direction, following the first light of the room's area. */
export function suggestedSpots(room: Room, lightsOfRoom: readonly string[]): SpotDraft {
  const box = bounds(room.points);
  return {
    type: "lamp_downlight",
    rows: Math.max(1, Math.round((box.z1 - box.z0) / 1.2)),
    cols: Math.max(1, Math.round((box.x1 - box.x0) / 1.2)),
    entity: lightsOfRoom[0] ?? null,
  };
}

/** The spots as furniture. Every spot follows the same light, as spots on one dimmer do; "none" means not linked. */
export function spotItems(room: Room, draft: SpotDraft): Furniture[] {
  const [w, d, h] = FURNITURE_SIZE[draft.type];
  return spotGrid(room, draft.rows, draft.cols).map(([x, z]) => ({ id: uid("furniture"), type: draft.type, x, z, rotation: 0, w, d, h, variant: null, entity: draft.entity ?? "none", power: null }));
}

/** A count typed for rows or columns, kept within 1 to 12. */
export const spotCount = (value: number): number => Math.max(1, Math.min(12, Math.round(value)));
