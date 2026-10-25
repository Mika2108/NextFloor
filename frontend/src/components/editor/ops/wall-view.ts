// The wall view: one wall of a room seen from the front, with its doors and windows and the furniture standing or hanging against it,
// in wall coordinates (u along the wall from its left end as seen from the room, y up from the floor). Moving something in the view
// turns back into plan positions here.

import { dot, norm, sub } from "../../../geometry/vec2.ts";
import { pointInPolygon, signedArea, type Floor, type Furniture, type Opening, type Room, type Vec2 } from "../../../model.ts";
import { mountBase, packItem } from "../../../packs.ts";

/** One wall as the view sees it. */
export interface WallFrame {
  /** The left end of the wall seen from inside the room, and the direction to its right end. */
  origin: Vec2;
  along: Vec2;
  /** Into the room. */
  normal: Vec2;
  length: number;
  /** How far the wall's face lies inside the room edge (half an interior wall; 0 for an outer wall). */
  face: number;
  /** The wall's height at its left and right end. */
  heightLeft: number;
  heightRight: number;
}

export interface ElevationBox {
  id: string;
  kind: "opening" | "furniture";
  type: string;
  /** Left and right along the wall, bottom and top above the floor (metres). */
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  /** It can be moved up and down (wall-mounted items, windows), not only along. */
  lifts: boolean;
}

/** Furniture counts as standing against the wall when its back is at most this far from the wall face (metres). */
const NEAR = 0.15;
const angleBetween = (a: number, b: number) => Math.abs(((a - b + 540) % 360) - 180);

function edgeIsShared(floor: Floor, room: Room, a: Vec2, normal: Vec2): boolean {
  return floor.rooms.some(
    (other) =>
      other.id !== room.id &&
      other.points.some((p, k) => {
        const q = other.points[(k + 1) % other.points.length];
        return Math.abs(dot(sub(p, a), normal)) < 0.02 && Math.abs(dot(sub(q, a), normal)) < 0.02;
      }),
  );
}

/** The frame of a room's wall (edge points[edge] -> points[edge + 1]), turned so that its left end is on the left seen from inside. */
export function wallFrame(floor: Floor, room: Room, edge: number, wallInterior: number): WallFrame {
  const pts = room.points;
  const [a, b] = [pts[edge], pts[(edge + 1) % pts.length]];
  const length = norm(sub(b, a));
  const winding = signedArea(pts) >= 0 ? 1 : -1;
  const dir: Vec2 = [(b[0] - a[0]) / length, (b[1] - a[1]) / length];
  const normal: Vec2 = [-dir[1] * winding || 0, dir[0] * winding || 0];
  // standing in the room and looking at the wall, the left end is the one to the left of the normal
  const leftIsA = dir[0] * normal[1] - dir[1] * normal[0] > 0;
  const entry = room.wall_heights?.[edge];
  const full = room.ceiling ?? floor.height;
  const start = typeof entry === "number" ? entry : Array.isArray(entry) ? Math.max(...entry.map((h) => h ?? full)) : full;
  const slope = room.wall_slopes?.[edge];
  const end = typeof slope === "number" && typeof entry === "number" ? slope : start;
  return {
    origin: leftIsA ? a : b,
    along: leftIsA ? dir : [-dir[0], -dir[1]],
    normal,
    length,
    face: edgeIsShared(floor, room, a, normal) ? wallInterior / 2 : 0,
    heightLeft: leftIsA ? start : end,
    heightRight: leftIsA ? end : start,
  };
}

/** Where a point of the plan lies on the wall: along it from the left end, and its distance from the wall face into the room. */
export function onWall(frame: WallFrame, p: Vec2): { u: number; depth: number } {
  const rel = sub(p, frame.origin);
  return { u: dot(rel, frame.along), depth: dot(rel, frame.normal) - frame.face };
}

/** The middle of an opening in the plan. */
function openingCentre(floor: Floor, o: Opening): Vec2 | null {
  const room = floor.rooms.find((r) => r.id === o.room_id);
  if (!room || o.wall) return null;
  const [a, b] = [room.points[o.edge], room.points[(o.edge + 1) % room.points.length]];
  if (!a || !b) return null;
  const length = norm(sub(b, a)) || 1;
  return [a[0] + ((b[0] - a[0]) * o.offset) / length, a[1] + ((b[1] - a[1]) * o.offset) / length];
}

const isWallMounted = (f: Furniture): boolean => packItem(f.type)?.mount === "wall" || f.type === "lamp_wall" || f.mount_y != null;

/** The doors, windows and furniture of a wall, in wall coordinates. Furniture must stand in the room with its back to this wall. */
export function wallElevation(floor: Floor, room: Room, frame: WallFrame): ElevationBox[] {
  const boxes: ElevationBox[] = [];
  for (const o of floor.openings) {
    const centre = openingCentre(floor, o);
    if (!centre) continue;
    const { u, depth } = onWall(frame, centre);
    // the doors of this wall, also when the room on the other side owns them
    if (Math.abs(depth + frame.face) > 0.3 || u < -0.01 || u > frame.length + 0.01) continue;
    boxes.push({ id: o.id, kind: "opening", type: o.type, x0: u - o.width / 2, x1: u + o.width / 2, y0: o.sill, y1: o.sill + o.height, lifts: o.type === "window" });
  }
  const back = (Math.atan2(-frame.normal[0], frame.normal[1]) * 180) / Math.PI;
  for (const f of floor.furniture) {
    if (!pointInPolygon([f.x, f.z], room.points) || angleBetween(f.rotation, back) > 20) continue;
    const { u, depth } = onWall(frame, [f.x, f.z]);
    if (depth - f.d / 2 > NEAR || u < 0 || u > frame.length) continue;
    const y0 = mountBase(floor, f);
    boxes.push({ id: f.id, kind: "furniture", type: f.type, x0: u - f.w / 2, x1: u + f.w / 2, y0, y1: y0 + f.h, lifts: isWallMounted(f) });
  }
  return boxes.sort((p, q) => Number(p.kind === "furniture") - Number(q.kind === "furniture") || p.x0 - q.x0);
}

const mm = (v: number) => Math.round(v * 1000) / 1000;

/** A piece of furniture moved to `left` along the wall (its left side) and, when it hangs on the wall, to `bottom` above the floor. */
export function furnitureAt(frame: WallFrame, f: Furniture, left: number, bottom: number | null): Partial<Furniture> {
  const depth = onWall(frame, [f.x, f.z]).depth;
  const u = Math.min(frame.length - f.w / 2, Math.max(f.w / 2, left + f.w / 2));
  const at: Vec2 = [frame.origin[0] + frame.along[0] * u + frame.normal[0] * (depth + frame.face), frame.origin[1] + frame.along[1] * u + frame.normal[1] * (depth + frame.face)];
  return { x: mm(at[0]), z: mm(at[1]), ...(bottom !== null && isWallMounted(f) ? { mount_y: mm(Math.max(0, bottom)) } : {}) };
}

/** A door or window moved to `left` along the wall and, for a window, to a sill height of `bottom`. */
export function openingAt(frame: WallFrame, room: Room, o: Opening, left: number, bottom: number | null): Partial<Opening> {
  const [a] = [room.points[o.edge]];
  const middle = Math.min(frame.length - o.width / 2, Math.max(o.width / 2, left + o.width / 2));
  // the offset counts from points[edge], which may be the right end seen from the room
  const fromA = norm(sub(a, frame.origin)) < 1e-6 ? middle : frame.length - middle;
  return { offset: mm(fromA), ...(bottom !== null && o.type === "window" ? { sill: mm(Math.max(0, bottom)) } : {}) };
}
