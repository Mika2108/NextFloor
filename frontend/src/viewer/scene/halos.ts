// Soft glow points at lit lamps and light cones under spots (quality "High").

import { Color } from "three";
import { DEG, GeoBuffer } from "../geo.ts";
import { HANGING_LAMPS, LAMP_SIZE } from "./lamp-data.ts";
import type { DeviceMarker, LampModel } from "./types.ts";

/** The height of the glow point of a lamp model, for a room of height `ceiling`. */
export function haloHeight(model: LampModel, ceiling: number, base: number, height: number): number {
  switch (model) {
    case "ceiling":
      return ceiling - 0.07;
    case "downlight":
      return ceiling - 0.03;
    case "spot":
      return ceiling - height;
    case "panel":
      return ceiling - 0.03;
    case "pendant":
      return Math.max(0.4, ceiling - height) + 0.08;
    case "fan":
      return Math.max(0.5, ceiling - height + 0.03);
    case "floor":
      return base + height - 0.15;
    case "uplight":
      return base + height;
    case "table":
      return base + height - 0.09;
    case "wall":
      return base + height / 2;
    case "strip":
      return base + Math.max(0.02, height) - 0.01;
    case "bollard":
      return base + height - 0.08;
    case "garden":
      return base + height - 0.03;
  }
}

export interface HaloPoints {
  positions: number[];
  colours: number[];
}

/** How bright a halo is compared to the lamp's level. */
const HALO_LEVEL = 0.7;

/** Adds the glow points of a lit lamp: a strip gets four along its length, a wall lamp one in front of the wall, others one. */
export function addLampHalo(points: HaloPoints, lamp: DeviceMarker & { lamp: LampModel }, glow: NonNullable<DeviceMarker["glow"]>, ceiling: number): void {
  const [width, depth, height] = lamp.size ?? LAMP_SIZE[lamp.lamp];
  const base = lamp.base ?? 0;
  const turn = (lamp.rotation ?? 0) * DEG;
  const y = haloHeight(lamp.lamp, ceiling, base, height);
  const add = (x: number, yy: number, z: number, share: number) => {
    points.positions.push(x, yy, z);
    for (const c of glow.color) points.colours.push(c * glow.level * HALO_LEVEL * share);
  };
  if (lamp.lamp === "strip") {
    for (const along of [-0.4, -0.13, 0.13, 0.4]) {
      // an upright strip glows up its length
      if (lamp.upright) add(lamp.x, base + width * (0.5 + along), lamp.z, 0.6);
      else add(lamp.x + Math.cos(turn) * width * along, y, lamp.z + Math.sin(turn) * width * along, 0.6);
    }
  } else if (lamp.lamp === "wall") add(lamp.x - Math.sin(turn) * (depth / 2 + 0.05), y, lamp.z + Math.cos(turn) * (depth / 2 + 0.05), 1);
  else add(lamp.x, y, lamp.z, 1);
}

/** A soft cone from a downlight or spot to the floor, fading out towards the floor. */
export function addSpotCone(buffer: GeoBuffer, lamp: DeviceMarker & { lamp: LampModel }, glow: NonNullable<DeviceMarker["glow"]>, ceiling: number): void {
  const [width, , height] = lamp.size ?? LAMP_SIZE[lamp.lamp];
  const y = haloHeight(lamp.lamp, ceiling, lamp.base ?? 0, height);
  const top = new Color(...(glow.color.map((c) => c * 0.09 * glow.level) as [number, number, number]));
  const bottom = new Color(0, 0, 0);
  const [r0, r1] = [Math.max(0.03, width / 2), 0.45 + 0.35 * glow.level];
  const sides = 16;
  const ring = (angle: number, radius: number, yy: number): [number, number, number] => [lamp.x + Math.cos(angle) * radius, yy, lamp.z + Math.sin(angle) * radius];
  for (let i = 0; i < sides; i++) {
    const [a0, a1] = [(i / sides) * Math.PI * 2, ((i + 1) / sides) * Math.PI * 2];
    buffer.tri(ring(a0, r0, y), ring(a0, r1, 0.02), ring(a1, r1, 0.02), top, bottom, bottom);
    buffer.tri(ring(a0, r0, y), ring(a1, r1, 0.02), ring(a1, r0, y), top, bottom, top);
  }
}

/** Whether a lamp is hidden by the cut view (hanging lamps are, while the walls are cut). */
export const hiddenInCut = (model: LampModel): boolean => HANGING_LAMPS.has(model);
