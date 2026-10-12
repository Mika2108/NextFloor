import { nothing, svg, type TemplateResult } from "lit";
import { mapLook, mapShown, mapTiles, templateOf, tileUrl } from "../../../map-geo.ts";
import type { BuildingSettings } from "../../../model.ts";
import type { CanvasContext } from "./context.ts";

/**
 * The real map behind the plan: the tiles around the anchor in one group that is moved to the anchor and turned by the plan's north,
 * so a tile lies where it lies on Earth. Dimmed; the walls and rooms are drawn over it.
 */
export function mapLayer(ctx: CanvasContext, settings: BuildingSettings): TemplateResult | typeof nothing {
  const map = settings.map;
  if (!mapShown(map)) return nothing;
  const look = mapLook(map);
  const template = templateOf(map);
  const [ax, ay] = ctx.toScreen([look.x, look.z]);
  const k = ctx.scale;
  return svg`<g class="nf-map" opacity=${look.opacity} pointer-events="none" transform="translate(${ax} ${ay}) rotate(${settings.north ?? 0})">
    ${mapTiles(map.lat, map.lon, look.zoom).map((tile) => svg`<image href=${tileUrl(template, tile)} x=${tile.east * k} y=${-tile.north * k} width=${tile.size * k + 0.6} height=${tile.size * k + 0.6} preserveAspectRatio="none" />`)}
  </g>`;
}
