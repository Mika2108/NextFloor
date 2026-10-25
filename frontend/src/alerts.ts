// Warnings in the 3D view: smoke, gas, carbon monoxide and leak sensors of a room, an alarm panel that
// went off, a power outage, and a window left open in the rain. A room with a warning pulses in the warning's colour.

import { areaEntities, entityName, openingState, type OpeningEntities } from "./devices.ts";
import { translate } from "./i18n.ts";
import type { Building, Opening } from "./model.ts";
import type { HomeAssistant } from "./types.ts";
import { weatherEntity } from "./weather.ts";

export type AlertKind = "smoke" | "gas" | "co" | "water" | "alarm" | "alarm_pending" | "window_rain" | "power_outage";

export interface Alert {
  kind: AlertKind;
  entity: string;
  /** Room and floor it concerns; null for the whole house (an alarm). */
  roomId: string | null;
  floorId: string | null;
}

/** Where the warnings come from. Looked up once and kept until the registries change. */
export interface AlertSources {
  rooms: { floorId: string; roomId: string; sensors: string[] }[];
  alarms: string[];
  weather: string | null;
  /** An own rain sensor (a weather station): it decides instead of the weather entity's condition. */
  rain: string | null;
  /** A sensor that tells a power outage (grid gone). */
  outage: string | null;
}

/** Weather conditions that wet a window. */
export const RAIN_STATES = new Set(["rainy", "pouring", "lightning-rainy", "hail", "snowy-rainy"]);

/** device_class of a binary sensor -> the warning it raises. */
const SENSOR_WARNING = new Map<string, AlertKind>([
  ["smoke", "smoke"],
  ["gas", "gas"],
  ["carbon_monoxide", "co"],
  ["moisture", "water"],
]);

const warningOf = (hass: HomeAssistant, entityId: string): AlertKind | undefined => {
  if (!entityId.startsWith("binary_sensor.")) return undefined;
  return SENSOR_WARNING.get(String(hass.states[entityId]?.attributes.device_class));
};

/** Warning sensors per room, the alarm panels, and the weather entity (none when the rain warning is off). */
export function alertSources(hass: HomeAssistant, building: Building, weatherId?: string | null): AlertSources {
  const rooms: AlertSources["rooms"] = [];
  for (const floor of building.floors) {
    for (const room of floor.rooms) {
      const sensors = areaEntities(hass, room.area_id).filter((id) => warningOf(hass, id));
      if (sensors.length > 0) rooms.push({ floorId: floor.id, roomId: room.id, sensors });
    }
  }
  const rainWarningOn = building.settings.rain_warning !== false;
  const rain = building.settings.rain_sensor;
  return {
    rooms,
    alarms: Object.keys(hass.states).filter((id) => id.startsWith("alarm_control_panel.")),
    weather: rainWarningOn ? weatherEntity(hass, weatherId ?? building.settings.weather_entity) : null,
    rain: rainWarningOn && rain && rain !== "none" ? rain : null,
    outage: building.settings.outage_sensor && building.settings.outage_sensor !== "none" ? building.settings.outage_sensor : null,
  };
}

/** Every entity whose change can raise or clear a warning. */
export function alertEntities(sources: AlertSources): string[] {
  const ids = sources.rooms.flatMap((r) => r.sensors).concat(sources.alarms);
  for (const id of [sources.weather, sources.rain, sources.outage]) if (id) ids.push(id);
  return ids;
}

function sensorWarnings(hass: HomeAssistant, sources: AlertSources): Alert[] {
  const found: Alert[] = [];
  for (const { floorId, roomId, sensors } of sources.rooms) {
    for (const entity of sensors) {
      const kind = warningOf(hass, entity);
      if (kind && hass.states[entity]?.state === "on") found.push({ kind, entity, roomId, floorId });
    }
  }
  return found;
}

const isAjar = (hass: HomeAssistant, link: OpeningEntities): boolean => {
  const s = openingState(hass, link, "window");
  return Math.max(s.open, s.tilt, s.open2, s.tilt2) >= 0.5;
};

