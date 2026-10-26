// The 3D models a user can add: which items of the packs name one, where it lives on Home Assistant, and what the answers of the
// upload mean in words.

import { packItemLabel, packLabel } from "./furniture-names.ts";
import { packType, type FurniturePack } from "./packs.ts";

/** Where a model lives on the user's Home Assistant. */
export const meshPath = (id: string): string => `/api/nextfloor/mesh/${encodeURIComponent(id)}`;

/** The largest file Home Assistant takes, as the server limits it. */
export const MAX_UPLOAD_BYTES = 12 * 1024 * 1024;

export interface ModelSlot {
  /** The id the file is stored under. */
  id: string;
  /** Item names that use this model, with their packs: several items can share one. */
  items: string[];
}

/** The models the packs ask for, each once, with the items that use it, sorted by what they are called. */
export function modelSlots(packs: readonly FurniturePack[], language: string): ModelSlot[] {
  const byId = new Map<string, string[]>();
  for (const pack of packs) {
    for (const item of pack.items) {
      if (!item.mesh) continue;
      const names = byId.get(item.mesh) ?? [];
      byId.set(item.mesh, [...names, `${packItemLabel(item, packType(pack.id, item.id), language)} · ${packLabel(pack, language)}`]);
    }
  }
  return [...byId].map(([id, items]) => ({ id, items })).sort((a, b) => a.items[0].localeCompare(b.items[0]));
}

/** A size as people read it: 840 KB, 3.2 MB. */
export function readableSize(bytes: number): string {
  return bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export type UploadProblem = "forbidden" | "too_large" | "not_glb" | "bad_id" | "other";

/** What an answer of the upload means. Null when it went through. */
export function uploadProblem(status: number): UploadProblem | null {
  if (status === 201 || status === 200 || status === 204) return null;
  if (status === 401 || status === 403) return "forbidden";
  if (status === 413) return "too_large";
  if (status === 400) return "not_glb";
  if (status === 404) return "bad_id";
  return "other";
}

/** How many triangles a model may keep so that the prepared file stays under the limit: a plain glTF costs about 15 to 20 bytes each, so 40 is a safe allowance. */
export const BYTES_PER_TRIANGLE = 40;
export const maxTrianglesForLimit = (bytes = MAX_UPLOAD_BYTES): number => Math.floor((bytes * 0.8) / BYTES_PER_TRIANGLE);

/** The levels of detail offered, as the most triangles each allows. */
export const DETAIL_LEVELS = [{ key: "light", triangles: 30_000 }, { key: "normal", triangles: 80_000 }, { key: "fine", triangles: 150_000 }] as const;
export type DetailKey = (typeof DETAIL_LEVELS)[number]["key"];

/** The triangles for a level, never more than the file limit allows. */
export function trianglesFor(level: DetailKey): number {
  return Math.min(DETAIL_LEVELS.find((l) => l.key === level)!.triangles, maxTrianglesForLimit());
}
