/**
 * Deterministic screenshots of the running dev server.
 *   node design/shoot.mjs <out.png> [width] [height] [path] [--full]
 *
 * Waits for network idle and for webfonts to be ready, and forces reduced
 * motion, so a capture is comparable with the reference artwork rather than
 * catching a mid-animation frame or fallback font metrics.
 */
import { chromium } from "playwright";

const args = process.argv.slice(2);
const full = args.includes("--full");
const [out, w = "1536", h = "1024", path = "/"] = args.filter((a) => !a.startsWith("--"));

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({
  viewport: { width: Number(w), height: Number(h) },
  deviceScaleFactor: 1,
  reducedMotion: "reduce",
});

await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
// let any lazy images below the fold decode
if (full) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(500);
}

await page.screenshot({ path: out, fullPage: full, animations: "disabled" });
console.log(`shot ${out} ${w}x${h}${full ? " (full page)" : ""}`);
await browser.close();
