import assert from "node:assert/strict";
import { test } from "node:test";
import { deviceSensors, energySummary, findConsumers, meterPosition, powerSensorFor, proposeEnergySensors, readPower, suggestGridSpot } from "./energy.ts";
import { emptyBuilding, newFloor, type Building, type Furniture } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

const sensor = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });
const hassOf = (list: HassEntity[], entities: Record<string, Record<string, unknown>> = {}) =>
  ({ states: Object.fromEntries(list.map((s) => [s.entity_id, s])), entities: Object.fromEntries(Object.entries(entities).map(([id, e]) => [id, { entity_id: id, ...e }])) }) as unknown as HomeAssistant;
const piece = (type: string, extra: Partial<Furniture> = {}): Furniture => ({ id: type + Math.random(), type, x: 1, z: 1, rotation: 0, w: 1, d: 1, h: 1, variant: null, entity: null, power: null, ...extra });
const house = (...pieces: Furniture[]): Building => {
  const b = emptyBuilding();
  const f = newFloor("g", "Ground", 0);
  f.furniture = pieces;
  f.rooms = [{ id: "r", name: "R", area_id: null, points: [[0, 0], [6, 0], [6, 4], [0, 4]], floor_material: "wood" }];
  b.floors = [f];
  return b;
};

test("power is read in watts whatever the unit, and can be flipped", () => {
  assert.equal(readPower(sensor("sensor.a", "1.5", { unit_of_measurement: "kW" })), 1500);
  assert.equal(readPower(sensor("sensor.a", "2", { unit_of_measurement: "MW" })), 2e6);
  assert.equal(readPower(sensor("sensor.a", "300")), 300);
  assert.equal(readPower(sensor("sensor.a", "300"), true), -300);
  assert.equal(readPower(sensor("sensor.a", "unavailable")), null);
  assert.equal(readPower(undefined), null);
});

test("energy devices in the plan are collected without duplicates", () => {
  const b = house(
    piece("meter", { power: "sensor.grid", export: "sensor.feed" }),
    piece("inverter", { power: "sensor.pv1" }),
    piece("inverter", { power: "sensor.pv1" }),
    piece("inverter", { power: "sensor.pv2" }),
    piece("home_battery", { power: "sensor.bat", charge: "sensor.bat_in", soc: "sensor.soc" }),
  );
  const d = deviceSensors(b);
  assert.deepEqual([d.grid, d.gridExport, d.solar, d.soc], ["sensor.grid", "sensor.feed", ["sensor.pv1", "sensor.pv2"], ["sensor.soc"]]);
  assert.deepEqual(d.batteries, [{ power: "sensor.bat", charge: "sensor.bat_in" }]);
});

test("the meter cabinet in the plan is where cables meet, else the configured spot", () => {
  const b = house(piece("meter", { x: 2, z: 3 }));
  assert.deepEqual(meterPosition(b), { floor_id: "g", x: 2, z: 3 });
  const none = house();
  none.energy.meter = { floor_id: "g", x: 5, z: 5 };
  assert.deepEqual(meterPosition(none), { floor_id: "g", x: 5, z: 5 });
});

test("the summary balances grid, solar and battery into the house's consumption", () => {
  const b = house();
  b.energy = { ...b.energy, grid: "sensor.grid", solar: "sensor.pv", battery: "sensor.bat", battery_soc: "sensor.soc" };
  const hass = hassOf([sensor("sensor.grid", "-500"), sensor("sensor.pv", "2000"), sensor("sensor.bat", "-300"), sensor("sensor.soc", "64")]);
  const s = energySummary(hass, b, []);
  assert.deepEqual([s.grid, s.solar, s.battery, s.soc], [-500, 2000, -300, 64]);
  assert.equal(s.consumption, 1200); // -500 + 2000 - 300
});

test("a consumption sensor wins over the balance, and the consumers are the last resort", () => {
  const b = house();
  b.energy = { ...b.energy, consumption: "sensor.use" };
  assert.equal(energySummary(hassOf([sensor("sensor.use", "850")]), b, []).consumption, 850);
  const plain = house();
  const consumers = [{ id: "a", powerEntity: "p", floorId: "g", x: 0, z: 0, power: 40 }, { id: "b", powerEntity: "q", floorId: "g", x: 0, z: 0, power: 60 }];
  assert.equal(energySummary(hassOf([]), plain, consumers).consumption, 100);
  assert.equal(energySummary(hassOf([]), plain, []).consumption, null);
});

