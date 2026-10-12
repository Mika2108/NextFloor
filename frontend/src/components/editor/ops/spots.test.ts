import assert from "node:assert/strict";
import { test } from "node:test";
import { box } from "../../../entities/fixtures.ts";
import { spotCount, spotItems, suggestedSpots } from "./spots.ts";

test("about one spot per 1.2 metres, at least one, and the first light of the room is followed", () => {
  assert.deepEqual(suggestedSpots(box("r", 0, 0, 6, 3), ["light.a", "light.b"]), { type: "lamp_downlight", rows: 3, cols: 5, entity: "light.a" });
  assert.deepEqual(suggestedSpots(box("r", 0, 0, 0.5, 0.5), []), { type: "lamp_downlight", rows: 1, cols: 1, entity: null });
});

test("the spots sit at the cell centres and all follow the chosen light", () => {
  const items = spotItems(box("r", 0, 0, 4, 2), { type: "lamp_spot", rows: 1, cols: 2, entity: "light.a" });
  assert.deepEqual(items.map((i) => [i.x, i.z]), [[1, 1], [3, 1]]);
  assert.ok(items.every((i) => i.type === "lamp_spot" && i.entity === "light.a"));
  assert.equal(new Set(items.map((i) => i.id)).size, 2);
  assert.equal(spotItems(box("r", 0, 0, 4, 2), { type: "lamp_spot", rows: 1, cols: 1, entity: null })[0].entity, "none");
});

test("an L-shaped room leaves out the cells in its missing corner", () => {
  const l = { ...box("l", 0, 0, 4, 4), points: [[0, 0], [4, 0], [4, 2], [2, 2], [2, 4], [0, 4]] as [number, number][] };
  assert.equal(spotItems(l, { type: "lamp_spot", rows: 2, cols: 2, entity: null }).length, 3);
});

test("counts stay within 1 to 12", () => {
  assert.deepEqual([spotCount(0), spotCount(3.4), spotCount(99)], [1, 3, 12]);
});
