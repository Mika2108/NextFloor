// Day curves for the house's energy card: solar and consumption over the last 24 hours. The history of exactly the sensors the
// live balance reads is loaded, and the balance is worked out again for every quarter hour, so the curves always mean what the
// numbers on the card mean (automatic sensors included).

import type { HomeAssistant } from "../types.ts";
import { hassAt, type History } from "./time-travel.ts";

/** The entity ids a function reads from hass.states. */
export function statesRead(hass: HomeAssistant, run: (hass: HomeAssistant) => unknown): string[] {
  const seen = new Set<string>();
  const states = new Proxy(hass.states, {
    get(target, key: string | symbol) {
      if (typeof key === "string") seen.add(key);
      return (target as Record<string | symbol, unknown>)[key];
    },
  });
  run({ ...hass, states } as HomeAssistant);
  return [...seen].filter((id) => id.includes(".") && id in hass.states);
}

export interface DayCurves {
  solar: (number | null)[];
  use: (number | null)[];
}

/** The balance at `samples` evenly spread moments between from and to, from the history of its sensors. */
export function dayCurves(hass: HomeAssistant, history: History, from: number, to: number, balance: (hass: HomeAssistant) => { solar: number | null; consumption: number | null }, samples = 96): DayCurves {
  const solar: (number | null)[] = [];
  const use: (number | null)[] = [];
  for (let i = 0; i < samples; i++) {
    const t = from + ((to - from) * (i + 1)) / samples;
    const s = balance(hassAt(hass, history, t));
    solar.push(s.solar);
    use.push(s.consumption);
  }
  return { solar, use };
}

/** An SVG path through the values (missing ones break the line), scaled into width × height with `top` as the highest value. */
export function curvePath(values: readonly (number | null)[], width: number, height: number, top: number): string {
  if (top <= 0 || values.length < 2) return "";
  let d = "";
  let pen = false;
  values.forEach((v, i) => {
    if (v === null) {
      pen = false;
      return;
    }
    const x = (i / (values.length - 1)) * width;
    const y = height - (Math.max(0, Math.min(top, v)) / top) * height;
    d += `${pen ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
    pen = true;
  });
  return d;
}
