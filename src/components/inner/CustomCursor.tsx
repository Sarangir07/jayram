"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -80, y: -80 });
  const [label, setLabel] = useState("");
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || motion) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = (e.target as HTMLElement | null)?.closest("[data-cursor]");
      setLabel(t?.getAttribute("data-cursor") ?? "");
      setOn(Boolean(t));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[120] hidden mix-blend-difference lg:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <span
        className={`grid place-items-center rounded-full border border-white/70 text-[0.58rem] font-bold tracking-[0.18em] text-white uppercase ${
          on ? "h-16 w-16 bg-white/10" : "h-3 w-3 bg-white"
        }`}
      >
        {on ? label : ""}
      </span>
    </div>
  );
}
