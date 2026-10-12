// The recorder: drives the demo like a user would and writes a video as a list of stills with durations.
//
// Time in the video is made, not measured: every `frame()` adds 1/FPS, and `hold(s)` makes the last still last longer. So an
// action that needs a second to settle costs nothing in the video, and a gliding mouse is as smooth as the frames we take of it.
// Narration is a list of segments (German and English text); a segment lasts at least as long as its text takes to speak.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { DEEP, launch, serve } from "./lib.mjs";

export const FPS = 10;
const WORDS_PER_SECOND = { en: 2.5, de: 2.2 };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const easing = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

/** How long a text takes to speak, in seconds (slow and clear: this is a tutorial). */
export function speechSeconds(text, lang) {
  const words = String(text).trim().split(/\s+/).filter(Boolean).length;
  return words / WORDS_PER_SECOND[lang] + 0.5;
}

export class Recorder {
  constructor({ out, lang, t }) {
    this.out = out;
    this.lang = lang;
    this.t = t; // (key, vars) → the UI text in the recording's language
    this.frames = [];
    this.segments = [];
    this.chapters = [];
    this.open = null; // the segment being filled
    this.cursor = { x: 640, y: 360 };
    mkdirSync(join(out, "frames"), { recursive: true });
  }

  async start({ query, width = 1280, height = 720 }) {
    this.width = width;
    this.height = height;
    const { server, base } = await serve();
    this.server = server;
    const { browser, page } = await launch(width, height);
    this.browser = browser;
    this.page = page;
    page.on("pageerror", (e) => console.log("  [page error]", e.message));
    await page.evaluateOnNewDocument(() => localStorage.clear());
    await page.goto(`${base}/preview/index.html?noshowcase&lang=${this.lang}&ha=dark${query ? "&" + query : ""}`, { waitUntil: "networkidle0", timeout: 180000 });
    await sleep(2000);
    await page.evaluate(OVERLAY);
    this.base = base;
  }

  get time() {
    return this.frames.reduce((a, f) => a + f.dur, 0);
  }

  // ------------------------------------------------------------------ frames and time
  async frame() {
    const file = `frames/f${String(this.frames.length).padStart(6, "0")}.jpg`;
    await this.page.screenshot({ path: join(this.out, file), type: "jpeg", quality: 88 });
    this.frames.push({ file, dur: 1 / FPS });
  }

  /** Waits until the page has settled, takes a frame, and lets it stand for `seconds`. */
  async show(seconds = 1.5, settle = 500) {
    await sleep(settle);
    await this.frame();
    this.hold(seconds - 1 / FPS);
  }

  hold(seconds) {
    if (seconds > 0 && this.frames.length) this.frames.at(-1).dur += seconds;
  }

  // ------------------------------------------------------------------ narration
  /** Starts a narration segment; the following actions belong to it until the next `say`. */
  say(text) {
    this.endSegment();
    this.open = { start: this.time, de: text.de, en: text.en, chapter: this.chapters.length };
  }

  endSegment() {
    const s = this.open;
    if (!s) return;
    const need = Math.max(speechSeconds(s.de, "de"), speechSeconds(s.en, "en"));
    const have = this.time - s.start;
    if (have < need) this.hold(need - have);
    s.end = this.time;
    this.segments.push(s);
    this.open = null;
  }

  /** A title card between two chapters. */
  async chapter(title, subtitle) {
    this.endSegment();
    const label = title[this.lang];
    await this.page.evaluate((a, b) => window.__tut.card(a, b), label, subtitle?.[this.lang] ?? "");
    await sleep(300);
    this.chapters.push({ start: this.time, title });
    await this.frame();
    this.hold(2.4);
    await this.page.evaluate(() => window.__tut.card(null));
    await sleep(200);
  }

