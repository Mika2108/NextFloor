import assert from "node:assert/strict";
import { test } from "node:test";
import { formatArea, formatLength } from "./units.ts";

const de = { language: "de" } as Parameters<typeof formatLength>[0];

test("lengths in metres or in feet and inches to the half inch", () => {
  assert.equal(formatLength(de, 3.456, 2, "metric"), "3,46 m");
  assert.equal(formatLength(de, 3.456, 2, "imperial"), "11′ 4″");
  assert.equal(formatLength(de, 0.9, 2, "imperial"), "2′ 11½″");
  assert.equal(formatLength(de, 0.1, 2, "imperial"), "4″");
  assert.equal(formatLength(de, 0.3048, 2, "imperial"), "1′ 0″");
});

test("areas in square metres or square feet", () => {
  assert.equal(formatArea(de, 18.42, "metric"), "18,4 m²");
  assert.equal(formatArea(de, 18.42, "imperial"), "198 ft²");
});
