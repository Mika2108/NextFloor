import assert from "node:assert/strict";
import { test } from "node:test";
import type { Vec2 } from "../../model.ts";
import { paintOfSide, type WallPaint } from "./solids.ts";

// a wall 0.2 m thick along z = 0 (from x = 0 to 4): the room "a" lies north of it (z < 0), the room "b" south (z > 0)
const wall: Vec2[] = [[0, -0.1], [4, -0.1], [4, 0.1], [0, 0.1]];
const roomA = { points: [[0, -3], [4, -3], [4, 0], [0, 0]] as Vec2[] };
const roomB = { points: [[0, 0], [4, 0], [4, 3], [0, 3]] as Vec2[] };

test("a wall face takes the paint of the room in front of it, the inside colour without one, the outside colour outdoors", () => {
  const paint: WallPaint = { outside: 0x111111, inside: 0x222222, rooms: [{ points: roomB.points, color: 0x333333 }] };
  const north = paintOfSide(wall, [0, -0.1], [4, -0.1], paint, [roomA, roomB]);
  const south = paintOfSide(wall, [4, 0.1], [0, 0.1], paint, [roomA, roomB]);
  assert.equal(north, 0x222222, "room a has no colour of its own: the inside colour");
  assert.equal(south, 0x333333, "room b has its own colour");
  // the same wall with only room a: its south face looks outdoors
  assert.equal(paintOfSide(wall, [4, 0.1], [0, 0.1], { ...paint, rooms: [] }, [roomA]), 0x111111);
  // the face direction does not depend on how the polygon edge is walked
  assert.equal(paintOfSide(wall, [4, -0.1], [0, -0.1], paint, [roomA, roomB]), 0x222222);
});
