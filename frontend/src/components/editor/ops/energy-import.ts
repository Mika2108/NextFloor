// Filling the energy balance from Home Assistant's energy dashboard: its statistics lead to power sensors of the same devices, and
// those go onto the devices of the plan (meter, inverter, battery). Only empty fields are filled, so what the user chose stays.

import { proposeEnergySensors, type EnergyPrefs } from "../../../energy.ts";
import type { Building, Furniture } from "../../../model.ts";
import type { HomeAssistant } from "../../../types.ts";

export interface EnergyImportDeps {
  hass: HomeAssistant;
  /** The current plan; read again after a device was added. */
  doc(): Building;
  /** Whether a floor is selected, which is where missing devices are created. */
  canAdd(): boolean;
  addDevice(type: string): void;
  setField(furnitureId: string, key: "power" | "soc", sensor: string): void;
}

export type EnergyImportResult = { kind: "failed" } | { kind: "done"; filled: number };

/** The device of this type anywhere in the plan. */
const deviceOfType = (doc: Building, type: string): Furniture | undefined => doc.floors.flatMap((f) => f.furniture).find((m) => m.type === type);

const isEmpty = (value: string | null | undefined) => !value || value === "none";

export async function importEnergyPrefs(deps: EnergyImportDeps): Promise<EnergyImportResult> {
  let prefs: EnergyPrefs;
  try {
    prefs = await deps.hass.callWS<EnergyPrefs>({ type: "energy/get_prefs" });
  } catch {
    return { kind: "failed" };
  }
  const found = proposeEnergySensors(deps.hass, prefs);
  let filled = 0;
  const fill = (type: string, key: "power" | "soc", sensor: string | null | undefined) => {
    if (!sensor) return;
    let device = deviceOfType(deps.doc(), type);
    if (!device && deps.canAdd()) {
      deps.addDevice(type);
      device = deviceOfType(deps.doc(), type);
    }
    if (!device || !isEmpty(device[key])) return;
    deps.setField(device.id, key, sensor);
    filled++;
  };
  fill("meter", "power", found.grid);
  fill("inverter", "power", found.solar);
  fill("home_battery", "power", found.battery);
  fill("home_battery", "soc", found.battery_soc);
  return { kind: "done", filled };
}
