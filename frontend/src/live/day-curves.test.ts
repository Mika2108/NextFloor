import assert from "node:assert/strict";
import { test } from "node:test";
import type { HomeAssistant } from "../types.ts";
import { curvePath, dayCurves, statesRead } from "./day-curves.ts";
import { parseHistory } from "./time-travel.ts";

const hass = {
  states: {
    "sensor.pv": { entity_id: "sensor.pv", state: "800", attributes: {} },
    "sensor.grid": { entity_id: "sensor.grid", state: "200", attributes: {} },
    "sensor.other": { entity_id: "sensor.other", state: "1", attributes: {} },
  },
} as unknown as HomeAssistant;
const balance = (h: HomeAssistant) => {
  const solar = Number(h.states["sensor.pv"].state);
  return { solar, consumption: solar + Number(h.states["sensor.grid"].state) };
};

test("the sensors a balance reads are the ones whose history is loaded", () => {
  assert.deepEqual(statesRead(hass, balance).sort(), ["sensor.grid", "sensor.pv"]);
});

test("the balance is worked out again for every sample of the day", () => {
  const history = parseHistory({
    "sensor.pv": [{ s: "0", lu: 0 }, { s: "1000", lu: 50 }],
    "sensor.grid": [{ s: "300", lu: 0 }],
  });
  const c = dayCurves(hass, history, 0, 100_000, balance, 4);
  assert.deepEqual(c.solar, [0, 1000, 1000, 1000]);
  assert.deepEqual(c.use, [300, 1300, 1300, 1300]);
});

test("a curve is a path scaled to its box; missing values break it", () => {
  assert.equal(curvePath([0, 50, 100], 100, 10, 100), "M0.0,10.0L50.0,5.0L100.0,0.0");
  assert.equal(curvePath([0, null, 100], 100, 10, 100), "M0.0,10.0M100.0,0.0");
  assert.equal(curvePath([1, 2], 10, 10, 0), "");
});
