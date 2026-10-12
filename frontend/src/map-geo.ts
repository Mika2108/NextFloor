// The geometry of the real map under the plan: which map tiles cover the house and where each one lies in the plan.
// The plan has an anchor point (map.x / map.z, metres) that lies at map.lat / map.lon, and the plan's north (settings.north)
// says how the map is turned. Pure functions: no Lit, no three.js, no network.

import type { MapSettings } from "./model.ts";

export const OSM_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
export const OSM_ATTRIBUTION = "© OpenStreetMap contributors";
/** The earth's circumference at the equator (m). */
const EARTH = 40075016.686;
const DEG = Math.PI / 180;

export const DEFAULT_MAP_ZOOM = 18;
export const DEFAULT_MAP_OPACITY = 0.5;
/** Half the side of the square the map covers around the anchor (m). */
export const MAP_RADIUS = 160;

/** Where a tile lies: its top-left corner in the map frame (metres east and north of the anchor) and its side. */
export interface MapTile {
  x: number;
  y: number;
  z: number;
  east: number;
  north: number;
  size: number;
}

/** The tile number (fractional) that holds a place, in Web Mercator at zoom `z`. */
export function tileOf(lat: number, lon: number, z: number): [number, number] {
  const n = 2 ** z;
  const x = ((lon + 180) / 360) * n;
  const y = ((1 - Math.log(Math.tan(lat * DEG) + 1 / Math.cos(lat * DEG)) / Math.PI) / 2) * n;
  return [x, y];
}

/** The side of a tile in real metres at the anchor's latitude. */
export const tileMetres = (lat: number, z: number): number => (EARTH * Math.cos(lat * DEG)) / 2 ** z;

/** Every tile that touches the square of `radius` metres around the anchor, with its place in the map frame. */
export function mapTiles(lat: number, lon: number, zoom: number, radius = MAP_RADIUS): MapTile[] {
  const [cx, cy] = tileOf(lat, lon, zoom);
  const size = tileMetres(lat, zoom);
  const span = radius / size;
  const last = 2 ** zoom - 1;
  const tiles: MapTile[] = [];
  for (let y = Math.floor(cy - span); y <= Math.floor(cy + span); y++) {
    for (let x = Math.floor(cx - span); x <= Math.floor(cx + span); x++) {
      if (y < 0 || y > last) continue;
      const wrapped = ((x % (last + 1)) + last + 1) % (last + 1);
      tiles.push({ x: wrapped, y, z: zoom, east: (x - cx) * size, north: -(y - cy) * size, size });
    }
  }
  return tiles;
}

/** The address of a tile from a template with {z}, {x} and {y} (and {s}: a, b or c). */
export function tileUrl(template: string, tile: Pick<MapTile, "x" | "y" | "z">): string {
  return template.replace("{z}", String(tile.z)).replace("{x}", String(tile.x)).replace("{y}", String(tile.y)).replace("{s}", "abc"[(tile.x + tile.y) % 3]);
}

/** The template a map uses: its own, or OpenStreetMap's. */
export const templateOf = (map: Pick<MapSettings, "url">): string => (map.url && map.url.startsWith("https://") ? map.url : OSM_URL);

/** A point of the map frame (metres east, north of the anchor) in the plan, turned by the plan's north (degrees clockwise from up). */
export function planOfMap(east: number, north: number, planNorth: number, anchor: { x: number; z: number }): [number, number] {
  const a = planNorth * DEG;
  return [anchor.x + east * Math.cos(a) + north * Math.sin(a), anchor.z + east * Math.sin(a) - north * Math.cos(a)];
}

/** The inverse: a plan point as metres east and north of the anchor. */
export function mapOfPlan(x: number, z: number, planNorth: number, anchor: { x: number; z: number }): [number, number] {
  const a = planNorth * DEG;
  const [dx, dz] = [x - anchor.x, z - anchor.z];
  return [dx * Math.cos(a) + dz * Math.sin(a), dx * Math.sin(a) - dz * Math.cos(a)];
}

/** A map the settings ask for: switched on and with a place on Earth. */
export const mapShown = (map: MapSettings | null | undefined): map is MapSettings => !!map && map.on === true && Number.isFinite(map.lat) && Number.isFinite(map.lon);

/** The anchor, the opacity and the zoom of a map with the defaults filled in. */
export const mapLook = (map: MapSettings): { x: number; z: number; opacity: number; zoom: number } => ({
  x: map.x ?? 0,
  z: map.z ?? 0,
  opacity: map.opacity ?? DEFAULT_MAP_OPACITY,
  zoom: map.zoom ?? DEFAULT_MAP_ZOOM,
});

/** The credit line of a map: OpenStreetMap's own, or the host of a custom tile address. */
export function mapCredit(map: Pick<MapSettings, "url">): { text: string; href: string } {
  const template = templateOf(map);
  if (template === OSM_URL) return { text: OSM_ATTRIBUTION, href: "https://www.openstreetmap.org/copyright" };
  try {
    const host = new URL(template.replace(/\{[a-z]\}/g, "a")).host;
    return { text: `Map: ${host}`, href: `https://${host}/` };
  } catch {
    return { text: "Map", href: "#" };
  }
}
