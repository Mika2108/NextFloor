// Snapping furniture to the walls of its room: the back (or a side, when it stands sideways) turns to the nearest wall and
// the piece sits flush with the wall face. Shared by the 2D editor and by furnishing in 3D.

import { pointInPolygon, signedArea, type Floor, type Furniture, type Room, type Vec2 } from "../model.ts";
import { dot, norm, sub } from "./vec2.ts";

/** Furniture closer than this to a wall snaps against it (metres). */
export const WALL_SNAP = 0.25;

const thousandths = (v: number) => Math.round(v * 1000) / 1000;
const roomAt = (floor: Floor, x: number, z: number): Room | undefined => floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([x, z], r.points));

/**
 * A point dragged from (x0, z0) to (x, z) stays in the room it started in. Outside that room's polygon the move slides
 * along the wall (only x or only z changes), or stops. Things that start outside every room move freely.
 */
export function keepInRoom(floor: Floor, x0: number, z0: number, x: number, z: number): [number, number] {
  const room = roomAt(floor, x0, z0);
  if (!room) return [x, z];
  const inside = (px: number, pz: number) => pointInPolygon([px, pz], room.points);
  if (inside(x, z)) return [x, z];
  if (inside(x, z0)) return [x, z0];
  if (inside(x0, z)) return [x0, z];
  return [x0, z0];
}

/** Whether another room has an edge lying on the line through `a` with this normal: then the wall between them is an interior wall. */
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

const angleBetween = (a: number, b: number) => Math.abs(((a - b + 540) % 360) - 180);

/** Where a piece of furniture would stand when snapped to the nearest wall of its room, or null when no wall is close enough. */
export function snapToWall(floor: Floor, f: Furniture, wallInterior: number, reach = WALL_SNAP): { x: number; z: number; rotation: number } | null {
  const room = roomAt(floor, f.x, f.z);
  if (!room) return null;
  const pts = room.points;
  const winding = signedArea(pts) >= 0 ? 1 : -1;
  let best: { x: number; z: number; rotation: number; gap: number } | null = null;
  pts.forEach((a, i) => {
    const b = pts[(i + 1) % pts.length];
    const length = norm(sub(b, a));
    if (length < 0.3) return;
    const along: Vec2 = [(b[0] - a[0]) / length, (b[1] - a[1]) / length];
    const normal: Vec2 = [-along[1] * winding, along[0] * winding]; // into the room
    const position = dot(sub([f.x, f.z], a), along);
    if (position < 0 || position > length) return;
    // interior walls stand on the room edge, so their face is half the wall thickness inside
    const faceOffset = edgeIsShared(floor, room, a, normal) ? wallInterior / 2 : 0;
    const distance = dot(sub([f.x, f.z], a), normal) - faceOffset;
    // the rotation that turns the back to the wall (the front looks along the normal)
    const back = (Math.atan2(-normal[0], normal[1]) * 180) / Math.PI;
    const choices = [
      { rotation: back, extent: f.d / 2 },
      { rotation: back + 90, extent: f.w / 2 },
      { rotation: back - 90, extent: f.w / 2 },
    ];
    const choice = choices.reduce((p, q) => (angleBetween(f.rotation, q.rotation) < angleBetween(f.rotation, p.rotation) ? q : p));
    if (angleBetween(f.rotation, choice.rotation) > 50) return;
    const gap = distance - choice.extent;
    if (Math.abs(gap) > reach || (best && Math.abs(gap) >= Math.abs(best.gap))) return;
    best = { x: thousandths(f.x - normal[0] * gap), z: thousandths(f.z - normal[1] * gap), rotation: ((Math.round(choice.rotation) % 360) + 360) % 360, gap };
  });
  return best && { x: (best as { x: number }).x, z: (best as { z: number }).z, rotation: (best as { rotation: number }).rotation };
}
