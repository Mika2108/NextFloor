// 2D editor: floors, rooms (rectangles and free shapes), snapping, undo, background template.

import { html, LitElement, nothing, svg, type PropertyValues, type TemplateResult } from "lit";
import { fetchImage, storeImage } from "../api.ts";
import { areaEntities, defaultHeight, entityName, kindOf } from "../devices.ts";
import { furnitureSymbol } from "./furniture2d.ts";
import { closeGaps, suggestedThickness } from "../geometry/gaps.ts";
import { keepInRoom, snapToWall } from "../geometry/snap.ts";
import { SHOW_PRESENCE } from "../flags.ts";
import { polygonBox } from "../roof-sections.ts";
import { clampField, faceAt, fieldFace, pointOnFace, roofFaces, turnGroundField, fieldCenter, wallFaces, windowAsField, onFace, onField, rayOnFace, type RoofFace } from "../solar.ts";
import type { SurfaceGrab, SurfaceRay } from "../viewer/viewer3d.ts";
import {
  sidelightLayout,
  type FreeWall,
} from "../model.ts";
import { furnishRoom, type PackageId } from "../packages.ts";
import { generateWalls, locateOpening, openingHost, pointOnRoomEdge, type Wall } from "../geometry/walls.ts";
import { formatNumber, languageReady, loadLanguage, translate, type I18nKey } from "../i18n.ts";
import { iconPath } from "../icons.ts";
import {
  bounds,
  centroid,
  ENERGY_DEVICES,
  type StartView,
  canLift,
  isFixed,
  isLamp,
  isAxisRect,
  step,
  type Direction,
  signedArea,
  OPENING_PRESETS,
  type OpeningPreset,
  resizeFurniture,
  roomTiles,
  pointInPolygon,
  polygonArea,
  uid,
  type Building,
  type Floor,
  type Furniture,
  type LampMount,
  type SolarField,
  type OutdoorArea,
  type Placement,
  type Opening,
  type OpeningType,
  type Room,
  type Vec2,
  openingStyle,
  isFrontDoor,
} from "../model.ts";
import { controls, tokens } from "../styles.ts";
import { renderFavorites, renderPresence, renderStartView } from "./editor/forms/house.ts";
import { BackupService } from "./editor/backup.ts";
import { renderBackup } from "./editor/forms/backup.ts";
import { renderSettings, type SettingsActions } from "./editor/forms/settings.ts";
import { numberField } from "./editor/fields.ts";
import { renderEnergyBalance, renderEnergyChecklist, renderEnergyDevices, renderEnergyTeaser, renderHelpLinks, type EnergyActions } from "./editor/forms/energy.ts";
import { energyMarkersLayer, headroomLayer, roofSectionsLayer, roofWindowsLayer, solarLayer } from "./editor/canvas/roof-layers.ts";
import type { CanvasContext } from "./editor/canvas/context.ts";
import { backgroundLayer } from "./editor/canvas/background.ts";
import { BackgroundTool, readPictureInBrowser } from "./editor/background-tool.ts";
import { renderBackgroundForm } from "./editor/forms/background.ts";
import { dragRotation, pictureCentre, pictureLocal } from "./editor/ops/background.ts";
import { renderFreeWallForm, renderMeasureForm, renderOutdoorForm, type FreeWallActions, type MeasureActions, type MeasureState, type OutdoorActions } from "./editor/forms/outdoor.ts";
import { outdoorRectangleAfter } from "./editor/ops/items.ts";
import { renderDeviceList, renderRoomClimate, type DeviceListActions } from "./editor/forms/device-list.ts";
import { LibraryState, renderLibrary, renderPreview, type LibraryActions } from "./editor/forms/library.ts";
import { renderDeviceForm, type DeviceActions } from "./editor/forms/device.ts";
import { renderFurnitureForm, type FurnitureActions } from "./editor/forms/furniture.ts";
import { renderOpeningForm, type OpeningActions } from "./editor/forms/opening.ts";
import { renderRoofPanel } from "./editor/forms/roof.ts";
import type { RoofPanelDeps } from "./editor/forms/roof-parts.ts";
import { renderSolarForm, renderSolarList } from "./editor/forms/solar.ts";
import type { EditorHost } from "./editor/host.ts";
import { RoofController } from "./editor/roof-controller.ts";
import { importEnergyPrefs } from "./editor/ops/energy-import.ts";
import { newEnergyDevice } from "./editor/ops/energy-devices.ts";
import { EditHistory } from "./editor/history.ts";
import { copyOfFurniture, copyOfOutdoorArea, deviceForFurniture, furnitureForDevice, newFloorOpening, newFreeWall, newFurniture, newOutdoorArea, offsetOnEdge, openingKindPatch, parkingSpotFor, placeInRoom, removeDevice, roomCentre, turnedBy } from "./editor/ops/items.ts";
import { NO_CHANGE, NOTHING_TO_MOVE, nudge, type NudgeTarget } from "./editor/ops/nudge.ts";
import { areaChoice, copyOfRoom, cornerMoved, evenCeilingLights, newRoom, rectangleAfter, removeCorner, removeRoom, type RectField } from "./editor/ops/rooms.ts";
import { translate as moveScope, turnQuarterClockwise, type Scope } from "./editor/ops/transform.ts";
import { Selection, type ItemKind } from "./editor/selection.ts";
import { SideState } from "./editor/side-state.ts";
import { renderFloors, type FloorActions } from "./editor/forms/floor.ts";
import { renderRoomForm, renderRoomList, type RoomActions } from "./editor/forms/room.ts";
import { floorsSwapped, floorsWith, newFloorFor, unplacedAreas } from "./editor/ops/floors.ts";
import { spotItems, suggestedSpots } from "./editor/ops/spots.ts";
import { editorStyles } from "./editor/styles.ts";
import "./entity-picker.ts";
import type { HassFloor, HomeAssistant } from "../types.ts";
import type { WallMode } from "../viewer/viewer3d.ts";
import { furnitureName } from "../furniture-names.ts";
import { mountBase, setPacks, type FurniturePack } from "../packs.ts";

/** Items that can be fixed against moving. */
type FixKind = "room" | "opening" | "furniture" | "device" | "wall" | "outdoor";

type Tool = "select" | "rect" | "polygon" | "measure" | "opening" | "furniture" | "outdoor" | "hole" | "wall" | "roof" | "energy";

type Drag =
  | { kind: "pan"; last: [number, number] }
  | { kind: "vertex"; roomId: string; index: number; base: Building; moved: boolean }
  | { kind: "device"; entityId: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "opening"; id: string; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "furniture"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "rotate"; id: string; base: Building; moved: boolean }
  | { kind: "aim"; entityId: string; base: Building; moved: boolean }
  | { kind: "resize"; id: string; corner: [1 | -1, 1 | -1]; base: Building; moved: boolean }
  | { kind: "room"; roomId: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "rect"; start: Vec2; end: Vec2; outdoor?: boolean; hole?: boolean; roof?: boolean }
  | { kind: "roofmove"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "solarturn"; id: string; base: Building; moved: boolean }
  | { kind: "solarmove"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean; grab: { du: number; ds: number } | null; win?: boolean }
  | { kind: "outvertex"; id: string; index: number; base: Building; moved: boolean }
  | { kind: "roofcorner"; id: string; corner: [0 | 1, 0 | 1]; base: Building; moved: boolean }
  | { kind: "roofvertex"; id: string; index: number; base: Building; moved: boolean }
  | { kind: "bgmove"; start: Vec2; bx: number; bz: number; base: Building; moved: boolean }
  | { kind: "bgscale"; base: Building; moved: boolean }
  | { kind: "bgrotate"; base: Building; moved: boolean; start: number; rot: number }
  | { kind: "freewall"; start: Vec2; end: Vec2 }
  | { kind: "wallmove"; id: string; end: "a" | "b" | null; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "outdoor"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "tap"; startScreen: [number, number]; last: [number, number]; panning: boolean };

interface Guides {
  point?: Vec2;
  x?: number;
  z?: number;
}

/** Drags that change the document live (restored when cancelled, recorded in the history when done). */
const EDIT_DRAGS = new Set(["vertex", "room", "device", "opening", "furniture", "rotate", "resize", "outdoor", "roofmove", "roofcorner", "roofvertex", "outvertex", "solarmove", "solarturn", "bgmove", "bgscale", "bgrotate"]);

const SNAP_PX = 10;
const round = (v: number) => Math.round(v * 1000) / 1000;

/** Arrow keys as plan directions (x right, z down). */
const ARROWS: Record<string, [number, number]> = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };

