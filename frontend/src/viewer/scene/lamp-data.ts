// What the viewer knows about each lamp model: its size when the plan gives none, where its light comes from, and how it hangs.

import type { LightKind } from "../lighting.ts";
import type { LampModel } from "./types.ts";

/** Width, depth and height of a lamp model in metres. */
export const LAMP_SIZE: Record<LampModel, readonly [number, number, number]> = {
  ceiling: [0.4, 0.4, 0.08],
  downlight: [0.1, 0.1, 0.02],
  spot: [0.1, 0.1, 0.14],
  panel: [0.6, 0.6, 0.03],
  uplight: [0.35, 0.35, 1.8],
  bollard: [0.16, 0.16, 0.8],
  garden: [0.12, 0.12, 0.3],
  pendant: [0.4, 0.4, 0.8],
  fan: [1.32, 1.32, 0.32],
  floor: [0.42, 0.42, 1.7],
  table: [0.26, 0.26, 0.45],
  wall: [0.22, 0.12, 0.2],
  strip: [2, 0.04, 0.03],
};

/** Models that hang from the ceiling, which the cut view hides. */
export const HANGING_LAMPS: ReadonlySet<LampModel> = new Set(["ceiling", "downlight", "spot", "panel", "pendant", "fan", "strip"]);

/** LED strips mounted lower than this (metres) wash the wall upwards instead of lighting down. */
export const LOW_STRIP = 1.0;

/**
 * Where a lamp's light starts (height above the floor) and what kind of light it is, for a room of height `ceiling`. `base` is the
 * height the lamp stands or hangs at, `height` its own height.
 */
export function lightOrigin(model: LampModel, ceiling: number, base: number, height: number): [number, LightKind] {
  switch (model) {
    case "ceiling":
      return [ceiling - 0.12, "ceiling"];
    case "downlight":
      return [ceiling - 0.03, "spot"];
    case "spot":
      return [ceiling - height, "spot"];
    case "panel":
      return [ceiling - 0.05, "ceiling"];
    case "pendant":
      return [Math.max(0.5, ceiling - height), "pendant"];
    // the light kit under the motor shines down
    case "fan":
      return [Math.max(0.5, ceiling - height + 0.02), "ceiling"];
    case "floor":
      return [base + height - 0.15, "omni"];
    case "uplight":
      return [base + height, "up"];
    case "table":
      return [base + height - 0.1, "omni"];
    case "wall":
      return [base + 0.1, "wall"];
    // a strip under the ceiling or the wall cabinets shines down; one low down (skirting, behind a cabinet) washes the wall and
    // the floor around it from below
    case "strip":
      return [base + Math.max(0.02, height) - 0.01, base < LOW_STRIP ? "up" : "ceiling"];
    case "bollard":
      return [base + height - 0.08, "ceiling"];
    case "garden":
      return [base + height, "up"];
  }
}
