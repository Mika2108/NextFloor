// The bar at the bottom of the 3D view while furnishing: what is selected (a piece of furniture or a placed device), its size or
// height and mount fields, and the turn, mirror and delete buttons.

import { html, nothing, type TemplateResult } from "lit";
import { defaultHeight, entityName, kindOf } from "../devices.ts";
import { furnitureName } from "../furniture-names.ts";
import type { I18nKey } from "../i18n.ts";
import { canLift, ceilingAt, type Building, type Floor, type Furniture, type LampMount, type Placement } from "../model.ts";
import { mountBase } from "../packs.ts";
import type { HomeAssistant } from "../types.ts";
import { parseTyped, rounded } from "./edits.ts";

/** What the bar needs from the panel: the plan, translation, and the ways to change it. */
export interface FurnishHost {
  hass: HomeAssistant;
  building: Building;
  t(key: I18nKey, vars?: Record<string, string | number>): string;
  editFurniture(id: string, change: (item: Furniture, floor: Floor) => void): void;
  editDevice(entityId: string, change: (placed: Placement, floor: Floor) => void): void;
  turnFurniture(id: string, delta: number): void;
  turnDevice(entityId: string, delta: number): void;
  removeFurniture(id: string): void;
  removeDevice(entityId: string): void;
  /** Leaves furnishing. */
  finish(): void;
}

interface NumberField {
  label: string;
  title: string;
  value: number;
  step: number;
  min: number;
  /** Values are clamped into this range; sizes just have to be valid. */
  max?: number;
  /** Whether a typed number is taken (sizes must be above zero, heights may be zero). */
  accepts?: (value: number) => boolean;
  apply(value: number): void;
}

function numberField(field: NumberField): TemplateResult {
  const { min, max, accepts = () => true } = field;
  const onChange = (e: Event) => {
    const typed = parseTyped((e.target as HTMLInputElement).value);
    if (!Number.isFinite(typed) || !accepts(typed)) return;
    field.apply(max === undefined ? typed : Math.min(max, Math.max(min, typed)));
  };
  return html`<label class="nf-size" title=${field.title}
    >${field.label}
    <input type="number" inputmode="decimal" step=${field.step} min=${min} max=${max ?? nothing} .value=${String(rounded(field.value, 2))} @change=${onChange} />
  </label>`;
}

const autoButton = (host: FurnishHost, onClick: () => void) => html`<button class="nf-chip" @click=${onClick}>${host.t("height_auto")}</button>`;

const turnButtons = (step: number, turn: (delta: number) => void) =>
  html`<button class="nf-chip" @click=${() => turn(-step)}>↺ ${step}°</button><button class="nf-chip" @click=${() => turn(step)}>↻ ${step}°</button>`;

/** Width, depth and height of a piece of furniture, and for wall-mounted ones the height it hangs at. */
function furnitureFields(host: FurnishHost, id: string): TemplateResult | typeof nothing {
  const floor = host.building.floors.find((fl) => fl.furniture.some((f) => f.id === id));
  const item = floor?.furniture.find((f) => f.id === id);
  if (!floor || !item) return nothing;
  const size = (key: "w" | "d" | "h", short: I18nKey) =>
    numberField({
      label: host.t(short),
      title: host.t(`size_${key}` as I18nKey),
      value: item[key],
      step: 0.05,
      min: 0.05,
      accepts: (v) => v > 0,
      apply: (v) => host.editFurniture(id, (f) => (f[key] = rounded(v, 3))),
    });
  const mount = canLift(item)
    ? html`${numberField({
        label: "↕",
        title: host.t("mount_height"),
        value: item.mount_y ?? mountBase(floor, item),
        step: 0.05,
        min: 0,
        accepts: (v) => v >= 0,
        apply: (v) => host.editFurniture(id, (f) => (f.mount_y = rounded(v, 3))),
      })}
      ${item.mount_y != null ? autoButton(host, () => host.editFurniture(id, (f) => (f.mount_y = null))) : nothing}`
    : nothing;
  return html`${size("w", "size_short_w")}${size("d", "size_short_d")}${size("h", "size_short_h")} ${mount}`;
}

/** Height of a placed device; for lights the mount. */
function deviceFields(host: FurnishHost, entityId: string): TemplateResult | typeof nothing {
  const floor = host.building.floors.find((fl) => fl.placements.some((p) => p.entity_id === entityId));
  const placed = floor?.placements.find((p) => p.entity_id === entityId);
  if (!floor || !placed) return nothing;
  const kind = kindOf(entityId);
  const mountSelect = (title: I18nKey, options: [LampMount, string][], current: LampMount) =>
    html`<select class="nf-size-select" title=${host.t(title)} @change=${(e: Event) => host.editDevice(entityId, (d) => Object.assign(d, { mount: (e.target as HTMLSelectElement).value as LampMount, y: null }))}>
      ${options.map(([value, text]) => html`<option value=${value} ?selected=${value === current}>${text}</option>`)}
    </select>`;
  const lampMounts = (["ceiling", "floor", "table", "wall"] as const).map((m): [LampMount, string] => [m, host.t(`lamp_${m}`)]);
  const automatic = kind ? defaultHeight(kind, ceilingAt(floor, placed.x, placed.z), kind === "light" ? (placed.mount ?? "ceiling") : null) : 1;
  return html`${kind === "light" ? mountSelect("lamp_mount", lampMounts, placed.mount ?? "ceiling") : nothing}
    ${numberField({
      label: host.t("size_short_h"),
      title: host.t("marker_height"),
      value: placed.y ?? automatic,
      step: 0.05,
      min: 0,
      accepts: (v) => v >= 0,
      apply: (v) => host.editDevice(entityId, (d) => (d.y = rounded(v, 3))),
    })}
    ${placed.y !== null ? autoButton(host, () => host.editDevice(entityId, (d) => (d.y = null))) : nothing}`;
}

/** The whole bar, for whatever is selected (furniture first, then a device), or a hint when nothing is. */
export function furnishBar(host: FurnishHost, furnitureId: string | null, deviceId: string | null): TemplateResult {
  const t = host.t;
  let body: TemplateResult;
  if (furnitureId) {
    const type = host.building.floors.flatMap((fl) => fl.furniture).find((f) => f.id === furnitureId)?.type;
    body = html`<span>${type ? furnitureName(host.hass, type) : ""}</span>
      ${furnitureFields(host, furnitureId)} ${turnButtons(45, (delta) => host.turnFurniture(furnitureId, delta))}
      <button class="nf-chip" title=${t("furn_mirror_hint")} @click=${() => host.editFurniture(furnitureId, (f) => (f.mirror = !f.mirror))}>⇋ ${t("furn_mirror")}</button>
      <button class="nf-chip nf-danger-chip" @click=${() => host.removeFurniture(furnitureId)}>${t("delete")}</button>`;
  } else if (deviceId) {
    body = html`<span>${entityName(host.hass, deviceId)}</span>
      ${deviceFields(host, deviceId)} ${turnButtons(45, (delta) => host.turnDevice(deviceId, delta))}
      <button class="nf-chip nf-danger-chip" @click=${() => host.removeDevice(deviceId)}>${t("delete")}</button>`;
  } else {
    body = html`<span>${t("furnish_hint")}</span>`;
  }
  return html`<div class="nf-furnish-bar">${body}<button class="nf-chip nf-chip-on" @click=${() => host.finish()}>${t("done")}</button></div>`;
}
