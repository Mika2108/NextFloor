// Undo and redo for the editor. States are kept as JSON text, so a snapshot can never change behind the history's back.

export class EditHistory<T> {
  private readonly limit: number;
  private undoStack: string[] = [];
  private redoStack: string[] = [];

  constructor(limit = 100) {
    this.limit = limit;
  }

  get canUndo(): boolean {
    return this.undoStack.length > 0;
  }

  get canRedo(): boolean {
    return this.redoStack.length > 0;
  }

  /** Remembers `before`, the state a change started from. A new change ends the redo line. */
  record(before: T): void {
    this.undoStack.push(JSON.stringify(before));
    if (this.undoStack.length > this.limit) this.undoStack.shift();
    this.redoStack = [];
  }

  /** The state before the last change, or null when there is none. `current` becomes redoable. */
  undo(current: T): T | null {
    const text = this.undoStack.pop();
    if (text === undefined) return null;
    this.redoStack.push(JSON.stringify(current));
    return JSON.parse(text) as T;
  }

  /** The state that was undone last, or null. `current` becomes undoable again. */
  redo(current: T): T | null {
    const text = this.redoStack.pop();
    if (text === undefined) return null;
    this.undoStack.push(JSON.stringify(current));
    return JSON.parse(text) as T;
  }
}
