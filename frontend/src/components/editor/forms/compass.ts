// The compass of the plan: where north lies, with a dial and the quick turns. Turning it never touches the drawing, the roof
// fields or the furniture; only what depends on the compass follows (the sun's light, wind, the compass labels of roof faces).

import { html, svg, type TemplateResult } from "lit";
import { numberField } from "../fields.ts";
import type { EditorHost } from "../host.ts";
import { turnedNorth } from "../ops/settings.ts";

export function renderCompass(host: EditorHost, north: number, set: (north: number) => void): TemplateResult {
  const t = host.t;
  const turn = (by: number) => () => set(turnedNorth(north, by));
  const dial = svg`<svg class="nf-compass-dial" viewBox="-50 -50 100 100" role="img" aria-label=${t("compass_title")}>
    <circle r="46" class="nf-compass-ring" />
    <path d="M0 -50l3 6h-6z" class="nf-compass-up" />
    <g transform="rotate(${north})">
      <path d="M0 -38L8 0H-8z" class="nf-compass-n" />
      <path d="M0 38L8 0H-8z" class="nf-compass-s" />
      <text y="-27" class="nf-compass-label">${t("compass_n_short")}</text>
      <text y="36" class="nf-compass-label nf-compass-label-s">${t("compass_s_short")}</text>
    </g>
  </svg>`;
  return html`<div class="nf-compass nf-wide">
    ${dial}
    <div class="nf-compass-side">
      <b>${t("compass_title")}</b>
      ${numberField(host, t("north"), north, (v) => set(turnedNorth(v, 0)), 1)}
      <div class="nf-actions">
        <button class="nf-btn" ?disabled=${!host.admin} title=${t("compass_swap_hint")} @click=${turn(180)}>⇅ ${t("compass_swap")}</button>
        <button class="nf-btn" ?disabled=${!host.admin} @click=${turn(-90)}>↺ 90°</button>
        <button class="nf-btn" ?disabled=${!host.admin} @click=${turn(90)}>↻ 90°</button>
      </div>
      <span class="nf-sub">${t("compass_hint")}</span>
    </div>
  </div>`;
}
