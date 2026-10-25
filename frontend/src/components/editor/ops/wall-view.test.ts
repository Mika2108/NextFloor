import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor, type Furniture, type Opening, type Room } from "../../../model.ts";
import { furnitureAt, onWall, openingAt, wallElevation, wallFrame } from "./wall-view.ts";

const room = (id: string, points: [number, number][]): Room => ({ id, name: id, area_id: null, points, floor_material: "wood", panel: [] }) as Room;
const piece = (id: string, type: string, x: number, z: number, w: number, d: number, h: number, rotation = 0, extra: Partial<Furniture> = {}): Furniture =>
  ({ id, type, x, z, w, d, h, rotation, variant: null, entity: null, power: null, ...extra }) as Furniture;
const hole = (id: string, room_id: string, edge: number, offset: number, type: Opening["type"], width: number, sill: number, height: number): Opening =>
  ({ id, room_id, edge, offset, type, width, sill, height, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null }) as Opening;

function flat() {
  const floor = newFloor("f", "Ground", 0);
  const living = room("living", [[0, 0], [5, 0], [5, 4], [0, 4]]);
  floor.rooms = [living];
  return { floor, living };
}

test("seen from inside, the back wall runs from its left end to the right, and the room lies in front of it", () => {
  const { floor, living } = flat();
  const back = wallFrame(floor, living, 0, 0.12);
  assert.deepEqual(back.origin, [0, 0]);
  assert.deepEqual(back.normal, [0, 1]);
  assert.equal(back.length, 5);
  // the front wall (edge 2 runs from [5,4] to [0,4]): its left end, seen from inside, is [5,4]
  const front = wallFrame(floor, living, 2, 0.12);
  assert.deepEqual(front.origin, [5, 4]);
  assert.deepEqual(onWall(front, [4, 3.5]), { u: 1, depth: 0.5 });
  assert.equal(back.heightLeft, floor.height);
});

test("the wall shows its doors and windows and the furniture with its back to it", () => {
  const { floor, living } = flat();
  floor.openings = [hole("w", "living", 0, 1.5, "window", 1.2, 0.9, 1.3)];
  floor.furniture = [
    piece("shelf", "shelf", 3.5, 0.2, 0.9, 0.35, 1.9, 0),
    piece("sofa", "sofa", 2.5, 2.0, 2.0, 0.9, 0.8, 0), // in the middle of the room
    piece("turned", "shelf", 4.7, 2.0, 0.9, 0.35, 1.9, 90), // its back is to the right wall
  ];
  const boxes = wallElevation(floor, living, wallFrame(floor, living, 0, 0.12));
  assert.deepEqual(boxes.map((b) => b.id), ["w", "shelf"]);
  const [window, shelf] = boxes;
  assert.deepEqual([window.x0, window.x1, window.y0, window.y1], [0.9, 2.1, 0.9, 2.2]);
  assert.ok(window.lifts, "a window's sill can be moved");
  assert.equal(Math.round(shelf.x0 * 100) / 100, 3.05);
  assert.equal(shelf.lifts, false, "a shelf stands on the floor");
});

test("moving along the wall keeps the distance from it; a wall item also takes its height", () => {
  const { floor, living } = flat();
  const frame = wallFrame(floor, living, 0, 0.12);
  const shelf = piece("shelf", "shelf", 3.5, 0.2, 0.9, 0.35, 1.9);
  assert.deepEqual(furnitureAt(frame, shelf, 1.0, 0.5), { x: 1.45, z: 0.2 });
  const lamp = piece("lamp", "lamp_wall", 2, 0.05, 0.2, 0.1, 0.2);
  assert.deepEqual(furnitureAt(frame, lamp, 2.4, 1.85), { x: 2.5, z: 0.05, mount_y: 1.85 });
  // never past the end of the wall
  assert.equal(furnitureAt(frame, shelf, 9, null).x, 4.55);
});

test("a door or window moves by its offset from the edge's first corner, also when that is the right end", () => {
  const { floor, living } = flat();
  const back = wallFrame(floor, living, 0, 0.12);
  const front = wallFrame(floor, living, 2, 0.12);
  const w = hole("w", "living", 0, 1.5, "window", 1.2, 0.9, 1.3);
  assert.deepEqual(openingAt(back, living, w, 2, 1.1), { offset: 2.6, sill: 1.1 });
  const d = hole("d", "living", 2, 1, "door", 0.9, 0, 2.05);
  // the front wall's left end (seen from inside) is its first corner [5,4]
  assert.deepEqual(openingAt(front, living, d, 0.5, 0.4), { offset: 0.95 });
});
