// Dormers and cross gables: the section one sits on, where it opens the slope, and how deep it really goes.

import type { RoofSection } from "../model.ts";
import { DEG, orderedRect, sectionFrame, sectionProfile, sectionUV } from "./frame.ts";
import { cutHole, sectionGeometry, sectionHeightAt, type Hole } from "./geometry.ts";

const area = (s: RoofSection) => Math.abs((s.x1 - s.x0) * (s.z1 - s.z0));
const isFlat = (s: RoofSection) => s.shape === "flat" || s.shape === "parapet";
const round2 = (v: number) => Math.round(v * 100) / 100;

/**
 * The section a dormer (or any much smaller section, such as a cross gable) sits on: the clearly bigger sloped one
 * that holds its centre, the smallest such one when there are several. Null when it stands on its own.
 */
export function dormerParent(sections: readonly RoofSection[], dormer: RoofSection): RoofSection | null {
  const [cx, cz] = [(dormer.x0 + dormer.x1) / 2, (dormer.z0 + dormer.z1) / 2];
  const candidates = sections.filter((s) => {
    if (s === dormer || s.dormer || s.open || isFlat(s) || area(s) < area(dormer) * 1.5) return false;
    const box = orderedRect(s);
    return cx >= box.x0 && cx <= box.x1 && cz >= box.z0 && cz <= box.z1;
  });
  return candidates.reduce<RoofSection | null>((best, s) => (best === null || area(s) < area(best) ? s : best), null);
}

/** A dormer's footprint in its parent's frame (u along the parent's ridge, v across), or null when it lies outside. */
export function dormerHole(parent: RoofSection, dormer: RoofSection): Hole | null {
  const box = orderedRect(dormer);
  const [p, q] = [sectionUV(parent, box.x0, box.z0), sectionUV(parent, box.x1, box.z1)];
  const hole = { u0: Math.min(p[0], q[0]), u1: Math.max(p[0], q[0]), v0: Math.min(p[1], q[1]), v1: Math.max(p[1], q[1]) };
  return hole.u1 - hole.u0 < 0.1 || hole.v1 - hole.v0 < 0.1 ? null : hole;
}

/**
 * A new dormer on one side of a section: 2 m wide, its front flush with the eave wall, its eaves 1.4 m above the
 * section's eave, a 35° gable, and as deep as its ridge needs to meet the slope.
 */
export function proposeDormer(parent: RoofSection, side: "a" | "b", id: string, along?: number): RoofSection {
  const frame = sectionFrame(parent);
  const profile = sectionProfile(parent);
  const width = 2;
  const left = Math.max(frame.u0 + 0.3, Math.min(frame.u1 - width - 0.3, (along ?? (frame.u0 + frame.u1) / 2) - width / 2));
  const [eave, pitch] = side === "a" ? [parent.eave_a, parent.pitch_a] : [parent.eave_b, parent.pitch_b];
  const dormerEave = eave + 1.4;
  const dormerRidge = dormerEave + (width / 2) * Math.tan(35 * DEG);
  // the dormer's ridge meets the slope this far in from the eave
  const depth = Math.max(0.8, Math.min(frame.w / 2 - 0.2, (dormerRidge - eave) / Math.max(0.15, Math.tan(Math.min(80, pitch) * DEG))));
  const [v0, v1] = side === "a" ? [0, depth] : [frame.w - depth, frame.w];
  const p = frame.at(left, v0);
  const q = frame.at(left + width, v1);
  return {
    id,
    x0: round2(Math.min(p[0], q[0])),
    z0: round2(Math.min(p[1], q[1])),
    x1: round2(Math.max(p[0], q[0])),
    z1: round2(Math.max(p[1], q[1])),
    shape: "gable",
    // its ridge runs into the slope: across the parent's ridge
    axis: parent.axis === "x" ? "z" : "x",
    eave_a: round2(dormerEave),
    eave_b: round2(dormerEave),
    pitch_a: 35,
    pitch_b: 35,
    base: round2(profile.y(side === "a" ? 0 : frame.w)),
    overhang: 0.15,
    dormer: true,
  };
}

