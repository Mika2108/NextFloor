// What is being drawn right now: the wall or rectangle being dragged, the outline or chain of lengths being laid out, and the snap
// guides with the point they snap to.

import { nothing, svg, type TemplateResult } from "lit";
import { formatNumber } from "../../../i18n.ts";
import type { Vec2 } from "../../../model.ts";
import type { CanvasContext } from "./context.ts";

type Layer = TemplateResult | typeof nothing;

/** The lines that show what the pointer snaps to: a vertical, a horizontal, and the point itself. */
export interface Guides {
  point?: Vec2;
  x?: number;
  z?: number;
}

/** A gesture in progress that draws a shape. */
export type Sketch = { kind: "freewall"; start: Vec2; end: Vec2 } | { kind: "rect"; start: Vec2; end: Vec2 };

const metres = (ctx: CanvasContext, v: number) => formatNumber(ctx.host.hass, v, 2);

export function sketchLayer(ctx: CanvasContext, sketch: Sketch): TemplateResult {
  const [a, b] = [ctx.toScreen(sketch.start), ctx.toScreen(sketch.end)];
  if (sketch.kind === "freewall") {
    const length = Math.hypot(sketch.end[0] - sketch.start[0], sketch.end[1] - sketch.start[1]);
    return svg`<g pointer-events="none">
      <line class="nf-draft nf-draft-wall" x1=${a[0]} y1=${a[1]} x2=${b[0]} y2=${b[1]} />
      <text class="nf-dim" x=${(a[0] + b[0]) / 2} y=${(a[1] + b[1]) / 2 - 10}>${metres(ctx, length)} m</text>
    </g>`;
  }
  const [width, depth] = [Math.abs(sketch.end[0] - sketch.start[0]), Math.abs(sketch.end[1] - sketch.start[1])];
  return svg`<g pointer-events="none">
    <rect class="nf-draft" x=${Math.min(a[0], b[0])} y=${Math.min(a[1], b[1])} width=${Math.abs(b[0] - a[0])} height=${Math.abs(b[1] - a[1])} />
    <text class="nf-dim" x=${(a[0] + b[0]) / 2} y=${Math.min(a[1], b[1]) - 8}>${metres(ctx, width)} × ${metres(ctx, depth)} m</text>
  </g>`;
}

/** The outline being clicked together (free form) or the chain of lengths being measured: points, a line to the cursor, and lengths. */
export function outlineLayer(ctx: CanvasContext, draft: readonly Vec2[], cursor: Vec2 | null, measuring: boolean): TemplateResult {
  const screen = [...draft, ...(cursor ? [cursor] : [])].map((p) => ctx.toScreen(p));
  const closable = draft.length >= 3;
  const lengths = measuring
    ? draft.slice(1).map((p, i) => {
        const [a, b] = [ctx.toScreen(draft[i]), ctx.toScreen(p)];
        return svg`<text class="nf-dim" x=${(a[0] + b[0]) / 2} y=${(a[1] + b[1]) / 2 - 6}>${metres(ctx, Math.hypot(p[0] - draft[i][0], p[1] - draft[i][1]))} m</text>`;
      })
    : nothing;
  const points = draft.map((p, i) => {
    const [x, y] = ctx.toScreen(p);
    const first = i === 0 && closable;
    return svg`<circle class=${first ? "nf-draft-pt nf-draft-first" : "nf-draft-pt"} cx=${x} cy=${y} r=${first ? 9 : 5} />`;
  });
  const [cx, cy] = cursor ? ctx.toScreen(cursor) : [0, 0];
  return svg`<g pointer-events="none">
    ${screen.length > 1 ? svg`<polyline class="nf-draft" points=${screen.map((p) => p.join(",")).join(" ")} />` : nothing}
    ${lengths}${points}
    ${cursor ? svg`<circle class="nf-cursor" cx=${cx} cy=${cy} r="4" />` : nothing}
  </g>`;
}

export function guidesLayer(ctx: CanvasContext, guides: Guides, size: { w: number; h: number }): TemplateResult {
  const column = guides.x !== undefined ? ctx.toScreen([guides.x, 0])[0] : null;
  const row = guides.z !== undefined ? ctx.toScreen([0, guides.z])[1] : null;
  const [px, py] = guides.point ? ctx.toScreen(guides.point) : [0, 0];
  return svg`<g pointer-events="none">
    ${column !== null ? svg`<line class="nf-guide" x1=${column} y1="0" x2=${column} y2=${size.h} />` : nothing}
    ${row !== null ? svg`<line class="nf-guide" x1="0" y1=${row} x2=${size.w} y2=${row} />` : nothing}
    ${guides.point ? svg`<circle class="nf-snap" cx=${px} cy=${py} r="9" />` : nothing}
  </g>`;
}

export function draftLayer(ctx: CanvasContext, sketch: Sketch | null, tool: string, draft: readonly Vec2[], cursor: Vec2 | null): Layer {
  if (sketch) return sketchLayer(ctx, sketch);
  if (tool !== "polygon" && tool !== "measure") return nothing;
  return outlineLayer(ctx, draft, cursor, tool === "measure");
}
