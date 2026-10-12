// The moving and state-dependent parts of doors and windows: fixed frames, sashes with glass (open or tilted, from contact
// sensors), window sills, door frames, blind boxes and blind slats. They are rebuilt as merged geometry whenever a state
// changes (and during the short open/close animation), so all windows of a floor stay three draw calls: frames, glass and blinds.

import { openingStyle } from "../../model.ts";
import type { OpeningInfo } from "../build.ts";
import { GeoBuffer } from "../geo.ts";
import { blind } from "./blinds.ts";
import type { Ctx } from "./context.ts";
import { doorFrame, doorLeaves, garageDoor } from "./doors.ts";
import { CLOSED, type OpeningParts, type OpeningState, type TriRange } from "./types.ts";
import { glassWall, window } from "./windows.ts";

export function buildOpeningParts(infos: readonly OpeningInfo[], states: ReadonlyMap<string, OpeningState>, cut: number): OpeningParts {
  const frames = new GeoBuffer();
  const glass = new GeoBuffer();
  const blinds = new GeoBuffer(true);
  const frameTris: TriRange[] = [];
  const glassTris: TriRange[] = [];
  const blindTris: TriRange[] = [];

  for (const info of infos) {
    const starts = { frames: frames.count, glass: glass.count, blinds: blinds.count };
    const type = info.opening.type;
    const style = openingStyle(info.opening, info.exterior);
    const ctx: Ctx = {
      info,
      state: states.get(info.opening.id) ?? CLOSED,
      // local frame: x from the opening's start along the wall, n from the wall axis towards the room
      frame: (x, n, y) => [info.start[0] + info.axis[0] * x + info.toRoom[0] * n, y, info.start[1] + info.axis[1] * x + info.toRoom[1] * n],
      mid: (info.faceRoom - info.faceOut) / 2,
      // highlighted while open, or while closed when the opening asks for it (and a sensor knows)
      markClosed: info.opening.mark === "closed",
      fold: { cut, bucket: info.bucket },
      frames,
      glass,
      blinds,
    };
    // a passage (a wall opening without a door) shows nothing but the gap in the wall
    if ((type === "door" && style !== "passage") || type === "garage") doorFrame(ctx);
    if (type === "door") doorLeaves(ctx);
    else if (type === "garage") garageDoor(ctx);
    else if (style === "glass_wall") glassWall(ctx);
    else window(ctx);
    blind(ctx);
    frameTris.push({ id: info.opening.id, start: starts.frames, end: frames.count });
    glassTris.push({ id: info.opening.id, start: starts.glass, end: glass.count });
    blindTris.push({ id: info.opening.id, start: starts.blinds, end: blinds.count });
  }
  return { frames: frames.geometry(), glass: glass.geometry(), blinds: blinds.geometry(), frameTris, glassTris, blindTris };
}
