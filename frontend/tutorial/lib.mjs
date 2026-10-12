// Shared helpers of the tutorial recorder: a static server for the repository, a headless Chrome, and shadow-DOM aware finders.
import { createServer } from "node:http";
import { existsSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

export const root = resolve(import.meta.dirname, "..", "..");
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json", ".svg": "image/svg+xml" };

export async function serve() {
  const server = createServer((req, res) => {
    const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
    const file = join(root, path);
    if (!file.startsWith(root) || !existsSync(file)) return void res.writeHead(404).end();
    res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
  });
  await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
  return { server, base: `http://127.0.0.1:${server.address().port}` };
}

export async function launch(width = 1280, height = 720) {
  const exe = [process.env.CHROME_PATH, "/usr/bin/chromium", "/usr/bin/google-chrome", `${process.env.HOME}/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome`].filter(Boolean).find((p) => existsSync(p));
  const args = ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", ...(process.getuid?.() === 0 ? ["--no-sandbox"] : [])];
  const browser = await puppeteer.launch({ executablePath: exe, headless: true, args });
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  return { browser, page };
}

/** Runs code in the page with a deep finder (through shadow roots) at hand: find(text) → button, findAll(selector) → elements. */
export const DEEP = `
  const deep = (root, visit) => { for (const el of root.querySelectorAll("*")) { visit(el); if (el.shadowRoot) deep(el.shadowRoot, visit); } };
  const all = (selector) => { const out = []; const walk = (root) => { out.push(...root.querySelectorAll(selector)); for (const el of root.querySelectorAll("*")) if (el.shadowRoot) walk(el.shadowRoot); }; walk(document); return out; };
  const visible = (el) => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== "hidden"; };
  const textOf = (el) => (el.textContent || "").replace(/\\s+/g, " ").trim();
`;
