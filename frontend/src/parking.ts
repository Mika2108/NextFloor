// Parking spots. A furniture piece of type "parking" marks where a vehicle can stand. A presence entity
// makes the vehicle appear only while a car is reported, and a type sensor (for example the result of an
// AI camera) can choose which vehicle model shows up.

import type { Building, Floor, Furniture } from "./model.ts";
import { packItem } from "./packs.ts";
import type { HomeAssistant } from "./types.ts";

/** Presence-entity states that mean "a car is there". */
export const PRESENT_STATES = new Set(["on", "home", "true", "present", "occupied", "detected", "parked", "yes", "1"]);

/** An entity reference of a spot, or null when it is unset or "none". */
const entityRef = (id: string | null | undefined): string | null => (id && id !== "none" ? id : null);

const clean = (text: string) => text.trim().toLowerCase();

/** The vehicle named by a type sensor: the mapping whose word equals the state, else one contained in it. */
function vehicleFromSensor(spot: Furniture, sensorState: string): string | null {
  const wanted = clean(sensorState);
  if (!wanted || !spot.types) return null;
  const mappings = spot.types.map((m) => ({ word: clean(m.state), vehicle: m.vehicle }));
  const exact = mappings.find((m) => m.word === wanted);
  const partial = mappings.find((m) => m.word !== "" && wanted.includes(m.word));
  return (exact ?? partial)?.vehicle ?? null;
}

/**
 * The vehicle (a pack item type) standing in a spot right now. Null while the presence entity reports
 * no car; otherwise the one the type sensor names, falling back to the spot's own vehicle. A spot
 * without a presence entity always shows its vehicle.
 */
export function parkedVehicle(hass: HomeAssistant, spot: Furniture): string | null {
  if (spot.type !== "parking") return null;
  const presence = entityRef(spot.entity);
  if (presence !== null) {
    const state = hass.states[presence]?.state;
    if (state === undefined || !PRESENT_STATES.has(state.toLowerCase())) return null;
  }
  let vehicle = spot.vehicle ?? null;
  const sensor = entityRef(spot.type_entity);
  if (sensor !== null && spot.types && spot.types.length > 0) {
    vehicle = vehicleFromSensor(spot, hass.states[sensor]?.state ?? "") ?? vehicle;
  }
  return vehicle !== null && packItem(vehicle) ? vehicle : null;
}

/** Vehicles currently parked, keyed by the id of their spot. */
export function parkedVehicles(hass: HomeAssistant, building: Building): Map<string, string> {
  const parked = new Map<string, string>();
  for (const spot of building.floors.flatMap((floor) => floor.furniture)) {
    const vehicle = parkedVehicle(hass, spot);
    if (vehicle) parked.set(spot.id, vehicle);
  }
  return parked;
}

/** Entities whose change can bring a vehicle into a spot or remove it. */
export function parkingEntities(floors: readonly Floor[]): string[] {
  const refs: (string | null)[] = [];
  for (const spot of floors.flatMap((floor) => floor.furniture)) {
    if (spot.type === "parking") refs.push(entityRef(spot.entity), entityRef(spot.type_entity));
  }
  return refs.filter((id): id is string => id !== null);
}

/** The vehicle as a furniture piece in its spot: the model's size times the spot's scale, same turn. */
export function vehicleFurniture(spot: Furniture, vehicle: string): Furniture | null {
  const item = packItem(vehicle);
  if (!item) return null;
  const scale = spot.scale ?? 1;
  const [w, d, h] = item.size.map((n) => n * scale);
  return { id: `${spot.id}:vehicle`, type: vehicle, x: spot.x, z: spot.z, rotation: spot.rotation, w, d, h, variant: spot.variant ?? null, entity: null, power: null };
}

/** The floor with its parked vehicles added as furniture, ready for the 3D builder. */
export function withVehicles(floor: Floor, parked: Map<string, string>): Floor {
  const furniture: Furniture[] = [];
  let added = false;
  for (const piece of floor.furniture) {
    furniture.push(piece);
    const vehicle = piece.type === "parking" ? parked.get(piece.id) : undefined;
    const car = vehicle ? vehicleFurniture(piece, vehicle) : null;
    if (car) {
      furniture.push(car);
      added = true;
    }
  }
  return added ? { ...floor, furniture } : floor;
}
