import assert from "node:assert/strict";
import { test } from "node:test";
import { fold, hasAllWords, wordsOf } from "./library.ts";

test("accents and case do not matter", () => {
  assert.equal(fold("Küche ÉCLAIR"), "kuche eclair");
  assert.ok(hasAllWords(wordsOf("kuhlschrank"), "Kühlschrank refrigerator"));
  assert.ok(hasAllWords(wordsOf("REFRIGERATOR"), "Kühlschrank refrigerator"));
});

test("every word must be found somewhere, in any order", () => {
  assert.ok(hasAllWords(wordsOf("sink kuche"), "Doppelspüle sink_double Küche"));
  assert.ok(!hasAllWords(wordsOf("fridge nothing"), "Kühlschrank fridge"));
  assert.ok(hasAllWords(wordsOf("   "), "anything"));
});
