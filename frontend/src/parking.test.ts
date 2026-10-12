import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { emptyBuilding, newFloor, type Furniture } from "./model.ts";
import { setPacks } from "./packs.ts";
import { parkedVehicle, parkedVehicles, parkingEntities, vehicleFurniture, withVehicles } from "./parking.ts";
import type { HomeAssistant } from "./types.ts";

const COMPACT = "pack:test.garage:compact";
const TRUCK = "pack:test.garage:truck";

const part = { shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "body" } as const;

beforeEach(() => {
  setPacks([
    {
      id: "test.garage",
      name: "Garage",
      publisher: "test",
      items: [
        { id: "compact", name: { en: "Compact" }, size: [1.7, 3.6, 1.5], vehicle: true, parts: [part] },
        { id: "truck", name: { en: "Truck" }, size: [2.4, 6, 2.8], vehicle: true, parts: [part] },
      ],
    },
  ]);
});

const hassWith = (states: Record<string, string>) =>
  ({ states: Object.fromEntries(Object.entries(states).map(([id, state]) => [id, { entity_id: id, state, attributes: {} }])) }) as unknown as HomeAssistant;

const spot = (extra: Partial<Furniture> = {}): Furniture => ({ id: "spot", type: "parking", x: 1, z: 2, rotation: 45, w: 2.5, d: 5, h: 0.02, variant: null, entity: null, vehicle: COMPACT, ...extra });

test("without a presence entity the vehicle is always there", () => {
  assert.equal(parkedVehicle(hassWith({}), spot()), COMPACT);
  assert.equal(parkedVehicle(hassWith({}), spot({ vehicle: null })), null);
});

test("with a presence entity the vehicle follows it, and an unknown entity means no car", () => {
  const s = spot({ entity: "device_tracker.car" });
  assert.equal(parkedVehicle(hassWith({ "device_tracker.car": "home" }), s), COMPACT);
  assert.equal(parkedVehicle(hassWith({ "device_tracker.car": "not_home" }), s), null);
  assert.equal(parkedVehicle(hassWith({}), s), null);
  assert.equal(parkedVehicle(hassWith({ "device_tracker.car": "HOME" }), s), COMPACT);
});

test("furniture that is not a parking spot never shows a vehicle", () => {
  assert.equal(parkedVehicle(hassWith({}), spot({ type: "sofa" })), null);
});

test("a type sensor picks the model: exact word first, then a word inside the text", () => {
  const s = spot({
    type_entity: "sensor.camera_vehicle",
    types: [
      { state: "van", vehicle: TRUCK },
      { state: "compact", vehicle: COMPACT },
    ],
  });
  assert.equal(parkedVehicle(hassWith({ "sensor.camera_vehicle": "van" }), s), TRUCK);
  assert.equal(parkedVehicle(hassWith({ "sensor.camera_vehicle": "a red Van parked" }), s), TRUCK);
  // nothing matches: keep the spot's own vehicle
  assert.equal(parkedVehicle(hassWith({ "sensor.camera_vehicle": "bicycle" }), s), COMPACT);
  assert.equal(parkedVehicle(hassWith({ "sensor.camera_vehicle": "" }), s), COMPACT);
});

test("a vehicle that is not in any pack is ignored", () => {
  assert.equal(parkedVehicle(hassWith({}), spot({ vehicle: "pack:missing:x" })), null);
});

test("parkedVehicles collects the spots of all floors by id", () => {
  const building = emptyBuilding();
  const a = newFloor("a", "A", 0);
  const b = newFloor("b", "B", 3);
  a.furniture = [spot({ id: "one" })];
  b.furniture = [spot({ id: "two", vehicle: TRUCK }), spot({ id: "three", type: "sofa" })];
  building.floors = [a, b];
  assert.deepEqual([...parkedVehicles(hassWith({}), building)], [["one", COMPACT], ["two", TRUCK]]);
});

test("parkingEntities lists the presence and type entities of parking spots only", () => {
  const floor = newFloor("a", "A", 0);
  floor.furniture = [spot({ entity: "binary_sensor.car", type_entity: "sensor.kind" }), spot({ id: "x", entity: "none" }), spot({ id: "y", type: "sofa", entity: "light.lamp" })];
  assert.deepEqual(parkingEntities([floor]), ["binary_sensor.car", "sensor.kind"]);
});

test("the vehicle takes the spot's position and turn, and its size times the scale", () => {
  const car = vehicleFurniture(spot({ scale: 2 }), COMPACT);
  assert.ok(car);
  assert.deepEqual([car.id, car.x, car.z, car.rotation], ["spot:vehicle", 1, 2, 45]);
  assert.deepEqual([car.w, car.d, car.h], [3.4, 7.2, 3]);
  assert.equal(vehicleFurniture(spot(), "pack:missing:x"), null);
});

test("withVehicles adds the cars after their spot and leaves a floor without cars untouched", () => {
  const floor = newFloor("a", "A", 0);
  floor.furniture = [spot({ id: "s1" }), spot({ id: "s2", type: "sofa" })];
  assert.equal(withVehicles(floor, new Map()), floor);
  const out = withVehicles(floor, new Map([["s1", TRUCK]]));
  assert.deepEqual(out.furniture.map((f) => f.id), ["s1", "s1:vehicle", "s2"]);
  assert.equal(floor.furniture.length, 2, "the original floor is not changed");
});
