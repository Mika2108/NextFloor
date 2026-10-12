// The form of a placed device: where it hangs, how high, how it is turned, camera settings, and how its marker shows.

import { html, nothing, type TemplateResult } from "lit";
import { defaultHeight, entityName, hasScreen, kindOf, TOGGLE_KINDS } from "../../../devices.ts";
import { cameraMotionSensors, detectionKind } from "../../../markers.ts";
import type { I18nKey } from "../../../i18n.ts";
import { iconPath } from "../../../icons.ts";
import { FURNITURE_TYPES, isLamp, type LampMount, type Placement } from "../../../model.ts";
import { isElectric, isPackType, packItemName, packName, packType, type FurniturePack } from "../../../packs.ts";
import { checkField, glowField, hint, iconField, markerField, numberField, selectField, textField } from "../fields.ts";
import type { EditorHost } from "../host.ts";

export interface DeviceActions {
  update(patch: Partial<Placement>): void;
  centre(): void;
  remove(): void;
  asFurniture(placed: Placement, type: string): void;
  packs: readonly FurniturePack[];
  lockButton: TemplateResult | typeof nothing;
}

const SPEAKER_LIKE = /speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/;

/** Furniture that can stand for a device of this kind: a speaker for a media player, a lamp for a light, and so on. */
export function furnitureFor(host: EditorHost, entityId: string, packs: readonly FurniturePack[]): { type: string; label: string }[] {
  const kind = kindOf(entityId);
  const language = host.hass?.language ?? "en";
  const all = [
    ...FURNITURE_TYPES.map((type) => ({ type: type as string, label: host.t(`furn_${type}` as I18nKey) })),
    ...packs.flatMap((pack) => pack.items.map((item) => ({ type: packType(pack.id, item.id), label: `${packItemName(item, language)} · ${packName(pack, language)}` }))),
  ];
  const fits = (type: string): boolean => {
    if (kind === "light") return isLamp(type);
    if (kind === "climate") return type === "radiator";
    if (entityId.startsWith("vacuum.")) return type === "robot_vacuum" || (isPackType(type) && type.endsWith(":robot_vacuum"));
    if (kind === "media") return hasScreen(type) || (isElectric(type) && SPEAKER_LIKE.test(type));
    return isElectric(type) && !isLamp(type);
  };
  return all.filter((x) => fits(x.type)).sort((a, b) => a.label.localeCompare(b.label));
}

/** A line about the detections (people, vehicles, animals) of the camera's device. */
function detections(host: EditorHost, cameraId: string): TemplateResult | typeof nothing {
  const { hass } = host;
  if (!hass) return nothing;
  const sensors = cameraMotionSensors(hass, cameraId);
  const kinds = [...new Set(sensors.map((id) => detectionKind(hass, id)))];
  const text = sensors.length > 0 ? host.t("camera_detect_found", { kinds: kinds.map((k) => host.t(`detect_${k}` as I18nKey)).join(", "), n: sensors.length }) : host.t("camera_detect_none");
  return hint(text, "nf-wide");
}

/** The fields of a camera: how it is mounted, what it sees, and how far. */
function cameraFields(host: EditorHost, placed: Placement, actions: DeviceActions): TemplateResult {
  const t = host.t;
  const dome = placed.mount === "ceiling";
  const set = (patch: Partial<Placement>) => actions.update(patch);
  return html`${numberField(host, t("camera_fov"), placed.fov ?? (dome ? 360 : 90), (v) => set({ fov: Math.min(360, Math.max(10, v)) }), 5, 10)}
    ${numberField(host, t("camera_reach"), placed.reach ?? (dome ? 3 : 4.5), (v) => set({ reach: Math.min(50, Math.max(0.5, v)) }), 0.5, 0.5)}
    ${numberField(host, t("camera_tilt"), placed.tilt ?? (dome ? 65 : 20), (v) => set({ tilt: Math.min(90, Math.max(0, v)) }), 5, 0)}
    ${checkField(host, t("camera_cone"), placed.cone !== false, (on) => set({ cone: on ? null : false }))}
    ${hint(t("camera_aim_hint"), "nf-wide")} ${detections(host, placed.entity_id)}`;
}

