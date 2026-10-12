import assert from "node:assert/strict";
import { test } from "node:test";
import { HEAT_SCALES, heatColor, heatGradient, type HeatColorMode } from "./heatmap.ts";

const modes = Object.keys(HEAT_SCALES) as HeatColorMode[];

test("values below the first stop and above the last one keep the end colours", () => {
  for (const mode of modes) {
    const { stops } = HEAT_SCALES[mode];
    assert.deepEqual(heatColor(mode, stops[0][0] - 100), stops[0][1]);
    assert.deepEqual(heatColor(mode, stops[stops.length - 1][0] + 100), stops[stops.length - 1][1]);
  }
});

test("a stop value gives exactly its colour, the middle between two stops the average", () => {
  for (const mode of modes) {
    const { stops } = HEAT_SCALES[mode];
    stops.forEach(([value, colour]) => heatColor(mode, value).forEach((c, i) => assert.ok(Math.abs(c - colour[i]) < 1e-9)));
    const [[v0, c0], [v1, c1]] = stops;
    heatColor(mode, (v0 + v1) / 2).forEach((c, i) => assert.ok(Math.abs(c - (c0[i] + c1[i]) / 2) < 1e-9));
  }
});

test("the stops of every scale rise strictly, so no division by zero can happen", () => {
  for (const mode of modes) {
    const values = HEAT_SCALES[mode].stops.map(([v]) => v);
    values.slice(1).forEach((v, i) => assert.ok(v > values[i], `${mode} at ${v}`));
  }
});

test("warm temperatures are redder than cold ones", () => {
  const cold = heatColor("temperature", 15);
  const hot = heatColor("temperature", 30);
  assert.ok(hot[0] > cold[0] && hot[2] < cold[2]);
});

test("the gradient lists every stop, from 0 % to 100 %", () => {
  for (const mode of modes) {
    const css = heatGradient(mode);
    assert.ok(css.startsWith("linear-gradient(90deg, rgb("));
    assert.equal(css.match(/rgb\(/g)?.length, HEAT_SCALES[mode].stops.length);
    assert.ok(css.includes(" 0%") && css.endsWith(" 100%)"));
  }
});