export class NfEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    narrow: { type: Boolean },
    packs: { attribute: false },
    _doc: { state: true },
    _doc3d: { state: true },
    _split: { state: true },
    _splitRatio: { state: true },
    _wall3d: { state: true },
    _sidePinned: { state: true },
    _sideOpen: { state: true },
    _floorId: { state: true },
    _energyNote: { state: true },
    _ctx: { state: true },
    _fixedHint: { state: true },
    _openingPreset: { state: true },
    _measureLen: { state: true },
    _rectSize: { state: true },
    _tool: { state: true },
    _draft: { state: true },
    _cursor: { state: true },
    _guides: { state: true },
    _view: { state: true },
    _size: { state: true },
    _canUndo: { state: true },
    _canRedo: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building;
  declare narrow: boolean;
  /** Imported furniture packs (from the panel's controller). */
  declare packs: FurniturePack[] | undefined;
  private declare _doc: Building;
  /** The draft as the 3D pane shows it (follows _doc with a short delay, so drags stay smooth). */
  private declare _doc3d: Building;
  private doc3dTimer: ReturnType<typeof setTimeout> | undefined;
  /** The live 3D pane next to the plan (remembered per browser). */
  private declare _split: boolean;
  /** Share of the width the plan takes next to the 3D pane (0.2 … 0.8). */
  private declare _splitRatio: number;
  /** Walls in the 3D pane: full height ("auto") or cut at the cut height (shows wall units and shelves). */
  private declare _wall3d: WallMode;
  /** Sidebar beside the 3D pane: pinned open always, or folded to a strip while nothing is selected. */
  private declare _sidePinned: boolean;
  private declare _sideOpen: boolean;
  private declare _floorId: string | null;
  /** What the import from the energy dashboard did (shown under its button). */
  private declare _energyNote: string | null;
  /** Open context menu (right-click, long press) at a plan point, for one item. */
  private declare _ctx: { x: number; y: number; kind: FixKind; id: string } | null;
  /** A drag on a fixed item was turned into panning: the hint line says why. */
  private declare _fixedHint: boolean;
  private fixedPan = false;
  /** Frame the 3D half again after the next render (the roof tool shows the whole house). */
  private reframe3d = false;
  private pressTimer = 0;
  private pressStart: [number, number] | null = null;
  /** Kind of opening the opening tool places (the last one chosen). */
  private declare _openingPreset: OpeningPreset;
  /** Length typed for the next wall when drawing by measure, and the size for "rectangle by size". */
  private declare _measureLen: number;
  private declare _rectSize: [number, number];
  private declare _tool: Tool;
  private declare _draft: Vec2[];
  private declare _cursor: Vec2 | null;
  private declare _guides: Guides;
  private declare _view: { scale: number; ox: number; oy: number };
  private declare _size: { w: number; h: number };
  private declare _canUndo: boolean;
  private declare _canRedo: boolean;

  private readonly history = new EditHistory<Building>(100);
  /** The furniture library's search, open sections and preview. */
  private readonly lib = new LibraryState(() => this.requestUpdate());
  /** State of the floor and room forms in the side panel. */
  private readonly side = new SideState(() => this.requestUpdate());
  /** What is selected in the plan. */
  private readonly sel = new Selection(() => this.requestUpdate());
  /** What the form modules in editor/forms see of this editor. */
  private readonly host: EditorHost = this.makeHost();
  private readonly backup: BackupService = this.makeBackup();
  /** The roof tool: its selection and what it adds, changes and removes. */
  private readonly roof: RoofController = this.makeRoof();
  /** The picture behind the plan, and its calibration. */
  private readonly bg: BackgroundTool = this.makeBackground();
  private readonly settingsActions: SettingsActions = {
    useRoofSections: () => {
      this.roof.useSections();
      this._tool = "roof";
    },
  };
  private drag: Drag | null = null;
  private pointers = new Map<number, [number, number]>();
  private pinch: { dist: number; mid: [number, number] } | null = null;
  private fitted = false;
  private resizeObserver?: ResizeObserver;

  constructor() {
    super();
    this.narrow = false;
    this._floorId = null;
    this.roof.sectionId = null;
    this.roof.solarId = null;
    this.roof.picking = false;
    this.roof.windowId = null;
    this._energyNote = null;
    this._openingPreset = "door";
    let split = false;
    try {
      split = localStorage.getItem("nextfloor.editor3d") === "1";
    } catch {
      // no storage
    }
    this._split = split;
    this._splitRatio = 0.55;
    try {
      const saved = Number(localStorage.getItem("nextfloor.editorSplit"));
      if (saved >= 20 && saved <= 80) this._splitRatio = saved / 100;
    } catch {
      /* no storage */
    }
    this._wall3d = "cut";
    this._doc3d = this._doc;
    this._sideOpen = false;
    let pinned = true;
    try {
      pinned = localStorage.getItem("nextfloor.sidePinned") !== "0";
    } catch {
      // no storage
    }
    this._sidePinned = pinned;
    this._measureLen = 3;
    this._rectSize = [4, 3];
    this._tool = "select";
    this._draft = [];
    this._cursor = null;
    this._guides = {};
    this._view = { scale: 50, ox: 40, oy: 40 };
    this._size = { w: 800, h: 600 };
    this._canUndo = false;
    this._canRedo = false;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private measureState(): MeasureState {
    return { draft: this._draft, length: this._measureLen, rectSize: this._rectSize };
  }

  private measureActions(): MeasureActions {
    return {
      setLength: (metres) => (this._measureLen = metres),
      step: (direction) => this.measureStep(direction),
      close: () => this.closeDraft(),
      undo: () => (this._draft = this._draft.slice(0, -1)),
      setRectSize: (size) => (this._rectSize = size),
      addRectangle: () => this.rectBySize(),
    };
  }

  private freeWallActions(): FreeWallActions {
    return { update: (patch) => this.updateFreeWall(patch), remove: () => this.deleteFreeWall(), lockButton: this.fixButton("wall", this.sel.wall ?? "") };
  }

  private outdoorActions(): OutdoorActions {
    return {
      update: (patch) => this.updateOutdoor(patch),
      setRectangle: (field, value) => {
        const area = this.outdoorArea;
        if (area) this.updateOutdoor({ points: outdoorRectangleAfter(area, field, value) });
      },
      duplicate: () => this.duplicateOutdoor(),
      remove: () => this.deleteOutdoor(),
      lockButton: this.fixButton("outdoor", this.sel.outdoor ?? ""),
    };
  }

  private libraryActions(): LibraryActions {
    return {
      add: (type) => this.addFurniture(type),
      openExtensions: () => this.dispatchEvent(new CustomEvent("open-extensions", { bubbles: true, composed: true })),
      packs: this.packs ?? [],
    };
  }

  private deviceActions(): DeviceActions {
    return {
      update: (patch) => this.updateDevice(patch),
      centre: () => this.centreDevice(),
      remove: () => {
        this.removeDevice(this.sel.device ?? "");
        this.sel.device = null;
      },
      asFurniture: (placed, type) => this.deviceToFurniture(placed, type),
      packs: this.packs ?? [],
      lockButton: this.fixButton("device", this.sel.device ?? ""),
    };
  }

  private deviceListActions(): DeviceListActions {
    return {
      select: (id) => this.selectItem("device", id),
      place: (ids) => this.placeDevices(ids),
      remove: (id) => this.removeDevice(id),
      patchRoom: (patch) => this.updateRoom(patch),
      spreadLights: (room) => this.spreadCeilingLights(room),
      confirm: (text) => confirm(text),
    };
  }

  private furnitureActions(): FurnitureActions {
    return {
      update: (patch) => this.updateFurniture(patch),
      rotate: (delta) => this.rotateFurniture(delta),
      duplicate: () => this.duplicateFurniture(),
      remove: () => this.deleteFurniture(),
      toDevice: (item) => this.furnitureToDevice(item),
      toSpot: (item) => this.vehicleToSpot(item),
      packs: this.packs ?? [],
      lockButton: this.fixButton("furniture", this.sel.furniture ?? ""),
    };
  }

  private openingActions(): OpeningActions {
    return {
      update: (patch) => this.updateOpening(patch),
      setPreset: (opening, preset) => this.setOpeningPreset(opening, preset),
      remove: () => this.deleteOpening(),
      isExterior: (opening) => this.openingIsExterior(opening),
      lockButton: this.fixButton("opening", this.sel.opening ?? ""),
    };
  }

  private makeBackground(): BackgroundTool {
    const editor = this;
    return new BackgroundTool({
      host: this.host,
      refresh: () => editor.requestUpdate(),
      api: { fetchImage, storeImage },
      readPicture: readPictureInBrowser,
      useSelectTool: () => (editor._tool = "select"),
      currentTool: () => editor._tool,
    });
  }

  private makeRoof(): RoofController {
    const editor = this;
    return new RoofController({
      host: this.host,
      floorId: () => editor._floorId,
      setFloorId: (id) => (editor._floorId = id),
      confirm: (text) => confirm(text),
      refresh: () => editor.requestUpdate(),
    });
  }

  /** What the layers drawn over the plan need. */
  private canvasContext(): CanvasContext {
    return { host: this.host, toScreen: (p) => this.toScreen(p), scale: this._view.scale, floorId: this._floorId };
  }

  /** What the roof and solar forms need. */
  private roofDeps(): RoofPanelDeps {
    return { host: this.host, roof: this.roof, floorId: this._floorId, setFloorId: (id) => (this._floorId = id), toggleLockPlan: () => this.toggleLockPlan() };
  }

  private makeBackup(): BackupService {
    const editor = this;
    return new BackupService({
      get hass() {
        return editor.hass;
      },
      get doc() {
        return editor._doc;
      },
      t: (key, vars) => editor.t(key, vars),
      adopt: (building) => {
        editor.setDoc(building);
        editor._floorId = building.floors[0]?.id ?? null;
        editor.selectItem("room", null);
        editor.fit();
      },
      say: (text) => (editor.side.notice = text),
      refresh: () => editor.requestUpdate(),
      packsChanged: () => editor.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true })),
    });
  }

  private makeHost(): EditorHost {
    const editor = this;
    return {
      get hass() {
        return editor.hass;
      },
      get doc() {
        return editor._doc;
      },
      get floor() {
        return editor.floor;
      },
      get admin() {
        return editor.isAdmin;
      },
      t: (key, vars) => editor.t(key, vars),
      change: (mutate) => editor.change(mutate),
      replace: (next) => editor.setDoc(next),
    };
  }

  // ------------------------------------------------------------------ lifecycle

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKey);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.onKey);
    this.resizeObserver?.disconnect();
  }

  protected willUpdate(changed: PropertyValues): void {
    // this bundle keeps its own pack registry – and its own language table, so it fetches the language itself
    if (changed.has("packs")) setPacks(this.packs ?? []);
    if (changed.has("hass") && this.hass && !languageReady(this.hass.language)) void loadLanguage(this.hass.language).then(() => this.requestUpdate());
    if (changed.has("_doc") && this._split) this.queue3d();
    if (changed.has("_split") && this._split) this._doc3d = this._doc;
    if (changed.has("_tool") && this.houseTool && !this._split && !this.narrow) this._split = true;
    // entering or leaving the roof tool: the 3D half frames the whole house (or the floor) again
    if (changed.has("_tool") && (this.houseTool || changed.get("_tool") === "roof" || changed.get("_tool") === "energy")) this.reframe3d = true;
    if (changed.has("building") && this.building !== this._doc) {
      this._doc = this.building;
      this._doc3d = this.building;
      if (!this._doc.floors.some((f) => f.id === this._floorId)) this._floorId = this._doc.floors[0]?.id ?? null;
      if (!this.floor?.rooms.some((r) => r.id === this.sel.room)) this.sel.room = null;
    }
  }

  protected firstUpdated(): void {
    const stage = this.renderRoot.querySelector(".nf-canvas-wrap") as HTMLElement;
    this.resizeObserver = new ResizeObserver(() => {
      this._size = { w: stage.clientWidth, h: stage.clientHeight };
      if (!this.fitted && this._size.w > 0) {
        this.fitted = true;
        this.fit();
      }
    });
    this.resizeObserver.observe(stage);
  }

  /** Hand the draft to the 3D pane a moment after the last change (a drag changes it many times a second). */
  private queue3d(): void {
    clearTimeout(this.doc3dTimer);
    this.doc3dTimer = setTimeout(() => (this._doc3d = this._doc), 150);
  }

  /** Dragging the divider between the plan and the 3D pane changes their share of the width. */
  private onSplitDown(e: PointerEvent): void {
    const pair = (e.currentTarget as HTMLElement).parentElement!;
    const handle = e.currentTarget as HTMLElement;
    handle.setPointerCapture(e.pointerId);
    const rect = pair.getBoundingClientRect();
    const move = (ev: PointerEvent) => {
      this._splitRatio = Math.min(0.8, Math.max(0.2, (ev.clientX - rect.left) / rect.width));
    };
    const up = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", up);
      try {
        localStorage.setItem("nextfloor.editorSplit", String(Math.round(this._splitRatio * 100)));
      } catch {
        /* no storage */
      }
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
    handle.addEventListener("pointercancel", up);
    e.preventDefault();
  }

  private toggleSplit(): void {
    this._split = !this._split;
    try {
      localStorage.setItem("nextfloor.editor3d", this._split ? "1" : "0");
    } catch {
      // no storage: the choice lasts for this page
    }
  }

  /** Furnishing in the 3D pane: the item moved there is moved in the draft (undoable, saved with the plan). */
  private onFurnitureMoved3d(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    const wall = this._doc.settings.wall_interior;
    this.change((doc) => {
      for (const floor of doc.floors) {
        const f = floor.furniture.find((m) => m.id === id);
        if (!f) continue;
        // the item stays in its room (no dragging through walls)
        const [nx, nz] = keepInRoom(floor, f.x, f.z, x, z);
        Object.assign(f, { x: nx, z: nz });
        const snap = snapToWall(floor, f, wall);
        if (snap) Object.assign(f, snap);
      }
    });
  }

  private onDeviceMoved3d(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    this.change((doc) => {
      for (const floor of doc.floors) {
        const p = floor.placements.find((d) => d.entity_id === id);
        if (!p) continue;
        const [nx, nz] = keepInRoom(floor, p.x, p.z, x, z);
        Object.assign(p, { x: nx, z: nz });
      }
    });
  }

  /** Bar under the 3D pane: turn or delete the selected item or device (as when furnishing in the panel). */
  private render3dBar() {
    if (!this.isAdmin) return nothing;
    const f = this.furnitureItem;
    const d = this.device;
    if (f) {
      const wallItem = canLift(f);
      const num = (key: "w" | "d" | "h", label: string, min = 0.05) => html`<label class="nf-3d-size" title=${this.t(`size_${key}` as I18nKey)}
        >${label}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${min}
          .value=${String(Math.round(f[key] * 100) / 100)}
          @change=${(e: Event) => {
            const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
            if (Number.isFinite(v) && v >= min) this.updateFurniture({ [key]: Math.round(v * 1000) / 1000 });
          }}
        />
      </label>`;
      return html`<div class="nf-3d-bar">
        <span>${furnitureName(this.hass, f.type)}</span>
        ${num("w", this.t("size_short_w"))} ${num("d", this.t("size_short_d"))} ${num("h", this.t("size_short_h"))}
        ${wallItem
          ? html`<label class="nf-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((f.mount_y ?? mountBase(this.floor!, f)) * 100) / 100)}
                @change=${(e: Event) => {
                  const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
                  if (Number.isFinite(v) && v >= 0) this.updateFurniture({ mount_y: Math.round(v * 1000) / 1000 });
                }}
              />
            </label>`
          : nothing}
        <button class="nf-chip" @click=${() => this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nf-chip" @click=${() => this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture", f.id)}
        <button class="nf-chip nf-danger-chip" @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`;
    }
    if (d) {
      const kind = kindOf(d.entity_id);
      const light = kind === "light";
      const auto = kind ? defaultHeight(kind, this.floor?.height ?? 2.5, light ? (d.mount ?? "ceiling") : null) : 1;
      return html`<div class="nf-3d-bar">
        <span>${entityName(this.hass, d.entity_id)}</span>
        ${light
          ? html`<select class="nf-3d-select" title=${this.t("lamp_mount")} @change=${(e: Event) => this.updateDevice({ mount: (e.target as HTMLSelectElement).value as LampMount, y: null })}>
              ${(["ceiling", "floor", "table", "wall"] as const).map((m) => html`<option value=${m} ?selected=${m === (d.mount ?? "ceiling")}>${this.t(`lamp_${m}`)}</option>`)}
            </select>`
          : nothing}
        <label class="nf-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((d.y ?? auto) * 100) / 100)}
            @change=${(e: Event) => {
              const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
              if (Number.isFinite(v) && v >= 0) this.updateDevice({ y: Math.round(v * 1000) / 1000 });
            }}
          />
        </label>
        <button class="nf-chip" @click=${() => this.updateDevice({ rotation: ((((d.rotation ?? 0) - 45) % 360) + 360) % 360 })}>↺ 45°</button>
        <button class="nf-chip" @click=${() => this.updateDevice({ rotation: (((d.rotation ?? 0) + 45) % 360) % 360 })}>↻ 45°</button>
        ${this.fixButton("device", d.entity_id)}
        <button class="nf-chip nf-danger-chip" @click=${() => this.deleteItem("device", d.entity_id)}>${this.t("delete")}</button>
      </div>`;
    }
    return nothing;
  }

  /** A solar field or roof window grabbed in the 3D pane: its grab point on its face, and the plan before. */
  private grab3d: { id: string; win: boolean; du: number; ds: number; base: Building; moved: boolean } | null = null;

  /** Moves solar fields (energy tool) and roof windows (roof tool) in the 3D pane, along the faces under the pointer. */
  private surfaceGrabber: SurfaceGrab = {
    start: (ray) => this.grab3dStart(ray),
    move: (ray) => this.grab3dMove(ray),
    end: () => {
      const g = this.grab3d;
      this.grab3d = null;
      if (g?.moved) this.pushHistory(g.base);
    },
  };

  private grab3dStart(ray: SurfaceRay): boolean {
    const doc = this._doc;
    const roof = roofFaces(doc);
    let best: { id: string; win: boolean; t: number; du: number; ds: number } | null = null;
    const consider = (id: string, win: boolean, face: RoofFace | null, field: SolarField, locked = false) => {
      if (!face || locked) return;
      const hit = rayOnFace(face, ray.o, ray.d);
      if (!hit || !onField(face, field, hit.u, hit.s) || (best && best.t <= hit.t)) return;
      best = { id, win, t: hit.t, du: hit.u - field.u, ds: hit.s - field.v };
    };
    if (this._tool === "energy") for (const f of doc.settings.roof.solar ?? []) consider(f.id, false, fieldFace(doc, f, roof), f, !!f.locked);
    if (this._tool === "roof") for (const w of doc.settings.roof.windows ?? []) consider(w.id, true, roof.find((x) => x.key === w.face) ?? null, windowAsField(w), !!w.locked);
    if (!best) return false;
    const b = best as { id: string; win: boolean; du: number; ds: number };
    this.grab3d = { id: b.id, win: b.win, du: b.du, ds: b.ds, base: doc, moved: false };
    if (b.win) this.roof.windowId = b.id;
    else this.roof.selectField(b.id);
    return true;
  }

  private grab3dMove(ray: SurfaceRay): void {
    const g = this.grab3d;
    if (!g) return;
    const doc = g.base;
    const winSrc = g.win ? doc.settings.roof.windows?.find((x) => x.id === g.id) : undefined;
    const src = g.win ? (winSrc ? windowAsField(winSrc) : undefined) : doc.settings.roof.solar?.find((x) => x.id === g.id);
    if (!src) return;
    const own = fieldFace(doc, src);
    // free-standing fields stay on their own level; the others go to the face nearest under the pointer
    const faces = own?.unbounded ? [own] : g.win ? roofFaces(doc) : [...roofFaces(doc), ...wallFaces(doc)];
    let best: { face: RoofFace; t: number; u: number; s: number } | null = null;
    for (const face of faces) {
      const hit = rayOnFace(face, ray.o, ray.d);
      if (hit && onFace(face, hit.u, hit.s) && (!best || hit.t < best.t)) best = { face, ...hit };
    }
    if (!best) return;
    const face = best.face;
    const step = 0.05;
    const snapTo = (v: number) => round(Math.round(v / step) * step);
    const kept = clampField(face, { ...src, face: face.key, u: snapTo(best.u - g.du), v: snapTo(best.s - g.ds), tilt: face.flat ? (src.tilt ?? 15) : src.tilt });
    g.moved = true;
    this.change(
      (d) => {
        if (g.win) {
          const w = d.settings.roof.windows?.find((x) => x.id === g.id);
          if (w) Object.assign(w, { face: face.key, ...kept });
          return;
        }
        const f = d.settings.roof.solar?.find((x) => x.id === g.id);
        if (f) Object.assign(f, { face: face.key, ...kept }, face.flat && f.tilt == null ? { tilt: 15 } : {});
      },
      g.base,
      false,
    );
  }

  /** Tools that work on the whole house (roof, solar): the 3D pane shows all floors with the roof. */
  private get houseTool(): boolean {
    return this._tool === "roof" || this._tool === "energy";
  }

  private render3d() {
    return html`<div class="nf-editor-3d">
      ${this.houseTool
        ? nothing
        : html`<div class="nf-seg nf-3d-walls">
            <button aria-pressed=${this._wall3d === "auto"} @click=${() => (this._wall3d = "auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d === "cut"} @click=${() => (this._wall3d = "cut")}>${this.t("walls_cut")}</button>
          </div>`}
      ${this.render3dBar()}
      <nf-view3d
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this.houseTool ? null : this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool ? "auto" : this._wall3d}
        .explode=${false}
        .keepRoof=${this._tool === "roof" || this._tool === "energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${false}
        .holograms=${this._tool === "energy" ? true : null}
        .flows=${false}
        ?furnish=${this.isAdmin}
        .surfaceGrab=${this.isAdmin && this.houseTool ? this.surfaceGrabber : null}
        .furnishTypes=${this._tool === "energy" ? ENERGY_DEVICES : this._tool === "roof" ? [] : null}
        .selectedFurniture=${this.sel.furniture}
        .selectedDevice=${this.sel.device}
        .quality=${"auto"}
        .floorThumbs=${false}
        .roomLabels=${true}
        .floorStack=${this.houseTool ? "stacked" : "single"}
        .panelOpen=${false}
        .alerts=${false}
        .scenes=${false}
        @furniture-select=${(e: CustomEvent<{ id: string | null }>) => {
          if (e.detail.id) this.selectFrom3d("furniture", e.detail.id);
          else if (this.sel.furniture) this.selectFrom3d("furniture", null);
        }}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${(e: CustomEvent<{ id: string | null }>) => {
          if (e.detail.id) this.selectFrom3d("device", e.detail.id);
          else if (this.sel.device) this.selectFrom3d("device", null);
        }}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${(e: CustomEvent<{ floorId: string | null }>) => {
          if (e.detail.floorId) this._floorId = e.detail.floorId;
          this._sideOpen = false;
        }}
        @room-tap=${(e: CustomEvent<{ floorId: string; roomId: string | null }>) => {
          if (e.detail.floorId) this._floorId = e.detail.floorId;
          if (e.detail.roomId) this.selectFrom3d("room", e.detail.roomId);
          else this._sideOpen = false;
        }}
      ></nf-view3d>
    </div>`;
  }

  protected updated(): void {
    // ?selected only sets an option's selectedness until the user picks one in that select; after that a
    // reused <select> (another room, another item) would keep showing the old pick: follow the attribute
    for (const option of this.renderRoot.querySelectorAll<HTMLOptionElement>("select option[selected]")) {
      if (!option.selected) option.selected = true;
    }
    if (this.reframe3d) {
      this.reframe3d = false;
      // after the 3D half got its new floor (and built the roof): frame it
      setTimeout(() => (this.renderRoot.querySelector("nf-view3d") as (HTMLElement & { resetView(): void }) | null)?.resetView(), 250);
    }
    const background = this.floor?.background;
    if (background) this.bg.ensureLoaded(background.image_id);
    // thumbnails of the selected screen's stored pictures
    if (this.furnitureItem?.pictures) {
      // thumbnails of every stored picture in the plan (they can be reused on other screens)
      for (const id of this.storedPictures()) this.bg.ensureLoaded(id);
    }
  }

  // ------------------------------------------------------------------ document helpers

  private get floor(): Floor | undefined {
    return this._doc?.floors.find((f) => f.id === this._floorId);
  }

  private get room(): Room | undefined {
    return this.floor?.rooms.find((r) => r.id === this.sel.room);
  }

  private get isAdmin(): boolean {
    return this.hass?.user?.is_admin ?? true;
  }

  /** Replace the document; `base` (the state before the change) goes into the undo history. */
  private setDoc(next: Building, base: Building | null = this._doc): void {
    if (base) this.history.record(base);
    this._doc = next;
    this.syncHistoryButtons();
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: next }, bubbles: true, composed: true }));
  }

  /** Apply a change to a copy of the document (or of `base`) and store it. */
  private change(mutate: (doc: Building, floor: Floor) => void, base: Building = this._doc, history = true): void {
    const next = structuredClone(base);
    const floor = next.floors.find((f) => f.id === this._floorId);
    if (!floor && this._floorId) return;
    mutate(next, floor as Floor);
    this.setDoc(next, history ? base : null);
  }

  private syncHistoryButtons(): void {
    this._canUndo = this.history.canUndo;
    this._canRedo = this.history.canRedo;
  }

  private undo(): void {
    const before = this.history.undo(this._doc);
    if (before) this.restore(before);
  }

  private redo(): void {
    const after = this.history.redo(this._doc);
    if (after) this.restore(after);
  }

  private restore(doc: Building): void {
    this._doc = doc;
    if (!doc.floors.some((f) => f.id === this._floorId)) this._floorId = doc.floors[0]?.id ?? null;
    if (!this.floor?.rooms.some((r) => r.id === this.sel.room)) this.sel.room = null;
    this.sel.corner = null;
    this.syncHistoryButtons();
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: doc }, bubbles: true, composed: true }));
  }

  // ------------------------------------------------------------------ view transform

  private toScreen(p: Vec2): [number, number] {
    const { scale, ox, oy } = this._view;
    return [p[0] * scale + ox, p[1] * scale + oy];
  }

  private toWorld(sx: number, sy: number): Vec2 {
    const { scale, ox, oy } = this._view;
    return [(sx - ox) / scale, (sy - oy) / scale];
  }

  private localPoint(e: PointerEvent | WheelEvent): [number, number] {
    const rect = (this.renderRoot.querySelector("svg") as SVGSVGElement).getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  }

  private fit(): void {
    const pts = this.floor?.rooms.flatMap((r) => r.points) ?? [];
    const b = pts.length ? bounds(pts) : { x0: 0, z0: 0, x1: 10, z1: 8 };
    const margin = 1.5;
    const w = b.x1 - b.x0 + 2 * margin;
    const h = b.z1 - b.z0 + 2 * margin;
    const scale = Math.max(8, Math.min(400, Math.min(this._size.w / w, this._size.h / h)));
    this._view = {
      scale,
      ox: this._size.w / 2 - ((b.x0 + b.x1) / 2) * scale,
      oy: this._size.h / 2 - ((b.z0 + b.z1) / 2) * scale,
    };
  }

  /** Bring a plan point to the middle of the plan, zoomed in enough to see a small item there. */
  private showPoint(x: number, z: number): void {
    const scale = Math.max(this._view.scale, 70);
    this._view = { scale, ox: this._size.w / 2 - x * scale, oy: this._size.h / 2 - z * scale };
  }

  private zoomAt(factor: number, sx: number, sy: number): void {
    const { scale, ox, oy } = this._view;
    const next = Math.max(8, Math.min(600, scale * factor));
    const k = next / scale;
    this._view = { scale: next, ox: sx - (sx - ox) * k, oy: sy - (sy - oy) * k };
  }

  // ------------------------------------------------------------------ snapping

  private snap(p: Vec2, skip?: { roomId: string; index?: number }, free = false): Vec2 {
    this._guides = {};
    if (free) return p;
    const thr = SNAP_PX / this._view.scale;
    const rooms = this.floor?.rooms ?? [];
    const others: Vec2[] = [];
    for (const r of rooms) {
      r.points.forEach((q, i) => {
        if (skip && r.id === skip.roomId && (skip.index === undefined || skip.index === i)) return;
        others.push(q);
      });
    }
    // 1. corners of rooms
    let best: Vec2 | null = null;
    let bestD = thr;
    for (const q of others) {
      const d = Math.hypot(q[0] - p[0], q[1] - p[1]);
      if (d < bestD) {
        bestD = d;
        best = q;
      }
    }
    if (best) {
      this._guides = { point: best };
      return [best[0], best[1]];
    }
    // 2. edges of other rooms (so walls can meet in a T)
    for (const r of rooms) {
      if (skip && r.id === skip.roomId) continue;
      for (let i = 0; i < r.points.length; i++) {
        const a = r.points[i];
        const b = r.points[(i + 1) % r.points.length];
        const dx = b[0] - a[0];
        const dz = b[1] - a[1];
        const l2 = dx * dx + dz * dz;
        if (l2 < 1e-9) continue;
        const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2;
        if (t <= 0 || t >= 1) continue;
        const q: Vec2 = [a[0] + t * dx, a[1] + t * dz];
        const d = Math.hypot(q[0] - p[0], q[1] - p[1]);
        const g = this._doc.settings.grid;
        if (Math.abs(dz) < 1e-9) q[0] = Math.min(Math.max(Math.round(q[0] / g) * g, Math.min(a[0], b[0])), Math.max(a[0], b[0]));
        if (Math.abs(dx) < 1e-9) q[1] = Math.min(Math.max(Math.round(q[1] / g) * g, Math.min(a[1], b[1])), Math.max(a[1], b[1]));
        if (d < bestD) {
          bestD = d;
          best = q;
        }
      }
    }
    if (best) {
      this._guides = { point: best };
      return [round(best[0]), round(best[1])];
    }
    // 3. grid, with alignment to other corners per axis
    const g = this._doc.settings.grid;
    const out: Vec2 = [round(Math.round(p[0] / g) * g), round(Math.round(p[1] / g) * g)];
    let ax = thr;
    let az = thr;
    const guides: Guides = {};
    for (const q of others) {
      if (Math.abs(q[0] - p[0]) < ax) {
        ax = Math.abs(q[0] - p[0]);
        out[0] = q[0];
        guides.x = q[0];
      }
      if (Math.abs(q[1] - p[1]) < az) {
        az = Math.abs(q[1] - p[1]);
        out[1] = q[1];
        guides.z = q[1];
      }
    }
    this._guides = guides;
    return out;
  }

  // ------------------------------------------------------------------ pointer input

  private onPointerDown(e: PointerEvent): void {
    this._ctx = null;
    this._fixedHint = false;
    this.fixedPan = false;
    this.pointerDown(e);
    if (this.pointers.size !== 1) {
      clearTimeout(this.pressTimer);
      return;
    }
    this.guardFixed(this.localPoint(e));
    clearTimeout(this.pressTimer);
    this.pressStart = null;
    if (e.pointerType === "touch" && (this._tool === "select" || this._tool === "furniture")) {
      const at = this.localPoint(e);
      const target = e.target as Element;
      this.pressStart = at;
      this.pressTimer = window.setTimeout(() => {
        const d = this.drag;
        if (d && "moved" in d && d.moved) return;
        this.drag = null;
        this.openContext(target, at);
      }, 550);
    }
  }

  /** A drag that would move a fixed item pans the view instead (the item stays selected). */
  private guardFixed(local: [number, number]): void {
    const d = this.drag;
    if (!d) return;
    let target: [FixKind, string] | null = null;
    if (d.kind === "vertex" || d.kind === "room") target = ["room", d.roomId];
    else if (d.kind === "device" || d.kind === "aim") target = ["device", d.entityId];
    else if (d.kind === "opening") target = ["opening", d.id];
    else if (d.kind === "furniture" || d.kind === "rotate" || d.kind === "resize") target = ["furniture", d.id];
    else if (d.kind === "wallmove") target = ["wall", d.id];
    else if (d.kind === "outdoor") target = ["outdoor", d.id];
    if (!target || !this.isFixedItem(...target)) return;
    if ("moved" in d && d.moved && "base" in d) this.restoreLive(d.base);
    this.drag = { kind: "pan", last: local };
    this.fixedPan = true;
  }

  private pointerDown(e: PointerEvent): void {
    const svgEl = e.currentTarget as SVGSVGElement;
    svgEl.setPointerCapture(e.pointerId);
    const local = this.localPoint(e);
    this.pointers.set(e.pointerId, local);
    if (this.pointers.size === 2) {
      // second finger: cancel the current gesture and pinch instead
      if (this.drag && EDIT_DRAGS.has(this.drag.kind) && "moved" in this.drag && this.drag.moved && "base" in this.drag) this.restoreLive(this.drag.base);
      this.drag = null;
      this.pinch = this.pinchState();
      return;
    }
    if (this.pointers.size > 2) return;
    if (e.button === 1 || e.button === 2 || !this.floor) {
      this.drag = { kind: "pan", last: local };
      return;
    }
    const world = this.toWorld(...local);
    const target = e.target as Element;
    if (this.bg.level && this.isAdmin && this.floor?.background) {
      // straighten: the second tap turns the picture so the tapped wall runs exactly along x or z
      this.bg.tapLevel(world);
      return;
    }
    if (this.bg.handlesShown && this.floor.background && target.closest("[data-bg-rotate]")) {
      const bg = this.floor.background;
      const img = this.bg.picture(bg.image_id);
      const c = pictureCentre(bg, img?.aspect ?? 1);
      this.drag = { kind: "bgrotate", base: this._doc, moved: false, start: Math.atan2(world[1] - c[1], world[0] - c[0]), rot: bg.rotation ?? 0 };
      return;
    }
    if (this.bg.ruler && this.bg.ruler.length < 2 && this.isAdmin && this.floor?.background) {
      // the ruler: two taps on a stretch of known length in the picture
      this.bg.tapRuler(world);
      return;
    }
    if (this.bg.handlesShown && this.floor.background && !this.bg.edit && (target.closest("[data-bg-handle]") || target.closest("[data-bg]"))) {
      // the background section is open: the picture moves and scales like furniture
      const bg = this.floor.background;
      this.drag = target.closest("[data-bg-handle]")
        ? { kind: "bgscale", base: this._doc, moved: false }
        : { kind: "bgmove", start: world, bx: bg.x, bz: bg.z, base: this._doc, moved: false };
      return;
    }
    if (this.bg.edit && this.isAdmin && this.floor?.background) {
      // the background picture: its corner scales it, its body moves it; anything else ends the editing
      const bg = this.floor.background;
      if (target.closest("[data-bg-handle]")) {
        this.drag = { kind: "bgscale", base: this._doc, moved: false };
        return;
      }
      if (target.closest("[data-bg]")) {
        this.drag = { kind: "bgmove", start: world, bx: bg.x, bz: bg.z, base: this._doc, moved: false };
        return;
      }
      this.bg.edit = false;
    }
    if (this._tool === "wall") {
      const start = this.snap(world, undefined, e.altKey);
      this.drag = { kind: "freewall", start, end: start };
      return;
    }
    if (this._tool === "roof" || this._tool === "energy") {
      const corner = target.closest("[data-roof-corner]")?.getAttribute("data-roof-corner");
      const vertex = target.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex");
      const body = target.closest("[data-roof]")?.getAttribute("data-roof");
      const marker = this._tool === "energy" ? target.closest("[data-energy-device]")?.getAttribute("data-energy-device") : null;
      if (marker) {
        // an energy device by its marker (above solar fields on the roof): selected and moved like furniture
        this.roof.solarId = null;
        this.selectItem("furniture", marker);
        this.drag = this.isAdmin ? { kind: "furniture", id: marker, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
        return;
      }
      const solar = this._tool === "energy" ? target.closest("[data-solar]")?.getAttribute("data-solar") : null;
      const turn = this._tool === "energy" ? target.closest("[data-solar-turn]")?.getAttribute("data-solar-turn") : null;
      if (turn && this.isAdmin) {
        this.drag = { kind: "solarturn", id: turn, base: this._doc, moved: false };
        return;
      }
      if (solar) {
        const cell = target.closest("[data-cell]")?.getAttribute("data-cell");
        // pick mode on the selected field: a tap switches the module on or off
        if (this.roof.picking && solar === this.roof.solarId && cell && this.isAdmin) {
          this.roof.toggleCell(cell);
          this.drag = { kind: "pan", last: local };
          return;
        }
        // otherwise: select the field and move it, also onto another roof face
        if (solar !== this.roof.solarId) this.roof.picking = false;
        this.roof.solarId = solar;
        this.roof.sectionId = null;
        const field = this._doc.settings.roof.solar?.find((x) => x.id === solar);
        const face = field ? (fieldFace(this._doc, field) ?? undefined) : undefined;
        const hit = face ? this.faceHit(face, world) : null;
        const grab = field && hit ? { du: hit.u - field.u, ds: Number.isNaN(hit.s) ? 0 : hit.s - field.v } : null;
        // solar fields are fittings like furniture: the plan lock (rooms, walls, openings) does not hold them
        this.drag = this.isAdmin && !field?.locked ? { kind: "solarmove", id: solar, start: world, startScreen: local, base: this._doc, moved: false, grab } : { kind: "pan", last: local };
        return;
      }
      const win = this._tool === "roof" ? target.closest("[data-roofwin]")?.getAttribute("data-roofwin") : null;
      if (win) {
        this.roof.windowId = win;
        this.roof.sectionId = null;
        const w = this._doc.settings.roof.windows?.find((x) => x.id === win);
        const face = w ? roofFaces(this._doc).find((f) => f.key === w.face) : undefined;
        const hit = face ? pointOnFace(face, world) : null;
        const grab = w && hit ? { du: hit.u - w.u, ds: hit.s - w.v } : null;
        this.drag = this.isAdmin && !w?.locked ? { kind: "solarmove", id: win, start: world, startScreen: local, base: this._doc, moved: false, grab, win: true } : { kind: "pan", last: local };
        return;
      }
      if (this._tool === "roof") this.roof.windowId = null;
      const device = this._tool === "energy" ? target.closest(".nf-energy-item")?.getAttribute("data-furniture") : null;
      if (device) {
        // an energy device (inverter, battery, wallbox): selected and moved like furniture
        this.roof.solarId = null;
        this.selectItem("furniture", device);
        this.drag = this.isAdmin ? { kind: "furniture", id: device, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
        return;
      }
      if (this._tool === "energy") {
        // beside the fields the energy tool only pans the plan
        this.selectItem("furniture", null);
        this.roof.solarId = null;
        this.drag = { kind: "pan", last: local };
        return;
      }
      if (vertex && this.isAdmin) {
        const [id, idx] = vertex.split(":");
        this.drag = { kind: "roofvertex", id, index: Number(idx), base: this._doc, moved: false };
      } else if (corner && this.isAdmin) {
        const [id, cx, cz] = corner.split(":");
        this.drag = { kind: "roofcorner", id, corner: [cx === "1" ? 1 : 0, cz === "1" ? 1 : 0], base: this._doc, moved: false };
      } else if (body) {
        const fixed = this.roof.isFixed(this._doc.settings.roof.sections?.find((x) => x.id === body));
        if (fixed && this.roof.sectionId === body) this._fixedHint = true;
        this.roof.sectionId = body;
        this.drag = this.isAdmin && !fixed ? { kind: "roofmove", id: body, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      } else if (this.isAdmin) {
        this.roof.sectionId = null;
        const start = this.snap(world, undefined, e.altKey);
        this.drag = { kind: "rect", start, end: start, roof: true };
      } else this.drag = { kind: "pan", last: local };
      return;
    }
    if (this._tool === "rect" || this._tool === "outdoor" || this._tool === "hole") {
      const start = this.snap(world, undefined, e.altKey);
      this.drag = { kind: "rect", start, end: start, outdoor: this._tool === "outdoor", hole: this._tool === "hole" };
      return;
    }
    if (this._tool === "polygon" || this._tool === "measure") {
      this.drag = { kind: "tap", startScreen: local, last: local, panning: false };
      return;
    }
    if (this._tool === "opening") {
      if (!this.placeOpening(this._openingPreset, local)) this.drag = { kind: "pan", last: local };
      return;
    }
    const deviceEl = target.closest("[data-device]");
    if (deviceEl && this.isAdmin) {
      this.drag = { kind: "device", entityId: deviceEl.getAttribute("data-device")!, start: world, startScreen: local, base: this._doc, moved: false };
      return;
    }
    const openingEl = target.closest("[data-opening]");
    if (openingEl) {
      const id = openingEl.getAttribute("data-opening")!;
      this.selectItem("opening", id);
      this.drag = this.isAdmin ? { kind: "opening", id, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      return;
    }
    const resizeEl = target.closest("[data-resize]");
    if (resizeEl && this.isAdmin) {
      const [id, sx, sz] = resizeEl.getAttribute("data-resize")!.split(":");
      this.drag = { kind: "resize", id, corner: [sx === "1" ? 1 : -1, sz === "1" ? 1 : -1], base: this._doc, moved: false };
      return;
    }
    const rotateEl = target.closest("[data-rotate]");
    if (rotateEl && this.isAdmin) {
      this.drag = { kind: "rotate", id: rotateEl.getAttribute("data-rotate")!, base: this._doc, moved: false };
      return;
    }
    const aimEl = target.closest("[data-aim]");
    if (aimEl && this.isAdmin) {
      this.drag = { kind: "aim", entityId: aimEl.getAttribute("data-aim")!, base: this._doc, moved: false };
      return;
    }
    const furnitureEl = target.closest("[data-furniture]");
    if (furnitureEl && !target.closest("[data-vertex], [data-mid]")) {
      const id = furnitureEl.getAttribute("data-furniture")!;
      this.selectItem("furniture", id);
      this.drag = this.isAdmin ? { kind: "furniture", id, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      return;
    }
    const vertexEl = target.closest("[data-vertex]");
    const midEl = target.closest("[data-mid]");
    if (vertexEl && this.room && this.isAdmin) {
      this.sel.corner = Number(vertexEl.getAttribute("data-vertex"));
      this.drag = { kind: "vertex", roomId: this.room.id, index: this.sel.corner, base: this._doc, moved: false };
      return;
    }
    if (midEl && this.room && this.isAdmin) {
      const i = Number(midEl.getAttribute("data-mid"));
      const pts = this.room.points;
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      const mid: Vec2 = [round((a[0] + b[0]) / 2), round((a[1] + b[1]) / 2)];
      const base = this._doc;
      const roomId = this.room.id;
      // no history here: the pointer-up records the state before the insert
      this.change(
        (_, floor) => {
          const target = floor.rooms.find((r) => r.id === roomId)!;
          target.points.splice(i + 1, 0, mid);
          // both halves of the split edge keep its wall height
          if (target.wall_heights) target.wall_heights.splice(i + 1, 0, target.wall_heights[i] ?? null);
          if (target.wall_thickness) target.wall_thickness.splice(i + 1, 0, target.wall_thickness[i] ?? null);
          const first = Math.hypot(mid[0] - a[0], mid[1] - a[1]);
          for (const o of floor.openings) {
            if (o.room_id !== roomId || o.wall) continue;
            if (o.edge > i) o.edge += 1;
            else if (o.edge === i && o.offset > first) {
              o.edge = i + 1;
              o.offset = round(o.offset - first);
            }
          }
        },
        base,
        false,
      );
      this.sel.corner = i + 1;
      this.drag = { kind: "vertex", roomId, index: i + 1, base, moved: true };
      return;
    }
    const wallEndEl = target.closest("[data-wall-end]");
    if (wallEndEl && this.isAdmin) {
      const [id, end] = wallEndEl.getAttribute("data-wall-end")!.split(":");
      this.drag = { kind: "wallmove", id, end: end as "a" | "b", start: world, startScreen: local, base: this._doc, moved: false };
      return;
    }
    const freeWallEl = target.closest("[data-free-wall]");
    if (freeWallEl) {
      const id = freeWallEl.getAttribute("data-free-wall")!;
      this.selectItem("wall", id);
      this.drag = this.isAdmin ? { kind: "wallmove", id, end: null, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      return;
    }
    const outVertexEl = target.closest("[data-out-vertex]");
    if (outVertexEl && this.isAdmin) {
      const [id, i] = outVertexEl.getAttribute("data-out-vertex")!.split(":");
      this.drag = { kind: "outvertex", id, index: Number(i), base: this._doc, moved: false };
      return;
    }
    const outdoorEl = target.closest("[data-outdoor]");
    if (outdoorEl && !target.closest("[data-room]") && !this.roomAt(world)) {
      const id = outdoorEl.getAttribute("data-outdoor")!;
      this.selectItem("outdoor", id);
      this.drag = this.isAdmin ? { kind: "outdoor", id, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      return;
    }
    const roomId = target.closest("[data-room]")?.getAttribute("data-room") ?? this.roomAt(world);
    if (roomId) {
      if (roomId !== this.sel.room) this.sel.corner = null;
      this.selectItem("room", roomId);
      this.drag =
        this.isAdmin && this._tool !== "furniture"
        ? { kind: "room", roomId, start: world, startScreen: local, base: this._doc, moved: false }
        : { kind: "pan", last: local };
      return;
    }
    this.selectItem("room", null);
    this.drag = { kind: "pan", last: local };
  }

  private onPointerMove(e: PointerEvent): void {
    if (this.pressStart) {
      const p = this.localPoint(e);
      if (Math.hypot(p[0] - this.pressStart[0], p[1] - this.pressStart[1]) > 8) {
        clearTimeout(this.pressTimer);
        this.pressStart = null;
        if (this.fixedPan) this._fixedHint = true;
      }
    } else if (this.fixedPan && !this._fixedHint && this.drag?.kind === "pan") this._fixedHint = true;
    const local = this.localPoint(e);
    if (this.pointers.has(e.pointerId)) this.pointers.set(e.pointerId, local);
    if (this.pinch) {
      const now = this.pinchState();
      if (now) {
        this.zoomAt(now.dist / Math.max(1, this.pinch.dist), ...now.mid);
        this._view = { ...this._view, ox: this._view.ox + now.mid[0] - this.pinch.mid[0], oy: this._view.oy + now.mid[1] - this.pinch.mid[1] };
        this.pinch = now;
      }
      return;
    }
    const world = this.toWorld(...local);
    const drag = this.drag;
    if (!drag) {
      if (this._tool !== "select" && this._tool !== "furniture" && this.floor) this._cursor = this.snap(world, undefined, e.altKey);
      return;
    }
    switch (drag.kind) {
      case "pan":
        this._view = { ...this._view, ox: this._view.ox + local[0] - drag.last[0], oy: this._view.oy + local[1] - drag.last[1] };
        drag.last = local;
        break;
      case "tap":
        if (drag.panning || Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) > 6) {
          drag.panning = true;
          this._view = { ...this._view, ox: this._view.ox + local[0] - drag.last[0], oy: this._view.oy + local[1] - drag.last[1] };
        }
        drag.last = local;
        break;
      case "rect":
        drag.end = this.snap(world, undefined, e.altKey);
        this.requestUpdate();
        break;
      case "freewall": {
        // Shift keeps the wall straight (horizontal or vertical)
        let end = this.snap(world, undefined, e.altKey);
        if (e.shiftKey) end = Math.abs(end[0] - drag.start[0]) > Math.abs(end[1] - drag.start[1]) ? [end[0], drag.start[1]] : [drag.start[0], end[1]];
        drag.end = end;
        this.requestUpdate();
        break;
      }
      case "wallmove": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const w = (drag.base.floors.find((f) => f.id === this._floorId)?.walls ?? []).find((q) => q.id === drag.id);
        if (!w) return;
        let next: Pick<FreeWall, "a" | "b">;
        if (drag.end) {
          const p = this.snap(world, undefined, e.altKey);
          next = drag.end === "a" ? { a: p, b: w.b } : { a: w.a, b: p };
        } else {
          const g = e.altKey ? 0.01 : this._doc.settings.grid;
          const dx = Math.round((world[0] - drag.start[0]) / g) * g;
          const dz = Math.round((world[1] - drag.start[1]) / g) * g;
          next = { a: [round(w.a[0] + dx), round(w.a[1] + dz)], b: [round(w.b[0] + dx), round(w.b[1] + dz)] };
        }
        this.change((_, floor) => Object.assign((floor.walls ?? []).find((q) => q.id === drag.id)!, next), drag.base, false);
        break;
      }
      case "vertex": {
        const p = this.snap(world, { roomId: drag.roomId, index: drag.index }, e.altKey);
        drag.moved = true;
        this.change(
          (_, floor) => {
            floor.rooms.find((r) => r.id === drag.roomId)!.points[drag.index] = p;
          },
          drag.base,
          false,
        );
        break;
      }
      case "room": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const room = drag.base.floors.find((f) => f.id === this._floorId)?.rooms.find((r) => r.id === drag.roomId);
        if (!room) return;
        const delta = this.roomDelta(room, [world[0] - drag.start[0], world[1] - drag.start[1]], e.altKey);
        const baseFloor = drag.base.floors.find((f) => f.id === this._floorId)!;
        // devices inside the room move with it
        const inside = new Set(baseFloor.placements.filter((pl) => pointInPolygon([pl.x, pl.z], room.points)).map((pl) => pl.entity_id));
        this.change(
          (_, floor) => {
            const r = floor.rooms.find((x) => x.id === drag.roomId)!;
            r.points = room.points.map(([x, z]) => [round(x + delta[0]), round(z + delta[1])]);
            floor.placements = baseFloor.placements.map((pl) =>
              inside.has(pl.entity_id) ? { ...pl, x: round(pl.x + delta[0]), z: round(pl.z + delta[1]) } : pl,
            );
          },
          drag.base,
          false,
        );
        break;
      }
      case "roofmove": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const dx = round(Math.round((world[0] - drag.start[0]) / g) * g);
        const dz = round(Math.round((world[1] - drag.start[1]) / g) * g);
        const src = drag.base.settings.roof.sections?.find((x) => x.id === drag.id);
        if (!src) return;
        this.change(
          (doc) => {
            const sec = doc.settings.roof.sections?.find((x) => x.id === drag.id);
            if (!sec) return;
            Object.assign(sec, { x0: round(src.x0 + dx), x1: round(src.x1 + dx), z0: round(src.z0 + dz), z1: round(src.z1 + dz) });
            if (src.points) sec.points = src.points.map(([x, z]) => [round(x + dx), round(z + dz)] as Vec2);
          },
          drag.base,
          false,
        );
        break;
      }
      case "solarturn": {
        drag.moved = true;
        const src = drag.base.settings.roof.solar?.find((x) => x.id === drag.id);
        const face = src ? fieldFace(drag.base, src) : null;
        if (!src || !face) return;
        // the handle sits in front of the field: turn its front towards the pointer
        const [cx, cz] = fieldCenter(face, src);
        let a = (Math.atan2(world[0] - cx, -(world[1] - cz)) * 180) / Math.PI;
        const step = e.altKey ? 1 : 15;
        a = Math.round(a / step) * step;
        const turned = turnGroundField(drag.base, src, a);
        this.change(
          (doc) => {
            const f = doc.settings.roof.solar?.find((x) => x.id === drag.id);
            if (f) Object.assign(f, turned);
          },
          drag.base,
          false,
        );
        break;
      }
      case "solarmove": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const winSrc = drag.win ? drag.base.settings.roof.windows?.find((x) => x.id === drag.id) : undefined;
        const src = drag.win ? (winSrc ? windowAsField(winSrc) : undefined) : drag.base.settings.roof.solar?.find((x) => x.id === drag.id);
        // roof faces, and the walls of the floor the plan shows
        const faces = drag.win ? roofFaces(drag.base) : [...roofFaces(drag.base), ...(this._floorId ? wallFaces(drag.base, this._floorId) : [])];
        const own = src ? fieldFace(drag.base, src, faces) : null;
        if (!src || !own) return;
        const step = e.altKey ? 0.01 : 0.05;
        const snapTo = (v: number) => round(Math.round(v / step) * step);
        // over a roof face the field follows the cursor there (it may change to that face) …
        const hit = own.unbounded ? null : faceAt(faces, world);
        let face = own;
        let u: number;
        let v: number;
        if (hit && drag.grab) {
          face = hit.face;
          u = snapTo(hit.u - drag.grab.du);
          // on a wall the height stays (or starts at head height when the field comes from elsewhere)
          v = Number.isNaN(hit.s) ? (hit.face.key === src.face ? src.v : Math.max(0, hit.face.ls - 1.5)) : snapTo(hit.s - drag.grab.ds);
        } else {
          // … elsewhere it moves along its own face (a slope looks shorter in the plan)
          const dx = world[0] - drag.start[0];
          const dz = world[1] - drag.start[1];
          const es = [own.es[0], own.es[2]];
          const esLen2 = es[0] * es[0] + es[1] * es[1] || 1;
          u = snapTo(src.u + dx * own.eu[0] + dz * own.eu[2]);
          v = snapTo(src.v + (dx * es[0] + dz * es[1]) / esLen2);
        }
        // it never slides off its face
        const kept = clampField(face, { ...src, face: face.key, u, v, tilt: face.flat ? (src.tilt ?? 15) : src.tilt });
        this.change(
          (doc) => {
            if (drag.win) {
              const w = doc.settings.roof.windows?.find((x) => x.id === drag.id);
              if (w) Object.assign(w, { face: face.key, ...kept });
              return;
            }
            const f = doc.settings.roof.solar?.find((x) => x.id === drag.id);
            if (f) Object.assign(f, { face: face.key, ...kept }, face.flat && f.tilt == null ? { tilt: 15 } : {});
          },
          drag.base,
          false,
        );
        break;
      }
      case "outvertex": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        const src = drag.base.floors.find((f) => f.id === this._floorId)?.outdoor.find((a) => a.id === drag.id);
        if (!src) return;
        const rect = isAxisRect(src.points);
        this.change(
          (_, floor) => {
            const a = floor.outdoor.find((x) => x.id === drag.id);
            if (!a) return;
            const pts = src.points.map((q) => [...q] as Vec2);
            const i = drag.index;
            const old = src.points[i];
            pts[i] = [round(p[0]), round(p[1])];
            // a rectangle stays a rectangle: the corners sharing an x or a z with the dragged one follow
            if (rect)
              src.points.forEach((q, j) => {
                if (j === i) return;
                if (Math.abs(q[0] - old[0]) < 1e-6) pts[j][0] = round(p[0]);
                if (Math.abs(q[1] - old[1]) < 1e-6) pts[j][1] = round(p[1]);
              });
            a.points = pts;
          },
          drag.base,
          false,
        );
        break;
      }
      case "bgmove": {
        drag.moved = true;
        const dx = world[0] - drag.start[0];
        const dz = world[1] - drag.start[1];
        this.change(
          (_, floor) => {
            if (floor.background) {
              floor.background.x = round(drag.bx + dx);
              floor.background.z = round(drag.bz + dz);
            }
          },
          drag.base,
          false,
        );
        break;
      }
      case "bgrotate": {
        drag.moved = true;
        const bg = this.floor?.background;
        const img = bg ? this.bg.picture(bg.image_id) : undefined;
        if (!bg || !img) break;
        const c = pictureCentre(bg, img.aspect);
        // turn about the middle; Shift snaps to whole 15° steps, otherwise tenths of a degree
        const rot = dragRotation(drag.rot, drag.start, Math.atan2(world[1] - c[1], world[0] - c[0]), e.shiftKey);
        this.change(
          (_, floor) => {
            if (floor.background) floor.background.rotation = rot;
          },
          drag.base,
          false,
        );
        break;
      }
      case "bgscale": {
        drag.moved = true;
        const bg = this.floor?.background;
        const img = bg ? this.bg.picture(bg.image_id) : undefined;
        if (!bg || !img) break;
        // the corner follows the pointer along the picture's own width, whatever its turn
        const [lx] = pictureLocal(bg, img.aspect, world);
        const width = Math.max(0.5, round(lx));
        this.change(
          (_, floor) => {
            if (floor.background) floor.background.width = width;
          },
          drag.base,
          false,
        );
        break;
      }
      case "roofvertex": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        this.change(
          (doc) => {
            const sec = doc.settings.roof.sections?.find((x) => x.id === drag.id);
            if (!sec?.points || drag.index >= sec.points.length) return;
            sec.points[drag.index] = [round(p[0]), round(p[1])];
            Object.assign(sec, polygonBox(sec.points));
          },
          drag.base,
          false,
        );
        break;
      }
      case "roofcorner": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        this.change(
          (doc) => {
            const sec = doc.settings.roof.sections?.find((x) => x.id === drag.id);
            if (!sec) return;
            if (drag.corner[0]) sec.x1 = round(p[0]);
            else sec.x0 = round(p[0]);
            if (drag.corner[1]) sec.z1 = round(p[1]);
            else sec.z0 = round(p[1]);
          },
          drag.base,
          false,
        );
        break;
      }
      case "opening": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const baseFloor = drag.base.floors.find((f) => f.id === this._floorId);
        const o = baseFloor?.openings.find((x) => x.id === drag.id);
        const host = o && baseFloor ? openingHost(o, baseFloor.rooms, baseFloor.walls ?? []) : null;
        if (!o || !host) return;
        const offset = this.dropOffset(host.room, host.edge, world, o.width, e.altKey);
        this.change((_, floor) => Object.assign(floor.openings.find((x) => x.id === drag.id)!, { offset }), drag.base, false);
        break;
      }
      case "furniture": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const f = drag.base.floors.find((x) => x.id === this._floorId)?.furniture.find((x) => x.id === drag.id);
        if (!f) return;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        let x = round(Math.round((f.x + world[0] - drag.start[0]) / g) * g);
        let z = round(Math.round((f.z + world[1] - drag.start[1]) / g) * g);
        let rotation = f.rotation;
        // near a wall: turn the back (or a side) to it and sit flush; Alt moves freely
        const snap = e.altKey ? null : this.snapToWall({ ...f, x, z });
        if (snap) ({ x, z, rotation } = snap);
        this.change((_, floor) => Object.assign(floor.furniture.find((q) => q.id === drag.id)!, { x, z, rotation }), drag.base, false);
        break;
      }
      case "outdoor": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const area = drag.base.floors.find((f) => f.id === this._floorId)?.outdoor.find((o) => o.id === drag.id);
        if (!area) return;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const dx = Math.round((world[0] - drag.start[0]) / g) * g;
        const dz = Math.round((world[1] - drag.start[1]) / g) * g;
        this.change(
          (_, floor) => (floor.outdoor.find((o) => o.id === drag.id)!.points = area.points.map(([x, z]) => [round(x + dx), round(z + dz)])),
          drag.base,
          false,
        );
        break;
      }
      case "resize": {
        drag.moved = true;
        const f = drag.base.floors.find((x) => x.id === this._floorId)?.furniture.find((x) => x.id === drag.id);
        if (!f) return;
        const size = resizeFurniture(f, drag.corner, world, e.altKey ? 0.01 : this._doc.settings.grid);
        this.change((_, floor) => Object.assign(floor.furniture.find((q) => q.id === drag.id)!, size), drag.base, false);
        break;
      }
      case "rotate": {
        drag.moved = true;
        const f = drag.base.floors.find((x) => x.id === this._floorId)?.furniture.find((x) => x.id === drag.id);
        if (!f) return;
        // the handle sits in front of the item: turn the front towards the pointer
        let a = (Math.atan2(-(world[0] - f.x), world[1] - f.z) * 180) / Math.PI;
        const step = e.altKey ? 1 : 15;
        a = ((Math.round(a / step) * step) % 360 + 360) % 360;
        this.change((_, floor) => Object.assign(floor.furniture.find((q) => q.id === drag.id)!, { rotation: a }), drag.base, false);
        break;
      }
      case "aim": {
        drag.moved = true;
        const pl = drag.base.floors.find((x) => x.id === this._floorId)?.placements.find((x) => x.entity_id === drag.entityId);
        if (!pl) return;
        // the handle sits at the far edge of the wedge: it turns the camera and sets how far it reaches
        let a = (Math.atan2(-(world[0] - pl.x), world[1] - pl.z) * 180) / Math.PI;
        const step = e.altKey ? 1 : 5;
        a = ((Math.round(a / step) * step) % 360 + 360) % 360;
        const reach = Math.min(50, Math.max(0.5, Math.round(Math.hypot(world[0] - pl.x, world[1] - pl.z) * 10) / 10));
        this.change((_, floor) => Object.assign(floor.placements.find((q) => q.entity_id === drag.entityId)!, { rotation: a, reach }), drag.base, false);
        break;
      }
      case "device": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const pl = drag.base.floors.find((f) => f.id === this._floorId)?.placements.find((x) => x.entity_id === drag.entityId);
        if (!pl) return;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const x = round(Math.round((pl.x + world[0] - drag.start[0]) / g) * g);
        const z = round(Math.round((pl.z + world[1] - drag.start[1]) / g) * g);
        this.change((_, floor) => Object.assign(floor.placements.find((q) => q.entity_id === drag.entityId)!, { x, z }), drag.base, false);
        break;
      }
    }
  }

  private onPointerUp(e: PointerEvent): void {
    clearTimeout(this.pressTimer);
    this.pressStart = null;
    this.fixedPan = false;
    this.pointers.delete(e.pointerId);
    if (this.pinch) {
      if (this.pointers.size < 2) this.pinch = null;
      return;
    }
    const drag = this.drag;
    this.drag = null;
    if (!drag || e.type === "pointercancel") {
      if (drag && EDIT_DRAGS.has(drag.kind) && "moved" in drag && drag.moved && "base" in drag) this.restoreLive(drag.base);
      return;
    }
    const local = this.localPoint(e);
    switch (drag.kind) {
      case "freewall": {
        if (Math.hypot(drag.end[0] - drag.start[0], drag.end[1] - drag.start[1]) >= 0.2) this.addFreeWall(drag.start, drag.end);
        this._guides = {};
        break;
      }
      case "wallmove":
        if (drag.moved) this.pushHistory(drag.base);
        this._guides = {};
        break;
      case "rect": {
        const [x0, z0] = drag.start;
        const [x1, z1] = drag.end;
        if (Math.abs(x1 - x0) >= 0.2 && Math.abs(z1 - z0) >= 0.2) {
          const lo: Vec2 = [Math.min(x0, x1), Math.min(z0, z1)];
          const hi: Vec2 = [Math.max(x0, x1), Math.max(z0, z1)];
          const pts: Vec2[] = [lo, [hi[0], lo[1]], hi, [lo[0], hi[1]]];
          if (drag.outdoor) this.addOutdoor(pts);
          else if (drag.hole) this.addHole(lo, hi);
          else if (drag.roof) this.roof.addSection(lo, hi);
          else this.addRoom(pts);
        }
        this._guides = {};
        break;
      }
      case "tap":
        if (drag.panning) break;
        // by measure, a tap only sets (or moves) the starting point; the walls are typed in
        if (this._tool === "measure") this._draft = [this.snap(this.toWorld(...local), undefined, e.altKey)];
        else this.addDraftPoint(this.snap(this.toWorld(...local), undefined, e.altKey), local);
        break;
      case "opening":
      case "furniture":
      case "rotate":
      case "aim":
      case "resize":
      case "outdoor":
      case "solarmove":
      case "solarturn":
      case "roofmove":
      case "roofcorner":
      case "roofvertex":
      case "bgmove":
      case "bgscale":
      case "bgrotate":
        if (drag.moved) this.pushHistory(drag.base);
        break;
      case "device":
        if (drag.moved) this.pushHistory(drag.base);
        // a tap on a device selects it (and the room it stands in)
        else this.selectItem("device", drag.entityId);
        break;
      case "vertex":
      case "room":
        // the drag already changed the document without history; record the state before the drag
        if (drag.moved) this.pushHistory(drag.base);
        this._guides = {};
        break;
      default:
        break;
    }
  }

  private onWheel(e: WheelEvent): void {
    e.preventDefault();
    const [sx, sy] = this.localPoint(e);
    this.zoomAt(Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : 0.0015)), sx, sy);
  }

  private pinchState(): { dist: number; mid: [number, number] } | null {
    const pts = [...this.pointers.values()];
    if (pts.length < 2) return null;
    const [a, b] = pts;
    return { dist: Math.hypot(a[0] - b[0], a[1] - b[1]), mid: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] };
  }

  private pushHistory(base: Building): void {
    this.history.record(base);
    this.syncHistoryButtons();
  }

  private restoreLive(base: Building): void {
    this._doc = base;
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: base }, bubbles: true, composed: true }));
  }

  /** Movement of a whole room: grid steps, pulled onto nearby corners of other rooms. */
  private roomDelta(room: Room, raw: Vec2, free: boolean): Vec2 {
    if (free) return raw;
    const g = this._doc.settings.grid;
    let delta: Vec2 = [Math.round(raw[0] / g) * g, Math.round(raw[1] / g) * g];
    const thr = SNAP_PX / this._view.scale;
    let best = thr;
    this._guides = {};
    for (const other of this.floor?.rooms ?? []) {
      if (other.id === room.id) continue;
      for (const q of other.points) {
        for (const p of room.points) {
          const d = Math.hypot(p[0] + raw[0] - q[0], p[1] + raw[1] - q[1]);
          if (d < best) {
            best = d;
            delta = [q[0] - p[0], q[1] - p[1]];
            this._guides = { point: q };
          }
        }
      }
    }
    return delta;
  }

  private roomAt(p: Vec2): string | null {
    const rooms = this.floor?.rooms ?? [];
    // smallest room first so nested rooms stay reachable
    const hits = rooms.filter((r) => pointInPolygon(p, r.points)).sort((a, b) => polygonArea(a.points) - polygonArea(b.points));
    return hits[0]?.id ?? null;
  }

  private addDraftPoint(p: Vec2, screen: [number, number]): void {
    const draft = this._draft;
    if (draft.length >= 3) {
      const [fx, fy] = this.toScreen(draft[0]);
      if (Math.hypot(fx - screen[0], fy - screen[1]) < 14) {
        this.closeDraft();
        return;
      }
    }
    const last = draft[draft.length - 1];
    if (last && Math.hypot(last[0] - p[0], last[1] - p[1]) < 1e-6) return;
    this._draft = [...draft, p];
  }

  private closeDraft(): void {
    if (this._draft.length >= 3 && polygonArea(this._draft) > 0.05) this.addRoom(this._draft);
    this._draft = [];
    this._cursor = null;
    this._guides = {};
  }

  /** Adds a wall of the typed length in a direction (drawing by measure). */
  private measureStep(dir: Direction): void {
    const last = this._draft[this._draft.length - 1];
    if (!last || !(this._measureLen > 0)) return;
    const next = step(last, this._measureLen, dir);
    // arriving at the start closes the room
    const first = this._draft[0];
    if (this._draft.length >= 3 && Math.hypot(next[0] - first[0], next[1] - first[1]) < 0.01) {
      this.closeDraft();
      return;
    }
    this._draft = [...this._draft, next];
  }

  private rectBySize(): void {
    const start = this._draft[0] ?? [0, 0];
    const [w, d] = this._rectSize;
    if (!(w > 0.1 && d > 0.1)) return;
    this.addRoom([start, step(start, w, "right"), step(step(start, w, "right"), d, "down"), step(start, d, "down")]);
    this._draft = [];
  }

  private get freeWall(): FreeWall | undefined {
    return this.sel.wall ? (this.floor?.walls ?? []).find((w) => w.id === this.sel.wall) : undefined;
  }

  private updateFreeWall(patch: Partial<FreeWall>): void {
    const id = this.sel.wall;
    if (!id) return;
    this.change((_, floor) => Object.assign((floor.walls ?? []).find((w) => w.id === id)!, patch));
  }

  private deleteFreeWall(): void {
    const id = this.sel.wall;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("wall", id)) return;
    this.change((_, floor) => {
      floor.walls = (floor.walls ?? []).filter((w) => w.id !== id);
      floor.openings = floor.openings.filter((o) => o.wall !== id);
    });
    this.sel.wall = null;
  }

  /** The plan symbol of free walls: a wide invisible hit line, and end handles when selected. */
  private renderFreeWalls(floor: Floor) {
    return svg`<g>${(floor.walls ?? []).map((w) => {
      const [x0, y0] = this.toScreen(w.a);
      const [x1, y1] = this.toScreen(w.b);
      const sel = w.id === this.sel.wall;
      return svg`<g data-free-wall=${w.id} class=${`nf-free-wall${sel ? " nf-free-wall-sel" : ""}`}>
        <line class="nf-hit" x1=${x0} y1=${y0} x2=${x1} y2=${y1} />
        <line class="nf-free-wall-line" x1=${x0} y1=${y0} x2=${x1} y2=${y1} />
      </g>
      ${sel && this.isAdmin && !isFixed(w, true, this._doc.settings)
        ? svg`<g class="nf-vertex" data-wall-end=${`${w.id}:a`}><circle cx=${x0} cy=${y0} r="16" class="nf-hit" /><circle cx=${x0} cy=${y0} r="6" /></g>
            <g class="nf-vertex" data-wall-end=${`${w.id}:b`}><circle cx=${x1} cy=${y1} r="16" class="nf-hit" /><circle cx=${x1} cy=${y1} r="6" /></g>`
        : nothing}`;
    })}</g>`;
  }

  private get outdoorArea(): OutdoorArea | undefined {
    return this.sel.outdoor ? this.floor?.outdoor.find((o) => o.id === this.sel.outdoor) : undefined;
  }

  private updateOutdoor(patch: Partial<OutdoorArea>): void {
    const id = this.sel.outdoor;
    this.change((_, floor) => Object.assign(floor.outdoor.find((o) => o.id === id)!, patch));
  }

  private deleteOutdoor(): void {
    const id = this.sel.outdoor;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("outdoor", id)) return;
    this.change((_, floor) => (floor.outdoor = floor.outdoor.filter((o) => o.id !== id)));
    this.sel.outdoor = null;
  }

  // ------------------------------------------------------------------ keyboard

  private readonly onKey = (e: KeyboardEvent) => {
    const path = e.composedPath();
    if (path.some((el) => el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement)) return;
    if (!this.isConnected || !this.offsetParent) return;
    const mod = e.ctrlKey || e.metaKey;
    if (mod && e.key.toLowerCase() === "z") {
      e.preventDefault();
      if (e.shiftKey) this.redo();
      else this.undo();
    } else if (mod && e.key.toLowerCase() === "y") {
      e.preventDefault();
      this.redo();
    } else if (mod && e.key.toLowerCase() === "d") {
      e.preventDefault();
      this.duplicateRoom();
    } else if (e.key === "Delete" || (e.key === "Backspace" && (this._tool === "select" || this._tool === "furniture"))) {
      if (this.sel.device) this.deleteItem("device", this.sel.device);
      else if (this.sel.outdoor) this.deleteOutdoor();
      else if (this.sel.wall) this.deleteFreeWall();
      else if (this.sel.opening) this.deleteOpening();
      else if (this.sel.furniture) this.deleteFurniture();
      else if (this.sel.corner !== null) this.deleteVertex(this.sel.corner);
      else this.deleteRoom();
    } else if (e.key.toLowerCase() === "l" && !mod && this._tool === "roof" && this.roof.section && !this._doc.settings.lock_plan) {
      this.roof.patchSection({ locked: !this.roof.section.locked });
    } else if (e.key.toLowerCase() === "l" && !mod && (this.sel.furniture || this.sel.device)) {
      const target = this.sel.target!;
      this.toggleFixed(target.kind, target.id);
    } else if (Object.hasOwn(ARROWS, e.key) && !mod && (this._tool === "select" || this._tool === "furniture")) {
      // arrow keys nudge the selection: one grid step, Shift 10 cm, Alt 1 cm
      const step = e.altKey ? 0.01 : e.shiftKey ? 0.1 : this._doc.settings.grid;
      const [dx, dz] = ARROWS[e.key];
      if (this.nudgeSelection(dx * step, dz * step)) e.preventDefault();
    } else if (e.key.toLowerCase() === "r" && !mod && this.sel.furniture) {
      this.rotateFurniture(e.shiftKey ? -90 : 90);
    } else if (e.key === "Backspace" && this._tool === "polygon") {
      this._draft = this._draft.slice(0, -1);
    } else if (e.key === "Enter" && this._tool === "polygon") {
      this.closeDraft();
    } else if (e.key === "Escape") {
      if (this._ctx) {
        this._ctx = null;
        return;
      }
      if (this._draft.length) this._draft = [];
      else if (this._tool !== "select") this._tool = "select";
      else this.selectItem("room", null);
      this._cursor = null;
    }
  };

  // ------------------------------------------------------------------ actions

  private deleteFloor(): void {
    const floor = this.floor;
    if (!floor || !confirm(this.t("delete_floor_confirm", { name: floor.name }))) return;
    const next = structuredClone(this._doc);
    next.floors = next.floors.filter((f) => f.id !== floor.id);
    this.setDoc(next);
    this._floorId = next.floors[0]?.id ?? null;
    this.sel.room = null;
  }

  // ------------------------------------------------------------------ roof sections

  /** Where a plan point lies on a face; on a house wall only along it (s = NaN: the height stays). */
  private faceHit(face: RoofFace, p: Vec2): { u: number; s: number } | null {
    if (!face.wall) return pointOnFace(face, p);
    return { u: (p[0] - face.o[0]) * face.eu[0] + (p[1] - face.o[2]) * face.eu[2], s: Number.NaN };
  }

  // ------------------------------------------------------------------ floors and rooms

  private addFloor(from: HassFloor | null = null): void {
    const floor = newFloorFor(this._doc, from, { first: this.t("default_floor"), next: (n) => this.t("new_floor", { n }) });
    const next = structuredClone(this._doc);
    next.floors = floorsWith(next.floors, floor);
    this.setDoc(next);
    this._floorId = floor.id;
    this.sel.room = null;
    this.side.floorMenu = false;
    this.fit();
  }

  /** One room tile per area of the floor's Home Assistant floor that has no room yet, to drag into place. */
  private addAreaRooms(floor: Floor): void {
    const areas = unplacedAreas(this._doc, floor, this.hass?.areas);
    if (areas.length === 0) return;
    const tiles = roomTiles(floor, areas, () => uid("room"));
    this.change((_, f) => f.rooms.push(...tiles));
    this.fit();
  }

  private moveFloor(direction: -1 | 1): void {
    const id = this._floorId;
    if (!id) return;
    const order = floorsSwapped(this._doc.floors, id, direction);
    if (order.every((f, i) => f.id === this._doc.floors[i].id)) return;
    const next = structuredClone(this._doc);
    next.floors = order.map((f) => next.floors.find((x) => x.id === f.id)!);
    this.setDoc(next);
  }

  private floorActions(): FloorActions {
    return {
      openFloor: (id) => {
        this._floorId = id;
        this.sel.room = null;
        this.sel.corner = null;
        this._draft = [];
        this.fit();
      },
      addFloor: (from) => this.addFloor(from),
      moveFloor: (direction) => this.moveFloor(direction),
      deleteFloor: () => this.deleteFloor(),
      addAreaRooms: (floor) => this.addAreaRooms(floor),
      closeGaps: () => this.closeFloorGaps(),
      shift: () => this.shiftFloor(this.side.shiftX, this.side.shiftZ),
      turn: () => this.turnFloor(),
      rememberView: () => this.rememberFloorView(),
    };
  }

  private roomActions(room: Room): RoomActions {
    return {
      select: (id) => this.selectItem("room", id),
      patch: (patch) => this.updateRoom(patch),
      setArea: (id) => this.setArea(id),
      setRect: (field, value) => this.setRect(field, value),
      setCorner: (index, axis, value) => this.setPoint(index, axis, value),
      removeCorner: (index) => this.deleteVertex(index),
      duplicate: () => this.duplicateRoom(),
      remove: () => this.deleteRoom(),
      rememberView: () => this.rememberRoomView(),
      applyPackage: (pkg) => this.applyPackage(room, pkg),
      openSpots: () => {
        const lights = this.hass ? areaEntities(this.hass, room.area_id).filter((id) => id.startsWith("light.")) : [];
        this.side.spots = suggestedSpots(room, lights);
      },
      placeSpots: () => this.placeSpots(room),
      lockButton: this.fixButton("room", room.id),
      wallHeights: this.renderEdgeHeights(room),
      climate: renderRoomClimate(this.host, room, (patch) => this.updateRoom(patch)),
      corner: this.sel.corner,
    };
  }

  /** Adds the furniture of a room package. Lamps link to the lights of the room by themselves. */
  private applyPackage(room: Room, pkg: PackageId): void {
    if (!this.isAdmin) return;
    const items = furnishRoom(room, pkg, () => uid("furniture"));
    this.change((_, floor) => floor.furniture.push(...items));
    this.side.packages = false;
    this.side.notice = this.t("pkg_done", { n: items.length });
  }

  private placeSpots(room: Room): void {
    const draft = this.side.spots;
    if (!draft || !this.isAdmin) return;
    const items = spotItems(room, draft);
    this.change((_, floor) => floor.furniture.push(...items));
    this.side.spots = null;
    this.side.notice = this.t("spots_placed", { n: items.length });
  }

  // ------------------------------------------------------------------ editing the plan

  /** The plan point in the middle of what is on screen. */
  private viewCentre(): Vec2 {
    return this.toWorld(this._size.w / 2, this._size.h / 2);
  }

  /** Adds a free-standing wall between two plan points and selects it. */
  private addFreeWall(a: Vec2, b: Vec2): void {
    if (!this.floor) return;
    const wall = newFreeWall(a, b);
    this.change((_, floor) => (floor.walls = [...(floor.walls ?? []), wall]));
    this.selectItem("wall", wall.id);
  }

  /** A hole in the floor of this level, drawn as a rectangle. */
  private addHole(lo: Vec2, hi: Vec2): void {
    if (!this.floor) return;
    const hole = newFloorOpening(lo, hi);
    this.change((_, floor) => floor.furniture.push(hole));
    this.selectItem("furniture", hole.id);
    this._tool = "select";
  }

  private addOutdoor(points: Vec2[]): void {
    if (!this.floor) return;
    const area = newOutdoorArea(points);
    this.change((_, floor) => floor.outdoor.push(area));
    this.selectItem("outdoor", area.id);
    this._tool = "select";
  }

  private duplicateOutdoor(): void {
    const original = this.outdoorArea;
    if (!original || !this.isAdmin) return;
    const copy = copyOfOutdoorArea(original);
    this.change((_, floor) => floor.outdoor.push(copy));
    this.selectItem("outdoor", copy.id);
  }

  private addRoom(points: Vec2[]): void {
    if (!this.floor) return;
    const room = newRoom(points, this.t("new_room", { n: this.floor.rooms.length + 1 }));
    this.change((_, floor) => floor.rooms.push(room));
    this.sel.room = room.id;
    this.sel.corner = null;
    this._tool = "select";
  }

  private deleteRoom(): void {
    const id = this.sel.room;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("room", id)) return;
    this.change((_, floor) => removeRoom(floor, id));
    this.sel.room = null;
    this.sel.corner = null;
  }

  private duplicateRoom(): void {
    const original = this.room;
    if (!original || !this.isAdmin) return;
    const copy = copyOfRoom(original);
    this.change((_, floor) => floor.rooms.push(copy));
    this.sel.room = copy.id;
  }

  private deleteVertex(index: number): void {
    const room = this.room;
    if (!room) return;
    this.change((_, floor) => removeCorner(floor, room.id, index));
    this.sel.corner = null;
  }

  /** Moves the selected item by (dx, dz) metres. False when nothing movable is selected, so the key keeps its normal job. */
  private nudgeSelection(dx: number, dz: number): boolean {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return false;
    const target = this.sel.target;
    if (target && this.isFixedItem(target.kind, target.id)) {
      this._fixedHint = true;
      return true;
    }
    const nudgeTarget: NudgeTarget | null = !target ? null : target.kind === "room" ? { kind: "room", id: target.id, corner: this.sel.corner } : { kind: target.kind, id: target.id };
    const result = nudgeTarget ? nudge(floor, nudgeTarget, dx, dz) : NOTHING_TO_MOVE;
    if (result === NOTHING_TO_MOVE) return false;
    if (result !== NO_CHANGE) this.change((_, f) => result.apply(f));
    return true;
  }

  private addFurniture(type: string): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const room = this.room;
    const item = newFurniture(type, this._doc, floor, room ? centroid(room.points) : this.viewCentre());
    this.change((_, f) => f.furniture.push(item));
    this.selectItem("furniture", item.id);
    // small things are easy to lose in a large plan: bring the new one into view
    this.showPoint(item.x, item.z);
  }

  private rotateFurniture(delta: number): void {
    const item = this.furnitureItem;
    if (item && this.isAdmin) this.updateFurniture({ rotation: turnedBy(item.rotation, delta) });
  }

  private duplicateFurniture(): void {
    const item = this.furnitureItem;
    if (!item || !this.isAdmin) return;
    const copy = copyOfFurniture(item);
    this.change((_, floor) => floor.furniture.push(copy));
    this.selectItem("furniture", copy.id);
  }

  /** A vehicle placed as plain furniture becomes a parking spot holding it. */
  private vehicleToSpot(vehicle: Furniture): void {
    if (!this.isAdmin) return;
    const spot = parkingSpotFor(vehicle);
    this.change((_, floor) => {
      floor.furniture = floor.furniture.filter((m) => m.id !== vehicle.id);
      floor.furniture.push(spot);
    });
    this.selectItem("furniture", spot.id);
  }

  /** Replaces a placed device by a piece of furniture linked to it, where its pin stood, as one undo step. */
  private deviceToFurniture(placed: Placement, type: string): void {
    if (!this.isAdmin) return;
    const item = furnitureForDevice(placed, type);
    this.change((_, floor) => {
      floor.placements = floor.placements.filter((p) => p.entity_id !== placed.entity_id);
      floor.furniture.push(item);
    });
    this.sel.device = null;
    this.selectItem("furniture", item.id);
  }

  /** Turns a piece of furniture linked by hand back into a plain device pin at its place. */
  private furnitureToDevice(item: Furniture): void {
    const entityId = item.entity;
    if (!this.isAdmin || !entityId || entityId === "none") return;
    const pin = deviceForFurniture(item, entityId);
    this.change((_, floor) => {
      floor.furniture = floor.furniture.filter((m) => m.id !== item.id);
      if (!floor.placements.some((p) => p.entity_id === entityId)) floor.placements.push(pin);
    });
    this.sel.furniture = null;
    this.selectItem("device", entityId);
  }

  /** Places entities in the selected room. An entity placed elsewhere moves here. */
  private placeDevices(entityIds: string[]): void {
    const room = this.room;
    if (!room || entityIds.length === 0 || !this.isAdmin) return;
    this.change((doc, floor) => placeInRoom(doc, floor, room, entityIds));
  }

  private removeDevice(entityId: string): void {
    this.change((doc) => removeDevice(doc, entityId));
  }

  /** Moves the selected device to the middle of the room it is in. */
  private centreDevice(): void {
    const placed = this.device;
    const room = placed ? this.floor?.rooms.find((r) => r.id === this.roomAt([placed.x, placed.z])) : undefined;
    if (!placed || !room) return;
    const [x, z] = roomCentre(room);
    this.updateDevice({ x, z });
  }

  private spreadCeilingLights(room: Room): void {
    const floor = this.floor;
    if (!floor) return;
    const spots = evenCeilingLights(room, floor.placements);
    if (spots.length === 0) return;
    this.change((_, f) => {
      for (const spot of spots) Object.assign(f.placements.find((p) => p.entity_id === spot.entityId)!, { x: spot.x, z: spot.z });
    });
  }

  private shiftScope(): Scope {
    return { floorId: this._floorId, allFloors: this.side.shiftAll };
  }

  /** Moves everything on the floor (or on every floor) by the typed distance. */
  private shiftFloor(dx: number, dz: number): void {
    if (!this.isAdmin || (!dx && !dz)) return;
    this.change((doc) => moveScope(doc, this.shiftScope(), dx, dz));
    this.side.shiftX = 0;
    this.side.shiftZ = 0;
  }

  /** Turns the floor, or the whole house, a quarter clockwise: for a floor that was drawn the wrong way round. */
  private turnFloor(): void {
    if (!this.floor || !this.isAdmin) return;
    this.change((doc) => turnQuarterClockwise(doc, this.shiftScope()));
  }

  private setArea(areaId: string): void {
    const room = this.room;
    if (room) this.updateRoom(areaChoice(room, areaId, this.hass?.areas ?? {}));
  }

  private setRect(field: RectField, value: number): void {
    const room = this.room;
    const points = room ? rectangleAfter(room, field, value) : null;
    if (points) this.updateRoom({ points });
  }

  private setPoint(index: number, axis: 0 | 1, value: number): void {
    const room = this.room;
    const points = room ? cornerMoved(room, index, axis, value) : null;
    if (points) this.updateRoom({ points });
  }

  /** Turns an opening into another kind: door, double door, window, terrace door, garage door. */
  private setOpeningPreset(opening: Opening, preset: OpeningPreset): void {
    this._openingPreset = preset;
    this.updateOpening(openingKindPatch(opening, preset));
  }

  // ------------------------------------------------------------------ helpers the forms of this file still share

  // ------------------------------------------------------------------ helpers the forms of this file still share

  private num(label: string, value: number, onChange: (v: number) => void, step = 0.01, min?: number) {
    return numberField(this.host, label, value, onChange, step, min);
  }

  // ------------------------------------------------------------------ energy tool

  /** What the energy panel can make this editor do. */
  private energyActions(): EnergyActions {
    return {
      follow: (target) => {
        if (target.kind === "solar-field") this.roof.solarId = target.id;
        else if (target.kind === "add-solar-field") this.roof.addField();
        else if (target.kind === "add-device") this.addEnergyDevice(target.type);
        else this.openEnergyDevice(target.floor, target.item);
      },
      addDevice: (type) => {
        this.roof.solarId = null;
        this.addEnergyDevice(type);
      },
      openDevice: (floor, item) => this.openEnergyDevice(floor, item),
      importPrefs: () => void this.importEnergy(),
      note: this._energyNote,
    };
  }

  private openEnergyDevice(floor: Floor, item: Furniture): void {
    this._floorId = floor.id;
    this.roof.solarId = null;
    this.selectItem("furniture", item.id);
    this.showPoint(item.x, item.z);
  }

  /** Adds an energy device on the selected floor where it belongs, and selects it. */
  private addEnergyDevice(type: string): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const areaOf = (room: Room) => (room.area_id && this.hass?.areas?.[room.area_id]?.name) || "";
    const item = newEnergyDevice(type, this._doc, floor, {
      roomLabel: (room) => `${room.name} ${areaOf(room)} ${room.area_id ?? ""}`,
      selected: this.room,
      fallback: this.toWorld(this._size.w / 2, this._size.h / 2),
    });
    this.change((_, f) => f.furniture.push(item));
    this.selectItem("furniture", item.id);
    this.showPoint(item.x, item.z);
  }

  private async importEnergy(): Promise<void> {
    if (!this.hass) return;
    const result = await importEnergyPrefs({
      hass: this.hass,
      doc: () => this._doc,
      canAdd: () => !!this.floor,
      addDevice: (type) => this.addEnergyDevice(type),
      setField: (id, key, sensor) =>
        this.change((doc) => {
          const item = doc.floors.flatMap((f) => f.furniture).find((m) => m.id === id);
          if (item) item[key] = sensor;
        }),
    });
    if (result.kind === "failed") {
      this._energyNote = this.t("energy_import_failed");
      return;
    }
    this.selectItem("furniture", null);
    this._energyNote = result.filled > 0 ? this.t("energy_import_done", { n: result.filled }) : this.t("energy_import_none");
  }

  /** Sidebar of the energy tool: the selected solar field, or the overview (fields, strings). */
  private renderEnergyPanel() {
    const field = this.roof.solarId ? this._doc.settings.roof.solar?.find((x) => x.id === this.roof.solarId) : undefined;
    if (field) return renderSolarForm(this.roofDeps(), field);
    const device = this.sel.furniture ? this.floor?.furniture.find((x) => x.id === this.sel.furniture && (ENERGY_DEVICES as readonly string[]).includes(x.type)) : undefined;
    if (device)
      return html`<button class="nf-btn nf-back" @click=${() => this.selectItem("furniture", null)}>‹ ${this.t("tool_energy")}</button>
        ${renderFurnitureForm(this.host, device, this.furnitureActions())}`;
    const actions = this.energyActions();
    return html`${renderEnergyChecklist(this.host, actions)}${renderSolarList(this.roofDeps())}${renderEnergyDevices(this.host, actions)}${renderEnergyBalance(this.host, actions)}${renderEnergyTeaser(this.host)}`;
  }

  /** The item of a fixable kind on a floor. */
  private fixItem(floor: Floor | undefined, kind: FixKind, id: string): object | undefined {
    if (!floor) return undefined;
    switch (kind) {
      case "room":
        return floor.rooms.find((r) => r.id === id);
      case "opening":
        return floor.openings.find((o) => o.id === id);
      case "furniture":
        return floor.furniture.find((m) => m.id === id);
      case "device":
        return floor.placements.find((p) => p.entity_id === id);
      case "wall":
        return (floor.walls ?? []).find((w) => w.id === id);
      case "outdoor":
        return floor.outdoor.find((a) => a.id === id);
    }
  }

  /** Fixed by itself, or (rooms, walls, doors, windows, outdoor areas) by the plan lock. */
  private isFixedItem(kind: FixKind, id: string): boolean {
    return isFixed(this.fixItem(this.floor, kind, id), kind !== "furniture" && kind !== "device", this._doc.settings);
  }

  private toggleFixed(kind: FixKind, id: string): void {
    // rooms, walls, doors, windows and outdoor areas follow the plan lock alone
    if (!this.isAdmin || (kind !== "furniture" && kind !== "device")) return;
    const next = !this.isFixedItem(kind, id);
    this.change((_, floor) => {
      const item = this.fixItem(floor, kind, id) as { locked?: boolean | null } | undefined;
      if (item) item.locked = next;
    });
  }

  private toggleLockPlan(): void {
    if (!this.isAdmin) return;
    this.change((doc) => (doc.settings.lock_plan = !doc.settings.lock_plan));
  }

  /** A fixed item is only deleted after asking. */
  private confirmFixedDelete(kind: FixKind, id: string): boolean {
    return !this.isFixedItem(kind, id) || confirm(this.t("fixed_delete_confirm"));
  }

  private onContextMenu(e: MouseEvent): void {
    e.preventDefault();
    if (this._tool !== "select" && this._tool !== "furniture") return;
    this.drag = null;
    this.openContext(e.target as Element, this.localPoint(e as PointerEvent));
  }

  /** Select the item under a plan point and open its menu. */
  private openContext(target: Element, local: [number, number]): void {
    if (!this.isAdmin || !this.floor) return;
    const world = this.toWorld(...local);
    const attr = (sel: string) => target.closest(`[${sel}]`)?.getAttribute(sel) ?? null;
    let hit: [FixKind, string] | null = null;
    const device = attr("data-device");
    const opening = attr("data-opening");
    const furniture = target.closest("[data-vertex], [data-mid]") ? null : attr("data-furniture");
    const wall = attr("data-free-wall");
    const outdoor = attr("data-outdoor");
    const room = attr("data-room") ?? this.roomAt(world);
    if (device) hit = ["device", device];
    else if (opening) hit = ["opening", opening];
    else if (furniture) hit = ["furniture", furniture];
    else if (wall) hit = ["wall", wall];
    else if (outdoor && !room) hit = ["outdoor", outdoor];
    else if (room) hit = ["room", room];
    if (!hit) {
      this._ctx = null;
      return;
    }
    const [kind, id] = hit;
    this.selectItem(kind, id);
    if (kind === "opening" || kind === "furniture") this.sel.room = this.sel.room ?? room;
    this._ctx = { x: local[0], y: local[1], kind, id };
  }

  private deleteItem(kind: FixKind, id: string): void {
    if (kind === "device") {
      if (!this.confirmFixedDelete(kind, id)) return;
      this.removeDevice(id);
      this.sel.device = null;
      return;
    }
    // the delete methods ask themselves for fixed items
    if (kind === "room") this.deleteRoom();
    else if (kind === "opening") this.deleteOpening();
    else if (kind === "furniture") this.deleteFurniture();
    else if (kind === "wall") this.deleteFreeWall();
    else this.deleteOutdoor();
  }

  private renderContext() {
    const c = this._ctx;
    if (!c) return nothing;
    const fixed = this.isFixedItem(c.kind, c.id);
    const wrap = this.renderRoot.querySelector(".nf-canvas-wrap") as HTMLElement | null;
    // keep the menu inside the plan
    const x = Math.max(4, Math.min(c.x, (wrap?.clientWidth ?? 800) - 190));
    const y = Math.max(4, Math.min(c.y, (wrap?.clientHeight ?? 600) - 190));
    const run = (fn: () => void) => () => {
      this._ctx = null;
      fn();
    };
    return html`<div class="nf-ctx" style=${`left:${x}px;top:${y}px`} @pointerdown=${(e: Event) => e.stopPropagation()} @contextmenu=${(e: Event) => e.preventDefault()}>
      ${c.kind === "furniture" || c.kind === "device"
        ? html`<button title=${this.t("fix_hint")} @click=${run(() => this.toggleFixed(c.kind, c.id))}>${fixed ? `🔓 ${this.t("unfix")}` : `🔒 ${this.t("fix")}`}</button>`
        : html`<button title=${this.t("lock_plan_hint")} @click=${run(() => this.toggleLockPlan())}>${this._doc.settings.lock_plan ? `🔓 ${this.t("plan_unlock")}` : `🔒 ${this.t("plan_lock")}`}</button>`}
      ${c.kind === "room" ? html`<button @click=${run(() => this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>` : nothing}
      ${c.kind === "furniture"
        ? html`<button @click=${run(() => this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${fixed} @click=${run(() => this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${fixed} @click=${run(() => this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>`
        : nothing}
      <button class="nf-ctx-danger" @click=${run(() => this.deleteItem(c.kind, c.id))}>✕ ${this.t("delete")}</button>
    </div>`;
  }

  /** Lock button in the form of an item. */
  private fixButton(kind: FixKind, id: string) {
    if (!this.isAdmin) return nothing;
    if (kind !== "furniture" && kind !== "device") {
      // part of the floor plan: shows the plan lock, a click releases it
      return this._doc.settings.lock_plan
        ? html`<button class="nf-btn nf-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${() => this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`
        : nothing;
    }
    const fixed = this.isFixedItem(kind, id);
    return html`<button class="nf-btn nf-fix" aria-pressed=${fixed} title=${this.t("fix_hint")} @click=${() => this.toggleFixed(kind, id)}>
      ${fixed ? `🔒 ${this.t("unfix")}` : `🔓 ${this.t("fix")}`}
    </button>`;
  }

  /** Where along a room edge an opening of this width sits when it is dropped at `world`; `free` skips the grid. */
  private dropOffset(room: Room, edge: number, world: Vec2, width: number, free: boolean): number {
    const a = room.points[edge];
    const b = room.points[(edge + 1) % room.points.length];
    const length = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const along = ((world[0] - a[0]) * (b[0] - a[0]) + (world[1] - a[1]) * (b[1] - a[1])) / length;
    return offsetOnEdge(length, along, width, free ? 0.01 : this._doc.settings.grid);
  }

  /** Selects one item (or none of that kind) of the plan. */
  private selectItem(kind: ItemKind, id: string | null): void {
    this.side.notice = null;
    // a selection made in the plan, or by a tool, opens the folded sidebar
    if (id) this._sideOpen = true;
    this.sel.select(kind, id, {
      roomOfDevice: (entityId) => {
        const placed = this.floor?.placements.find((p) => p.entity_id === entityId);
        return (placed && this.roomAt([placed.x, placed.z])) ?? null;
      },
      roomOfOpening: (openingId) => this.floor?.openings.find((o) => o.id === openingId)?.room_id ?? null,
    });
  }

  private get opening(): Opening | undefined {
    return this.sel.opening ? this.floor?.openings.find((o) => o.id === this.sel.opening) : undefined;
  }

  private get furnitureItem(): Furniture | undefined {
    return this.sel.furniture ? this.floor?.furniture.find((f) => f.id === this.sel.furniture) : undefined;
  }

  /** Add a door or window on the room edge nearest to a screen point. */
  private placeOpening(preset: OpeningPreset, screen: [number, number]): boolean {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return false;
    let best: { room: Room; edge: number; d: number; wall?: string; roomId?: string } | null = null;
    for (const w of floor.walls ?? []) {
      const host = openingHost({ room_id: "", edge: 0, wall: w.id }, floor.rooms, floor.walls ?? []);
      if (!host) continue;
      const [ax, ay] = this.toScreen(w.a);
      const [bx, by] = this.toScreen(w.b);
      const l2 = (bx - ax) ** 2 + (by - ay) ** 2 || 1;
      const t = Math.min(1, Math.max(0, ((screen[0] - ax) * (bx - ax) + (screen[1] - ay) * (by - ay)) / l2));
      const d = Math.hypot(screen[0] - ax - (bx - ax) * t, screen[1] - ay - (by - ay) * t);
      // a free wall wins over a room edge at the same distance
      const mid: Vec2 = [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2];
      const inside = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon(mid, r.points));
      if (d < SNAP_PX * 2.2 && (!best || d - 1 < best.d)) best = { room: host.room, edge: 0, d: d - 1, wall: w.id, roomId: inside?.id ?? w.id };
    }
    for (const room of floor.rooms) {
      for (let i = 0; i < room.points.length; i++) {
        const [ax, ay] = this.toScreen(room.points[i]);
        const [bx, by] = this.toScreen(room.points[(i + 1) % room.points.length]);
        const l2 = (bx - ax) ** 2 + (by - ay) ** 2 || 1;
        const t = Math.min(1, Math.max(0, ((screen[0] - ax) * (bx - ax) + (screen[1] - ay) * (by - ay)) / l2));
        const d = Math.hypot(screen[0] - ax - (bx - ax) * t, screen[1] - ay - (by - ay) * t);
        // the selected room wins on shared edges
        const score = d - (room.id === this.sel.room ? 0.5 : 0);
        if (d < SNAP_PX * 2.2 && (!best || score < best.d)) best = { room, edge: i, d: score };
      }
    }
    if (!best) return false;
    const { room, edge, wall } = best;
    const a = room.points[edge];
    const b = room.points[(edge + 1) % room.points.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const defaults = OPENING_PRESETS[preset];
    const type: OpeningType = defaults.type;
    const width = round(Math.min(defaults.width, Math.max(0.3, len - 0.1)));
    const opening: Opening = {
      id: uid("opening"),
      room_id: best.roomId ?? room.id,
      edge,
      ...(wall ? { wall } : {}),
      offset: this.dropOffset(room, edge, this.toWorld(...screen), width, false),
      width,
      type,
      sill: defaults.sill,
      height: defaults.height,
      hinge: "left",
      leaves: defaults.leaves,
      swing: "in",
      cover: null,
      contact: null,
      contact2: null,
      tilt: null,
    };
    this.change((_, f) => f.openings.push(opening));
    this._tool = "select";
    this.selectItem("opening", opening.id);
    return true;
  }

  private updateOpening(patch: Partial<Opening>): void {
    const id = this.sel.opening;
    this.change((_, floor) => Object.assign(floor.openings.find((o) => o.id === id)!, patch));
  }

  private deleteOpening(): void {
    const id = this.sel.opening;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("opening", id)) return;
    this.change((_, floor) => (floor.openings = floor.openings.filter((o) => o.id !== id)));
    this.sel.opening = null;
  }

  /**
   * Snap a furniture item against the nearest wall of its room: back to the wall (or a side, when it
   * stands sideways), flush with the wall face. Null when no wall is close enough.
   */
  private snapToWall(f: Furniture): { x: number; z: number; rotation: number } | null {
    return this.floor ? snapToWall(this.floor, f, this._doc.settings.wall_interior) : null;
  }

  private updateFurniture(patch: Partial<Furniture>): void {
    const id = this.sel.furniture;
    this.change((_, floor) => Object.assign(floor.furniture.find((f) => f.id === id)!, patch));
  }

  private mirrorFurniture(): void {
    const f = this.furnitureItem;
    if (!f || !this.isAdmin) return;
    this.updateFurniture({ mirror: !f.mirror });
  }

  private deleteFurniture(): void {
    const id = this.sel.furniture;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("furniture", id)) return;
    this.change((_, floor) => (floor.furniture = floor.furniture.filter((f) => f.id !== id)));
    this.sel.furniture = null;
  }

  private get device(): Placement | undefined {
    return this.sel.device ? this.floor?.placements.find((p) => p.entity_id === this.sel.device) : undefined;
  }

  private updateDevice(patch: Partial<Placement>): void {
    const id = this.sel.device;
    this.change((_, floor) => Object.assign(floor.placements.find((p) => p.entity_id === id)!, patch));
  }

  /** Close gaps between rooms of this floor and take the gap as interior wall thickness. */
  private closeFloorGaps(): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const { rooms, gaps } = closeGaps(floor.rooms);
    if (!gaps.length) {
      this.side.notice = this.t("gaps_none");
      return;
    }
    const thickness = suggestedThickness(gaps);
    this.change((doc, f) => {
      f.rooms = rooms;
      if (thickness) doc.settings.wall_interior = thickness;
    });
    this.side.notice = thickness
      ? this.t("gaps_closed_wall", { n: gaps.length, t: formatNumber(this.hass, thickness, 2) })
      : this.t("gaps_closed", { n: gaps.length });
  }

  private updateFloor(patch: Partial<Floor>): void {
    this.change((_, floor) => Object.assign(floor, patch));
  }

  private updateRoom(patch: Partial<Room>): void {
    const id = this.sel.room;
    this.change((_, floor) => Object.assign(floor.rooms.find((r) => r.id === id)!, patch));
  }

  // ------------------------------------------------------------------ rendering

  protected render(): TemplateResult {
    const floor = this.floor;
    const walls = floor ? generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []) : null;
    return html`
      ${renderPreview(this.host, this.lib.preview)}
      <div class="nf-editor ${this.narrow ? "nf-narrow" : ""}">
        <div class="nf-main">
          <div class="nf-toolbar">
            <div class="nf-seg" role="group" aria-label=${this.t("tool_select")}>
              ${(["select", "rect", "polygon", "wall", "opening", "furniture", "outdoor", "hole", "roof", "energy"] as Tool[]).map(
                (tool) => html`<button
                  aria-pressed=${this._tool === tool}
                  ?disabled=${!floor || (!this.isAdmin && tool !== "select")}
                  @click=${() => {
                    this._tool = tool;
                    this._draft = [];
                    this._cursor = null;
                    // a tool needs the sidebar (library, presets): open it beside the 3D pane
                    this._sideOpen = tool !== "select";
                  }}
                >
                  ${this.t(`tool_${tool}` as I18nKey)}
                </button>`,
              )}
            </div>
            <div class="nf-seg">
              <button ?disabled=${!this._canUndo} @click=${() => this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${() => this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${() => this.fit()}>${this.t("fit")}</button>
              <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${() => this.toggleSplit()}>${this.t("split_3d")}</button>
              ${this.isAdmin ? html`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${() => this.toggleLockPlan()}>${this.t("lock_plan")}</button>` : nothing}
            </div>
            ${walls?.warnings.length ? html`<span class="nf-warn">${this.t("overlap_warning")}</span>` : nothing}
          </div>
          <div class="nf-stage-pair ${this._split ? "nf-split" : ""}" style=${this._split && !this.narrow ? `--nf-split:${Math.round(this._splitRatio * 100)}%` : ""}>
          <div class="nf-canvas-wrap">
            ${this.houseTool ? html`<div class="nf-tool-note">${this.t(this._tool === "energy" ? "energy_only_note" : "roof_only_note")}</div>` : nothing}
            <svg
              class="nf-plan nf-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${() => {
                if (!this.drag) this._cursor = null;
              }}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
            >
              ${backgroundLayer(this.canvasContext(), this.bg, floor)} ${this.renderGrid()} ${this.renderGhost()} ${walls ? this.renderWalls(walls.walls) : nothing}
              ${floor ? this.renderOutdoor(floor) : nothing} ${floor ? this.renderRooms(floor) : nothing} ${floor ? this.renderFurniture(floor) : nothing}
              ${floor ? this.renderFreeWalls(floor) : nothing}
              ${floor && walls ? this.renderOpenings(floor, walls.walls) : nothing} ${floor ? this.renderMeter(floor) : nothing}
              ${floor && this._tool === "select" ? this.renderDevices(floor) : nothing}
              ${this.room && this.isAdmin && this._tool === "select" && !this.sel.opening && !this.sel.furniture && !this.isFixedItem("room", this.room.id) ? this.renderHandles(this.room) : nothing}
              ${floor ? this.renderOutdoorHandles(floor) : nothing}
              ${this.room && this._tool === "select" ? this.renderSplitMarks(this.room) : nothing}
              ${floor ? headroomLayer(this.canvasContext(), floor) : nothing}
              ${this._tool === "roof" ? svg`${roofSectionsLayer(this.canvasContext(), this.roof)}${roofWindowsLayer(this.canvasContext(), this.roof)}` : this._tool === "energy" ? svg`${roofSectionsLayer(this.canvasContext(), this.roof)}${solarLayer(this.canvasContext(), this.roof)}${energyMarkersLayer(this.canvasContext(), this.floor, this.sel.furniture)}` : nothing} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="nf-hint ${this._fixedHint ? "nf-hint-fixed" : ""}">${!floor ? this.t("hint_empty") : this._fixedHint ? this.t("fixed_drag_hint") : this.t(`hint_${this._tool}` as I18nKey)}</p>
          </div>
          ${this._split && !this.narrow
            ? html`<div class="nf-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`
            : nothing}
          ${this._split ? this.render3d() : nothing}
          </div>
        </div>
        ${this.renderAside(floor)}
      </div>
    `;
  }

  private renderGrid() {
    const { scale } = this._view;
    const { w, h } = this._size;
    const minor = scale >= 90 ? 0.1 : scale >= 30 ? 0.5 : 1;
    const major = scale >= 20 ? 1 : 5;
    const [x0, z0] = this.toWorld(0, 0);
    const [x1, z1] = this.toWorld(w, h);
    const lines: ReturnType<typeof svg>[] = [];
    const push = (step: number, cls: string) => {
      for (let x = Math.ceil(x0 / step) * step; x <= x1; x += step) {
        const sx = this.toScreen([x, 0])[0];
        lines.push(svg`<line class=${cls} x1=${sx} y1="0" x2=${sx} y2=${h} />`);
      }
      for (let z = Math.ceil(z0 / step) * step; z <= z1; z += step) {
        const sy = this.toScreen([0, z])[1];
        lines.push(svg`<line class=${cls} x1="0" y1=${sy} x2=${w} y2=${sy} />`);
      }
    };
    if (minor < major) push(minor, "nf-grid-minor");
    push(major, "nf-grid-major");
    const [ox, oy] = this.toScreen([0, 0]);
    lines.push(svg`<circle class="nf-origin" cx=${ox} cy=${oy} r="3" />`);
    return svg`<g pointer-events="none">${lines}</g>`;
  }

  /** Rooms of the floor below, as orientation. */
  private renderGhost() {
    const i = this._doc?.floors.findIndex((f) => f.id === this._floorId) ?? -1;
    const below = i > 0 ? this._doc.floors[i - 1] : undefined;
    if (!below) return nothing;
    return svg`<g pointer-events="none">${below.rooms.map(
      (r) => svg`<polygon class="nf-ghost" points=${r.points.map((p) => this.toScreen(p).join(",")).join(" ")} />`,
    )}</g>`;
  }

  private renderWalls(walls: Wall[]) {
    const H = this.floor?.height ?? 2.5;
    return svg`<g pointer-events="none">${walls.map((w) => {
      const low = w.height !== undefined && w.height < H - 0.01;
      const cls = `nf-wall${w.exterior ? " nf-wall-ext" : ""}${low ? " nf-wall-low" : ""}`;
      return svg`<polygon class=${cls} points=${w.footprint.map((p) => this.toScreen(p).join(",")).join(" ")} />`;
    })}</g>`;
  }

  /** Sets the height of one edge of a room, and of every wall piece shared with it. */
  /** The parts another room splits an edge into (start distances along the edge), in order; one part when whole. */
  private edgeParts(room: Room, edge: number): number[] {
    const floor = this.floor;
    if (!floor) return [0];
    const walls = generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []).walls;
    const starts = walls.flatMap((w) => w.sources.filter((s) => s.room_id === room.id && s.edge === edge).map((s) => s.t0));
    return starts.length ? [...new Set(starts)].sort((a, b) => a - b) : [0];
  }

  /** Set a wall height on a room edge (and on the rooms sharing it), or on one part of a split edge only. */
  private setEdgeHeight(room: Room, edge: number, height: number | null, part?: number): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    if (part !== undefined) {
      const n = this.edgeParts(room, edge).length;
      this.change((_, f) => {
        const r = f.rooms.find((x) => x.id === room.id);
        if (!r) return;
        const list = (r.wall_heights ?? []).slice(0, r.points.length);
        while (list.length < r.points.length) list.push(null);
        const cur = list[edge];
        const parts: (number | null)[] = Array.isArray(cur) ? [...cur] : new Array<number | null>(n).fill(typeof cur === "number" ? cur : null);
        while (parts.length < n) parts.push(null);
        parts[part] = height;
        list[edge] = parts.every((h) => h === parts[0]) ? parts[0] : parts;
        r.wall_heights = list.every((h) => h === null) ? undefined : list;
      });
      return;
    }
    const walls = generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []).walls;
    const sources = walls.filter((w) => w.sources.some((s) => s.room_id === room.id && s.edge === edge)).flatMap((w) => w.sources);
    if (!sources.some((s) => s.room_id === room.id && s.edge === edge)) sources.push({ room_id: room.id, edge, t0: 0, t1: 0 });
    this.change((_, f) => {
      for (const s of sources) {
        const r = f.rooms.find((x) => x.id === s.room_id);
        if (!r) continue;
        const list = (r.wall_heights ?? []).slice(0, r.points.length);
        while (list.length < r.points.length) list.push(null);
        list[s.edge] = height;
        r.wall_heights = list.every((h) => h === null) ? undefined : list;
      }
    });
  }

  /** Cut a wall (or one part of it) in the middle: a split point of its own, the new part keeps the height. */
  private splitEdge(room: Room, edge: number, part: number | undefined): void {
    if (!this.isAdmin) return;
    const pts = room.points;
    const len = Math.hypot(pts[(edge + 1) % pts.length][0] - pts[edge][0], pts[(edge + 1) % pts.length][1] - pts[edge][1]);
    const starts = this.edgeParts(room, edge);
    const s0 = part === undefined ? 0 : starts[part];
    const s1 = part === undefined ? len : (starts[part + 1] ?? len);
    if (s1 - s0 < 0.4) return;
    const at = Math.round(((s0 + s1) / 2) * 100) / 100;
    this.change((_, f) => {
      const r = f.rooms.find((x) => x.id === room.id);
      if (!r) return;
      const splits = (r.wall_splits ?? []).slice(0, r.points.length);
      while (splits.length < r.points.length) splits.push(null);
      splits[edge] = [...(splits[edge] ?? []), at].sort((a, b) => a - b);
      r.wall_splits = splits;
      // a per-part height list grows by the new part, which starts with the height of the one it was cut from
      const cur = r.wall_heights?.[edge];
      if (Array.isArray(cur)) {
        const k = part ?? 0;
        cur.splice(k + 1, 0, cur[k] ?? null);
      }
    });
  }

  /** Move a split point along its edge (kept clear of the ends and of other stops). */
  private moveSplit(room: Room, edge: number, from: number, to: number): void {
    const pts = room.points;
    const len = Math.hypot(pts[(edge + 1) % pts.length][0] - pts[edge][0], pts[(edge + 1) % pts.length][1] - pts[edge][1]);
    const others = this.edgeParts(room, edge).filter((s) => Math.abs(s - from) > 1e-3 && s > 0);
    let at = Math.max(0.1, Math.min(len - 0.1, Math.round(to * 100) / 100));
    if (others.some((s) => Math.abs(s - at) < 0.1)) at = from;
    this.change((_, f) => {
      const r = f.rooms.find((x) => x.id === room.id);
      const list = r?.wall_splits?.[edge];
      if (!list) return;
      const k = list.findIndex((d) => Math.abs(d - from) < 1e-3);
      if (k >= 0) list[k] = at;
      list.sort((a, b) => a - b);
    });
  }

  /** Remove a split point: the part behind it joins the one before (whose height stays). */
  private joinSplit(room: Room, edge: number, at: number, part: number): void {
    this.change((_, f) => {
      const r = f.rooms.find((x) => x.id === room.id);
      if (!r?.wall_splits?.[edge]) return;
      const list = r.wall_splits[edge]!.filter((d) => Math.abs(d - at) > 1e-3);
      r.wall_splits[edge] = list.length ? list : null;
      if (r.wall_splits.every((l) => !l)) r.wall_splits = undefined;
      const cur = r.wall_heights?.[edge];
      if (Array.isArray(cur)) {
        cur.splice(part, 1);
        if (cur.every((h) => h === cur[0])) r.wall_heights![edge] = cur[0] ?? null;
      }
    });
  }

  /** Marks on the selected room's edges where a wall is split by hand. */
  private renderSplitMarks(room: Room) {
    const pts = room.points;
    return svg`${(room.wall_splits ?? []).flatMap((list, i) => {
      if (!list || i >= pts.length) return [];
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
      const ux = (b[0] - a[0]) / l;
      const uz = (b[1] - a[1]) / l;
      return list.map((d) => {
        const [x, y] = this.toScreen([a[0] + ux * d, a[1] + uz * d]);
        // a short tick across the wall
        return svg`<line class="nf-split-mark" x1=${x - uz * 7} y1=${y + ux * 7} x2=${x + uz * 7} y2=${y - ux * 7} />`;
      });
    })}`;
  }

  /** Height list per wall of a room in the room form (always open); hovering a row lights the wall up. */
  private renderEdgeHeights(room: Room) {
    const H = this.floor!.height;
    const n = room.points.length;
    // which edges are outer walls (their default thickness is the exterior one)
    const s = this._doc.settings;
    const outer = new Set<number>();
    for (const w of generateWalls(this.floor!.rooms, { exterior: s.wall_exterior, interior: s.wall_interior }, this.floor!.walls ?? []).walls) {
      if (w.exterior) for (const src of w.sources) if (src.room_id === room.id) outer.add(src.edge);
    }
    const setThick = (edge: number, v: number | null) =>
      this.change((_, f) => {
        const r = f.rooms.find((x) => x.id === room.id);
        if (!r) return;
        const list = (r.wall_thickness ?? []).slice(0, r.points.length);
        while (list.length < r.points.length) list.push(null);
        list[edge] = v;
        r.wall_thickness = list.every((t) => t === null) ? undefined : list;
      });
    return html`<div class="nf-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${room.points.flatMap((a, i) => {
        const b = room.points[(i + 1) % n];
        const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        const entry = room.wall_heights?.[i] ?? null;
        const on = () => (this.sel.edge = i);
        const off = () => (this.sel.edge = null);
        // an edge another room splits: one row per part, each with its own height (#77)
        const starts = this.edgeParts(room, i);
        const parts = starts.length > 1 ? starts.map((_, k) => k) : [undefined];
        return parts.map((part) => {
          const h = part === undefined ? (Array.isArray(entry) ? (entry[0] ?? null) : entry) : Array.isArray(entry) ? (entry[part] ?? null) : entry;
          const partLen = part === undefined ? len : (starts[part + 1] ?? len) - starts[part];
          const set = (v: number | null) => this.setEdgeHeight(room, i, v, part);
          return html`<div
            class="nf-edge-height${i === this.sel.edge ? " nf-edge-on" : ""}${h !== null ? " nf-edge-low" : ""}"
            @mouseenter=${on}
            @mouseleave=${off}
            @focusin=${on}
            @focusout=${off}
          >
            <span
              ><b>${this.t("wall_n", { a: i + 1, b: ((i + 1) % n) + 1 })}${part === undefined ? "" : ` · ${this.t("wall_part", { n: part + 1 })}`}</b><br /><span class="nf-muted"
                >${formatNumber(this.hass, partLen, 2)} m</span
              ></span
            >
            ${h === 0
              ? html`<span class="nf-muted">${this.t("wall_none")}</span>`
              : this.num(this.t("wall_height"), h ?? H, (v) => set(v >= H - 0.005 ? null : Math.max(0.05, v)), 0.05, 0.05)}
            ${this.isAdmin && h !== null ? html`<button class="nf-btn" title=${this.t("wall_height_full")} @click=${() => set(null)}>↥</button>` : nothing}
            ${this.isAdmin && h !== 0 ? html`<button class="nf-btn" title=${this.t("wall_none_hint")} @click=${() => set(0)}>${this.t("wall_none")}</button>` : nothing}
            ${this.isAdmin && partLen >= 0.4 ? html`<button class="nf-btn" title=${this.t("wall_split_hint")} @click=${() => this.splitEdge(room, i, part)}>✂</button>` : nothing}
            ${(part === undefined || part === 0) && h !== 0
              ? html`<span class="nf-wide nf-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.num(this.t("edge_thickness"), room.wall_thickness?.[i] ?? (outer.has(i) ? s.wall_exterior : s.wall_interior), (v) => {
                    const def = outer.has(i) ? s.wall_exterior : s.wall_interior;
                    const t = Math.min(1.5, Math.max(0.02, Math.round(v * 1000) / 1000));
                    setThick(i, Math.abs(t - def) < 0.0005 ? null : t);
                  }, 0.01, 0.02)}
                  ${this.isAdmin && room.wall_thickness?.[i] != null ? html`<button class="nf-btn" title=${this.t("wall_thickness_reset")} @click=${() => setThick(i, null)}>↺</button>` : nothing}</span
                >`
              : nothing}
            ${part !== undefined && part > 0 && (room.wall_splits?.[i] ?? []).some((d) => Math.abs(d - starts[part]) < 1e-3)
              ? html`<span class="nf-wide nf-split-row"
                  >${this.num(this.t("wall_split_at"), starts[part], (v) => this.moveSplit(room, i, starts[part], v), 0.05, 0.1)}
                  ${this.isAdmin ? html`<button class="nf-btn" title=${this.t("wall_join_hint")} @click=${() => this.joinSplit(room, i, starts[part], part)}>⨉</button>` : nothing}</span
                >`
              : nothing}
          </div>`;
        });
      })}
      <p class="nf-sub">${this.t("room_wall_hint")}</p>
    </div>`;
  }


  /** Corner handles of the selected outdoor area (a rectangle stays a rectangle while dragging). */
  private renderOutdoorHandles(floor: Floor) {
    const a = this.sel.outdoor ? floor.outdoor.find((x) => x.id === this.sel.outdoor) : undefined;
    if (!a || !this.isAdmin || this._tool !== "select" || this._doc.settings.lock_plan) return nothing;
    return svg`${a.points.map((p, i) => {
      const [x, y] = this.toScreen(p);
      return svg`<g class="nf-vertex" data-out-vertex=${`${a.id}:${i}`}><circle cx=${x} cy=${y} r="16" class="nf-hit" /><circle cx=${x} cy=${y} r="6" /></g>`;
    })}`;
  }

  private renderOutdoor(floor: Floor) {
    return svg`<g>${floor.outdoor.map((a) => {
      const pts = a.points.map((p) => this.toScreen(p).join(",")).join(" ");
      const [cx, cy] = this.toScreen(centroid(a.points));
      const b = bounds(a.points);
      const big = Math.min(b.x1 - b.x0, b.z1 - b.z0) * this._view.scale > 40;
      return svg`<g data-outdoor=${a.id} class=${`nf-out nf-out-${a.type}${a.id === this.sel.outdoor ? " nf-out-sel" : ""}`}>
        <polygon points=${pts} />
        ${big ? svg`<text x=${cx} y=${cy + 4}>${this.t(`out_${a.type}` as I18nKey)}</text>` : nothing}
      </g>`;
    })}</g>`;
  }

  private renderRooms(floor: Floor) {
    return svg`
      <g>${floor.rooms.map((r) => {
        const pts = r.points.map((p) => this.toScreen(p).join(",")).join(" ");
        return svg`<polygon data-room=${r.id} class=${r.id === this.sel.room ? "nf-room nf-room-sel" : "nf-room"} points=${pts} />`;
      })}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${floor.rooms.map((r) => {
        const [cx, cy] = this.toScreen(centroid(r.points));
        return svg`<text class="nf-room-name" x=${cx} y=${cy - 2}>${r.name}</text>
          <text class="nf-room-area" x=${cx} y=${cy + 14}>${this.t("area_m2", { a: formatNumber(this.hass, polygonArea(r.points), 1) })}</text>`;
      })}</g>
    `;
  }

  /** The wall of the selected room whose row in the wall height list is hovered. */
  private renderEdgeHighlight() {
    const r = this.room;
    const i = this.sel.edge;
    if (!r || i === null || i >= r.points.length) return nothing;
    const [x1, y1] = this.toScreen(r.points[i]);
    const [x2, y2] = this.toScreen(r.points[(i + 1) % r.points.length]);
    return svg`<line class="nf-edge-hi" pointer-events="none" x1=${x1} y1=${y1} x2=${x2} y2=${y2} />`;
  }

  private renderMeter(floor: Floor) {
    const m = this._doc.energy?.meter;
    if (!m || m.floor_id !== floor.id) return nothing;
    const [x, y] = this.toScreen([m.x, m.z]);
    return svg`<g class="nf-meter" transform="translate(${x} ${y})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`;
  }

  private renderFurniture(floor: Floor) {
    const k = this._view.scale;
    return svg`<g>${floor.furniture.map((f) => {
      const sel = f.id === this.sel.furniture;
      const [cx, cy] = this.toScreen([f.x, f.z]);
      const big = Math.min(f.w, f.d) * k > 44;
      // the handle sits in front of the item; dragging it turns the item
      const a = (f.rotation * Math.PI) / 180;
      const reach = f.d / 2 + Math.max(0.3, 26 / k);
      const [hx, hy] = this.toScreen([f.x - Math.sin(a) * reach, f.z + Math.cos(a) * reach]);
      const [fx, fy] = this.toScreen([f.x - Math.sin(a) * (f.d / 2), f.z + Math.cos(a) * (f.d / 2)]);
      const lit = isLamp(f.type) && !!f.entity && f.entity !== "none" && this.hass?.states[f.entity]?.state === "on";
      return svg`<g data-furniture=${f.id} class=${`nf-furn${sel ? " nf-furn-sel" : ""}${lit ? " nf-furn-lit" : ""}${(ENERGY_DEVICES as readonly string[]).includes(f.type) ? " nf-energy-item" : ""}`}>
        <g transform="translate(${cx} ${cy}) rotate(${f.rotation}) scale(${f.mirror ? -k : k} ${k})">
          <rect class="nf-furn-body" x=${-f.w / 2} y=${-f.d / 2} width=${f.w} height=${f.d} />
          <g class="nf-furn-sym">${furnitureSymbol(f.type, f.w, f.d)}</g>
          <line class="nf-furn-front" x1=${-f.w / 2} y1=${f.d / 2} x2=${f.w / 2} y2=${f.d / 2} />
        </g>
        ${big ? svg`<text x=${cx} y=${cy + 4}>${furnitureName(this.hass, f.type)}</text>` : nothing}
      </g>
      ${sel && this.isAdmin && !f.locked
        ? ([[-1, -1], [1, -1], [1, 1], [-1, 1]] as const).map(([sx, sz]) => {
            const [x, y] = this.toScreen([f.x + (sx * f.w * Math.cos(a)) / 2 - (sz * f.d * Math.sin(a)) / 2, f.z + (sx * f.w * Math.sin(a)) / 2 + (sz * f.d * Math.cos(a)) / 2]);
            return svg`<g class="nf-resize" data-resize=${`${f.id}:${sx}:${sz}`}>
              <circle cx=${x} cy=${y} r="14" class="nf-hit" />
              <rect x=${x - 5} y=${y - 5} width="10" height="10" rx="2" />
            </g>`;
          })
        : nothing}
      ${sel
        ? (() => {
            // behind the item, away from the turn handle in front
            const [lx, ly] = this.toScreen([f.x + Math.sin(a) * (f.d / 2 + 18 / k), f.z - Math.cos(a) * (f.d / 2 + 18 / k)]);
            return svg`<text class="nf-dim" x=${lx} y=${ly + 4}>${formatNumber(this.hass, f.w, 2)} × ${formatNumber(this.hass, f.d, 2)} m</text>`;
          })()
        : nothing}
      ${sel && f.locked ? svg`<text class="nf-lock" x=${hx} y=${hy + 5}>🔒</text>` : nothing}
      ${sel && this.isAdmin && !f.locked
        ? svg`<g class="nf-rotate" data-rotate=${f.id}>
            <line x1=${fx} y1=${fy} x2=${hx} y2=${hy} />
            <circle cx=${hx} cy=${hy} r="16" class="nf-hit" />
            <circle cx=${hx} cy=${hy} r="8" />
            <path d="M${hx - 4} ${hy - 1}a4 4 0 1 1 2 3.5" />
          </g>`
        : nothing}`;
    })}</g>`;
  }

  private renderOpenings(floor: Floor, walls: Wall[]) {
    return svg`<g>${floor.openings.map((o) => {
      const host = openingHost(o, floor.rooms, floor.walls ?? []);
      if (!host) return nothing;
      const { room, edge } = host;
      const hit = locateOpening(walls, o, host);
      const p0 = pointOnRoomEdge(room, edge, o.offset - o.width / 2);
      const p1 = pointOnRoomEdge(room, edge, o.offset + o.width / 2);
      const ux = (p1[0] - p0[0]) / (o.width || 1);
      const uz = (p1[1] - p0[1]) / (o.width || 1);
      // normal into the room (room outlines may run either way round)
      const sgn = signedArea(room.points) >= 0 ? 1 : -1;
      const n: Vec2 = [-uz * sgn, ux * sgn];
      // gap across the whole wall thickness
      let across: [number, number] = [0.06, 0.06];
      if (hit) across = hit.wall.free || hit.wall.roomLeft === room.id ? [hit.wall.left, hit.wall.right] : [hit.wall.right, hit.wall.left];
      const q = (p: Vec2, k: number) => this.toScreen([p[0] + n[0] * k, p[1] + n[1] * k]);
      const gap = [q(p0, across[0] + 0.01), q(p1, across[0] + 0.01), q(p1, -across[1] - 0.01), q(p0, -across[1] - 0.01)];
      const sel = o.id === this.sel.opening;
      const style = openingStyle(o, hit?.wall.exterior ?? false);
      const front = o.type === "door" && isFrontDoor(style);
      const cls = `nf-open nf-open-${o.type}${front ? " nf-open-front" : ""}${sel ? " nf-open-sel" : ""}`;
      let symbol;
      if (o.type === "garage") {
        // door panel just inside the room, with its track under the ceiling drawn dashed
        const a0 = q(p0, across[0] - 0.04);
        const a1 = q(p1, across[0] - 0.04);
        const b0 = q(p0, across[0] + Math.min(2, o.height));
        const b1 = q(p1, across[0] + Math.min(2, o.height));
        symbol = svg`<line x1=${a0[0]} y1=${a0[1]} x2=${a1[0]} y2=${a1[1]} />
          <path class="nf-open-track" d="M${a0[0]} ${a0[1]}L${b0[0]} ${b0[1]}M${a1[0]} ${a1[1]}L${b1[0]} ${b1[1]}" />`;
      } else if (o.type === "door") {
        // leaves swinging into the room (or out of it) from the hinge side; "left" is seen from the
        // room, so it depends on which way round the outline runs
        const out = o.swing === "out";
        const face = out ? -across[1] : across[0];
        const hingeAtP0 = (o.hinge === "left") === sgn > 0;
        const two = o.leaves === 2;
        // sidelights: fixed glass beside the leaf, drawn like window panes
        let l0 = p0;
        let l1 = p1;
        let panes: [Vec2, Vec2][] = [];
        const lights = sidelightLayout(o.width, style, hingeAtP0, o);
        if (lights) {
          const at = (k: number): Vec2 => (k <= 0.02 ? p0 : k >= o.width - 0.02 ? p1 : pointOnRoomEdge(room, edge, o.offset - o.width / 2 + k));
          l0 = at(lights.x0);
          l1 = at(lights.x1);
          panes = lights.panels.map(([a, b]) => [at(a), at(b)]);
        }
        const midP: Vec2 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
        const leafW = (two ? 0.5 : 1) * Math.hypot(l1[0] - l0[0], l1[1] - l0[1]);
        const mid = (across[0] - across[1]) / 2;
        const paneLines = panes.map(([a, b]) => {
          const a0 = q(a, mid + 0.035);
          const b0 = q(b, mid + 0.035);
          const a1 = q(a, mid - 0.035);
          const b1 = q(b, mid - 0.035);
          return svg`<line class="nf-open-pane" x1=${a0[0]} y1=${a0[1]} x2=${b0[0]} y2=${b0[1]} /><line class="nf-open-pane" x1=${a1[0]} y1=${a1[1]} x2=${b1[0]} y2=${b1[1]} />`;
        });
        const arc = (hinge: Vec2, free: Vec2) => {
          const [hx, hy] = q(hinge, face);
          const [fx, fy] = q(free, face);
          const leaf = q(hinge, face + (out ? -leafW : leafW));
          const r = leafW * this._view.scale;
          const cross = (leaf[0] - hx) * (fy - hy) - (leaf[1] - hy) * (fx - hx);
          return svg`<path d="M${hx} ${hy}L${leaf[0]} ${leaf[1]}A${r} ${r} 0 0 ${cross > 0 ? 1 : 0} ${fx} ${fy}" />`;
        };
        symbol = svg`${paneLines}${
          style === "passage"
            ? svg`<line class="nf-open-passage" x1=${q(p0, mid)[0]} y1=${q(p0, mid)[1]} x2=${q(p1, mid)[0]} y2=${q(p1, mid)[1]} />`
            : style === "sliding"
            ? svg`<line x1=${q(l0, face)[0]} y1=${q(l0, face)[1]} x2=${q(l1, face)[0]} y2=${q(l1, face)[1]} />`
            : two
              ? svg`${arc(l0, midP)}${arc(l1, midP)}`
              : arc(hingeAtP0 ? l0 : l1, hingeAtP0 ? l1 : l0)
        }`;
      } else {
        // two panes in the middle of the wall; a double window has a post in the middle
        const mid = (across[0] - across[1]) / 2;
        const a0 = q(p0, mid + 0.035);
        const a1 = q(p1, mid + 0.035);
        const b0 = q(p0, mid - 0.035);
        const b1 = q(p1, mid - 0.035);
        const midP: Vec2 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        const m0 = q(midP, across[0]);
        const m1 = q(midP, -across[1]);
        symbol = svg`<line x1=${a0[0]} y1=${a0[1]} x2=${a1[0]} y2=${a1[1]} /><line x1=${b0[0]} y1=${b0[1]} x2=${b1[0]} y2=${b1[1]} />${
          o.leaves === 2 ? svg`<line x1=${m0[0]} y1=${m0[1]} x2=${m1[0]} y2=${m1[1]} />` : nothing
        }`;
      }
      return svg`<g data-opening=${o.id} class=${cls}>
        <polygon class="nf-open-gap" points=${gap.map((p) => p.join(",")).join(" ")} />
        ${symbol}
      </g>`;
    })}</g>`;
  }

  private renderDevices(floor: Floor) {
    return svg`<g>${floor.placements.map((pl) => {
      const kind = kindOf(pl.entity_id);
      if (!kind) return nothing;
      const [x, y] = this.toScreen([pl.x, pl.z]);
      const on = this.hass?.states[pl.entity_id]?.state === "on";
      const sel = pl.entity_id === this.sel.device;
      const cls = `nf-device${on ? " nf-device-on" : ""}${sel ? " nf-device-sel" : ""}`;
      return svg`${kind === "camera" ? this.renderCameraWedge(pl, sel) : nothing}<g data-device=${pl.entity_id} class=${cls} transform="translate(${x} ${y})">
        <title>${entityName(this.hass, pl.entity_id)}</title>
        <circle r="18" class="nf-hit" /><circle r="12" />
        <path d=${iconPath(kind)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${sel && pl.locked ? svg`<text class="nf-lock" x=${x + 16} y=${y - 12}>🔒</text>` : nothing}`;
    })}</g>`;
  }

  /** A camera's field of view in the plan; when selected, a handle at its far edge turns it and sets its reach. */
  private renderCameraWedge(pl: Placement, sel: boolean) {
    const dome = pl.mount === "ceiling";
    const fov = pl.fov ?? (dome ? 360 : 90);
    const reach = pl.reach ?? (dome ? 3 : 4.5);
    const a = ((pl.rotation ?? 0) * Math.PI) / 180;
    const at = (t: number, r: number): [number, number] => this.toScreen([pl.x - Math.sin(a + t) * r, pl.z + Math.cos(a + t) * r]);
    const [cx, cy] = this.toScreen([pl.x, pl.z]);
    const half = ((Math.min(fov, 359.9) * Math.PI) / 180) / 2;
    const [x0, y0] = at(-half, reach);
    const [x1, y1] = at(half, reach);
    const rp = reach * this._view.scale;
    const path = fov >= 360 ? "" : `M${cx} ${cy}L${x0} ${y0}A${rp} ${rp} 0 ${half > Math.PI / 2 ? 1 : 0} 1 ${x1} ${y1}Z`;
    const [hx, hy] = at(0, reach);
    return svg`<g class="nf-wedge ${sel ? "nf-wedge-sel" : ""}">
      ${fov >= 360 ? svg`<circle cx=${cx} cy=${cy} r=${rp} />` : svg`<path d=${path} />`}
      ${sel && this.isAdmin && !pl.locked
        ? svg`<g class="nf-rotate" data-aim=${pl.entity_id}>
            <line x1=${cx} y1=${cy} x2=${hx} y2=${hy} />
            <circle cx=${hx} cy=${hy} r="16" class="nf-hit" />
            <circle cx=${hx} cy=${hy} r="8" />
            <path d="M${hx - 4} ${hy - 1}a4 4 0 1 1 2 3.5" />
          </g>`
        : nothing}
    </g>`;
  }

  private renderHandles(room: Room) {
    const pts = room.points;
    const n = pts.length;
    const edges = pts.map((a, i) => {
      const b = pts[(i + 1) % n];
      const [ax, ay] = this.toScreen(a);
      const [bx, by] = this.toScreen(b);
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const mx = (ax + bx) / 2;
      const my = (ay + by) / 2;
      // label outside the room: offset along the edge normal away from the centroid
      const [cx, cy] = this.toScreen(centroid(pts));
      let nx = -(by - ay);
      let ny = bx - ax;
      const nl = Math.hypot(nx, ny) || 1;
      nx /= nl;
      ny /= nl;
      if (nx * (mx - cx) + ny * (my - cy) < 0) {
        nx = -nx;
        ny = -ny;
      }
      const screenLen = Math.hypot(bx - ax, by - ay);
      return svg`
        ${screenLen > 50 ? svg`<text class="nf-dim" x=${mx + nx * 16} y=${my + ny * 16 + 4}>${formatNumber(this.hass, len, 2)} m</text>` : nothing}
        ${screenLen > 36 ? svg`<g data-mid=${i} class="nf-mid"><circle cx=${mx} cy=${my} r="14" class="nf-hit" /><circle cx=${mx} cy=${my} r="6" /><path d="M${mx - 3} ${my}h6M${mx} ${my - 3}v6" /></g>` : nothing}
      `;
    });
    const vertices = pts.map((p, i) => {
      const [x, y] = this.toScreen(p);
      return svg`<g data-vertex=${i} class=${i === this.sel.corner ? "nf-vertex nf-vertex-sel" : "nf-vertex"}><circle cx=${x} cy=${y} r="16" class="nf-hit" /><circle cx=${x} cy=${y} r="6" /></g>
        <text class="nf-vertex-no" x=${x + 9} y=${y - 9}>${i + 1}</text>`;
    });
    return svg`<g>${edges}${vertices}</g>`;
  }

  private renderDraft() {
    const drag = this.drag;
    if (drag?.kind === "freewall") {
      const [x0, y0] = this.toScreen(drag.start);
      const [x1, y1] = this.toScreen(drag.end);
      const l = Math.hypot(drag.end[0] - drag.start[0], drag.end[1] - drag.start[1]);
      return svg`<g pointer-events="none">
        <line class="nf-draft nf-draft-wall" x1=${x0} y1=${y0} x2=${x1} y2=${y1} />
        <text class="nf-dim" x=${(x0 + x1) / 2} y=${(y0 + y1) / 2 - 10}>${formatNumber(this.hass, l, 2)} m</text>
      </g>`;
    }
    if (drag?.kind === "rect") {
      const [x0, y0] = this.toScreen(drag.start);
      const [x1, y1] = this.toScreen(drag.end);
      const w = Math.abs(drag.end[0] - drag.start[0]);
      const d = Math.abs(drag.end[1] - drag.start[1]);
      return svg`<g pointer-events="none">
        <rect class="nf-draft" x=${Math.min(x0, x1)} y=${Math.min(y0, y1)} width=${Math.abs(x1 - x0)} height=${Math.abs(y1 - y0)} />
        <text class="nf-dim" x=${(x0 + x1) / 2} y=${Math.min(y0, y1) - 8}>${formatNumber(this.hass, w, 2)} × ${formatNumber(this.hass, d, 2)} m</text>
      </g>`;
    }
    if (this._tool !== "polygon" && this._tool !== "measure") return nothing;
    const pts = [...this._draft, ...(this._cursor ? [this._cursor] : [])].map((p) => this.toScreen(p));
    return svg`<g pointer-events="none">
      ${pts.length > 1 ? svg`<polyline class="nf-draft" points=${pts.map((p) => p.join(",")).join(" ")} />` : nothing}
      ${this._tool === "measure"
        ? this._draft.slice(1).map((p, i) => {
            const a = this.toScreen(this._draft[i]);
            const b = this.toScreen(p);
            return svg`<text class="nf-dim" x=${(a[0] + b[0]) / 2} y=${(a[1] + b[1]) / 2 - 6}>${formatNumber(this.hass, Math.hypot(p[0] - this._draft[i][0], p[1] - this._draft[i][1]), 2)} m</text>`;
          })
        : nothing}
      ${this._draft.map((p, i) => {
        const [x, y] = this.toScreen(p);
        return svg`<circle class=${i === 0 && this._draft.length >= 3 ? "nf-draft-pt nf-draft-first" : "nf-draft-pt"} cx=${x} cy=${y} r=${i === 0 && this._draft.length >= 3 ? 9 : 5} />`;
      })}
      ${this._cursor ? svg`<circle class="nf-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />` : nothing}
    </g>`;
  }

  private renderGuides() {
    const g = this._guides;
    const { w, h } = this._size;
    return svg`<g pointer-events="none">
      ${g.x !== undefined ? svg`<line class="nf-guide" x1=${this.toScreen([g.x, 0])[0]} y1="0" x2=${this.toScreen([g.x, 0])[0]} y2=${h} />` : nothing}
      ${g.z !== undefined ? svg`<line class="nf-guide" x1="0" y1=${this.toScreen([0, g.z])[1]} x2=${w} y2=${this.toScreen([0, g.z])[1]} />` : nothing}
      ${g.point ? svg`<circle class="nf-snap" cx=${this.toScreen(g.point)[0]} cy=${this.toScreen(g.point)[1]} r="9" />` : nothing}
    </g>`;
  }

  /** A tap in the 3D pane: select there, and fold the sidebar away (the bar under the pane has the essentials). */
  private selectFrom3d(kind: "room" | "furniture" | "device", id: string | null): void {
    this.selectItem(kind, id);
    this._sideOpen = false;
  }

  private setSidePinned(pinned: boolean): void {
    this._sidePinned = pinned;
    this._sideOpen = false;
    try {
      localStorage.setItem("nextfloor.sidePinned", pinned ? "1" : "0");
    } catch {
      // no storage
    }
  }

  /** The sidebar: always beside the plan, or, next to the 3D pane, folded to a strip while idle. */
  private renderAside(floor: Floor | undefined) {
    const folding = this._split && !this._sidePinned && !this.narrow;
    if (!folding) return html`<aside class="nf-side">${this.renderPinRow()}${this.renderSide(floor)}</aside>`;
    const open = this._sideOpen;
    if (!open) {
      return html`<aside class="nf-side nf-side-strip">
        <button class="nf-strip-btn" title=${this.t("side_open")} @click=${() => (this._sideOpen = true)}>☰</button>
        ${this.sel.furniture || this.sel.device || this.sel.opening
          ? html`<button class="nf-strip-btn nf-strip-hot" title=${this.t("side_details")} @click=${() => (this._sideOpen = true)}>⚙</button>`
          : nothing}
        <button class="nf-strip-btn" title=${this.t("tool_furniture")} @click=${() => ((this._tool = "furniture"), (this._draft = []), (this._sideOpen = true))}>🛋</button>
        <button class="nf-strip-btn" title=${this.t("tool_opening")} @click=${() => ((this._tool = "opening"), (this._draft = []), (this._sideOpen = true))}>🚪</button>
      </aside>`;
    }
    // open over the 3D pane, so the pane keeps its size
    return html`<aside class="nf-side nf-side-strip"></aside>
      <aside class="nf-side nf-side-overlay">
        ${this.renderPinRow(true)}
        ${this.renderSide(floor)}
      </aside>`;
  }

  private renderPinRow(overlay = false) {
    if (!this._split || this.narrow) return nothing;
    return html`<div class="nf-pin-row">
      ${overlay ? html`<button class="nf-btn" @click=${() => (this._sideOpen = false)}>${this.t("side_close")}</button>` : nothing}
      <button class="nf-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${() => this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned ? "side_pinned" : "side_pin")}
      </button>
    </div>`;
  }

  private renderSide(floor: Floor | undefined) {
    const room = this.room;
    const admin = this.isAdmin;
    if (this._tool === "roof") return renderRoofPanel(this.roofDeps());
    if (this._tool === "energy") return this.renderEnergyPanel();
    // furnishing: the library and the selected item come first
    if (this._tool === "furniture" && floor && admin) {
      return html`${this.furnitureItem ? renderFurnitureForm(this.host, this.furnitureItem, this.furnitureActions()) : nothing} ${renderLibrary(this.host, this.lib, this.room?.name, this.libraryActions())}`;
    }
    // a selected item shows only its own form, with a way back to the floor and room
    const item =
      this._tool === "measure"
        ? null
        : this.furnitureItem
          ? renderFurnitureForm(this.host, this.furnitureItem, this.furnitureActions())
          : this.opening
            ? renderOpeningForm(this.host, this.opening, this.openingActions())
            : this.device
              ? renderDeviceForm(this.host, this.device, this.deviceActions())
              : this.outdoorArea
                ? renderOutdoorForm(this.host, this.outdoorArea, this.outdoorActions())
                : this.freeWall
                  ? renderFreeWallForm(this.host, this.freeWall, this.freeWallActions())
                  : null;
    if (item) {
      return html`<button class="nf-btn nf-back" @click=${() => this.selectItem("room", this.sel.room)}>‹ ${this.t(room ? "back_to_room" : "back_to_floor", { room: room?.name ?? "" })}</button>
        ${item}`;
    }
    if (room && this._tool !== "measure") {
      return html`<button class="nf-btn nf-back" @click=${() => this.selectItem("room", null)}>‹ ${this.t("back_to_floor")}</button>
        ${renderRoomForm(this.host, this.side, room, this.roomActions(room))} ${renderDeviceList(this.host, this.side, room, this.deviceListActions())}`;
    }
    return html`
      ${admin ? nothing : html`<p class="nf-note">${this.t("read_only")}</p>`}
      ${renderFloors(this.host, this.side, this.floorActions(), floor, this._floorId)}
      ${this._tool === "measure" && floor
        ? renderMeasureForm(this.host, this.measureState(), this.measureActions())
        : this.freeWall
        ? renderFreeWallForm(this.host, this.freeWall, this.freeWallActions())
        : this.outdoorArea
        ? renderOutdoorForm(this.host, this.outdoorArea, this.outdoorActions())
        : this.opening
        ? renderOpeningForm(this.host, this.opening, this.openingActions())
        : this.furnitureItem
          ? renderFurnitureForm(this.host, this.furnitureItem, this.furnitureActions())
          : this.device
            ? renderDeviceForm(this.host, this.device, this.deviceActions())
          : room
            ? html`${renderRoomForm(this.host, this.side, room, this.roomActions(room))} ${renderDeviceList(this.host, this.side, room, this.deviceListActions())}`
            : floor
              ? renderRoomList(this.host, floor, { select: (id) => this.selectItem("room", id) })
              : nothing}
      ${admin ? renderStartView(this.host, () => this.paneView()) : nothing} ${admin ? renderFavorites(this.host) : nothing}
      ${renderHelpLinks(this.host)}
      ${admin && SHOW_PRESENCE ? renderPresence(this.host) : nothing}
      ${floor && admin ? renderBackgroundForm(this.host, this.bg, floor) : nothing} ${admin ? renderSettings(this.host, this.settingsActions) : nothing}
      ${admin ? renderBackup(this.host, this.backup) : nothing}
    `;
  }

  /** Whether an opening sits in an exterior wall (decides the automatic door style). */
  private openingIsExterior(o: Opening): boolean {
    const floor = this.floor;
    const host = floor ? openingHost(o, floor.rooms, floor.walls ?? []) : null;
    if (!floor || !host) return false;
    const walls = generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []);
    return locateOpening(walls.walls, o, host)?.wall.exterior ?? false;
  }

  /** The camera of the editor's 3D pane as it stands right now, rounded for the plan (null: no pane). */
  private paneView(): StartView | null {
    const pane = this.renderRoot.querySelector("nf-view3d") as (HTMLElement & { currentView(): StartView | null }) | null;
    const v = pane?.currentView();
    if (!v) return null;
    const t = v.target;
    return { theta: round(v.theta), phi: round(v.phi), radius: round(v.radius), ...(t ? { target: { x: round(t.x), y: round(t.y), z: round(t.z) } } : {}) };
  }

  /** This floor opens with the camera of the editor's 3D pane as it stands right now (#182). */
  private rememberFloorView(): void {
    const v = this.paneView();
    if (!v) {
      alert(this.t("floor_start_view_need_pane"));
      return;
    }
    this.updateFloor({ start_view: v });
  }

  /** Tapping this room in 3D flies to the camera of the editor's 3D pane as it stands right now (#282). */
  private rememberRoomView(): void {
    const v = this.paneView();
    if (!v) {
      alert(this.t("room_start_view_need_pane"));
      return;
    }
    this.updateRoom({ start_view: v });
  }

  /** Ids of the stored pictures any screen of the plan uses (in order of first use). */
  private storedPictures(): string[] {
    const ids: string[] = [];
    for (const floor of this._doc.floors) {
      for (const m of floor.furniture) {
        for (const r of m.pictures ?? []) if (r.image && !/^https?:\/\//.test(r.image) && !r.image.startsWith("camera:") && !ids.includes(r.image)) ids.push(r.image);
      }
    }
    return ids;
  }

  static styles = [tokens, controls, editorStyles];
}

if (!customElements.get("nf-editor")) customElements.define("nf-editor", NfEditor);

// the extensions page is part of this bundle: the panel loads it the same way as the editor
import "./extensions.ts";

