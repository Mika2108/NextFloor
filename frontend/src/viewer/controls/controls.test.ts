import assert from "node:assert/strict";
import { test } from "node:test";
import { walkKey } from "./controls.ts";

test("walking keys go by their place on the keyboard, so AZERTY walks with Z Q S D", () => {
  // QWERTY and QWERTZ
  assert.equal(walkKey({ code: "KeyW", key: "w" }), "w");
  assert.equal(walkKey({ code: "KeyA", key: "a" }), "a");
  // AZERTY: Z sits where W is, Q where A is, A where Q is
  assert.equal(walkKey({ code: "KeyW", key: "z" }), "w");
  assert.equal(walkKey({ code: "KeyA", key: "q" }), "a");
  assert.equal(walkKey({ code: "KeyQ", key: "a" }), "q");
  // arrows, and a browser without code
  assert.equal(walkKey({ code: "ArrowUp", key: "ArrowUp" }), "arrowup");
  assert.equal(walkKey({ key: "D" }), "d");
  // other keys
  assert.equal(walkKey({ code: "KeyZ", key: "w" }), null);
  assert.equal(walkKey({ code: "Space", key: " " }), null);
});
