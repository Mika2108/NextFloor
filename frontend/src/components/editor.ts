// 2D editor: floors, rooms (rectangles and free shapes), snapping, undo, background template.

import { html, LitElement, nothing, svg, type PropertyValues, type TemplateResult } from "lit";
import { fetchImage, storeImage } from "../api.ts";
import { areaEntities, autoPlace, CLIMATE_CLASSES, defaultHeight, entityName, entityAreaId, furnitureEntities, groupByDevice, hasScreen, isMediaFurniture, isPlaceable, isRoomClimateSensor, kindOf, openingEntities, otherAreaEntities, roomClimateSensors, unassignedEntities, windowPosition, type ClimateKey } from "../devices.ts";
import { furnitureSymbol } from "./furniture2d.ts";
import { closeGaps, suggestedThickness } from "../geometry/gaps.ts";
import { keepInRoom, snapToWall } from "../geometry/snap.ts";
import { holeInRoom } from "../geometry/holes.ts";
import { SHOW_PRESENCE } from "../flags.ts";
import { cameraMotionSensors, detectionKind } from "../markers.ts";
import { isStatusSensor, robotRoomSensor, TOGGLE_KINDS } from "../devices.ts";
import { polygonBox } from "../roof-sections.ts";
import { clampField, faceAt, fieldFace, pointOnFace, roofFaces, turnGroundField, fieldCenter, wallFaces, windowAsField, onFace, onField, rayOnFace, type RoofFace } from "../solar.ts";
import type { SurfaceGrab, SurfaceRay } from "../viewer/viewer3d.ts";
import {
  type Background,
  OUTDOOR_TOP,
  sidelightLayout,
  furnitureFootprint,
  type FreeWall,
} from "../model.ts";
import { furnishRoom, PACKAGES, type PackageId } from "../packages.ts";
import { generateWalls, locateOpening, openingHost, pointOnRoomEdge, type Wall } from "../geometry/walls.ts";
import { formatNumber, languageReady, loadLanguage, translate, type I18nKey } from "../i18n.ts";
import { iconPath } from "../icons.ts";
import {
  bounds,
  centroid,
  FLOOR_MATERIALS,
  FURNITURE_GROUPS,
  ENERGY_DEVICES,
  type StartView,
  FURNITURE_SIZE,
  FURNITURE_TYPES,
  canLift,
  isFixed,
  isLamp,
  LAMP_MODEL,
  isAxisRect,
  OUTDOOR_TYPES,
  outdoorStanding,
  SLOPE_DIRS,
  type SlopeDir,
  spotGrid,
  step,
  type Direction,
  signedArea,
  newFloor,
  OPENING_PRESETS,
  openingPreset,
  type OpeningPreset,
  floorElevation,
  resizeFurniture,
  roomTiles,
  pointInPolygon,
  polygonArea,
  uid,
  type Building,
  type Floor,
  type Furniture,
  type FurnitureType,
  type LampMount,
  type SolarField,
  type MarkerShow,
  type OutdoorArea,
  type OutdoorType,
  type Placement,
  type Opening,
  type OpeningType,
  type Room,
  type Vec2,
  DOOR_STYLES,
  WINDOW_STYLES,
  openingStyle,
  isFrontDoor,
  type OpeningStyle,
} from "../model.ts";
import { controls, tokens } from "../styles.ts";
import { renderFavorites, renderPresence, renderStartView } from "./editor/forms/house.ts";
import { BackupService } from "./editor/backup.ts";
import { renderBackup } from "./editor/forms/backup.ts";
import { renderSettings, type SettingsActions } from "./editor/forms/settings.ts";
import { entityOptions, isBinary as binaryish, isNumeric as numberish, isPowerSensor, type EntityOption } from "./editor/entities.ts";
import { entityField, iconField, markerField, numberField } from "./editor/fields.ts";
import { renderEnergyBalance, renderEnergyChecklist, renderEnergyDevices, renderEnergyTeaser, renderHelpLinks, type EnergyActions } from "./editor/forms/energy.ts";
import { energyMarkersLayer, headroomLayer, roofSectionsLayer, roofWindowsLayer, solarLayer } from "./editor/canvas/roof-layers.ts";
import type { CanvasContext } from "./editor/canvas/context.ts";
import { renderRoofPanel } from "./editor/forms/roof.ts";
import type { RoofPanelDeps } from "./editor/forms/roof-parts.ts";
import { renderSolarForm, renderSolarList } from "./editor/forms/solar.ts";
import type { EditorHost } from "./editor/host.ts";
import { RoofController } from "./editor/roof-controller.ts";
import { importEnergyPrefs } from "./editor/ops/energy-import.ts";
import { newEnergyDevice } from "./editor/ops/energy-devices.ts";
import { EditHistory } from "./editor/history.ts";
import { editorStyles } from "./editor/styles.ts";
import "./entity-picker.ts";
import type { HassArea, HassFloor, HomeAssistant } from "../types.ts";
import { load3d } from "../load3d.ts";
import type { WallMode } from "../viewer/viewer3d.ts";
import { furnitureName } from "../furniture-names.ts";
import { furnitureSize, isElectric, isPackType, mountBase, packDisplay, packItem, packItemName, packName, packType, setPacks, type FurniturePack } from "../packs.ts";

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

// furniture without a top to light: no "State from" box
const NO_STATE_TYPES = new Set(["parking", "stairwell", "rug", "grid_point"]);

