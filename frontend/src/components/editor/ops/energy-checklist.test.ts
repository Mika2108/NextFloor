import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, floorWith, hassOf } from "../../../entities/fixtures.ts";
import type { Building, Furniture } from "../../../model.ts";
import { energyChecklist } from "./energy-checklist.ts";
import { importEnergyPrefs } from "./energy-import.ts";

const device = (id: string, type: string, extra: Partial<Furniture> = {}): Furniture => ({ id, type, x: 0, z: 0, rotation: 0, w: 1, d: 1, h: 1, variant: null, ...extra });
const plan = (furniture: Furniture[], energy = {}, solar: unknown[] = []): Building =>
  ({ version: 1, floors: [floorWith([], { furniture })], settings: { roof: { type: "none", solar } }, energy, presence: [] }) as unknown as Building;
const none = new Map<string, { power: string | null }>();

test("an empty plan lists everything to do, with the battery and grid point optional", () => {
  const rows = energyChecklist(plan([]), none);
  assert.deepEqual(rows.map((r) => [r.label, r.state]), [["chk_solar_add", "todo"], ["chk_meter_add", "todo"], ["chk_inverter_add", "todo"], ["chk_battery_opt", "opt"], ["chk_grid_opt", "opt"]]);
  assert.deepEqual(rows[1].target, { kind: "add-device", type: "meter" });
});

test("devices without a sensor ask for one, with a sensor (own or found) they are done", () => {
  const furniture = [device("m", "meter"), device("i", "inverter"), device("b", "home_battery")];
  const open = energyChecklist(plan(furniture, {}, [{ id: "f1" }]), none);
  assert.deepEqual(open.map((r) => r.state), ["ok", "todo", "todo", "todo", "opt"]);
  assert.equal(open[1].label, "chk_meter_sensor");
  const done = energyChecklist(plan([device("m", "meter", { power: "sensor.m" }), device("i", "inverter"), device("b", "home_battery", { power: "sensor.b", soc: "sensor.soc" })], {}, [{ id: "f1" }]), new Map([["i", { power: "sensor.found" }]]));
  assert.deepEqual(done.map((r) => r.state), ["ok", "ok", "ok", "ok", "opt"]);
});

test("sensors chosen in the balance settings count for the devices", () => {
  const rows = energyChecklist(plan([device("m", "meter"), device("i", "inverter"), device("b", "home_battery")], { grid: "sensor.g", solar: "sensor.s", battery: "sensor.b" }), none);
  assert.deepEqual(rows.slice(1, 4).map((r) => r.state), ["ok", "ok", "ok"]);
});

test("the inverter row points at the first inverter that still lacks a sensor", () => {
  const furniture = [device("i1", "inverter", { power: "sensor.a" }), device("i2", "inverter")];
  const row = energyChecklist(plan(furniture), none)[2];
  assert.equal(row.state, "todo");
  assert.ok(row.target.kind === "device" && row.target.item.id === "i2");
});

function importSetup(furniture: Furniture[], statesOk = true) {
  const hass = Object.assign(
    hassOf(
      [entity("sensor.grid_power", "10", { device_class: "power" }), entity("sensor.pv_power", "5", { device_class: "power" })],
      { "sensor.grid_power": { device_id: "dg" }, "sensor.pv_power": { device_id: "dp" }, "sensor.grid_energy": { device_id: "dg" }, "sensor.pv_energy": { device_id: "dp" } },
    ),
    {
      callWS: async () => {
        if (!statesOk) throw new Error("no");
        return { energy_sources: [{ type: "grid", flow_from: [{ stat_energy_from: "sensor.grid_energy" }] }, { type: "solar", stat_energy_from: "sensor.pv_energy" }] };
      },
    },
  );
  const doc = plan(furniture);
  const set: string[] = [];
  const added: string[] = [];
  const deps = {
    hass,
    doc: () => doc,
    canAdd: () => true,
    addDevice: (type: string) => {
      added.push(type);
      doc.floors[0].furniture.push(device(`new-${type}`, type));
    },
    setField: (id: string, key: string, sensor: string) => {
      set.push(`${id}.${key}=${sensor}`);
      const item = doc.floors[0].furniture.find((m) => m.id === id)!;
      (item as unknown as Record<string, string>)[key] = sensor;
    },
  };
  return { deps, set, added };
}

test("the import fills the sensors found in the energy dashboard and creates the missing devices", async () => {
  const s = importSetup([device("m", "meter")]);
  const result = await importEnergyPrefs(s.deps);
  assert.deepEqual(result.kind === "done" && result.filled, 2);
  assert.deepEqual(s.added, ["inverter"]);
  assert.deepEqual(s.set, ["m.power=sensor.grid_power", "new-inverter.power=sensor.pv_power"]);
});

test("what is already set stays, and a failing dashboard call is reported", async () => {
  const kept = importSetup([device("m", "meter", { power: "sensor.mine" }), device("i", "inverter", { power: "sensor.mine2" })]);
  const result = await importEnergyPrefs(kept.deps);
  assert.deepEqual(result, { kind: "done", filled: 0 });
  assert.deepEqual(kept.set, []);
  const broken = importSetup([], false);
  assert.deepEqual(await importEnergyPrefs(broken.deps), { kind: "failed" });
});
