// The real map under the plan: switch it on, put it where the house stands, and set how strongly it shows.

import { html, nothing, type TemplateResult } from "lit";
import { DEFAULT_MAP_OPACITY, DEFAULT_MAP_ZOOM, mapShown } from "../../../map-geo.ts";
import type { Building, MapSettings } from "../../../model.ts";
import { checkField, hint, numberField, selectField, textField } from "../fields.ts";
import type { EditorHost } from "../host.ts";
import { movedMap, newMap, tileTemplateFrom } from "../ops/map.ts";

const ZOOMS = ["15", "16", "17", "18", "19"] as const;
/** The distances the arrow buttons move the map by (m). */
const STEPS = ["1", "5", "20"] as const;
/** The distance chosen for the arrow buttons; it stays while the page is open. */
let moveStep: (typeof STEPS)[number] = "5";

export function renderMapSettings(host: EditorHost, doc: Building, set: (map: MapSettings | null) => void): TemplateResult {
  const t = host.t;
  const map = doc.settings.map ?? null;
  const place = host.hass?.config;
  const on = mapShown(map);
  const turnOn = (value: boolean) => {
    if (!value) return set(map ? { ...map, on: false } : null);
    set(map ? { ...map, on: true } : newMap(doc, { lat: place?.latitude, lon: place?.longitude }));
  };
  const change = (patch: Partial<MapSettings>) => map && set({ ...map, ...patch });
  const nudge = (dx: number, dz: number) => () => map && set(movedMap(map, dx * Number(moveStep), dz * Number(moveStep)));
  return html`<div class="nf-map-settings nf-wide">
    ${checkField(host, t("map_on"), on, turnOn, { title: t("map_hint") })}
    ${map && map.on
      ? html`<div class="nf-form">
          ${numberField(host, t("map_lat"), map.lat, (v) => change({ lat: Math.max(-85, Math.min(85, v)) }), 0.0001)}
          ${numberField(host, t("map_lon"), map.lon, (v) => change({ lon: Math.max(-180, Math.min(180, v)) }), 0.0001)}
          ${place?.latitude !== undefined && place.longitude !== undefined
            ? html`<button class="nf-btn nf-wide" ?disabled=${!host.admin} @click=${() => change({ lat: place.latitude, lon: place.longitude })}>${t("map_use_ha")}</button>`
            : nothing}
          ${numberField(host, t("map_opacity"), Math.round((map.opacity ?? DEFAULT_MAP_OPACITY) * 100), (v) => change({ opacity: Math.max(5, Math.min(100, v)) / 100 }), 5, 5)}
          ${selectField(host, t("map_zoom"), String(map.zoom ?? DEFAULT_MAP_ZOOM), ZOOMS.map((z) => [z, z === "15" ? `${z} · ${t("map_zoom_coarse")}` : z === "19" ? `${z} · ${t("map_zoom_fine")}` : z] as const), (z) => change({ zoom: Number(z) }))}
          <div class="nf-wide nf-map-move">
            <span class="nf-sub">${t("map_move")}</span>
            <div class="nf-map-arrows">
              <button class="nf-btn" ?disabled=${!host.admin} title=${t("map_move")} @click=${nudge(0, -1)}>▲</button>
              <button class="nf-btn" ?disabled=${!host.admin} title=${t("map_move")} @click=${nudge(-1, 0)}>◀</button>
              <button class="nf-btn" ?disabled=${!host.admin} title=${t("map_move")} @click=${nudge(1, 0)}>▶</button>
              <button class="nf-btn" ?disabled=${!host.admin} title=${t("map_move")} @click=${nudge(0, 1)}>▼</button>
            </div>
            ${selectField(host, t("map_step"), moveStep, STEPS.map((s) => [s, `${s} m`] as const), (v) => (moveStep = v), { wide: false })}
          </div>
          ${textField(host, t("map_url"), map.url ?? "", (v) => {
            const url = tileTemplateFrom(v);
            if (url !== undefined) change({ url });
          }, { wide: true, placeholder: "https://…/{z}/{x}/{y}.png", maxlength: 300 })}
          ${hint(t("map_hint"), "nf-wide")}
        </div>`
      : nothing}
  </div>`;
}
