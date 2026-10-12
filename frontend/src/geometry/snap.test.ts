import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor, type Floor, type Furniture } from "../model.ts";
import { keepInRoom, snapToWall, WALL_SNAP } from "./snap.ts";

const hall = (): Floor => ({ ...newFloor("f", "F", 0), rooms: [{ id: "r", name: "R", area_id: null, points: [[0, 0], [5, 0], [5, 4], [0, 4]], floor_material: "wood" }] });
const piece = (x: number, z: number, rotation: number, extra: Partial<Furniture> = {}): Furniture => ({ id: "p", type: "sofa", x, z, rotation, w: 2, d: 1, h: 0.8, variant: null, entity: null, power: null, ...extra });

test("a piece close to a wall turns its back to it and sits flush", () => {
  const snapped = snapToWall(hall(), piece(2.5, 0.7, 15), 0.1)!;
  assert.deepEqual(snapped, { x: 2.5, z: 0.5, rotation: 0 });
});

test("the back turns to whichever wall is near: right wall 90°, bottom wall 180°, left wall 270°", () => {
  assert.equal(snapToWall(hall(), piece(4.3, 2, 80), 0.1)?.rotation, 90);
  assert.equal(snapToWall(hall(), piece(2.5, 3.3, 170), 0.1)?.rotation, 180);
  assert.equal(snapToWall(hall(), piece(0.7, 2, 260), 0.1)?.rotation, 270);
});

test("a piece standing sideways puts its side against the wall", () => {
  const side = snapToWall(hall(), piece(1.2, 2, 0), 0.1)!;
  assert.equal(side.rotation, 0);
  assert.ok(Math.abs(side.x - 1) < 1e-9, "half its width from the left wall");
});

test("a piece in the middle of the room, or turned away from every wall, stays put", () => {
  assert.equal(snapToWall(hall(), piece(2.5, 2, 0), 0.1), null);
  assert.equal(snapToWall(hall(), piece(2.5, 0.7, 135), 0.1), null, "more than 50° off every direction");
});

test("a piece outside every room does not snap", () => {
  assert.equal(snapToWall(hall(), piece(20, 20, 0), 0.1), null);
});

test("the reach limits how far a wall pulls", () => {
  assert.ok(snapToWall(hall(), piece(2.5, 0.5 + WALL_SNAP - 0.01, 0), 0.1));
  assert.equal(snapToWall(hall(), piece(2.5, 0.5 + WALL_SNAP + 0.05, 0), 0.1), null);
  assert.ok(snapToWall(hall(), piece(2.5, 0.5 + WALL_SNAP + 0.05, 0), 0.1, 0.5));
});

test("against an interior wall the face is half the wall thickness inside the room", () => {
  const floor = hall();
  floor.rooms = [
    { id: "r", name: "R", area_id: null, points: [[0, 0], [5, 0], [5, 4], [0, 4]], floor_material: "wood" },
    { id: "s", name: "S", area_id: null, points: [[5, 0], [9, 0], [9, 4], [5, 4]], floor_material: "wood" },
  ];
  const interior = snapToWall(floor, piece(4.3, 2, 90), 0.2)!;
  const exterior = snapToWall({ ...floor, rooms: [floor.rooms[0]] }, piece(4.3, 2, 90), 0.2)!;
  assert.ok(Math.abs(interior.x - (5 - 0.1 - 0.5)) < 1e-9);
  assert.ok(Math.abs(exterior.x - (5 - 0.5)) < 1e-9);
});

test("a drag inside the room is free, through a wall it slides along it, through a corner it stops, outside rooms it is free", () => {
  const floor = hall();
  assert.deepEqual(keepInRoom(floor, 2, 2, 3, 3), [3, 3]);
  assert.deepEqual(keepInRoom(floor, 4.5, 2, 5.5, 3), [4.5, 3]);
  assert.deepEqual(keepInRoom(floor, 2, 0.5, 3, -0.5), [3, 0.5]);
  assert.deepEqual(keepInRoom(floor, 4.8, 3.8, 5.5, 4.5), [4.8, 3.8]);
  assert.deepEqual(keepInRoom(floor, 9, 9, 10, 10), [10, 10]);
});
