import { nothing, svg, type TemplateResult } from "lit";
import type { Floor } from "../../../model.ts";
import type { BackgroundTool } from "../background-tool.ts";
import type { CanvasContext } from "./context.ts";

type Layer = TemplateResult | typeof nothing;

/** The turn handle: a circle above the middle of the picture's top edge. */
function turnHandle(x: number, y: number, width: number): TemplateResult {
  const [hx, hy] = [x + width / 2, y - 30];
  return svg`<g class="nf-rotate" data-bg-rotate="1">
    <line x1=${hx} y1=${y} x2=${hx} y2=${hy} />
    <circle cx=${hx} cy=${hy} r="16" class="nf-hit" />
    <circle cx=${hx} cy=${hy} r="8" />
    <path d="M${hx - 4} ${hy - 1}a4 4 0 1 1 2 3.5" />
  </g>`;
}

/** The two points (or the first) tapped for straightening or measuring, with the line between them. */
function calibrationMarks(ctx: CanvasContext, tool: BackgroundTool): Layer {
  const points = tool.level?.length ? tool.level : tool.ruler;
  if (!points?.length) return nothing;
  const screen = points.map((p) => ctx.toScreen(p));
  return svg`<g class="nf-bg-ruler">
    ${screen.length === 2 ? svg`<line x1=${screen[0][0]} y1=${screen[0][1]} x2=${screen[1][0]} y2=${screen[1][1]} />` : nothing}
    ${screen.map(([x, y]) => svg`<circle cx=${x} cy=${y} r="6" />`)}
  </g>`;
}

/**
 * The picture behind the plan. While it can be edited it takes the pointer (a drag moves it), its lower right corner scales it, and a
 * handle above it turns it.
 */
export function backgroundLayer(ctx: CanvasContext, tool: BackgroundTool, floor: Floor | undefined): Layer {
  const bg = floor?.background;
  const picture = tool.picture(bg?.image_id);
  if (!bg || !picture) return nothing;
  const [x, y] = ctx.toScreen([bg.x, bg.z]);
  const width = bg.width * ctx.scale;
  const height = width * picture.aspect;
  const editing = tool.handlesShown;
  return svg`<g transform="rotate(${bg.rotation ?? 0} ${x + width / 2} ${y + height / 2})">
    <image href=${picture.url} x=${x} y=${y} width=${width} height=${height} opacity=${bg.opacity} preserveAspectRatio="none" pointer-events=${editing ? "auto" : "none"} data-bg="1" style=${editing ? "cursor:move" : ""} />
    ${editing
      ? svg`<rect class="nf-bg-frame" x=${x} y=${y} width=${width} height=${height} />
        <circle class="nf-bg-handle" data-bg-handle="1" cx=${x + width} cy=${y + height} r="9" />
        ${turnHandle(x, y, width)}`
      : nothing}
  </g>${calibrationMarks(ctx, tool)}`;
}
