// Plan files: save the building as JSON and load it again. A shareable copy has every link to this
// Home Assistant removed (entities, areas, energy sensors, people), so it can go to someone else.

import { normalizeBuilding, type Building } from "./model.ts";

export const EXPORT_FORMAT = "nextfloor";

export interface ExportFile {
  format: typeof EXPORT_FORMAT;
  version: 1;
  exported_at: string;
  building: Building;
}

/** The building with all links to entities and areas cut. Background pictures are dropped as well. */
export function withoutEntities(source: Building): Building {
  const copy = structuredClone(source);
  copy.energy = { ...copy.energy, grid: null, solar: null, battery: null, battery_soc: null, tariff: null };
  copy.presence = [];
  for (const floor of copy.floors) {
    floor.background = null;
    floor.placements = [];
    floor.rooms.forEach((room) => (room.area_id = null));
    floor.furniture.forEach((piece) => {
      Object.assign(piece, { entity: null, power: null });
      delete piece.effect_animations; // HA program names are private, like entity links.
    });
    floor.openings.forEach((opening) => Object.assign(opening, { cover: null, contact: null, tilt: null }));
  }
  return copy;
}

export function exportFile(building: Building, shareable: boolean): ExportFile {
  return {
    format: EXPORT_FORMAT,
    version: 1,
    exported_at: new Date().toISOString(),
    building: shareable ? withoutEntities(building) : structuredClone(building),
  };
}

const looksLikePlan = (b: Building | undefined): b is Building => !!b && b.version === 1 && Array.isArray(b.floors) && !!b.settings;

/** Reads an export file (or a bare building). Throws Error("not_json") or Error("not_plan"). */
export function parseExport(text: string): Building {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error("not_json");
  }
  const wrapped = parsed as Partial<ExportFile> | null;
  const candidate = (wrapped?.format === EXPORT_FORMAT ? wrapped.building : parsed) as Building | undefined;
  if (!looksLikePlan(candidate)) throw new Error("not_plan");
  candidate.floors.forEach((floor) => (floor.background = null)); // pictures never travel with a file
  return normalizeBuilding(candidate);
}

const isStoredImage = (ref: string) => !/^https?:\/\//.test(ref) && !ref.startsWith("camera:");

/** Ids of the uploaded pictures a plan uses: floor backgrounds and pictures on screens (not URLs, not cameras). */
export function storedImageIds(building: Building): string[] {
  const ids = new Set<string>();
  for (const floor of building.floors) {
    if (floor.background?.image_id) ids.add(floor.background.image_id);
    const refs = floor.furniture.flatMap((piece) => piece.pictures ?? []);
    for (const { image } of refs) if (image && isStoredImage(image)) ids.add(image);
  }
  return [...ids];
}

/** Offers a text as a file download. */
export function download(filename: string, text: string): void {
  const link = document.createElement("a");
  const href = URL.createObjectURL(new Blob([text], { type: "application/json" }));
  Object.assign(link, { href, download: filename });
  link.click();
  setTimeout(() => URL.revokeObjectURL(href), 1000);
}
