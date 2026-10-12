import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith } from "../../../entities/fixtures.ts";
import type { Building, Furniture } from "../../../model.ts";
import { longestFreeWall, newEnergyDevice, roomForEnergyDevice } from "./energy-devices.ts";

const plan = (floor: ReturnType<typeof floorWith>): Building => ({ version: 1, floors: [floor], settings: { wall_interior: 0.12, wall_exterior: 0.3 }, energy: {}, presence: [] }) as unknown as Building;
const ctx = (selected?: ReturnType<typeof box>) => ({ roomLabel: (r: { name: string }) => r.name, selected, fallback: [9, 9] as [number, number] });

function house() {
  const living = box("Living", 0, 0, 5, 4);
  const garage = box("Garage", 5, 0, 8, 4);
  const utility = box("Technik", 0, 4, 3, 7);
  const hall = box("Flur", 3, 4, 8, 7);
  return floorWith([living, garage, utility, hall]);
}

test("each kind of device goes to the room it belongs to", () => {
  const floor = house();
  assert.equal(roomForEnergyDevice("wallbox", floor, ctx())?.id, "Garage");
  assert.equal(roomForEnergyDevice("inverter", floor, ctx())?.id, "Technik");
  assert.equal(roomForEnergyDevice("home_battery", floor, ctx())?.id, "Technik");
  assert.equal(roomForEnergyDevice("meter", floor, ctx())?.id, "Technik");
});

test("a meter takes the hall when there is no utility room, and a garage is found by the parking spot in it", () => {
  const floor = floorWith([box("Wohnen", 0, 0, 5, 4), box("Flur", 5, 0, 8, 4), box("Halle", 0, 4, 6, 8)]);
  assert.equal(roomForEnergyDevice("meter", floor, ctx())?.id, "Flur");
  const withCar = { ...floor, furniture: [{ id: "p", type: "parking", x: 3, z: 6 } as Furniture] };
  assert.equal(roomForEnergyDevice("wallbox", withCar, ctx())?.id, "Halle");
});

test("without any hint the selected room is used, and without one the largest", () => {
  const floor = floorWith([box("A", 0, 0, 2, 2), box("B", 2, 0, 8, 6)]);
  assert.equal(roomForEnergyDevice("inverter", floor, ctx(floor.rooms[0]))?.id, "A");
  assert.equal(roomForEnergyDevice("inverter", floor, ctx())?.id, "B");
  assert.equal(roomForEnergyDevice("inverter", floorWith([]), ctx()), undefined);
});

test("the longest wall is chosen, walls with openings only when nothing else is left, and the direction points inward", () => {
  const room = box("R", 0, 0, 6, 2);
  const wall = longestFreeWall(room, new Set())!;
  assert.deepEqual(wall.mid, [3, 0]);
  assert.deepEqual(wall.inward, [0, 1]);
  assert.deepEqual(longestFreeWall(room, new Set([0]))!.mid, [3, 2], "the top wall has an opening, so the bottom one is taken");
  assert.ok(longestFreeWall(room, new Set([0, 1, 2, 3])), "all walls are open: any will do");
});

test("a wallbox ends up flush against a wall of the garage", () => {
  const floor = house();
  const device = newEnergyDevice("wallbox", plan(floor), floor, ctx());
  assert.equal(device.type, "wallbox");
  assert.ok(device.x > 5 && device.x < 8 && device.z >= 0 && device.z <= 4, `${device.x},${device.z}`);
  const atWall = [device.x - 5, 8 - device.x, device.z, 4 - device.z].some((gap) => gap < 0.5);
  assert.ok(atWall);
  assert.ok(device.id.startsWith("furniture"));
});

test("without a room the device goes where the caller says; the grid point falls back too when there is no meter", () => {
  const empty = floorWith([]);
  const loose = newEnergyDevice("inverter", plan(empty), empty, ctx());
  assert.deepEqual([loose.x, loose.z], [9, 9]);
  const grid = newEnergyDevice("grid_point", plan(empty), empty, ctx());
  assert.deepEqual([grid.x, grid.z], [9, 9]);
});
