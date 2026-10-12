import assert from "node:assert/strict";
import { test } from "node:test";
import { REPO_URL } from "./features.ts";

test("the project link points to GitHub", () => {
  assert.ok(REPO_URL.startsWith("https://github.com/"));
});
