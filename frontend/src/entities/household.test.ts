import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, hassOf } from "./fixtures.ts";
import { hasPost, pickupDays, plantThirst, remainingMinutes } from "./household.ts";

const now = new Date(2026, 9, 26, 9, 30).getTime(); // Monday 26 October 2026

test("a bin's next pickup from all the ways sensors write it", () => {
  assert.equal(pickupDays(entity("sensor.bin", "3"), now), 3);
  assert.equal(pickupDays(entity("sensor.bin", "irgendwas", { daysTo: 2 }), now), 2, "Waste Collection Schedule's daysTo");
  assert.equal(pickupDays(entity("sensor.bin", "Heute"), now), 0);
  assert.equal(pickupDays(entity("sensor.bin", "morgen"), now), 1);
  assert.equal(pickupDays(entity("sensor.bin", "Übermorgen"), now), 2);
  assert.equal(pickupDays(entity("sensor.bin", "Mo, 02.11.2026"), now), 7, "a date with numbers in it is a date, not 2 days");
  assert.equal(pickupDays(entity("sensor.bin", "2026-10-29"), now), 3);
  assert.equal(pickupDays(entity("sensor.bin", "29.10."), now), 3);
  assert.equal(pickupDays(entity("sensor.bin", "Restabfall in 4 Tagen"), now), 4);
  assert.equal(pickupDays(entity("sensor.bin", "unknown"), now), null);
  assert.equal(pickupDays(entity("sensor.bin", "keine Termine"), now), null);
});

test("post in the mailbox", () => {
  assert.equal(hasPost(entity("binary_sensor.mail", "on")), true);
  assert.equal(hasPost(entity("binary_sensor.mail", "off")), false);
  assert.equal(hasPost(entity("sensor.mail", "Post")), true);
  assert.equal(hasPost(entity("sensor.mail", "unavailable")), false);
});

test("a plant is thirsty below its threshold", () => {
  assert.deepEqual(plantThirst(entity("sensor.soil", "12")), { moisture: 12, thirsty: true });
  assert.deepEqual(plantThirst(entity("sensor.soil", "35")), { moisture: 35, thirsty: false });
  assert.equal(plantThirst(entity("sensor.soil", "35"), 40)?.thirsty, true);
  assert.equal(plantThirst(entity("sensor.soil", "unknown")), null);
});

test("an appliance's time left from a duration or an end time on its device", () => {
  const hass = hassOf([
    entity("sensor.washer_remaining_time", "25", { unit_of_measurement: "min" }),
    entity("sensor.dryer_programmende", new Date(now + 90 * 60000).toISOString(), { device_class: "timestamp" }),
    entity("sensor.dish_rest", "1:05:00"),
    entity("sensor.washer_power", "1800", { unit_of_measurement: "W" }),
  ]);
  assert.equal(remainingMinutes(hass, ["sensor.washer_power", "sensor.washer_remaining_time"], now), 25);
  assert.equal(remainingMinutes(hass, ["sensor.dryer_programmende"], now), 90);
  assert.equal(remainingMinutes(hass, ["sensor.dish_rest"], now), 65);
  assert.equal(remainingMinutes(hass, ["sensor.washer_power"], now), null, "a power sensor is no time left");
});
