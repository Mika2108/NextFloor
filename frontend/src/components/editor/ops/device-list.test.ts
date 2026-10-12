import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith } from "../../../entities/fixtures.ts";
import type { Building, Furniture, Placement } from "../../../model.ts";
import { matchesQuery, placedElsewhere, placedInRoom, rankedBy, takeFirst, withToggled } from "./device-list.ts";

const pin = (id: string, x: number, z: number): Placement => ({ entity_id: id, x, z, y: null });
const lamp = (id: string, entity: string, x: number, z: number): Furniture => ({ id, type: "lamp_ceiling", x, z, rotation: 0, w: 0.3, d: 0.3, h: 0.1, variant: null, entity });

test("pins and ceiling lamps inside the room count as placed in it", () => {
  const room = box("a", 0, 0, 4, 4);
  const floor = floorWith([room, box("b", 4, 0, 8, 4)], { placements: [pin("sensor.in", 1, 1), pin("sensor.out", 6, 1)], furniture: [lamp("l1", "light.in", 2, 2), lamp("l2", "light.out", 6, 2), { ...lamp("l3", "", 1, 1), entity: null }] });
  assert.deepEqual([...placedInRoom(floor, room)].sort(), ["light.in", "sensor.in"]);
  assert.deepEqual([...placedInRoom(undefined, room)], []);
});

test("entities in other rooms, on any floor, are listed with that room's name", () => {
  const a = box("a", 0, 0, 4, 4);
  const upper = floorWith([{ ...box("c", 0, 0, 4, 4), name: "Attic" }], { id: "u", placements: [pin("sensor.up", 1, 1)] } as never);
  const ground = floorWith([a, { ...box("b", 4, 0, 8, 4), name: "Kitchen" }], { placements: [pin("sensor.here", 1, 1), pin("sensor.k", 6, 1)], furniture: [lamp("l", "light.k", 7, 2)] });
  const doc = { floors: [ground, upper] } as unknown as Building;
  const elsewhere = placedElsewhere(doc, a);
  assert.deepEqual([...elsewhere.entries()].sort(), [["light.k", "Kitchen"], ["sensor.k", "Kitchen"], ["sensor.up", "Attic"]]);
  assert.equal(elsewhere.has("sensor.here"), false);
});

test("toggling adds an id or takes it out", () => {
  assert.deepEqual(withToggled(undefined, "a"), ["a"]);
  assert.deepEqual(withToggled(["a", "b"], "a"), ["b"]);
  assert.deepEqual(withToggled(["a"], "b"), ["a", "b"]);
});

test("the search matches any of the texts, ignoring case, and an empty search matches all", () => {
  assert.equal(matchesQuery("", "x"), true);
  assert.equal(matchesQuery("  ", undefined), true);
  assert.equal(matchesQuery("lamp", "Floor Lamp", "light.x"), true);
  assert.equal(matchesQuery("LIGHT.X", "Floor Lamp", "light.x"), true);
  assert.equal(matchesQuery("fan", "Floor Lamp", "light.x"), false);
});

test("options are ordered by rank and keep their order within a rank", () => {
  const options = [{ id: "c" }, { id: "a" }, { id: "b" }, { id: "d" }];
  assert.deepEqual(rankedBy(options, (id) => (id === "b" || id === "d" ? 0 : 1)).map((o) => o.id), ["b", "d", "c", "a"]);
});

test("taking the first entries of several groups reports what did not fit", () => {
  const { taken, left } = takeFirst([{ ids: [1, 2, 3] }, { ids: [4, 5] }, { ids: [6] }], 4);
  assert.deepEqual(taken, [[1, 2, 3], [4], []]);
  assert.equal(left, 2);
  assert.deepEqual(takeFirst([{ ids: [1] }], 10), { taken: [[1]], left: 0 });
});
