// Where a new energy device goes. A wallbox belongs in the garage, an inverter or battery in the utility room, a meter in the
// utility room or the hall; the device stands against the room's longest free wall, and the grid connection outside the house.

import { snapToWall } from "../../../geometry/snap.ts";
import { centroid, pointInPolygon, signedArea, uid, type Building, type Floor, type Furniture, type Room, type Vec2 } from "../../../model.ts";
import { furnitureSize } from "../../../packs.ts";
import { suggestGridSpot } from "../../../energy.ts";

const GARAGE = /garage|carport/;
const UTILITY = /hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/;
const HALL = /flur|diele|eingang|hall|entr|lobby/;

/** How far in front of the wall the device is dropped before it snaps flush against it. */
const WALL_GAP = 0.25;

const thousandths = (v: number) => Math.round(v * 1000) / 1000;

export interface EnergySpotContext {
  /** The text a room is recognised by: its name and the name of its Home Assistant area. */
  roomLabel(room: Room): string;
  /** The room selected in the editor, tried when no better room is found. */
  selected?: Room;
  /** Where to put things when the plan gives no hint (the middle of what is on screen). */
  fallback: Vec2;
}

/** The room a device of this type belongs in, or the selected room, or the largest one. */
export function roomForEnergyDevice(type: string, floor: Floor, ctx: EnergySpotContext): Room | undefined {
  const rooms = floor.rooms.filter((r) => r.points.length >= 3);
  const named = (pattern: RegExp) => rooms.find((r) => pattern.test(ctx.roomLabel(r).toLowerCase()));
  const parkedIn = rooms.find((r) => floor.furniture.some((m) => m.type === "parking" && pointInPolygon([m.x, m.z], r.points)));
  const garage = named(GARAGE) ?? parkedIn;
  const utility = named(UTILITY);
  const fitting = type === "wallbox" ? garage : type === "meter" ? (utility ?? named(HALL) ?? garage) : (utility ?? garage);
  const largest = [...rooms].sort((a, b) => Math.abs(signedArea(b.points)) - Math.abs(signedArea(a.points)))[0];
  return fitting ?? ctx.selected ?? largest;
}

/** The middle of the longest wall of the room and the direction into the room. Walls with an opening are avoided when others exist. */
export function longestFreeWall(room: Room, openedEdges: ReadonlySet<number>): { mid: Vec2; inward: Vec2 } | null {
  const [cx, cz] = centroid(room.points);
  const anyFree = room.points.some((_, i) => !openedEdges.has(i));
  let best: { mid: Vec2; inward: Vec2; length: number } | null = null;
  room.points.forEach((p, i) => {
    if (anyFree && openedEdges.has(i)) return;
    const q = room.points[(i + 1) % room.points.length];
    const length = Math.hypot(q[0] - p[0], q[1] - p[1]);
    if (best && length <= best.length) return;
    const mid: Vec2 = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
    // `+ 0` turns a negative zero into a plain zero
    let inward: Vec2 = [-(q[1] - p[1]) / length + 0, (q[0] - p[0]) / length + 0];
    if ((cx - mid[0]) * inward[0] + (cz - mid[1]) * inward[1] < 0) inward = [0 - inward[0], 0 - inward[1]];
    best = { mid, inward, length };
  });
  return best;
}

/** A new energy device of this type on the floor, placed where it belongs and snapped to the wall. */
export function newEnergyDevice(type: string, building: Building, floor: Floor, ctx: EnergySpotContext): Furniture {
  const [w, d, h] = furnitureSize(type);
  const base = { id: uid("furniture"), type, rotation: 0, w, d, h, variant: null };
  if (type === "grid_point") {
    // the grid connection starts just outside the wall nearest to the meter, and can be dragged from there
    const spot = suggestGridSpot(building);
    const [x, z] = spot ? [spot.x, spot.z] : ctx.fallback;
    return { ...base, x: thousandths(x), z: thousandths(z) };
  }
  const room = roomForEnergyDevice(type, floor, ctx);
  let [x, z] = room ? centroid(room.points) : ctx.fallback;
  if (room) {
    // in front of the longest wall, so that it snaps to that wall: from the middle of the room no wall is near enough
    const opened = new Set(floor.openings.filter((o) => o.room_id === room.id).map((o) => o.edge));
    const wall = longestFreeWall(room, opened);
    if (wall) [x, z] = [wall.mid[0] + wall.inward[0] * (d / 2 + WALL_GAP), wall.mid[1] + wall.inward[1] * (d / 2 + WALL_GAP)];
  }
  const item: Furniture = { ...base, x: thousandths(x), z: thousandths(z) };
  const snapped = room ? snapToWall({ ...floor, furniture: [...floor.furniture, item] }, item, building.settings.wall_interior) : null;
  return snapped ? { ...item, x: thousandths(snapped.x), z: thousandths(snapped.z), rotation: snapped.rotation } : item;
}
