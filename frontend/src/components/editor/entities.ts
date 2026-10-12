// Which entities a form offers for which job, and how they are listed.

import { entityName } from "../../devices.ts";
import type { HomeAssistant } from "../../types.ts";

export interface EntityOption {
  id: string;
  label: string;
}

/** Entities that carry a number: sensors and the number helpers. */
export const isNumeric = (id: string): boolean => /^(sensor|input_number|number)\./.test(id);

/** Entities that are on or off: binary sensors and the toggle helper. */
export const isBinary = (id: string): boolean => /^(binary_sensor|input_boolean)\./.test(id);

/** A power sensor: device class power, or a plain sensor in W or kW (templates, MQTT and many meters have no class). */
export function isPowerSensor(hass: HomeAssistant | undefined, id: string): boolean {
  if (!isNumeric(id)) return false;
  const attributes = hass?.states[id]?.attributes;
  return attributes?.device_class === "power" || attributes?.unit_of_measurement === "W" || attributes?.unit_of_measurement === "kW";
}

/** The area an entity is in: its own, or that of its device. */
function areaNameOf(hass: HomeAssistant | undefined, id: string): string | undefined {
  const entry = hass?.entities?.[id];
  const area = entry?.area_id ?? (entry?.device_id ? hass?.devices?.[entry.device_id]?.area_id : null);
  return area ? hass?.areas?.[area]?.name : undefined;
}

/** The entities that pass `accept`, as options named "Name · Area", sorted by that label. */
export function entityOptions(hass: HomeAssistant | undefined, accept: (id: string) => boolean): EntityOption[] {
  return Object.keys(hass?.states ?? {})
    .filter(accept)
    .map((id) => {
      const area = areaNameOf(hass, id);
      return { id, label: area ? `${entityName(hass, id)} · ${area}` : entityName(hass, id) };
    })
    .sort((a, b) => a.label.localeCompare(b.label));
}

/** The power sensor of an energy device: set by hand, or the one found on its Home Assistant device. */
export function powerSensorOf(item: { id: string; power?: string | null }, found: Map<string, { power: string | null }>): string | null {
  return item.power && item.power !== "none" ? item.power : (found.get(item.id)?.power ?? null);
}
