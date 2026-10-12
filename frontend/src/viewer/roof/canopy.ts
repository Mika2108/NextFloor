// The frame of a canopy: a beam under each free edge of the roof, posts at its corners and at most 3.5 m apart along the free sides.
// An edge against the house (no overhang) rests on the wall.

import type { SectionOverhang } from "../../roof-sections.ts";
import type { sectionFrame, sectionProfile } from "../../roof-sections.ts";
import { EAVE, FRAME, FRAME_TOP } from "./palette.ts";
import { pushPrism, type GeoBuffer, type LineBuffer } from "../geo.ts";

const POST = 0.12;
const BEAM = 0.16;

export function pushCanopyFrame(
  solid: GeoBuffer,
  lines: LineBuffer,
  frame: ReturnType<typeof sectionFrame>,
  profile: ReturnType<typeof sectionProfile>,
  overhang: SectionOverhang,
  point: (u: number, v: number, y: number) => number[],
  levelOffset: number,
): void {
  const w = frame.w;
  const [freeA, freeB, freeStart, freeEnd] = [overhang.a > 0, overhang.b > 0, overhang.u0 > 0, overhang.u1 > 0];
  const box = (u0: number, u1: number, v0: number, v1: number, y0: number, y1: number) => {
    const ring = [frame.at(u0, v0), frame.at(u1, v0), frame.at(u1, v1), frame.at(u0, v1)];
    // the frame may be flipped: keep the outline counter-clockwise
    const turn = (ring[1][0] - ring[0][0]) * (ring[2][1] - ring[0][1]) - (ring[2][0] - ring[0][0]) * (ring[1][1] - ring[0][1]);
    pushPrism(solid, turn < 0 ? [...ring].reverse() : ring, y0 - levelOffset, y1 - levelOffset, FRAME, FRAME_TOP, { bottom: true });
  };

  // beams along the free long sides, under the roof at its height there
  for (const [v, free] of [[0, freeA], [w, freeB]] as const) {
    if (!free) continue;
    const y = profile.y(v) - 0.03;
    const start = v === 0 ? 0 : w - POST;
    box(frame.u0, frame.u1, start, start + POST, y - BEAM, y);
    lines.seg(point(frame.u0, v, y - BEAM), point(frame.u1, v, y - BEAM), EAVE);
  }
  // beams along the free ends, following the slope in six steps
  for (const [u, free] of [[frame.u0, freeStart], [frame.u1 - POST, freeEnd]] as const) {
    if (!free) continue;
    for (let i = 0; i < 6; i++) {
      const [v0, v1] = [(w * i) / 6, (w * (i + 1)) / 6];
      const y = Math.min(profile.y(v0), profile.y(v1)) - 0.03;
      box(u, u + POST, v0, v1, y - BEAM, y);
    }
  }
  // posts: at corners where both edges are free (a corner at the house wall rests on the wall), and along a free long side at most 3.5 m apart
  const posts: [number, number][] = [];
  for (const [v, free] of [[0, freeA], [w - POST, freeB]] as const) {
    if (!free) continue;
    const span = frame.u1 - frame.u0 - POST;
    const count = Math.max(1, Math.ceil(span / 3.5));
    for (let i = 0; i <= count; i++) {
      if ((i === 0 && !freeStart) || (i === count && !freeEnd)) continue;
      posts.push([frame.u0 + (span * i) / count, v]);
    }
  }
  // a pent roof against the house with only its ends free still needs posts at its outer corners
  if (!freeA && !freeB) {
    if (freeStart) posts.push([frame.u0, w / 2 - POST / 2]);
    if (freeEnd) posts.push([frame.u1 - POST, w / 2 - POST / 2]);
  }
  for (const [u, v] of posts) box(u, u + POST, v, v + POST, levelOffset, profile.y(v + POST / 2) - 0.03 - BEAM);
}
