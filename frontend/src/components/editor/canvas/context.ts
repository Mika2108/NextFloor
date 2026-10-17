import { nothing, svg, type TemplateResult } from "lit";
import type { Vec2 } from "../../../model.ts";
import type { EditorHost } from "../host.ts";

/** What the layers drawn over the plan need: the host, the map from plan to screen, and which floor is shown. */
export interface CanvasContext {
  host: EditorHost;
  toScreen(p: Vec2): [number, number];
  toWorld(x: number, y: number): Vec2;
  /** Pixels per metre. */
  scale: number;
  floorId: string | null;
  /** Asks for another drawing (a map tile has arrived). */
  redraw: () => void;
}

/** An SVG points attribute for plan points. */
export const pointsAttribute = (ctx: CanvasContext, points: readonly Vec2[]): string => points.map((p) => ctx.toScreen(p).join(",")).join(" ");

/**
 * The "+" in the middle of an edge: pressing it adds a corner there. Left out when the edge is too short on the screen to hold it.
 * The editor reads `data-plus="<kind>:<id>:<edge>"` (kind "out" for an outdoor area, "roof" for a flat roof).
 */
export function edgePlus(ctx: CanvasContext, a: Vec2, b: Vec2, kind: "out" | "roof", id: string, edge: number): TemplateResult | typeof nothing {
  const [[ax, ay], [bx, by]] = [ctx.toScreen(a), ctx.toScreen(b)];
  if (Math.hypot(bx - ax, by - ay) <= 36) return nothing;
  const [mx, my] = [(ax + bx) / 2, (ay + by) / 2];
  return svg`<g data-plus=${`${kind}:${id}:${edge}`} class="nf-mid"><circle cx=${mx} cy=${my} r="14" class="nf-hit" /><circle cx=${mx} cy=${my} r="6" /><path d="M${mx - 3} ${my}h6M${mx} ${my - 3}v6" /></g>`;
}
