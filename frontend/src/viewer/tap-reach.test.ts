import assert from "node:assert/strict";
import { test } from "node:test";
import { inReach } from "./tap-reach.ts";

const lamp = { floorId: "ground", roomId: "kitchen" };
const hallSensor = { floorId: "ground", roomId: null };

test("a device in a room is in reach only while that room is open", () => {
  assert.equal(inReach(lamp, { floorId: null, roomId: null }), false, "house view");
  assert.equal(inReach(lamp, { floorId: "ground", roomId: null }), false, "floor view");
  assert.equal(inReach(lamp, { floorId: "ground", roomId: "living" }), false, "another room");
  assert.equal(inReach(lamp, { floorId: "ground", roomId: "kitchen" }), true);
});

test("a device outside any room is in reach once its floor is open", () => {
  assert.equal(inReach(hallSensor, { floorId: null, roomId: null }), false);
  assert.equal(inReach(hallSensor, { floorId: "upstairs", roomId: null }), false);
  assert.equal(inReach(hallSensor, { floorId: "ground", roomId: null }), true);
  assert.equal(inReach(hallSensor, { floorId: "ground", roomId: "kitchen" }), true);
});
