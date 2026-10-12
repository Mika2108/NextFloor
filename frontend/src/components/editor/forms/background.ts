import { html, nothing, type TemplateResult } from "lit";
import { formatNumber } from "../../../i18n.ts";
import type { Floor } from "../../../model.ts";
import type { BackgroundTool } from "../background-tool.ts";
import { hint, numberField, toThousandths, typedNumber } from "../fields.ts";
import type { EditorHost } from "../host.ts";

const MIN_WIDTH = 0.1;

/** A wide button that is pressed while its mode is on. */
const modeButton = (pressed: boolean, label: string, onClick: () => void) => html`<button class="nf-btn nf-wide ${pressed ? "nf-primary" : ""}" aria-pressed=${pressed} @click=${onClick}>${label}</button>`;

/** The measuring tools below the calibrating buttons: what to tap, and once two points are set, the length to type. */
function rulerSteps(host: EditorHost, tool: BackgroundTool): TemplateResult | typeof nothing {
  const points = tool.ruler;
  if (!points) return nothing;
  if (points.length < 2) return hint(host.t(points.length > 0 ? "bg_ruler_second" : "bg_ruler_first"), "nf-wide");
  const measured = Math.hypot(points[1][0] - points[0][0], points[1][1] - points[0][1]);
  const apply = () => tool.applyRuler();
  return html`${hint(host.t("bg_ruler_length_hint", { m: formatNumber(host.hass, measured, 2) }), "nf-wide")}
    <label class="nf-field"
      >${host.t("bg_ruler_length")}
      <input
        type="number"
        min="0.01"
        step="0.01"
        .value=${tool.rulerLength ? String(tool.rulerLength) : ""}
        @input=${(e: Event) => (tool.rulerLength = typedNumber((e.target as HTMLInputElement).value) || 0)}
        @keydown=${(e: KeyboardEvent) => e.key === "Enter" && apply()}
      />
    </label>
    <button class="nf-btn nf-primary" ?disabled=${!(tool.rulerLength > 0)} @click=${apply}>${host.t("bg_ruler_apply")}</button>`;
}

/** The buttons that change how the picture sits in the plan: move and scale, straighten, measure. Only for admins. */
function calibration(host: EditorHost, tool: BackgroundTool): TemplateResult | typeof nothing {
  if (!host.admin) return nothing;
  const t = host.t;
  const levelling = tool.level;
  return html`${modeButton(tool.edit, t(tool.edit ? "background_edit_done" : "background_edit"), () => tool.toggleEdit())}
    ${hint(t(tool.edit ? "background_handles_hint" : "background_fixed_hint"), "nf-wide")}
    ${modeButton(!!levelling, `📐 ${t(levelling ? "bg_level_cancel" : "bg_level")}`, () => tool.toggleLevel())}
    ${levelling ? hint(t(levelling.length > 0 ? "bg_level_second" : "bg_level_first"), "nf-wide") : nothing}
    ${modeButton(!!tool.ruler, `📏 ${t(tool.ruler ? "bg_ruler_cancel" : "bg_ruler")}`, () => tool.toggleRuler())}
    ${rulerSteps(host, tool)}`;
}

/** The section for the floor's background picture: add one, place it, calibrate it, set how see-through it is, remove it. */
export function renderBackgroundForm(host: EditorHost, tool: BackgroundTool, floor: Floor): TemplateResult {
  const bg = floor.background;
  const t = host.t;
  const set = (patch: Partial<NonNullable<typeof bg>>) => bg && tool.setBackground({ ...bg, ...patch });
  return html`<details class="nf-section" ?open=${tool.open} @toggle=${(e: Event) => (tool.open = (e.target as HTMLDetailsElement).open)}>
    <summary>${t("background")}</summary>
    <div class="nf-form">
      <label class="nf-btn nf-wide nf-upload"
        >${t("background_upload")}<input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          @change=${(e: Event) => {
            const input = e.target as HTMLInputElement;
            const file = input.files?.[0];
            input.value = "";
            void tool.upload(file);
          }}
        />
      </label>
      ${bg
        ? html`${numberField(host, t("x"), bg.x, (v) => set({ x: v }))} ${numberField(host, t("z"), bg.z, (v) => set({ z: v }))}
          ${numberField(host, t("background_width"), bg.width, (v) => set({ width: Math.max(MIN_WIDTH, v) }), 0.01, MIN_WIDTH)}
          ${numberField(host, t("background_rotation"), bg.rotation ?? 0, (v) => set({ rotation: Math.round(v * 10) / 10 }), 0.5)}
          ${calibration(host, tool)}
          <label class="nf-field"
            >${t("background_opacity")}
            <input type="range" min="0.05" max="1" step="0.05" .value=${String(toThousandths(bg.opacity))} @change=${(e: Event) => set({ opacity: Number.parseFloat((e.target as HTMLInputElement).value) })} />
          </label>
          <button class="nf-btn nf-danger nf-wide" @click=${() => tool.setBackground(null)}>${t("background_remove")}</button>`
        : nothing}
    </div>
  </details>`;
}