/** Whether it rains: an own rain sensor (on, or a rain rate above zero) wins over the weather entity's condition. */
export function isRaining(hass: HomeAssistant, sources: Pick<AlertSources, "weather" | "rain">): boolean {
  if (sources.rain) {
    const st = hass.states[sources.rain];
    if (!st || st.state === "unavailable" || st.state === "unknown") return false;
    const rate = Number(st.state);
    return Number.isFinite(rate) ? rate > 0 : st.state === "on" || /rain|regen|wet|nass/i.test(st.state);
  }
  const weather = sources.weather ? hass.states[sources.weather]?.state : undefined;
  return !!weather && RAIN_STATES.has(weather);
}

const OUTAGE_WORDS = /^(off_grid|off-grid|outage|grid_down|grid_lost|islanding|island|backup|no_grid|stromausfall|netzausfall|inselbetrieb)$/i;

/**
 * Whether the power is out, from the outage sensor: a binary sensor of class power (or plug) that says off, any other binary sensor that
 * says on, a sensor with a state like "off_grid" / "backup", or a voltage that dropped below 50 V.
 */
export function isPowerOut(hass: HomeAssistant, id: string | null): boolean {
  const st = id ? hass.states[id] : undefined;
  if (!st || st.state === "unavailable" || st.state === "unknown") return false;
  if (id!.startsWith("binary_sensor.")) {
    const cls = String(st.attributes.device_class ?? "");
    return cls === "power" || cls === "plug" ? st.state === "off" : st.state === "on";
  }
  const value = Number(st.state);
  if (Number.isFinite(value)) return st.attributes.unit_of_measurement === "V" && value < 50;
  return OUTAGE_WORDS.test(st.state.trim());
}

function rainWarnings(hass: HomeAssistant, building: Building, sources: AlertSources, links: Map<string, OpeningEntities>): Alert[] {
  if (!isRaining(hass, sources)) return [];
  const found: Alert[] = [];
  for (const floor of building.floors) {
    for (const opening of floor.openings as Opening[]) {
      const link = links.get(opening.id);
      // a window under a roof or an awning can be left out of the rain warning
      if (opening.type !== "window" || opening.rain_warning === false || !link || !isAjar(hass, link)) continue;
      found.push({ kind: "window_rain", entity: link.contact ?? link.tilt ?? link.contact2 ?? opening.id, roomId: opening.room_id, floorId: floor.id });
    }
  }
  return found;
}

function alarmWarnings(hass: HomeAssistant, sources: AlertSources): Alert[] {
  const found: Alert[] = [];
  for (const entity of sources.alarms) {
    const state = hass.states[entity]?.state;
    if (state === "triggered") found.push({ kind: "alarm", entity, roomId: null, floorId: null });
    if (state === "pending") found.push({ kind: "alarm_pending", entity, roomId: null, floorId: null });
  }
  return found;
}

/** The warnings that are active now: room sensors, then windows in the rain, then house-wide alarms and a power outage. */
export function findAlerts(hass: HomeAssistant, building: Building, sources: AlertSources, links: Map<string, OpeningEntities>): Alert[] {
  const outage: Alert[] = sources.outage && isPowerOut(hass, sources.outage) ? [{ kind: "power_outage", entity: sources.outage, roomId: null, floorId: null }] : [];
  return [...sensorWarnings(hass, sources), ...rainWarnings(hass, building, sources, links), ...alarmWarnings(hass, sources), ...outage];
}

const PULSE: Record<AlertKind, [number, number, number]> = {
  smoke: [1, 0.2, 0.25],
  gas: [1, 0.2, 0.25],
  co: [1, 0.2, 0.25],
  alarm: [1, 0.2, 0.25],
  water: [0.2, 0.6, 1],
  window_rain: [0.35, 0.72, 1],
  alarm_pending: [1, 0.62, 0.2],
  power_outage: [1, 0.62, 0.2],
};

/** The colour a room pulses in (channels 0..1). */
export const alertColor = (kind: AlertKind): [number, number, number] => PULSE[kind];

/** One line for the banner, e.g. "Kitchen · Smoke: smoke detector". */
export function alertText(hass: HomeAssistant | undefined, building: Building, a: Alert): string {
  const name = hass ? entityName(hass, a.entity) : a.entity;
  const message = translate(hass, `alert_${a.kind}` as Parameters<typeof translate>[1], { name });
  const room = a.roomId === null ? undefined : building.floors.flatMap((f) => f.rooms).find((r) => r.id === a.roomId);
  return room ? `${room.name} · ${message}` : message;
}
