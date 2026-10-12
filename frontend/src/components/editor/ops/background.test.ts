import assert from "node:assert/strict";
import { test } from "node:test";
import type { Background, Vec2 } from "../../../model.ts";
import { dragRotation, pictureCentre, pictureLocal, scaledToLength, straightened, wrapHalfTurn } from "./background.ts";

const bg = (extra: Partial<Background> = {}): Background => ({ image_id: "i", x: 0, z: 0, width: 4, opacity: 1, ...extra });
const near = (a: number, b: number, eps = 1e-3) => assert.ok(Math.abs(a - b) < eps, `${a} is not ${b}`);

test("the picture's middle follows from its position, width and aspect", () => {
  assert.deepEqual(pictureCentre(bg({ x: 1, z: 2 }), 0.5), [3, 3]);
});

test("a line that is nearly along x is straightened by turning the picture about the first point", () => {
  const picture = bg();
  const p: Vec2 = [0, 0];
  const q: Vec2 = [10, 1];
  const result = straightened(picture, 0.5, p, q)!;
  near(result.rotation!, -5.71, 0.01);
  // the middle keeps its distance from the turning point
  const before = Math.hypot(...pictureCentre(picture, 0.5));
  const after = Math.hypot(...pictureCentre(result, 0.5));
  near(before, after, 0.01);
  assert.equal(result.width, 4);
});

test("a line that is already straight, or too short, changes nothing", () => {
  assert.equal(straightened(bg(), 0.5, [0, 0], [5, 0]), null);
  assert.equal(straightened(bg(), 0.5, [0, 0], [0, 0.01]), null);
});

test("a line nearly along z is turned to run along z, in the right direction", () => {
  const result = straightened(bg(), 0.5, [0, 0], [1, 10])!;
  // the line points a little east of south: the picture turns anticlockwise to bring it straight
  assert.ok(result.rotation! > 0 && result.rotation! < 10);
});

test("scaling to a measured length keeps the point fixed and the turn", () => {
  const picture = bg({ rotation: 30 });
  const a: Vec2 = [1, 1];
  const result = scaledToLength(picture, 0.5, a, [3, 1], 8)!;
  assert.equal(result.width, 16);
  assert.equal(result.rotation, 30);
  // a point of the picture that was at `a` is still at `a`: its distance from the middle scaled by the same factor
  const [c1, c2] = [pictureCentre(picture, 0.5), pictureCentre(result, 0.5)];
  near(c2[0] - a[0], 4 * (c1[0] - a[0]));
  near(c2[1] - a[1], 4 * (c1[1] - a[1]));
});

test("scaling needs a positive length and a stretch that can be measured", () => {
  assert.equal(scaledToLength(bg(), 0.5, [0, 0], [1, 0], 0), null);
  assert.equal(scaledToLength(bg(), 0.5, [0, 0], [1, 0], -3), null);
  assert.equal(scaledToLength(bg(), 0.5, [2, 2], [2, 2], 5), null);
});

test("a plan point in the picture's own frame, with and without a turn", () => {
  assert.deepEqual(pictureLocal(bg({ x: 1, z: 1 }), 0.5, [2, 3]), [1, 2]);
  // the picture's middle is (2, 1); a point 2 east of it lies 2 up the picture when that is turned a quarter clockwise
  const turned = pictureLocal(bg({ rotation: 90 }), 0.5, [4, 1]);
  near(turned[0], 2, 1e-9);
  near(turned[1], -1, 1e-9);
});

test("angles wrap into a half turn each way, and dragging the handle snaps with Shift", () => {
  assert.equal(wrapHalfTurn(190), -170);
  assert.equal(wrapHalfTurn(-190), 170);
  assert.equal(wrapHalfTurn(180), -180);
  assert.equal(dragRotation(10, 0, Math.PI / 6, true), 45);
  assert.equal(dragRotation(0, 0, (7 * Math.PI) / 180, true), 15 * Math.round(7 / 15));
  assert.equal(dragRotation(0, 0, (7.04 * Math.PI) / 180, false), 7);
});
