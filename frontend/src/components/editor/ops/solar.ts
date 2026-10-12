// Solar fields and their strings: the small calculations behind the solar form.

import type { Building, RoofSettings, SolarField, SolarString } from "../../../model.ts";
import { GROUND, moveField, proposeGroundField, roofFaces, wallFaces } from "../../../solar.ts";

const MAX_ROWS = 40;
const MAX_PER_ROW = 60;

/** Strings that no field uses any more are dropped. */
export function pruneStrings(roof: RoofSettings): void {
  const used = new Set((roof.solar ?? []).map((f) => f.string).filter(Boolean));
  roof.strings = (roof.strings ?? []).filter((s) => used.has(s.id));
}

/** Puts a field into the string `value`, into a new string for "new", or out of its string for null. Empty strings disappear. */
export function assignString(roof: RoofSettings, fieldId: string, value: string | null, create: { id: string; name(n: number): string }): void {
  const field = roof.solar?.find((f) => f.id === fieldId);
  if (!field) return;
  if (value === "new") {
    const strings = roof.strings ?? [];
    const made: SolarString = { id: create.id, name: create.name(strings.length + 1), entity: field.entity ?? null, inverter: null };
    roof.strings = [...strings, made];
    field.string = made.id;
  } else {
    field.string = value;
  }
  pruneStrings(roof);
}

/** The modules left out of a field after one cell was clicked: switched off if it was on, on if it was off. */
export function toggledSkip(skip: readonly string[] | null | undefined, cell: string): string[] | null {
  const left = new Set(skip ?? []);
  if (!left.delete(cell)) left.add(cell);
  return left.size > 0 ? [...left].sort() : null;
}

/** What typing into the "modules per row" box means: one number for every row, or a list with a number per row. Null for no usable number. */
export function columnsPatch(text: string): Partial<SolarField> | null {
  const numbers = text
    .split(/[,;\s]+/)
    .map((part) => Number.parseInt(part, 10))
    .filter((n) => Number.isFinite(n) && n >= 0);
  if (numbers.length === 0) return null;
  if (numbers.length === 1) return { cols: Math.max(1, Math.min(MAX_PER_ROW, numbers[0])), layout: null, skip: null };
  const layout = numbers.slice(0, MAX_ROWS).map((n) => Math.min(MAX_PER_ROW, n));
  return { layout, rows: Math.min(MAX_ROWS, numbers.length), cols: Math.max(1, ...numbers), skip: null };
}

/** A new number of rows. Fields with rows of their own length keep those lengths, and new rows take the length of the last one. */
export function rowsPatch(field: SolarField, wanted: number): Partial<SolarField> {
  const rows = Math.max(1, Math.min(MAX_ROWS, Math.round(wanted)));
  const layout = field.layout;
  if (!layout?.length) return { rows };
  return { rows, layout: Array.from({ length: rows }, (_, i) => layout[i] ?? layout[layout.length - 1]) };
}

/** The text of the "modules per row" box. */
export const columnsText = (field: SolarField): string => (field.layout?.length ? field.layout.join(", ") : String(field.cols));

/** What a field keeps when it moves to another face: its modules and its links, not its position. */
export const KEPT_ON_MOVE = ["portrait", "look", "name", "string", "entity", "module_w", "module_h", "wp"] as const;

export function keptOnMove(field: SolarField): Partial<SolarField> {
  const kept: Record<string, unknown> = {};
  for (const key of KEPT_ON_MOVE) kept[key] = field[key];
  return kept as Partial<SolarField>;
}

/**
 * What a field becomes when it is moved to the face with this key: the free-standing ground, a roof face or a house wall. It keeps
 * its modules and is laid out anew there; on a wall it is a single row. Null when no such face exists.
 */
export function fieldOnFace(doc: Building, field: SolarField, key: string): Partial<SolarField> | null {
  const kept = keptOnMove(field);
  if (key === GROUND) return { ...proposeGroundField(doc, field.id), ...kept, rows: field.rows, cols: field.cols };
  const roofFace = roofFaces(doc).find((f) => f.key === key);
  if (roofFace) return moveField(roofFace, { ...field, ...kept });
  const wallFace = wallFaces(doc).find((f) => f.key === key);
  return wallFace ? moveField(wallFace, { ...field, ...kept, rows: 1 }) : null;
}
