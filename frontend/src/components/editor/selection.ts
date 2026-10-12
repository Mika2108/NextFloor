// What is selected in the plan. One thing is selected at a time, but a room stays selected while one of its openings, furniture or
// devices is: the form of the item shows below the room. Setters ask the editor to draw again.

export type ItemKind = "room" | "opening" | "furniture" | "device" | "outdoor" | "wall";

/** What choosing an item needs to know about the plan: which room a device or opening belongs to. */
export interface SelectionLookup {
  roomOfDevice(entityId: string): string | null;
  roomOfOpening(openingId: string): string | null;
}

export class Selection {
  private readonly onChange: () => void;
  private ids: Record<ItemKind, string | null> = { room: null, opening: null, furniture: null, device: null, outdoor: null, wall: null };
  private cornerSel: number | null = null;
  private edgeSel: number | null = null;

  constructor(onChange: () => void) {
    this.onChange = onChange;
  }

  private set(kind: ItemKind, id: string | null): void {
    this.ids[kind] = id;
    this.onChange();
  }

  get room(): string | null {
    return this.ids.room;
  }
  set room(id: string | null) {
    this.set("room", id);
  }

  get opening(): string | null {
    return this.ids.opening;
  }
  set opening(id: string | null) {
    this.set("opening", id);
  }

  get furniture(): string | null {
    return this.ids.furniture;
  }
  set furniture(id: string | null) {
    this.set("furniture", id);
  }

  get device(): string | null {
    return this.ids.device;
  }
  set device(id: string | null) {
    this.set("device", id);
  }

  get outdoor(): string | null {
    return this.ids.outdoor;
  }
  set outdoor(id: string | null) {
    this.set("outdoor", id);
  }

  get wall(): string | null {
    return this.ids.wall;
  }
  set wall(id: string | null) {
    this.set("wall", id);
  }

  /** The selected corner of the selected room. */
  get corner(): number | null {
    return this.cornerSel;
  }
  set corner(index: number | null) {
    this.cornerSel = index;
    this.onChange();
  }

  /** The edge of the room that is highlighted, for instance while its height is edited. */
  get edge(): number | null {
    return this.edgeSel;
  }
  set edge(index: number | null) {
    this.edgeSel = index;
    this.onChange();
  }

  /** Selects an item of one kind (null selects nothing of it) and deselects everything else, except the room it belongs to. */
  select(kind: ItemKind, id: string | null, lookup: SelectionLookup): void {
    const room = this.ids.room;
    const ids: Record<ItemKind, string | null> = { room: null, opening: null, furniture: null, device: null, outdoor: null, wall: null };
    ids[kind] = id;
    // areas outside and free walls belong to no room; everything else leaves the room selected
    if (kind === "room") ids.room = id;
    else if (kind !== "outdoor" && kind !== "wall") ids.room = room;
    if (kind === "device" && id) ids.room = lookup.roomOfDevice(id) ?? ids.room;
    if (kind === "opening" && id) ids.room = lookup.roomOfOpening(id) ?? ids.room;
    // a corner stays selected only when its own room is selected again
    if (kind !== "room" || id !== room) this.cornerSel = null;
    this.edgeSel = null;
    this.ids = ids;
    this.onChange();
  }

  /** The selected item for locking and nudging: the most specific one first. */
  get target(): { kind: ItemKind; id: string } | null {
    for (const kind of ["device", "opening", "furniture", "wall", "outdoor", "room"] as const) {
      const id = this.ids[kind];
      if (id) return { kind, id };
    }
    return null;
  }
}
