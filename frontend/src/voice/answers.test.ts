import assert from "node:assert/strict";
import { test } from "node:test";
import { box, entity, floorWith, hassOf, opening } from "../entities/fixtures.ts";
import { emptyBuilding } from "../model.ts";
import type { OpeningEntities } from "../devices.ts";
import { lightsOn, openThings } from "./answers.ts";

const words = { window: "Fenster", door: "Tür", garage: "Garagentor" };

test("the lights that are on, with their room", () => {
  const hass = hassOf([entity("light.a", "on"), entity("light.b", "off"), entity("light.c", "on")], { "light.a": { area_id: "k" }, "light.b": { area_id: "k" } });
  const b = emptyBuilding();
  b.floors = [floorWith([box("kitchen", 0, 0, 4, 4, "k")])];
  b.floors[0].rooms[0].name = "Küche";
  b.floors[0].placements = [{ entity_id: "light.c", x: 1, z: 1, y: null, mount: null } as never];
  assert.deepEqual(lightsOn(hass, b, new Map()).map((f) => [f.name, f.room]), [["light.a", "Küche"], ["light.c", "Küche"]]);
});

test("open windows and doors are named by room; a door without a contact does not count", () => {
  const hass = hassOf([entity("binary_sensor.w", "on", { device_class: "window" }), entity("binary_sensor.d", "off", { device_class: "door" })]);
  const b = emptyBuilding();
  b.floors = [floorWith([box("bath", 0, 0, 3, 3)], { openings: [opening("w", "bath", "window"), opening("d", "bath", "door"), opening("x", "bath", "door")] })];
  b.floors[0].rooms[0].name = "Bad";
  const links = new Map<string, OpeningEntities>([
    ["w", { cover: null, contact: "binary_sensor.w", tilt: null }],
    ["d", { cover: null, contact: "binary_sensor.d", tilt: null }],
    ["x", { cover: null, contact: null, tilt: null }],
  ]);
  assert.deepEqual(openThings(hass, b, links, words).map((f) => `${f.room} ${f.name}`), ["Bad Fenster"]);
});
