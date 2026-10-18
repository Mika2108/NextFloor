// The entities a piece of furniture is linked to: what lights it, powers it, shows on its screen, or tells its state.

import { html, nothing, type TemplateResult } from "lit";
import { furnitureEntities, hasScreen, isMediaFurniture, isStatusSensor, robotRoomSensor } from "../../../devices.ts";
import type { I18nKey } from "../../../i18n.ts";
import { ENERGY_DEVICES, isLamp, type Furniture } from "../../../model.ts";
import { isPackType, packDisplay } from "../../../packs.ts";
import { entityOptions, isBinary, isNumeric, isPowerSensor } from "../entities.ts";
import { checkField, entityField, glowField, hint, iconField, markerField, selectField } from "../fields.ts";
import type { EditorHost } from "../host.ts";
import { lightEffectFields } from "../light-effect-fields.ts";
import { lightEffectSource } from "../../../light-effects.ts";

/** What the forms of a piece of furniture make the editor do. */
export interface FurnitureLinkActions {
  update(patch: Partial<Furniture>): void;
}

const STATE_DOMAINS = /^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./;
const noneAsNull = (v: string | null) => (v === "none" ? null : v);

/** "State from": an entity lights the top of the item (two entities light its halves), for any furniture. */
export function stateLinks(host: EditorHost, item: Furniture, actions: FurnitureLinkActions): TemplateResult {
  const t = host.t;
  const options = entityOptions(host.hass, (id) => STATE_DOMAINS.test(id));
  const first = !!item.state_entity && item.state_entity !== "none";
  const second = first && !!item.state_entity2 && item.state_entity2 !== "none";
  const splits: ["left_right" | "top_bottom", string][] = [["left_right", t("furn_state_left_right")], ["top_bottom", t("furn_state_top_bottom")]];
  return html`${entityField(host, t("furn_state_entity"), item.state_entity ?? null, undefined, options, (v) => actions.update({ state_entity: noneAsNull(v) }))}
    ${first ? entityField(host, t("furn_state_entity2"), item.state_entity2 ?? null, undefined, options, (v) => actions.update({ state_entity2: noneAsNull(v) })) : nothing}
    ${second ? selectField(host, t("furn_state_split"), item.state_split === "top_bottom" ? "top_bottom" : "left_right", splits, (v) => actions.update({ state_split: v })) : nothing}
    ${hint(t("furn_state_hint"), "nf-wide")}`;
}

/** The domains an item's main entity can come from, and the label of that field, by what the item is. */
function mainEntity(item: Furniture, hass: EditorHost["hass"]): { accept: (id: string) => boolean; label: I18nKey } {
  const media = isMediaFurniture(item.type);
  // a pack item that only has a status light (a printer's panel, a wallbox's LED) links like any device
  const tvLike = media && (!isPackType(item.type) || packDisplay(item.type));
  if (isLamp(item.type)) return { accept: (id) => /^(light|switch|input_boolean)\./.test(id), label: "furn_entity_light" };
  if (tvLike) return { accept: (id) => /^(media_player|switch|input_boolean|light)\./.test(id), label: "furn_entity_tv" };
  if (item.type === "radiator") return { accept: (id) => id.startsWith("climate."), label: "furn_entity_climate" };
  if (item.type === "robot_vacuum") return { accept: (id) => id.startsWith("vacuum."), label: "furn_entity_vacuum" };
  return { accept: (id) => /^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(id) || isStatusSensor(hass?.states[id]), label: "furn_entity" };
}

/** What "automatic" would choose for a link: the item is looked at again with that link cleared. */
function automaticLink(host: EditorHost, item: Furniture, key: "entity" | "power"): string | null {
  if (!host.hass) return null;
  const probe = structuredClone(host.doc.floors);
  for (const floor of probe) for (const f of floor.furniture) if (f.id === item.id) f[key] = null;
  return furnitureEntities(host.hass, probe).get(item.id)?.[key] ?? null;
}

const powerLabel = (type: string): I18nKey => (type === "meter" ? "energy_grid" : type === "inverter" ? "energy_solar_sensor" : type === "home_battery" ? "energy_battery_sensor" : "furn_power");

const linkBlock = (...rows: (TemplateResult | typeof nothing)[]): TemplateResult => html`<div class="nf-form nf-links">${rows}</div>`;

