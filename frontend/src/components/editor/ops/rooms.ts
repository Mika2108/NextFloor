// Rooms: making, copying and removing them, moving a corner or the whole rectangle, and the ceiling lights of a room.

import { bounds, pointInPolygon, uid, type Floor, type Placement, type Room, type Vec2 } from "../../../model.ts";
import { kindOf } from "../../../devices.ts";

const thousandths = (v: number) => Math.round(v * 1000) / 1000;
const rounded = (points: readonly Vec2[]): Vec2[] => points.map(([x, z]) => [thousandths(x), thousandths(z)]);

/** A new room on the given outline, with a wooden floor and no area. */
export function newRoom(points: readonly Vec2[], name: string): Room {
  return { id: uid("room"), name, area_id: null, points: rounded(points), floor_material: "wood" };
}

/** A copy of a room half a metre to the south east, so that it can be told from the original. */
export function copyOfRoom(room: Room): Room {
  return { ...structuredClone(room), id: uid("room"), points: rounded(room.points.map(([x, z]) => [x + 0.5, z + 0.5])) };
}

/** Takes a room off the floor with the devices standing in it and its door and window openings. Openings in free walls stay. */
export function removeRoom(floor: Floor, roomId: string): void {
  const room = floor.rooms.find((r) => r.id === roomId);
  floor.rooms = floor.rooms.filter((r) => r.id !== roomId);
  floor.openings = floor.openings.filter((o) => o.room_id !== roomId || o.wall);
  if (room) floor.placements = floor.placements.filter((p) => !pointInPolygon([p.x, p.z], room.points));
}

/**
 * Takes a corner out of a room. The two edges at the corner become one, so openings on them cannot keep their place and are removed,
 * and the edges after the corner move up one place. A room keeps at least three corners.
 */
export function removeCorner(floor: Floor, roomId: string, index: number): boolean {
  const room = floor.rooms.find((r) => r.id === roomId);
  if (!room || room.points.length <= 3) return false;
  const before = (index - 1 + room.points.length) % room.points.length;
  room.points.splice(index, 1);
  // per-edge lists lose the edge that started at the removed corner
  room.wall_heights?.splice(index, 1);
  room.wall_thickness?.splice(index, 1);
  const onRoom = (o: { room_id: string; wall?: string | null }) => o.room_id === roomId && !o.wall;
  floor.openings = floor.openings
    .filter((o) => !(onRoom(o) && (o.edge === index || o.edge === before)))
    .map((o) => (onRoom(o) && o.edge > index ? { ...o, edge: o.edge - 1 } : o));
  return true;
}

export type RectField = "x" | "z" | "w" | "d";

/** The outline of a room as a rectangle after one of its box values (left, top, width, depth) was typed. Null when the value is no use. */
export function rectangleAfter(room: Room, field: RectField, value: number): Vec2[] | null {
  if (!Number.isFinite(value)) return null;
  const box = bounds(room.points);
  let { x0, z0, x1, z1 } = box;
  if (field === "x") [x0, x1] = [value, value + (x1 - x0)];
  else if (field === "z") [z0, z1] = [value, value + (z1 - z0)];
  else if (value > 0.05) {
    if (field === "w") x1 = x0 + value;
    else z1 = z0 + value;
  }
  return rounded([[x0, z0], [x1, z0], [x1, z1], [x0, z1]]);
}

/** The outline of a room with one coordinate of one corner changed. */
export function cornerMoved(room: Room, index: number, axis: 0 | 1, value: number): Vec2[] | null {
  if (!Number.isFinite(value) || index < 0 || index >= room.points.length) return null;
  return room.points.map((p, i): Vec2 => (i === index ? (axis === 0 ? [thousandths(value), p[1]] : [p[0], thousandths(value)]) : [p[0], p[1]]));
}

const GENERIC_NAME = /^(Raum|Room) \d+$/;

/**
 * What choosing a Home Assistant area does to a room: it gets the area, and a name that was only a placeholder ("Room 3", or the
 * name of some area) takes the area's name.
 */
export function areaChoice(room: Room, areaId: string, areas: Readonly<Record<string, { name: string }>>): Partial<Room> {
  const area = areaId ? areas[areaId] : undefined;
  const placeholder = !room.name || GENERIC_NAME.test(room.name) || Object.values(areas).some((a) => a.name === room.name);
  return { area_id: areaId || null, ...(area && placeholder ? { name: area.name } : {}) };
}

/**
 * Where the ceiling lights of a room go to light it evenly: one per cell of a grid over the room's box. A last row that is not full
 * is spread over the whole width as well. Nothing for fewer than two lights.
 */
export function evenCeilingLights(room: Room, placements: readonly Placement[]): { entityId: string; x: number; z: number }[] {
  const lights = placements.filter((p) => kindOf(p.entity_id) === "light" && (p.mount ?? "ceiling") === "ceiling" && pointInPolygon([p.x, p.z], room.points));
  if (lights.length < 2) return [];
  const box = bounds(room.points);
  const [width, depth] = [box.x1 - box.x0, box.z1 - box.z0];
  const columns = Math.max(1, Math.round(Math.sqrt((lights.length * width) / Math.max(0.1, depth))));
  const rows = Math.ceil(lights.length / columns);
  return lights.map((light, i) => {
    const row = Math.floor(i / columns);
    const inRow = row === rows - 1 ? lights.length - columns * (rows - 1) : columns;
    const column = i - row * columns;
    return { entityId: light.entity_id, x: thousandths(box.x0 + (width / inRow) * (column + 0.5)), z: thousandths(box.z0 + (depth / rows) * (row + 0.5)) };
  });
}
