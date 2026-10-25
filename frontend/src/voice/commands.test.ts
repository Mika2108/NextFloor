import assert from "node:assert/strict";
import { test } from "node:test";
import { parseCommand, spokenList } from "./commands.ts";

test("show and where find the name behind the little words, in German and English", () => {
  assert.deepEqual(parseCommand("Zeig mir das Wohnzimmer"), { kind: "show", what: "wohnzimmer" });
  assert.deepEqual(parseCommand("zeige die Küche!"), { kind: "show", what: "küche" });
  assert.deepEqual(parseCommand("Show me the living room"), { kind: "show", what: "living room" });
  assert.deepEqual(parseCommand("Go to the garage"), { kind: "show", what: "garage" });
  assert.deepEqual(parseCommand("Wo ist die Waschmaschine?"), { kind: "where", what: "waschmaschine" });
  assert.deepEqual(parseCommand("Where is my iPhone"), { kind: "where", what: "iphone" });
  assert.deepEqual(parseCommand("NextFloor, zeig mir die Haustür-Kamera"), { kind: "show", what: "haustür-kamera" });
});

test("questions about the house", () => {
  for (const s of ["Was ist offen?", "Was ist alles auf", "Welche Fenster sind offen?", "What's open?", "Which windows are open", "Is anything open?"]) {
    assert.deepEqual(parseCommand(s), { kind: "open" }, s);
  }
  for (const s of ["Welche Lichter sind an?", "Wo brennt noch Licht?", "Which lights are on?"]) assert.deepEqual(parseCommand(s), { kind: "lights_on" }, s);
  for (const s of ["Alle Lichter aus", "Schalte alle Lampen aus", "Turn off all lights", "all lights off"]) assert.deepEqual(parseCommand(s), { kind: "all_off" }, s);
});

test("anything else is left to Assist", () => {
  assert.equal(parseCommand("Wie spät ist es?"), null);
  assert.equal(parseCommand("Turn on the kitchen light"), null);
  assert.equal(parseCommand("zeig"), null);
  assert.equal(parseCommand(""), null);
});

test("lists are read out naturally", () => {
  assert.equal(spokenList([], "und"), "");
  assert.equal(spokenList(["Bad"], "und"), "Bad");
  assert.equal(spokenList(["Bad", "Küche", "Flur"], "und"), "Bad, Küche und Flur");
});
