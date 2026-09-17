"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import mark from "@/../public/assets/jayam/logo/jayam-mark.png";
import { COMPANY, HERO } from "@/data/site";

/**
 * Site opener: a short, once-per-session brand intro built from the framed
 * J mark ("Jayam Logo Corrected Final-04") and the copy already on the site.
 *
 * Timeline (ms) — every step is a CSS animation keyed off these delays, so
 * the sequence stays in sync and costs nothing on the main thread:
 *   0      stage on, hairline grid drifts in
 *   150    red frame draws itself
 *   650    J mark floods up inside the frame
 *   1150   JAYAM letters rise, TECHNICAL SERVICES LLC tracks in
 *   1700   strapline, then the two content lines swap through
 *   0-3700 progress line fills
 *   3800   stage wipes upward, hero entrances resume
 *
 * The <html data-opener> flag is set by an inline script before first paint,
 * so returning visitors never see a flash of the stage, and while it is set
 * the hero's own entrance animations are paused (see globals.css) so the page
 * arrives cleanly once the wipe has finished.
 */

const HOLD = 3800;
const WIPE = 1100;
const STORAGE_KEY = "jayam-opener";

const BOOT = `(function(){try{if(!sessionStorage.getItem("${STORAGE_KEY}")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.setAttribute("data-opener","playing")}}catch(e){}})();`;

const LINES: string[] = [
  COMPANY.strapline,
  "MEP · Landscaping · Facility Solutions",
  `${HERO.stat.value} ${HERO.stat.line1} ${HERO.stat.line2}`,
];

export default function Opener() {
  const [phase, setPhase] = useState<"playing" | "leaving" | "done">("playing");
  const leaveTimer = useRef<number | null>(null);

  const finish = useCallback(() => {
    if (leaveTimer.current !== null) window.clearTimeout(leaveTimer.current);
    setPhase("done");
    document.documentElement.removeAttribute("data-opener");
    document.documentElement.style.removeProperty("overflow");
  }, []);

  const leave = useCallback(() => {
    setPhase((p) => {
      if (p !== "playing") return p;
      document.documentElement.setAttribute("data-opener", "leaving");
      leaveTimer.current = window.setTimeout(finish, WIPE);
      return "leaving";
    });
  }, [finish]);

  useEffect(() => {
    // Not playing this session: the stage is display:none via CSS, nothing to run.
    if (document.documentElement.getAttribute("data-opener") !== "playing") return;
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    document.documentElement.style.overflow = "hidden";

    const hold = window.setTimeout(leave, HOLD);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") leave();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(hold);
      if (leaveTimer.current !== null) window.clearTimeout(leaveTimer.current);
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.removeProperty("overflow");
    };
  }, [leave]);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: BOOT }} suppressHydrationWarning />
      {phase !== "done" && (
        <div
          className={`op-stage ${phase === "leaving" ? "op-leave" : ""}`}
          role="dialog"
          aria-label={`${COMPANY.name} — intro`}
          onClick={leave}
          suppressHydrationWarning
        >
          <div className="op-grid" aria-hidden />
          <div className="op-glow" aria-hidden />

          <div className="op-body">
            <div className="op-mark">
              {/* Red frame, drawn as a stroke just ahead of the artwork's own frame */}
              <svg className="op-frame" viewBox="0 0 1053 1343" aria-hidden>
                <rect x="20" y="20" width="1013" height="1303" pathLength={1} />
              </svg>
              <Image
                src={mark}
                alt=""
                aria-hidden
                priority
                sizes="(max-width: 640px) 34vw, 220px"
                className="op-j"
              />
            </div>

            <div className="op-text">
              <div className="op-word" aria-label={COMPANY.shortName}>
                {COMPANY.shortName.split("").map((ch, i) => (
                  <span key={i} aria-hidden style={{ animationDelay: `${1150 + i * 70}ms` }}>
                    {ch}
                  </span>
                ))}
              </div>
              <div className="op-sub">Technical Services LLC</div>
              <div className="op-lines">
                {LINES.map((line, i) => (
                  <span
                    key={line}
                    className="op-line"
                    style={{ animationDelay: `${1700 + i * 750}ms` }}
                  >
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="op-foot" aria-hidden>
            <span>{COMPANY.location}</span>
            <span className="op-bar">
              <span className="op-bar-fill" style={{ animationDuration: `${HOLD - 100}ms` }} />
            </span>
            <span>Skip</span>
          </div>
        </div>
      )}
    </>
  );
}
