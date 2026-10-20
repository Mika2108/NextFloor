// Ceiling fans: how fast their blades turn in 3D.

/** Turns per second of a ceiling fan's blades: faster with its speed, still while it is off. */
export function fanSpin(st: { state: string; attributes: Record<string, unknown> } | undefined): number {
  if (!st || st.state !== "on") return 0;
  const pct = typeof st.attributes.percentage === "number" ? st.attributes.percentage : 60;
  return pct <= 0 ? 0 : 0.2 + (0.6 * Math.min(100, pct)) / 100;
}
