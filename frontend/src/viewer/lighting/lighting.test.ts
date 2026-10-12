import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor, type Floor, type Opening, type Room } from "../../model.ts";
import { buildFloorGeometry } from "../build.ts";
import { lightColors, roomIndexAt, zoneOf, type LightSource } from "./light.ts";
import { buildLightSurface, type LightSurface } from "./surface.ts";

const room = (id: string, x0: number, z0: number, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" });
const door = (id: string, roomId: string, edge: number, offset: number): Opening =>
  ({ id, room_id: roomId, edge, offset, width: 0.9, type: "door", sill: 0, height: 2.05, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null }) as Opening;

function surfaceOf(floor: Floor, cell = 0.5, holes: [number, number][][] = []): LightSurface {
  const geometry = buildFloorGeometry(floor, 0.3, 0.1);
  return buildLightSurface(floor, geometry.walls2d, geometry.wallBuckets, geometry.openings, cell, holes);
}

const lamp = (x: number, z: number, color: [number, number, number], roomIndex = 0, extra: Partial<LightSource> = {}): LightSource => ({ x, y: 2.4, z, color, level: 1, kind: "ceiling", room: roomIndex, ...extra });

/** The colour of the floor vertex nearest to (x, z). */
function floorColor(surface: LightSurface, colors: Float32Array, x: number, z: number): number[] {
  let best = -1;
  let bestDistance = Infinity;
  for (let v = 0; v < surface.room.length; v++) {
    if (surface.normal[v * 3 + 1] !== 1) continue;
    const distance = Math.hypot(surface.pos[v * 3] - x, surface.pos[v * 3 + 2] - z);
    if (distance < bestDistance) [best, bestDistance] = [v, distance];
  }
  return [colors[best * 3], colors[best * 3 + 1], colors[best * 3 + 2]];
}

const quadCount = (s: LightSurface) => s.room.length / 6;
const floorQuads = (s: LightSurface) => [...Array(quadCount(s)).keys()].filter((q) => s.normal[q * 18 + 1] === 1).length;

test("the surface covers the floor in cells and puts strips on the room side of the walls", () => {
  const floor = { ...newFloor("f", "F", 0), rooms: [room("a", 0, 0, 4, 3)] };
  const s = surfaceOf(floor);
  assert.equal(floorQuads(s), 8 * 6);
  assert.ok(quadCount(s) > floorQuads(s));
  assert.ok(s.room.every((r) => r === 0 || r === 1), "room 0 and the outside zone (index 1) only");
  assert.equal(s.pos.length, s.room.length * 3);
  assert.equal(s.fold.length, s.room.length);
});

test("a floor opening leaves no light under it", () => {
  const floor = { ...newFloor("f", "F", 0), rooms: [room("a", 0, 0, 4, 3)] };
  const whole = floorQuads(surfaceOf(floor));
  const holed = floorQuads(surfaceOf(floor, 0.5, [[[1, 1], [2, 1], [2, 2], [1, 2]]]));
  assert.equal(whole - holed, 4);
});

/** The total area of the wall quads (those not facing up). */
function wallArea(s: LightSurface): number {
  let area = 0;
  for (let t = 0; t < s.room.length / 3; t++) {
    if (s.normal[t * 9 + 1] === 1) continue;
    const p = (k: number) => [s.pos[t * 9 + k * 3], s.pos[t * 9 + k * 3 + 1], s.pos[t * 9 + k * 3 + 2]];
    const [a, b, c] = [p(0), p(1), p(2)];
    const [u, v] = [[b[0] - a[0], b[1] - a[1], b[2] - a[2]], [c[0] - a[0], c[1] - a[1], c[2] - a[2]]];
    area += 0.5 * Math.hypot(u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]);
  }
  return area;
}

test("a door leaves a hole in the lit face of its wall: about its width times its height less light surface", () => {
  const plain = { ...newFloor("f", "F", 0), rooms: [room("a", 0, 0, 4, 3)] };
  const withDoor = { ...plain, openings: [door("d", "a", 0, 1.5)] };
  const lost = wallArea(surfaceOf(plain)) - wallArea(surfaceOf(withDoor));
  // an exterior wall is lit on both faces, so the door is missing twice
  assert.ok(Math.abs(lost - 2 * 0.9 * 2.05) < 0.4, String(lost));
});

