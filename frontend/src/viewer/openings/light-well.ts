// The light well in front of a cellar window: a concrete pit outside the window from below its sill up to the ground, with a grating
// on top at ground level. It comes by itself for an outer window whose sill lies below the ground, and can be switched off per window.

import { Color } from "three";
import { ALWAYS } from "../geo.ts";
import type { Ctx } from "./context.ts";
import { splitBox } from "./primitives.ts";

const CONCRETE = 0x4b5262;
const CONCRETE_TOP = 0x6b7386;
const GRATING = 0x2a303c;
const GRATING_TOP = 0x8a94a8;

/** Whether a window gets a light well: outside, its sill below the ground (ground is in the floor's own coordinates). */
export function needsLightWell(ctx: Pick<Ctx, "info">, ground: number): boolean {
  const { info } = ctx;
  if (info.opening.type !== "window" || !info.exterior || info.opening.light_well === false) return false;
  return info.opening.light_well === true || info.sill < ground - 0.02;
}

/** A light well outside the window: three concrete walls, a floor and a grating at ground level. */
export function lightWell(c: Ctx, ground: number): void {
  const { info, frame } = c;
  const fold = { cut: c.fold.cut, bucket: ALWAYS };
  const [w0, w1] = [-0.12, info.width + 0.12];
  const outer = -info.faceOut;
  const depth = 0.7;
  const bottom = Math.min(info.sill - 0.25, ground - 0.3);
  const top = ground;
  const side = new Color(CONCRETE);
  const cap = new Color(CONCRETE_TOP);
  const t = 0.07;
  const wall = (x0: number, x1: number, n0: number, n1: number) => splitBox(c.frames, frame, { x0, x1, n0, n1, y0: bottom, y1: top }, side, cap, fold);
  wall(w0 - t, w0, outer - depth, outer);
  wall(w1, w1 + t, outer - depth, outer);
  wall(w0 - t, w1 + t, outer - depth - t, outer - depth);
  splitBox(c.frames, frame, { x0: w0, x1: w1, n0: outer - depth, n1: outer, y0: bottom - t, y1: bottom }, side, cap, fold);
  // the grating: bars across the pit at ground level
  const bar = (x0: number, x1: number) => splitBox(c.frames, frame, { x0, x1, n0: outer - depth, n1: outer, y0: top - 0.025, y1: top }, new Color(GRATING), new Color(GRATING_TOP), fold);
  const bars = Math.max(3, Math.round((w1 - w0) / 0.06));
  for (let i = 0; i <= bars; i++) {
    const x = w0 + ((w1 - w0) * i) / bars;
    bar(x - 0.008, x + 0.008);
  }
  splitBox(c.frames, frame, { x0: w0, x1: w1, n0: outer - depth - 0.01, n1: outer - depth + 0.02, y0: top - 0.03, y1: top }, new Color(GRATING), new Color(GRATING_TOP), fold);
}
