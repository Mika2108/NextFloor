import type { HassEntity, HomeAssistant } from "./types.ts";

/** The explicit colour entity also owns effects; the primary entity still controls on/off. */
export function lightEffectSource(hass: Pick<HomeAssistant, "states">, config: { color_entity?: string | null }, primary: string | null): HassEntity | undefined {
  const id = config.color_entity && config.color_entity !== "none" ? config.color_entity : primary;
  return id ? hass.states[id] : undefined;
}

export const LIGHT_ANIMATIONS = ["none", "rainbow", "pulse", "flicker"] as const;
export type LightAnimation = typeof LIGHT_ANIMATIONS[number];
export interface LightEffectConfig {
  animations_enabled?: boolean;
  effect_animations?: Record<string, string>;
}

/** HA effect names are opaque, case-sensitive program names, never colour instructions. */
export function lightAnimation(config: LightEffectConfig, state: HassEntity | undefined): Exclude<LightAnimation, "none"> | undefined {
  if (config.animations_enabled === false || state?.state !== "on") return undefined;
  const effect = state.attributes.effect;
  if (typeof effect !== "string" || !config.effect_animations || !Object.prototype.hasOwnProperty.call(config.effect_animations, effect)) return undefined;
  const animation = config.effect_animations[effect];
  return animation === "rainbow" || animation === "pulse" || animation === "flicker" ? animation : undefined;
}

type Glow = { color: [number, number, number]; level: number };
type Animation = (glow: Glow, seconds: number) => Glow;
const registry: Partial<Record<LightAnimation, Animation>> = {
  rainbow: (glow, seconds) => {
    const hue = ((seconds * 0.08) % 1 + 1) % 1;
    const channel = (offset: number) => Math.max(0, Math.min(1, Math.abs(((hue * 6 + offset) % 6) - 3) - 1));
    return { color: [channel(0), channel(4), channel(2)], level: glow.level };
  },
  flicker: (glow, seconds) => ({ ...glow, level: glow.level * (0.75 + 0.15 * Math.sin(seconds * 17) + 0.1 * Math.sin(seconds * 31 + 1)) }),
  pulse: (glow, seconds) => ({ ...glow, level: glow.level * (0.65 + 0.35 * Math.sin(seconds * Math.PI)) }),
};

/** Samples the existing glow; brightness has already been applied by lightGlow. */
export function animateGlow(glow: Glow | null, animation: string | undefined, seconds: number): Glow | null {
  if (!glow || !animation || !Object.prototype.hasOwnProperty.call(registry, animation)) return glow;
  return registry[animation as LightAnimation]?.(glow, seconds) ?? glow;
}

