// The picture behind a floor plan (a scan of the architect's drawing, say): its size follows from the picture's aspect, and the
// helpers here straighten it, scale it to a measured length, and map plan points into it.

import type { Background, Vec2 } from "../../../model.ts";

const thousandths = (v: number) => Math.round(v * 1000) / 1000;

/** The picture's own height in metres. */
export const pictureHeight = (bg: Background, aspect: number): number => bg.width * aspect;

/** The middle of the picture in the plan. */
export const pictureCentre = (bg: Background, aspect: number): Vec2 => [bg.x + bg.width / 2, bg.z + pictureHeight(bg, aspect) / 2];

/** A point turned about another by an angle in radians (clockwise in the plan, where z points down). */
function turnAbout(point: Vec2, about: Vec2, angle: number): Vec2 {
  const [dx, dz] = [point[0] - about[0], point[1] - about[1]];
  return [about[0] + dx * Math.cos(angle) - dz * Math.sin(angle), about[1] + dx * Math.sin(angle) + dz * Math.cos(angle)];
}

/** An angle in degrees brought into -180 up to 180. */
export const wrapHalfTurn = (degrees: number): number => (((((degrees + 180) % 360) + 360) % 360) - 180);

/** The picture placed so that its middle is at `centre`. */
function centredAt(centre: Vec2, width: number, height: number): Pick<Background, "x" | "z"> {
  return { x: thousandths(centre[0] - width / 2), z: thousandths(centre[1] - height / 2) };
}

/**
 * Turns the picture about the first of two tapped points so that the line between them runs exactly along x or z, whichever is
 * nearer. Null when the points are too close together or the line already is straight.
 */
export function straightened(bg: Background, aspect: number, p: Vec2, q: Vec2): Background | null {
  if (Math.hypot(q[0] - p[0], q[1] - p[1]) < 0.05) return null;
  const angle = Math.atan2(q[1] - p[1], q[0] - p[0]);
  const correction = Math.round(angle / (Math.PI / 2)) * (Math.PI / 2) - angle;
  if (Math.abs(correction) < 1e-4) return null;
  // turning about p carries the picture's middle along
  const centre = turnAbout(pictureCentre(bg, aspect), p, correction);
  const rotation = Math.round(wrapHalfTurn((bg.rotation ?? 0) + (correction * 180) / Math.PI) * 100) / 100;
  return { ...bg, rotation, ...centredAt(centre, bg.width, pictureHeight(bg, aspect)) };
}

/**
 * Scales the picture about the first of two points so that the stretch between them measures `real` metres. The turn is kept.
 * Null when the stretch is too short to measure or the real length is no positive number.
 */
export function scaledToLength(bg: Background, aspect: number, a: Vec2, b: Vec2, real: number): Background | null {
  const measured = Math.hypot(b[0] - a[0], b[1] - a[1]);
  if (!(real > 0) || measured < 1e-4) return null;
  const k = real / measured;
  const [cx, cz] = pictureCentre(bg, aspect);
  const centre: Vec2 = [a[0] + k * (cx - a[0]), a[1] + k * (cz - a[1])];
  const width = bg.width * k;
  return { ...bg, width: thousandths(width), ...centredAt(centre, width, pictureHeight(bg, aspect) * k) };
}

/** A plan point measured in the picture's own frame: from its top left corner, along its (turned) sides, in metres. */
export function pictureLocal(bg: Background, aspect: number, world: Vec2): Vec2 {
  const turned = turnAbout(world, pictureCentre(bg, aspect), (-(bg.rotation ?? 0) * Math.PI) / 180);
  return [turned[0] - bg.x, turned[1] - bg.z];
}

/** The rotation the picture gets while its turn handle is dragged: whole 15° steps with Shift, tenths of a degree otherwise. */
export function dragRotation(startRotation: number, startAngle: number, nowAngle: number, snap: boolean): number {
  const raw = startRotation + ((nowAngle - startAngle) * 180) / Math.PI;
  return wrapHalfTurn(snap ? Math.round(raw / 15) * 15 : Math.round(raw * 10) / 10);
}
