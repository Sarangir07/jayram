/**
 * Report real layout rects from the running dev server.
 *   node design/probe.mjs [width] [height]
 *
 * Pixel-probing a screenshot cannot tell a font-metric difference from a
 * layout offset; this can.
 */
import { chromium } from "playwright";

const W = Number(process.argv[2] ?? 1536);
const H = Number(process.argv[3] ?? 1024);

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({
  viewport: { width: W, height: H },
  deviceScaleFactor: 1,
  reducedMotion: "reduce",
});
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

const data = await page.evaluate(() => {
  const pick = (label, sel) => {
    const el = document.querySelector(sel);
    if (!el) return { label, missing: true };
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      label,
      x: +r.x.toFixed(1),
      y: +r.y.toFixed(1),
      w: +r.width.toFixed(1),
      h: +r.height.toFixed(1),
      font: cs.fontFamily.split(",")[0],
      size: cs.fontSize,
    };
  };
  return {
    viewport: { w: innerWidth, h: innerHeight, docW: document.documentElement.clientWidth },
    s: getComputedStyle(document.documentElement).getPropertyValue("--s"),
    scrollW: document.documentElement.scrollWidth,
    rows: [
      pick("stage", "section#home > div:first-child"),
      pick("h1", "section#home h1"),
      pick("lede", "section#home h1 + p"),
      pick("header inner", "header > div"),
      pick("logo link", "header a[aria-label]"),
      pick("nav ul", "header nav ul"),
      pick("service rail", "section#home ul.absolute"),
    ],
  };
});

console.log(JSON.stringify(data, null, 2));
await browser.close();
