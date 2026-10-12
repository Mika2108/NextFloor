// Roof sections as the editor makes them: a section drawn on the plan, a copy, and the sections' list helpers.

import { uid, type Building, type RoofSection, type Vec2 } from "../../../model.ts";
import { wallTopUnder } from "../../../roof-sections.ts";

const thousandths = (v: number) => Math.round(v * 1000) / 1000;

/** The height of a canopy's eaves above the ground floor. */
const CANOPY_EAVE = 2.4;

/**
 * A section drawn as a rectangle on the plan. Over rooms of a lower floor (a garage) its eaves sit on those walls, over no room
 * (a terrace, a carport) it becomes a canopy: a flat pent roof on posts 2.4 m above the ground floor.
 */
export function sectionFromRectangle(doc: Building, lo: Vec2, hi: Vec2): RoofSection {
  const wallTop = wallTopUnder(doc, lo[0], lo[1], hi[0], hi[1]);
  const canopy = wallTop === null;
  const ground = Math.min(...doc.floors.map((f) => f.elevation));
  const eave = thousandths(wallTop ?? ground + CANOPY_EAVE);
  const pitch = canopy ? 6 : doc.settings.roof.pitch || 35;
  return {
    id: uid("roof"),
    x0: thousandths(lo[0]),
    z0: thousandths(lo[1]),
    x1: thousandths(hi[0]),
    z1: thousandths(hi[1]),
    shape: canopy ? "pent" : "gable",
    axis: hi[0] - lo[0] >= hi[1] - lo[1] ? "x" : "z",
    eave_a: eave,
    eave_b: eave,
    pitch_a: pitch,
    pitch_b: pitch,
    base: eave,
    overhang: canopy ? 0.15 : null,
    ...(canopy ? { open: true } : {}),
  };
}

/** A copy of a section, a metre to the south east, so that it can be told from the original. */
export function copyOfSection(section: RoofSection): RoofSection {
  const move = (v: number) => thousandths(v + 1);
  return { ...structuredClone(section), id: uid("roof"), x0: move(section.x0), x1: move(section.x1), z0: move(section.z0), z1: move(section.z1) };
}

/** A section, or the list's 1-based number of it (0 when it is not in the list). */
export const sectionNumber = (sections: readonly RoofSection[], id: string): number => sections.findIndex((s) => s.id === id) + 1;