/** The parent's roof height under a dormer's centre line at u; falls back to the profile outside every plane. */
function slopeUnder(parent: RoofSection, dormerFrame: ReturnType<typeof sectionFrame>) {
  const geometry = sectionGeometry(parent, { u0: 0, u1: 0, a: 0, b: 0 });
  const profile = sectionProfile(parent);
  return (u: number) => {
    const [x, z] = dormerFrame.at(u, dormerFrame.w / 2);
    const [pu, pv] = sectionUV(parent, x, z);
    return sectionHeightAt(geometry, pu, pv) ?? profile.y(pv);
  };
}

/**
 * A dormer as the 3D view draws it: its depth ends where its ridge meets the parent's slope, deeper its roof would lie
 * under the slope. Lower eaves or a flatter pitch shorten it by themselves, so nothing has to be measured again.
 */
export function effectiveDormer(parent: RoofSection, dormer: RoofSection): RoofSection {
  if (isFlat(dormer)) return dormer;
  const frame = sectionFrame(dormer);
  const ridge = sectionProfile(dormer).rh;
  const slope = slopeUnder(parent, frame);
  const frontIsU0 = slope(frame.u0) <= slope(frame.u1);
  const [front, rear] = frontIsU0 ? [frame.u0, frame.u1] : [frame.u1, frame.u0];
  const direction = frontIsU0 ? 1 : -1;
  let meeting = rear;
  for (let t = 0.5; t < Math.abs(rear - front); t += 0.05) {
    if (slope(front + direction * t) >= ridge - 0.02) {
      meeting = front + direction * t;
      break;
    }
  }
  if (Math.abs(meeting - rear) < 0.05) return dormer;
  const shortened = { ...dormer };
  // u runs along the dormer's own axis: x for an "x" axis, z for a "z" axis
  const rearIsHigh = rear === frame.u1;
  if (dormer.axis === "x") shortened[rearIsHigh ? "x1" : "x0"] = meeting;
  else shortened[rearIsHigh ? "z1" : "z0"] = meeting;
  return shortened;
}

/**
 * Where the slope opens under a dormer: only where the dormer's roof lies above the slope, a shape that narrows towards
 * the rear (the valleys), cut as strips across the dormer's depth and expressed in the parent's frame.
 */
export function dormerHoles(parent: RoofSection, dormer: RoofSection): Hole[] {
  const effective = effectiveDormer(parent, dormer);
  const frame = sectionFrame(effective);
  const dormerProfile = sectionProfile(effective);
  const slope = slopeUnder(parent, frame);
  const frontIsU0 = slope(frame.u0) <= slope(frame.u1);
  const depth = frame.u1 - frame.u0;
  const strips = Math.max(1, Math.ceil(depth / 0.15));
  const holes: Hole[] = [];
  for (let i = 0; i < strips; i++) {
    const [t0, t1] = [(depth * i) / strips, (depth * (i + 1)) / strips];
    const [uA, uB] = frontIsU0 ? [frame.u0 + t0, frame.u0 + t1] : [frame.u1 - t0, frame.u1 - t1];
    // the slope at the strip's rear end; the dormer's roof across the strip decides how wide it is
    const level = slope(uB);
    let first = Infinity;
    let last = -Infinity;
    for (let k = 0; k <= 40; k++) {
      const v = (frame.w * k) / 40;
      if (dormerProfile.y(v) > level + 0.02) {
        first = Math.min(first, v);
        last = Math.max(last, v);
      }
    }
    if (!(last - first > 0.05)) continue;
    const a = sectionUV(parent, ...frame.at(uA, first));
    const b = sectionUV(parent, ...frame.at(uB, last));
    holes.push({ u0: Math.min(a[0], b[0]), u1: Math.max(a[0], b[0]), v0: Math.min(a[1], b[1]), v1: Math.max(a[1], b[1]) });
  }
  return holes;
}

export { cutHole };
