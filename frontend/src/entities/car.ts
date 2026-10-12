// The car on a parking spot: its entities (found on the car's Home Assistant device unless chosen) and what it reports.

import type { Floor, Furniture } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { isUnavailable } from "./kinds.ts";

/** Every role of the car, resolved to an entity id (or null). */
export interface CarEntities {
  soc: string | null;
  range: string | null;
  charging: string | null;
  plugged: string | null;
  lock: string | null;
  climate: string | null;
  tracker: string | null;
}

type Role = keyof CarEntities;

/** What the name of a car entity (id, friendly name, translation key) looks like for each role. */
const ROLE_NAME: Record<Role, RegExp> = {
  soc: /(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,
  range: /(^|_)(range|reichweite|remaining_range)($|_)/,
  charging: /(charging|charge_power|ladeleistung|laden|charger_power|lade)/,
  plugged: /(plug|cable|connected|stecker|kabel|angeschlossen)/,
  lock: /(lock|verriegel|schloss)/,
  climate: /(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,
  tracker: /./,
};

const WATTS = /^k?W$/;

const chosen = (ref: string | null | undefined): string | null => (ref && ref !== "none" ? ref : null);

/** The car's entities: those chosen in the editor, the rest from the device of the chosen entity (or of the presence entity). */
export function carEntities(hass: HomeAssistant, spot: Pick<Furniture, "entity" | "car">): CarEntities {
  const choice = spot.car ?? {};
  const seed = chosen(choice.device) ?? chosen(spot.entity);
  const deviceId = seed ? hass.entities?.[seed]?.device_id : null;
  const siblings = deviceId && hass.entities ? Object.values(hass.entities).filter((e) => e.device_id === deviceId).map((e) => e.entity_id) : [];

  const attribute = (id: string, name: string) => String(hass.states[id]?.attributes[name] ?? "");
  const nameOf = (id: string) => `${id} ${attribute(id, "friendly_name")} ${hass.entities?.[id]?.translation_key ?? ""}`.toLowerCase().replace(/[\s-]+/g, "_");
  const byName = (role: Role, domains: string[], accept: (id: string) => boolean = () => true) =>
    siblings.find((id) => domains.includes(id.split(".")[0]) && ROLE_NAME[role].test(nameOf(id)) && accept(id)) ?? null;
  const byClass = (domain: string, deviceClass: string) => siblings.find((id) => id.startsWith(`${domain}.`) && attribute(id, "device_class") === deviceClass) ?? null;
  const firstOf = (domain: string) => siblings.find((id) => id.startsWith(`${domain}.`)) ?? null;
  const unit = (id: string) => attribute(id, "unit_of_measurement");

  return {
    soc: chosen(choice.soc) ?? byClass("sensor", "battery") ?? byName("soc", ["sensor"], (id) => unit(id) === "%"),
    range: chosen(choice.range) ?? byName("range", ["sensor"], (id) => /km|mi/.test(unit(id))) ?? byName("range", ["sensor"]),
    charging: chosen(choice.charging) ?? byName("charging", ["sensor"], (id) => WATTS.test(unit(id))) ?? byName("charging", ["binary_sensor", "switch"]),
    plugged: chosen(choice.plugged) ?? byClass("binary_sensor", "plug") ?? byName("plugged", ["binary_sensor"]),
    lock: chosen(choice.lock) ?? firstOf("lock") ?? byName("lock", ["binary_sensor"]),
    climate: chosen(choice.climate) ?? firstOf("climate") ?? byName("climate", ["switch", "binary_sensor"]),
    tracker: chosen(choice.tracker) ?? firstOf("device_tracker"),
  };
}

/** What the car reports right now; null for anything it does not tell. */
export interface CarState {
  entities: CarEntities;
  soc: number | null;
  range: number | null;
  rangeUnit: string;
  /** Charging power in W, when a power sensor reports it. */
  chargingW: number | null;
  charging: boolean;
  plugged: boolean | null;
  locked: boolean | null;
  climateOn: boolean | null;
  /** The zone the car is in when not at home; "" for plain away, null when at home or unknown. */
  away: string | null;
}

export function carState(hass: HomeAssistant, spot: Pick<Furniture, "entity" | "car">): CarState {
  const entities = carEntities(hass, spot);
  const stateOf = (id: string | null) => (id ? hass.states[id] : undefined);
  const numberOf = (id: string | null): number | null => {
    const value = Number(stateOf(id)?.state);
    return id && Number.isFinite(value) ? value : null;
  };

  const chargeSensor = stateOf(entities.charging);
  const chargeUnit = String(chargeSensor?.attributes.unit_of_measurement ?? "");
  const chargingW = chargeSensor && WATTS.test(chargeUnit) ? (numberOf(entities.charging) ?? 0) * (chargeUnit === "kW" ? 1000 : 1) : null;
  // over 50 W counts as charging; without a power reading the sensor's own word decides
  const charging = chargingW !== null ? chargingW > 50 : !!chargeSensor && ["on", "charging", "laden"].includes(chargeSensor.state.toLowerCase());

  const soc = numberOf(entities.soc);
  const plug = stateOf(entities.plugged);
  const lock = stateOf(entities.lock);
  const climate = stateOf(entities.climate);
  const tracker = stateOf(entities.tracker);
  const zone = tracker?.state.toLowerCase() ?? "";
  return {
    entities,
    soc: soc === null ? null : Math.max(0, Math.min(100, soc)),
    range: numberOf(entities.range),
    rangeUnit: String(stateOf(entities.range)?.attributes.unit_of_measurement ?? "km"),
    chargingW,
    charging,
    plugged: plug ? plug.state === "on" : null,
    locked: lock ? (lock.entity_id.startsWith("lock.") ? lock.state === "locked" : lock.state === "on") : null,
    climateOn: climate ? (climate.entity_id.startsWith("climate.") ? !["off", "unavailable"].includes(climate.state) : climate.state === "on") : null,
    away: tracker && zone !== "home" && !isUnavailable(tracker) ? (zone === "not_home" ? "" : tracker.state) : null,
  };
}

/** Every entity the car's state depends on, so changes can be noticed. */
export function carWatched(hass: HomeAssistant, floors: readonly Floor[]): string[] {
  const spots = floors.flatMap((floor) => floor.furniture).filter((f) => f.type === "parking" && f.car);
  return spots.flatMap((spot) => Object.values(carEntities(hass, spot))).filter((id): id is string => !!id);
}
