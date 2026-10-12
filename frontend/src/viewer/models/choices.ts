// The decisions made while preparing a model that need no 3D: how the triangle budget is shared between materials, and which
// material is most likely the body paint.

export interface MaterialSummary {
  name: string;
  /** Surface area in square metres. */
  area: number;
  opacity: number;
  /** Brightness of its colour from 0 (black) to 1 (white). */
  lightness: number;
}

/** Names that body paint usually has in models of cars and appliances. */
const PAINT_NAME = /^paint|carpaint|body|lack|lacquer|exterior/i;

/**
 * The materials that are most likely the body paint: those named like paint, else the one with the largest surface among the solid
 * ones that are not nearly black (tyres, trim) or see-through (glass).
 */
export function guessPaint(materials: readonly MaterialSummary[]): string[] {
  const named = materials.filter((m) => PAINT_NAME.test(m.name)).map((m) => m.name);
  if (named.length > 0) return named;
  const solid = materials.filter((m) => m.opacity >= 0.9 && m.lightness > 0.12 && !/glass|window|light|lamp/i.test(m.name));
  const largest = [...solid].sort((a, b) => b.area - a.area)[0];
  return largest ? [largest.name] : [];
}

/**
 * How many triangles each part may keep so that all together stay within `total`. Parts that already fit keep all of theirs, and what
 * they leave over is shared among the larger ones in proportion to their size.
 */
export function shareBudget(counts: readonly number[], total: number): number[] {
  const sum = counts.reduce((a, b) => a + b, 0);
  if (sum <= total) return [...counts];
  const share = total / sum;
  return counts.map((n) => Math.max(1, Math.floor(n * share)));
}

/** A name for a paint material so that NextFloor recognises it: the original name behind a "Paint_" prefix, once. */
export const paintName = (name: string): string => (/^Paint/.test(name) ? name : `Paint_${name || "body"}`);

/** The quarter turns (0 to 3) that bring a model whose front points along the given axis direction to +z. */
export function turnsToFront(front: "+x" | "-x" | "+z" | "-z"): 0 | 1 | 2 | 3 {
  return { "+z": 0, "-x": 1, "-z": 2, "+x": 3 }[front] as 0 | 1 | 2 | 3;
}
