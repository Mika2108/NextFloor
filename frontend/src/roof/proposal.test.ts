import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type RoofSection } from "../model.ts";
import { proposeDormer } from "./dormers.ts";
import { gableSection, near, rectRoom } from "./fixtures.ts";
import { ROOF_THICK, headroomLines, roofRider, roofSectionsFromRooms, roofUnderAt, sectionCutsBelow, sectionFloor, wallTopUnder } from "./proposal.ts";

const withRoof = (...sections: RoofSection[]) => {
  const b = emptyBuilding();
  b.settings.roof.sections = sections;
  return b;
};

test("a low eave or wall top under the ceiling cuts the walls, an open canopy does not", () => {
  assert.equal(sectionCutsBelow({ open: false, base: 3, eave_a: 3, eave_b: 3 }, 3), false);
  assert.equal(sectionCutsBelow({ open: false, base: 3, eave_a: 2, eave_b: 3 }, 3), true);
  assert.equal(sectionCutsBelow({ open: false, base: 2.5, eave_a: 3, eave_b: 3 }, 3), true);
  assert.equal(sectionCutsBelow({ open: true, base: 1, eave_a: 1, eave_b: 1 }, 3), false);
});

test("the underside of a roof: slab thickness below the plane, null outside or under a canopy", () => {
  const b = withRoof(gableSection());
  near(roofUnderAt(b, 6, 4)!, 7 - ROOF_THICK);
  near(roofUnderAt(b, 6, 2)!, 5 - ROOF_THICK);
  assert.equal(roofUnderAt(b, 30, 4), null);
  assert.equal(roofUnderAt(withRoof(gableSection({ open: true })), 6, 4), null);
  assert.equal(roofUnderAt(emptyBuilding(), 1, 1), null);
});

test("where roofs overlap, the higher one is the ceiling", () => {
  const low = gableSection({ id: "low", pitch_a: 10, pitch_b: 10 });
  const high = gableSection({ id: "high" });
  near(roofUnderAt(withRoof(low, high), 6, 4)!, 7 - ROOF_THICK);
});

test("a flat roof in a free shape covers only its polygon", () => {
  const flat = gableSection({ shape: "flat", points: [[0, 0], [4, 0], [4, 4], [0, 4]] });
  const b = withRoof(flat);
  near(roofUnderAt(b, 2, 2)!, 3 - ROOF_THICK);
  assert.equal(roofUnderAt(b, 10, 4), null);
});

test("headroom lines run across a sloped section where the roof leaves that height", () => {
  const b = withRoof(gableSection());
  const lines = headroomLines(b, 3, 2);
  // 45° slopes: 2 m of head room + the slab means 2.14 m in from each eave
  assert.equal(lines.length, 2);
  for (const [p, q] of lines) near(p[1], q[1]);
  const zs = lines.map((l) => l[0][1]).sort((a, c) => a - c);
  near(zs[0], 2 + ROOF_THICK);
  near(zs[1], 8 - 2 - ROOF_THICK);
  assert.deepEqual(headroomLines(withRoof(gableSection({ shape: "flat" }), gableSection({ open: true })), 3, 2), []);
});

test("the wall top under a rectangle is the highest floor that has a room under it", () => {
  const b = emptyBuilding();
  const g = newFloor("g", "G", 0);
  g.rooms = [rectRoom("a", 0, 0, 10, 10)];
  g.height = 2.6;
  const o = newFloor("o", "O", 2.7);
  o.rooms = [rectRoom("b", 0, 0, 4, 10)];
  o.height = 2.5;
  b.floors = [g, o];
  near(wallTopUnder(b, 0, 0, 10, 10)!, 5.2);
  near(wallTopUnder(b, 6, 0, 10, 10)!, 2.6);
  assert.equal(wallTopUnder(b, 20, 20, 25, 25), null);
});

