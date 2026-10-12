// The light itself: how much light a lamp sends to a point, and the colours of the light surface for a set of lamps.

import { pointInPolygon, type Floor } from "../../model.ts";
import type { LightSurface } from "./surface.ts";

/** How a lamp spreads its light. */
export type LightKind = "omni" | "ceiling" | "spot" | "pendant" | "up" | "wall";

export interface LightSource {
  x: number;
  y: number;
  z: number;
  /** Linear colour, 0..1 per channel. */
  color: [number, number, number];
  /** Brightness, 0..1. */
  level: number;
  kind: LightKind;
  /** The index of the room (floor.rooms) the lamp is in. */
  room: number;
}

/** The share of its light a lamp sends in a direction; dy is the vertical part of the unit vector from the lamp to the point. */
function characteristic(kind: LightKind, dy: number): number {
  const down = Math.max(0, -dy);
  const up = Math.max(0, dy);
  switch (kind) {
    case "ceiling":
      return 0.3 + 0.7 * down;
    case "spot":
      return 0.06 + 0.94 * down ** 5;
    case "pendant":
      return 0.25 + 0.85 * down ** 2 + 0.2 * up;
    case "up":
      return 0.25 + 0.75 * up;
    case "wall":
      return 0.45 + 0.35 * Math.abs(dy);
    default:
      return 1;
  }
}

/** The distance at which a lamp's light has fallen to half. */
function reachOf(lamp: { level: number; kind: LightKind }): number {
  const base = lamp.kind === "spot" ? 2 : lamp.kind === "wall" ? 1.4 : 2.4;
  return base * (0.55 + 0.45 * lamp.level);
}

type Triple = readonly [number, number, number];

/** The brightness one lamp gives a surface point with a normal. */
function contribution(lamp: LightSource, at: Triple, normal: Triple): number {
  const [dx, dy, dz] = [at[0] - lamp.x, at[1] - lamp.y, at[2] - lamp.z];
  const squared = dx * dx + dy * dy + dz * dz;
  const distance = Math.sqrt(squared) || 1e-6;
  const reach = reachOf(lamp);
  // a squared falloff keeps a bright pool under the lamp and dark corners: the neon look lives on contrast
  const falloff = 1 / (1 + squared / (reach * reach));
  const attenuation = falloff * Math.sqrt(falloff);
  // surfaces facing the lamp get more light; a floor right below a lamp faces it fully
  const facing = Math.max(0, -(dx * normal[0] + dy * normal[1] + dz * normal[2]) / distance);
  return lamp.level * attenuation * (0.2 + 0.8 * facing) * characteristic(lamp.kind, dy / distance);
}

/** Light a room passes on through an open door: the doorway acts as a lamp for the room on the other side. */
function lampsThroughDoors(surface: LightSurface, sources: LightSource[], doorOpen: number[]): LightSource[] {
  const passed: LightSource[] = [];
  surface.doors.forEach((door, i) => {
    const open = doorOpen[i] ?? 0.5;
    if (open <= 0.01) return;
    for (const [from, to] of [[door.a, door.b], [door.b, door.a]]) {
      const sum: [number, number, number] = [0, 0, 0];
      for (const lamp of sources.filter((s) => s.room === from)) {
        // the doorway takes the light as if it faced the lamp
        const toLamp: Triple = [lamp.x - door.x, lamp.y - door.y, lamp.z - door.z];
        const length = Math.hypot(...toLamp) || 1;
        const k = contribution(lamp, [door.x, door.y, door.z], [toLamp[0] / length, toLamp[1] / length, toLamp[2] / length]);
        for (let c = 0; c < 3; c++) sum[c] += lamp.color[c] * k;
      }
      const level = Math.max(...sum);
      if (level < 0.01) continue;
      passed.push({ x: door.x, y: door.y, z: door.z, color: [sum[0] / level, sum[1] / level, sum[2] / level], level: Math.min(1, level * 0.9 * (0.35 + 0.65 * open)), kind: "wall", room: to });
    }
  });
  return passed;
}

/**
 * The colours (r, g, b per vertex) of the light surface for the lamps. A lamp lights its own room; through a door a room
 * passes on part of the light that reaches the doorway (`doorOpen` is 0..1 per door index, default half open).
 */
export function lightColors(surface: LightSurface, sources: LightSource[], strength = 0.7, doorOpen: number[] = []): Float32Array {
  const lampsByRoom = new Map<number, LightSource[]>();
  for (const lamp of [...sources, ...lampsThroughDoors(surface, sources, doorOpen)]) {
    // warm light stays warm on the blue floor
    const curved = { ...lamp, color: lamp.color.map((v) => v ** 1.5) as [number, number, number] };
    lampsByRoom.set(lamp.room, [...(lampsByRoom.get(lamp.room) ?? []), curved]);
  }
  const { pos, normal, room } = surface;
  const colors = new Float32Array(pos.length);
  for (let v = 0; v < room.length; v++) {
    const lamps = lampsByRoom.get(room[v]);
    if (!lamps) continue;
    const i = v * 3;
    const sum = [0, 0, 0];
    for (const lamp of lamps) {
      const k = contribution(lamp, [pos[i], pos[i + 1], pos[i + 2]], [normal[i], normal[i + 1], normal[i + 2]]);
      for (let c = 0; c < 3; c++) sum[c] += lamp.color[c] * k;
    }
    // soft saturation: several lamps add up without clipping to flat white
    for (let c = 0; c < 3; c++) colors[i + c] = 1 - Math.exp(-sum[c] * strength * 1.6);
  }
  return colors;
}

/** The index of the room a point lies in; outside every room it is the outside zone (rooms.length). */
export function roomIndexAt(floor: Floor, x: number, z: number): number {
  const index = floor.rooms.findIndex((r) => r.points.length >= 3 && pointInPolygon([x, z], r.points));
  return index < 0 ? floor.rooms.length : index;
}

/**
 * The light zone a room index belongs to. Indices past the zone list (the outside zone, rooms.length) and -1 keep their
 * own number, so outdoor lamps still light the lawn when rooms are joined.
 */
export const zoneOf = (zones: number[] | null, room: number): number => (zones && room >= 0 && room < zones.length ? zones[room] : room);
