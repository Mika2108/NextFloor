// The household: waste bins that know their next pickup, a mailbox with post in it, thirsty plants, and the time a washer, dryer or
// dishwasher has left. Pure readings of entity states; the 3D view turns them into pins, texts and glows.

import type { HassEntity, HomeAssistant } from "../types.ts";
import { isUnavailable } from "./kinds.ts";

const DAY = 86_400_000;
const startOfDay = (t: number) => {
  const d = new Date(t);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

/** A date written in a state: ISO (2026-10-29), German (29.10.2026, 29.10.) or US (10/29/2026); null when there is none. */
function dateIn(text: string, now: number): number | null {
  let m = /(\d{4})-(\d{2})-(\d{2})/.exec(text);
  if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])).getTime();
  m = /(\d{1,2})\.(\d{1,2})\.(\d{4}|\d{2})?/.exec(text);
  if (m) {
    const year = m[3] ? (m[3].length === 2 ? 2000 + Number(m[3]) : Number(m[3])) : new Date(now).getFullYear();
    let t = new Date(year, Number(m[2]) - 1, Number(m[1])).getTime();
    // "29.10." without a year in the past means next year
    if (!m[3] && t < startOfDay(now)) t = new Date(year + 1, Number(m[2]) - 1, Number(m[1])).getTime();
    return t;
  }
  m = /(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(text);
  if (m) return new Date(Number(m[3]), Number(m[1]) - 1, Number(m[2])).getTime();
  return null;
}

/**
 * Days until a waste bin is collected (0 = today), from its sensor: a number of days, a daysTo attribute (Waste Collection Schedule),
 * "today"/"tomorrow" (also German), a date, or a text with a number of days in it. Null when the sensor says nothing usable.
 */
export function pickupDays(st: HassEntity | undefined, now = Date.now()): number | null {
  if (!st || isUnavailable(st)) return null;
  const attr = Number(st.attributes.daysTo);
  if (st.attributes.daysTo !== undefined && Number.isFinite(attr)) return Math.max(0, Math.round(attr));
  const state = String(st.state).trim();
  if (/^-?\d+(\.\d+)?$/.test(state)) return Math.max(0, Math.round(Number(state)));
  const lower = state.toLowerCase();
  if (/\b(heute|today)\b/.test(lower)) return 0;
  // (no \b here: for JavaScript, "ü" is no word character)
  if (lower.includes("übermorgen") || lower.includes("uebermorgen")) return 2;
  if (/\b(morgen|tomorrow)\b/.test(lower)) return 1;
  // a date goes before a number in the text ("Mon, 26.10.2026" holds numbers that are no day count)
  const date = dateIn(state, now) ?? (st.attributes.device_class === "timestamp" || st.attributes.device_class === "date" ? Date.parse(state) : null);
  if (date !== null && Number.isFinite(date)) return Math.max(0, Math.round((startOfDay(date) - startOfDay(now)) / DAY));
  const days = /(\d+)\s*(tag|tage|tagen|day|days)\b/i.exec(state);
  return days ? Number(days[1]) : null;
}

/** Whether there is post in the mailbox: its sensor is on (a binary sensor) or says so. */
export function hasPost(st: HassEntity | undefined): boolean {
  if (!st || isUnavailable(st)) return false;
  return st.state === "on" || /^(post|mail|yes|ja|true|voll|full|detected)$/i.test(st.state.trim());
}

/** A plant's soil moisture in percent, and whether it is thirsty (below `below`, 20 % by default). */
export function plantThirst(st: HassEntity | undefined, below = 20): { moisture: number; thirsty: boolean } | null {
  if (!st || isUnavailable(st)) return null;
  const moisture = Number(st.state);
  if (!Number.isFinite(moisture)) return st.entity_id.startsWith("binary_sensor.") ? { moisture: NaN, thirsty: st.state === "on" } : null;
  return { moisture, thirsty: moisture < below };
}

const REMAINING = /remain|rest|verbleib|time_left|timeleft|finish|end_time|fertig|programmende|program_end|done_at/i;

/**
 * Minutes a washer, dryer or dishwasher has left, from a sensor on its device: a duration (minutes, hours, seconds, or h:mm:ss) or a
 * timestamp of the end. Null when the device has no such sensor or it is not running.
 */
export function remainingMinutes(hass: HomeAssistant, deviceEntities: readonly string[], now = Date.now()): number | null {
  for (const id of deviceEntities) {
    if (!id.startsWith("sensor.") || !REMAINING.test(`${id} ${hass.states[id]?.attributes.friendly_name ?? ""}`)) continue;
    const st = hass.states[id];
    if (!st || isUnavailable(st)) continue;
    const a = st.attributes;
    if (a.device_class === "timestamp") {
      const end = Date.parse(st.state);
      if (Number.isFinite(end) && end > now) return Math.ceil((end - now) / 60000);
      continue;
    }
    const clock = /^(\d+):(\d{2})(?::(\d{2}))?$/.exec(st.state.trim());
    if (clock) {
      const mins = clock[3] !== undefined ? Number(clock[1]) * 60 + Number(clock[2]) + Number(clock[3]) / 60 : Number(clock[1]) * 60 + Number(clock[2]);
      if (mins > 0) return Math.ceil(mins);
      continue;
    }
    const value = Number(st.state);
    if (!Number.isFinite(value) || value <= 0) continue;
    const unit = String(a.unit_of_measurement ?? "min").toLowerCase();
    return Math.ceil(unit === "h" ? value * 60 : unit === "s" ? value / 60 : value);
  }
  return null;
}

/** The other entities of an entity's device (its remaining-time sensor sits next to its switch or power sensor). */
export function deviceSiblings(hass: HomeAssistant, id: string | null | undefined): string[] {
  const device = id ? hass.entities?.[id]?.device_id : null;
  return device && hass.entities ? Object.values(hass.entities).filter((e) => e.device_id === device).map((e) => e.entity_id) : [];
}

/** Minutes as "25 min" or "1 h 05 min". */
export const minutesText = (m: number): string => (m < 60 ? `${m} min` : `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, "0")} min`);
