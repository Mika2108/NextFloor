// Colours and sizes of the floor geometry.

/** The base colours of the neon look. */
export const NEON = {
  floor: 0x0e1629,
  slab: 0x0a1120,
  wall: 0x131d31,
  wallTop: 0x14303f,
  edge: 0x37e0ff,
  edgeSoft: 0x5b7cff,
};

/** The floor tint and the pattern tile (column, row in the pattern atlas) per floor material. */
export const FLOOR_LOOK: Record<string, { color: number; tile: [number, number] }> = {
  wood: { color: 0x111a2e, tile: [0, 0] },
  oak: { color: 0x131b2d, tile: [1, 0] },
  tiles: { color: 0x0e182f, tile: [2, 0] },
  carpet: { color: 0x10152b, tile: [0, 1] },
  stone: { color: 0x0f172b, tile: [1, 1] },
  concrete: { color: 0x111827, tile: [2, 1] },
};

/** The thickness of the floor slab below the floor. */
export const SLAB = 0.2;
/** Exterior walls are sorted into this many compass sectors; each sector is one fold bucket. */
export const SECTORS = 8;
