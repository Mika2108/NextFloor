import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { test } from "node:test";
import { CATEGORIES, cardsOf, categoryOf, mainCategory, roomCategories, sizeLabel, withRecent, type CatalogEntry } from "./catalog.ts";

const pack = (id: string, extra: Partial<CatalogEntry> = {}, source = "nextfloor.demo"): CatalogEntry => ({ type: `pack:${source}:${id}`, source, id, size: [1, 0.6, 0.8], ...extra });

/** Every item of the packs that ship with NextFloor. */
function builtinPackEntries(): CatalogEntry[] {
  const dir = new URL("../../../../../custom_components/nextfloor/packs/", import.meta.url);
  return readdirSync(dir).flatMap((file) => {
    const p = JSON.parse(readFileSync(new URL(file, dir), "utf8")) as { id: string; items: { id: string; size: [number, number, number]; light?: string; electric?: boolean; vehicle?: boolean; climate?: boolean }[] };
    return p.items.map((it) => pack(it.id, { size: it.size, lamp: !!it.light, electric: !!it.electric, vehicle: !!it.vehicle, climate: !!it.climate }, p.id));
  });
}

test("items are sorted by what they are, not by the pack they come from", () => {
  assert.equal(categoryOf({ type: "sofa", source: "living", id: "sofa", size: [2, 0.9, 0.8] }), "seating");
  assert.equal(categoryOf({ type: "lamp_floor", source: "lights", id: "lamp_floor", size: [0.4, 0.4, 1.6], lamp: true }), "lights");
  assert.equal(categoryOf(pack("vanity_80")), "bath");
  assert.equal(categoryOf(pack("base_60")), "kitchen");
  assert.equal(categoryOf(pack("tesla_model_3", { vehicle: true })), "vehicles");
  assert.equal(categoryOf(pack("thermostat_wall", { climate: true })), "climate");
});

test("a glowing item is filed by what it is, a lamp among the lights", () => {
  assert.equal(categoryOf(pack("aquarium_240", { lamp: true })), "pets");
  assert.equal(categoryOf(pack("fireplace_wall", { lamp: true })), "climate");
  assert.equal(categoryOf(pack("inverter", { lamp: true })), "energy");
  assert.equal(categoryOf(pack("floor_lamp_arc", { lamp: true })), "lights");
  assert.equal(categoryOf(pack("orb_lamp", { lamp: true })), "lights");
  assert.equal(categoryOf(pack("unknown_glow", { lamp: true })), "lights");
});

test("words inside other words do not mislead the sorting", () => {
  assert.equal(categoryOf(pack("display_8")), "media", "display_ is not play_");
  assert.equal(categoryOf(pack("cat_steps")), "pets", "cat steps are not stairs");
  assert.equal(categoryOf(pack("whirlpool_indoor")), "bath", "a whirlpool is not a garden pool");
  assert.equal(categoryOf(pack("console")), "tables");
  assert.equal(categoryOf(pack("game_console")), "media");
});

test("every built-in pack item lands in a category, and few are left as decoration", () => {
  const entries = builtinPackEntries();
  assert.ok(entries.length > 500);
  const decor = entries.filter((e) => categoryOf(e) === "decor");
  assert.ok(decor.length <= 15, `too many unsorted items: ${decor.map((e) => e.id).join(", ")}`);
  const used = new Set(entries.map(categoryOf));
  for (const c of CATEGORIES) assert.ok(used.has(c) || c === "decor", `no item in ${c}`);
});

test("a room's name picks the categories that fit it, lights always among them", () => {
  const kitchen = roomCategories("Küche")!;
  assert.ok(kitchen.has("kitchen") && kitchen.has("lights") && !kitchen.has("beds"));
  assert.ok(roomCategories("Master Bedroom")!.has("beds"));
  assert.ok(roomCategories("Gäste-WC")!.has("bath"));
  assert.ok(roomCategories("Terrasse")!.has("garden"));
  assert.equal(roomCategories("Raum 3"), null);
  assert.equal(roomCategories(undefined), null);
});

test("one model in several sizes becomes one card, smallest first", () => {
  const cards = cardsOf([pack("bed_160", { size: [1.6, 2, 0.4] }), pack("bed_90", { size: [0.9, 2, 0.4] }), pack("bed_140", { size: [1.4, 2, 0.4] }), pack("bed_canopy")]);
  assert.equal(cards.length, 2);
  assert.deepEqual(cards[0].entries.map((e) => e.id), ["bed_90", "bed_140", "bed_160"]);
  assert.deepEqual(cards[0].entries.map((e) => sizeLabel(e, cards[0].entries)), ["90", "140", "160"]);
});

test("vehicles, built-in types and items of other packs keep their own cards", () => {
  const cards = cardsOf([
    pack("tesla_model_y", { vehicle: true }),
    pack("tesla_model_y_2025", { vehicle: true }),
    pack("sofa_3", {}, "nextfloor.a"),
    pack("sofa_2", {}, "nextfloor.b"),
    { type: "sofa", source: "living", id: "sofa", size: [2, 0.9, 0.8] },
  ]);
  assert.equal(cards.length, 5);
});

test("sizes sharing a width are told apart by the size in their id", () => {
  const all = [pack("cube_2x2", { size: [0.77, 0.39, 0.77] }), pack("cube_4x2", { size: [0.77, 0.39, 1.47] })];
  assert.deepEqual(all.map((e) => sizeLabel(e, all)), ["2x2", "4x2"]);
});

test("the recently used list keeps the newest first, once each", () => {
  assert.deepEqual(withRecent(["a", "b", "c"], "b"), ["b", "a", "c"]);
  assert.deepEqual(withRecent(["a", "b"], "c", 2), ["c", "a"]);
});

test("a room opens with its main kind of furniture", () => {
  assert.equal(mainCategory("Küche"), "kitchen");
  assert.equal(mainCategory("Kinderzimmer"), "kids");
  assert.equal(mainCategory("Schlafzimmer"), "beds");
  assert.equal(mainCategory("Raum 3"), null);
});

test("a word inside a room name does not pick the wrong room", () => {
  assert.equal(mainCategory("Fitnessraum"), "fitness", "fitness is not a dining room");
  assert.equal(mainCategory("Wohn-/Esszimmer"), "seating");
  assert.equal(mainCategory("Esszimmer"), "tables");
});
