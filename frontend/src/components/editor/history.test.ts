import assert from "node:assert/strict";
import { test } from "node:test";
import { EditHistory } from "./history.ts";

test("a new history has nothing to undo or redo", () => {
  const history = new EditHistory<number[]>();
  assert.equal(history.canUndo, false);
  assert.equal(history.canRedo, false);
  assert.equal(history.undo([1]), null);
  assert.equal(history.redo([1]), null);
});

test("undo steps back through the recorded states, redo forward again", () => {
  const history = new EditHistory<{ n: number }>();
  history.record({ n: 1 });
  history.record({ n: 2 });
  assert.deepEqual(history.undo({ n: 3 }), { n: 2 });
  assert.deepEqual(history.undo({ n: 2 }), { n: 1 });
  assert.equal(history.canUndo, false);
  assert.deepEqual(history.redo({ n: 1 }), { n: 2 });
  assert.deepEqual(history.redo({ n: 2 }), { n: 3 });
  assert.equal(history.canRedo, false);
});

test("a new change ends the redo line", () => {
  const history = new EditHistory<number>();
  history.record(1);
  history.undo(2);
  assert.equal(history.canRedo, true);
  history.record(1);
  assert.equal(history.canRedo, false);
});

test("only the newest states are kept", () => {
  const history = new EditHistory<number>(3);
  for (let i = 0; i < 10; i++) history.record(i);
  const seen: number[] = [];
  for (let state = history.undo(99); state !== null; state = history.undo(state)) seen.push(state);
  assert.deepEqual(seen, [9, 8, 7]);
});

test("a recorded state is a copy: changing the original afterwards does not alter it", () => {
  const history = new EditHistory<{ list: number[] }>();
  const doc = { list: [1] };
  history.record(doc);
  doc.list.push(2);
  assert.deepEqual(history.undo(doc), { list: [1] });
});
