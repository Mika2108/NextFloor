import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith } from "../entities/fixtures.ts";
import type { Building, Furniture, Placement } from "../model.ts";
import { changeFurniture, changePlacement, dragDevice, dragFurniture, parseTyped, rounded, turned, withoutFurniture, withoutPlacement } from "./edits.ts";

const sofa = (extra: Partial<Furniture> = {}): Furniture => ({ id: "s", type: "sofa", x: 1, z: 1, rotation: 0, w: 2, d: 0.9, h: 0.8, variant: null, ...extra });
const lamp = (extra: Partial<Placement> = {}): Placement => ({ entity_id: "light.a", x: 1, z: 1, y: null, ...extra });

function house(): Building {
  const ground = floorWith([box("r", 0, 0, 4, 4), box("q", 4, 0, 8, 3)], { furniture: [sofa()], placements: [lamp()] });
  return { version: 1, floors: [ground], settings: { wall_interior: 0.12 }, energy: {}, presence: [] } as unknown as Building;
}

test("changing an item gives a changed copy and leaves the original alone", () => {
  const before = house();
  const after = changeFurniture(before, "s", (f) => (f.w = 3));
  assert.equal(after.floors[0].furniture[0].w, 3);
  assert.equal(before.floors[0].furniture[0].w, 2);
  const lit = changePlacement(before, "light.a", (p, floor) => Object.assign(p, { y: 2, mount: floor.rooms.length ? "wall" : null }));
  assert.deepEqual([lit.floors[0].placements[0].y, lit.floors[0].placements[0].mount], [2, "wall"]);
  assert.equal(before.floors[0].placements[0].y, null);
});

test("an unknown id changes nothing", () => {
  const after = changeFurniture(house(), "nope", () => assert.fail("must not be called"));
  assert.deepEqual(after, house());
});

test("removing takes out exactly that item or device", () => {
  assert.equal(withoutFurniture(house(), "s").floors[0].furniture.length, 0);
  assert.equal(withoutFurniture(house(), "other").floors[0].furniture.length, 1);
  assert.equal(withoutPlacement(house(), "light.a").floors[0].placements.length, 0);
});

test("a dragged device stays in its room and slides along the wall", () => {
  const inside = dragDevice(house(), "light.a", 3, 2).floors[0].placements[0];
  assert.deepEqual([inside.x, inside.z], [3, 2]);
  const through = dragDevice(house(), "light.a", 6, 2).floors[0].placements[0];
  assert.deepEqual([through.x, through.z], [1, 2], "the target is in the other room, so only the free direction follows");
  const slide = dragDevice(house(), "light.a", 6, 2.5).floors[0].placements[0];
  assert.deepEqual([slide.x, slide.z], [1, 2.5], "only the free direction moves");
});

test("dragged furniture sits flush at a wall with its back to it", () => {
  // a sofa already facing into the room, dropped 15 cm from the south wall
  const start = house();
  start.floors[0].furniture[0].rotation = 180;
  const moved = dragFurniture(start, "s", 2, 3.4).floors[0].furniture[0];
  assert.ok(Math.abs(moved.z - (4 - 0.45)) < 1e-9, `z ${moved.z}`);
  assert.equal(moved.rotation, 180);
  const free = dragFurniture(start, "s", 2, 2).floors[0].furniture[0];
  assert.deepEqual([free.x, free.z], [2, 2]);
});

test("turning wraps around, in both directions", () => {
  assert.equal(turned(350, 45), 35);
  assert.equal(turned(10, -45), 325);
  assert.equal(turned(0, 0), 0);
});

test("typed numbers accept a decimal comma, and rounding keeps what a field shows short", () => {
  assert.equal(parseTyped("1,25"), 1.25);
  assert.equal(parseTyped("0.5"), 0.5);
  assert.ok(Number.isNaN(parseTyped("abc")));
  assert.equal(rounded(1.23456, 2), 1.23);
  assert.equal(rounded(1.23456, 3), 1.235);
});
