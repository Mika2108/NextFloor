// Windows: the fixed frame, sill and board, sashes that turn into the room or tilt, glazing bars, and indoor glass walls.

import { Color } from "three";
import { openingStyle } from "../../model.ts";
import { ALWAYS, shade } from "../geo.ts";
import type { Ctx } from "./context.ts";
import { FRAME, FRAME_TOP, GLASS, OPEN_ANGLE, OPEN_WARM, SASH, SILL, TILT_ANGLE } from "./palette.ts";
import { panel, splitBox, type Frame } from "./primitives.ts";

/** An indoor glass wall: a slim frame, mullions about every 0.9 m, glass from the floor up, no sashes. */
export function glassWall(c: Ctx): void {
  const { info, frame, fold, mid } = c;
  const [W, S, T] = [info.width, info.sill, info.top];
  const [fw, fd] = [0.04, 0.025];
  const frameColor = new Color(FRAME);
  const frameTop = new Color(FRAME_TOP);
  const bar = (x0: number, x1: number, y0: number, y1: number) => splitBox(c.frames, frame, { x0, x1, n0: mid - fd, n1: mid + fd, y0, y1 }, frameColor, frameTop, fold);
  bar(0, fw, S, T);
  bar(W - fw, W, S, T);
  bar(fw, W - fw, S, S + 0.03);
  bar(fw, W - fw, T - fw, T);
  const panes = Math.max(1, Math.round((W - 2 * fw) / 0.9));
  const paneWidth = (W - 2 * fw) / panes;
  for (let k = 1; k < panes; k++) bar(fw + k * paneWidth - 0.02, fw + k * paneWidth + 0.02, S + 0.03, T - fw);
  for (let k = 0; k < panes; k++) {
    const x0 = fw + k * paneWidth + (k ? 0.02 : 0);
    const x1 = fw + (k + 1) * paneWidth - (k < panes - 1 ? 0.02 : 0);
    panel(c.glass, frame, x0, x1, mid, S + 0.03, T - fw, GLASS, fold);
  }
}

interface Sash {
  atStart: boolean;
  x0: number;
  x1: number;
  open: number;
  tilt: number;
}

/** A normal window: the fixed frame in the middle of the wall, a board inside and a sill outside, and one or two sashes. */
export function window(c: Ctx): void {
  const { info, state, frame, fold, mid } = c;
  const [W, S, T] = [info.width, info.sill, info.top];
  const [fw, fd] = [0.06, 0.035];
  const frameColor = new Color(FRAME);
  const frameTop = new Color(FRAME_TOP);
  const sillColor = new Color(SILL);
  const bar = (x0: number, x1: number, y0: number, y1: number) => splitBox(c.frames, frame, { x0, x1, n0: mid - fd, n1: mid + fd, y0, y1 }, frameColor, frameTop, fold);
  const lowerBar = S + (S > 0.05 ? fw : 0.03);
  bar(0, fw, S, T);
  bar(W - fw, W, S, T);
  bar(fw, W - fw, S, lowerBar);
  bar(fw, W - fw, T - fw, T);
  // a window board inside and a sill outside
  if (S > 0.3) {
    splitBox(c.frames, frame, { x0: -0.04, x1: W + 0.04, n0: mid + fd, n1: info.faceRoom + 0.07, y0: S - 0.03, y1: S }, sillColor, frameTop, fold);
    if (info.exterior) splitBox(c.frames, frame, { x0: -0.03, x1: W + 0.03, n0: -info.faceOut - 0.06, n1: mid - fd, y0: S - 0.04, y1: S - 0.02 }, sillColor, frameTop, fold);
  }

  // sashes rotate into the room around their hinge, or tilt around their bottom edge; a double window (or French door) has
  // two sashes meeting in the middle, each tilting on its own
  const barWidth = 0.055;
  const [sy0, sy1] = [lowerBar, T - fw];
  const [n0, n1] = [mid + fd, mid + fd + 0.06];
  const hinge = info.hingeAtStart;
  const sashes: Sash[] =
    info.opening.leaves === 2
      ? [
          { atStart: hinge, x0: hinge ? fw : W / 2, x1: hinge ? W / 2 : W - fw, open: state.open, tilt: state.tilt },
          { atStart: !hinge, x0: hinge ? W / 2 : fw, x1: hinge ? W - fw : W / 2, open: state.open2 ?? 0, tilt: state.tilt2 ?? 0 },
        ]
      : [{ atStart: hinge, x0: fw, x1: W - fw, open: state.open, tilt: state.tilt }];
  const style = openingStyle(info.opening, info.exterior);
  for (const sash of sashes) {
    const ajar = sash.open > 0.02 || sash.tilt > 0.02;
    const alert = c.markClosed ? !!state.sensed && !ajar : ajar;
    const side = alert ? shade(OPEN_WARM, 0.75) : new Color(SASH);
    const top = alert ? shade(OPEN_WARM, 0.95) : frameTop;
    const sashWidth = sash.x1 - sash.x0;
    const theta = sash.open * OPEN_ANGLE;
    const lean = sash.tilt * TILT_ANGLE;
    // sash coordinates: u from the hinge across the sash, then n and y
    const sashFrame: Frame = (u, n, y) => {
      const dy = y - sy0;
      const tilted = n + dy * Math.sin(lean);
      const yy = sy0 + dy * Math.cos(lean);
      const along = u * Math.cos(theta) - (tilted - n0) * Math.sin(theta);
      const across = n0 + (tilted - n0) * Math.cos(theta) + u * Math.sin(theta);
      return frame(sash.atStart ? sash.x0 + along : sash.x1 - along, across, yy);
    };
    // a sash that has swung into the room belongs to no wall: keep it visible
    const sashFold = { cut: fold.cut, bucket: theta > 0.05 ? ALWAYS : fold.bucket };
    const part = (xa: number, xb: number, ya: number, yb: number, na = n0, nb = n1) => splitBox(c.frames, sashFrame, { x0: xa, x1: xb, n0: na, n1: nb, y0: ya, y1: yb }, side, top, sashFold);
    part(0, barWidth, sy0, sy1);
    part(sashWidth - barWidth, sashWidth, sy0, sy1);
    part(barWidth, sashWidth - barWidth, sy0, sy0 + barWidth);
    part(barWidth, sashWidth - barWidth, sy1 - barWidth, sy1);
    panel(c.glass, sashFrame, barWidth, sashWidth - barWidth, (n0 + n1) / 2, sy0 + barWidth, sy1 - barWidth, alert ? shade(OPEN_WARM, 0.16) : GLASS, sashFold);
    if (style === "bars") {
      // glazing bars: a cross over the pane
      const [ym, nm] = [(sy0 + sy1) / 2, (n0 + n1) / 2];
      part(barWidth, sashWidth - barWidth, ym - 0.012, ym + 0.012, nm - 0.012, nm + 0.012);
      part(sashWidth / 2 - 0.012, sashWidth / 2 + 0.012, sy0 + barWidth, sy1 - barWidth, nm - 0.012, nm + 0.012);
    }
  }
}
