import assert from "node:assert/strict";
import { test } from "node:test";
import { pointInPolygon, type Vec2 } from "../model.ts";
import { circlePath, cleaningPath, ROBOT_SPEED, stepRobot, type RobotInfo, type RobotMotion } from "./robot.ts";

const hall: Vec2[] = [[0, 0], [6, 0], [6, 3], [0, 3]];
const info = (mode: RobotInfo["mode"], extra: Partial<RobotInfo> = {}): RobotInfo => ({ id: "r", floorId: "f", rest: [0, 0], restHeading: 0, mode, room: hall, ...extra });
const motion = (pos: Vec2, extra: Partial<RobotMotion> = {}): RobotMotion => ({ pos, heading: 0, path: [], next: 0, ...extra });

test("lanes run along the longer side, back and forth, and stay inside the room", () => {
  const path = cleaningPath(hall);
  assert.ok(path.length >= 16);
  assert.ok(path.every((p) => pointInPolygon(p, hall)));
  // along x: both ends of a lane share their z, and the next lane runs the other way
  for (let i = 0; i + 1 < path.length; i += 2) assert.equal(path[i][1], path[i + 1][1]);
  assert.ok(path[1][0] > path[0][0] && path[3][0] < path[2][0]);
  // a tall room is cleaned along z
  const tall: Vec2[] = [[0, 0], [3, 0], [3, 6], [0, 6]];
  const lane = cleaningPath(tall);
  assert.equal(lane[0][0], lane[1][0]);
});

test("a narrow room gives fewer lanes than a wide one, and a closet gives none", () => {
  assert.ok(cleaningPath([[0, 0], [6, 0], [6, 1], [0, 1]]).length < cleaningPath(hall).length);
  assert.deepEqual(cleaningPath([[0, 0], [0.3, 0], [0.3, 0.3], [0, 0.3]]), []);
});

test("lanes keep out of the missing corner of an L-shaped room", () => {
  const l: Vec2[] = [[0, 0], [4, 0], [4, 2], [2, 2], [2, 4], [0, 4]];
  assert.ok(cleaningPath(l).every((p) => pointInPolygon(p, l)));
});

test("lanes keep clear of furniture and never cross it when changing lanes", () => {
  const room: Vec2[] = [[0, 0], [5, 0], [5, 4], [0, 4]];
  const wardrobe: Vec2[] = [[0, 0], [2, 0], [2, 0.6], [0, 0.6]];
  const sofa: Vec2[] = [[2, 1.8], [4, 1.8], [4, 2.7], [2, 2.7]];
  const path = cleaningPath(room, 0.32, 0.22, [wardrobe, sofa]);
  assert.ok(path.length >= 4);
  for (let i = 1; i < path.length; i++) {
    const [a, b] = [path[i - 1], path[i]];
    for (let t = 0; t <= 1; t += 0.02) {
      const p: Vec2 = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
      assert.ok(!pointInPolygon(p, wardrobe) && !pointInPolygon(p, sofa), `segment ${i} crosses furniture`);
    }
  }
});

test("the circle path surrounds its centre at the given radius", () => {
  const circle = circlePath([1, 2], 0.5, 8);
  assert.equal(circle.length, 8);
  for (const p of circle) assert.ok(Math.abs(Math.hypot(p[0] - 1, p[1] - 2) - 0.5) < 1e-9);
  assert.equal(circlePath([0, 0]).length, 12);
});

test("a returning robot turns on the spot first, then drives home and faces away from the dock", () => {
  const m = motion([2, 0]);
  const robot = info("returning");
  stepRobot(m, robot, 0.1);
  assert.deepEqual(m.pos, [2, 0], "facing +z while the dock lies at -x: only turning");
  let steps = 0;
  while (stepRobot(m, robot, 0.05) && steps++ < 600);
  assert.ok(Math.hypot(...m.pos) < 0.03);
  assert.ok(Math.abs(m.heading - robot.restHeading) < 0.05);
  assert.equal(stepRobot(m, robot, 0.05), false, "at rest it stays");
});

test("it never drives faster than its speed", () => {
  const m = motion([3, 0], { heading: -Math.PI / 2 });
  const before = m.pos[0];
  stepRobot(m, info("returning"), 1);
  assert.ok(before - m.pos[0] <= ROBOT_SPEED + 1e-9);
});

test("a cleaning robot follows its path round and round; idle, error and path-less robots stay put", () => {
  const path: Vec2[] = [[1, 1], [1, 2]];
  const m = motion([1, 1], { path, heading: 0 });
  const robot = info("cleaning");
  const seen = new Set<number>();
  for (let i = 0; i < 400; i++) {
    stepRobot(m, robot, 0.05);
    seen.add(m.next);
  }
  assert.deepEqual([...seen].sort(), [0, 1], "it keeps going between its two points");
  assert.equal(stepRobot(motion([1, 1]), robot, 0.05), false, "no path: nothing to do");
  assert.equal(stepRobot(motion([1, 1]), info("idle"), 0.05), false);
  assert.equal(stepRobot(motion([1, 1]), info("error"), 0.05), false);
});
