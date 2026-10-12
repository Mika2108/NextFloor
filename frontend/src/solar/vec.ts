// Three-component vector helpers for the solar geometry.

export type V3 = [number, number, number];

export const DEG = Math.PI / 180;

export const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const dot = (a: V3, b: V3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const length = (a: V3): number => Math.hypot(a[0], a[1], a[2]);
export const normalize = (a: V3): V3 => {
  const l = length(a) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};
export const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

/** Rounded to centimetres. */
export const cm = (v: number): number => Math.round(v * 100) / 100;

/** Bearing of a plan direction in degrees clockwise from up (-z), turned by the plan's north, in 0..360. */
export const bearingOf = ([dx, dz]: [number, number], north: number): number => (Math.atan2(dx, -dz) / DEG - north + 720) % 360;
