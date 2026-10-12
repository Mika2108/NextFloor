import { launch, serve, DEEP } from "./lib.mjs";
const { server, base } = await serve();
const { browser, page } = await launch(1280, 720);
await page.evaluateOnNewDocument(() => localStorage.clear());
await page.goto(`${base}/preview/index.html?${process.env.QUERY ?? "empty"}&noshowcase&lang=en&ha=dark`, { waitUntil: "networkidle0", timeout: 120000 });
await new Promise((r) => setTimeout(r, 1500));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const click = (text) => page.evaluate(`(() => { ${DEEP} const el = all("button, summary").filter(visible).find((e) => textOf(e) === ${JSON.stringify(text)} || textOf(e).startsWith(${JSON.stringify(text)})); if (el) el.click(); return !!el; })()`);
const dump = (name) => page.evaluate(`(() => { ${DEEP} return all("button, select, input, summary, label, h3").filter(visible).map((el) => el.tagName.toLowerCase() + ":" + (textOf(el).slice(0,50) || el.getAttribute("aria-label") || el.title || el.placeholder || el.type)); })()`);
for (const step of (process.env.STEPS ?? "Open editor").split("|")) {
  if (step.startsWith("@")) { // @x,y click at coordinates; @drag x1,y1,x2,y2
    const [kind, rest] = step.slice(1).split(" ");
    const n = rest.split(",").map(Number);
    if (kind === "click") await page.mouse.click(n[0], n[1]);
    if (kind === "wheel") { await page.mouse.move(n[0], n[1]); await page.mouse.wheel({ deltaY: n[2] }); }
    if (kind === "key") await page.keyboard.press(rest);
    if (kind === "drag") { await page.mouse.move(n[0], n[1]); await page.mouse.down(); for (let i = 1; i <= 12; i++) { await page.mouse.move(n[0] + ((n[2] - n[0]) * i) / 12, n[1] + ((n[3] - n[1]) * i) / 12); await wait(30); } await page.mouse.up(); }
  } else console.log("click", step, await click(step));
  await wait(900);
}
await page.screenshot({ path: "/tmp/tut-x.png" });
console.log((await dump()).join("\n"));
await browser.close(); server.close();
