// Energy and building technology: inverters, batteries, wallboxes, meters, the grid cabinet, and security cameras.

import { DEG, type GeoBuffer, LineBuffer } from "../geo.ts";
import { Builder, type Plan } from "./builder.ts";
import { C, EDGE_FAINT, EDGE_FURN, EDGE_GLOW, M, material } from "./palette.ts";

/**
 * A solar inverter on the wall (from 1.1 m): a flat box with a display and a status line. "slim" is a tall narrow one with a
 * vertical light strip, "hybrid" one with a round dial and two fans below.
 */
export function inverter(b: Builder, w: number, d: number, h: number, variant: string | null): void {
  const y0 = 1.1;
  const z = d / 2;
  const housing = (side: typeof M.white) => b.block({ x: [-w / 2, w / 2], y: [y0, y0 + h], z: [-d / 2, d / 2] }, side, EDGE_FURN);
  if (variant === "slim") {
    housing(M.darkBody);
    b.seg(-w * 0.25, y0 + h * 0.15, z + 0.004, -w * 0.25, y0 + h * 0.85, z + 0.004, EDGE_GLOW);
    b.block({ x: [-w * 0.1, w * 0.3], y: [y0 + h * 0.7, y0 + h * 0.85], z: [z, z + 0.005] }, M.dark);
    return;
  }
  housing(M.white);
  if (variant === "hybrid") {
    b.ring(0, y0 + h * 0.66, Math.min(w, h) * 0.22, z + 0.004, 20, EDGE_GLOW);
    b.seg(-w * 0.08, y0 + h * 0.66, z + 0.005, w * 0.08, y0 + h * 0.66, z + 0.005, EDGE_GLOW);
    for (const s of [-1, 1]) b.ring(s * w * 0.22, y0 + h * 0.2, Math.min(w, h) * 0.1, -d / 2 - 0.002, 12, EDGE_GLOW);
    return;
  }
  b.block({ x: [-w * 0.28, w * 0.28], y: [y0 + h * 0.58, y0 + h * 0.82], z: [d / 2, d / 2 + 0.006] }, M.dark);
  b.seg(-w * 0.3, y0 + h * 0.45, d / 2 + 0.004, w * 0.3, y0 + h * 0.45, d / 2 + 0.004, EDGE_GLOW);
  // cooling fins at the sides
  for (const s of [-1, 1]) for (let i = 1; i < 6; i++) b.seg((s * w) / 2 + s * 0.002, y0 + (h * i) / 6, -d / 2 + 0.03, (s * w) / 2 + s * 0.002, y0 + (h * i) / 6, d / 2 - 0.03, EDGE_FAINT);
}

/** The grid connection at the edge of the plot: a small dark street cabinet with a glowing lid edge. */
export function gridCabinet(b: Builder, w: number, d: number, h: number): void {
  b.block({ x: [-w / 2, w / 2], y: [0, h], z: [-d / 2, d / 2] }, M.darkBody, EDGE_FURN);
  b.block({ x: [-w / 2 - 0.01, w / 2 + 0.01], y: [h, h + 0.03], z: [-d / 2 - 0.01, d / 2 + 0.01] }, M.darkBody);
  b.seg(-w / 2, h + 0.032, d / 2 + 0.01, w / 2, h + 0.032, d / 2 + 0.01, EDGE_GLOW);
  b.seg(-w * 0.3, h * 0.55, d / 2 + 0.003, w * 0.3, h * 0.55, d / 2 + 0.003, EDGE_FAINT);
}

/** A wallbox (from 1.0 m): a compact box with a glowing ring and the charging cable hanging below. */
export function wallbox(b: Builder, w: number, d: number, h: number): void {
  const y0 = 1;
  b.block({ x: [-w / 2, w / 2], y: [y0, y0 + h], z: [-d / 2, d / 2] }, M.darkBody, EDGE_FURN);
  b.ring(0, y0 + h * 0.58, Math.min(w, h) * 0.28, d / 2 + 0.003, 16, EDGE_GLOW);
  // the cable below the box, and its holster
  b.block({ x: [-0.015, 0.015], y: [y0 - 0.35, y0], z: [d / 2 - 0.03, d / 2] }, M.dark);
  b.block({ x: [-0.06, 0.06], y: [y0 - 0.42, y0 - 0.35], z: [d / 2 - 0.05, d / 2] }, M.darkBody);
}

/** A meter cabinet on the wall (from 0.4 m): a tall box with the meter window and the glowing pulse LED. */
export function meterCabinet(b: Builder, w: number, d: number, h: number): void {
  const y0 = 0.4;
  b.block({ x: [-w / 2, w / 2], y: [y0, y0 + h], z: [-d / 2, d / 2] }, M.white, EDGE_FURN);
  // the door's edge and handle
  b.seg(-w / 2 + 0.025, y0 + 0.025, d / 2 + 0.003, -w / 2 + 0.025, y0 + h - 0.025, d / 2 + 0.003, EDGE_FAINT);
  b.seg(-w / 2 + 0.025, y0 + h - 0.025, d / 2 + 0.003, w / 2 - 0.025, y0 + h - 0.025, d / 2 + 0.003, EDGE_FAINT);
  b.block({ x: [w / 2 - 0.06, w / 2 - 0.035], y: [y0 + h * 0.5 - 0.05, y0 + h * 0.5 + 0.05], z: [d / 2, d / 2 + 0.012] }, M.dark);
  // the meter behind its window, with the display line
  b.block({ x: [-w * 0.3, w * 0.3], y: [y0 + h * 0.6, y0 + h * 0.8], z: [d / 2, d / 2 + 0.005] }, M.dark);
  b.seg(-w * 0.22, y0 + h * 0.7, d / 2 + 0.008, w * 0.22, y0 + h * 0.7, d / 2 + 0.008, EDGE_GLOW);
}

