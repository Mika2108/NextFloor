// Synthetic preview smoke test: no Home Assistant connection or service writes.
// CHROME_PATH=/path/to/chrome node light-effects-smoke.mjs [output-directory]
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const out = resolve(process.argv[2] ?? "../preview/screenshots/light-effects");
await mkdir(out, { recursive: true });
const server = createServer(async (req, res) => {
  const path = resolve(root, "." + decodeURIComponent(new URL(req.url, "http://localhost").pathname));
  if (!path.startsWith(root + sep)) return res.writeHead(403).end();
  try {
    const body = await readFile(path);
    res.writeHead(200, { "content-type": ({ ".html": "text/html", ".js": "text/javascript", ".json": "application/json" })[extname(path)] ?? "application/octet-stream" }).end(body);
  } catch { res.writeHead(404).end(); }
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
let browser;
try {
  browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", ...(process.getuid?.() === 0 ? ["--no-sandbox"] : [])] });
  for (const [name, width, height] of [["desktop", 1440, 1000], ["mobile", 390, 844]]) {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setRequestInterception(true);
    page.on("request", (request) => request.url().startsWith("http://127.0.0.1:") || request.url().startsWith("data:") || request.url().startsWith("blob:") ? request.continue() : request.abort());
    await page.setViewport({ width, height, deviceScaleFactor: 1 });
    await page.goto(`http://127.0.0.1:${server.address().port}/preview/index.html?noshowcase`, { waitUntil: "networkidle0" });
    await page.waitForFunction(() => window.nfPanel?.data?.building && window.nfPanel.shadowRoot.querySelector("nf-view3d")?.viewer);
    await page.evaluate(() => {
      const panel = window.nfPanel;
      const doc = structuredClone(panel.data.building);
      const floor = doc.floors[0];
      doc.floors = [floor];
      floor.furniture = ["pulse", "flicker", "rainbow", "none"].map((animation, index) => ({ id: `effect-demo-${index}`, type: "lamp_floor", x: 1 + index, z: 1.5, w: 0.3, d: 0.3, h: 1.5, rotation: 0, variant: null, entity: "light.effect_demo", effect_animations: { Demo: animation } }));
      panel.hass = { ...panel.hass, states: { ...panel.hass.states, "light.effect_demo": { entity_id: "light.effect_demo", state: "on", attributes: { effect: "Demo", effect_list: ["Demo", "Weiß"], brightness: 100, color_mode: "rgb", rgb_color: [255, 120, 40] } } }, callService: async () => { throw new Error("Unexpected HA write from visualization"); } };
      panel.data.edit(doc);
      panel._floorId = floor.id;
    });
    await page.waitForFunction(() => window.nfPanel.shadowRoot.querySelector("nf-view3d")?.viewer?.devices.filter((d) => d.furnitureId?.startsWith("effect-demo-")).length === 4);
    const sampled = await page.evaluate(() => {
      const viewer = window.nfPanel.shadowRoot.querySelector("nf-view3d").viewer;
      const lamps = viewer.devices.filter((d) => d.furnitureId?.startsWith("effect-demo-"));
      viewer.effectTime = 0.75;
      return lamps.map((lamp) => ({ animation: lamp.effect ?? null, base: lamp.glow, sample: viewer.glowOf(lamp) }));
    });
    assert.deepEqual(sampled.map((s) => s.animation), ["pulse", "flicker", "rainbow", null]);
    assert.deepEqual(sampled[0].sample.color, sampled[0].base.color);
    assert.ok(sampled[0].sample.level < sampled[0].base.level);
    assert.deepEqual(sampled[1].sample.color, sampled[1].base.color);
    assert.notDeepEqual(sampled[2].sample.color, sampled[2].base.color);
    assert.deepEqual(sampled[3].sample, sampled[3].base);
    // Exercise actual GPU-bound colour buffers, not just the sampler.
    const buffers = await page.evaluate(() => {
      const viewer = window.nfPanel.shadowRoot.querySelector("nf-view3d").viewer;
      viewer.highQuality = true;
      viewer.lowQuality = false;
      viewer.wallMode = "full";
      const lamp = viewer.devices.find((d) => d.furnitureId === "effect-demo-0");
      lamp.lamp = "spot"; // includes the high-quality cone path
      const floor = viewer.floors.find((f) => f.floor.id === lamp.floorId);
      const sample = (time) => {
        viewer.effectTime = time;
        viewer.buildLamps(floor);
        viewer.buildGlow(floor);
        return Object.fromEntries(["lampMesh", "haloMesh", "coneMesh", "glowMesh"].map((key) => [key, Array.from(floor[key].geometry.getAttribute("color")?.array ?? [])]));
      };
      return [sample(0), sample(0.75)];
    });
    for (const key of ["lampMesh", "haloMesh", "coneMesh", "glowMesh"]) {
      assert.ok(buffers[0][key].length > 0, `${key}: no colour data`);
      assert.notDeepEqual(buffers[0][key], buffers[1][key], `${key}: animated colour/intensity did not update`);
      assert.ok(buffers[1][key].every(Number.isFinite));
    }
    await page.screenshot({ path: resolve(out, `${name}-render.png`) });
    // Open the actual existing editor and edit its exact-name mapping through DOM events.
    await page.evaluate(() => {
      const buttons = [...window.nfPanel.shadowRoot.querySelectorAll("button")];
      const editor = buttons.find((button) => button.textContent.trim() === "Editor");
      if (!editor) throw new Error("Editor button missing");
      editor.click();
    });
    await page.waitForFunction(() => window.nfPanel.shadowRoot.querySelector("nf-editor")?._doc);
    await page.evaluate(() => {
      const editor = window.nfPanel.shadowRoot.querySelector("nf-editor");
      editor._floorId = editor._doc.floors[0].id;
      editor.selectItem("furniture", "effect-demo-0");
    });
    await page.waitForFunction(() => [...window.nfPanel.shadowRoot.querySelector("nf-editor").shadowRoot.querySelectorAll("summary")].some((el) => el.textContent.includes("Effektanimationen")));
    await page.evaluate(() => {
      const editor = window.nfPanel.shadowRoot.querySelector("nf-editor");
      const details = [...editor.shadowRoot.querySelectorAll("details")].find((el) => el.querySelector("summary")?.textContent.includes("Effektanimationen"));
      for (let parent = details; parent; parent = parent.parentElement) if (parent.tagName === "DETAILS") parent.open = true;
      const select = [...details.querySelectorAll("label")].find((el) => el.textContent.trim().startsWith("Demo")).querySelector("select");
      select.value = "flicker";
      select.dispatchEvent(new Event("change", { bubbles: true }));
    });
    await page.waitForFunction(() => window.nfPanel.shadowRoot.querySelector("nf-editor")._doc.floors[0].furniture[0].effect_animations.Demo === "flicker");
    const mappings = await page.evaluate(() => window.nfPanel.shadowRoot.querySelector("nf-editor")._doc.floors[0].furniture.map((lamp) => lamp.effect_animations.Demo));
    assert.deepEqual(mappings, ["flicker", "flicker", "rainbow", "none"]);
    await page.evaluate(() => {
      const editor = window.nfPanel.shadowRoot.querySelector("nf-editor");
      const details = [...editor.shadowRoot.querySelectorAll("details")].find((el) => el.querySelector("summary")?.textContent.includes("Effektanimationen"));
      details.open = true;
      const toggle = details.querySelector('input[type="checkbox"]');
      toggle.click();
      details.scrollIntoView({ block: "center" });
    });
    await page.waitForFunction(() => window.nfPanel.shadowRoot.querySelector("nf-editor")._doc.floors[0].furniture[0].animations_enabled === false);
    await page.screenshot({ path: resolve(out, `${name}-editor.png`) });
    const validation = await page.evaluate(() => {
      const editor = window.nfPanel.shadowRoot.querySelector("nf-editor");
      const details = [...editor.shadowRoot.querySelectorAll("details")].find((el) => el.querySelector("summary")?.textContent.includes("Effektanimationen"));
      const input = details.querySelector('input[type="text"]');
      const before = JSON.stringify(editor._doc.floors[0].furniture[0].effect_animations);
      input.value = "x".repeat(256);
      input.dispatchEvent(new Event("change", { bubbles: true }));
      input.blur(); // Inline live feedback remains readable without a native popup covering the form.
      input.scrollIntoView({ block: "center" });
      return { message: input.validationMessage, retained: input.value.length, unchanged: before === JSON.stringify(editor._doc.floors[0].furniture[0].effect_animations) };
    });
    assert.ok(validation.message.includes("255"));
    assert.equal(validation.retained, 256);
    assert.equal(validation.unchanged, true);
    await page.screenshot({ path: resolve(out, `${name}-validation.png`) });
    assert.deepEqual(errors, []);
    console.log(`PASS ${name}: shared entity isolation, sampling, mapping edit, master switch; ${out}`);
    await page.close();
  }
} finally {
  await browser?.close();
  server.close();
}
