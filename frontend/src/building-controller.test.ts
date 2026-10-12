import assert from "node:assert/strict";
import { test } from "node:test";
import { BuildingController, compareVersions } from "./building-controller.ts";
import { emptyBuilding } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

/** A host that counts redraws, and a Home Assistant whose backend is a small script. */
function setup(overrides: Partial<Record<string, (msg: Record<string, unknown>) => unknown>> = {}) {
  const host = { redraws: 0, addController() {}, requestUpdate() { this.redraws++; } };
  const sent: Record<string, unknown>[] = [];
  let listener: ((m: { revision: number }) => void) | null = null;
  let revision = 10;
  const hass = {
    callWS: async (msg: Record<string, unknown>) => {
      sent.push(msg);
      const custom = overrides[String(msg.type)];
      if (custom) return custom(msg);
      switch (msg.type) {
        case "nextfloor/building/get":
          return { building: emptyBuilding(), revision, version: "1.0.0" };
        case "nextfloor/building/save":
          return { revision: ++revision };
        case "nextfloor/packs/list":
          return { packs: [] };
        default:
          throw new Error(`unexpected ${String(msg.type)}`);
      }
    },
    connection: { subscribeMessage: async (cb: (m: { revision: number }) => void) => ((listener = cb), async () => void (listener = null)) },
  } as unknown as HomeAssistant;
  const controller = new BuildingController(host as never);
  return { controller, host, hass, sent, emit: (r: number) => listener?.({ revision: r }), isListening: () => listener !== null };
}

const settle = () => new Promise((resolve) => setTimeout(resolve, 20));

test("versions compare number by number", () => {
  assert.ok(compareVersions("1.10.1", "1.9.2") > 0);
  assert.ok(compareVersions("1.9.2", "1.10.0") < 0);
  assert.equal(compareVersions("1.0", "1.0.0"), 0);
  assert.ok(compareVersions("2.0.0", "1.99.99") > 0);
  assert.ok(compareVersions("1.2.3-beta", "1.2.3") === 0, "a suffix counts as zero");
});

test("connecting loads the plan and listens for changes", async () => {
  const { controller, hass, isListening } = setup();
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  assert.ok(controller.building);
  assert.equal(controller.backendVersion, "1.0.0");
  assert.equal(isListening(), true);
  controller.hostDisconnected();
  await settle();
  assert.equal(isListening(), false);
});

test("an edit shows at once, is saved after flush, and then reads as saved", async () => {
  const { controller, hass, sent } = setup();
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  const edited = emptyBuilding();
  controller.edit(edited);
  assert.equal(controller.building, edited);
  assert.equal(sent.filter((m) => m.type === "nextfloor/building/save").length, 0, "not yet, the pause has not passed");
  await controller.flush();
  assert.equal(sent.filter((m) => m.type === "nextfloor/building/save").length, 1);
  assert.equal(controller.saveState, "saved");
  assert.equal(controller.saveError, null);
});

test("several quick edits are saved as one", async () => {
  const { controller, hass, sent } = setup();
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  controller.edit(emptyBuilding());
  controller.edit(emptyBuilding());
  controller.edit(emptyBuilding());
  await controller.flush();
  assert.equal(sent.filter((m) => m.type === "nextfloor/building/save").length, 1);
});

test("a failed save is reported, and an old backend asks for a restart", async () => {
  const { controller, hass } = setup({
    "nextfloor/building/save": () => {
      throw { message: "extra keys not allowed @ data['foo']" };
    },
  });
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  controller.edit(emptyBuilding());
  await controller.flush();
  assert.equal(controller.saveState, "error");
  assert.match(controller.saveError ?? "", /extra keys/);
  assert.equal(controller.needsRestart, true);
});

test("changes from elsewhere reload the plan, our own saves do not", async () => {
  const { controller, hass, sent, emit } = setup();
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  const loads = () => sent.filter((m) => m.type === "nextfloor/building/get").length;
  const before = loads();
  controller.edit(emptyBuilding());
  await controller.flush(); // saves revision 11
  emit(11);
  await settle();
  assert.equal(loads(), before, "echo of our own save");
  emit(99);
  await settle();
  assert.equal(loads(), before + 1, "a save from another browser");
});

test("a load failure is shown as an error", async () => {
  const { controller, hass } = setup({
    "nextfloor/building/get": () => {
      throw new Error("backend down");
    },
  });
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  assert.equal(controller.error, "backend down");
  assert.equal(controller.building, null);
});

test("older backends without packs just have none", async () => {
  const { controller, hass } = setup({
    "nextfloor/packs/list": () => {
      throw new Error("unknown command");
    },
  });
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  assert.deepEqual(controller.packs, []);
  assert.ok(controller.building);
});
