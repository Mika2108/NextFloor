// Light switches and sockets with several buttons (gangs): which of them glow, and in what colour.

import type { HomeAssistant } from "../types.ts";
import { isActive, isUnavailable, kindOf, lightGlow, type Rgb } from "./kinds.ts";

export interface GangGlow {
  gang: number;
  color: Rgb;
  level: number;
}

const SOCKET_GREEN: Rgb = [0.25, 0.9, 0.45];
const SWITCH_WARM: Rgb = [1, 0.82, 0.55];

/** The power a socket's entity draws, if it reports one (W): its own state for a power sensor, else a power attribute. */
function drawn(hass: HomeAssistant, id: string): number | null {
  const st = hass.states[id];
  const value = Number(st?.attributes.current_power_w ?? st?.attributes.power ?? NaN);
  return Number.isFinite(value) ? value : null;
}

/**
 * The glowing buttons of a switch plate or socket. A button linked to a light glows in the light's colour and brightness; anything
 * else that is on glows warm on a switch and green on a socket, brighter the more it draws.
 */
export function gangGlows(hass: HomeAssistant, entities: readonly (string | null | undefined)[], socket: boolean): GangGlow[] {
  const out: GangGlow[] = [];
  entities.forEach((id, gang) => {
    if (!id || id === "none") return;
    const st = hass.states[id];
    if (!st || isUnavailable(st)) return;
    if (kindOf(id) === "light") {
      const lit = lightGlow(st);
      if (lit) out.push({ gang, color: lit.color, level: lit.level });
      return;
    }
    if (!isActive(st) && st.state !== "on") return;
    const watts = socket ? drawn(hass, id) : null;
    const level = watts === null ? 0.8 : Math.min(1, 0.45 + Math.sqrt(Math.max(0, watts)) / 40);
    out.push({ gang, color: socket ? SOCKET_GREEN : SWITCH_WARM, level });
  });
  return out;
}

/** The entities of a plate that can be switched, in button order. */
export const gangEntities = (entities: readonly (string | null | undefined)[] | undefined, gangs: number): string[] =>
  (entities ?? []).slice(0, gangs).filter((id): id is string => !!id && id !== "none");
