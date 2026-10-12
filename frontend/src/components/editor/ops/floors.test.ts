import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith } from "../../../entities/fixtures.ts";
import type { Building } from "../../../model.ts";
import { floorsSwapped, floorsWith, freeHaFloors, linkableHaFloors, newFloorFor, unplacedAreas } from "./floors.ts";

const names = { first: "Ground floor", next: (n: number) => `Floor ${n}` };
const level = (id: string, elevation: number, extra = {}) => floorWith([], { id, elevation, ...extra } as never);
const house = (...floors: ReturnType<typeof level>[]) => ({ floors }) as unknown as Building;

test("the first floor gets its own name, later ones are numbered, and a Home Assistant floor lends its name and level", () => {
  assert.equal(newFloorFor(house(), null, names).name, "Ground floor");
  assert.equal(newFloorFor(house(level("g", 0)), null, names).name, "Floor 1");
  const fromHa = newFloorFor(house(level("g", 0)), { floor_id: "upstairs", name: "Upstairs", level: 1 }, names);
  assert.deepEqual([fromHa.name, fromHa.ha_floor, fromHa.elevation], ["Upstairs", "upstairs", 2.75]);
  assert.notEqual(newFloorFor(house(), null, names).id, newFloorFor(house(), null, names).id);
});

test("a new floor without a level goes on top of the house", () => {
  const added = newFloorFor(house(level("g", 0)), null, names);
  assert.equal(added.elevation, 2.75);
});

test("floors stay ordered from bottom to top when one is added", () => {
  const floors = [level("a", 0), level("b", 3), level("c", 6)];
  assert.deepEqual(floorsWith(floors, level("x", 1)).map((f) => f.id), ["a", "x", "b", "c"]);
  assert.deepEqual(floorsWith(floors, level("x", 9)).map((f) => f.id), ["a", "b", "c", "x"]);
  assert.deepEqual(floorsWith(floors, level("x", -3)).map((f) => f.id), ["x", "a", "b", "c"]);
  assert.deepEqual(floorsWith([], level("x", 0)).map((f) => f.id), ["x"]);
});

test("floors swap with the neighbour in the direction, and stay put at the ends", () => {
  const floors = [level("a", 0), level("b", 3), level("c", 6)];
  assert.deepEqual(floorsSwapped(floors, "b", 1).map((f) => f.id), ["a", "c", "b"]);
  assert.deepEqual(floorsSwapped(floors, "b", -1).map((f) => f.id), ["b", "a", "c"]);
  assert.deepEqual(floorsSwapped(floors, "c", 1).map((f) => f.id), ["a", "b", "c"]);
  assert.deepEqual(floorsSwapped(floors, "nope", 1).map((f) => f.id), ["a", "b", "c"]);
});

test("Home Assistant floors that are not used yet come lowest first, unnumbered ones last", () => {
  const registry = { a: { floor_id: "a", name: "Attic", level: 2 }, g: { floor_id: "g", name: "Ground", level: 0 }, z: { floor_id: "z", name: "Zeta" }, b: { floor_id: "b", name: "Basement", level: -1 } };
  const doc = house(level("x", 0, { ha_floor: "g" }));
  assert.deepEqual(freeHaFloors(doc, registry).map((f) => f.floor_id), ["b", "a", "z"]);
  assert.deepEqual(freeHaFloors(doc, undefined), []);
  assert.deepEqual(linkableHaFloors(doc, doc.floors[0], registry).map((f) => f.floor_id).sort(), ["a", "b", "g", "z"]);
  assert.deepEqual(linkableHaFloors(house(level("x", 0, { ha_floor: "g" }), level("y", 3)), doc.floors[0], registry).map((f) => f.floor_id).sort(), ["a", "b", "g", "z"]);
  assert.deepEqual(linkableHaFloors(house(level("x", 0, { ha_floor: "g" }), level("y", 3, { ha_floor: "a" })), doc.floors[0], registry).map((f) => f.floor_id).sort(), ["b", "g", "z"]);
});

test("areas without a room: only those of the floor's Home Assistant floor, by name", () => {
  const areas = {
    k: { area_id: "k", name: "Kitchen", floor_id: "g" },
    b: { area_id: "b", name: "Bath", floor_id: "g" },
    a: { area_id: "a", name: "Attic room", floor_id: "up" },
    h: { area_id: "h", name: "Hall", floor_id: "g" },
  };
  const ground = floorWith([box("room", 0, 0, 1, 1, "h")], { id: "x", ha_floor: "g" } as never);
  const doc = { floors: [ground] } as unknown as Building;
  assert.deepEqual(unplacedAreas(doc, ground, areas).map((a) => a.area_id), ["b", "k"]);
  assert.deepEqual(unplacedAreas(doc, { ...ground, ha_floor: null }, areas), []);
  assert.deepEqual(unplacedAreas(doc, ground, undefined), []);
});
