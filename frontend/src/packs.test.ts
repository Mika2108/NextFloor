import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { newFloor, type Furniture } from "./model.ts";
import { furnitureSize, getPacks, hasMesh, isElectric, isPackType, markMeshReady, mountBase, packDisplay, packItem, packItemName, packName, packScreen, packsVersion, packType, setPacks, type PackItem, type PackPart } from "./packs.ts";

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

test("a light-only pack item counts as electric, a plain one does not", () => {
  assert.equal(isElectric("pack:demo.pack:lampy"), true);
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