  // ------------------------------------------------------------------ finding things
  /** The centre of a thing on screen: { key } a UI text by its i18n key, { text }, { css }, or { x, y }. */
  async locate(target) {
    if (typeof target === "function") target = await target();
    if (target.x !== undefined) return { x: target.x, y: target.y };
    const text = target.key ? this.t(target.key, target.vars) : target.label ? this.t(target.label, target.vars) : target.text;
    const asLabel = !!target.label;
    const found = await this.page.evaluate(
      `(() => { ${DEEP}
        const want = ${JSON.stringify(text ?? null)}; const asLabel = ${asLabel}; const css = ${JSON.stringify(target.css ?? null)}; const nth = ${target.nth ?? 0}; const near = ${JSON.stringify(target.near ?? null)}; const within = ${JSON.stringify(target.within ?? null)};
        let list;
        if (css) list = all(css);
        else if (asLabel) { const own = (el) => [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("").replace(/\\s+/g, " ").trim(); list = all("label").filter(visible).filter((el) => own(el) === want || own(el).startsWith(want + " (")); }
        else {
          const pool = all("button, summary, label, a, [role=tab], [role=option], option, h3, .nf-chip").filter(visible);
          const tiers = [(el) => textOf(el) === want || (el.firstElementChild && textOf(el.firstElementChild) === want), (el) => textOf(el).startsWith(want), (el) => textOf(el).replace(/^[^\\p{L}\\p{N}]+/u, "").startsWith(want), (el) => want.length > 2 && textOf(el).includes(want)];
          list = [];
          for (const tier of tiers) { list = pool.filter(tier); if (list.length) break; }
        }
        list = list.filter(visible);
        if (near) list = list.filter((el) => { let a = el; for (let i = 0; i < 4 && a; i++) { a = a.parentElement || (a.getRootNode && a.getRootNode().host); if (a && textOf(a).length < 90 && textOf(a).startsWith(near)) return true; } return false; });
        if (within) { const root = all(within)[0]; if (root) list = list.filter((el) => root.contains(el) || (root.shadowRoot && root.shadowRoot.contains(el))); }
        const el = list[nth]; if (!el) return null;
        el.scrollIntoView({ block: "center", inline: "nearest" });
        const r = el.getBoundingClientRect();
        return { x: Math.round(r.left + (el.tagName === "INPUT" || el.tagName === "SELECT" ? Math.min(r.width / 2, 120) : r.width / 2)), y: Math.round(r.top + r.height / 2), w: Math.round(r.width), h: Math.round(r.height), left: r.left, top: r.top };
      })()`,
    );
    if (!found) throw new Error(`not found on screen: ${JSON.stringify(target)} (${text ?? ""})`);
    return found;
  }

  // ------------------------------------------------------------------ the mouse
  async glide(x, y, { frames = 10, hover = true } = {}) {
    const from = { ...this.cursor };
    const steps = Math.max(2, Math.round(frames * Math.min(1, Math.hypot(x - from.x, y - from.y) / 300 + 0.3)));
    for (let i = 1; i <= steps; i++) {
      const k = easing(i / steps);
      const px = from.x + (x - from.x) * k;
      const py = from.y + (y - from.y) * k;
      this.cursor = { x: px, y: py };
      await this.page.evaluate((a, b) => window.__tut.move(a, b), px, py);
      if (hover) await this.page.mouse.move(px, py);
      await this.frame();
    }
  }

  async point(target, opts) {
    const at = await this.locate(target);
    await this.glide(at.x, at.y, opts);
    return at;
  }

  /** A click that is not filmed (setting the stage between episodes). */
  async quietClick(target) {
    const at = await this.locate(target);
    await this.page.mouse.click(at.x, at.y);
    await sleep(700);
  }

  async click(target, { settle = 600, after = 0.6 } = {}) {
    const at = await this.point(target);
    await this.page.evaluate((a, b) => window.__tut.ripple(a, b), at.x, at.y);
    await this.frame();
    await this.page.mouse.click(at.x, at.y);
    await sleep(settle);
    await this.frame();
    this.hold(after);
    return at;
  }

  /** Presses and drags between two points, with a frame on the way every few pixels. */
  async drag(from, to, { frames = 14, up = true } = {}) {
    await this.glide(from.x, from.y);
    await this.page.mouse.move(from.x, from.y);
    await this.page.mouse.down();
    for (let i = 1; i <= frames; i++) {
      const k = easing(i / frames);
      const x = from.x + (to.x - from.x) * k;
      const y = from.y + (to.y - from.y) * k;
      this.cursor = { x, y };
      await this.page.evaluate((a, b) => window.__tut.move(a, b), x, y);
      await this.page.mouse.move(x, y);
      await this.frame();
    }
    if (up) await this.page.mouse.up();
    await sleep(500);
    await this.frame();
  }

