// Colours of the furniture in the neon look.

import { shade } from "../geo.ts";

/** The palette roles furniture and pack items are painted with. */
export const C = {
  body: 0x172238,
  bodyTop: 0x1d2b47,
  fabric: 0x1a2644,
  fabricTop: 0x22325a,
  cushion: 0x243661,
  wood: 0x19233c,
  woodTop: 0x202d4b,
  white: 0x1d2946,
  whiteTop: 0x26375e,
  metal: 0x2a3a60,
  dark: 0x0b111f,
  glass: 0x1c3a52,
  plant: 0x12302e,
  plantTop: 0x1a4540,
  pot: 0x1d2640,
  accent: 0x2b8fb3,
};

/** A surface material: the colour of the sides and of the top. */
export interface Material {
  side: number;
  top: number;
}

const material = (side: number, top = side): Material => ({ side, top });

export const M = {
  body: material(C.body, C.bodyTop),
  fabric: material(C.fabric, C.fabricTop),
  cushion: material(C.cushion),
  cushionSoft: material(C.cushion, C.fabricTop),
  wood: material(C.wood, C.woodTop),
  white: material(C.white, C.whiteTop),
  worktop: material(C.whiteTop),
  metal: material(C.metal),
  dark: material(C.dark),
  darkBody: material(C.dark, C.body),
  glass: material(C.glass),
  accent: material(C.accent),
  pot: material(C.pot),
  plant: material(C.plant, C.plantTop),
  bedding: material(C.white, C.whiteTop),
  pillow: material(C.whiteTop),
};
export { material };

export const EDGE_FURN = shade(0x5b7cff, 0.3);
export const EDGE_FAINT = shade(0x5b7cff, 0.17);
export const EDGE_GLOW = shade(0x37e0ff, 0.45);
