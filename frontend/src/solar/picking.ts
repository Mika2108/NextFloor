// Finding where a pointer or a ray meets a face and its fields, and which way a face looks.

import type { SolarField, Vec2 } from "../model.ts";
import type { RoofFace } from "./faces.ts";
import { fieldModules } from "./fields.ts";
import { bearingOf, dot, sub, type V3 } from "./vec.ts";

/** Where a plan point lies on a face (u along the eave, s up the slope), or null when it is not on it. */
export function pointOnFace(face: RoofFace, p: Vec2): { u: number; s: number } | null {
  // solve p = o + eu * u + es * s in the plan; eu and es are not parallel there
  const [d0, d1] = [p[0] - face.o[0], p[1] - face.o[2]];
  const [a0, a1, b0, b1] = [face.eu[0], face.eu[2], face.es[0], face.es[2]];
  const det = a0 * b1 - a1 * b0;
  if (Math.abs(det) < 1e-9) return null;
  const u = (d0 * b1 - d1 * b0) / det;
  const s = (a0 * d1 - a1 * d0) / det;
  if (s < 0 || s > face.ls) return null;
  const [from, to] = face.span(s);
  return u >= from && u <= to ? { u, s } : null;
}

type Hit = { face: RoofFace; u: number; s: number };

/**
 * The face under a plan point: the highest one there (an upper roof hides a lower one). A wall is hit by a pointer just
 * outside it; the height stays open then (s is NaN).
 */
export function faceAt(faces: readonly RoofFace[], p: Vec2): Hit | null {
  let best: (Hit & { y: number }) | null = null;
  for (const face of faces) {
    if (face.wall) {
      const [dx, dz] = [p[0] - face.o[0], p[1] - face.o[2]];
      const u = dx * face.eu[0] + dz * face.eu[2];
      const outward = dx * face.n[0] + dz * face.n[2];
      const alongWall = u >= 0 && u <= face.lu;
      // right in front of the wall it wins over a roof overhang above it; further out only where there is no roof
      if (alongWall && outward >= -0.05 && outward <= 0.35) return { face, u, s: Number.NaN };
      if (alongWall && outward > 0.35 && outward <= 0.8 && !best) best = { face, u, s: Number.NaN, y: -Infinity };
      continue;
    }
    const hit = pointOnFace(face, p);
    if (!hit) continue;
    const y = face.o[1] + face.es[1] * hit.s;
    if (!best || y > best.y) best = { face, ...hit, y };
  }
  return best && { face: best.face, u: best.u, s: best.s };
}

/** Where a ray (origin, direction, building coordinates) meets a face: the distance t and the face coordinates. */
export function rayOnFace(face: RoofFace, origin: V3, direction: V3): { t: number; u: number; s: number } | null {
  const facing = dot(direction, face.n);
  if (Math.abs(facing) < 1e-6) return null;
  const t = dot(sub(face.o, origin), face.n) / facing;
  if (t <= 0) return null;
  const local = sub([origin[0] + direction[0] * t, origin[1] + direction[1] * t, origin[2] + direction[2] * t], face.o);
  return { t, u: dot(local, face.eu), s: dot(local, face.es) };
}

/** Whether a point (u, s) lies on the face itself: inside its edges. The ground has none. */
export function onFace(face: RoofFace, u: number, s: number): boolean {
  if (face.unbounded) return true;
  if (s < 0 || s > face.ls) return false;
  const [from, to] = face.span(s);
  return u >= from && u <= to;
}

/** Whether a point (u, s) lies on one of the field's modules (their outlines on the face, with 5 cm to spare). */
export function onField(face: RoofFace, f: SolarField, u: number, s: number): boolean {
  const slack = 0.05;
  return fieldModules(face, f).some((module) => {
    const local = module.corners.map((corner) => {
      const q = sub(corner, face.o);
      return [dot(q, face.eu), dot(q, face.es)];
    });
    const us = local.map((c) => c[0]);
    const ss = local.map((c) => c[1]);
    return u >= Math.min(...us) - slack && u <= Math.max(...us) + slack && s >= Math.min(...ss) - slack && s <= Math.max(...ss) + slack;
  });
}

const COMPASS = ["n", "ne", "e", "se", "s", "sw", "w", "nw"] as const;

/** The compass direction a face looks to (n, ne, e ...), given the plan's north in degrees clockwise from up. */
export const faceCompass = (face: RoofFace, north: number): (typeof COMPASS)[number] => COMPASS[Math.round(bearingOf(face.facing, north) / 45) % 8];

/** The face that suits a new field best: towards the south, and the bigger the better. */
export function bestFace(faces: readonly RoofFace[], north: number): RoofFace | null {
  const score = (face: RoofFace) => {
    if (face.flat) return face.lu * face.ls * 0.8;
    const southness = Math.cos(((bearingOf(face.facing, north) - 180) * Math.PI) / 180);
    return face.lu * face.ls * (1.2 + southness);
  };
  return [...faces].sort((p, q) => score(q) - score(p))[0] ?? null;
}
