// The picture behind a floor plan: loading the stored pictures, adding a new one, and the two ways of calibrating it (straighten it
// against a wall, or scale it with a measured length). The tool owns the state of these modes; the form and the plan canvas read it.

import { fetchImage, storeImage } from "../../api.ts";
import { bounds, uid, type Background, type Vec2 } from "../../model.ts";
import type { EditorHost } from "./host.ts";
import { scaledToLength, straightened } from "./ops/background.ts";

export interface StoredPicture {
  url: string;
  /** Height divided by width. */
  aspect: number;
}

export interface BackgroundDeps {
  host: EditorHost;
  refresh(): void;
  api: { fetchImage: typeof fetchImage; storeImage: typeof storeImage };
  /** Reads a chosen file, shrinks it to a size the plan can carry, and gives it as a data URL with its aspect. */
  readPicture(file: File): Promise<{ data: string; aspect: number }>;
  /** The handles need the select tool. */
  useSelectTool(): void;
  currentTool(): string;
}

const MAX_SIDE = 2048;

/** The browser's way of shrinking a picture: draws it onto a canvas of at most 2048 pixels on its longer side. */
export async function readPictureInBrowser(file: File): Promise<{ data: string; aspect: number }> {
  const bitmap = await createImageBitmap(file);
  const k = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * k);
  canvas.height = Math.round(bitmap.height * k);
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return { data: canvas.toDataURL("image/jpeg", 0.85), aspect: canvas.height / canvas.width };
}

export class BackgroundTool {
  private readonly deps: BackgroundDeps;
  private editMode = false;
  private levelPoints: Vec2[] | null = null;
  private rulerPoints: Vec2[] | null = null;
  private rulerMetres = 0;
  private sectionOpen = false;
  private pictures: Record<string, StoredPicture> = {};
  private readonly loading = new Set<string>();

  constructor(deps: BackgroundDeps) {
    this.deps = deps;
  }

  // state that the form shows and the pointer code changes; each setter asks for a redraw

  /** "Move and scale" is on: the picture has handles. */
  get edit(): boolean {
    return this.editMode;
  }
  set edit(on: boolean) {
    this.editMode = on;
    this.deps.refresh();
  }

  /** Straightening: the points tapped so far (none, or the first), or null when the mode is off. */
  get level(): Vec2[] | null {
    return this.levelPoints;
  }
  set level(points: Vec2[] | null) {
    this.levelPoints = points;
    this.deps.refresh();
  }

  /** Measuring: the points tapped so far, or null when the mode is off. */
  get ruler(): Vec2[] | null {
    return this.rulerPoints;
  }
  set ruler(points: Vec2[] | null) {
    this.rulerPoints = points;
    this.deps.refresh();
  }

  /** The length in metres typed for the measured stretch. */
  get rulerLength(): number {
    return this.rulerMetres;
  }
  set rulerLength(metres: number) {
    this.rulerMetres = metres;
    this.deps.refresh();
  }

  /** Whether the form's section is unfolded. */
  get open(): boolean {
    return this.sectionOpen;
  }
  set open(open: boolean) {
    this.sectionOpen = open;
    this.deps.refresh();
  }

  /** The handles (move, scale, turn) show while "Move and scale" is on, with the select tool. */
  get handlesShown(): boolean {
    const { host } = this.deps;
    return !!host.floor?.background && host.admin && this.deps.currentTool() === "select" && this.editMode;
  }

  /** The loaded picture of a background, or of a stored picture id. Undefined until it is loaded. */
  picture(id: string | undefined): StoredPicture | undefined {
    return id ? this.pictures[id] : undefined;
  }

  /** Starts loading a stored picture unless it is loaded or on its way. */
  ensureLoaded(id: string): void {
    if (!this.pictures[id] && !this.loading.has(id)) void this.load(id);
  }

  private async load(id: string): Promise<void> {
    const { host, api } = this.deps;
    if (!host.hass) return;
    this.loading.add(id);
    try {
      const url = await api.fetchImage(host.hass, id);
      const aspect = await this.aspectOf(url);
      this.pictures = { ...this.pictures, [id]: { url, aspect } };
      this.deps.refresh();
    } catch {
      // a picture that is gone (removed on the server): the background stays empty
    }
  }

  /** The height-to-width ratio of a picture, once the browser has decoded it. */
  protected async aspectOf(url: string): Promise<number> {
    const image = new Image();
    image.src = url;
    await image.decode();
    return image.naturalHeight / image.naturalWidth;
  }

  /** Stores a chosen file as the background of the floor shown: as wide as the rooms, or 12 m when there are none. */
  async upload(file: File | undefined): Promise<void> {
    const { host, api } = this.deps;
    if (!file || !host.hass) return;
    const { data, aspect } = await this.deps.readPicture(file);
    const id = uid("img");
    await api.storeImage(host.hass, id, data);
    this.pictures = { ...this.pictures, [id]: { url: data, aspect } };
    const rooms = host.floor?.rooms ?? [];
    const box = rooms.length > 0 ? bounds(rooms.flatMap((r) => r.points)) : null;
    const placed: Background = { image_id: id, x: box ? box.x0 : 0, z: box ? box.z0 : 0, width: box ? Math.max(4, Math.round((box.x1 - box.x0) * 1000) / 1000) : 12, opacity: 0.5 };
    this.setBackground(placed);
  }

  /** Writes a background to the floor shown; null removes it. */
  setBackground(background: Background | null): void {
    this.deps.host.change((_, floor) => Object.assign(floor, { background }));
  }

  // calibration

  /** Straighten mode on or off. Starting it ends the other modes. */
  toggleLevel(): void {
    this.levelPoints = this.levelPoints ? null : [];
    this.rulerPoints = null;
    this.editMode = false;
    this.deps.refresh();
  }

  toggleRuler(): void {
    this.rulerPoints = this.rulerPoints ? null : [];
    this.levelPoints = null;
    this.editMode = false;
    this.deps.refresh();
  }

  toggleEdit(): void {
    this.edit = !this.editMode;
    if (this.editMode) this.deps.useSelectTool();
  }

  /** A tap in straighten mode: the first starts, the second turns the picture. */
  tapLevel(world: Vec2): void {
    const points = [...(this.levelPoints ?? []), world];
    if (points.length < 2) {
      this.level = points;
      return;
    }
    this.level = null;
    this.straighten(points[0], points[1]);
  }

  /** A tap in measure mode: two points mark the stretch. Further taps are ignored. */
  tapRuler(world: Vec2): void {
    if (this.rulerPoints && this.rulerPoints.length < 2) this.ruler = [...this.rulerPoints, world];
  }

  private straighten(p: Vec2, q: Vec2): void {
    const current = this.deps.host.floor?.background;
    const picture = this.picture(current?.image_id);
    const next = current && picture ? straightened(current, picture.aspect, p, q) : null;
    if (next) this.setBackground(next);
  }

  /** Scales the picture so that the measured stretch has the typed length. */
  applyRuler(): void {
    const current = this.deps.host.floor?.background;
    const picture = this.picture(current?.image_id);
    const points = this.rulerPoints;
    if (!current || !picture || !points || points.length < 2) return;
    const next = scaledToLength(current, picture.aspect, points[0], points[1], this.rulerMetres);
    if (!next) return;
    this.setBackground(next);
    this.rulerPoints = null;
    this.rulerMetres = 0;
    this.deps.refresh();
  }
}