test("an upper floor with a hole in its middle still carries the roof drawn over it", () => {
  const b = emptyBuilding();
  const g = newFloor("g", "G", 0);
  g.rooms = [rectRoom("a", 0, 0, 10, 10)];
  g.height = 2.6;
  const o = newFloor("o", "O", 2.7);
  o.rooms = [rectRoom("left", 0, 0, 4, 10), rectRoom("right", 6, 0, 10, 10)];
  o.height = 2.5;
  b.floors = [g, o];
  near(wallTopUnder(b, 0, 0, 10, 10)!, 5.2);
});

test("a section sits on the highest floor with rooms that starts below its base", () => {
  const b = emptyBuilding();
  const g = newFloor("g", "G", 0);
  g.rooms = [rectRoom("a", 0, 0, 4, 4)];
  const o = newFloor("o", "O", 3);
  o.rooms = [rectRoom("b", 0, 0, 4, 4)];
  const empty = newFloor("e", "E", 6);
  b.floors = [empty, o, g];
  assert.equal(sectionFloor(b, { base: 6 })?.id, "o");
  assert.equal(sectionFloor(b, { base: 2 })?.id, "g");
  assert.equal(sectionFloor(b, { base: 0 })?.id, "g", "nothing lower: the lowest floor");
  assert.equal(sectionFloor(emptyBuilding(), { base: 3 }), undefined);
});

test("sections proposed from an L-shaped house: one roof per floor part, ridge along the longer side", () => {
  const b = emptyBuilding();
  b.settings.wall_exterior = 0.3;
  const g = newFloor("g", "G", 0);
  g.height = 2.6;
  g.rooms = [rectRoom("a", 0, 0, 10, 5), rectRoom("b", 0, 5, 5, 10)];
  b.floors = [g];
  const sections = roofSectionsFromRooms(b);
  assert.ok(sections.length >= 2);
  assert.ok(sections.every((s) => s.shape === "gable" && s.base === 2.6 && s.eave_a === 2.6));
  assert.equal(sections[0].axis, "x");
  assert.deepEqual(sections.map((s) => s.id), sections.map((_, i) => `roof_${i + 1}`));
  assert.equal(roofSectionsFromRooms(b, (i) => `r${i}`)[0].id, "r0");
});

test("a house with an upper floor over part of it gets a roof up there and one over the rest", () => {
  const b = emptyBuilding();
  const g = newFloor("g", "G", 0);
  g.height = 2.6;
  g.rooms = [rectRoom("a", 0, 0, 5, 6), rectRoom("c", 5, 0, 10, 6)];
  const o = newFloor("o", "O", 2.7);
  o.height = 2.5;
  o.rooms = [rectRoom("b", 0, 0, 5, 6)];
  b.floors = [g, o];
  const sections = roofSectionsFromRooms(b);
  assert.equal(sections.length, 2);
  assert.ok(sections[0].base > sections[1].base, "the upper roof first");
  assert.ok(sections[1].x0 >= 5 - 0.5, "the lower roof covers only what the upper floor leaves free");
  assert.deepEqual(roofSectionsFromRooms(emptyBuilding()), []);
});

test("pulled apart, a roof moves with the floor that has a loft under its slopes, dormers with their roof", () => {
  const b = emptyBuilding();
  const g = newFloor("g", "G", 0);
  g.height = 2.6;
  g.rooms = [rectRoom("a", 0, 0, 12, 8)];
  const loft = newFloor("l", "Loft", 2.7);
  loft.height = 2.2;
  loft.rooms = [rectRoom("b", 2, 2, 10, 6)];
  b.floors = [g, loft];
  const roof = gableSection({ id: "main", base: 2.7, eave_a: 2.7, eave_b: 2.7 });
  const dormer = proposeDormer(roof, "a", "dormer", 6);
  b.settings.roof.sections = [roof, dormer];
  assert.equal(roofRider(b, g, ["main"]), "l");
  assert.equal(roofRider(b, g, ["dormer"]), "l");
  assert.equal(roofRider(b, g, ["unknown"]), "g");
});
