import assert from "node:assert/strict";
import { test } from "node:test";
import { fanSpin } from "./entities/fans.ts";
import { box, entity, floorWith, hassOf } from "./entities/fixtures.ts";
import { furnitureEntities } from "./entities/furniture-links.ts";
import { generateWalls } from "./geometry/walls.ts";
import { canLift, ceilingAt, ceilingOf, type Furniture } from "./model.ts";
import { mountBase } from "./packs.ts";

const piece = (id: string, type: string, extra: Partial<Furniture> = {}): Furniture => ({ id, type, x: 1, z: 1, rotation: 0, w: 1, d: 1, h: 0.3, variant: null, entity: null, power: null, ...extra });

// a 4 m high floor with a low bathroom (2.12 m) next to a room without a ceiling of its own
const bath = { ...box("bath", 0, 0, 2, 2), ceiling: 2.12 };
const hall = box("hall", 2, 0, 6, 2);
const floor = floorWith([bath, hall], { height: 4 });

test("the ceiling above a point is the room's own one, else the floor height", () => {
  assert.equal(ceilingAt(floor, 1, 1), 2.12);
  assert.equal(ceilingAt(floor, 4, 1), 4);
  // outside every room
  assert.equal(ceilingAt(floor, 10, 10), 4);
});

test("a ceiling set on the piece itself wins over the room's (a lamp in a sloping ceiling)", () => {
  assert.equal(ceilingOf(floor, { x: 1, z: 1 }), 2.12);
  assert.equal(ceilingOf(floor, { x: 1, z: 1, ceiling_y: 3.4 }), 3.4);
  assert.equal(ceilingOf(floor, { x: 1, z: 1, ceiling_y: null }), 2.12);
});

test("LED strips sit under the ceiling of their room", () => {
  const strip = piece("s", "led_strip", { h: 0.03 });
  assert.ok(Math.abs(mountBase(floor, strip) - (2.12 - 0.04 - 0.03)) < 1e-9);
  assert.ok(Math.abs(mountBase(floor, { ...strip, x: 4 }) - (4 - 0.04 - 0.03)) < 1e-9);
});

test("ceiling fans hang from the ceiling and are not lifted from the floor", () => {
  assert.equal(canLift(piece("f", "ceiling_fan")), false);
  assert.equal(canLift(piece("t", "lamp_table")), true);
});

test("a room's walls default to its ceiling; a wall shared with a room without one keeps the floor height", () => {
  const { walls } = generateWalls([bath, hall], { exterior: 0.3, interior: 0.1 });
  const outer = walls.filter((w) => w.exterior && w.roomLeft === "bath");
  assert.ok(outer.length > 0);
  for (const w of outer) assert.equal(w.height, 2.12);
  const shared = walls.find((w) => !w.exterior);
  assert.equal(shared?.height, undefined);
  // the hall's walls are full height
  assert.ok(walls.filter((w) => w.exterior && w.roomLeft === "hall").every((w) => w.height === undefined));
});

test("between two rooms with their own ceilings the wall is as high as the higher one", () => {
  const { walls } = generateWalls([bath, { ...hall, ceiling: 3 }], { exterior: 0.3, interior: 0.1 });
  assert.equal(walls.find((w) => !w.exterior)?.height, 3);
});

test("a height set by hand on an edge still wins over the room's ceiling", () => {
  const { walls } = generateWalls([{ ...bath, wall_heights: [1, null, null, null] }], { exterior: 0.3, interior: 0.1 });
  const heights = walls.map((w) => w.height).sort();
  assert.deepEqual(heights, [1, 2.12, 2.12, 2.12]);
});

test("a fan's blades turn faster with its speed and stand still while it is off", () => {
  assert.equal(fanSpin(undefined), 0);
  assert.equal(fanSpin({ state: "off", attributes: { percentage: 0 } }), 0);
  const slow = fanSpin({ state: "on", attributes: { percentage: 25 } });
  const fast = fanSpin({ state: "on", attributes: { percentage: 100 } });
  assert.ok(slow > 0 && fast > slow);
  // a fan without speeds turns at a middle speed
  assert.ok(fanSpin({ state: "on", attributes: {} }) > slow);
});

test("a ceiling fan takes the fan of its room and the light on the same device as its light kit", () => {
  const hass = hassOf(
    [entity("fan.living_fan", "on", { percentage: 50 }), entity("light.living_fan_light", "on"), entity("light.main_ceiling", "on")],
    {
      "fan.living_fan": { area_id: "area", device_id: "fan1" },
      "light.living_fan_light": { area_id: "area", device_id: "fan1" },
      "light.main_ceiling": { area_id: "area" },
    },
  );
  const room = box("r", 0, 0, 4, 3, "area");
  const links = furnitureEntities(hass, [floorWith([room], { furniture: [piece("fan", "ceiling_fan")] })]).get("fan");
  assert.deepEqual(links, { entity: "light.living_fan_light", power: null, fan: "fan.living_fan" });
});

test("a ceiling fan without a light kit does not take the room's ceiling light", () => {
  const hass = hassOf([entity("fan.bedroom", "off"), entity("light.main_ceiling", "on")], { "fan.bedroom": { area_id: "area" }, "light.main_ceiling": { area_id: "area" } });
  const room = box("r", 0, 0, 4, 3, "area");
  const links = furnitureEntities(hass, [floorWith([room], { furniture: [piece("fan", "ceiling_fan")] })]).get("fan");
  assert.deepEqual(links, { entity: null, power: null, fan: "fan.bedroom" });
});
