import assert from "node:assert/strict";
import { test } from "node:test";
import { GeoBuffer } from "../geo.ts";
import { addCameraWedge, addLampHalo, addSpotCone, haloHeight, viewReach } from "./halos.ts";
import type { DeviceMarker } from "./types.ts";

const wallAt = (x: number) => ({ a: [x, -5] as const, b: [x, 5] as const });
const marker = (extra: Partial<DeviceMarker>): DeviceMarker => ({ id: "x", floorId: "g", roomId: null, x: 0, z: 0, y: 1, icon: "", name: "", text: "", active: true, unavailable: false, glow: null, ...extra }) as DeviceMarker;

test("a camera sees as far as its reach, or to the first wall in the way", () => {
  assert.equal(viewReach([], [0, 0], [1, 0], 0, 4.5), 4.5);
  assert.equal(viewReach([wallAt(3)], [0, 0], [1, 0], 0, 4.5), 3);
  assert.equal(viewReach([wallAt(3), wallAt(2)], [0, 0], [1, 0], 0, 4.5), 2);
  assert.equal(viewReach([wallAt(-3)], [0, 0], [1, 0], 0, 4.5), 4.5, "behind the camera");
});

test("the wall a camera hangs on does not block it", () => {
  assert.equal(viewReach([wallAt(0.3)], [0, 0], [1, 0], 0, 4.5), 4.5);
  assert.equal(viewReach([wallAt(0.5)], [0, 0], [1, 0], 0, 4.5), 0.5);
});

test("a wall parallel to the view does not stop it, and turning the view turns the ray", () => {
  assert.equal(viewReach([{ a: [0, 1], b: [5, 1] }], [0, 0], [1, 0], 0, 4.5), 4.5);
  assert.ok(Math.abs(viewReach([{ a: [-5, 2], b: [5, 2] }], [0, 0], [1, 0], Math.PI / 2, 4.5) - 2) < 1e-9);
});

test("a camera wedge adds triangles and reports their range; a walled-in camera gets a shorter wedge", () => {
  const open = new GeoBuffer();
  const range = addCameraWedge(open, marker({ model: "camera_wall", fov: 90, reach: 4 } as never), []);
  assert.equal(range.start, 0);
  assert.ok(range.end > 0 && range.end === open.count);
  const walled = new GeoBuffer();
  addCameraWedge(walled, marker({ model: "camera_wall", fov: 90, reach: 4 } as never), [{ a: [-9, 1], b: [9, 1] }]);
  assert.equal(walled.count, open.count, "the same number of triangles, only shorter");
});

test("halo heights follow the lamp model", () => {
  assert.equal(haloHeight("ceiling", 2.5, 0, 0.08), 2.43);
  assert.equal(haloHeight("wall", 2.5, 1.5, 0.2), 1.6);
  assert.ok(Math.abs(haloHeight("pendant", 2.5, 0, 3) - 0.48) < 1e-9);
});

test("a strip gets four glow points, a wall lamp one in front of its wall, any other one", () => {
  const glow = { color: [1, 1, 1] as [number, number, number], level: 1 };
  const points = { positions: [] as number[], colours: [] as number[] };
  addLampHalo(points, marker({ lamp: "strip", size: [2, 0.04, 0.03], rotation: 0, base: 2.4 }) as never, glow, 2.5);
  assert.equal(points.positions.length / 3, 4);
  assert.ok(points.colours.every((c) => Math.abs(c - 0.42) < 1e-9));
  const wall = { positions: [] as number[], colours: [] as number[] };
  addLampHalo(wall, marker({ lamp: "wall", size: [0.2, 0.12, 0.2], rotation: 0, z: 1 }) as never, glow, 2.5);
  assert.equal(wall.positions.length, 3);
  assert.ok(Math.abs(wall.positions[2] - 1.11) < 1e-9);
});

test("a spot's cone is a ring of triangles", () => {
  const buffer = new GeoBuffer();
  addSpotCone(buffer, marker({ lamp: "spot", size: [0.1, 0.1, 0.14] }) as never, { color: [1, 1, 1], level: 1 }, 2.5);
  assert.equal(buffer.count, 16 * 2);
});
