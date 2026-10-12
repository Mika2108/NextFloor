import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith } from "../../../entities/fixtures.ts";
import type { Building } from "../../../model.ts";
import { pivotOf, translate, turnQuarterClockwise } from "./transform.ts";

function house(): Building {
  const ground = floorWith([box("a", 0, 0, 4, 2)], {
    furniture: [{ id: "s", type: "sofa", x: 1, z: 1, rotation: 0, w: 1, d: 1, h: 1, variant: null }],
    placements: [{ entity_id: "light.a", x: 2, z: 1, y: null }],
    walls: [{ id: "w", a: [0, 3], b: [4, 3], thickness: null }],
    outdoor: [{ id: "o", type: "lawn", points: [[5, 0], [6, 0], [6, 1]] }],
    background: { image_id: "i", x: 0, z: 0, width: 4, opacity: 1 },
  } as never);
  const upper = floorWith([box("b", 0, 0, 4, 2)], { id: "u", elevation: 3 } as never);
  return {
    version: 1,
    floors: [ground, upper],
    settings: { roof: { type: "custom", pitch: 35, overhang: 0, sections: [{ id: "r", x0: 0, z0: 0, x1: 4, z1: 2, points: [[0, 0], [4, 0], [4, 2]] }] } },
    energy: { meter: { floor_id: "g", x: 1, z: 1 } },
    presence: [],
  } as unknown as Building;
}

test("moving a floor moves everything on it and leaves the other floors and the roof alone", () => {
  const doc = house();
  translate(doc, { floorId: "g", allFloors: false }, 1.5, -0.5);
  const ground = doc.floors[0];
  assert.deepEqual(ground.rooms[0].points[0], [1.5, -0.5]);
  assert.deepEqual([ground.furniture[0].x, ground.furniture[0].z], [2.5, 0.5]);
  assert.deepEqual([ground.placements[0].x, ground.placements[0].z], [3.5, 0.5]);
  assert.deepEqual(ground.walls![0].a, [1.5, 2.5]);
  assert.deepEqual(ground.outdoor[0].points[0], [6.5, -0.5]);
  assert.deepEqual([ground.background!.x, ground.background!.z], [1.5, -0.5]);
  assert.deepEqual(doc.floors[1].rooms[0].points[0], [0, 0]);
  assert.equal(doc.settings.roof.sections![0].x0, 0);
});

test("moving all floors takes the roof sections and the meter along", () => {
  const doc = house();
  translate(doc, { floorId: "g", allFloors: true }, 1, 2);
  assert.deepEqual(doc.floors[1].rooms[0].points[0], [1, 2]);
  const section = doc.settings.roof.sections![0];
  assert.deepEqual([section.x0, section.x1, section.z0, section.z1], [1, 5, 2, 4]);
  assert.deepEqual(section.points![0], [1, 2]);
  assert.deepEqual([doc.energy.meter!.x, doc.energy.meter!.z], [2, 3]);
});

test("the pivot is the middle of the rooms' box, of one floor or of all", () => {
  const doc = house();
  assert.deepEqual(pivotOf(doc, { floorId: "g", allFloors: false }), [2, 1]);
  assert.equal(pivotOf(doc, { floorId: "nope", allFloors: false }), null);
  doc.floors[1].rooms[0].points = [[10, 10], [12, 10], [12, 12], [10, 12]];
  assert.deepEqual(pivotOf(doc, { floorId: "g", allFloors: true }), [6, 6]);
});

test("a quarter turn turns positions and what faces somewhere; four turns are the way it was", () => {
  const doc = house();
  const before = structuredClone(doc);
  assert.equal(turnQuarterClockwise(doc, { floorId: "g", allFloors: false }), true);
  const ground = doc.floors[0];
  // about (2, 1): the corner (0, 0) goes to (3, -1)
  assert.deepEqual(ground.rooms[0].points[0], [3, -1]);
  assert.equal(ground.furniture[0].rotation, 90);
  assert.equal(ground.placements[0].rotation, 90);
  assert.equal(ground.background!.rotation, 90);
  for (let i = 0; i < 3; i++) turnQuarterClockwise(doc, { floorId: "g", allFloors: false });
  assert.deepEqual(doc.floors[0].rooms, before.floors[0].rooms);
  assert.equal(doc.floors[0].furniture[0].rotation, 0);
  assert.deepEqual(doc.floors[0].furniture[0].x, 1);
});

test("turning a floor without rooms does nothing", () => {
  const doc = house();
  doc.floors[0].rooms = [];
  assert.equal(turnQuarterClockwise(doc, { floorId: "g", allFloors: false }), false);
});
