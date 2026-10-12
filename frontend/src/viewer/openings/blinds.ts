// The blind on the outside of a window: a box above the opening and slats down to the closed fraction.

import { Color } from "three";
import type { Ctx } from "./context.ts";
import { BLIND_BOX, FRAME_TOP } from "./palette.ts";
import { panel, splitBox } from "./primitives.ts";

export function blind(c: Ctx): void {
  const { info, state, frame, fold } = c;
  if (state.cover === null) return;
  const [W, S, T] = [info.width, info.sill, info.top];
  const outside = -info.faceOut;
  splitBox(c.frames, frame, { x0: -0.05, x1: W + 0.05, n0: outside - 0.15, n1: outside, y0: T, y1: T + 0.2 }, new Color(BLIND_BOX), new Color(FRAME_TOP), fold);
  const closed = Math.min(1, Math.max(0, state.cover));
  if (closed > 0.01) panel(c.blinds, frame, 0, W, outside - 0.07, T - closed * (T - S), T, new Color(0xffffff), fold, 0.045);
}
