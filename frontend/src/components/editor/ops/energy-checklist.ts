// What the energy tool still needs, as a list that gets ticked off while the plan fills in. Pure: the form turns each row into a
// button that jumps to the thing to do.

import type { I18nKey } from "../../../i18n.ts";
import type { Building, Floor, Furniture } from "../../../model.ts";
import { powerSensorOf } from "../entities.ts";

export type ChecklistTarget =
  | { kind: "solar-field"; id: string }
  | { kind: "add-solar-field" }
  | { kind: "device"; floor: Floor; item: Furniture }
  | { kind: "add-device"; type: string };

export interface ChecklistRow {
  /** Done, still to do, or optional. */
  state: "ok" | "todo" | "opt";
  label: I18nKey;
  target: ChecklistTarget;
}

type Found = Map<string, { power: string | null }>;

export function energyChecklist(doc: Building, found: Found): ChecklistRow[] {
  const items = doc.floors.flatMap((floor) => floor.furniture.map((item) => ({ floor, item })));
  const ofType = (type: string) => items.filter((entry) => entry.item.type === type);
  const hasPower = (entry: (typeof items)[number]) => !!powerSensorOf(entry.item, found);
  const device = (entry: (typeof items)[number]): ChecklistTarget => ({ kind: "device", ...entry });
  const [fields, meters, inverters, batteries, grid] = [doc.settings.roof.solar ?? [], ofType("meter"), ofType("inverter"), ofType("home_battery"), ofType("grid_point")];

  const meterOk = !!doc.energy.grid || meters.some(hasPower);
  const inverterOk = !!doc.energy.solar || (inverters.length > 0 && inverters.every(hasPower));
  const batteryOk = !!doc.energy.battery || batteries.every((b) => hasPower(b) && b.item.soc && b.item.soc !== "none");

  return [
    fields.length > 0
      ? { state: "ok", label: "chk_solar", target: { kind: "solar-field", id: fields[0].id } }
      : { state: "todo", label: "chk_solar_add", target: { kind: "add-solar-field" } },
    meters.length > 0
      ? { state: meterOk ? "ok" : "todo", label: meterOk ? "chk_meter" : "chk_meter_sensor", target: device(meters[0]) }
      : { state: "todo", label: "chk_meter_add", target: { kind: "add-device", type: "meter" } },
    inverters.length > 0
      ? { state: inverterOk ? "ok" : "todo", label: inverterOk ? "chk_inverter" : "chk_inverter_sensor", target: device(inverters.find((i) => !hasPower(i)) ?? inverters[0]) }
      : { state: "todo", label: "chk_inverter_add", target: { kind: "add-device", type: "inverter" } },
    batteries.length > 0
      ? { state: batteryOk ? "ok" : "todo", label: batteryOk ? "chk_battery" : "chk_battery_sensor", target: device(batteries[0]) }
      : { state: "opt", label: "chk_battery_opt", target: { kind: "add-device", type: "home_battery" } },
    grid.length > 0 ? { state: "ok", label: "chk_grid", target: device(grid[0]) } : { state: "opt", label: "chk_grid_opt", target: { kind: "add-device", type: "grid_point" } },
  ];
}
