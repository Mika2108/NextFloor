// Edits of the real map under the plan: switching it on at a sensible place and moving it under the drawing.

import { DEFAULT_MAP_OPACITY, DEFAULT_MAP_ZOOM } from "../../../map-geo.ts";
import type { Building, MapSettings } from "../../../model.ts";

/** The middle of everything drawn on any floor (rooms and outdoor areas), or the plan's origin for an empty plan. */
export function planCentre(b: Building): [number, number] {
  const xs: number[] = [];
  const zs: number[] = [];
  for (const floor of b.floors) {
    for (const room of floor.rooms) for (const [x, z] of room.points) (xs.push(x), zs.push(z));
    for (const area of floor.outdoor ?? []) for (const [x, z] of area.points) (xs.push(x), zs.push(z));
  }
  if (!xs.length) return [0, 0];
  const mid = (v: number[]) => Math.round(((Math.min(...v) + Math.max(...v)) / 2) * 100) / 100;
  return [mid(xs), mid(zs)];
}

/** A map switched on for the first time: at Home Assistant's location (when it knows one), anchored in the middle of the plan. */
export function newMap(b: Building, place: { lat?: number; lon?: number } | undefined): MapSettings {
  const [x, z] = planCentre(b);
  return { on: true, lat: place?.lat ?? 0, lon: place?.lon ?? 0, x, z, opacity: DEFAULT_MAP_OPACITY, zoom: DEFAULT_MAP_ZOOM, url: null };
}

/** The map moved under the drawing by `dx` metres to the right and `dz` metres down in the plan. */
export function movedMap(map: MapSettings, dx: number, dz: number): MapSettings {
  const round = (v: number) => Math.round(v * 100) / 100;
  return { ...map, x: round((map.x ?? 0) + dx), z: round((map.z ?? 0) + dz) };
}

/** An address typed for the tile server: https with the three placeholders, or nothing for OpenStreetMap. */
export function tileTemplateFrom(text: string): string | null | undefined {
  const t = text.trim();
  if (t === "") return null;
  return /^https:\/\/\S+$/.test(t) && ["{z}", "{x}", "{y}"].every((p) => t.includes(p)) ? t : undefined;
}
