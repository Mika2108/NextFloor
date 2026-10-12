import assert from "node:assert/strict";
import { test } from "node:test";
import { box } from "../../../entities/fixtures.ts";
import type { Room } from "../../../model.ts";
import { cutEdge, edgeLength, joinAtCut, moveCut, setPartHeight, setWallHeight, setWallThickness, thicknessFromTyped } from "./edges.ts";

const room = (extra: Partial<Room> = {}): Room => ({ ...box("r", 0, 0, 6, 4), ...extra });

test("edge lengths follow the corners round the room", () => {
  const r = room();
  assert.deepEqual([0, 1, 2, 3].map((i) => edgeLength(r, i)), [6, 4, 6, 4]);
});

test("a wall height is set per edge, and a list with nothing in it disappears", () => {
  const r = room();
  setWallHeight(r, 1, 1.2);
  assert.deepEqual(r.wall_heights, [null, 1.2, null, null]);
  setWallHeight(r, 1, null);
  assert.equal(r.wall_heights, undefined);
});

test("a wall of several parts keeps a height per part, and equal parts collapse to one height", () => {
  const r = room();
  setPartHeight(r, 0, 1, 1, 2);
  assert.deepEqual(r.wall_heights![0], [null, 1]);
  setPartHeight(r, 0, 0, 1, 2);
  assert.equal(r.wall_heights![0], 1);
  setPartHeight(r, 0, 0, null, 2);
  setPartHeight(r, 0, 1, null, 2);
  assert.equal(r.wall_heights, undefined);
  // a single height spreads over the parts when one of them changes
  const s = room({ wall_heights: [2, null, null, null] });
  setPartHeight(s, 0, 1, 0.5, 3);
  assert.deepEqual(s.wall_heights![0], [2, 0.5, 2]);
});

test("cutting an edge puts the cut in the middle of the piece, and short pieces are left alone", () => {
  const r = room();
  assert.equal(cutEdge(r, 0, undefined, [0]), true);
  assert.deepEqual(r.wall_splits![0], [3]);
  assert.equal(cutEdge(r, 0, 1, [0, 3]), true, "the part after the cut is 3 m long");
  assert.deepEqual(r.wall_splits![0], [3, 4.5]);
  const short = room({ points: [[0, 0], [0.3, 0], [0.3, 4], [0, 4]] });
  assert.equal(cutEdge(short, 0, undefined, [0]), false);
  assert.equal(short.wall_splits, undefined);
});

test("a new part starts with the height of the part it was cut from", () => {
  const r = room({ wall_heights: [[1, 2], null, null, null] });
  cutEdge(r, 0, 1, [0, 2]);
  assert.deepEqual(r.wall_heights![0], [1, 2, 2]);
});

test("a cut moves along the edge but keeps clear of the ends and of other cuts", () => {
  const r = room({ wall_splits: [[2, 4], null, null, null] });
  moveCut(r, 0, 2, 2.504, [0, 2, 4]);
  assert.deepEqual(r.wall_splits![0], [2.5, 4]);
  moveCut(r, 0, 2.5, 3.95, [0, 2.5, 4]);
  assert.deepEqual(r.wall_splits![0], [2.5, 4], "too close to the other cut: stays");
  moveCut(r, 0, 2.5, -3, [0, 2.5, 4]);
  assert.deepEqual(r.wall_splits![0], [0.1, 4]);
  moveCut(r, 0, 4, 99, [0, 0.1, 4]);
  assert.deepEqual(r.wall_splits![0], [0.1, 5.9]);
});

test("joining at a cut drops it, merges the part's height into the one before, and cleans up", () => {
  const r = room({ wall_splits: [[3], null, null, null], wall_heights: [[1, 2], null, null, null] });
  joinAtCut(r, 0, 3, 1);
  assert.equal(r.wall_splits, undefined);
  assert.equal(r.wall_heights![0], 1);
  const two = room({ wall_splits: [[2, 4], null, null, null], wall_heights: [[1, 2, 3], null, null, null] });
  joinAtCut(two, 0, 2, 1);
  assert.deepEqual(two.wall_splits![0], [4]);
  assert.deepEqual(two.wall_heights![0], [1, 3]);
});

test("a wall thickness is stored per edge and reset with null", () => {
  const r = room();
  setWallThickness(r, 2, 0.4);
  assert.deepEqual(r.wall_thickness, [null, null, 0.4, null]);
  setWallThickness(r, 2, null);
  assert.equal(r.wall_thickness, undefined);
  assert.equal(thicknessFromTyped(0.2449, 0.245), null);
  assert.equal(thicknessFromTyped(0.3, 0.12), 0.3);
  assert.equal(thicknessFromTyped(9, 0.12), 1.5);
  assert.equal(thicknessFromTyped(0, 0.12), 0.02);
});
