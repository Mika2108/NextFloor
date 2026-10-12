import assert from "node:assert/strict";
import { test } from "node:test";
import { box } from "../../../entities/fixtures.ts";
import { snapToPlan } from "./snapping.ts";

const options = (extra = {}) => ({ rooms: [box("a", 0, 0, 4, 3)], grid: 0.1, reach: 0.2, ...extra });

test("a point near a corner of a room lands on it and shows the guide", () => {
  const snapped = snapToPlan([4.05, 0.08], options());
  assert.deepEqual(snapped.point, [4, 0]);
  assert.deepEqual(snapped.guides, { point: [4, 0] });
});

test("a point near a wall lands on it, so walls can meet in a T", () => {
  const snapped = snapToPlan([2.04, 3.1], options());
  assert.deepEqual(snapped.point, [2, 3]);
  assert.deepEqual(snapped.guides.point, [2, 3]);
});

test("far from everything the point lands on the grid", () => {
  const snapped = snapToPlan([7.04, 8.97], options());
  assert.deepEqual(snapped.point, [7, 9]);
  assert.deepEqual(snapped.guides, {});
});

test("a point is lined up with the x or z of a corner along that axis only", () => {
  const snapped = snapToPlan([4.12, 8.07], options({ rooms: [box("a", 0, 0, 4, 3)] }));
  assert.equal(snapped.point[0], 4);
  assert.equal(snapped.point[1], 8.1);
  assert.deepEqual(snapped.guides, { x: 4 });
});

test("the room being moved is not something to snap to, and free placement is up to the caller", () => {
  const moving = snapToPlan([4.05, 0.08], options({ skip: { roomId: "a" } }));
  assert.deepEqual(moving.point, [4, 0.1]);
  const oneCorner = snapToPlan([4.05, 0.08], options({ skip: { roomId: "a", index: 1 } }));
  assert.deepEqual(oneCorner.guides.point ?? null, null, "the corner skipped; the wall next to it is still near");
});

test("walls along an axis are held to the grid when snapped to", () => {
  const snapped = snapToPlan([2.37, 3.12], options({ grid: 0.5, reach: 0.3 }));
  assert.deepEqual(snapped.point, [2.5, 3]);
});
