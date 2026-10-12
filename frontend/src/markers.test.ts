import assert from "node:assert/strict";
import { test } from "node:test";
import { buildMarkers, cameraMotion, cameraMotionSensors, detectionKind, placedEntities, scaleGlow, stateText, toggleEntity } from "./markers.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

const state = (entity_id: string, value: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state: value, attributes });

function hassOf(list: HassEntity[], extra: Record<string, unknown> = {}): HomeAssistant {
  const calls: unknown[][] = [];
  return {
    language: "en",
    areas: { lounge: { area_id: "lounge", name: "Lounge" } },
    states: Object.fromEntries(list.map((s) => [s.entity_id, s])),
    callService: async (...args: unknown[]) => void calls.push(args),
    calls,
    ...extra,
  } as unknown as HomeAssistant;
}

test("lights show brightness in percent, or on/off", () => {
  const hass = hassOf([]);
  assert.equal(stateText(hass, state("light.a", "on", { brightness: 255 })), "100 %");
  assert.equal(stateText(hass, state("light.a", "on")), "On");
  assert.equal(stateText(hass, state("light.a", "off")), "Off");
});

test("covers show their position, except while they move", () => {
  const hass = hassOf([]);
  assert.equal(stateText(hass, state("cover.a", "open", { current_position: 30 })), "30 %");
  assert.notEqual(stateText(hass, state("cover.a", "opening", { current_position: 30 })), "30 %");
});

test("binary sensors say open/closed for doors and windows, detected/clear for the rest", () => {
  const hass = hassOf([]);
  assert.equal(stateText(hass, state("binary_sensor.a", "on", { device_class: "door" })), "Open");
  assert.equal(stateText(hass, state("binary_sensor.a", "off", { device_class: "window" })), "Closed");
  assert.equal(stateText(hass, state("binary_sensor.a", "on", { device_class: "motion" })), "Detected");
  assert.equal(stateText(hass, state("binary_sensor.a", "off")), "Clear");
});

test("a sensor prints its value with its unit, and a word state stays a word", () => {
  const hass = hassOf([]);
  assert.equal(stateText(hass, state("sensor.t", "21.44", { unit_of_measurement: "°C" })), "21.4 °C");
  assert.equal(stateText(hass, state("sensor.s", "sunny")), "sunny");
  const precise = hassOf([], { entities: { "sensor.gas": { entity_id: "sensor.gas", display_precision: 3 } } });
  assert.equal(stateText(precise, state("sensor.gas", "1234.5678", { unit_of_measurement: "m³" })), "1,234.568 m³");
});

test("a media player shows what runs, a heater its temperature", () => {
  const hass = hassOf([]);
  assert.equal(stateText(hass, state("media_player.tv", "playing", { app_name: "Netflix", media_title: "Show" })), "Netflix");
  assert.equal(stateText(hass, state("media_player.tv", "playing", { media_title: "Show" })), "Show");
  assert.equal(stateText(hass, state("climate.h", "heat", { current_temperature: 20.5 })), "20.5 °C");
  assert.equal(stateText(hass, state("climate.h", "off", { current_temperature: 20.5 })), "20.5 °C · Off");
});

test("unknown or unavailable entities read as unavailable", () => {
  const hass = hassOf([]);
  assert.equal(stateText(hass, undefined), stateText(hass, state("light.a", "unavailable")));
});

test("scaleGlow clamps the level and leaves glows alone when the factor is neutral", () => {
  const glow = { level: 1 };
  assert.equal(scaleGlow(glow, 1), glow);
  assert.equal(scaleGlow(glow, null), glow);
  assert.equal(scaleGlow(null, 2), null);
  assert.equal(scaleGlow(glow, 10)?.level, 1.5);
  assert.equal(scaleGlow(glow, 0)?.level, 0.02);
  assert.equal(scaleGlow(glow, 0.5)?.level, 0.5);
});

test("markers: placed entities that exist get one, with their room and a default height", () => {
  const building = emptyBuilding();
  const floor = newFloor("g", "Ground", 0);
  floor.rooms = [{ id: "r", name: "Lounge room", area_id: "lounge", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" }];
  floor.placements = [
    { entity_id: "light.a", x: 1, z: 1, y: null, mount: null },
    { entity_id: "light.gone", x: 1, z: 1, y: null, mount: null },
    { entity_id: "sensor.t", x: 9, z: 9, y: 1.7, mount: null, name: "Own name" },
  ];
  building.floors = [floor];
  const hass = hassOf([state("light.a", "on", { friendly_name: "Lamp" }), state("sensor.t", "20")]);
  const markers = buildMarkers(hass, building);
  assert.deepEqual(markers.map((m) => m.id), ["light.a", "sensor.t"]);
  assert.equal(markers[0].roomId, "r");
  assert.equal(markers[0].lamp, "ceiling");
  assert.equal(markers[0].active, true);
  assert.equal(markers[1].roomId, null);
  assert.equal(markers[1].y, 1.7);
  assert.equal(markers[1].name, "Own name");
  assert.deepEqual(placedEntities(building), ["light.a", "light.gone", "sensor.t"]);
});

test("detection kinds come from the sensor id and name", () => {
  const hass = hassOf([state("binary_sensor.drive_dog_visible", "off", { friendly_name: "Hund im Garten" }), state("binary_sensor.x", "off", { friendly_name: "Person at gate" })]);
  assert.equal(detectionKind(hass, "binary_sensor.x"), "person");
  assert.equal(detectionKind(hass, "binary_sensor.drive_dog_visible"), "pet");
  assert.equal(detectionKind(hass, "binary_sensor.driveway_car_occupancy"), "car");
  assert.equal(detectionKind(hass, "binary_sensor.shed_motion"), "motion");
});

test("camera motion looks at the sensors of the camera's own device", () => {
  const hass = hassOf(
    [state("camera.front", "idle"), state("binary_sensor.front_motion", "on", { device_class: "motion" }), state("binary_sensor.front_door", "on", { device_class: "door" }), state("binary_sensor.other_motion", "on", { device_class: "motion" })],
    {
      entities: {
        "camera.front": { entity_id: "camera.front", device_id: "d1" },
        "binary_sensor.front_motion": { entity_id: "binary_sensor.front_motion", device_id: "d1" },
        "binary_sensor.front_door": { entity_id: "binary_sensor.front_door", device_id: "d1" },
        "binary_sensor.other_motion": { entity_id: "binary_sensor.other_motion", device_id: "d2" },
      },
    },
  );
  assert.deepEqual(cameraMotionSensors(hass, "camera.front"), ["binary_sensor.front_motion"]);
  assert.equal(cameraMotion(hass, "camera.front"), true);
  hass.states["binary_sensor.front_motion"].state = "off";
  assert.equal(cameraMotion(hass, "camera.front"), false);
  assert.deepEqual(cameraMotionSensors(hass, "camera.unknown"), []);
});

test("toggling uses the service of the entity's own domain", async () => {
  const hass = hassOf([]) as HomeAssistant & { calls: unknown[][] };
  await toggleEntity(hass, "switch.pump");
  assert.deepEqual(hass.calls[0], ["switch", "toggle", { entity_id: "switch.pump" }]);
});