  async typeInto(target, text, { clear = true } = {}) {
    const at = await this.click(target, { after: 0.1 });
    if (clear) {
      await this.page.keyboard.down("Control");
      await this.page.keyboard.press("KeyA");
      await this.page.keyboard.up("Control");
    }
    let i = 0;
    for (const ch of text) {
      await this.page.keyboard.type(ch, { delay: 20 });
      if (++i % 3 === 0 || i === text.length) await this.frame();
    }
    await this.page.keyboard.press("Enter");
    await this.page.keyboard.press("Tab");
    await sleep(400);
    await this.frame();
    this.hold(0.4);
    return at;
  }

  async key(name, { frames = 1 } = {}) {
    await this.page.keyboard.press(name);
    await sleep(500);
    for (let i = 0; i < frames; i++) await this.frame();
  }

  /** Where a point of the plan (metres) lies on the screen, in the editor's drawing. */
  async planPoint(x, z) {
    const at = await this.page.evaluate(
      `(() => { ${DEEP} const e = all("nf-editor")[0]; const svg = e.renderRoot.querySelector("svg"); const r = svg.getBoundingClientRect(); const p = e.toScreen([${x}, ${z}]); return { x: r.left + p[0], y: r.top + p[1] }; })()`,
    );
    return at;
  }

  /** Sets a drop-down: the pointer goes to it, the choice is made and shown. */
  async choose(target, optionText) {
    const at = await this.point(target);
    await this.page.evaluate((a, b) => window.__tut.ripple(a, b), at.x, at.y);
    await this.frame();
    const ok = await this.page.evaluate(
      `(() => { ${DEEP} const label = ${JSON.stringify(target.label ? this.t(target.label) : target.text ?? (target.key ? this.t(target.key) : null))}; const own = (el) => [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("").replace(/\\s+/g, " ").trim(); const select = all("select").filter(visible).find((s) => { const l = s.closest("label"); return l && (own(l) === label || own(l).startsWith(label + " (")); }); if (!select) return false; const o = [...select.options].find((o) => o.textContent.trim() === ${JSON.stringify(optionText)}); if (!o) return false; select.value = o.value; select.dispatchEvent(new Event("input", { bubbles: true })); select.dispatchEvent(new Event("change", { bubbles: true })); return true; })()`,
    );
    if (!ok) throw new Error(`no drop-down option: ${optionText}`);
    await sleep(500);
    await this.frame();
    this.hold(0.5);
  }

  // ------------------------------------------------------------------ pointing things out
  /** A pulsing frame around an area of the screen (null removes it). */
  async spot(rect, { pad = 6 } = {}) {
    if (rect && rect.w === undefined && rect.x !== undefined) rect = null;
    await this.page.evaluate((r, p) => window.__tut.spot(r, p), rect, pad);
  }

  async spotAt(target, opts) {
    const at = await this.locate(target);
    await this.spot({ left: at.left, top: at.top, w: at.w, h: at.h }, opts);
    return at;
  }

  /** A frame around several things at once (a toolbar). */
  async spotUnion(targets, opts) {
    const rects = [];
    for (const t of targets) rects.push(await this.locate(t));
    const left = Math.min(...rects.map((r) => r.left));
    const top = Math.min(...rects.map((r) => r.top));
    const right = Math.max(...rects.map((r) => r.left + r.w));
    const bottom = Math.max(...rects.map((r) => r.top + r.h));
    await this.spot({ left, top, w: right - left, h: bottom - top }, opts);
  }

  /** A small note in the picture (a keyboard shortcut, a value). */
  async note(text) {
    await this.page.evaluate((t) => window.__tut.note(t), text);
  }

  /** For writing episodes: what is on screen right now (buttons, fields) and a screenshot at /tmp/tut-dump.png. */
  async dump(label = "") {
    const list = await this.page.evaluate(`(() => { ${DEEP} return all("button, select, input, summary, label, h3").filter(visible).map((el) => el.tagName.toLowerCase() + ":" + (textOf(el).slice(0, 60) || el.getAttribute("aria-label") || el.title || el.placeholder || el.type)); })()`);
    console.log(`--- ${label}\n` + list.join("\n"));
    await this.page.screenshot({ path: "/tmp/tut-dump.png" });
  }

