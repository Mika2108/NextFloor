import assert from "node:assert/strict";
import { test } from "node:test";
import { guessPaint, paintName, shareBudget, turnsToFront, type MaterialSummary } from "./choices.ts";

const material = (name: string, area: number, extra: Partial<MaterialSummary> = {}): MaterialSummary => ({ name, area, opacity: 1, lightness: 0.5, ...extra });

test("materials named like paint are the paint", () => {
  assert.deepEqual(guessPaint([material("Glass", 2, { opacity: 0.3 }), material("Paint_Body", 5), material("Carpaint2", 1), material("Tyre", 3, { lightness: 0.05 })]), ["Paint_Body", "Carpaint2"]);
});

test("without a telling name the largest solid, not-dark material is guessed", () => {
  assert.deepEqual(guessPaint([material("Tyre", 9, { lightness: 0.05 }), material("Glass", 8, { opacity: 0.2 }), material("m1", 6), material("m2", 2)]), ["m1"]);
  assert.deepEqual(guessPaint([material("Window_glass", 9), material("lamp", 7), material("m3", 1)]), ["m3"]);
  assert.deepEqual(guessPaint([]), []);
});

test("a model within budget keeps everything, a heavier one is cut in proportion", () => {
  assert.deepEqual(shareBudget([100, 50], 200), [100, 50]);
  assert.deepEqual(shareBudget([300, 100], 200), [150, 50]);
  assert.deepEqual(shareBudget([1, 1000], 10), [1, 9]);
});

test("paint names get the prefix once", () => {
  assert.equal(paintName("Body"), "Paint_Body");
  assert.equal(paintName("Paint_Body"), "Paint_Body");
  assert.equal(paintName("PaintMetal"), "PaintMetal");
  assert.equal(paintName(""), "Paint_body");
});

test("the turns bring the front to +z", () => {
  assert.deepEqual(["+z", "-x", "-z", "+x"].map((f) => turnsToFront(f as never)), [0, 1, 2, 3]);
});
