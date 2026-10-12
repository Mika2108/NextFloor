import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, hassOf } from "../../entities/fixtures.ts";
import { entityOptions, isBinary, isNumeric, isPowerSensor, powerSensorOf } from "./entities.ts";

test("numbers and switches are told apart by their domain", () => {
  for (const id of ["sensor.a", "input_number.b", "number.c"]) assert.equal(isNumeric(id), true, id);
  for (const id of ["binary_sensor.a", "light.a", "sensor"]) assert.equal(isNumeric(id), false, id);
  assert.equal(isBinary("binary_sensor.door"), true);
  assert.equal(isBinary("input_boolean.guest"), true);
  assert.equal(isBinary("switch.a"), false);
});

test("power sensors: by device class, or by a watt or kilowatt unit", () => {
  const hass = hassOf([
    entity("sensor.meter", "5", { device_class: "power" }),
    entity("sensor.mqtt", "5", { unit_of_measurement: "kW" }),
    entity("sensor.temp", "20", { device_class: "temperature", unit_of_measurement: "°C" }),
    entity("light.lamp", "on", { device_class: "power" }),
  ]);
  assert.equal(isPowerSensor(hass, "sensor.meter"), true);
  assert.equal(isPowerSensor(hass, "sensor.mqtt"), true);
  assert.equal(isPowerSensor(hass, "sensor.temp"), false);
  assert.equal(isPowerSensor(hass, "light.lamp"), false, "not a numeric domain");
  assert.equal(isPowerSensor(undefined, "sensor.meter"), false);
});

test("options carry the area and come out sorted by label", () => {
  const hass = hassOf(
    [entity("light.b", "on", { friendly_name: "Beta" }), entity("light.a", "on", { friendly_name: "Alpha" }), entity("switch.c", "on", { friendly_name: "Gamma" })],
    { "light.a": { entity_id: "light.a", area_id: "kitchen", device_id: null } as never },
    { areas: { kitchen: { area_id: "kitchen", name: "Kitchen" } } },
  );
  const options = entityOptions(hass, (id) => id.startsWith("light."));
  assert.deepEqual(options, [{ id: "light.a", label: "Alpha · Kitchen" }, { id: "light.b", label: "Beta" }]);
  assert.deepEqual(entityOptions(undefined, () => true), []);
});

test("an energy device's own power sensor wins over the found one, and 'none' means not set", () => {
  const found = new Map([["m1", { power: "sensor.found" }]]);
  assert.equal(powerSensorOf({ id: "m1", power: "sensor.own" }, found), "sensor.own");
  assert.equal(powerSensorOf({ id: "m1", power: "none" }, found), "sensor.found");
  assert.equal(powerSensorOf({ id: "m1" }, found), "sensor.found");
  assert.equal(powerSensorOf({ id: "m2" }, found), null);
});