export class NfEditor extends LitElement {
  static properties = {
    _shiftX: { state: true },
    _shiftAll: { state: true },
    _bgEdit: { state: true },
    _bgRuler: { state: true },
    _bgRulerLen: { state: true },
    _bgLevel: { state: true },
    _bgOpen: { state: true },
    _shiftZ: { state: true },
    hass: { attribute: false },
    building: { attribute: false },
    narrow: { type: Boolean },
    packs: { attribute: false },
    _preview: { state: true },
    _doc: { state: true },
    _doc3d: { state: true },
    _split: { state: true },
    _splitRatio: { state: true },
    _wall3d: { state: true },
    _sidePinned: { state: true },
    _sideOpen: { state: true },
    _floorId: { state: true },
    _roomId: { state: true },
    _vertex: { state: true },
    _openingId: { state: true },
    _furnitureId: { state: true },
    _deviceId: { state: true },
    _deviceQuery: { state: true },
    _devSource: { state: true },
    _energyNote: { state: true },
    _furnQuery: { state: true },
    _libOpen: { state: true },
    _expanded: { state: true },
    _notice: { state: true },
    _spots: { state: true },
    _outdoorId: { state: true },
    _wallId: { state: true },
    _edgeHi: { state: true },
    _ctx: { state: true },
    _fixedHint: { state: true },
    _floorMenu: { state: true },
    _openingPreset: { state: true },
    _measureLen: { state: true },
    _packages: { state: true },
    _rectSize: { state: true },
    _tool: { state: true },
    _draft: { state: true },
    _cursor: { state: true },
    _guides: { state: true },
    _view: { state: true },
    _size: { state: true },
    _images: { state: true },
    _canUndo: { state: true },
    _canRedo: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building;
  declare narrow: boolean;
  /** Imported furniture packs (from the panel's controller). */
  declare packs: FurniturePack[] | undefined;
  /** Result of the last pack import. */
  /** Picture of the furniture under the pointer in the library. */
  private declare _preview: { type: string; url: string | null; left: number; top: number } | null;
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
  private declare _roomId: string | null;
  private declare _vertex: number | null;
  private declare _openingId: string | null;
  private declare _furnitureId: string | null;
  private declare _deviceId: string | null;
  private declare _deviceQuery: string;
  /** Which devices the room form lists: its own area, other areas, or entities without an area. */
  private declare _devSource: "area" | "other" | "none";
  /** What the import from the energy dashboard did (shown under its button). */
  private declare _energyNote: string | null;
  /** Furniture library: the search text, and which sections are open (built-in groups and packs). */
  private declare _furnQuery: string;
  private declare _libOpen: Set<string>;
  /** Devices whose further entities are unfolded in the device list. */
  private declare _expanded: Set<string>;
  /** Short confirmation shown after an action (e.g. closed gaps). */
  private declare _notice: string | null;
  /** Restore points, loaded when the backup section is opened. */
  /** Open "place spots" form of the selected room. */
  private declare _outdoorId: string | null;
  /** Selected free-standing wall. */
  private declare _wallId: string | null;
  /** Selected room wall (id from generateWalls), to set its height. */
  /** Edge of the selected room highlighted from the wall height list. */
  private declare _edgeHi: number | null;
  private declare _shiftX: number;
  /** Shift and turn take every floor with them (roof, outdoor areas, meter included). */
  private declare _shiftAll: boolean;
  /** The background picture is being moved and scaled in the plan (drag it, pull its corner). */
  private declare _bgEdit: boolean;
  /** Scale the background with a ruler (#183): null = off, else the points tapped so far (two = waiting for the length). */
  private declare _bgRuler: Vec2[] | null;
  private declare _bgRulerLen: number;
  /** Straighten the background: two taps along a wall that should run straight (null = off). */
  private declare _bgLevel: Vec2[] | null;
  /** The background section is open: the picture has handles like a piece of furniture (move, scale, turn). */
  private declare _bgOpen: boolean;
  private declare _shiftZ: number;
  /** Open context menu (right-click, long press) at a plan point, for one item. */
  private declare _ctx: { x: number; y: number; kind: FixKind; id: string } | null;
  /** A drag on a fixed item was turned into panning: the hint line says why. */
  private declare _fixedHint: boolean;
  private fixedPan = false;
  /** Frame the 3D half again after the next render (the roof tool shows the whole house). */
  private reframe3d = false;
  private pressTimer = 0;
  private pressStart: [number, number] | null = null;
  /** The "add floor" menu with the floors of Home Assistant is open. */
  private declare _floorMenu: boolean;
  /** Kind of opening the opening tool places (the last one chosen). */
  private declare _openingPreset: OpeningPreset;
  /** Length typed for the next wall when drawing by measure, and the size for "rectangle by size". */
  private declare _measureLen: number;
  /** The package list of the selected room is open. */
  private declare _packages: boolean;
  private declare _rectSize: [number, number];
  private declare _spots: { type: FurnitureType; rows: number; cols: number; entity: string | null } | null;
  private declare _tool: Tool;
  private declare _draft: Vec2[];
  private declare _cursor: Vec2 | null;
  private declare _guides: Guides;
  private declare _view: { scale: number; ox: number; oy: number };
  private declare _size: { w: number; h: number };
  private declare _images: Record<string, { url: string; aspect: number }>;
  private declare _canUndo: boolean;
  private declare _canRedo: boolean;

  private readonly history = new EditHistory<Building>(100);
  /** What the form modules in editor/forms see of this editor. */
  private readonly host: EditorHost = this.makeHost();
  private readonly backup: BackupService = this.makeBackup();
  /** The roof tool: its selection and what it adds, changes and removes. */
  private readonly roof: RoofController = this.makeRoof();
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
  private loadingImages = new Set<string>();

  constructor() {
    super();
    this.narrow = false;
    this._floorId = null;
    this._roomId = null;
    this._vertex = null;
    this._openingId = null;
    this._furnitureId = null;
    this._deviceId = null;
    this._deviceQuery = "";
    this._devSource = "area";
    this.roof.sectionId = null;
    this.roof.solarId = null;
    this.roof.picking = false;
    this.roof.windowId = null;
    this._energyNote = null;
    this._furnQuery = "";
    this._libOpen = new Set(["group:lights", "group:living"]);
    try {
      const saved = localStorage.getItem("nextfloor.library");
      if (saved) this._libOpen = new Set(JSON.parse(saved) as string[]);
    } catch {
      // no storage: the defaults stand
    }
    this._expanded = new Set();
    this._notice = null;
    this._spots = null;
    this._outdoorId = null;
    this._wallId = null;
    this._edgeHi = null;
    this._shiftX = 0;
    this._shiftAll = false;
    this._bgEdit = false;
    this._bgRuler = null;
    this._bgRulerLen = 0;
    this._bgLevel = null;
    this._bgOpen = false;
    this._shiftZ = 0;
    this._floorMenu = false;
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
    this._preview = null;
    this._measureLen = 3;
    this._packages = false;
    this._rectSize = [4, 3];
    this._tool = "select";
    this._draft = [];
    this._cursor = null;
    this._guides = {};
    this._view = { scale: 50, ox: 40, oy: 40 };
    this._size = { w: 800, h: 600 };
    this._images = {};
    this._canUndo = false;
    this._canRedo = false;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
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
    return { host: this.host, toScreen: (p) => this.toScreen(p), floorId: this._floorId };
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
      say: (text) => (editor._notice = text),
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
      if (!this.floor?.rooms.some((r) => r.id === this._roomId)) this._roomId = null;
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
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${false}
        .roomLabels=${true}
        .floorStack=${this.houseTool ? "stacked" : "single"}
        .panelOpen=${false}
        .alerts=${false}
        .scenes=${false}
        @furniture-select=${(e: CustomEvent<{ id: string | null }>) => {
          if (e.detail.id) this.selectFrom3d("furniture", e.detail.id);
          else if (this._furnitureId) this.selectFrom3d("furniture", null);
        }}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${(e: CustomEvent<{ id: string | null }>) => {
          if (e.detail.id) this.selectFrom3d("device", e.detail.id);
          else if (this._deviceId) this.selectFrom3d("device", null);
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
    const bg = this.floor?.background;
    if (bg && !this._images[bg.image_id] && !this.loadingImages.has(bg.image_id)) void this.loadImage(bg.image_id);
    // thumbnails of the selected screen's stored pictures
    if (this.furnitureItem?.pictures) {
      // thumbnails of every stored picture in the plan (they can be reused on other screens)
      for (const id of this.storedPictures()) {
        if (!this._images[id] && !this.loadingImages.has(id)) void this.loadImage(id);
      }
    }
  }

  // ------------------------------------------------------------------ document helpers

  private get floor(): Floor | undefined {
    return this._doc?.floors.find((f) => f.id === this._floorId);
  }

  private get room(): Room | undefined {
    return this.floor?.rooms.find((r) => r.id === this._roomId);
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
    if (!this.floor?.rooms.some((r) => r.id === this._roomId)) this._roomId = null;
    this._vertex = null;
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
    if (this._bgLevel && this.isAdmin && this.floor?.background) {
      // straighten: the second tap turns the picture so the tapped wall runs exactly along x or z
      const pts = [...this._bgLevel, world];
      if (pts.length < 2) this._bgLevel = pts;
      else this.applyBgLevel(pts[0], pts[1]);
      return;
    }
    if (this.bgHandles() && this.floor.background && target.closest("[data-bg-rotate]")) {
      const bg = this.floor.background;
      const img = this._images[bg.image_id];
      const h = bg.width * (img?.aspect ?? 1);
      const c: Vec2 = [bg.x + bg.width / 2, bg.z + h / 2];
      this.drag = { kind: "bgrotate", base: this._doc, moved: false, start: Math.atan2(world[1] - c[1], world[0] - c[0]), rot: bg.rotation ?? 0 };
      return;
    }
    if (this._bgRuler && this._bgRuler.length < 2 && this.isAdmin && this.floor?.background) {
      // the ruler: two taps on a stretch of known length in the picture
      this._bgRuler = [...this._bgRuler, world];
      return;
    }
    if (this.bgHandles() && this.floor.background && !this._bgEdit && (target.closest("[data-bg-handle]") || target.closest("[data-bg]"))) {
      // the background section is open: the picture moves and scales like furniture
      const bg = this.floor.background;
      this.drag = target.closest("[data-bg-handle]")
        ? { kind: "bgscale", base: this._doc, moved: false }
        : { kind: "bgmove", start: world, bx: bg.x, bz: bg.z, base: this._doc, moved: false };
      return;
    }
    if (this._bgEdit && this.isAdmin && this.floor?.background) {
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
      this._bgEdit = false;
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
      this._vertex = Number(vertexEl.getAttribute("data-vertex"));
      this.drag = { kind: "vertex", roomId: this.room.id, index: this._vertex, base: this._doc, moved: false };
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
      this._vertex = i + 1;
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
      if (roomId !== this._roomId) this._vertex = null;
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
        const img = bg ? this._images[bg.image_id] : undefined;
        if (!bg || !img) break;
        const h = bg.width * img.aspect;
        const c: Vec2 = [bg.x + bg.width / 2, bg.z + h / 2];
        const now = Math.atan2(world[1] - c[1], world[0] - c[0]);
        // turn about the middle; Shift snaps to whole 15° steps, otherwise tenths of a degree
        let rot = drag.rot + ((now - drag.start) * 180) / Math.PI;
        rot = e.shiftKey ? Math.round(rot / 15) * 15 : Math.round(rot * 10) / 10;
        rot = ((((rot + 180) % 360) + 360) % 360) - 180;
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
        const img = bg ? this._images[bg.image_id] : undefined;
        if (!bg || !img) break;
        // the corner follows the pointer along the picture's own width, whatever its turn
        const [lx] = this.bgLocal(bg, world, img.aspect);
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
        const offset = this.offsetOnEdge(host.room, host.edge, world, o.width, e.altKey);
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

  private renderMeasureForm() {
    const draft = this._draft;
    const first = draft[0];
    const last = draft[draft.length - 1];
    const gap = first && last && draft.length > 1 ? Math.hypot(last[0] - first[0], last[1] - first[1]) : 0;
    const arrows: [Direction, string][] = [
      ["up", "↑"],
      ["left", "←"],
      ["right", "→"],
      ["down", "↓"],
    ];
    const len = (v: number) => formatNumber(this.hass, v, 2);
    return html`<section>
      <h3>${this.t("measure")}</h3>
      ${!first
        ? html`<p class="nf-sub">${this.t("measure_start")}</p>`
        : html`<p class="nf-sub">${this.t("measure_from", { x: len(first[0]), z: len(first[1]) })}</p>
            <div class="nf-form">
              <label class="nf-field nf-wide"
                >${this.t("measure_length")}
                <input
                  class="nf-measure-input"
                  type="number"
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${String(this._measureLen)}
                  @input=${(e: Event) => (this._measureLen = parseFloat((e.target as HTMLInputElement).value.replace(",", ".")) || 0)}
                  @keydown=${(e: KeyboardEvent) => {
                    const dir = { ArrowRight: "right", ArrowLeft: "left", ArrowUp: "up", ArrowDown: "down" }[e.key] as Direction | undefined;
                    if (dir) {
                      e.preventDefault();
                      this.measureStep(dir);
                    } else if (e.key === "Enter") this.closeDraft();
                  }}
              /></label>
              <div class="nf-arrows nf-wide">
                ${arrows.map(([dir, label]) => html`<button class="nf-btn nf-arrow-${dir}" title=${this.t(`dir_${dir}`)} @click=${() => this.measureStep(dir)}>${label}</button>`)}
              </div>
            </div>
            ${draft.length > 1
              ? html`<ol class="nf-measure-list">
                  ${draft.slice(1).map((p, i) => html`<li>${len(Math.hypot(p[0] - draft[i][0], p[1] - draft[i][1]))} m</li>`)}
                </ol>`
              : nothing}
            <div class="nf-actions">
              <button class="nf-btn nf-primary" ?disabled=${draft.length < 3} @click=${() => this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="nf-btn" ?disabled=${draft.length < 2} @click=${() => (this._draft = draft.slice(0, -1))}>${this.t("measure_undo")}</button>
            </div>
            ${draft.length >= 3 ? html`<p class="nf-sub">${this.t("measure_gap", { gap: len(gap) })}</p>` : nothing}`}
      <h4 class="nf-lib-head">${this.t("rect_by_size")}</h4>
      <div class="nf-form">
        ${this.num(this.t("width"), this._rectSize[0], (v) => (this._rectSize = [Math.max(0.1, v), this._rectSize[1]]), 0.01, 0.1)}
        ${this.num(this.t("depth"), this._rectSize[1], (v) => (this._rectSize = [this._rectSize[0], Math.max(0.1, v)]), 0.01, 0.1)}
        <button class="nf-btn nf-wide" @click=${() => this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="nf-sub">${this.t("measure_hint")}</p>
    </section>`;
  }

  /** A free-standing wall from a to b (a partition through part of a room). */
  private addFreeWall(a: Vec2, b: Vec2): void {
    if (!this.floor) return;
    const wall: FreeWall = { id: uid("wall"), a: [round(a[0]), round(a[1])], b: [round(b[0]), round(b[1])], thickness: null };
    this.change((_, floor) => (floor.walls = [...(floor.walls ?? []), wall]));
    this.selectItem("wall", wall.id);
  }

  private get freeWall(): FreeWall | undefined {
    return this._wallId ? (this.floor?.walls ?? []).find((w) => w.id === this._wallId) : undefined;
  }

  private updateFreeWall(patch: Partial<FreeWall>): void {
    const id = this._wallId;
    if (!id) return;
    this.change((_, floor) => Object.assign((floor.walls ?? []).find((w) => w.id === id)!, patch));
  }

  private deleteFreeWall(): void {
    const id = this._wallId;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("wall", id)) return;
    this.change((_, floor) => {
      floor.walls = (floor.walls ?? []).filter((w) => w.id !== id);
      floor.openings = floor.openings.filter((o) => o.wall !== id);
    });
    this._wallId = null;
  }

  /** The plan symbol of free walls: a wide invisible hit line, and end handles when selected. */
  private renderFreeWalls(floor: Floor) {
    return svg`<g>${(floor.walls ?? []).map((w) => {
      const [x0, y0] = this.toScreen(w.a);
      const [x1, y1] = this.toScreen(w.b);
      const sel = w.id === this._wallId;
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

  private renderFreeWallForm(w: FreeWall) {
    const admin = this.isAdmin;
    const length = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]);
    const setLength = (v: number) => {
      const l = Math.max(0.1, v);
      const k = l / (length || 1);
      this.updateFreeWall({ b: [round(w.a[0] + (w.b[0] - w.a[0]) * k), round(w.a[1] + (w.b[1] - w.a[1]) * k)] });
    };
    return html`<section>
      <div class="nf-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall", w.id)}</div>
      <div class="nf-form">
        ${this.num(this.t("wall_length"), length, setLength, 0.01, 0.1)}
        ${this.num(this.t("wall_thickness"), w.thickness ?? this._doc.settings.wall_interior, (v) => this.updateFreeWall({ thickness: Math.min(1, Math.max(0.02, v)) }), 0.01, 0.02)}
        ${this.num(this.t("wall_height"), w.height ?? this.floor?.height ?? 2.5, (v) => this.updateFreeWall({ height: v >= (this.floor?.height ?? 2.5) - 0.005 ? null : Math.max(0.05, v) }), 0.05, 0.05)}
      </div>
      ${admin
        ? html`<div class="nf-actions">
            <button class="nf-btn nf-danger" @click=${() => this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`
        : nothing}
      <p class="nf-sub">${this.t("free_wall_hint")}</p>
    </section>`;
  }

  /** A floor opening (stairwell, gallery): a hole in this floor's floor, drawn as a rectangle. */
  private addHole(lo: Vec2, hi: Vec2): void {
    if (!this.floor) return;
    const item: Furniture = {
      id: uid("hole"),
      type: "stairwell",
      x: round((lo[0] + hi[0]) / 2),
      z: round((lo[1] + hi[1]) / 2),
      w: round(hi[0] - lo[0]),
      d: round(hi[1] - lo[1]),
      h: 0.02,
      rotation: 0,
      variant: null,
    };
    this.change((_, floor) => floor.furniture.push(item));
    this.selectItem("furniture", item.id);
    this._tool = "select";
  }

  private addOutdoor(points: Vec2[]): void {
    if (!this.floor) return;
    const area: OutdoorArea = { id: uid("outdoor"), type: "lawn", points: points.map(([x, z]) => [round(x), round(z)]) };
    this.change((_, floor) => floor.outdoor.push(area));
    this.selectItem("outdoor", area.id);
    this._tool = "select";
  }

  private get outdoorArea(): OutdoorArea | undefined {
    return this._outdoorId ? this.floor?.outdoor.find((o) => o.id === this._outdoorId) : undefined;
  }

  private updateOutdoor(patch: Partial<OutdoorArea>): void {
    const id = this._outdoorId;
    this.change((_, floor) => Object.assign(floor.outdoor.find((o) => o.id === id)!, patch));
  }

  private deleteOutdoor(): void {
    const id = this._outdoorId;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("outdoor", id)) return;
    this.change((_, floor) => (floor.outdoor = floor.outdoor.filter((o) => o.id !== id)));
    this._outdoorId = null;
  }

  private duplicateOutdoor(): void {
    const a = this.outdoorArea;
    if (!a || !this.isAdmin) return;
    const copy: OutdoorArea = { ...a, id: uid("outdoor"), points: a.points.map(([x, z]) => [round(x + 0.5), round(z + 0.5)]) };
    this.change((_, floor) => floor.outdoor.push(copy));
    this.selectItem("outdoor", copy.id);
  }

  private addRoom(points: Vec2[]): void {
    if (!this.floor) return;
    const id = uid("room");
    const n = this.floor.rooms.length + 1;
    this.change((_, floor) =>
      floor.rooms.push({ id, name: this.t("new_room", { n }), area_id: null, points: points.map(([x, z]) => [round(x), round(z)]), floor_material: "wood" }),
    );
    this._roomId = id;
    this._vertex = null;
    this._tool = "select";
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
      if (this._deviceId) this.deleteItem("device", this._deviceId);
      else if (this._outdoorId) this.deleteOutdoor();
      else if (this._wallId) this.deleteFreeWall();
      else if (this._openingId) this.deleteOpening();
      else if (this._furnitureId) this.deleteFurniture();
      else if (this._vertex !== null) this.deleteVertex(this._vertex);
      else this.deleteRoom();
    } else if (e.key.toLowerCase() === "l" && !mod && this._tool === "roof" && this.roof.section && !this._doc.settings.lock_plan) {
      this.roof.patchSection({ locked: !this.roof.section.locked });
    } else if (e.key.toLowerCase() === "l" && !mod && (this._furnitureId || this._deviceId)) {
      const s = this.selectedFix!;
      this.toggleFixed(s.kind, s.id);
    } else if (Object.hasOwn(ARROWS, e.key) && !mod && (this._tool === "select" || this._tool === "furniture")) {
      // arrow keys nudge the selection: one grid step, Shift 10 cm, Alt 1 cm
      const step = e.altKey ? 0.01 : e.shiftKey ? 0.1 : this._doc.settings.grid;
      const [dx, dz] = ARROWS[e.key];
      if (this.nudge(dx * step, dz * step)) e.preventDefault();
    } else if (e.key.toLowerCase() === "r" && !mod && this._furnitureId) {
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

  /** Moves the selected item by (dx, dz) metres; false when nothing movable is selected. */
  private nudge(dx: number, dz: number): boolean {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return false;
    const fix = this.selectedFix;
    if (fix && this.isFixedItem(fix.kind, fix.id)) {
      this._fixedHint = true;
      return true;
    }
    const mv = (p: Vec2): Vec2 => [round(p[0] + dx), round(p[1] + dz)];
    if (this._deviceId) {
      const id = this._deviceId;
      if (!floor.placements.some((p) => p.entity_id === id)) return false;
      this.change((_, f) => {
        const p = f.placements.find((x) => x.entity_id === id)!;
        [p.x, p.z] = mv([p.x, p.z]);
      });
    } else if (this._furnitureId) {
      const id = this._furnitureId;
      this.change((_, f) => {
        const m = f.furniture.find((x) => x.id === id);
        if (m) [m.x, m.z] = mv([m.x, m.z]);
      });
    } else if (this._openingId) {
      const o = this.opening;
      const host = o ? openingHost(o, floor.rooms, floor.walls ?? []) : null;
      if (!o || !host) return false;
      const a = host.room.points[host.edge];
      const b = host.room.points[(host.edge + 1) % host.room.points.length];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
      // along the wall: the arrow's share in the wall direction
      const along = (dx * (b[0] - a[0]) + dz * (b[1] - a[1])) / len;
      if (Math.abs(along) < 1e-9) return true;
      const half = Math.min(o.width, len) / 2;
      this.updateOpening({ offset: round(Math.min(len - half, Math.max(half, o.offset + along))) });
    } else if (this._wallId) {
      const id = this._wallId;
      this.change((_, f) => {
        const w = (f.walls ?? []).find((x) => x.id === id);
        if (w) [w.a, w.b] = [mv(w.a), mv(w.b)];
      });
    } else if (this._outdoorId) {
      const id = this._outdoorId;
      this.change((_, f) => {
        const area = f.outdoor.find((x) => x.id === id);
        if (area) area.points = area.points.map(mv);
      });
    } else if (this._roomId) {
      const id = this._roomId;
      const vertex = this._vertex;
      const room = floor.rooms.find((r) => r.id === id);
      if (!room) return false;
      // a selected corner moves alone; otherwise the room moves with the devices in it
      const inside = new Set(floor.placements.filter((pl) => pointInPolygon([pl.x, pl.z], room.points)).map((pl) => pl.entity_id));
      this.change((_, f) => {
        const r = f.rooms.find((x) => x.id === id)!;
        if (vertex !== null && vertex < r.points.length) {
          r.points[vertex] = mv(r.points[vertex]);
          return;
        }
        r.points = r.points.map(mv);
        for (const pl of f.placements) if (inside.has(pl.entity_id)) [pl.x, pl.z] = mv([pl.x, pl.z]);
      });
    } else return false;
    return true;
  }

  /** Floors of Home Assistant's floor registry that no floor of the plan stands for yet, lowest first. */
  private get freeHaFloors(): HassFloor[] {
    const used = new Set(this._doc.floors.map((f) => f.ha_floor));
    return Object.values(this.hass?.floors ?? {})
      .filter((f) => !used.has(f.floor_id))
      .sort((a, b) => (a.level ?? 99) - (b.level ?? 99) || a.name.localeCompare(b.name));
  }

  /** Areas of a floor's Home Assistant floor that have no room in the plan yet. */
  private unplacedAreas(floor: Floor): HassArea[] {
    if (!floor.ha_floor) return [];
    const used = new Set(this._doc.floors.flatMap((f) => f.rooms.map((r) => r.area_id)));
    return Object.values(this.hass?.areas ?? {})
      .filter((a) => a.floor_id === floor.ha_floor && !used.has(a.area_id))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  private addFloor(ha: HassFloor | null = null): void {
    const floors = this._doc.floors;
    const id = uid("floor");
    const name = ha?.name ?? (floors.length === 0 ? this.t("default_floor") : this.t("new_floor", { n: floors.length }));
    const floor = { ...newFloor(id, name, floorElevation(floors, ha?.level)), ha_floor: ha?.floor_id ?? null };
    const next = structuredClone(this._doc);
    // floors are kept from bottom to top
    const at = next.floors.findIndex((f) => f.elevation > floor.elevation);
    next.floors.splice(at < 0 ? next.floors.length : at, 0, floor);
    this.setDoc(next);
    this._floorId = id;
    this._roomId = null;
    this._floorMenu = false;
    this.fit();
  }

  /** One room tile per unplaced area of the floor's Home Assistant floor, to drag into place. */
  private addAreaRooms(floor: Floor): void {
    const areas = this.unplacedAreas(floor);
    if (!areas.length) return;
    const rooms = roomTiles(floor, areas, () => uid("room"));
    this.change((_, f) => f.rooms.push(...rooms));
    this.fit();
  }

  private moveFloor(dir: -1 | 1): void {
    const i = this._doc.floors.findIndex((f) => f.id === this._floorId);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= this._doc.floors.length) return;
    const next = structuredClone(this._doc);
    [next.floors[i], next.floors[j]] = [next.floors[j], next.floors[i]];
    this.setDoc(next);
  }

  private deleteFloor(): void {
    const floor = this.floor;
    if (!floor || !confirm(this.t("delete_floor_confirm", { name: floor.name }))) return;
    const next = structuredClone(this._doc);
    next.floors = next.floors.filter((f) => f.id !== floor.id);
    this.setDoc(next);
    this._floorId = next.floors[0]?.id ?? null;
    this._roomId = null;
  }

  private deleteRoom(): void {
    const id = this._roomId;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("room", id)) return;
    this.change((_, floor) => {
      const room = floor.rooms.find((r) => r.id === id);
      floor.rooms = floor.rooms.filter((r) => r.id !== id);
      floor.openings = floor.openings.filter((o) => o.room_id !== id || o.wall);
      if (room) floor.placements = floor.placements.filter((pl) => !pointInPolygon([pl.x, pl.z], room.points));
    });
    this._roomId = null;
    this._vertex = null;
  }

  private duplicateRoom(): void {
    const room = this.room;
    if (!room || !this.isAdmin) return;
    const id = uid("room");
    this.change((_, floor) => floor.rooms.push({ ...structuredClone(room), id, points: room.points.map(([x, z]) => [round(x + 0.5), round(z + 0.5)]) }));
    this._roomId = id;
  }

  // ------------------------------------------------------------------ roof sections

  /** Where a plan point lies on a face; on a house wall only along it (s = NaN: the height stays). */
  private faceHit(face: RoofFace, p: Vec2): { u: number; s: number } | null {
    if (!face.wall) return pointOnFace(face, p);
    return { u: (p[0] - face.o[0]) * face.eu[0] + (p[1] - face.o[2]) * face.eu[2], s: Number.NaN };
  }

  // ------------------------------------------------------------------ helpers the forms of this file still share

  private entityOptions(accept: (id: string) => boolean) {
    return entityOptions(this.hass, accept);
  }

  private isPowerSensor(id: string): boolean {
    return isPowerSensor(this.hass, id);
  }

  private num(label: string, value: number, onChange: (v: number) => void, step = 0.01, min?: number) {
    return numberField(this.host, label, value, onChange, step, min);
  }

  private entitySelect(label: string, value: string | null, auto: string | null | undefined, options: EntityOption[], onChange: (v: string | null) => void) {
    return entityField(this.host, label, value, auto, options, onChange);
  }

  private iconInput(value: string | null | undefined, onChange: (v: string | null) => void) {
    return iconField(this.host, value, onChange);
  }

  private markerSelect(value: MarkerShow | null, onChange: (v: MarkerShow | null) => void) {
    return markerField(this.host, value, onChange);
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
    const device = this._furnitureId ? this.floor?.furniture.find((x) => x.id === this._furnitureId && (ENERGY_DEVICES as readonly string[]).includes(x.type)) : undefined;
    if (device)
      return html`<button class="nf-btn nf-back" @click=${() => this.selectItem("furniture", null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(device)}`;
    const actions = this.energyActions();
    return html`${renderEnergyChecklist(this.host, actions)}${renderSolarList(this.roofDeps())}${renderEnergyDevices(this.host, actions)}${renderEnergyBalance(this.host, actions)}${renderEnergyTeaser(this.host)}`;
  }

  /** NextFloor's car: one entity of the car's device is enough, the rest is found beside it (lh/car.ts). */
  private renderCarForm(f: Furniture) {
    if (!this.hass) return nothing;
    const car = f.car ?? {};
    const options = this.entityOptions((id) => /^(device_tracker|sensor|binary_sensor|lock|climate)\./.test(id));
    return html`${this.entitySelect(this.t("live_car_device"), car.device ?? null, null, options, (v) => this.updateFurniture({ car: { ...car, device: v } }))}
      <p class="nf-sub nf-wide">${this.t("live_car_device_hint")}</p>`;
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

  /** The selected item (for the L key and nudging), the most specific selection first. */
  private get selectedFix(): { kind: FixKind; id: string } | null {
    if (this._deviceId) return { kind: "device", id: this._deviceId };
    if (this._openingId) return { kind: "opening", id: this._openingId };
    if (this._furnitureId) return { kind: "furniture", id: this._furnitureId };
    if (this._wallId) return { kind: "wall", id: this._wallId };
    if (this._outdoorId) return { kind: "outdoor", id: this._outdoorId };
    if (this._roomId) return { kind: "room", id: this._roomId };
    return null;
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
    if (kind === "opening" || kind === "furniture") this._roomId = this._roomId ?? room;
    this._ctx = { x: local[0], y: local[1], kind, id };
  }

  private deleteItem(kind: FixKind, id: string): void {
    if (kind === "device") {
      if (!this.confirmFixedDelete(kind, id)) return;
      this.removeDevice(id);
      this._deviceId = null;
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

  /** Select a room, an opening or a furniture item (only one at a time). */
  private selectItem(kind: "room" | "opening" | "furniture" | "device" | "outdoor" | "wall", id: string | null): void {
    this._notice = null;
    // a selection made in the plan (or by a tool) opens the folded sidebar
    if (id) this._sideOpen = true;
    this._outdoorId = kind === "outdoor" ? id : null;
    this._wallId = kind === "wall" ? id : null;
    this._edgeHi = null;
    if (kind === "outdoor" || kind === "wall") this._roomId = null;
    if (kind !== "room" || id !== this._roomId) this._vertex = null;
    this._roomId = kind === "room" ? id : this._roomId;
    this._openingId = kind === "opening" ? id : null;
    this._furnitureId = kind === "furniture" ? id : null;
    this._deviceId = kind === "device" ? id : null;
    if (kind === "device" && id) {
      const pl = this.floor?.placements.find((x) => x.entity_id === id);
      this._roomId = (pl && this.roomAt([pl.x, pl.z])) ?? this._roomId;
    }
    if (kind === "opening" && id) this._roomId = this.floor?.openings.find((o) => o.id === id)?.room_id ?? this._roomId;
  }

  private get opening(): Opening | undefined {
    return this._openingId ? this.floor?.openings.find((o) => o.id === this._openingId) : undefined;
  }

  private get furnitureItem(): Furniture | undefined {
    return this._furnitureId ? this.floor?.furniture.find((f) => f.id === this._furnitureId) : undefined;
  }

  /** Centre offset on a room edge closest to `world`, keeping the opening inside the edge. */
  private offsetOnEdge(room: Room, edge: number, world: Vec2, width: number, free: boolean): number {
    const a = room.points[edge];
    const b = room.points[(edge + 1) % room.points.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const t = ((world[0] - a[0]) * (b[0] - a[0]) + (world[1] - a[1]) * (b[1] - a[1])) / len;
    const g = free ? 0.01 : this._doc.settings.grid;
    const half = Math.min(width, len) / 2;
    return round(Math.min(len - half, Math.max(half, Math.round(t / g) * g)));
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
        const score = d - (room.id === this._roomId ? 0.5 : 0);
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
      offset: this.offsetOnEdge(room, edge, this.toWorld(...screen), width, false),
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

  /** Turns an opening into another kind (door, double door, window, terrace door, garage door). */
  private setOpeningPreset(o: Opening, preset: OpeningPreset): void {
    const d = OPENING_PRESETS[preset];
    this._openingPreset = preset;
    const sameWidth = openingPreset(o) === preset;
    const style = "style" in d ? d.style : null;
    this.updateOpening({ type: d.type, leaves: d.leaves, sill: d.sill, height: d.height, style, ...(sameWidth ? {} : { width: d.width }) });
  }

  private updateOpening(patch: Partial<Opening>): void {
    const id = this._openingId;
    this.change((_, floor) => Object.assign(floor.openings.find((o) => o.id === id)!, patch));
  }

  private deleteOpening(): void {
    const id = this._openingId;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("opening", id)) return;
    this.change((_, floor) => (floor.openings = floor.openings.filter((o) => o.id !== id)));
    this._openingId = null;
  }

  /** How strongly a lamp glows in 3D, in percent (#181): many bright LED strips need not outshine the room. */
  private glowScaleField(value: number | null | undefined, set: (v: number | null) => void) {
    return html`<label class="nf-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((value ?? 1) * 100))}
        ?disabled=${!this.isAdmin}
        @change=${(e: Event) => {
          const v = Math.min(150, Math.max(10, Number((e.target as HTMLInputElement).value) || 100)) / 100;
          set(Math.abs(v - 1) < 0.001 ? null : v);
        }}
    /></label>`;
  }

  /** Furniture that can stand for a placed device of this kind (a speaker for a media player, a lamp for a light …). */
  private furnitureFor(entityId: string): { type: string; label: string }[] {
    const kind = kindOf(entityId);
    const lang = this.hass?.language ?? "en";
    const all = [
      ...FURNITURE_TYPES.map((t) => ({ type: t as string, label: this.t(`furn_${t}` as I18nKey) })),
      ...(this.packs ?? []).flatMap((p) => p.items.map((it) => ({ type: packType(p.id, it.id), label: `${packItemName(it, lang)} · ${packName(p, lang)}` }))),
    ];
    const speakerish = /speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/;
    const fits = (t: string): boolean => {
      if (kind === "light") return isLamp(t);
      if (kind === "climate") return t === "radiator";
      if (entityId.startsWith("vacuum.")) return t === "robot_vacuum" || (isPackType(t) && t.endsWith(":robot_vacuum"));
      if (kind === "media") return hasScreen(t) || (isElectric(t) && speakerish.test(t));
      return isElectric(t) && !isLamp(t);
    };
    return all.filter((x) => fits(x.type)).sort((a, b) => a.label.localeCompare(b.label));
  }

  /** A vehicle placed as plain furniture becomes a parking spot with this vehicle (presence and Auto live there). */
  private vehicleToSpot(f: Furniture): void {
    if (!this.isAdmin) return;
    const [w, d, h] = furnitureSize("parking");
    const spot: Furniture = { id: uid("furniture"), type: "parking", x: f.x, z: f.z, rotation: f.rotation, w: Math.max(w, round(f.w + 0.5)), d: Math.max(d, round(f.d + 0.4)), h, variant: null, vehicle: f.type, ...(f.name ? { name: f.name } : {}) };
    this.change((_, floor) => {
      floor.furniture = floor.furniture.filter((m) => m.id !== f.id);
      floor.furniture.push(spot);
    });
    this.selectItem("furniture", spot.id);
  }

  /** Replace a placed device by a furniture item linked to it, where the pin stood (one undo step). */
  private deviceToFurniture(pl: Placement, type: string): void {
    if (!this.isAdmin) return;
    const [w, d, h] = furnitureSize(type);
    const item: Furniture = { id: uid("furniture"), type, x: pl.x, z: pl.z, rotation: pl.rotation ?? 0, w, d, h, variant: null, entity: pl.entity_id, name: pl.name ?? null, ...(pl.locked ? { locked: true } : {}) };
    this.change((_, f) => {
      f.placements = f.placements.filter((p) => p.entity_id !== pl.entity_id);
      f.furniture.push(item);
    });
    this._deviceId = null;
    this.selectItem("furniture", item.id);
  }

  /** Turn a furniture item linked by hand back into a plain device pin at its place. */
  private furnitureToDevice(f: Furniture): void {
    const id = f.entity;
    if (!this.isAdmin || !id || id === "none") return;
    const pl: Placement = { entity_id: id, x: f.x, z: f.z, y: null, rotation: f.rotation, ...(f.name ? { name: f.name } : {}) };
    this.change((_, floor) => {
      floor.furniture = floor.furniture.filter((m) => m.id !== f.id);
      if (!floor.placements.some((p) => p.entity_id === id)) floor.placements.push(pl);
    });
    this._furnitureId = null;
    this.selectItem("device", id);
  }

  private renderAsFurniture(pl: Placement) {
    if (!this.isAdmin) return nothing;
    const options = this.furnitureFor(pl.entity_id);
    if (!options.length) return nothing;
    return html`<label class="nf-field nf-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${(e: Event) => {
          const v = (e.target as HTMLSelectElement).value;
          if (v) this.deviceToFurniture(pl, v);
        }}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${options.map((o) => html`<option value=${o.type}>${o.label}</option>`)}
      </select></label
    >`;
  }

  private addFurniture(type: string): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const [w, d, h0] = furnitureSize(type);
    // stairs reach up to the next floor
    const above = this._doc.floors.filter((f) => f.elevation > floor.elevation).sort((p, q) => p.elevation - q.elevation)[0];
    const h = type === "stairs" ? round(above ? above.elevation - floor.elevation : floor.height + 0.25) : h0;
    const room = this.room;
    const [x, z] = room ? centroid(room.points) : this.toWorld(this._size.w / 2, this._size.h / 2);
    const item: Furniture = { id: uid("furniture"), type, x: round(x), z: round(z), rotation: 0, w, d, h, variant: null };
    this.change((_, f) => f.furniture.push(item));
    this.selectItem("furniture", item.id);
    // small items are easy to lose in a large plan: bring the new one into view
    this.showPoint(item.x, item.z);
  }

  /**
   * Snap a furniture item against the nearest wall of its room: back to the wall (or a side, when it
   * stands sideways), flush with the wall face. Null when no wall is close enough.
   */
  private snapToWall(f: Furniture): { x: number; z: number; rotation: number } | null {
    return this.floor ? snapToWall(this.floor, f, this._doc.settings.wall_interior) : null;
  }

  private updateFurniture(patch: Partial<Furniture>): void {
    const id = this._furnitureId;
    this.change((_, floor) => Object.assign(floor.furniture.find((f) => f.id === id)!, patch));
  }

  private mirrorFurniture(): void {
    const f = this.furnitureItem;
    if (!f || !this.isAdmin) return;
    this.updateFurniture({ mirror: !f.mirror });
  }

  private rotateFurniture(delta: number): void {
    const f = this.furnitureItem;
    if (!f || !this.isAdmin) return;
    this.updateFurniture({ rotation: (((f.rotation + delta) % 360) + 360) % 360 });
  }

  private deleteFurniture(): void {
    const id = this._furnitureId;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("furniture", id)) return;
    this.change((_, floor) => (floor.furniture = floor.furniture.filter((f) => f.id !== id)));
    this._furnitureId = null;
  }

  private duplicateFurniture(): void {
    const f = this.furnitureItem;
    if (!f || !this.isAdmin) return;
    const copy = { ...structuredClone(f), id: uid("furniture"), x: round(f.x + 0.3), z: round(f.z + 0.3) };
    this.change((_, floor) => floor.furniture.push(copy));
    this.selectItem("furniture", copy.id);
  }

  /** Place entities in the selected room; an entity already placed elsewhere moves here. */
  private placeDevices(entityIds: string[]): void {
    const room = this.room;
    if (!room || !entityIds.length || !this.isAdmin) return;
    const ids = new Set(entityIds);
    this.change((doc, floor) => {
      for (const f of doc.floors) {
        f.placements = f.placements.filter((pl) => !ids.has(pl.entity_id));
        f.furniture = f.furniture.filter((m) => !(isLamp(m.type) && m.entity && ids.has(m.entity)));
      }
      const taken = [...floor.placements.map((pl) => [pl.x, pl.z] as Vec2), ...floor.furniture.filter((m) => isLamp(m.type)).map((m) => [m.x, m.z] as Vec2)];
      for (const pl of autoPlace(room, entityIds, taken)) {
        if (!pl.entity_id.startsWith("light.")) {
          floor.placements.push(pl);
          continue;
        }
        // a light becomes a ceiling lamp that is tapped directly in 3D
        const [w, d, h] = FURNITURE_SIZE.lamp_ceiling;
        floor.furniture.push({ id: uid("furniture"), type: "lamp_ceiling", x: pl.x, z: pl.z, rotation: 0, w, d, h, variant: null, entity: pl.entity_id, power: null });
      }
    });
  }

  private get device(): Placement | undefined {
    return this._deviceId ? this.floor?.placements.find((p) => p.entity_id === this._deviceId) : undefined;
  }

  private updateDevice(patch: Partial<Placement>): void {
    const id = this._deviceId;
    this.change((_, floor) => Object.assign(floor.placements.find((p) => p.entity_id === id)!, patch));
  }

  /** Move the selected device to the middle of its room. */
  private centreDevice(): void {
    const pl = this.device;
    const roomId = pl ? this.roomAt([pl.x, pl.z]) : null;
    const room = this.floor?.rooms.find((r) => r.id === roomId);
    if (!pl || !room) return;
    const [x, z] = centroid(room.points);
    this.updateDevice({ x: round(x), z: round(z) });
  }

  /** Spread the room's ceiling lights evenly over it (grid of cells, one light per cell). */
  private spreadCeilingLights(room: Room): void {
    const floor = this.floor;
    if (!floor) return;
    const lights = floor.placements.filter(
      (p) => kindOf(p.entity_id) === "light" && (p.mount ?? "ceiling") === "ceiling" && pointInPolygon([p.x, p.z], room.points),
    );
    if (lights.length < 2) return;
    const b = bounds(room.points);
    const w = b.x1 - b.x0;
    const d = b.z1 - b.z0;
    const cols = Math.max(1, Math.round(Math.sqrt((lights.length * w) / Math.max(0.1, d))));
    const rows = Math.ceil(lights.length / cols);
    const spots = lights.map((_, i) => {
      const r = Math.floor(i / cols);
      // a last row that is not full is spread over the whole width as well
      const inRow = r === rows - 1 ? lights.length - cols * (rows - 1) : cols;
      const c = i - r * cols;
      return [round(b.x0 + (w / inRow) * (c + 0.5)), round(b.z0 + (d / rows) * (r + 0.5))] as Vec2;
    });
    const ids = lights.map((l) => l.entity_id);
    this.change((_, f) => {
      ids.forEach((id, i) => Object.assign(f.placements.find((p) => p.entity_id === id)!, { x: spots[i][0], z: spots[i][1] }));
    });
  }

  /** Close gaps between rooms of this floor and take the gap as interior wall thickness. */
  private closeFloorGaps(): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const { rooms, gaps } = closeGaps(floor.rooms);
    if (!gaps.length) {
      this._notice = this.t("gaps_none");
      return;
    }
    const thickness = suggestedThickness(gaps);
    this.change((doc, f) => {
      f.rooms = rooms;
      if (thickness) doc.settings.wall_interior = thickness;
    });
    this._notice = thickness
      ? this.t("gaps_closed_wall", { n: gaps.length, t: formatNumber(this.hass, thickness, 2) })
      : this.t("gaps_closed", { n: gaps.length });
  }

  private removeDevice(entityId: string): void {
    this.change((doc) => {
      for (const f of doc.floors) {
        f.placements = f.placements.filter((pl) => pl.entity_id !== entityId);
        f.furniture = f.furniture.filter((m) => !(isLamp(m.type) && m.entity === entityId));
      }
    });
  }

  private deleteVertex(index: number): void {
    const room = this.room;
    if (!room || room.points.length <= 3) return;
    const n = room.points.length;
    const prev = (index - 1 + n) % n;
    this.change((_, floor) => {
      const target = floor.rooms.find((r) => r.id === room.id)!;
      target.points.splice(index, 1);
      // the edge starting at the removed corner goes away; the one before it keeps its height
      if (target.wall_heights) target.wall_heights.splice(index, 1);
      if (target.wall_thickness) target.wall_thickness.splice(index, 1);
      // the two edges at the removed corner merge; openings on them cannot keep their place
      floor.openings = floor.openings
        .filter((o) => o.room_id !== room.id || o.wall || (o.edge !== index && o.edge !== prev))
        .map((o) => (o.room_id === room.id && !o.wall && o.edge > index ? { ...o, edge: o.edge - 1 } : o));
    });
    this._vertex = null;
  }

  /** Move everything on the floor by (dx, dz): rooms, furniture, devices, outdoor areas, free walls and the background. */
  private shiftFloor(dx: number, dz: number): void {
    if (!this.isAdmin || (!dx && !dz)) return;
    const mv = (p: Vec2): Vec2 => [round(p[0] + dx), round(p[1] + dz)];
    const one = (floor: Floor) => {
      for (const r of floor.rooms) r.points = r.points.map(mv);
      for (const f of floor.furniture) {
        f.x = round(f.x + dx);
        f.z = round(f.z + dz);
      }
      for (const p of floor.placements) {
        p.x = round(p.x + dx);
        p.z = round(p.z + dz);
      }
      for (const a of floor.outdoor) a.points = a.points.map(mv);
      for (const w of floor.walls ?? []) {
        w.a = mv(w.a);
        w.b = mv(w.b);
      }
      if (floor.background) {
        floor.background.x = round(floor.background.x + dx);
        floor.background.z = round(floor.background.z + dz);
      }
    };
    if (this._shiftAll) {
      // the whole house: every floor, the roof sections and the meter
      this.change((doc) => {
        for (const f of doc.floors) one(f);
        this.moveHouseExtras(doc, mv);
      });
    } else this.change((_, floor) => one(floor));
    this._shiftX = 0;
    this._shiftZ = 0;
  }

  /** What belongs to the house as a whole and moves with "all floors": roof sections and the meter. */
  private moveHouseExtras(doc: Building, mv: (p: Vec2) => Vec2): void {
    for (const s of doc.settings.roof.sections ?? []) {
      const corners = [mv([s.x0, s.z0]), mv([s.x1, s.z0]), mv([s.x1, s.z1]), mv([s.x0, s.z1])];
      s.x0 = Math.min(...corners.map((c) => c[0]));
      s.x1 = Math.max(...corners.map((c) => c[0]));
      s.z0 = Math.min(...corners.map((c) => c[1]));
      s.z1 = Math.max(...corners.map((c) => c[1]));
      if (s.points) s.points = s.points.map(mv);
    }
    if (doc.energy.meter) [doc.energy.meter.x, doc.energy.meter.z] = mv([doc.energy.meter.x, doc.energy.meter.z]);
  }

  /** Turn everything on the floor by 90° (clockwise in the plan) about the middle of its rooms: when a floor was drawn the wrong way round. */
  private turnFloor(): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    // with "all floors" the house turns about the middle of every room on every floor
    const pts = (this._shiftAll ? this._doc.floors : [floor]).flatMap((f) => f.rooms.flatMap((r) => r.points));
    if (!pts.length) return;
    const xs = pts.map((p) => p[0]);
    const zs = pts.map((p) => p[1]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cz = (Math.min(...zs) + Math.max(...zs)) / 2;
    const mv = (p: Vec2): Vec2 => [round(cx - (p[1] - cz)), round(cz + (p[0] - cx))];
    const one = (f: Floor) => {
      for (const r of f.rooms) r.points = r.points.map(mv);
      for (const m of f.furniture) {
        [m.x, m.z] = mv([m.x, m.z]);
        m.rotation = (m.rotation + 90) % 360;
      }
      for (const p of f.placements) {
        [p.x, p.z] = mv([p.x, p.z]);
        p.rotation = ((p.rotation ?? 0) + 90) % 360;
      }
      for (const a of f.outdoor) a.points = a.points.map(mv);
      for (const w of f.walls ?? []) {
        w.a = mv(w.a);
        w.b = mv(w.b);
      }
      if (f.background) {
        [f.background.x, f.background.z] = mv([f.background.x, f.background.z]);
        f.background.rotation = ((f.background.rotation ?? 0) + 90) % 360;
      }
    };
    if (this._shiftAll) {
      this.change((doc) => {
        for (const f of doc.floors) one(f);
        this.moveHouseExtras(doc, mv);
      });
    } else this.change((_, f) => one(f));
  }

  private updateFloor(patch: Partial<Floor>): void {
    this.change((_, floor) => Object.assign(floor, patch));
  }

  private updateRoom(patch: Partial<Room>): void {
    const id = this._roomId;
    this.change((_, floor) => Object.assign(floor.rooms.find((r) => r.id === id)!, patch));
  }

  private setArea(areaId: string): void {
    const room = this.room;
    if (!room) return;
    const area = areaId ? this.hass?.areas?.[areaId] : undefined;
    const generic = !room.name || /^(Raum|Room) \d+$/.test(room.name) || Object.values(this.hass?.areas ?? {}).some((a) => a.name === room.name);
    this.updateRoom({ area_id: areaId || null, ...(area && generic ? { name: area.name } : {}) });
  }

  private setRect(field: "x" | "z" | "w" | "d", value: number): void {
    const room = this.room;
    if (!room || !Number.isFinite(value)) return;
    const b = bounds(room.points);
    let { x0, z0, x1, z1 } = b;
    if (field === "x") [x0, x1] = [value, value + (x1 - x0)];
    if (field === "z") [z0, z1] = [value, value + (z1 - z0)];
    if (field === "w" && value > 0.05) x1 = x0 + value;
    if (field === "d" && value > 0.05) z1 = z0 + value;
    this.updateRoom({ points: [[round(x0), round(z0)], [round(x1), round(z0)], [round(x1), round(z1)], [round(x0), round(z1)]] });
  }

  private setPoint(index: number, axis: 0 | 1, value: number): void {
    const room = this.room;
    if (!room || !Number.isFinite(value)) return;
    const points = room.points.map((p) => [...p] as Vec2);
    points[index][axis] = round(value);
    this.updateRoom({ points });
  }

  private async loadImage(imageId: string): Promise<void> {
    this.loadingImages.add(imageId);
    try {
      const url = await fetchImage(this.hass, imageId);
      const img = new Image();
      img.src = url;
      await img.decode();
      this._images = { ...this._images, [imageId]: { url, aspect: img.naturalHeight / img.naturalWidth } };
    } catch {
      // image missing (e.g. removed): the background stays empty
    }
  }

  private async uploadBackground(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;
    const bitmap = await createImageBitmap(file);
    const k = Math.min(1, 2048 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * k);
    canvas.height = Math.round(bitmap.height * k);
    canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const data = canvas.toDataURL("image/jpeg", 0.85);
    const imageId = uid("img");
    await storeImage(this.hass, imageId, data);
    this._images = { ...this._images, [imageId]: { url: data, aspect: canvas.height / canvas.width } };
    const b = this.floor?.rooms.length ? bounds(this.floor.rooms.flatMap((r) => r.points)) : null;
    this.updateFloor({ background: { image_id: imageId, x: b ? b.x0 : 0, z: b ? b.z0 : 0, width: b ? Math.max(4, round(b.x1 - b.x0)) : 12, opacity: 0.5 } });
  }

  // ------------------------------------------------------------------ rendering

  protected render(): TemplateResult {
    const floor = this.floor;
    const walls = floor ? generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []) : null;
    return html`
      ${this.renderPreview()}
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
              ${this.renderBackground(floor)} ${this.renderGrid()} ${this.renderGhost()} ${walls ? this.renderWalls(walls.walls) : nothing}
              ${floor ? this.renderOutdoor(floor) : nothing} ${floor ? this.renderRooms(floor) : nothing} ${floor ? this.renderFurniture(floor) : nothing}
              ${floor ? this.renderFreeWalls(floor) : nothing}
              ${floor && walls ? this.renderOpenings(floor, walls.walls) : nothing} ${floor ? this.renderMeter(floor) : nothing}
              ${floor && this._tool === "select" ? this.renderDevices(floor) : nothing}
              ${this.room && this.isAdmin && this._tool === "select" && !this._openingId && !this._furnitureId && !this.isFixedItem("room", this.room.id) ? this.renderHandles(this.room) : nothing}
              ${floor ? this.renderOutdoorHandles(floor) : nothing}
              ${this.room && this._tool === "select" ? this.renderSplitMarks(this.room) : nothing}
              ${floor ? headroomLayer(this.canvasContext(), floor) : nothing}
              ${this._tool === "roof" ? svg`${roofSectionsLayer(this.canvasContext(), this.roof)}${roofWindowsLayer(this.canvasContext(), this.roof)}` : this._tool === "energy" ? svg`${roofSectionsLayer(this.canvasContext(), this.roof)}${solarLayer(this.canvasContext(), this.roof)}${energyMarkersLayer(this.canvasContext(), this.floor, this._furnitureId)}` : nothing} ${this.renderDraft()} ${this.renderGuides()}
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

  private renderBackground(floor: Floor | undefined) {
    const bg = floor?.background;
    const img = bg ? this._images[bg.image_id] : undefined;
    if (!bg || !img) return nothing;
    const [x, y] = this.toScreen([bg.x, bg.z]);
    const w = bg.width * this._view.scale;
    const h = w * img.aspect;
    const rot = bg.rotation ?? 0;
    const edit = this.bgHandles();
    // while editing, the picture takes the pointer (drag moves it) and its lower right corner scales it
    return svg`<g transform="rotate(${rot} ${x + w / 2} ${y + h / 2})">
      <image href=${img.url} x=${x} y=${y} width=${w} height=${h} opacity=${bg.opacity} preserveAspectRatio="none" pointer-events=${edit ? "auto" : "none"} data-bg="1" style=${edit ? "cursor:move" : ""} />
      ${edit
        ? svg`<rect class="nf-bg-frame" x=${x} y=${y} width=${w} height=${h} />
          <circle class="nf-bg-handle" data-bg-handle="1" cx=${x + w} cy=${y + h} r="9" />
          <g class="nf-rotate" data-bg-rotate="1">
            <line x1=${x + w / 2} y1=${y} x2=${x + w / 2} y2=${y - 30} />
            <circle cx=${x + w / 2} cy=${y - 30} r="16" class="nf-hit" />
            <circle cx=${x + w / 2} cy=${y - 30} r="8" />
            <path d="M${x + w / 2 - 4} ${y - 31}a4 4 0 1 1 2 3.5" />
          </g>`
        : nothing}
    </g>${this.renderBgRuler()}`;
  }

  /** The picture has handles (move, scale, turn) only while "Move and scale" is switched on, with the select tool. */
  private bgHandles(): boolean {
    return !!this.floor?.background && this.isAdmin && this._tool === "select" && this._bgEdit;
  }

  /** The ruler's points and line over the background (#183), or the straighten line. */
  private renderBgRuler() {
    const pts = this._bgLevel?.length ? this._bgLevel : this._bgRuler;
    if (!pts?.length) return nothing;
    const s = pts.map((p) => this.toScreen(p));
    return svg`<g class="nf-bg-ruler">
      ${s.length === 2 ? svg`<line x1=${s[0][0]} y1=${s[0][1]} x2=${s[1][0]} y2=${s[1][1]} />` : nothing}
      ${s.map(([x, y]) => svg`<circle cx=${x} cy=${y} r="6" />`)}
    </g>`;
  }

  /** Turn the background about the first tap so the tapped line runs exactly along x or z (whichever is nearer). */
  private applyBgLevel(p: Vec2, q: Vec2): void {
    const bg = this.floor?.background;
    const img = bg ? this._images[bg.image_id] : undefined;
    this._bgLevel = null;
    if (!bg || !img || Math.hypot(q[0] - p[0], q[1] - p[1]) < 0.05) return;
    const a = Math.atan2(q[1] - p[1], q[0] - p[0]);
    const delta = Math.round(a / (Math.PI / 2)) * (Math.PI / 2) - a;
    if (Math.abs(delta) < 1e-4) return;
    // turning about p moves the picture's middle along: c' = p + R(delta) (c − p)
    const h = bg.width * img.aspect;
    const c: Vec2 = [bg.x + bg.width / 2, bg.z + h / 2];
    const dx = c[0] - p[0];
    const dz = c[1] - p[1];
    const c2: Vec2 = [p[0] + dx * Math.cos(delta) - dz * Math.sin(delta), p[1] + dx * Math.sin(delta) + dz * Math.cos(delta)];
    let rot = (bg.rotation ?? 0) + (delta * 180) / Math.PI;
    rot = Math.round((((((rot + 180) % 360) + 360) % 360) - 180) * 100) / 100;
    this.updateFloor({ background: { ...bg, rotation: rot, x: round(c2[0] - bg.width / 2), z: round(c2[1] - h / 2) } });
  }

  /** Scale the background about the ruler's first point so the measured stretch gets its real length (#183). */
  private applyBgRuler(real: number): void {
    const floor = this.floor;
    const bg = floor?.background;
    const pts = this._bgRuler;
    const img = bg ? this._images[bg.image_id] : undefined;
    if (!bg || !img || !pts || pts.length < 2 || !(real > 0)) return;
    const measured = Math.hypot(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]);
    if (measured < 1e-4) return;
    const k = real / measured;
    // scaling about p keeps the turn: the centre moves to p + k (c − p), the size grows by k
    const h = bg.width * img.aspect;
    const c: Vec2 = [bg.x + bg.width / 2, bg.z + h / 2];
    const p = pts[0];
    const c2: Vec2 = [p[0] + k * (c[0] - p[0]), p[1] + k * (c[1] - p[1])];
    const w2 = bg.width * k;
    const h2 = h * k;
    this.updateFloor({ background: { ...bg, width: round(w2), x: round(c2[0] - w2 / 2), z: round(c2[1] - h2 / 2) } });
    this._bgRuler = null;
    this._bgRulerLen = 0;
  }

  /** The picture's own frame: a plan point measured from its top left corner, along its (turned) sides, in metres. */
  private bgLocal(bg: Background, world: Vec2, aspect: number): Vec2 {
    const h = bg.width * aspect;
    const cx = bg.x + bg.width / 2;
    const cz = bg.z + h / 2;
    const a = (-(bg.rotation ?? 0) * Math.PI) / 180;
    const dx = world[0] - cx;
    const dz = world[1] - cz;
    return [cx + dx * Math.cos(a) - dz * Math.sin(a) - bg.x, cz + dx * Math.sin(a) + dz * Math.cos(a) - bg.z];
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

  /** Kameras: which detection sensors the camera's device brings (person, vehicle, animal, motion) – found by itself. */
  private renderCameraDetections(cameraId: string) {
    if (!this.hass) return nothing;
    const hass = this.hass;
    const sensors = cameraMotionSensors(hass, cameraId);
    const kinds = [...new Set(sensors.map((id) => detectionKind(hass, id)))];
    return html`<p class="nf-sub nf-wide">
      ${sensors.length
        ? html`${this.t("camera_detect_found", { kinds: kinds.map((k) => this.t(`detect_${k}` as I18nKey)).join(", "), n: sensors.length })}`
        : this.t("camera_detect_none")}
    </p>`;
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
        const on = () => (this._edgeHi = i);
        const off = () => (this._edgeHi = null);
        // an edge another room splits: one row per part, each with its own height (#77)
        const starts = this.edgeParts(room, i);
        const parts = starts.length > 1 ? starts.map((_, k) => k) : [undefined];
        return parts.map((part) => {
          const h = part === undefined ? (Array.isArray(entry) ? (entry[0] ?? null) : entry) : Array.isArray(entry) ? (entry[part] ?? null) : entry;
          const partLen = part === undefined ? len : (starts[part + 1] ?? len) - starts[part];
          const set = (v: number | null) => this.setEdgeHeight(room, i, v, part);
          return html`<div
            class="nf-edge-height${i === this._edgeHi ? " nf-edge-on" : ""}${h !== null ? " nf-edge-low" : ""}"
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
    const a = this._outdoorId ? floor.outdoor.find((x) => x.id === this._outdoorId) : undefined;
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
      return svg`<g data-outdoor=${a.id} class=${`nf-out nf-out-${a.type}${a.id === this._outdoorId ? " nf-out-sel" : ""}`}>
        <polygon points=${pts} />
        ${big ? svg`<text x=${cx} y=${cy + 4}>${this.t(`out_${a.type}` as I18nKey)}</text>` : nothing}
      </g>`;
    })}</g>`;
  }

  private renderOutdoorForm(a: OutdoorArea) {
    const admin = this.isAdmin;
    const rect = isAxisRect(a.points);
    const b = bounds(a.points);
    const setRect = (field: "x" | "z" | "w" | "d", v: number) => {
      let { x0, z0, x1, z1 } = b;
      if (field === "x") [x0, x1] = [v, v + (x1 - x0)];
      if (field === "z") [z0, z1] = [v, v + (z1 - z0)];
      if (field === "w") x1 = x0 + Math.max(0.1, v);
      if (field === "d") z1 = z0 + Math.max(0.1, v);
      this.updateOutdoor({ points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]].map(([x, z]) => [round(x), round(z)] as Vec2) });
    };
    return html`<section>
      <div class="nf-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor", a.id)}</div>
      <div class="nf-form">
        <label class="nf-field nf-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateOutdoor({ type: (e.target as HTMLSelectElement).value as OutdoorType })}>
            ${OUTDOOR_TYPES.map((t) => html`<option value=${t} ?selected=${t === a.type}>${this.t(`out_${t}` as I18nKey)}</option>`)}
          </select></label
        >
        ${rect
          ? html`${this.num(this.t("x"), b.x0, (v) => setRect("x", v))} ${this.num(this.t("z"), b.z0, (v) => setRect("z", v))}
            ${this.num(this.t("width"), b.x1 - b.x0, (v) => setRect("w", v), 0.01, 0.1)} ${this.num(this.t("depth"), b.z1 - b.z0, (v) => setRect("d", v), 0.01, 0.1)}`
          : nothing}
        ${outdoorStanding(a.type)
          ? this.num(this.t("outdoor_height"), a.height ?? OUTDOOR_TOP[a.type], (v) => this.updateOutdoor({ height: Math.min(6, Math.max(0.1, round(v))) }), 0.05, 0.1)
          : nothing}
        ${this.num(this.t("outdoor_offset"), a.offset ?? 0, (v) => this.updateOutdoor({ offset: Math.min(10, Math.max(-10, round(v))) || null }), 0.05)}
        ${a.type !== "pool"
          ? html`${this.num(this.t("outdoor_slope"), a.slope ?? 0, (v) => this.updateOutdoor({ slope: Math.min(20, Math.max(0, round(v))) || null }), 0.05, 0)}
              <label class="nf-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!admin} @change=${(e: Event) => this.updateOutdoor({ slope_dir: (e.target as HTMLSelectElement).value as SlopeDir })}>
                  ${SLOPE_DIRS.map((d) => html`<option value=${d} ?selected=${d === (a.slope_dir ?? "x")}>${this.t(`slope_${d.replace("-", "n")}` as I18nKey)}</option>`)}
                </select></label
              >`
          : nothing}
        <label class="nf-check nf-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${a.outline !== false} ?disabled=${!admin} @change=${(ev: Event) => this.updateOutdoor({ outline: (ev.target as HTMLInputElement).checked ? undefined : false })} />
          ${this.t("outdoor_outline")}</label
        >
        ${a.type === "fence" || a.type === "pergola"
          ? html`<label class="nf-check nf-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!a.open} ?disabled=${!admin} @change=${(ev: Event) => this.updateOutdoor({ open: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("outdoor_open")}</label
            >`
          : nothing}
        ${a.type === "pergola"
          ? html`<label class="nf-check nf-wide"
              ><input type="checkbox" .checked=${!!a.bracing} ?disabled=${!admin} @change=${(ev: Event) => this.updateOutdoor({ bracing: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("outdoor_bracing")}</label
            >`
          : nothing}
        <label class="nf-check nf-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!a.cut} ?disabled=${!admin} @change=${(ev: Event) => this.updateOutdoor({ cut: (ev.target as HTMLInputElement).checked || undefined })} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${a.slope ? html`<p class="nf-sub">${this.t("outdoor_slope_hint")}</p>` : nothing}
      <p class="nf-sub">${this.t("outdoor_hint")}</p>
      ${admin
        ? html`<div class="nf-actions">
            <button class="nf-btn" @click=${() => this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="nf-btn nf-danger" @click=${() => this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`
        : nothing}
    </section>`;
  }

  private renderRooms(floor: Floor) {
    return svg`
      <g>${floor.rooms.map((r) => {
        const pts = r.points.map((p) => this.toScreen(p).join(",")).join(" ");
        return svg`<polygon data-room=${r.id} class=${r.id === this._roomId ? "nf-room nf-room-sel" : "nf-room"} points=${pts} />`;
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
    const i = this._edgeHi;
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
      const sel = f.id === this._furnitureId;
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
      const sel = o.id === this._openingId;
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
      const sel = pl.entity_id === this._deviceId;
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
      return svg`<g data-vertex=${i} class=${i === this._vertex ? "nf-vertex nf-vertex-sel" : "nf-vertex"}><circle cx=${x} cy=${y} r="16" class="nf-hit" /><circle cx=${x} cy=${y} r="6" /></g>
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
        ${this._furnitureId || this._deviceId || this._openingId
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
    const floors = this._doc?.floors ?? [];
    const room = this.room;
    const admin = this.isAdmin;
    const areas = Object.values(this.hass?.areas ?? {}).sort((a, b) => a.name.localeCompare(b.name));
    if (this._tool === "roof") return renderRoofPanel(this.roofDeps());
    if (this._tool === "energy") return this.renderEnergyPanel();
    // furnishing: the library and the selected item come first
    if (this._tool === "furniture" && floor && admin) {
      return html`${this.furnitureItem ? this.renderFurnitureForm(this.furnitureItem) : nothing} ${this.renderFurnitureLibrary()}`;
    }
    // a selected item shows only its own form, with a way back to the floor and room
    const item =
      this._tool === "measure"
        ? null
        : this.furnitureItem
          ? this.renderFurnitureForm(this.furnitureItem)
          : this.opening
            ? this.renderOpeningForm(this.opening)
            : this.device
              ? this.renderDeviceForm(this.device)
              : this.outdoorArea
                ? this.renderOutdoorForm(this.outdoorArea)
                : this.freeWall
                  ? this.renderFreeWallForm(this.freeWall)
                  : null;
    if (item) {
      return html`<button class="nf-btn nf-back" @click=${() => this.selectItem("room", this._roomId)}>‹ ${this.t(room ? "back_to_room" : "back_to_floor", { room: room?.name ?? "" })}</button>
        ${item}`;
    }
    if (room && this._tool !== "measure") {
      return html`<button class="nf-btn nf-back" @click=${() => this.selectItem("room", null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(room, areas)} ${this.renderDeviceList(room)}`;
    }
    return html`
      ${admin ? nothing : html`<p class="nf-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="nf-floor-list">
          ${[...floors].reverse().map(
            (f) => html`<button
              class="nf-chip"
              aria-pressed=${f.id === this._floorId}
              @click=${() => {
                this._floorId = f.id;
                this._roomId = null;
                this._vertex = null;
                this._draft = [];
                this.fit();
              }}
            >
              ${f.name}
            </button>`,
          )}
          ${admin
            ? html`<button
                class="nf-btn"
                aria-expanded=${this._floorMenu}
                @click=${() => (this.freeHaFloors.length ? (this._floorMenu = !this._floorMenu) : this.addFloor())}
              >
                + ${this.t("add_floor")}
              </button>`
            : nothing}
        </div>
        ${admin && this._floorMenu
          ? html`<div class="nf-floor-menu">
              <p class="nf-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(
                (f) => html`<button class="nf-btn" @click=${() => this.addFloor(f)}>
                  ${f.name}${f.level != null ? html` <span class="nf-sub">· ${this.t("level", { n: f.level })}</span>` : nothing}
                </button>`,
              )}
              <button class="nf-btn" @click=${() => this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`
          : nothing}
        ${floor
          ? html`<div class="nf-form">
              <label class="nf-field nf-wide"
                >${this.t("floor_name")}
                <input .value=${floor.name} ?disabled=${!admin} @change=${(e: Event) => this.updateFloor({ name: (e.target as HTMLInputElement).value })}
              /></label>
              ${this.num(this.t("elevation"), floor.elevation, (v) => this.updateFloor({ elevation: v }))}
              ${admin
                ? html`<div class="nf-field nf-wide nf-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${(e: Event) => (this._shiftX = Number((e.target as HTMLInputElement).value) || 0)} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${(e: Event) => (this._shiftZ = Number((e.target as HTMLInputElement).value) || 0)} />
                    <button class="nf-btn" ?disabled=${!this._shiftX && !this._shiftZ} @click=${() => this.shiftFloor(this._shiftX, this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="nf-btn" title=${this.t("floor_turn_hint")} @click=${() => this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="nf-btn" title=${this.t("floor_start_view_hint")} @click=${() => this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${floor.start_view ? html`<button class="nf-btn" title=${this.t("floor_start_view_reset")} @click=${() => this.updateFloor({ start_view: null })}>↺</button>` : nothing}
                    <label class="nf-check nf-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${(ev: Event) => (this._shiftAll = (ev.target as HTMLInputElement).checked)} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`
                : nothing}
              ${this.num(this.t("height"), floor.height, (v) => this.updateFloor({ height: Math.max(1, v) }), 0.05, 1)}
              ${Object.keys(this.hass?.floors ?? {}).length
                ? html`<label class="nf-field nf-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!admin} @change=${(e: Event) => this.updateFloor({ ha_floor: (e.target as HTMLSelectElement).value || null })}>
                      <option value="" ?selected=${!floor.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors ?? {})
                        .filter((f) => f.floor_id === floor.ha_floor || !floors.some((x) => x.ha_floor === f.floor_id))
                        .map((f) => html`<option value=${f.floor_id} ?selected=${f.floor_id === floor.ha_floor}>${f.name}</option>`)}
                    </select></label
                  >`
                : nothing}
              ${admin && this.unplacedAreas(floor).length
                ? html`<div class="nf-actions nf-wide">
                    <button class="nf-btn nf-primary" title=${this.t("area_rooms_hint")} @click=${() => this.addAreaRooms(floor)}>
                      ${this.t("area_rooms", { n: this.unplacedAreas(floor).length })}
                    </button>
                  </div>`
                : nothing}
              ${admin
                ? html`<div class="nf-actions nf-wide">
                    <button class="nf-btn" @click=${() => this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="nf-btn" @click=${() => this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="nf-btn nf-danger" @click=${() => this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="nf-actions nf-wide">
                    <button class="nf-btn" title=${this.t("gaps_hint")} ?disabled=${floor.rooms.length < 2} @click=${() => this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                  </div>
                  ${this._notice ? html`<p class="nf-sub nf-wide nf-notice">${this._notice}</p>` : nothing}`
                : nothing}
            </div>`
          : nothing}
      </section>
      ${this._tool === "measure" && floor
        ? this.renderMeasureForm()
        : this.freeWall
        ? this.renderFreeWallForm(this.freeWall)
        : this.outdoorArea
        ? this.renderOutdoorForm(this.outdoorArea)
        : this.opening
        ? this.renderOpeningForm(this.opening)
        : this.furnitureItem
          ? this.renderFurnitureForm(this.furnitureItem)
          : this.device
            ? this.renderDeviceForm(this.device)
          : room
            ? html`${this.renderRoomForm(room, areas)} ${this.renderDeviceList(room)}`
            : floor
              ? this.renderRoomList(floor)
              : nothing}
      ${admin ? renderStartView(this.host, () => this.paneView()) : nothing} ${admin ? renderFavorites(this.host) : nothing}
      ${renderHelpLinks(this.host)}
      ${admin && SHOW_PRESENCE ? renderPresence(this.host) : nothing}
      ${floor && admin ? this.renderBackgroundForm(floor) : nothing} ${admin ? renderSettings(this.host, this.settingsActions) : nothing}
      ${admin ? renderBackup(this.host, this.backup) : nothing}
    `;
  }

  private renderRoomList(floor: Floor) {
    if (!floor.rooms.length) return nothing;
    return html`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="nf-room-list">
        ${floor.rooms.map(
          (r) => html`<button class="nf-row" @click=${() => this.selectItem("room", r.id)}>
            <span>${r.name}</span><span class="nf-muted">${this.t("area_m2", { a: formatNumber(this.hass, polygonArea(r.points), 1) })}</span>
          </button>`,
        )}
      </div>
    </section>`;
  }

  private renderRoomForm(room: Room, areas: { area_id: string; name: string }[]) {
    const admin = this.isAdmin;
    const rect = isAxisRect(room.points);
    const b = bounds(room.points);
    return html`<section>
      <div class="nf-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room", room.id)}</div>
      <div class="nf-form">
        <label class="nf-field nf-wide"
          >${this.t("room_name")}
          <input .value=${room.name} ?disabled=${!admin} @change=${(e: Event) => this.updateRoom({ name: (e.target as HTMLInputElement).value })}
        /></label>
        <label class="nf-field nf-wide"
          >${this.t("area")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.setArea((e.target as HTMLSelectElement).value)}>
            <option value="" ?selected=${!room.area_id}>${this.t("no_area")}</option>
            ${areas.map((a) => html`<option value=${a.area_id} ?selected=${a.area_id === room.area_id}>${a.name}</option>`)}
          </select></label
        >
        <label class="nf-field nf-wide"
          >${this.t("material")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateRoom({ floor_material: (e.target as HTMLSelectElement).value })}>
            ${FLOOR_MATERIALS.map((m) => html`<option value=${m} ?selected=${m === room.floor_material}>${this.t(`mat_${m}` as I18nKey)}</option>`)}
          </select></label
        >
        ${rect
          ? html`${this.num(this.t("x"), b.x0, (v) => this.setRect("x", v))} ${this.num(this.t("z"), b.z0, (v) => this.setRect("z", v))}
            ${this.num(this.t("width"), b.x1 - b.x0, (v) => this.setRect("w", v), 0.01, 0.05)}
            ${this.num(this.t("depth"), b.z1 - b.z0, (v) => this.setRect("d", v), 0.01, 0.05)}`
          : nothing}
      </div>
      <div class="nf-actions">
        <button class="nf-btn" title=${this.t("room_start_view_hint")} ?disabled=${!admin} @click=${() => this.rememberRoomView()}>${this.t("room_start_view")}</button>
        ${room.start_view ? html`<button class="nf-btn" title=${this.t("room_start_view_reset")} ?disabled=${!admin} @click=${() => this.updateRoom({ start_view: null })}>↺</button>` : nothing}
      </div>
      ${this.renderEdgeHeights(room)} ${this.renderRoomClimate(room)}
      <details class="nf-points" ?open=${!rect}>
        <summary>${this.t("points")} (${room.points.length})</summary>
        ${room.points.map(
          (p, i) => html`<div class="nf-point ${i === this._vertex ? "nf-point-sel" : ""}">
            <span class="nf-muted">${i + 1}</span>
            ${this.num(this.t("x"), p[0], (v) => this.setPoint(i, 0, v))} ${this.num(this.t("z"), p[1], (v) => this.setPoint(i, 1, v))}
            ${admin
              ? html`<button class="nf-btn" title=${this.t("delete_point")} ?disabled=${room.points.length <= 3} @click=${() => this.deleteVertex(i)}>
                  ×
                </button>`
              : nothing}
          </div>`,
        )}
      </details>
      ${admin
        ? html`<div class="nf-actions">
            <button class="nf-btn nf-primary" @click=${() => (this._packages = !this._packages)}>${this.t("pkg_open")}</button>
            <button class="nf-btn" @click=${() => this.openSpotForm(room)}>${this.t("spots_place")}</button>
            <button class="nf-btn" @click=${() => this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="nf-btn nf-danger" @click=${() => this.deleteRoom()}>${this.t("delete")}</button>
          </div>`
        : nothing}
      ${this._spots ? this.renderSpotForm(room) : nothing}
      ${this._packages
        ? html`<div class="nf-packages">
            ${PACKAGES.map(
              (p) => html`<button class="nf-btn" @click=${() => this.applyPackage(room, p)}>
                <b>${this.t(`pkg_${p}` as I18nKey)}</b><span>${this.t(`pkg_${p}_desc` as I18nKey)}</span>
              </button>`,
            )}
            <p class="nf-sub">${this.t("pkg_hint")}</p>
          </div>`
        : nothing}
    </section>`;
  }

  /** Adds the furniture of a room package (lamps link to the room's lights automatically). */
  private applyPackage(room: Room, pkg: PackageId): void {
    if (!this.isAdmin) return;
    const items = furnishRoom(room, pkg, () => uid("furniture"));
    this.change((_, floor) => floor.furniture.push(...items));
    this._packages = false;
    this._notice = this.t("pkg_done", { n: items.length });
  }

  /** Suggests about one spot per 1.2 m in each direction, and the room's first light. */
  private openSpotForm(room: Room): void {
    const b = bounds(room.points);
    const lights = this.hass ? areaEntities(this.hass, room.area_id).filter((id) => id.startsWith("light.")) : [];
    this._spots = {
      type: "lamp_downlight",
      rows: Math.max(1, Math.round((b.z1 - b.z0) / 1.2)),
      cols: Math.max(1, Math.round((b.x1 - b.x0) / 1.2)),
      entity: lights[0] ?? null,
    };
  }

  private placeSpots(room: Room): void {
    const f = this._spots;
    if (!f || !this.isAdmin) return;
    const [w, d, h] = FURNITURE_SIZE[f.type];
    const items = spotGrid(room, f.rows, f.cols).map(([x, z]) => ({
      id: uid("furniture"),
      type: f.type,
      x,
      z,
      rotation: 0,
      w,
      d,
      h,
      variant: null,
      // every spot of the grid follows the same light (spots on one dimmer); "none" = not linked
      entity: f.entity ?? "none",
      power: null,
    }));
    this.change((_, floor) => floor.furniture.push(...items));
    this._spots = null;
    this._notice = this.t("spots_placed", { n: items.length });
  }

  private renderSpotForm(room: Room) {
    const f = this._spots!;
    const count = spotGrid(room, f.rows, f.cols).length;
    const lights = this.entityOptions((id) => /^(light|switch|input_boolean)\./.test(id));
    const set = (patch: Partial<NonNullable<NfEditor["_spots"]>>) => (this._spots = { ...f, ...patch });
    return html`<div class="nf-form nf-spot-form">
      <label class="nf-field nf-wide"
        >${this.t("spots_type")}
        <select @change=${(e: Event) => set({ type: (e.target as HTMLSelectElement).value as FurnitureType })}>
          ${(["lamp_downlight", "lamp_spot", "lamp_panel", "lamp_ceiling"] as FurnitureType[]).map(
            (t) => html`<option value=${t} ?selected=${t === f.type}>${this.t(`furn_${t}` as I18nKey)}</option>`,
          )}
        </select></label
      >
      ${this.num(this.t("spots_cols"), f.cols, (v) => set({ cols: Math.max(1, Math.min(12, Math.round(v))) }), 1, 1)}
      ${this.num(this.t("spots_rows"), f.rows, (v) => set({ rows: Math.max(1, Math.min(12, Math.round(v))) }), 1, 1)}
      ${this.entitySelect(this.t("furn_entity_light"), f.entity, undefined, lights, (v) => set({ entity: v === "none" ? null : v }))}
      <div class="nf-actions nf-wide">
        <button class="nf-btn nf-primary" ?disabled=${!count} @click=${() => this.placeSpots(room)}>${this.t("spots_add", { n: count })}</button>
        <button class="nf-btn" @click=${() => (this._spots = null)}>${this.t("cancel")}</button>
      </div>
      <p class="nf-sub nf-wide">${this.t("spots_hint")}</p>
    </div>`;
  }

  /** Whether an opening sits in an exterior wall (decides the automatic door style). */
  private openingIsExterior(o: Opening): boolean {
    const floor = this.floor;
    const host = floor ? openingHost(o, floor.rooms, floor.walls ?? []) : null;
    if (!floor || !host) return false;
    const walls = generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []);
    return locateOpening(walls.walls, o, host)?.wall.exterior ?? false;
  }

  /** The look of a door or window: automatic (by wall), or one of the built-in styles. */
  /** Front doors with sidelights: which side the single one sits on, and the widths (empty = automatic). */
  private renderSidelightFields(o: Opening) {
    if (o.type !== "door") return nothing;
    const style = openingStyle(o, this.openingIsExterior(o));
    if (style !== "sidelight" && style !== "sidelights") return nothing;
    const admin = this.isAdmin;
    const width = (key: "sidelight_width" | "sidelight_width2", label: I18nKey) => html`<label class="nf-field"
      >${this.t(label)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${o[key] == null ? "" : String(o[key])}
        ?disabled=${!admin}
        @change=${(e: Event) => {
          const v = Number((e.target as HTMLInputElement).value);
          this.updateOpening({ [key]: Number.isFinite(v) && v > 0 ? Math.min(3, Math.max(0.1, Math.round(v * 100) / 100)) : null });
        }}
      />
    </label>`;
    return style === "sidelight"
      ? html`<label class="nf-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!o.sidelight_hinge} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ sidelight_hinge: (ev.target as HTMLInputElement).checked })} />
            ${this.t("sidelight_hinge")}</label
          >
          ${width("sidelight_width", "sidelight_width")}`
      : html`${width("sidelight_width", "sidelight_width_left")} ${width("sidelight_width2", "sidelight_width_right")}`;
  }

  private renderStyleSelect(o: Opening) {
    const styles: readonly OpeningStyle[] = o.type === "door" ? DOOR_STYLES : WINDOW_STYLES;
    const auto = openingStyle({ type: o.type, style: null }, this.openingIsExterior(o));
    const current = o.style && (styles as readonly string[]).includes(o.style) ? o.style : "";
    return html`<label class="nf-field nf-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${(e: Event) => this.updateOpening({ style: ((e.target as HTMLSelectElement).value || null) as OpeningStyle | null })}>
        <option value="" ?selected=${!current}>${this.t("style_auto", { style: this.t(`style_${auto}` as I18nKey) })}</option>
        ${styles.map((s) => html`<option value=${s} ?selected=${s === current}>${this.t(`style_${s}` as I18nKey)}</option>`)}
      </select></label
    >`;
  }

  private renderOpeningForm(o: Opening) {
    const admin = this.isAdmin;
    const window = o.type === "window";
    const garage = o.type === "garage";
    // what "automatic" would pick: resolve with the opening's own links cleared
    const autoPick = (key: "cover" | "contact") => {
      if (!this.hass) return null;
      const probe = structuredClone(this._doc.floors);
      for (const f of probe) for (const x of f.openings) if (x.id === o.id) x[key] = null;
      return openingEntities(this.hass, probe).get(o.id)?.[key] ?? null;
    };
    const dc = (id: string) => this.hass?.states[id]?.attributes.device_class as string | undefined;
    const covers = this.entityOptions((id) => id.startsWith("cover."));
    // sensors with a number for the live position of a blind
    const positions = this.entityOptions((id) => /^(sensor|number|input_number)\./.test(id) && Number.isFinite(Number(this.hass?.states[id]?.state)));
    // plain contacts, and handle sensors with three states (open / tilted / closed)
    const contacts = this.entityOptions(
      (id) =>
        (id.startsWith("binary_sensor.") && ["door", "window", "opening", "garage_door"].includes(dc(id) ?? "")) ||
        (numberish(id) && windowPosition(this.hass?.states[id]) !== null),
    );
    // handle sensors: text states (open / tilted / closed), a window_state attribute, or a telling name
    const handles = this.entityOptions((id) => {
      const st = this.hass?.states[id];
      if (id.startsWith("binary_sensor.")) return typeof st?.attributes.window_state === "string";
      return numberish(id) && (windowPosition(st) !== null || /griff|handle|fenster|window|drehgriff/i.test(`${id} ${entityName(this.hass, id)}`));
    });
    const plainContacts = this.entityOptions((id) => id.startsWith("binary_sensor.") && ["door", "window", "opening", "garage_door"].includes(dc(id) ?? ""));
    type Kind = NonNullable<Opening["sensor"]>;
    const leafSensors = (leaf: 1 | 2) => {
      const main = leaf === 1;
      const tilt = main ? o.tilt : (o.tilt2 ?? null);
      const contact = main ? o.contact : o.contact2;
      const kind: Kind = (main ? o.sensor : o.sensor2) ?? (tilt && tilt !== "none" ? "contact_tilt" : "contact");
      const setContact = (v: string | null) => this.updateOpening(main ? { contact: v } : { contact2: v === "none" ? null : v });
      return html`<label class="nf-field nf-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!admin}
            @change=${(e: Event) => {
              const next = (e.target as HTMLSelectElement).value as Kind;
              const clearTilt = next === "contact_tilt" ? {} : main ? { tilt: null } : { tilt2: null };
              this.updateOpening({ ...(main ? { sensor: next } : { sensor2: next }), ...clearTilt });
            }}
          >
            ${(["contact", "handle", "contact_tilt"] as const).map((k) => html`<option value=${k} ?selected=${k === kind}>${this.t(`sensor_kind_${k}`)}</option>`)}
          </select></label
        >
        ${kind === "handle"
          ? this.entitySelect(this.t("handle_entity"), contact, undefined, handles, (v) => setContact(v === "none" ? (main ? "none" : null) : v))
          : this.entitySelect(this.t("contact_entity"), contact, main ? autoPick("contact") : undefined, plainContacts, setContact)}
        ${kind === "contact_tilt"
          ? this.entitySelect(this.t("tilt_entity"), tilt, undefined, contacts, (v) => this.updateOpening(main ? { tilt: v === "none" ? null : v } : { tilt2: v === "none" ? null : v }))
          : nothing}
        ${main
          ? html`${this.entitySelect(this.t("tilt_angle_entity"), o.tilt_angle ?? null, undefined, this.entityOptions((id) => numberish(id)), (v) => this.updateOpening({ tilt_angle: v === "none" ? null : v }))}
            ${o.tilt_angle && o.tilt_angle !== "none"
              ? html`${this.num(this.t("tilt_angle_max"), o.tilt_max ?? 15, (v) => this.updateOpening({ tilt_max: Math.min(90, Math.max(1, v)) }), 1, 1)}
                ${this.num(this.t("tilt_angle_offset"), o.tilt_offset ?? 0, (v) => this.updateOpening({ tilt_offset: v }), 0.5)}
                <label class="nf-check nf-wide"
                  ><input type="checkbox" .checked=${!!o.tilt_invert} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ tilt_invert: (ev.target as HTMLInputElement).checked })} />
                  ${this.t("tilt_angle_invert")}</label
                >`
              : nothing}`
          : nothing}`;
    };
    const preset = openingPreset(o);
    const door = o.type === "door";
    return html`<section>
      <div class="nf-h3row"><h3>${this.t(`preset_${preset}` as I18nKey)}</h3>${this.fixButton("opening", o.id)}</div>
      ${admin
        ? html`<div class="nf-presets" role="group" aria-label=${this.t("opening_type")}>
            ${(Object.keys(OPENING_PRESETS) as OpeningPreset[]).map(
              (p) => html`<button class="nf-chip" aria-pressed=${p === preset} @click=${() => this.setOpeningPreset(o, p)}>${this.t(`preset_${p}` as I18nKey)}</button>`,
            )}
          </div>`
        : nothing}
      ${admin && !garage
        ? html`<div class="nf-actions">
            <button class="nf-btn" title=${this.t("flip_hinge_hint")} @click=${() => this.updateOpening({ hinge: o.hinge === "left" ? "right" : "left" })}>
              ⇆ ${this.t(o.leaves === 2 ? "flip_main_leaf" : "flip_hinge")}
            </button>
            ${door
              ? html`<button class="nf-btn" title=${this.t("flip_swing_hint")} @click=${() => this.updateOpening({ swing: o.swing === "out" ? "in" : "out" })}>
                  ⇅ ${this.t("flip_swing")}
                </button>`
              : nothing}
          </div>`
        : nothing}
      <div class="nf-form">
        ${this.num(this.t("width"), o.width, (v) => this.updateOpening({ width: Math.max(0.3, v) }), 0.01, 0.3)}
        ${this.num(this.t("opening_position"), o.offset, (v) => this.updateOpening({ offset: Math.max(0, v) }), 0.01, 0)}
        ${window ? this.num(this.t("sill"), o.sill, (v) => this.updateOpening({ sill: Math.max(0, v) }), 0.01, 0) : nothing}
        ${this.num(this.t("opening_height"), o.height, (v) => this.updateOpening({ height: Math.max(0.3, v) }), 0.01, 0.3)}
        ${garage ? nothing : this.renderStyleSelect(o)}
        ${this.renderSidelightFields(o)}
        <label class="nf-field nf-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${(e: Event) => this.updateOpening({ mark: (e.target as HTMLSelectElement).value === "closed" ? "closed" : null })}>
            <option value="" ?selected=${o.mark !== "closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${o.mark === "closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${garage
          ? nothing
          : html`<label class="nf-field nf-wide"
          >${this.t(o.leaves === 2 ? "main_leaf" : "hinge")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateOpening({ hinge: (e.target as HTMLSelectElement).value as "left" | "right" })}>
            <option value="left" ?selected=${o.hinge === "left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${o.hinge === "right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${window || garage || door ? this.entitySelect(this.t(window ? "cover_entity" : "door_cover"), o.cover, autoPick("cover"), covers, (v) => this.updateOpening({ cover: v })) : nothing}
        ${(window || garage || door) && o.cover !== "none" && (o.cover || autoPick("cover"))
          ? html`${this.entitySelect(this.t("cover_position_entity"), o.position ?? null, undefined, positions, (v) => this.updateOpening({ position: v === "none" ? null : v }))}
              ${o.position
                ? html`<label class="nf-check nf-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!admin}
                      .checked=${!!o.position_inverted}
                      @change=${(ev: Event) => this.updateOpening({ position_inverted: (ev.target as HTMLInputElement).checked })}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`
                : nothing}
              <label class="nf-check nf-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!admin} .checked=${!!o.confirm} @change=${(ev: Event) => this.updateOpening({ confirm: (ev.target as HTMLInputElement).checked })} />
                ${this.t("device_confirm")}</label
              >`
          : nothing}
        ${window
          ? html`${o.leaves === 2 ? html`<h4 class="nf-lib-head nf-wide">${this.t("leaf_main")}</h4>` : nothing}
              ${leafSensors(1)} ${o.leaves === 2 ? html`<h4 class="nf-lib-head nf-wide">${this.t("leaf_second")}</h4>${leafSensors(2)}` : nothing}`
          : html`${this.entitySelect(this.t(o.leaves === 2 ? "contact_main" : "contact_entity"), o.contact, autoPick("contact"), contacts, (v) => this.updateOpening({ contact: v }))}
              ${o.leaves === 2 && !garage
                ? this.entitySelect(this.t("contact_second"), o.contact2, undefined, contacts, (v) => this.updateOpening({ contact2: v === "none" ? null : v }))
                : nothing}
              ${door
                ? html`<label class="nf-check nf-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!o.shut} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ shut: (ev.target as HTMLInputElement).checked })} />
                    ${this.t("door_shut")}</label
                  >`
                : nothing}`}
      </div>
      <p class="nf-sub">${this.t(window ? "opening_hint" : garage ? "garage_hint" : "door_hint")}</p>
      ${admin
        ? html`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${() => this.deleteOpening()}>${this.t("delete")}</button></div>`
        : nothing}
    </section>`;
  }

  private renderFurnitureForm(f: Furniture) {
    const admin = this.isAdmin;
    return html`<section>
      <div class="nf-h3row"><h3>${f.name || this.t("furniture")}</h3>${this.fixButton("furniture", f.id)}</div>
      <div class="nf-form">
        <label class="nf-field nf-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${f.name ?? ""} ?disabled=${!admin} placeholder=${this.t(`furn_${f.type}` as I18nKey) === `furn_${f.type}` ? "" : this.t(`furn_${f.type}` as I18nKey)} @change=${(e: Event) => this.updateFurniture({ name: (e.target as HTMLInputElement).value.trim() || null })} />
        </label>
        ${f.name
          ? html`<label class="nf-check nf-wide"
              ><input type="checkbox" .checked=${!!f.show_name} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ show_name: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("show_name")}</label
            >`
          : nothing}
        <label class="nf-field nf-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ type: (e.target as HTMLSelectElement).value })}>
            ${FURNITURE_TYPES.map((t) => html`<option value=${t} ?selected=${t === f.type}>${this.t(`furn_${t}` as I18nKey)}</option>`)}
            ${(this.packs ?? []).map(
              (pack) => html`<optgroup label=${packName(pack, (this.hass?.language ?? "de"))}>
                ${pack.items.map((it) => {
                  const t = packType(pack.id, it.id);
                  return html`<option value=${t} ?selected=${t === f.type}>${packItemName(it, this.hass?.language ?? "en")}</option>`;
                })}
              </optgroup>`,
            )}
            ${f.type.startsWith("pack:") && !(this.packs ?? []).some((p) => f.type.startsWith(`pack:${p.id}:`))
              ? html`<option value=${f.type} selected>${furnitureName(this.hass, f.type)}</option>`
              : nothing}
          </select></label
        >
        ${this.num(this.t("x"), f.x, (v) => this.updateFurniture({ x: v }))} ${this.num(this.t("z"), f.z, (v) => this.updateFurniture({ z: v }))}
        ${this.num(this.t("width"), f.w, (v) => this.updateFurniture({ w: Math.max(0.05, v) }), 0.01, 0.05)}
        ${this.num(this.t("depth"), f.d, (v) => this.updateFurniture({ d: Math.max(0.05, v) }), 0.01, 0.05)}
        ${this.num(this.t("height_m"), f.h, (v) => this.updateFurniture({ h: Math.max(0.005, v) }), 0.01, 0)}
        ${this.num(this.t("rotation"), f.rotation, (v) => this.updateFurniture({ rotation: ((v % 360) + 360) % 360 }), 1)}
        ${isLamp(f.type)
          ? nothing
          : html`<label class="nf-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!f.mirror} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ mirror: (ev.target as HTMLInputElement).checked })} />
              ${this.t("furn_mirror")}</label
            >`}
        ${f.type === "led_strip"
          ? html`${this.num(this.t("strip_tilt"), f.tilt ?? 0, (v) => this.updateFurniture({ tilt: Math.max(-90, Math.min(90, Math.round(v))) }), 5)}
              <label class="nf-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!f.upright} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ upright: (ev.target as HTMLInputElement).checked })} />
                ${this.t("strip_upright")}</label
              >`
          : nothing}
        ${canLift(f) && this.floor
          ? html`${this.num(this.t("mount_height"), f.mount_y ?? mountBase(this.floor, f), (v) => this.updateFurniture({ mount_y: Math.max(0, v) }), 0.01, 0)}
              ${f.mount_y != null ? html`<button class="nf-btn nf-field-btn" ?disabled=${!admin} @click=${() => this.updateFurniture({ mount_y: null })}>${this.t("height_auto")}</button>` : nothing}`
          : nothing}
      </div>
      ${f.type === "stairs" ? html`<p class="nf-sub">${this.t("stairs_hint")}</p>` : nothing}
      ${f.type === "stairwell"
        ? html`<p class="nf-sub">${this.t("stairwell_hint")}</p>
            ${this.floor && !this.floor.rooms.some((r) => r.points.length >= 3 && holeInRoom(furnitureFootprint(f), r.points))
              ? html`<p class="nf-sub nf-pack-error">${this.t("stairwell_outside")}</p>`
              : nothing}`
        : nothing}
      ${f.type === "inverter" || f.type === "home_battery"
        ? html`<div class="nf-form">
            <label class="nf-field nf-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ variant: (e.target as HTMLSelectElement).value || null })}>
                ${(f.type === "inverter" ? (["", "slim", "hybrid"] as const) : (["", "wall", "cube"] as const)).map(
                  (v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(`${f.type === "inverter" ? "inverter" : "battery"}_${v || "std"}` as I18nKey)}</option>`,
                )}
              </select></label
            >
          </div>`
        : nothing}
      ${f.type === "lamp_pendant"
        ? html`<div class="nf-form">
            <label class="nf-field nf-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ variant: (e.target as HTMLSelectElement).value || null })}>
                ${(["", "globe", "cone", "drum"] as const).map(
                  (v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(`pendant_${v || "shade"}` as I18nKey)}</option>`,
                )}
              </select></label
            >
          </div>`
        : nothing}
      ${(() => {
        // a car's paint: pick one of the colours the pack offers (kept as the furniture's variant)
        const colors = packItem(f.type === "parking" ? (f.vehicle ?? "") : f.type)?.colors;
        if (!colors?.length) return nothing;
        const current = colors.find((c) => c.id === f.variant) ?? colors[0];
        const label = (c: (typeof colors)[number]) => c.name[this.hass?.language ?? "en"] ?? c.name.en ?? Object.values(c.name)[0];
        return html`<div class="nf-form">
          <div class="nf-field nf-wide">
            <span>${this.t("paint_colour")}: ${label(current)}</span>
            <div class="nf-swatches" role="radiogroup" aria-label=${this.t("paint_colour")}>
              ${colors.map(
                (c, i) => html`<button type="button" class="nf-swatch" role="radio" aria-checked=${c.id === current.id} title=${label(c)} style=${`--sw:${c.hex}`} ?disabled=${!admin} @click=${() => this.updateFurniture({ variant: i === 0 ? null : c.id })}></button>`,
              )}
            </div>
          </div>
        </div>`;
      })()}
      ${isElectric(f.type) ? this.renderFurnitureLinks(f) : !NO_STATE_TYPES.has(f.type) ? html`<div class="nf-form nf-links">${this.renderStateLinks(f)}</div>` : nothing} ${f.type === "parking" ? this.renderParkingForm(f) : nothing}
      ${f.type.startsWith("pack:nextfloor.fahrzeuge:") && this.isAdmin
        ? html`<section>
            <p class="nf-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="nf-actions"><button class="nf-btn nf-primary" @click=${() => this.vehicleToSpot(f)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`
        : nothing}
      ${admin
        ? html`<div class="nf-actions">
            <button class="nf-btn" @click=${() => this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="nf-btn" @click=${() => this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            ${f.entity && f.entity !== "none" && f.type !== "parking" ? html`<button class="nf-btn" title=${this.t("as_device_hint")} @click=${() => this.furnitureToDevice(f)}>${this.t("as_device")}</button>` : nothing}
            <button class="nf-btn" @click=${() => this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="nf-btn nf-danger" @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`
        : nothing}
    </section>`;
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

  /** "State from": an entity lights the item's top (two light its halves) – any furniture, a bed with occupancy mats too (#116). */
  private renderStateLinks(f: Furniture) {
    return html`${this.entitySelect(this.t("furn_state_entity"), f.state_entity ?? null, undefined, this.entityOptions((id) => /^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(id)), (v) => this.updateFurniture({ state_entity: v === "none" ? null : v }))}
              ${f.state_entity && f.state_entity !== "none"
                ? html`${this.entitySelect(this.t("furn_state_entity2"), f.state_entity2 ?? null, undefined, this.entityOptions((id) => /^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(id)), (v) => this.updateFurniture({ state_entity2: v === "none" ? null : v }))}
                    ${f.state_entity2 && f.state_entity2 !== "none"
                      ? html`<label class="nf-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${(e: Event) => this.updateFurniture({ state_split: (e.target as HTMLSelectElement).value === "top_bottom" ? "top_bottom" : "left_right" })}>
                            <option value="left_right" ?selected=${f.state_split !== "top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${f.state_split === "top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`
                      : nothing}`
                : nothing}
              <p class="nf-sub nf-wide">${this.t("furn_state_hint")}</p>`;
  }

  private renderFurnitureLinks(f: Furniture) {
    if (!this.hass) return nothing;
    const hass = this.hass;
    // what "automatic" would choose: resolve with this item's own links cleared
    const autoPick = (key: "entity" | "power") => {
      const probe = structuredClone(this._doc.floors);
      for (const fl of probe) for (const x of fl.furniture) if (x.id === f.id) x[key] = null;
      return furnitureEntities(hass, probe).get(f.id)?.[key] ?? null;
    };
    const media = isMediaFurniture(f.type);
    // a pack item with only a status light (a 3D printer's panel, a wallbox's LED) links like any device:
    // "Device", with media players, switches and status sensors to choose from
    const tvLike = media && (!isPackType(f.type) || packDisplay(f.type));
    const lamp = isLamp(f.type);
    const entities = this.entityOptions((id) =>
      lamp
        ? // a lamp can follow a light or a plain switch (e.g. a relay that switches the ceiling light)
          /^(light|switch|input_boolean)\./.test(id)
        : tvLike
          ? // a media player, or the smart plug an older TV is switched with
            /^(media_player|switch|input_boolean|light)\./.test(id)
          : f.type === "radiator"
            ? id.startsWith("climate.")
            : f.type === "robot_vacuum"
              ? id.startsWith("vacuum.")
              : // or a status sensor (a 3D printer's print status: running, idle, finish …)
                // (a robot vacuum from a pack, e.g. the one with its dock, follows its vacuum entity; a motorised
                // curtain its cover, #286)
                /^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(id) || isStatusSensor(hass.states[id]),
    );
    const power = this.entityOptions((id) => this.isPowerSensor(id));
    const doorSensors = f.type === "fridge_smart" ? this.entityOptions((id) => id.startsWith("binary_sensor.")) : [];
    return html`<div class="nf-form nf-links">
        ${f.type === "grid_point"
          ? html`<p class="nf-sub nf-wide">${this.t("grid_point_hint")}</p>`
          : this.entitySelect(this.t(lamp ? "furn_entity_light" : tvLike ? "furn_entity_tv" : f.type === "radiator" ? "furn_entity_climate" : f.type === "robot_vacuum" ? "furn_entity_vacuum" : "furn_entity"), f.entity ?? null, autoPick("entity"), entities, (v) =>
              this.updateFurniture({ entity: v }),
            )}
        ${!lamp && !(ENERGY_DEVICES as readonly string[]).includes(f.type) && !hasScreen(f.type) ? this.renderStateLinks(f) : nothing}
        ${lamp && f.entity && f.entity !== "none"
          ? html`${this.entitySelect(this.t("furn_color_entity"), f.color_entity ?? null, undefined, this.entityOptions((id) => id.startsWith("light.") && id !== f.entity), (v) => this.updateFurniture({ color_entity: v === "none" ? null : v }))}
              <p class="nf-sub nf-wide">${this.t("furn_color_entity_hint")}</p>`
          : nothing}
        ${lamp ? this.glowScaleField(f.glow_scale, (v) => this.updateFurniture({ glow_scale: v })) : nothing}
        ${lamp || f.type === "grid_point"
          ? nothing
          : this.entitySelect(
              this.t(f.type === "meter" ? "energy_grid" : f.type === "inverter" ? "energy_solar_sensor" : f.type === "home_battery" ? "energy_battery_sensor" : "furn_power"),
              f.power ?? null,
              autoPick("power"),
              power,
              (v) => this.updateFurniture({ power: v }),
            )}

      </div>
      ${f.type === "meter"
        ? html`<div class="nf-form nf-links">
            ${this.entitySelect(this.t("furn_export"), f.export ?? null, undefined, power, (v) => this.updateFurniture({ export: v === "none" ? null : v }))}
            <p class="nf-sub nf-wide">${this.t("furn_export_hint")}</p>
          </div>`
        : nothing}
      ${f.type === "inverter" && (this._doc.settings.roof.solar ?? []).length
        ? (() => {
            // which strings feed this inverter, so it can be told apart from the others (#213)
            const strings = (this._doc.settings.roof.strings ?? []).filter((st) => st.inverter === f.id).map((st) => st.name);
            return html`<p class="nf-sub nf-wide">${strings.length ? this.t("inverter_strings", { names: strings.join(", ") }) : this.t("inverter_strings_none")}</p>`;
          })()
        : nothing}
      ${f.type === "home_battery"
        ? html`<div class="nf-form nf-links">
            ${this.entitySelect(
              this.t("furn_soc"),
              f.soc ?? null,
              undefined,
              this.entityOptions((id) => numberish(id) && (hass.states[id]?.attributes.device_class === "battery" || hass.states[id]?.attributes.unit_of_measurement === "%")),
              (v) => this.updateFurniture({ soc: v === "none" ? null : v }),
            )}
            ${this.entitySelect(this.t("furn_charge"), f.charge ?? null, undefined, power, (v) => this.updateFurniture({ charge: v === "none" ? null : v }))}
            <p class="nf-sub nf-wide">${this.t("furn_charge_hint")}</p>
          </div>`
        : nothing}
      ${f.type === "wallbox"
        ? html`<div class="nf-form nf-links">
            ${this.entitySelect(
              this.t("furn_wallbox_status"),
              f.status ?? null,
              undefined,
              this.entityOptions((id) => binaryish(id) || numberish(id)),
              (v) => this.updateFurniture({ status: v === "none" ? null : v }),
            )}
          </div>`
        : nothing}
      ${!lamp || f.entity
        ? html`<label class="nf-check nf-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!f.confirm} ?disabled=${!this.isAdmin} @change=${(ev: Event) => this.updateFurniture({ confirm: (ev.target as HTMLInputElement).checked })} />
            ${this.t("device_confirm")}</label
          >
          <div class="nf-form">${this.markerSelect(f.marker ?? null, (v) => this.updateFurniture({ marker: v }))}${this.iconInput(f.icon, (v) => this.updateFurniture({ icon: v }))}</div>`
        : nothing}
      ${f.type === "robot_vacuum"
        ? html`<div class="nf-form nf-links">
            ${this.entitySelect(
              this.t("furn_robot_room"),
              f.room_sensor ?? null,
              robotRoomSensor(hass, furnitureEntities(hass, this._doc.floors).get(f.id)?.entity ?? null, null),
              this.entityOptions((id) => numberish(id)),
              (v) => this.updateFurniture({ room_sensor: v }),
            )}
          </div>`
        : nothing}
      ${f.type === "fridge_smart"
        ? html`<div class="nf-form nf-links">
              ${this.entitySelect(this.t("furn_door_left"), f.door_left ?? null, undefined, doorSensors, (v) => this.updateFurniture({ door_left: v }))}
              ${this.entitySelect(this.t("furn_door_right"), f.door_right ?? null, undefined, doorSensors, (v) => this.updateFurniture({ door_right: v }))}
            </div>
            <p class="nf-sub">${this.t("fridge_hint")}</p>`
        : nothing}
      <p class="nf-sub">${this.t(lamp ? (f.type === "lamp_pendant" ? "lamp_hint_pendant" : "lamp_hint") : media ? "furn_links_hint_tv" : f.type === "robot_vacuum" ? "robot_hint" : "furn_links_hint")}</p>`;
  }

  /** Parking spot: presence sensor, the vehicle shown, its size, and an optional vehicle type sensor. */
  private renderParkingForm(f: Furniture) {
    const admin = this.isAdmin;
    const lang = this.hass?.language ?? "en";
    const vehicles = (this.packs ?? []).flatMap((p) => p.items.filter((it) => it.vehicle).map((it) => ({ id: packType(p.id, it.id), label: `${packItemName(it, lang)} · ${packName(p, lang)}` })));
    // presence: GPS trackers (a car's own integration, a phone) before the many network trackers of a router (#227)
    const rank = (id: string) => {
      if (!id.startsWith("device_tracker.")) return 1;
      return this.hass?.states[id]?.attributes.source_type === "router" ? 2 : 0;
    };
    const presence = this.entityOptions((id) => /^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(id)).sort((a, b) => rank(a.id) - rank(b.id));
    const typeSensors = this.entityOptions((id) => /^(sensor|input_select|select|input_text)\./.test(id));
    const typeState = f.type_entity ? this.hass?.states[f.type_entity] : undefined;
    const options = Array.isArray(typeState?.attributes.options) ? (typeState.attributes.options as string[]) : [];
    const types = f.types ?? [];
    const setTypes = (next: { state: string; vehicle: string }[]) => this.updateFurniture({ types: next });
    const vehicleSelect = (value: string | null, onChange: (v: string | null) => void) =>
      html`<select ?disabled=${!admin} @change=${(e: Event) => onChange((e.target as HTMLSelectElement).value || null)}>
        <option value="" ?selected=${!value}>${this.t("parking_vehicle_none")}</option>
        ${vehicles.map((v) => html`<option value=${v.id} ?selected=${v.id === value}>${v.label}</option>`)}
      </select>`;
    // the room's height against the vehicle's: a hint when it would not fit
    const floor = this.floor;
    const room = floor?.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
    const item = f.vehicle ? packItem(f.vehicle) : undefined;
    const carH = item ? item.size[2] * (f.scale ?? 1) : 0;
    const tooTall = !!room && !!floor && carH > floor.height + 1e-6;
    return html`<div class="nf-form nf-links">
        ${this.entitySelect(this.t("parking_entity"), f.entity ?? null, undefined, presence, (v) => this.updateFurniture({ entity: v === "none" ? null : v }))}
        <label class="nf-field nf-wide">${this.t("parking_vehicle")} ${vehicleSelect(f.vehicle ?? null, (v) => this.updateFurniture({ vehicle: v }))}</label>
        ${vehicles.length ? nothing : html`<p class="nf-sub nf-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"), Math.round((f.scale ?? 1) * 100), (v) => this.updateFurniture({ scale: Math.min(150, Math.max(30, v)) / 100 }), 5, 30)}
        ${this.entitySelect(this.t("parking_type_entity"), f.type_entity ?? null, undefined, typeSensors, (v) => this.updateFurniture({ type_entity: v === "none" ? null : v }))}
        ${f.type_entity
          ? html`<div class="nf-wide">
              <div class="nf-sub">${this.t("parking_types")}</div>
              ${types.map(
                (t, i) => html`<div class="nf-parking-row">
                  <input
                    type="text"
                    list="nf-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${t.state}
                    ?disabled=${!admin}
                    @change=${(e: Event) => setTypes(types.map((x, j) => (j === i ? { ...x, state: (e.target as HTMLInputElement).value } : x)))}
                  />
                  ${vehicleSelect(t.vehicle, (v) => setTypes(types.map((x, j) => (j === i ? { ...x, vehicle: v ?? "" } : x))))}
                  <button class="nf-btn" ?disabled=${!admin} title=${this.t("delete")} @click=${() => setTypes(types.filter((_, j) => j !== i))}>✕</button>
                </div>`,
              )}
              <datalist id="nf-parking-states">${options.map((o) => html`<option value=${o}></option>`)}</datalist>
              ${admin
                ? html`<button class="nf-btn" @click=${() => setTypes([...types, { state: options[types.length] ?? "", vehicle: vehicles[0]?.id ?? "" }])}>${this.t("parking_add_type")}</button>`
                : nothing}
            </div>`
          : nothing}
      </div>
      ${tooTall ? html`<p class="nf-sub nf-warn">${this.t("parking_too_tall", { car: formatNumber(this.hass, carH, 2), room: formatNumber(this.hass, floor!.height, 2) })}</p>` : nothing}
      <p class="nf-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(f)}`;
  }

  private toggleLibrary(key: string): void {
    const next = new Set(this._libOpen);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    this._libOpen = next;
    try {
      localStorage.setItem("nextfloor.library", JSON.stringify([...next]));
    } catch {
      // no storage
    }
  }

  /** A section of the library: folded away unless open (or while a search shows its hits). */
  private librarySection(key: string, title: string, items: { type: string; label: string; search?: string }[], q: string) {
    // every word of the query somewhere in the item's names, its id or its section's title (D155)
    const words = fold(q).split(/\s+/).filter(Boolean);
    const hits = words.length ? items.filter((it) => {
      const hay = fold(`${it.label} ${it.search ?? ""} ${it.type.replace(/[_:.]/g, " ")} ${title}`);
      return words.every((w) => hay.includes(w));
    }) : items;
    if (q && !hits.length) return nothing;
    const open = q ? true : this._libOpen.has(key);
    return html`<button class="nf-lib-head nf-lib-toggle" aria-expanded=${open} @click=${() => this.toggleLibrary(key)}>
        <span class="nf-lib-caret">${open ? "▾" : "▸"}</span>${title} <span class="nf-lib-count">${hits.length}</span>
      </button>
      ${open ? html`<div class="nf-library">${hits.map((it) => this.libraryButton(it.type, it.label))}</div>` : nothing}`;
  }

  /** Whether the furniture library has any item for the query (else a "nothing found" line shows). */
  private libraryHasHits(q: string): boolean {
    const words = fold(q).split(/\s+/).filter(Boolean);
    const lang = this.hass?.language ?? "en";
    const all: string[] = [
      ...Object.entries(FURNITURE_GROUPS).flatMap(([g, types]) => types.map((t) => `${this.t(`furn_${t}` as I18nKey)} ${translate(EN_HASS, `furn_${t}` as I18nKey)} ${t.replace(/_/g, " ")} ${this.t(`furn_group_${g}` as I18nKey)}`)),
      ...(this.packs ?? []).flatMap((p) => p.items.map((it) => `${packItemName(it, lang)} ${Object.values(it.name).join(" ")} ${it.id.replace(/_/g, " ")} ${p.name} ${packName(p, "en")}`)),
    ];
    return all.some((s) => {
      const hay = fold(s);
      return words.every((w) => hay.includes(w));
    });
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

  private renderFurnitureLibrary() {
    const room = this.room;
    const q = this._furnQuery.trim().toLowerCase();
    const lang = this.hass?.language ?? "en";
    return html`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="nf-sub">${room ? this.t("furniture_into", { room: room.name }) : this.t("furniture_pick_room")}</p>
      <input
        class="nf-search"
        type="search"
        placeholder=${this.t("furniture_search")}
        .value=${this._furnQuery}
        @input=${(e: Event) => (this._furnQuery = (e.target as HTMLInputElement).value)}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === "Escape") this._furnQuery = "";
        }}
      />
      ${q && !this.libraryHasHits(q) ? html`<p class="nf-sub">${this.t("furniture_search_none")}</p>` : nothing}
      ${Object.entries(FURNITURE_GROUPS).map(([group, types]) =>
        this.librarySection(
          `group:${group}`,
          this.t(`furn_group_${group}` as I18nKey),
          types.map((t) => ({ type: t, label: this.t(`furn_${t}` as I18nKey), search: translate(EN_HASS, `furn_${t}` as I18nKey) })),
          q,
        ),
      )}
      ${(this.packs ?? []).map((pack) =>
        this.librarySection(
          `pack:${pack.id}`,
          packName(pack, lang),
          pack.items.map((it) => ({ type: packType(pack.id, it.id), label: packItemName(it, lang), search: Object.values(it.name).join(" ") })),
          q,
        ),
      )}
    </section>
    <div class="nf-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="nf-sub">${this.t("ext_teaser_text")}</span>
      <button class="nf-btn nf-primary" @click=${() => this.dispatchEvent(new CustomEvent("open-extensions", { bubbles: true, composed: true }))}>${this.t("ext_open")}</button>
    </div>`;
  }

  private libraryButton(type: string, label: string) {
    const show = (e: Event) => void this.showPreview(type, e.currentTarget as HTMLElement);
    // a lamp can be switched from 3D, another electric item takes an entity and a power sensor
    const badge = isLamp(type) ? "light" : isElectric(type) ? "switch" : null;
    return html`<button
      class="nf-btn ${badge ? "nf-lib-electric" : ""}"
      title=${badge ? this.t(badge === "light" ? "lib_badge_light" : "lib_badge_electric") : label}
      @click=${() => this.addFurniture(type)}
      @mouseenter=${show}
      @focus=${show}
      @mouseleave=${() => (this._preview = null)}
      @blur=${() => (this._preview = null)}
    >
      ${label}
      ${badge
        ? html`<svg class="nf-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${iconPath(badge)} />
          </svg>`
        : nothing}
    </button>`;
  }

  /** Picture of an item, drawn by the 3D bundle and shown left of its button. */
  private async showPreview(type: string, button: HTMLElement): Promise<void> {
    const r = button.getBoundingClientRect();
    const place = { left: Math.max(8, r.left - 196), top: Math.max(8, Math.min(window.innerHeight - 200, r.top + r.height / 2 - 95)) };
    this._preview = { type, url: null, ...place };
    try {
      const mod = await load3d();
      const [w, d, h] = furnitureSize(type);
      const url = mod.furniturePreview({ type, w, d, h, variant: null, lamp: LAMP_MODEL[type] ?? null }, 180, this.packs ?? []);
      if (this._preview?.type === type) this._preview = { type, url, ...place };
    } catch {
      this._preview = null;
    }
  }

  private renderPreview() {
    const p = this._preview;
    if (!p) return nothing;
    return html`<div class="nf-preview" style="left:${p.left}px;top:${p.top}px" aria-hidden="true">
      ${p.url ? html`<img src=${p.url} alt="" />` : html`<span class="nf-preview-wait"></span>`}
      <b>${furnitureName(this.hass, p.type)}</b>
    </div>`;
  }

  private renderDeviceForm(pl: Placement) {
    const admin = this.isAdmin;
    const kind = kindOf(pl.entity_id);
    const light = kind === "light";
    const mount = pl.mount ?? "ceiling";
    const auto = kind ? defaultHeight(kind, this.floor?.height ?? 2.5, light ? mount : null) : 1;
    return html`<section>
      <div class="nf-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device", pl.entity_id)}</div>
      <p class="nf-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${kind ? iconPath(kind) : ""} />
        </svg>
        ${entityName(this.hass, pl.entity_id)}
      </p>
      <div class="nf-form">
        ${light
          ? html`<label class="nf-field nf-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateDevice({ mount: (e.target as HTMLSelectElement).value as LampMount, y: null })}>
                ${(["ceiling", "floor", "table", "wall"] as const).map((m) => html`<option value=${m} ?selected=${m === mount}>${this.t(`lamp_${m}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(pl.glow_scale, (v) => this.updateDevice({ glow_scale: v }))}`
          : kind === "camera"
            ? html`<label class="nf-field nf-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!admin} @change=${(e: Event) => this.updateDevice({ mount: (e.target as HTMLSelectElement).value as LampMount, y: null })}>
                  <option value="wall" ?selected=${(pl.mount ?? "wall") === "wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${pl.mount === "ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`
            : nothing}
        ${this.num(this.t("x"), pl.x, (v) => this.updateDevice({ x: v }))} ${this.num(this.t("z"), pl.z, (v) => this.updateDevice({ z: v }))}
        ${this.num(this.t("marker_height"), pl.y ?? auto, (v) => this.updateDevice({ y: Math.max(0, v) }), 0.05, 0)}
        ${this.num(this.t("rotation"), pl.rotation ?? 0, (v) => this.updateDevice({ rotation: ((v % 360) + 360) % 360 }), 1)}
        ${kind === "camera"
          ? html`${this.num(this.t("camera_fov"), pl.fov ?? (pl.mount === "ceiling" ? 360 : 90), (v) => this.updateDevice({ fov: Math.min(360, Math.max(10, v)) }), 5, 10)}
            ${this.num(this.t("camera_reach"), pl.reach ?? (pl.mount === "ceiling" ? 3 : 4.5), (v) => this.updateDevice({ reach: Math.min(50, Math.max(0.5, v)) }), 0.5, 0.5)}
            ${this.num(this.t("camera_tilt"), pl.tilt ?? (pl.mount === "ceiling" ? 65 : 20), (v) => this.updateDevice({ tilt: Math.min(90, Math.max(0, v)) }), 5, 0)}
            <label class="nf-check nf-wide"
              ><input type="checkbox" .checked=${pl.cone !== false} ?disabled=${!admin} @change=${(ev: Event) => this.updateDevice({ cone: (ev.target as HTMLInputElement).checked ? null : false })} />
              ${this.t("camera_cone")}</label
            >
            <p class="nf-sub nf-wide">${this.t("camera_aim_hint")}</p>
            ${this.renderCameraDetections(pl.entity_id)}`
          : nothing}
        ${kind && TOGGLE_KINDS.has(kind)
          ? html`<label class="nf-check nf-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!pl.confirm} ?disabled=${!admin} @change=${(ev: Event) => this.updateDevice({ confirm: (ev.target as HTMLInputElement).checked })} />
              ${this.t("device_confirm")}</label
            >`
          : nothing}

        ${this.markerSelect(pl.marker ?? null, (v) => this.updateDevice({ marker: v }))}
        <label class="nf-field nf-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${pl.name ?? ""} ?disabled=${!admin} maxlength="60" placeholder=${entityName(this.hass!, pl.entity_id)} @change=${(e: Event) => this.updateDevice({ name: (e.target as HTMLInputElement).value.trim() || null })}
        /></label>
        ${pl.name
          ? html`<label class="nf-check nf-wide"
              ><input type="checkbox" .checked=${!!pl.show_name} ?disabled=${!admin} @change=${(ev: Event) => this.updateDevice({ show_name: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("show_name")}</label
            >`
          : nothing}
        ${this.iconInput(pl.icon, (v) => this.updateDevice({ icon: v }))}
      </div>
      ${admin
        ? html`<div class="nf-actions">
            <button class="nf-btn" @click=${() => this.centreDevice()}>${this.t("device_centre")}</button>
            ${pl.y !== null ? html`<button class="nf-btn" @click=${() => this.updateDevice({ y: null })}>${this.t("height_auto")}</button>` : nothing}
            ${this.renderAsFurniture(pl)}
            <button
              class="nf-btn nf-danger"
              @click=${() => {
                this.removeDevice(pl.entity_id);
                this._deviceId = null;
              }}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`
        : nothing}
    </section>`;
  }

  private renderDeviceList(room: Room) {
    const admin = this.isAdmin;
    const hass = this.hass;
    const areaName = room.area_id ? hass?.areas?.[room.area_id]?.name : undefined;
    const ids = hass ? areaEntities(hass, room.area_id).filter((id) => isPlaceable(kindOf(id))) : [];
    // placed as a device, or as a lamp with this light
    const placedHere = new Set([
      ...(this.floor?.placements.filter((pl) => pointInPolygon([pl.x, pl.z], room.points)).map((pl) => pl.entity_id) ?? []),
      ...(this.floor?.furniture.filter((m) => isLamp(m.type) && m.entity && pointInPolygon([m.x, m.z], room.points)).map((m) => m.entity!) ?? []),
    ]);
    const groups = hass ? groupByDevice(hass, ids) : [];
    // the automatic placement only takes each device's main entity
    const unplacedMain = groups.map((g) => g.primary).filter((id) => !placedHere.has(id));
    const q = this._deviceQuery.trim().toLowerCase();
    const matches = (id: string) => !q || entityName(hass, id, areaName).toLowerCase().includes(q) || id.includes(q);
    const ceilingLights = this.floor?.placements.filter(
      (p) => kindOf(p.entity_id) === "light" && (p.mount ?? "ceiling") === "ceiling" && pointInPolygon([p.x, p.z], room.points),
    ).length;
    const pinned = new Set(room.panel ?? []);
    const hidden = new Set(room.hidden ?? []);
    const noState = new Set(room.no_state ?? []);
    // where an entity from elsewhere is placed already (placing it here moves it)
    const placedIn = new Map<string, string>();
    for (const f of this._doc.floors)
      for (const id of [...f.placements.map((p) => [p.entity_id, p.x, p.z] as const), ...f.furniture.filter((m) => isLamp(m.type) && m.entity).map((m) => [m.entity!, m.x, m.z] as const)]) {
        const r = f.rooms.find((x) => pointInPolygon([id[1], id[2]], x.points));
        if (r && r.id !== room.id) placedIn.set(id[0], r.name);
      }
    const row = (id: string, extra = false, nameArea = areaName) => {
      const placed = placedHere.has(id);
      const elsewhere = placed ? undefined : placedIn.get(id);
      return html`<div class="nf-row nf-dev-row ${extra ? "nf-dev-extra" : ""} ${hidden.has(id) ? "nf-dev-hidden" : ""}">
        <button class="nf-dev-name ${placed ? "" : "nf-muted"}" ?disabled=${!placed} @click=${() => this.selectItem("device", id)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${iconPath(kindOf(id)!)} />
          </svg>
          <span>${entityName(hass, id, nameArea)}${elsewhere ? html`<small class="nf-muted"> · ${this.t("devices_placed_in", { room: elsewhere })}</small>` : nothing}</span>
        </button>
        ${admin && !extra
          ? html`<button
              class="nf-pin ${hidden.has(id) ? "nf-pin-on" : ""}"
              aria-pressed=${hidden.has(id)}
              title=${this.t(hidden.has(id) ? "panel_unhide" : "panel_hide")}
              @click=${() => this.updateRoom({ hidden: hidden.has(id) ? [...hidden].filter((x) => x !== id) : [...hidden, id] })}
            >
              ${hidden.has(id) ? "🙈" : "👁"}
            </button>`
          : nothing}
        ${admin && !extra && !hidden.has(id)
          ? html`<button
              class="nf-pin ${noState.has(id) ? "nf-pin-on" : ""}"
              aria-pressed=${noState.has(id)}
              title=${this.t(noState.has(id) ? "panel_state_show" : "panel_state_hide")}
              @click=${() => this.updateRoom({ no_state: noState.has(id) ? [...noState].filter((x) => x !== id) : [...noState, id] })}
            >
              ${noState.has(id) ? "∅" : "Aa"}
            </button>`
          : nothing}
        ${admin && !placed
          ? html`<button
              class="nf-pin ${pinned.has(id) ? "nf-pin-on" : ""}"
              aria-pressed=${pinned.has(id)}
              title=${this.t(pinned.has(id) ? "panel_unpin" : "panel_pin")}
              @click=${() => this.updateRoom({ panel: pinned.has(id) ? [...pinned].filter((x) => x !== id) : [...pinned, id] })}
            >
              ${pinned.has(id) ? "★" : "☆"}
            </button>`
          : nothing}
        ${admin
          ? placed
            ? html`<button class="nf-link" @click=${() => this.removeDevice(id)}>${this.t("devices_remove")}</button>`
            : html`<button class="nf-link" @click=${() => this.placeDevices([id])}>${this.t("devices_place")}</button>`
          : nothing}
      </div>`;
    };
    const source = admin ? this._devSource : "area";
    const setSource = (v: "area" | "other" | "none") => {
      this._devSource = v;
      this._deviceQuery = "";
    };
    const searchField = html`<input
      class="nf-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${(e: Event) => (this._deviceQuery = (e.target as HTMLInputElement).value)}
    />`;
    const placeAll = () => {
      if (confirm(this.t("devices_place_all_confirm", { n: unplacedMain.length }))) this.placeDevices(unplacedMain);
    };
    return html`<section>
      <h3>${this.t("devices")}</h3>
      <p class="nf-sub">${this.t("devices_panel_hint")}</p>
      ${admin
        ? html`<div class="nf-seg nf-dev-source">
            <button aria-pressed=${source === "area"} @click=${() => setSource("area")}>${this.t("devices_src_area")}${ids.length ? ` (${groups.length})` : ""}</button>
            <button aria-pressed=${source === "other"} @click=${() => setSource("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${source === "none"} @click=${() => setSource("none")}>${this.t("devices_src_none")}</button>
          </div>`
        : nothing}
      ${source !== "area"
        ? html`${searchField}${this.renderDeviceExtras(room, row, source)}`
        : !room.area_id
        ? html`<p class="nf-sub">${this.t("devices_none_area")}</p>`
        : !ids.length
          ? html`<p class="nf-sub">${this.t("devices_none")}</p>`
          : html`${admin && (ceilingLights ?? 0) >= 2
                ? html`<button class="nf-btn nf-wide-btn" @click=${() => this.spreadCeilingLights(room)}>${this.t("lights_spread")}</button>`
                : nothing}
              ${ids.length > 8 ? searchField : nothing}
              <div class="nf-room-list">
                ${groups.map((g) => {
                  const others = g.others.filter(matches);
                  const open = this._expanded.has(g.primary) || (!!q && others.length > 0);
                  if (!matches(g.primary) && !others.length) return nothing;
                  return html`${row(g.primary)}
                  ${g.others.length
                    ? html`<button
                        class="nf-more"
                        @click=${() => {
                          const next = new Set(this._expanded);
                          if (next.has(g.primary)) next.delete(g.primary);
                          else next.add(g.primary);
                          this._expanded = next;
                        }}
                      >
                        ${open ? this.t("devices_less") : this.t("devices_more", { n: g.others.length })}
                      </button>`
                    : nothing}
                  ${open ? (q ? others : g.others).map((id) => row(id, true)) : nothing}`;
                })}
              </div>
              ${admin && unplacedMain.length > 1
                ? html`<button class="nf-link nf-place-all" @click=${placeAll}>${this.t("devices_place_all_n", { n: unplacedMain.length })}</button>`
                : nothing}
              <p class="nf-sub">${this.t("devices_hint")}</p>`}
    </section>`;
  }

  /** Devices from other areas or without an area, for the chosen source (computed only when shown). */
  private renderDeviceExtras(room: Room, row: (id: string, extra?: boolean, nameArea?: string) => unknown, source: "other" | "none") {
    const hass = this.hass;
    if (!hass) return nothing;
    const LIMIT = 50;
    const q = this._deviceQuery.trim().toLowerCase();
    const match = (id: string, area?: string) => !q || `${entityName(hass, id, area)} ${id} ${area ?? ""}`.toLowerCase().includes(q);
    const more = (n: number) => (n > 0 ? html`<p class="nf-sub">${this.t("devices_narrow", { n })}</p>` : nothing);
    if (source === "other") {
      let shown = 0;
      let hidden = 0;
      const blocks = otherAreaEntities(hass, room.area_id).map((a) => {
        const ids = a.ids.filter((id) => match(id, a.name));
        const take = ids.slice(0, Math.max(0, LIMIT - shown));
        shown += take.length;
        hidden += ids.length - take.length;
        return take.length ? html`<div class="nf-dev-area">${a.name}</div>${take.map((id) => row(id, false, a.name))}` : nothing;
      });
      return shown ? html`<div class="nf-room-list">${blocks}</div>${more(hidden)}` : html`<p class="nf-sub">${this.t("devices_none")}</p>`;
    }
    const ids = unassignedEntities(hass).filter((id) => match(id));
    return ids.length
      ? html`<div class="nf-room-list">${ids.slice(0, LIMIT).map((id) => row(id))}</div>${more(ids.length - Math.min(ids.length, LIMIT))}`
      : html`<p class="nf-sub">${this.t("devices_none")}</p>`;
  }

  /** Room climate: temperature, humidity and CO2 from chosen sensors, or picked automatically. */
  private renderRoomClimate(room: Room) {
    const hass = this.hass;
    if (!hass) return nothing;
    const set = (key: ClimateKey, v: string | null) => {
      const next = { ...(room.climate ?? {}), [key]: v };
      const empty = Object.values(next).every((x) => x == null);
      this.updateRoom({ climate: empty ? null : next });
    };
    const chosen = !!room.climate && Object.values(room.climate).some((x) => x != null);
    const field = (key: ClimateKey, label: string) => {
      const dc = CLIMATE_CLASSES[key];
      const auto = roomClimateSensors(hass, this.floor ?? null, { ...room, climate: null }, key);
      // the room's own sensors first, then all others; device temperatures (printer, heat pump) last
      const options = this.entityOptions((id) => numberish(id) && hass.states[id]?.attributes.device_class === dc)
        .map((o) => ({ ...o, rank: (entityAreaId(hass, o.id) === room.area_id ? 0 : 1) + (isRoomClimateSensor(hass, o.id) ? 0 : 2) }))
        .sort((a, b) => a.rank - b.rank)
        .map(({ id, label }) => ({ id, label }));
      return this.entitySelect(label, room.climate?.[key] ?? null, auto[0] ?? null, options, (v) => set(key, v));
    };
    return html`<details class="nf-points" ?open=${chosen}>
      <summary>${this.t("climate")}</summary>
      <div class="nf-form">
        ${field("temperature", this.t("climate_temperature"))} ${field("humidity", this.t("climate_humidity"))} ${field("co2", this.t("climate_co2"))}
      </div>
      <p class="nf-sub">${this.t("climate_hint")}</p>
    </details>`;
  }

  private renderBackgroundForm(floor: Floor) {
    const bg = floor.background;
    return html`<details class="nf-section" ?open=${this._bgOpen} @toggle=${(e: Event) => (this._bgOpen = (e.target as HTMLDetailsElement).open)}>
      <summary>${this.t("background")}</summary>
      <div class="nf-form">
        <label class="nf-btn nf-wide nf-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${bg
          ? html`${this.num(this.t("x"), bg.x, (v) => this.updateFloor({ background: { ...bg, x: v } }))}
              ${this.num(this.t("z"), bg.z, (v) => this.updateFloor({ background: { ...bg, z: v } }))}
              ${this.num(this.t("background_width"), bg.width, (v) => this.updateFloor({ background: { ...bg, width: Math.max(0.1, v) } }), 0.01, 0.1)}
              ${this.num(this.t("background_rotation"), bg.rotation ?? 0, (v) => this.updateFloor({ background: { ...bg, rotation: Math.round(v * 10) / 10 } }), 0.5)}
              ${this.isAdmin
                ? html`<button
                      class="nf-btn nf-wide ${this._bgEdit ? "nf-primary" : ""}"
                      aria-pressed=${this._bgEdit}
                      @click=${() => {
                        this._bgEdit = !this._bgEdit;
                        // the handles need the select tool
                        if (this._bgEdit) this._tool = "select";
                      }}
                    >
                      ${this.t(this._bgEdit ? "background_edit_done" : "background_edit")}
                    </button>
                    <p class="nf-sub nf-wide">${this.t(this._bgEdit ? "background_handles_hint" : "background_fixed_hint")}</p>
                  <button class="nf-btn nf-wide ${this._bgLevel ? "nf-primary" : ""}" aria-pressed=${!!this._bgLevel} @click=${() => {
                    this._bgLevel = this._bgLevel ? null : [];
                    this._bgRuler = null;
                    this._bgEdit = false;
                  }}>📐 ${this.t(this._bgLevel ? "bg_level_cancel" : "bg_level")}</button>
                  ${this._bgLevel ? html`<p class="nf-sub nf-wide">${this.t(this._bgLevel.length ? "bg_level_second" : "bg_level_first")}</p>` : nothing}
                  <button class="nf-btn nf-wide ${this._bgRuler ? "nf-primary" : ""}" aria-pressed=${!!this._bgRuler} @click=${() => {
                    this._bgRuler = this._bgRuler ? null : [];
                    this._bgLevel = null;
                    this._bgEdit = false;
                  }}>📏 ${this.t(this._bgRuler ? "bg_ruler_cancel" : "bg_ruler")}</button>
                  ${this._bgRuler
                    ? this._bgRuler.length < 2
                      ? html`<p class="nf-sub nf-wide">${this.t(this._bgRuler.length ? "bg_ruler_second" : "bg_ruler_first")}</p>`
                      : html`<p class="nf-sub nf-wide">${this.t("bg_ruler_length_hint", { m: formatNumber(this.hass, Math.hypot(this._bgRuler[1][0] - this._bgRuler[0][0], this._bgRuler[1][1] - this._bgRuler[0][1]), 2) })}</p>
                          <label class="nf-field"
                            >${this.t("bg_ruler_length")}
                            <input type="number" min="0.01" step="0.01" .value=${this._bgRulerLen ? String(this._bgRulerLen) : ""} @input=${(e: Event) => (this._bgRulerLen = Number((e.target as HTMLInputElement).value.replace(",", ".")) || 0)} @keydown=${(e: KeyboardEvent) => e.key === "Enter" && this.applyBgRuler(this._bgRulerLen)}
                          /></label>
                          <button class="nf-btn nf-primary" ?disabled=${!(this._bgRulerLen > 0)} @click=${() => this.applyBgRuler(this._bgRulerLen)}>${this.t("bg_ruler_apply")}</button>`
                    : nothing}`
                : nothing}
              <label class="nf-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(bg.opacity)}
                  @change=${(e: Event) => this.updateFloor({ background: { ...bg, opacity: parseFloat((e.target as HTMLInputElement).value) } })}
              /></label>
              <button class="nf-btn nf-danger nf-wide" @click=${() => this.updateFloor({ background: null })}>${this.t("background_remove")}</button>`
          : nothing}
      </div>
    </details>`;
  }

  static styles = [tokens, controls, editorStyles];
}

if (!customElements.get("nf-editor")) customElements.define("nf-editor", NfEditor);

// the extensions page is part of this bundle: the panel loads it the same way as the editor
import "./extensions.ts";

/** Lower case without accents, so "kuche" finds "Küche" and "chaise" finds "Chaise longue". */
function fold(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
}

/** A stand-in hass for English names (the furniture search also matches the English name). */
const EN_HASS = { language: "en" } as HomeAssistant;

