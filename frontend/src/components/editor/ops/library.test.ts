import assert from "node:assert/strict";
import { test } from "node:test";
import { anyMatch, fold, matchingItems, toggledSet, type LibrarySection } from "./library.ts";

const sections: LibrarySection[] = [
  { key: "group:kitchen", title: "Küche", items: [{ type: "fridge", label: "Kühlschrank", search: "refrigerator" }, { type: "sink_double", label: "Doppelspüle" }] },
  { key: "pack:x", title: "Pack", items: [{ type: "pack:x:chaise_longue", label: "Chaise longue" }] },
];

test("accents and case do not matter", () => {
  assert.equal(fold("Küche ÉCLAIR"), "kuche eclair");
  assert.deepEqual(matchingItems(sections[0], "kuhlschrank").map((i) => i.type), ["fridge"]);
  assert.deepEqual(matchingItems(sections[0], "REFRIGERATOR").map((i) => i.type), ["fridge"]);
});

test("every word must be found somewhere: the label, the id, or the section title", () => {
  assert.deepEqual(matchingItems(sections[0], "kuche sink").map((i) => i.type), ["sink_double"]);
  assert.deepEqual(matchingItems(sections[0], "fridge nothing"), []);
  assert.deepEqual(matchingItems(sections[1], "chaise longue").map((i) => i.type), ["pack:x:chaise_longue"]);
});

test("an empty query keeps everything, and any match is found across sections", () => {
  assert.equal(matchingItems(sections[0], "  ").length, 2);
  assert.equal(anyMatch(sections, "chaise"), true);
  assert.equal(anyMatch(sections, "zebra"), false);
});

test("a toggled set gains or loses the key and the original stays", () => {
  const open = new Set(["a"]);
  assert.deepEqual([...toggledSet(open, "b")], ["a", "b"]);
  assert.deepEqual([...toggledSet(open, "a")], []);
  assert.deepEqual([...open], ["a"]);
});