/**
 * A home battery: a tower of stacked modules with a charge bar. "wall" is a flat battery hanging at hip height with a light
 * bar, "cube" a compact box (a balcony battery) with a light bar and a handle.
 */
export function homeBattery(b: Builder, w: number, d: number, h: number, variant: string | null): void {
  if (variant === "wall") {
    const y0 = 0.5;
    b.block({ x: [-w / 2, w / 2], y: [y0, y0 + h], z: [-d / 2, d / 2] }, M.white, EDGE_FURN);
    b.seg(-w * 0.3, y0 + h * 0.9, d / 2 + 0.004, w * 0.3, y0 + h * 0.9, d / 2 + 0.004, EDGE_GLOW);
    b.seg(-w * 0.3, y0 + h * 0.08, d / 2 + 0.003, w * 0.3, y0 + h * 0.08, d / 2 + 0.003, EDGE_FAINT);
    return;
  }
  if (variant === "cube") {
    b.block({ x: [-w / 2 + 0.01, w / 2 - 0.01], y: [0, 0.03], z: [-d / 2 + 0.01, d / 2 - 0.01] }, M.dark);
    b.block({ x: [-w / 2, w / 2], y: [0.03, h], z: [-d / 2, d / 2] }, M.darkBody, EDGE_FURN);
    b.seg(-w * 0.35, h * 0.85, d / 2 + 0.004, w * 0.35, h * 0.85, d / 2 + 0.004, EDGE_GLOW);
    b.block({ x: [-w * 0.15, w * 0.15], y: [h, h + 0.025], z: [-0.012, 0.012] }, M.dark);
    return;
  }
  b.block({ x: [-w / 2 + 0.02, w / 2 - 0.02], y: [0, 0.06], z: [-d / 2 + 0.02, d / 2 - 0.02] }, M.dark);
  const modules = Math.max(2, Math.round((h - 0.06) / 0.3));
  const height = (h - 0.06) / modules;
  for (let i = 0; i < modules; i++) b.block({ x: [-w / 2, w / 2], y: [0.06 + i * height + 0.004, 0.06 + (i + 1) * height], z: [-d / 2, d / 2] }, M.white, EDGE_FURN);
  // the charge bar: five short segments
  for (let k = 0; k < 5; k++) {
    const y = 0.06 + h * 0.18 + k * ((h - 0.3) / 5);
    b.seg(-w * 0.04, y, d / 2 + 0.003, w * 0.04, y, d / 2 + 0.003, EDGE_GLOW);
  }
}

/**
 * A security camera into the lamp buffer: on a wall a small body with a lens looking along +z (turned by `rotation`), on the
 * ceiling a dome hanging at the ceiling height `y`.
 */
export function pushCameraModel(buf: GeoBuffer, model: "camera_wall" | "camera_ceiling", x: number, y: number, z: number, rotation: number): void {
  const [c, s] = [Math.cos(rotation * DEG), Math.sin(rotation * DEG)];
  const plan: Plan = (lx, lz) => [x + lx * c - lz * s, z + lx * s + lz * c];
  const b = new Builder(buf, new LineBuffer(), plan);
  const body = material(0x1a2640, 0x243660);
  const lens = material(0x0b111f, 0x1a2640); // a loft: lens-dark sides, body-coloured top
  if (model === "camera_ceiling") {
    // a dome: a flat base and a half-dome below it
    b.cylinder(0, 0, 0.07, y - 0.03, y, body, 12);
    b.loft([-0.05, 0.05, -0.05, 0.05], [-0.025, 0.025, -0.025, 0.025], y - 0.1, y - 0.03, lens);
    b.cylinder(0, 0, 0.012, y - 0.075, y - 0.06, M.accent, 6);
    return;
  }
  // a wall camera: the bracket at the wall (-z), the body pointing into the room (+z), the lens in front
  b.block({ x: [-0.02, 0.02], y: [y - 0.02, y + 0.02], z: [-0.06, -0.03] }, body);
  b.block({ x: [-0.01, 0.01], y: [y - 0.01, y + 0.06], z: [-0.05, -0.03] }, body);
  b.loft([-0.035, 0.035, -0.03, 0.09], [-0.04, 0.04, -0.03, 0.09], y + 0.02, y + 0.09, body);
  b.lyingCylinder("z", 0, 0.1, y + 0.03, y + 0.08, 0.03, 0.05, material(0x0b111f, C.accent), 10);
  b.block({ x: [-0.006, 0.006], y: [y + 0.075, y + 0.085], z: [0.085, 0.09] }, material(0xff3b4f));
}