test("a lamp lights its own room only, brightest below it, with its own colour", () => {
  const floor = { ...newFloor("f", "F", 0), rooms: [room("a", 0, 0, 4, 3), room("b", 6, 0, 10, 3)] };
  const s = surfaceOf(floor);
  const colors = lightColors(s, [lamp(2, 1.5, [1, 0, 0])]);
  const below = floorColor(s, colors, 2, 1.5);
  const corner = floorColor(s, colors, 0.3, 0.3);
  assert.ok(below[0] > corner[0] && corner[0] > 0);
  assert.ok(below[1] === 0 && below[2] === 0, "a red lamp gives red light");
  assert.deepEqual(floorColor(s, colors, 8, 1.5), [0, 0, 0], "the other room stays dark");
});

test("lamps add up without exceeding 1", () => {
  const floor = { ...newFloor("f", "F", 0), rooms: [room("a", 0, 0, 4, 3)] };
  const s = surfaceOf(floor);
  const many = Array.from({ length: 12 }, () => lamp(2, 1.5, [1, 1, 1]));
  const colors = lightColors(s, many, 1);
  assert.ok(Math.max(...colors) < 1 && Math.max(...colors) > 0.9);
  const one = lightColors(s, [lamp(2, 1.5, [1, 1, 1])], 1);
  assert.ok(floorColor(s, colors, 2, 1.5)[0] > floorColor(s, one, 2, 1.5)[0]);
});

test("the lamp kinds spread differently: a spot is narrow, an up-light points up", () => {
  const floor = { ...newFloor("f", "F", 0), rooms: [room("a", 0, 0, 8, 6)] };
  const s = surfaceOf(floor);
  const spread = (kind: LightSource["kind"]) => {
    const colors = lightColors(s, [lamp(4, 3, [1, 1, 1], 0, { kind })]);
    return floorColor(s, colors, 4, 3)[0] / floorColor(s, colors, 6.5, 3)[0];
  };
  assert.ok(spread("spot") > spread("ceiling"));
  assert.ok(spread("ceiling") >= spread("omni") * 0.5);
});

test("light leaks into the next room through an open door, not through a closed one", () => {
  const floor = { ...newFloor("f", "F", 0), rooms: [room("a", 0, 0, 4, 3), room("b", 4, 0, 8, 3)], openings: [door("d", "a", 1, 1.5)] };
  const s = surfaceOf(floor);
  assert.equal(s.doors.length, 1);
  assert.deepEqual([s.doors[0].a, s.doors[0].b].sort(), [0, 1]);
  const sources = [lamp(2, 1.5, [1, 1, 1], 0)];
  const closed = floorColor(s, lightColors(s, sources, 0.7, [0]), 6, 1.5);
  const open = floorColor(s, lightColors(s, sources, 0.7, [1]), 6, 1.5);
  const half = floorColor(s, lightColors(s, sources), 6, 1.5);
  assert.equal(closed[0], 0);
  assert.ok(open[0] > half[0] && half[0] > 0);
});

test("the room under a point, and the zone a room belongs to", () => {
  const floor = { ...newFloor("f", "F", 0), rooms: [room("a", 0, 0, 4, 3), room("b", 4, 0, 8, 3)] };
  assert.equal(roomIndexAt(floor, 1, 1), 0);
  assert.equal(roomIndexAt(floor, 5, 1), 1);
  assert.equal(roomIndexAt(floor, 20, 20), 2, "outside every room: the outside zone");
  assert.equal(zoneOf(null, 1), 1);
  assert.equal(zoneOf([0, 0], 1), 0, "joined rooms share a zone");
  assert.equal(zoneOf([0, 0], 2), 2, "the outside zone keeps its own number");
  assert.equal(zoneOf([0, 0], -1), -1);
});
