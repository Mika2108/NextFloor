import assert from "node:assert/strict";
import { test } from "node:test";
import { polygonArea } from "../model.ts";
import { near, rectRoom } from "./fixtures.ts";
import { floorOutline, offsetPolygon, polygonBox, sectionPolygon } from "./polygons.ts";

const square = [[0, 0], [4, 0], [4, 4], [0, 4]] as [number, number][];

test("a polygon grows by d on every side, whichever way round it runs", () => {
  for (const ring of [square, [...square].reverse()]) {
    const grown = offsetPolygon(ring, 1);
    near(Math.abs(polygonArea(grown)), 36);
    near(Math.min(...grown.map((p) => p[0])), -1);
  }
});

test("no offset, or too few points, gives a copy", () => {
  assert.deepEqual(offsetPolygon(square, 0), square);
  assert.notEqual(offsetPolygon(square, 0), square);
  assert.deepEqual(offsetPolygon([[0, 0], [1, 1]], 3), [[0, 0], [1, 1]]);
});

test("shrinking works with a negative offset", () => {
  near(Math.abs(polygonArea(offsetPolygon(square, -1))), 4);
});

test("an L-shaped polygon keeps its corners (mitres)", () => {
  const l: [number, number][] = [[0, 0], [6, 0], [6, 3], [3, 3], [3, 6], [0, 6]];
  const grown = offsetPolygon(l, 0.5);
  assert.equal(grown.length, 6);
  assert.ok(Math.abs(polygonArea(grown)) > 27 + 0.5 * 24, "larger than the plain strip around it");
});

test("a section's footprint is its rectangle or its free polygon, plus the overhang", () => {
  const rect = sectionPolygon({ x0: 4, z0: 3, x1: 0, z1: 0, points: null as never }, 0.5);
  assert.deepEqual(rect, [[-0.5, -0.5], [4.5, -0.5], [4.5, 3.5], [-0.5, 3.5]]);
  const free = sectionPolygon({ x0: 0, z0: 0, x1: 4, z1: 4, points: square }, 1);
  near(Math.abs(polygonArea(free)), 36);
});

test("the box of a polygon", () => {
  assert.deepEqual(polygonBox([[1, 5], [4, 2], [3, 9]]), { x0: 1, z0: 2, x1: 4, z1: 9 });
});

test("the outline of a floor is its outer wall face loop; collinear splits disappear", () => {
  const rooms = [rectRoom("a", 0, 0, 4, 4), rectRoom("b", 4, 0, 8, 4)];
  const outline = floorOutline(rooms, [], 0.3, 0.1)!;
  assert.equal(outline.length, 4, "the shared wall adds no corner");
  near(Math.min(...outline.map((p) => p[0])), -0.3, 0.2);
  assert.equal(floorOutline([], [], 0.3, 0.1), null);
});
