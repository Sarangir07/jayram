import Image from "next/image";

import { COMPANY } from "@/data/site";
import { script } from "@/lib/fonts";

/**
 * The hero's photographic composition, layered back to front:
 *
 *   1  atmosphere .................. CSS gradient on the section (u-hero-sky)
 *   2  decorative sweep ............ SVG arcs
 *   3  main plate ................... skyline, pool, planting, the J form,
 *                                     the engineer and the wall
 *   4  vertical tagline ............ real text
 *   5  script tagline .............. real text
 *   6  foreground planting ......... defocused band across the full width
 *
 * Layers 3 and 6 are cut from the supplied artwork with their baked-in
 * lettering removed, so every word on screen is live text.
 */
export default function HeroVisual() {
  return (
    <>
      {/* 2 — the thin arcs that sweep out of the J */}
      <svg
        aria-hidden
        viewBox="0 0 1536 1024"
        className="a-fade pointer-events-none absolute inset-0 h-full w-full"
        style={{ animationDelay: "700ms", animationDuration: "1600ms" }}
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M470 96C470 96 519 372 640 536"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.4"
        />
        <path
          d="M506 96C506 96 548 388 676 556"
          stroke="rgba(255,255,255,0.34)"
          strokeWidth="1.2"
        />
      </svg>

      {/* 3 — main photographic plate */}
      <div
        className="a-plate absolute"
        style={{
          left: "calc(452 * var(--s))",
          top: "calc(96 * var(--s))",
          width: "calc(780 * var(--s))",
          height: "calc(928 * var(--s))",
          animationDelay: "120ms",
        }}
      >
        <Image
          src="/assets/jayam/hero/hero-main-visual.png"
          alt="A JAYAM engineer reviewing drawings beside a landscaped resort pool, with the Dubai skyline beyond"
          fill
          priority
          sizes="(min-width: 1200px) 62vw, 100vw"
          className="object-contain object-left-top"
        />
      </div>

      {/* 4 — the stacked line beside the J */}
      <p
        className="a-rise absolute font-semibold text-navy/85 uppercase"
        style={{
          left: "calc(585 * var(--s))",
          top: "calc(327 * var(--s))",
          fontSize: "calc(11.4 * var(--s))",
          lineHeight: "calc(21 * var(--s))",
          letterSpacing: "0.475em",
          animationDelay: "820ms",
        }}
      >
        {COMPANY.taglines.vertical.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        <span
          aria-hidden
          className="mt-[calc(14*var(--s))] block bg-red"
          style={{ width: "calc(56 * var(--s))", height: "calc(2.5 * var(--s))" }}
        />
      </p>

      {/* 5 — the brush-script line */}
      <p
        className={`${script.className} a-fade absolute text-blue/90 select-none`}
        style={{
          left: "calc(978 * var(--s))",
          top: "calc(108 * var(--s))",
          width: "calc(268 * var(--s))",
          fontSize: "calc(51 * var(--s))",
          lineHeight: "calc(56 * var(--s))",
          transform: "rotate(-12.8deg)",
          transformOrigin: "left top",
          animationDelay: "980ms",
          animationDuration: "1500ms",
        }}
      >
        <span className="block">Building</span>
        <span className="block" style={{ paddingLeft: "calc(14 * var(--s))" }}>
          Comfort
        </span>
        <span className="block" style={{ paddingLeft: "calc(22 * var(--s))" }}>
          Enhancing
        </span>
        <span className="block" style={{ paddingLeft: "calc(56 * var(--s))" }}>
          Lives
        </span>
      </p>

      {/* 6 — defocused foreground planting */}
      <div
        className="a-fade pointer-events-none absolute"
        style={{
          left: 0,
          top: "calc(700 * var(--s))",
          width: "calc(1536 * var(--s))",
          height: "calc(324 * var(--s))",
          animationDelay: "420ms",
          animationDuration: "1400ms",
        }}
      >
        <Image
          src="/assets/jayam/hero/hero-foreground-plants.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>
    </>
  );
}
