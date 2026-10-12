import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor, type Floor, type Opening, type Room } from "../../model.ts";
import { buildFloorGeometry } from "../build.ts";
import { daylight, directionToSun, sunlightPatches, sunSignature } from "./sunlight.ts";

const room: Room = { id: "r", name: "r", area_id: null, points: [[0, 0], [6, 0], [6, 5], [0, 5]], floor_material: "wood" };
// edge 0 runs along the top of the plan (z = 0), a window on the outer north wall
const window: Opening = { id: "w", room_id: "r", edge: 0, offset: 3, width: 1.5, type: "window", sill: 0.9, height: 1.3, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null } as Opening;
const floor: Floor = { ...newFloor("f", "F", 0), height: 2.6, rooms: [room], openings: [window] };
const geometry = buildFloorGeometry(floor, 0.3, 0.1);
const inputs = (sun: { elevation: number; azimuth: number } | null, extra = {}) => ({ floor, openings: geometry.openings, states: new Map(), sun, northDegrees: 0, cloud: 0, ...extra });
const cells = (buffer: ReturnType<typeof sunlightPatches>) => buffer.count / 6;

test("the sun's direction in the plan follows its azimuth and the house's north", () => {
  const [x, z] = directionToSun(0, 0);
  assert.ok(Math.abs(x) < 1e-9 && Math.abs(z + 1) < 1e-9, "from the north: up in the plan");
  const [east] = directionToSun(90, 0);
  assert.ok(Math.abs(east - 1) < 1e-9);
  const [turned] = directionToSun(0, 90);
  assert.ok(Math.abs(turned - 1) < 1e-9, "north turned a quarter");
});

test("daylight grows to full at 12° and clouds take most of it", () => {
  assert.equal(daylight(6, 0), 0.5);
  assert.equal(daylight(40, 0), 1);
  assert.ok(Math.abs(daylight(40, 1) - 0.2) < 1e-9);
});

test("a window facing the sun gets a patch on the floor, inside the room", () => {
  // the window is in the north wall (z = 0), so the sun must stand in the north, outside it
  const buffer = sunlightPatches(inputs({ elevation: 30, azimuth: 0 }));
  assert.ok(cells(buffer) > 0);
  const positions = buffer.geometry().getAttribute("position");
  for (let i = 0; i < positions.count; i++) {
    assert.ok(positions.getX(i) >= -1 && positions.getX(i) <= 7 && positions.getZ(i) >= -1 && positions.getZ(i) <= 6);
    assert.ok(Math.abs(positions.getY(i) - 0.02) < 1e-6);
  }
});

test("no patch when the sun is low, behind clouds, or on the other side of the house", () => {
  assert.equal(cells(sunlightPatches(inputs({ elevation: 1, azimuth: 0 }))), 0);
  assert.equal(cells(sunlightPatches(inputs({ elevation: 30, azimuth: 0 }, { cloud: 0.98 }))), 0);
  assert.equal(cells(sunlightPatches(inputs({ elevation: 30, azimuth: 180 }))), 0);
  assert.equal(cells(sunlightPatches(inputs(null))), 0);
});

test("a blind pulled all the way down leaves no patch, a half-closed one a smaller one", () => {
  const open = cells(sunlightPatches(inputs({ elevation: 30, azimuth: 0 })));
  const half = cells(sunlightPatches(inputs({ elevation: 30, azimuth: 0 }, { states: new Map([["w", { open: 0, cover: 0.5 }]]) })));
  const shut = cells(sunlightPatches(inputs({ elevation: 30, azimuth: 0 }, { states: new Map([["w", { open: 0, cover: 1 }]]) })));
  assert.ok(half < open && half > 0);
  assert.equal(shut, 0);
});

test("the signature changes with the sun, the clouds and the blinds, and is empty without sun", () => {
  const a = sunSignature({ elevation: 30, azimuth: 10 }, 0, 0, [{ open: 0, cover: 0 }] as never);
  assert.notEqual(a, sunSignature({ elevation: 31, azimuth: 10 }, 0, 0, [{ open: 0, cover: 0 }] as never));
  assert.notEqual(a, sunSignature({ elevation: 30, azimuth: 10 }, 0, 0.5, [{ open: 0, cover: 0 }] as never));
  assert.notEqual(a, sunSignature({ elevation: 30, azimuth: 10 }, 0, 0, [{ open: 0, cover: 0.5 }] as never));
  assert.equal(sunSignature(null, 0, 0, []), "");
});
