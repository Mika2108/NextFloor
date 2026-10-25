import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { newFloor, type Furniture } from "./model.ts";
import { coverReach, fittedParts, furnitureSize, hasMovingParts, movedParts, getPacks, hasMesh, isElectric, isClimateFurniture, isPackType, markMeshReady, mountBase, packDisplay, packItem, packItemName, packName, packScreen, packsVersion, packType, setPacks, type PackItem, type PackPart } from "./packs.ts";

const part = (extra: Partial<PackPart> = {}): PackPart => ({ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "body", ...extra });
const item = (id: string, extra: Partial<PackItem> = {}): PackItem => ({ id, name: { en: id }, size: [1, 1, 1], parts: [part()], ...extra });

beforeEach(() =>
  setPacks([
    {
      id: "demo.pack",
      name: "Demopaket",
      publisher: "demo",
      items: [
        item("plain"),
        item("tv", { size: [1.2, 0.1, 0.7], parts: [part(), part({ screen: true, w: 0.9, d: 1, h: 0.8 })] }),
        item("status", { size: [0.3, 0.1, 0.2], parts: [part({ screen: true, w: 0.1, d: 1, h: 0.2 })] }),
        item("shelf", { mount: "wall", wall_y: 1.4 }),
        item("hanging", { mount: "ceiling" }),
        item("lampy", { light: "pendant" as never }),
        item("climate", { climate: true }),
        item("modelled", { mesh: "m1" }),
      ],
    },
  ]),
);

const furniture = (type: string, extra: Partial<Furniture> = {}): Pick<Furniture, "type" | "x" | "z" | "h"> => ({ type, x: 1, z: 1, h: 0.5, ...extra });

test("pack types are built from ids and recognised by their prefix", () => {
  assert.equal(packType("a", "b"), "pack:a:b");
  assert.ok(isPackType("pack:a:b"));
  assert.ok(!isPackType("sofa"));
});

test("setPacks replaces the registry and counts a new version", () => {
  const before = packsVersion();
  setPacks([]);
  assert.equal(getPacks().length, 0);
  assert.equal(packsVersion(), before + 1);
  assert.equal(packItem("pack:demo.pack:plain"), undefined);
});

test("items are found by type; built-in types and unknown packs are not pack items", () => {
  assert.equal(packItem("pack:demo.pack:plain")?.id, "plain");
  assert.equal(packItem("sofa"), undefined);
  assert.equal(packItem("pack:other:plain"), undefined);
});

test("a screen part is found, and a status light is told apart from a real display", () => {
  assert.ok(packScreen("pack:demo.pack:tv"));
  assert.equal(packScreen("pack:demo.pack:plain"), undefined);
  assert.equal(packDisplay("pack:demo.pack:tv"), true);
  assert.equal(packDisplay("pack:demo.pack:status"), false);
  assert.equal(packDisplay("sofa"), false);
});

test("sizes: built-in table, pack item, else a small default", () => {
  assert.deepEqual(furnitureSize("pack:demo.pack:tv"), [1.2, 0.1, 0.7]);
  assert.deepEqual(furnitureSize("pack:gone:x"), [0.6, 0.6, 0.8]);
  assert.equal(furnitureSize("sofa").length, 3);
});

test("light and climate pack items count as electric, a plain one does not", () => {
  assert.equal(isElectric("pack:demo.pack:lampy"), true);
  assert.equal(isElectric("pack:demo.pack:climate"), true);
  assert.equal(isClimateFurniture("pack:demo.pack:climate"), true);
  assert.equal(isClimateFurniture("pack:demo.pack:plain"), false);
  assert.equal(isElectric("pack:demo.pack:plain"), false);
});

test("names fall back from the language to English to anything to the id", () => {
  assert.equal(packItemName(item("x", { name: { de: "Hallo", en: "Hello" } }), "de-AT"), "Hallo");
  assert.equal(packItemName(item("x", { name: { de: "Hallo", en: "Hello" } }), "fr"), "Hello");
  assert.equal(packItemName(item("x", { name: { de: "Hallo" } }), "fr"), "Hallo");
  assert.equal(packItemName(item("x", { name: {} }), "fr"), "x");
});

test("built-in packs are English outside German, other packs keep their name", () => {
  assert.equal(packName({ id: "nextfloor.garten", name: "Garten & Terrasse" }, "en"), "Garden & Terrace (older)");
  assert.equal(packName({ id: "nextfloor.garten", name: "Garten & Terrasse (älter)" }, "de-CH"), "Garten & Terrasse (älter)");
  assert.equal(packName({ id: "someone.else", name: "Mine" }, "en"), "Mine");
});

test("the underside of a piece depends on how it is mounted", () => {
  const floor = newFloor("g", "G", 0);
  floor.height = 2.6;
  assert.equal(mountBase(floor, furniture("pack:demo.pack:shelf")), 1.4);
  assert.ok(Math.abs(mountBase(floor, furniture("pack:demo.pack:hanging", { h: 0.5 })) - 2.1) < 1e-9);
  assert.equal(mountBase(floor, furniture("pack:demo.pack:plain")), 0);
  assert.equal(mountBase(floor, { ...furniture("pack:demo.pack:plain"), mount_y: 0.9 }), 0.9);
  assert.ok(mountBase(floor, furniture("led_strip", { h: 0.02 })) > 2.4);
});

