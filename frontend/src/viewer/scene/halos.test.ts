import assert from "node:assert/strict";
import { test } from "node:test";
import { GeoBuffer } from "../geo.ts";
import { addLampHalo, addSpotCone, haloHeight } from "./halos.ts";
import type { DeviceMarker } from "./types.ts";

const marker = (extra: Partial<DeviceMarker>): DeviceMarker => ({ id: "x", floorId: "g", roomId: null, x: 0, z: 0, y: 1, icon: "", name: "", text: "", active: true, unavailable: false, glow: null, ...extra }) as DeviceMarker;

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
