import assert from "node:assert/strict";
import { test } from "node:test";
import { Selection, type SelectionLookup } from "./selection.ts";

const lookup: SelectionLookup = { roomOfDevice: (id) => (id === "light.a" ? "kitchen" : null), roomOfOpening: (id) => (id === "door1" ? "hall" : null) };
const make = () => {
  let changes = 0;
  const selection = new Selection(() => changes++);
  return { selection, changes: () => changes };
};

test("selecting a room selects only it, and its corner is forgotten unless the same room is chosen again", () => {
  const { selection } = make();
  selection.select("room", "a", lookup);
  selection.corner = 2;
  selection.select("room", "a", lookup);
  assert.equal(selection.corner, 2);
  selection.select("room", "b", lookup);
  assert.equal(selection.room, "b");
  assert.equal(selection.corner, null);
});

test("an item of a room leaves the room selected and deselects the other kinds", () => {
  const { selection } = make();
  selection.select("room", "a", lookup);
  selection.select("furniture", "sofa", lookup);
  assert.deepEqual([selection.room, selection.furniture, selection.opening], ["a", "sofa", null]);
  selection.select("opening", "door2", lookup);
  assert.deepEqual([selection.room, selection.furniture, selection.opening], ["a", null, "door2"]);
});

test("a device or opening brings up the room it belongs to when it is known", () => {
  const { selection } = make();
  selection.select("room", "a", lookup);
  selection.select("device", "light.a", lookup);
  assert.equal(selection.room, "kitchen");
  selection.select("opening", "door1", lookup);
  assert.equal(selection.room, "hall");
  selection.select("device", "light.unplaced", lookup);
  assert.equal(selection.room, "hall", "unknown room: the current one stays");
});

test("outdoor areas and free walls belong to no room", () => {
  const { selection } = make();
  selection.select("room", "a", lookup);
  selection.select("outdoor", "lawn", lookup);
  assert.deepEqual([selection.room, selection.outdoor], [null, "lawn"]);
  selection.select("wall", "w1", lookup);
  assert.deepEqual([selection.outdoor, selection.wall], [null, "w1"]);
});

test("selecting nothing of a kind clears it, and the highlighted edge is always cleared", () => {
  const { selection } = make();
  selection.select("room", "a", lookup);
  selection.edge = 1;
  selection.select("furniture", null, lookup);
  assert.deepEqual([selection.furniture, selection.room, selection.edge], [null, "a", null]);
});

test("the target is the most specific selected item", () => {
  const { selection } = make();
  assert.equal(selection.target, null);
  selection.select("room", "a", lookup);
  assert.deepEqual(selection.target, { kind: "room", id: "a" });
  selection.select("furniture", "sofa", lookup);
  assert.deepEqual(selection.target, { kind: "furniture", id: "sofa" });
  selection.device = "light.x";
  assert.deepEqual(selection.target, { kind: "device", id: "light.x" });
});

test("every change asks for a redraw", () => {
  const { selection, changes } = make();
  selection.room = "a";
  selection.corner = 1;
  selection.select("room", "a", lookup);
  assert.equal(changes(), 3);
});