test("a model counts only after it has loaded", () => {
  assert.equal(hasMesh("pack:demo.pack:modelled"), false);
  markMeshReady("m1");
  assert.equal(hasMesh("pack:demo.pack:modelled"), true);
  assert.equal(hasMesh("pack:demo.pack:plain"), false);
});

test("a resized pack item keeps its arms, legs and plates at their size; the middle stretches", () => {
  const sofa = item("sofa", {
    size: [2, 0.9, 0.8],
    parts: [
      part({ x: -0.45, w: 0.1, h: 0.75 }), // left arm, 20 cm
      part({ x: 0.45, w: 0.1, h: 0.75 }), // right arm
      part({ x: 0, w: 0.8, y: 0.3, h: 0.2 }), // seat between the arms
      part({ x: -0.47, z: -0.4, w: 0.03, d: 0.05, y: 0, h: 0.1, shape: "cyl" }), // a leg, 6 cm
    ],
  });
  const [armL, armR, seat, leg] = fittedParts(sofa, 3, 0.9, 0.8);
  const m = (frac: number, size: number) => Math.round(frac * size * 1000) / 1000;
  assert.equal(m(armL.w, 3), 0.2, "the arm stays 20 cm wide");
  assert.equal(m(armL.x - armL.w / 2, 3), -1.5, "and sits at the left end");
  assert.equal(m(armR.x + armR.w / 2, 3), 1.5);
  assert.equal(m(seat.w, 3), 2.6, "the seat fills the rest");
  assert.equal(m(leg.w, 3), 0.06, "the leg keeps its size");
  assert.equal(m(leg.x - leg.w / 2, 3), -1.47, "and its 3 cm from the end");
});

test("a taller table gets longer legs but keeps its top plate", () => {
  const table = item("table", { size: [1.2, 0.8, 0.75], parts: [part({ y: 0.95, h: 0.05 }), part({ x: -0.45, w: 0.05, d: 0.05, y: 0, h: 0.95 })] });
  const [top, legPart] = fittedParts(table, 1.2, 0.8, 1.05);
  const cm = (frac: number) => Math.round(frac * 1.05 * 1000) / 10;
  assert.equal(cm(top.h), 3.8, "the plate stays 3.75 cm thick");
  assert.equal(cm(top.y + top.h), 105);
  assert.equal(cm(legPart.h), 101.3, "the legs reach up to the plate");
});

test("unchanged sizes, vehicles and items marked stretch scale as before", () => {
  const plain = item("p", { size: [1, 1, 1] });
  assert.equal(fittedParts(plain, 1, 1, 1), plain.parts);
  const car = item("car", { vehicle: true });
  assert.equal(fittedParts(car, 2, 2, 2), car.parts);
  const even = item("even", { stretch: true });
  assert.equal(fittedParts(even, 2, 2, 2), even.parts);
});

test("a much smaller item falls back to even scaling instead of folding its parts over", () => {
  const box = item("box", { size: [1, 1, 1], parts: [part({ x: -0.4, w: 0.2 }), part({ x: 0.4, w: 0.2 })] });
  const [a, b] = fittedParts(box, 0.3, 1, 1);
  assert.ok(a.x + a.w / 2 <= b.x - b.w / 2 + 1e-9, "parts stay side by side");
  assert.equal(Math.round(a.w * 1000) / 1000, 0.2);
});

test("moving parts roll up, gather to a side, reach out or slide with the cover", () => {
  const cloth = part({ x: 0, w: 1, y: 0, h: 1, move: "down" });
  const [rolled] = movedParts([cloth, part()], 0.25);
  assert.equal(rolled.y, 0.75, "rolled up three quarters: hangs from the top");
  assert.equal(rolled.h, 0.25);
  const [left] = movedParts([part({ x: 0, w: 1, move: "left" })], 0.5);
  assert.equal(left.x - left.w / 2, -0.5, "gathers at the left end");
  assert.equal(left.w, 0.5);
  const [out] = movedParts([part({ z: 0, d: 1, move: "out" })], 0.4);
  assert.equal(Math.round((out.z - out.d / 2) * 100) / 100, -0.5, "reaches out from the back");
  assert.equal(Math.round(out.d * 100) / 100, 0.4);
  const [gate] = movedParts([part({ x: 0, w: 0.8, move: "slide_left" })], 0);
  assert.equal(Math.round(gate.x * 100) / 100, -0.8, "an open gate has slid its whole width");
  assert.deepEqual(movedParts([part({ move: "down" })], 0), [], "a fully rolled-up part is gone");
});

test("a cover's open position pulls a curtain in and an awning out; without an entity the parts rest", () => {
  const curtain = item("curtain", { cover: "retracts", cover_rest: 0.25 });
  const awning = item("awning", { cover: "extends", cover_rest: 0 });
  assert.equal(coverReach(curtain, 100), 0);
  assert.equal(coverReach(curtain, 0), 1);
  assert.equal(coverReach(awning, 100), 1);
  assert.equal(coverReach(awning, 30), 0.3);
  assert.equal(coverReach(curtain, null), 0.25);
  assert.equal(coverReach(item("plain"), null), 1);
  assert.ok(hasMovingParts(item("m", { parts: [part({ move: "left" })] })));
  assert.ok(!hasMovingParts(item("plain")));
});
