// How each kind of outdoor area looks in the neon scene: colours of the top, the sides, and the outline.

import type { OutdoorType } from "../../model.ts";

export interface Look {
  color: number;
  side: number;
  edge: number;
  /** How strong the outline is (its colour is scaled by this). */
  edgeAlpha: number;
}

export const LOOKS: Record<OutdoorType, Look> = {
  lawn: { color: 0x0e2822, side: 0x0b201b, edge: 0x3ee2a2, edgeAlpha: 0.16 },
  terrace: { color: 0x1c1b30, side: 0x161628, edge: 0x5b7cff, edgeAlpha: 0.32 },
  path: { color: 0x1b2234, side: 0x151b29, edge: 0x5b7cff, edgeAlpha: 0.22 },
  driveway: { color: 0x171d2c, side: 0x121725, edge: 0x5b7cff, edgeAlpha: 0.18 },
  pool: { color: 0x0b3b5b, side: 0x0d2539, edge: 0x37e0ff, edgeAlpha: 0.6 },
  bed: { color: 0x1b1613, side: 0x15110f, edge: 0x3ee2a2, edgeAlpha: 0.2 },
  wild: { color: 0x15221b, side: 0x101b15, edge: 0x9ad24f, edgeAlpha: 0.14 },
  hedge: { color: 0x174130, side: 0x113125, edge: 0x3ee2a2, edgeAlpha: 0.35 },
  fence: { color: 0x1e2a47, side: 0x1e2a47, edge: 0x5b7cff, edgeAlpha: 0.45 },
  pergola: { color: 0x2b2339, side: 0x201b2d, edge: 0x5b7cff, edgeAlpha: 0.5 },
};
