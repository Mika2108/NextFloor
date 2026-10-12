// Small pictures of furniture and lamps for the editor's library. One offscreen renderer draws the same low-poly models as the 3D
// view, seen from the front at an angle, into a PNG data URL.

import { Box3, Color, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, OrthographicCamera, Scene, Vector3, WebGLRenderer } from "three";
import type { Furniture } from "../model.ts";
import { packItem, setPacks, type FurniturePack } from "../packs.ts";
import { pushFurniture, pushPackLamp } from "./furniture.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";
import { pushLampModel, type LampModel } from "./viewer3d.ts";

let renderer: WebGLRenderer | null = null;
const cache = new Map<string, string>();

export interface PreviewItem {
  type: string;
  w: number;
  d: number;
  h: number;
  variant?: string | null;
  /** The lamp model for lamp types: they are drawn by the lamp code, lit. */
  lamp?: LampModel | null;
}

const LAMP_LIGHT = 0xffb547;

/** Draws the item into the buffers: a pack lamp, a built-in lamp, or ordinary furniture. */
function drawItem(item: PreviewItem, solids: GeoBuffer, lines: LineBuffer): void {
  const packed = packItem(item.type);
  if (packed?.light) {
    pushPackLamp(solids, packed, { x: 0, z: 0, rotation: 0, w: item.w, d: item.d, h: item.h }, 0, LAMP_LIGHT);
  } else if (item.lamp) {
    // hanging lamps hang from a ceiling just above them
    pushLampModel(solids, { x: 0, z: 0, size: [item.w, item.d, item.h], base: 0, rotation: 0, variant: item.variant ?? null, lamp: item.lamp }, Math.max(item.h + 0.15, 0.6), LAMP_LIGHT);
  } else {
    const piece: Furniture = { id: "preview", type: item.type, x: 0, z: 0, rotation: 0, w: item.w, d: item.d, h: item.h, variant: item.variant ?? null, entity: null, power: null };
    pushFurniture(solids, lines, new GeoBuffer(), piece);
  }
}

/** A camera that looks from the front right, a little from above, with the item's box fitted into the picture. */
function fitCamera(box: Box3): OrthographicCamera {
  const centre = box.getCenter(new Vector3());
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0.01, 100);
  camera.position.copy(centre).add(new Vector3(0.9, 0.75, 1.3).normalize().multiplyScalar(20));
  camera.lookAt(centre);
  camera.updateMatrixWorld();
  // the camera looks at the centre, so the corners' distances in view space give the picture's extent
  let reach = 0.05;
  for (const x of [box.min.x, box.max.x]) {
    for (const y of [box.min.y, box.max.y]) {
      for (const z of [box.min.z, box.max.z]) {
        const p = new Vector3(x, y, z).applyMatrix4(camera.matrixWorldInverse);
        reach = Math.max(reach, Math.abs(p.x), Math.abs(p.y));
      }
    }
  }
  const half = reach * 1.12;
  Object.assign(camera, { left: -half, right: half, top: half, bottom: -half });
  camera.updateProjectionMatrix();
  return camera;
}

/** A PNG data URL of an item (cached per type and size). `packs` are needed for pack furniture. */
export function furniturePreview(item: PreviewItem, size = 180, packs?: FurniturePack[], brightness = 1.3): string {
  const key = [item.type, item.w, item.d, item.h, item.variant ?? "", size, brightness].join("|");
  const cached = cache.get(key);
  if (cached) return cached;
  if (packs) setPacks(packs);
  renderer ??= new WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setSize(size, size, false);
  renderer.setClearColor(0x000000, 0);

  const [solids, lines] = [new GeoBuffer(), new LineBuffer()];
  drawItem(item, solids, lines);
  // the neon palette is made for a dark room: pictures get a little more light and brighter edges
  const mesh = new Mesh(solids.geometry(), new MeshBasicMaterial({ vertexColors: true, color: new Color(brightness, brightness, brightness) }));
  const edges = new LineSegments(lines.geometry(), new LineBasicMaterial({ vertexColors: true, color: new Color(brightness * 1.8, brightness * 1.8, brightness * 1.8) }));
  const scene = new Scene();
  scene.add(mesh, edges);
  renderer.render(scene, fitCamera(new Box3().setFromObject(mesh)));
  const url = renderer.domElement.toDataURL("image/png");

  for (const part of [mesh, edges]) {
    part.geometry.dispose();
    (part.material as MeshBasicMaterial | LineBasicMaterial).dispose();
  }
  cache.set(key, url);
  return url;
}