/** The links of electric furniture: the main entity and the power sensor, and what is special to the kind of device. */
export function furnitureLinks(host: EditorHost, item: Furniture, actions: FurnitureLinkActions): TemplateResult | typeof nothing {
  const { hass } = host;
  if (!hass) return nothing;
  const t = host.t;
  const lamp = isLamp(item.type);
  const main = mainEntity(item, hass);
  const power = entityOptions(hass, (id) => isPowerSensor(hass, id));
  const set = (key: keyof Furniture) => (v: string | null) => actions.update({ [key]: noneAsNull(v) });
  const kindOptions = (accept: (id: string) => boolean) => entityOptions(hass, accept);
  const strings = (host.doc.settings.roof.strings ?? []).filter((s) => s.inverter === item.id).map((s) => s.name);
  const hasLink = !!item.entity && item.entity !== "none";
  const doors = item.type === "fridge_smart" ? kindOptions((id) => id.startsWith("binary_sensor.")) : [];
  const hintKey: I18nKey = lamp ? (item.type === "lamp_pendant" ? "lamp_hint_pendant" : "lamp_hint") : isMediaFurniture(item.type) ? "furn_links_hint_tv" : item.type === "robot_vacuum" ? "robot_hint" : "furn_links_hint";
  return html`${linkBlock(
      item.type === "grid_point" ? hint(t("grid_point_hint"), "nf-wide") : entityField(host, t(main.label), item.entity ?? null, automaticLink(host, item, "entity"), kindOptions(main.accept), (v) => actions.update({ entity: v })),
      !lamp && !(ENERGY_DEVICES as readonly string[]).includes(item.type) && !hasScreen(item.type) ? stateLinks(host, item, actions) : nothing,
      lamp && hasLink
        ? html`${entityField(host, t("furn_color_entity"), item.color_entity ?? null, undefined, kindOptions((id) => id.startsWith("light.") && id !== item.entity), set("color_entity"))}${hint(t("furn_color_entity_hint"), "nf-wide")}`
        : nothing,
      lamp ? glowField(host, item.glow_scale, (v) => actions.update({ glow_scale: v })) : nothing,
      lamp ? lightEffectFields(host, item, lightEffectSource(hass, item, item.entity && item.entity !== "none" ? item.entity : automaticLink(host, item, "entity"))?.attributes.effect_list, actions.update) : nothing,
      hasScreen(item.type) ? glowField(host, item.ambilight, (v) => actions.update({ ambilight: v }), { label: "ambilight", hint: "ambilight_hint", lowest: 0 }) : nothing,
      lamp || item.type === "grid_point" ? nothing : entityField(host, t(powerLabel(item.type)), item.power ?? null, automaticLink(host, item, "power"), power, (v) => actions.update({ power: v })),
    )}
    ${item.type === "meter" ? linkBlock(entityField(host, t("furn_export"), item.export ?? null, undefined, power, set("export")), hint(t("furn_export_hint"), "nf-wide")) : nothing}
    ${item.type === "inverter" && (host.doc.settings.roof.solar ?? []).length > 0 ? hint(strings.length > 0 ? t("inverter_strings", { names: strings.join(", ") }) : t("inverter_strings_none"), "nf-wide") : nothing}
    ${item.type === "home_battery"
      ? linkBlock(
          entityField(host, t("furn_soc"), item.soc ?? null, undefined, kindOptions((id) => isNumeric(id) && (hass.states[id]?.attributes.device_class === "battery" || hass.states[id]?.attributes.unit_of_measurement === "%")), set("soc")),
          entityField(host, t("furn_charge"), item.charge ?? null, undefined, power, set("charge")),
          hint(t("furn_charge_hint"), "nf-wide"),
        )
      : nothing}
    ${item.type === "wallbox" ? linkBlock(entityField(host, t("furn_wallbox_status"), item.status ?? null, undefined, kindOptions((id) => isBinary(id) || isNumeric(id)), set("status"))) : nothing}
    ${!lamp || item.entity
      ? html`${checkField(host, t("device_confirm"), !!item.confirm, (on) => actions.update({ confirm: on }), { title: t("device_confirm_hint") })}
        <div class="nf-form">${markerField(host, item.marker ?? null, (v) => actions.update({ marker: v }))}${iconField(host, item.icon, (v) => actions.update({ icon: v }))}</div>`
      : nothing}
    ${item.type === "robot_vacuum"
      ? linkBlock(entityField(host, t("furn_robot_room"), item.room_sensor ?? null, robotRoomSensor(hass, furnitureEntities(hass, host.doc.floors).get(item.id)?.entity ?? null, null), kindOptions(isNumeric), (v) => actions.update({ room_sensor: v })))
      : nothing}
    ${item.type === "fridge_smart"
      ? html`${linkBlock(entityField(host, t("furn_door_left"), item.door_left ?? null, undefined, doors, (v) => actions.update({ door_left: v })), entityField(host, t("furn_door_right"), item.door_right ?? null, undefined, doors, (v) => actions.update({ door_right: v })))}
        ${hint(t("fridge_hint"))}`
      : nothing}
    ${hint(t(hintKey))}`;
}
