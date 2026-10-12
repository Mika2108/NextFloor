import assert from "node:assert/strict";
import { test } from "node:test";
import { gableSection, near } from "./fixtures.ts";
import { dormerHole, dormerHoles, dormerParent, effectiveDormer, proposeDormer } from "./dormers.ts";
import { sectionProfile } from "./frame.ts";

test("a dormer is proposed on the chosen side, 2 m wide, 35° gable, eaves 1.4 m above the section's", () => {
  const parent = gableSection();
  const d = proposeDormer(parent, "a", "dormer", 6);
  assert.equal(d.dormer, true);
  assert.equal(d.shape, "gable");
  assert.equal(d.axis, "z", "its ridge runs across the parent's ridge");
  assert.equal(d.eave_a, 4.4);
  assert.equal(d.pitch_a, 35);
  near(d.x1 - d.x0, 2, 0.01);
  assert.ok(d.z0 === 0, "its front is flush with the eave wall");
  const other = proposeDormer(parent, "b", "other", 6);
  assert.equal(other.z1, 8);
});

test("a dormer stays inside the ends of the section even when asked for a spot near them", () => {
  const d = proposeDormer(gableSection(), "a", "d", -50);
  assert.ok(d.x0 >= 0.3 - 0.01);
  const e = proposeDormer(gableSection(), "a", "e", 500);
  assert.ok(e.x1 <= 12 - 0.3 + 0.01);
});

test("a dormer's base is the parent's roof height at the eave it sits on", () => {
  const parent = gableSection({ eave_a: 3, eave_b: 2.5 });
  const a = proposeDormer(parent, "a", "d");
  const b = proposeDormer(parent, "b", "d");
  near(a.base, sectionProfile(parent).y(0), 0.01);
  near(b.base, sectionProfile(parent).y(8), 0.01);
});

test("the parent is the smallest clearly bigger sloped section holding the dormer's centre", () => {
  const big = gableSection({ id: "big", x1: 20, z1: 12 });
  const mid = gableSection({ id: "mid" });
  const dormer = proposeDormer(mid, "a", "d", 6);
  assert.equal(dormerParent([big, mid, dormer], dormer)?.id, "mid");
  assert.equal(dormerParent([big, dormer], dormer)?.id, "big");
  assert.equal(dormerParent([dormer], dormer), null);
  const lonely = gableSection({ id: "far", x0: 50, x1: 52, z0: 50, z1: 52 });
  assert.equal(dormerParent([big, mid, lonely], lonely), null);
});

test("flat roofs and other dormers are no parents", () => {
  const dormer = gableSection({ id: "d", x0: 5, x1: 7, z0: 1, z1: 3, dormer: true });
  assert.equal(dormerParent([gableSection({ shape: "flat" }), gableSection({ dormer: true, id: "x" })], dormer), null);
});

test("a dormer's footprint in the parent's frame, or null when it is a speck", () => {
  const parent = gableSection();
  const d = proposeDormer(parent, "a", "d", 6);
  const hole = dormerHole(parent, d)!;
  near(hole.u1 - hole.u0, d.x1 - d.x0, 1e-6);
  assert.equal(dormerHole(parent, { ...d, x1: d.x0 + 0.05 }), null);
});

test("a dormer's depth ends where its ridge meets the slope", () => {
  const parent = gableSection();
  const d = proposeDormer(parent, "a", "d", 6);
  const deeper = { ...d, z1: 8 };
  const effective = effectiveDormer(parent, deeper);
  assert.ok(effective.z1 < 8, "cut back to the slope");
  assert.ok(effective.z1 > d.z0);
  // flat dormers are left alone
  const flat = { ...deeper, shape: "flat" as const };
  assert.equal(effectiveDormer(parent, flat), flat);
});

test("a dormer that already ends at the slope stays as it is", () => {
  const parent = gableSection();
  const d = proposeDormer(parent, "a", "d", 6);
  const effective = effectiveDormer(parent, d);
  assert.ok(Math.abs(effective.z1 - d.z1) < 0.2);
});

test("the slope opens in strips that follow the dormer's roof", () => {
  const parent = gableSection();
  const holes = dormerHoles(parent, proposeDormer(parent, "a", "d", 6));
  assert.ok(holes.length >= 3);
  for (const h of holes) {
    assert.ok(h.u1 > h.u0 && h.v1 > h.v0);
    assert.ok(h.u0 >= 4.9 && h.u1 <= 7.1, "inside the dormer's width");
  }
});
