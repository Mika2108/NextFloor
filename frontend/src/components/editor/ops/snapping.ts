// Where a point drawn in the plan lands: on a corner of another room, on another room's wall (so walls can meet in a T), or on the
// grid, lined up with other corners along each axis.

import type { Room, Vec2 } from "../../../model.ts";
import type { Guides } from "../canvas/draft.ts";

const thousandths = (v: number) => Math.round(v * 1000) / 1000;

export interface SnapOptions {
  rooms: readonly Room[];
  /** The grid step in metres. */
  grid: number;
  /** How close a point must be to something to snap to it, in metres. */
  reach: number;
  /** A room (or one corner of it) that is being moved and so is not something to snap to. */
  skip?: { roomId: string; index?: number };
}

export interface Snapped {
  point: Vec2;
  guides: Guides;
}

const distance = (a: Vec2, b: Vec2) => Math.hypot(a[0] - b[0], a[1] - b[1]);

/** The nearest corner of the other rooms within reach, if any. */
function nearestCorner(corners: readonly Vec2[], p: Vec2, reach: number): Vec2 | null {
  let best: Vec2 | null = null;
  let bestDistance = reach;
  for (const corner of corners) {
    const d = distance(corner, p);
    if (d < bestDistance) [best, bestDistance] = [corner, d];
  }
  return best;
}

/** The point on a wall of another room that is nearest to p, within reach. Walls along an axis are held to the grid. */
function nearestOnWall(rooms: readonly Room[], p: Vec2, o: SnapOptions): Vec2 | null {
  let best: Vec2 | null = null;
  let bestDistance = o.reach;
  for (const room of rooms) {
    if (o.skip && room.id === o.skip.roomId) continue;
    room.points.forEach((a, i) => {
      const b = room.points[(i + 1) % room.points.length];
      const [dx, dz] = [b[0] - a[0], b[1] - a[1]];
      const squared = dx * dx + dz * dz;
      if (squared < 1e-9) return;
      const along = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / squared;
      if (along <= 0 || along >= 1) return;
      const foot: Vec2 = [a[0] + along * dx, a[1] + along * dz];
      const d = distance(foot, p);
      const within = (v: number, lo: number, hi: number) => Math.min(Math.max(v, Math.min(lo, hi)), Math.max(lo, hi));
      if (Math.abs(dz) < 1e-9) foot[0] = within(Math.round(foot[0] / o.grid) * o.grid, a[0], b[0]);
      if (Math.abs(dx) < 1e-9) foot[1] = within(Math.round(foot[1] / o.grid) * o.grid, a[1], b[1]);
      if (d < bestDistance) [best, bestDistance] = [foot, d];
    });
  }
  return best;
}

/** The grid point nearest to p, pulled onto the x or z of any corner that is within reach along that axis. */
function gridOrAligned(corners: readonly Vec2[], p: Vec2, o: SnapOptions): Snapped {
  const point: Vec2 = [thousandths(Math.round(p[0] / o.grid) * o.grid), thousandths(Math.round(p[1] / o.grid) * o.grid)];
  const guides: Guides = {};
  let [nearX, nearZ] = [o.reach, o.reach];
  for (const corner of corners) {
    if (Math.abs(corner[0] - p[0]) < nearX) {
      nearX = Math.abs(corner[0] - p[0]);
      point[0] = corner[0];
      guides.x = corner[0];
    }
    if (Math.abs(corner[1] - p[1]) < nearZ) {
      nearZ = Math.abs(corner[1] - p[1]);
      point[1] = corner[1];
      guides.z = corner[1];
    }
  }
  return { point, guides };
}

export function snapToPlan(p: Vec2, o: SnapOptions): Snapped {
  const corners = o.rooms.flatMap((room) => room.points.filter((_, i) => !(o.skip && room.id === o.skip.roomId && (o.skip.index === undefined || o.skip.index === i))));
  const corner = nearestCorner(corners, p, o.reach);
  if (corner) return { point: [corner[0], corner[1]], guides: { point: corner } };
  const wall = nearestOnWall(o.rooms, p, o);
  if (wall) return { point: [thousandths(wall[0]), thousandths(wall[1])], guides: { point: wall } };
  return gridOrAligned(corners, p, o);
}
