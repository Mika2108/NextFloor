import assert from "node:assert/strict";
import { test } from "node:test";
import { box, entity, floorWith, hassOf } from "./fixtures.ts";
import { carEntities, carState, carWatched } from "./car.ts";

const vehicle = hassOf(
  [
    entity("binary_sensor.car_present", "on"),
    entity("sensor.car_battery", "64", { device_class: "battery", unit_of_measurement: "%" }),
    entity("sensor.car_range", "310", { unit_of_measurement: "km" }),
    entity("sensor.car_charger_power", "7.4", { unit_of_measurement: "kW" }),
    entity("binary_sensor.car_cable", "on", { device_class: "plug" }),
    entity("lock.car", "locked"),
    entity("climate.car", "off"),
    entity("device_tracker.car", "home"),
    entity("sensor.other_battery", "10", { device_class: "battery" }),
  ],
  {
    "binary_sensor.car_present": { device_id: "tesla" },
    "sensor.car_battery": { device_id: "tesla" },
    "sensor.car_range": { device_id: "tesla" },
    "sensor.car_charger_power": { device_id: "tesla" },
    "binary_sensor.car_cable": { device_id: "tesla" },
    "lock.car": { device_id: "tesla" },
    "climate.car": { device_id: "tesla" },
    "device_tracker.car": { device_id: "tesla" },
    "sensor.other_battery": { device_id: "elsewhere" },
  },
);
const spot = { entity: "binary_sensor.car_present", car: undefined } as never;

test("each role is found among the entities of the presence entity's device", () => {
  assert.deepEqual(carEntities(vehicle, spot), {
    soc: "sensor.car_battery",
    range: "sensor.car_range",
    charging: "sensor.car_charger_power",
    plugged: "binary_sensor.car_cable",
    lock: "lock.car",
    climate: "climate.car",
    tracker: "device_tracker.car",
  });
});

test("a chosen entity wins, a device can be chosen, and 'none' means nothing chosen", () => {
  const e = carEntities(vehicle, { entity: null, car: { device: "sensor.car_range", soc: "sensor.other_battery", lock: "none" } } as never);
  assert.equal(e.soc, "sensor.other_battery");
  assert.equal(e.range, "sensor.car_range");
  assert.equal(e.lock, "lock.car", "'none' falls back to the automatic match");
});

test("without a device nothing is found", () => {
  const e = carEntities(vehicle, { entity: "binary_sensor.unknown", car: undefined } as never);
  assert.deepEqual(Object.values(e), [null, null, null, null, null, null, null]);
});

test("the state reads charge, range, charging power in watts, plug, lock and climate", () => {
  const s = carState(vehicle, spot);
  assert.equal(s.soc, 64);
  assert.equal(s.range, 310);
  assert.equal(s.rangeUnit, "km");
  assert.equal(s.chargingW, 7400);
  assert.equal(s.charging, true);
  assert.equal(s.plugged, true);
  assert.equal(s.locked, true);
  assert.equal(s.climateOn, false);
  assert.equal(s.away, null);
});

test("charging below 50 W is not charging, and a charge level is kept between 0 and 100", () => {
  const hass = hassOf([entity("sensor.p", "20", { unit_of_measurement: "W" }), entity("sensor.s", "130", { unit_of_measurement: "%" })]);
  const s = carState(hass, { entity: null, car: { charging: "sensor.p", soc: "sensor.s" } } as never);
  assert.equal(s.charging, false);
  assert.equal(s.soc, 100);
});

test("a charging switch without power reading counts by its state", () => {
  const hass = hassOf([entity("switch.charge", "on")]);
  const s = carState(hass, { entity: null, car: { charging: "switch.charge" } } as never);
  assert.equal(s.chargingW, null);
  assert.equal(s.charging, true);
});

test("away says where the car is: its zone, or an empty text for plain away", () => {
  const away = (state: string) => carState(hassOf([entity("device_tracker.t", state)]), { entity: null, car: { tracker: "device_tracker.t" } } as never).away;
  assert.equal(away("home"), null);
  assert.equal(away("not_home"), "");
  assert.equal(away("Work"), "Work");
  assert.equal(away("unavailable"), null);
});

test("watched entities come from parking spots that have car settings", () => {
  const floor = floorWith([box("r", 0, 0, 4, 3)], {
    furniture: [
      { id: "p", type: "parking", x: 1, z: 1, rotation: 0, w: 2, d: 5, h: 0.02, variant: null, entity: "binary_sensor.car_present", power: null, car: {} },
      { id: "q", type: "parking", x: 3, z: 1, rotation: 0, w: 2, d: 5, h: 0.02, variant: null, entity: "binary_sensor.car_present", power: null },
    ],
  });
  const watched = carWatched(vehicle, [floor]);
  assert.ok(watched.includes("sensor.car_battery"));
  assert.equal(new Set(watched).size, 7, "only the first spot, one entry per role");
});