  // ------------------------------------------------------------------ the page
  eval(code, ...args) {
    return this.page.evaluate(code, ...args);
  }

  async stateJson() {
    return this.page.evaluate(() => window.nfDemoState());
  }

  // ------------------------------------------------------------------ writing the results
  async finish(name) {
    this.endSegment();
    await this.browser.close();
    this.server.close();
    const dir = this.out;
    const concat = this.frames.map((f) => `file '${f.file}'\nduration ${f.dur.toFixed(4)}`).join("\n") + `\nfile '${this.frames.at(-1).file}'\n`;
    writeFileSync(join(dir, `${name}.concat.txt`), concat);
    writeFileSync(join(dir, `${name}.segments.json`), JSON.stringify({ lang: this.lang, seconds: this.time, chapters: this.chapters, segments: this.segments }, null, 1));
    return { seconds: this.time, frames: this.frames.length, segments: this.segments.length };
  }
}

/** The things drawn over the page: the mouse pointer, a click ripple, a spotlight frame, a note and the chapter card. */
const OVERLAY = `(() => {
  if (window.__tut) return;
  const layer = document.createElement("div");
  layer.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483647;font-family:Roboto,system-ui,sans-serif";
  layer.innerHTML = \`
    <div id="t-spot" style="position:absolute;display:none;border:3px solid #ffb547;border-radius:12px;box-shadow:0 0 0 9999px rgba(0,0,0,.35),0 0 18px #ffb547"></div>
    <svg id="t-cursor" width="28" height="28" viewBox="0 0 28 28" style="position:absolute;left:0;top:0;filter:drop-shadow(0 2px 3px rgba(0,0,0,.6))"><path d="M4 2l17 10-7.5 1.8L17 22l-3.2 1.4L10.3 15 4 20z" fill="#fff" stroke="#111" stroke-width="1.6" stroke-linejoin="round"/></svg>
    <div id="t-ripple" style="position:absolute;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;border:4px solid #03a9f4;display:none"></div>
    <div id="t-note" style="position:absolute;left:50%;bottom:34px;transform:translateX(-50%);display:none;padding:10px 20px;border-radius:12px;background:rgba(20,22,28,.94);color:#fff;font-size:22px;font-weight:600;box-shadow:0 6px 24px rgba(0,0,0,.5)"></div>
    <div id="t-card" style="position:absolute;inset:0;display:none;place-items:center;background:radial-gradient(circle at 30% 20%,#14324a,#0a0f18);color:#fff;text-align:center"><div><div id="t-card-title" style="font-size:54px;font-weight:700;letter-spacing:.02em"></div><div id="t-card-sub" style="margin-top:14px;font-size:26px;color:#9fd6ff"></div></div></div>\`;
  document.body.appendChild(layer);
  const $ = (id) => layer.querySelector("#" + id);
  window.__tut = {
    move(x, y) { $("t-cursor").style.transform = "translate(" + (x - 5) + "px," + (y - 3) + "px)"; },
    ripple(x, y) { const r = $("t-ripple"); r.style.left = x + "px"; r.style.top = y + "px"; r.style.display = "block"; r.animate([{ transform: "scale(.4)", opacity: 1 }, { transform: "scale(1.6)", opacity: 0 }], { duration: 450 }).onfinish = () => (r.style.display = "none"); },
    spot(rect, pad) { const s = $("t-spot"); if (!rect) { s.style.display = "none"; return; } s.style.display = "block"; s.style.left = rect.left - pad + "px"; s.style.top = rect.top - pad + "px"; s.style.width = rect.w + 2 * pad + "px"; s.style.height = rect.h + 2 * pad + "px"; },
    note(text) { const n = $("t-note"); if (!text) { n.style.display = "none"; return; } n.textContent = text; n.style.display = "block"; },
    card(title, sub) { const c = $("t-card"); if (title === null) { c.style.display = "none"; return; } $("t-card-title").textContent = title; $("t-card-sub").textContent = sub || ""; c.style.display = "grid"; },
  };
  window.__tut.move(640, 360);
})()`;
