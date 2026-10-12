// Parts that many models share: legs, door and drawer fronts.

import { Builder } from "./builder.ts";
import { C, EDGE_FAINT, EDGE_FURN, EDGE_GLOW, M, material, type Material } from "./palette.ts";

/** Four legs inside a w × d footprint; `taper` makes them narrower at the foot. */
export function legs(b: Builder, w: number, d: number, h: number, thickness: number, inset: number, color = C.metal, taper = false): void {
  const [x, z] = [w / 2 - inset - thickness, d / 2 - inset - thickness];
  const leg = material(color);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const [cx, cz] = [sx * x, sz * z];
      if (taper) b.loft([cx - thickness * 0.3, cx + thickness * 0.3, cz - thickness * 0.3, cz + thickness * 0.3], [cx - thickness / 2, cx + thickness / 2, cz - thickness / 2, cz + thickness / 2], 0, h, leg);
      else b.block({ x: [cx - thickness / 2, cx + thickness / 2], y: [0, h], z: [cz - thickness / 2, cz + thickness / 2] }, leg);
    }
  }
}

/** Door or drawer fronts on the front face (+z): division lines and small glowing handles. */
export function fronts(b: Builder, x0: number, x1: number, y0: number, y1: number, z: number, count: number, handleY: number | null = null, horizontal = false): void {
  const width = (x1 - x0) / count;
  for (let i = 1; i < count; i++) b.seg(x0 + width * i, y0, z, x0 + width * i, y1, z, EDGE_FAINT);
  for (let i = 0; i < count; i++) {
    const centre = x0 + width * (i + 0.5);
    const y = handleY ?? y1 - 0.08;
    if (horizontal) {
      const half = Math.min(0.1, width / 4);
      b.seg(centre - half, y, z + 0.012, centre + half, y, z + 0.012, EDGE_GLOW);
    } else {
      // vertical handles alternate sides, so neighbouring doors have theirs next to each other
      const x = count > 1 ? centre + (i % 2 ? -width / 2 + 0.06 : width / 2 - 0.06) : centre + width / 2 - 0.06;
      b.seg(x, y - 0.08, z + 0.012, x, y + 0.08, z + 0.012, EDGE_GLOW);
    }
  }
}

/** A carcass with a plinth and fronts: the basis of cabinets, kitchen units and wardrobes. */
export function cabinet(b: Builder, w: number, d: number, h: number, doors: number, handleY: number | null = null, horizontal = false, body: Material = M.body): void {
  b.block({ x: [-w / 2, w / 2], y: [0.02, h], z: [-d / 2, d / 2 - 0.02] }, body, EDGE_FURN);
  b.block({ x: [-w / 2 + 0.02, w / 2 - 0.02], y: [0, 0.08], z: [-d / 2 + 0.02, d / 2 - 0.06] }, material(C.dark));
  fronts(b, -w / 2, w / 2, 0.08, h, d / 2 - 0.02, doors, handleY, horizontal);
}


