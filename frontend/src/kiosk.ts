// Wall-tablet mode of the dashboard card: decides when the card dims for the night.

import type { HomeAssistant } from "./types.ts";

const RANGE = /^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/;

const minutesOfDay = (hours: string, minutes: string) => Number(hours) * 60 + Number(minutes);

/**
 * Whether the night dimming is on right now. `night` is "off" (or empty), "sun" (dim while the sun is
 * down) or a daily range such as "22:00-06:30", which may run past midnight. Anything else counts as off.
 */
export function nightActive(night: string | undefined, hass: HomeAssistant | undefined, now = new Date()): boolean {
  if (!night || night === "off") return false;
  if (night === "sun") return hass?.states["sun.sun"]?.state === "below_horizon";
  const range = RANGE.exec(night.trim());
  if (!range) return false;
  const start = minutesOfDay(range[1], range[2]);
  const end = minutesOfDay(range[3], range[4]);
  const current = now.getHours() * 60 + now.getMinutes();
  const overnight = start > end;
  return overnight ? current >= start || current < end : current >= start && current < end;
}
