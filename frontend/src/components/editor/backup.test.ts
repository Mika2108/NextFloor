import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor, type Building } from "../../model.ts";
import { BackupService, type BackupDeps, type BackupHost } from "./backup.ts";

const plan = (): Building => ({ version: 1, floors: [newFloor("g", "Ground", 0)], settings: { roof: { type: "none" } }, energy: {}, presence: [] }) as unknown as Building;
const file = (text: string) => ({ text: async () => text }) as File;

function setup(overrides: Partial<BackupDeps["api"]> = {}, answers = { confirm: true }) {
  const log: string[] = [];
  const downloads: [string, string][] = [];
  const api = {
    listHistory: async () => [{ id: "s1", revision: 1, saved_at: 0, floors: 1, rooms: 2, furniture: 3 }],
    restoreSnapshot: async (_h: unknown, id: string) => (log.push(`restore ${id}`), 2),
    takeSnapshot: async () => void log.push("snapshot"),
    fetchBackup: async () => ({ format: "nextfloor-backup", version: 1, building: plan(), packs: [] }),
    restoreBackup: async () => ({ building: plan(), packs: 1, skipped: [{ id: "bad" }] }),
    fetchImage: async (_h: unknown, id: string) => `data:${id}`,
    storeImage: async (_h: unknown, id: string) => void log.push(`store ${id}`),
    ...overrides,
  } as unknown as BackupDeps["api"];
  const deps: BackupDeps = { api, alert: (t) => log.push(`alert ${t}`), confirm: () => answers.confirm, download: (n, t) => downloads.push([n, t]), today: () => "2026-10-12" };
  const said: string[] = [];
  const adopted: Building[] = [];
  const host: BackupHost = {
    hass: { language: "en" } as never,
    doc: plan(),
    t: (key, vars) => `${key}${vars ? JSON.stringify(vars) : ""}`,
    adopt: (b) => adopted.push(b),
    say: (t) => said.push(t),
    refresh: () => undefined,
    packsChanged: () => log.push("packs"),
  };
  return { service: new BackupService(host, deps), log, downloads, said, adopted };
}

test("loading the restore points fills the list, and a failing backend gives an empty one", async () => {
  const ok = setup();
  await ok.service.loadHistory();
  assert.equal(ok.service.history?.length, 1);
  const failing = setup({ listHistory: async () => Promise.reject(new Error("x")) });
  await failing.service.loadHistory();
  assert.deepEqual(failing.service.history, []);
});

test("restoring a point asks first and only then goes back", async () => {
  const no = setup({}, { confirm: false });
  await no.service.restorePoint({ id: "s1", revision: 1, saved_at: 0, floors: 1, rooms: 1, furniture: 1 });
  assert.deepEqual(no.log, []);
  const yes = setup();
  await yes.service.restorePoint({ id: "s1", revision: 1, saved_at: 0, floors: 1, rooms: 1, furniture: 1 });
  assert.equal(yes.log[0], "restore s1");
  assert.equal(yes.said[0], "backup_restored");
});

test("exporting the plan names the file after the kind and the day", () => {
  const s = setup();
  s.service.exportPlan(true);
  s.service.exportPlan(false);
  assert.deepEqual(s.downloads.map(([name]) => name), ["nextfloor-export_name_template-2026-10-12.json", "nextfloor-export_name_backup-2026-10-12.json"]);
  assert.equal(JSON.parse(s.downloads[0][1]).format, "nextfloor");
});

test("importing a plan: bad files are refused with a reason, a good one takes a restore point first", async () => {
  const bad = setup();
  await bad.service.importPlan(file("{oops"));
  assert.ok(bad.log[0].startsWith("alert import_error_not_json"));
  await bad.service.importPlan(file('{"hello": 1}'));
  assert.ok(bad.log[1].startsWith("alert import_error_not_plan"));
  assert.equal(bad.adopted.length, 0);
  const good = setup();
  await good.service.importPlan(file(JSON.stringify(plan())));
  assert.equal(good.log[0], "snapshot");
  assert.equal(good.adopted.length, 1);
  assert.equal(good.said[0], "backup_imported");
  const declined = setup({}, { confirm: false });
  await declined.service.importPlan(file(JSON.stringify(plan())));
  assert.equal(declined.adopted.length, 0);
  await declined.service.importPlan(undefined);
});

test("a full backup includes the readable pictures and is not busy afterwards", async () => {
  const s = setup({ fetchBackup: async () => ({ format: "nextfloor-backup", version: 1, building: { ...plan(), floors: [{ ...newFloor("g", "G", 0), background: { image_id: "pic1", x: 0, z: 0, width: 1, opacity: 1 } }] }, packs: [] }) as never });
  await s.service.exportFull();
  assert.equal(s.service.busy, false);
  assert.equal(s.downloads.length, 1);
  assert.deepEqual(Object.keys(JSON.parse(s.downloads[0][1]).images ?? {}), ["pic1"]);
});

test("a full restore stores the pictures, tells which packs were skipped, and refuses other files", async () => {
  const s = setup();
  const backup = { format: "nextfloor-backup", version: 1, building: plan(), packs: [], images: { a: "data:a", b: "data:b" } };
  await s.service.importFull(file(JSON.stringify(backup)));
  assert.deepEqual(s.log.filter((l) => l.startsWith("store")), ["store a", "store b"]);
  assert.ok(s.log.includes("packs"));
  assert.equal(s.adopted.length, 1);
  assert.ok(s.said[0].includes("backup_full_restored") && s.said[0].includes("bad"));
  assert.equal(s.service.busy, false);
  const other = setup();
  await other.service.importFull(file('{"format":"nextfloor"}'));
  assert.ok(other.log[0].startsWith("alert backup_full_not_backup"));
  const broken = setup({ restoreBackup: async () => Promise.reject({ code: "boom" }) });
  await broken.service.importFull(file(JSON.stringify(backup)));
  assert.ok(broken.log.some((l) => l.includes("boom")));
  assert.equal(broken.service.busy, false);
});
