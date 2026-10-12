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
}

/** An SVG points attribute for plan points. */
export const pointsAttribute = (ctx: CanvasContext, points: readonly Vec2[]): string => points.map((p) => ctx.toScreen(p).join(",")).join(" ");