test("devices placed in the plan supply the numbers when no balance sensor is set", () => {
  const b = house(piece("meter", { power: "sensor.in", export: "sensor.out" }), piece("inverter", { power: "sensor.pv" }), piece("home_battery", { power: "sensor.dis", charge: "sensor.chg" }));
  const hass = hassOf([sensor("sensor.in", "100"), sensor("sensor.out", "700"), sensor("sensor.pv", "1500"), sensor("sensor.dis", "0"), sensor("sensor.chg", "400")]);
  const s = energySummary(hass, b, []);
  assert.equal(s.grid, -600);
  assert.equal(s.solar, 1500);
  assert.equal(s.battery, -400);
});

test("a flipped grid sensor changes the sign", () => {
  const b = house();
  b.energy = { ...b.energy, grid: "sensor.grid", grid_invert: true };
  assert.equal(energySummary(hassOf([sensor("sensor.grid", "800")]), b, []).grid, -800);
});

test("tariff and charge level are optional", () => {
  const b = house();
  b.energy = { ...b.energy, tariff: "sensor.price" };
  const s = energySummary(hassOf([sensor("sensor.price", "0.31", { unit_of_measurement: "€/kWh" })]), b, []);
  assert.deepEqual(s.tariff, { value: 0.31, unit: "€/kWh" });
  assert.equal(s.soc, null);
});

test("a placed entity's power sensor is itself, or one of its device; hubs only give same-area sensors", () => {
  const hass = hassOf(
    [sensor("light.a", "on"), sensor("sensor.a_power", "12", { device_class: "power" }), sensor("sensor.hub_power_k", "5", { device_class: "power" }), sensor("sensor.hub_power_b", "7", { device_class: "power" }), sensor("light.k", "on")],
    {
      "light.a": { device_id: "d1" },
      "sensor.a_power": { device_id: "d1" },
      "light.k": { device_id: "hub", area_id: "kitchen" },
      "sensor.hub_power_k": { device_id: "hub", area_id: "kitchen" },
      "sensor.hub_power_b": { device_id: "hub", area_id: "bath" },
    },
  );
  assert.equal(powerSensorFor(hass, "sensor.a_power"), "sensor.a_power");
  assert.equal(powerSensorFor(hass, "light.a"), "sensor.a_power");
  assert.equal(powerSensorFor(hass, "light.nowhere"), null);
  assert.ok(["sensor.hub_power_k", null].includes(powerSensorFor(hass, "light.k")));
});

test("consumers skip the balance sensors and count a shared sensor once", () => {
  const b = house();
  b.energy = { ...b.energy, grid: "sensor.grid" };
  b.floors[0].placements = [
    { entity_id: "sensor.grid", x: 0, z: 0, y: null, mount: null },
    { entity_id: "sensor.oven", x: 1, z: 1, y: null, mount: null },
    { entity_id: "sensor.oven", x: 2, z: 2, y: null, mount: null },
  ];
  const hass = hassOf([sensor("sensor.grid", "100", { device_class: "power" }), sensor("sensor.oven", "-5", { device_class: "power" })]);
  const consumers = findConsumers(hass, b);
  assert.equal(consumers.length, 1);
  assert.equal(consumers[0].power, 0, "negative readings count as zero");
});

test("proposals follow the energy dashboard: the device's total power sensor, not a phase", () => {
  const hass = hassOf(
    [sensor("sensor.meter_energy", "1"), sensor("sensor.meter_power_l1", "1", { device_class: "power" }), sensor("sensor.meter_power", "3", { device_class: "power" })],
    { "sensor.meter_energy": { device_id: "m" }, "sensor.meter_power_l1": { device_id: "m" }, "sensor.meter_power": { device_id: "m" } },
  );
  const proposal = proposeEnergySensors(hass, { energy_sources: [{ type: "grid", flow_from: [{ stat_energy_from: "sensor.meter_energy" }] }] });
  assert.equal(proposal.grid, "sensor.meter_power");
  assert.deepEqual(proposeEnergySensors(hass, {}), {});
});

test("the grid connection is suggested outside the wall nearest to the meter", () => {
  const b = house(piece("meter", { x: 5.8, z: 2 }));
  const spot = suggestGridSpot(b)!;
  assert.equal(spot.floorId, "g");
  assert.ok(spot.x > 6, "outside the east wall");
  assert.ok(Math.abs(spot.z - 2) < 0.5);
  assert.equal(suggestGridSpot(house()), null);
});
