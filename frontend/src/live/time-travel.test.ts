import assert from "node:assert/strict";
import { test } from "node:test";
import type { HomeAssistant } from "../types.ts";
import { changeAt, changeMoments, hassAt, parseHistory, replayable } from "./time-travel.ts";

const raw = {
  "light.kitchen": [
    { s: "off", a: { friendly_name: "Kitchen" }, lu: 1000 },
    { s: "on", a: { friendly_name: "Kitchen", brightness: 200 }, lu: 1100 },
    { s: "off", lu: 1200 },
  ],
  "binary_sensor.door": [{ s: "off", a: { device_class: "door" }, lu: 900 }, { s: "on", lu: 1150 }],
};

test("the recorder's answer becomes sorted changes; attributes carry on until they change", () => {
  const h = parseHistory(raw);
  const kitchen = h.get("light.kitchen")!;
  assert.deepEqual(kitchen.map((c) => [c.t, c.state]), [[1_000_000, "off"], [1_100_000, "on"], [1_200_000, "off"]]);
  assert.equal(kitchen[2].attributes.brightness, 200);
});

test("the state at a moment is the last change before it", () => {
  const kitchen = parseHistory(raw).get("light.kitchen")!;
  assert.equal(changeAt(kitchen, 999_999), null);
  assert.equal(changeAt(kitchen, 1_150_000)?.state, "on");
  assert.equal(changeAt(kitchen, 5_000_000)?.state, "off");
});

test("hass at a moment shows the replayed entities as they were and leaves the rest alone", () => {
  const hass = { states: { "light.kitchen": { entity_id: "light.kitchen", state: "off", attributes: { friendly_name: "Kitchen", icon: "mdi:x" } }, "sensor.t": { entity_id: "sensor.t", state: "21", attributes: {} } } } as unknown as HomeAssistant;
  const then = hassAt(hass, parseHistory(raw), 1_150_000);
  assert.equal(then.states["light.kitchen"].state, "on");
  assert.equal(then.states["light.kitchen"].attributes.icon, "mdi:x", "attributes the history lacks stay");
  assert.equal(then.states["binary_sensor.door"].state, "on");
  assert.equal(then.states["sensor.t"].state, "21");
  assert.equal(hass.states["light.kitchen"].state, "off", "the live states are not touched");
});

test("the timeline marks every change of state inside the span", () => {
  const h = parseHistory(raw);
  assert.deepEqual(changeMoments(h, 0, 2_000_000), [1_100_000, 1_150_000, 1_200_000]);
  assert.deepEqual(changeMoments(h, 1_120_000, 2_000_000), [1_150_000, 1_200_000]);
  assert.equal(changeMoments(h, 0, 2_000_000, 2).length, 2);
});

test("only what switches, opens or moves is replayed", () => {
  assert.deepEqual(replayable(["light.a", "sensor.temp", "cover.b", "light.a", "binary_sensor.c", "weather.home"]), ["light.a", "cover.b", "binary_sensor.c"]);
});