/** The "show as furniture" drop-down: replaces the pin by a piece of furniture linked to the entity. */
function asFurniture(host: EditorHost, placed: Placement, actions: DeviceActions): TemplateResult | typeof nothing {
  if (!host.admin) return nothing;
  const options = furnitureFor(host, placed.entity_id, actions.packs);
  if (options.length === 0) return nothing;
  return html`<label class="nf-field nf-wide" title=${host.t("as_furniture_hint")}
    >${host.t("as_furniture")}
    <select @change=${(e: Event) => (e.target as HTMLSelectElement).value && actions.asFurniture(placed, (e.target as HTMLSelectElement).value)}>
      <option value="" selected>${host.t("as_furniture_pick")}</option>
      ${options.map((o) => html`<option value=${o.type}>${o.label}</option>`)}
    </select>
  </label>`;
}

/** The form of the selected device. */
export function renderDeviceForm(host: EditorHost, placed: Placement, actions: DeviceActions): TemplateResult {
  const t = host.t;
  const kind = kindOf(placed.entity_id);
  const light = kind === "light";
  const camera = kind === "camera";
  const mount = placed.mount ?? "ceiling";
  const automatic = kind ? defaultHeight(kind, host.floor?.height ?? 2.5, light ? mount : null) : 1;
  const set = (patch: Partial<Placement>) => actions.update(patch);
  const mountChange = (value: LampMount) => set({ mount: value, y: null });
  const lampMounts = (["ceiling", "floor", "table", "wall"] as const).map((m): [LampMount, string] => [m, t(`lamp_${m}`)]);
  const cameraMounts: [LampMount, string][] = [["wall", t("camera_mount_wall")], ["ceiling", t("camera_mount_ceiling")]];
  return html`<section>
    <div class="nf-h3row"><h3>${t("device")}</h3>${actions.lockButton}</div>
    <p class="nf-dev-title">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${kind ? iconPath(kind) : ""} /></svg>
      ${entityName(host.hass, placed.entity_id)}
    </p>
    <div class="nf-form">
      ${light ? html`${selectField(host, t("lamp_mount"), mount, lampMounts, mountChange, { wide: true })}${glowField(host, placed.glow_scale, (v) => set({ glow_scale: v }))}` : nothing}
      ${camera ? selectField(host, t("camera_mount"), placed.mount ?? "wall", cameraMounts, mountChange, { wide: true }) : nothing}
      ${numberField(host, t("x"), placed.x, (v) => set({ x: v }))} ${numberField(host, t("z"), placed.z, (v) => set({ z: v }))}
      ${numberField(host, t("marker_height"), placed.y ?? automatic, (v) => set({ y: Math.max(0, v) }), 0.05, 0)}
      ${numberField(host, t("rotation"), placed.rotation ?? 0, (v) => set({ rotation: ((v % 360) + 360) % 360 }), 1)}
      ${camera ? cameraFields(host, placed, actions) : nothing}
      ${kind && TOGGLE_KINDS.has(kind) ? checkField(host, t("device_confirm"), !!placed.confirm, (on) => set({ confirm: on }), { title: t("device_confirm_hint") }) : nothing}
      ${markerField(host, placed.marker ?? null, (v) => set({ marker: v }))}
      ${textField(host, t("device_name"), placed.name ?? "", (v) => set({ name: v || null }), { wide: true, maxlength: 60, title: t("device_name_hint"), placeholder: entityName(host.hass, placed.entity_id) })}
      ${placed.name ? checkField(host, t("show_name"), !!placed.show_name, (on) => set({ show_name: on || undefined })) : nothing}
      ${iconField(host, placed.icon, (v) => set({ icon: v }))}
    </div>
    ${host.admin
      ? html`<div class="nf-actions">
          <button class="nf-btn" @click=${() => actions.centre()}>${t("device_centre")}</button>
          ${placed.y !== null ? html`<button class="nf-btn" @click=${() => set({ y: null })}>${t("height_auto")}</button>` : nothing}
          ${asFurniture(host, placed, actions)}
          <button class="nf-btn nf-danger" @click=${() => actions.remove()}>${t("devices_remove")}</button>
        </div>`
      : nothing}
  </section>`;
}
