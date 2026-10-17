import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith } from "../../../entities/fixtures.ts";
import type { Building, RoofSection, RoofSettings, SolarField } from "../../../model.ts";
import { copyOfSection, insertRoofCorner, removeRoofCorner, roofOutline, sectionFromRectangle, sectionNumber } from "./roof.ts";
import { assignString, columnsPatch, columnsText, keptOnMove, pruneStrings, rowsPatch, toggledSkip } from "./solar.ts";

const field = (id: string, extra: Partial<SolarField> = {}): SolarField => ({ id, face: "main:a", u: 0, v: 0, rows: 2, cols: 3, portrait: true, ...extra });
const roof = (extra: Partial<RoofSettings> = {}): RoofSettings => ({ type: "custom", pitch: 35, overhang: 0.4, ...extra });
const house = (): Building => ({ version: 1, floors: [floorWith([box("r", 0, 0, 6, 4)], { elevation: 0, height: 2.5 })], settings: { roof: roof() }, energy: {}, presence: [] }) as unknown as Building;

test("a section drawn over a room sits on its walls, one drawn over nothing is an open canopy", () => {
  const over = sectionFromRectangle(house(), [0, 0], [6, 4]);
  assert.equal(over.shape, "gable");
  assert.equal(over.axis, "x");
  assert.equal(over.eave_a, 2.5);
  assert.equal(over.pitch_a, 35);
  assert.equal(over.overhang, null);
  assert.equal(over.open, undefined);
  const canopy = sectionFromRectangle(house(), [10, 10], [12, 16]);
  assert.equal(canopy.shape, "pent");
  assert.equal(canopy.axis, "z");
  assert.equal(canopy.eave_a, 2.4);
  assert.equal(canopy.pitch_a, 6);
  assert.equal(canopy.overhang, 0.15);
  assert.equal(canopy.open, true);
});

test("a copy is shifted by a metre, has its own id, and shares nothing with the original", () => {
  const original: RoofSection = { ...sectionFromRectangle(house(), [0, 0], [6, 4]), points: [[0, 0], [1, 0], [1, 1]] };
  const copy = copyOfSection(original);
  assert.notEqual(copy.id, original.id);
  assert.deepEqual([copy.x0, copy.x1, copy.z0, copy.z1], [1, 7, 1, 5]);
  copy.points!.push([5, 5]);
  assert.equal(original.points!.length, 3);
  assert.equal(sectionNumber([original, copy], copy.id), 2);
  assert.equal(sectionNumber([original], "nope"), 0);
});

test("a new string takes the field's sensor, and a string nobody uses any more goes away", () => {
  const settings = roof({ solar: [field("a", { entity: "sensor.pv" }), field("b")] });
  assignString(settings, "a", "new", { id: "s1", name: (n) => `String ${n}` });
  assert.deepEqual(settings.strings, [{ id: "s1", name: "String 1", entity: "sensor.pv", inverter: null }]);
  assert.equal(settings.solar![0].string, "s1");
  assignString(settings, "b", "s1", { id: "unused", name: () => "" });
  assert.equal(settings.solar![1].string, "s1");
  assignString(settings, "a", null, { id: "unused", name: () => "" });
  assert.equal(settings.strings!.length, 1, "b still uses it");
  assignString(settings, "b", null, { id: "unused", name: () => "" });
  assert.deepEqual(settings.strings, []);
  assignString(settings, "missing", "new", { id: "x", name: () => "" });
  assert.deepEqual(settings.strings, []);
});

test("pruning keeps the strings that are used", () => {
  const settings = roof({ solar: [field("a", { string: "keep" })], strings: [{ id: "keep", name: "k" }, { id: "drop", name: "d" }] });
  pruneStrings(settings);
  assert.deepEqual(settings.strings!.map((s) => s.id), ["keep"]);
});

test("clicking a module switches it off, and clicking it again on; no cell left out gives null", () => {
  assert.deepEqual(toggledSkip(null, "1:2"), ["1:2"]);
  assert.deepEqual(toggledSkip(["1:2"], "0:0"), ["0:0", "1:2"]);
  assert.equal(toggledSkip(["1:2"], "1:2"), null);
});

test("the columns box: one number or a list, with limits, and nothing usable gives null", () => {
  assert.deepEqual(columnsPatch("5"), { cols: 5, layout: null, skip: null });
  assert.deepEqual(columnsPatch("0"), { cols: 1, layout: null, skip: null });
  assert.deepEqual(columnsPatch("500"), { cols: 60, layout: null, skip: null });
  assert.deepEqual(columnsPatch("4, 4;3"), { layout: [4, 4, 3], rows: 3, cols: 4, skip: null });
  assert.equal(columnsPatch("abc"), null);
  assert.equal(columnsPatch(""), null);
  assert.equal(columnsText(field("a", { layout: [4, 3] })), "4, 3");
  assert.equal(columnsText(field("a", { cols: 7 })), "7");
});

test("more rows take the last row's length, fewer rows cut the list, and the count stays in range", () => {
  assert.deepEqual(rowsPatch(field("a"), 4), { rows: 4 });
  assert.deepEqual(rowsPatch(field("a", { layout: [4, 3] }), 4), { rows: 4, layout: [4, 3, 3, 3] });
  assert.deepEqual(rowsPatch(field("a", { layout: [4, 3, 2] }), 2), { rows: 2, layout: [4, 3] });
  assert.equal(rowsPatch(field("a"), 0).rows, 1);
  assert.equal(rowsPatch(field("a"), 99).rows, 40);
});

test("moving to another face keeps the modules and links but not the place", () => {
  const kept = keptOnMove(field("a", { name: "Süd", wp: 410, look: "blue", u: 3, v: 4, rows: 9 }));
  assert.equal(kept.name, "Süd");
  assert.equal(kept.wp, 410);
  assert.equal(kept.look, "blue");
  assert.equal("u" in kept, false);
  assert.equal("rows" in kept, false);
});

test("a flat roof becomes a free shape with the first corner, and its box follows the points", () => {
  const flat = { ...sectionFromRectangle(house(), [0, 0], [6, 4]), shape: "flat" as const };
  assert.deepEqual(roofOutline(flat), [[0, 0], [6, 0], [6, 4], [0, 4]]);
  insertRoofCorner(flat, 1, [6, 2]);
  assert.deepEqual(flat.points, [[0, 0], [6, 0], [6, 2], [6, 4], [0, 4]]);
  // pulling the new corner out widens the box
  flat.points![2] = [8, 2];
  insertRoofCorner(flat, 2, [7, 3]);
  assert.equal(flat.x1, 8);
  assert.equal(flat.z1, 4);
  assert.equal(removeRoofCorner(flat, 2), true);
  assert.equal(flat.points!.length, 5);
});

test("a free flat roof keeps three corners; a plain rectangle has no points to take away", () => {
  const flat = { ...sectionFromRectangle(house(), [0, 0], [6, 4]), shape: "flat" as const };
  assert.equal(removeRoofCorner(flat, 0), false);
  flat.points = [[0, 0], [4, 0], [4, 3]];
  assert.equal(removeRoofCorner(flat, 1), false);
});
