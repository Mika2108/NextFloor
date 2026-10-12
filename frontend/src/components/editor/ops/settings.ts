// Limits and conversions for the house settings.

export const clamp = (value: number, low: number, high: number): number => Math.min(high, Math.max(low, value));

/** Compass degrees as a whole number in 0 to 359. */
export const wrapDegrees = (value: number): number => ((Math.round(value) % 360) + 360) % 360;

/** The weather effects with one switched on or off; no effect appears twice. */
export function withEffect<T>(effects: readonly T[], effect: T, on: boolean): T[] {
  return on ? [...new Set([...effects, effect])] : effects.filter((e) => e !== effect);
}
