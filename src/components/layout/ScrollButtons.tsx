"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SHOW_AFTER = 320;
const BOTTOM_SLACK = 24;

function scrollTo(top: number) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
}

export default function ScrollButtons() {
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      setCanScrollUp(y > SHOW_AFTER);
      setCanScrollDown(maxY - y > BOTTOM_SLACK);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const buttons = [
    {
      label: "Scroll to top",
      visible: canScrollUp,
      icon: <ChevronUp className="size-5" strokeWidth={2.4} />,
      onClick: () => scrollTo(0),
    },
    {
      label: "Scroll to bottom",
      visible: canScrollDown,
      icon: <ChevronDown className="size-5" strokeWidth={2.4} />,
      onClick: () => scrollTo(document.documentElement.scrollHeight),
    },
  ];

  return (
    <div className="pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-3 z-[70] lg:right-4 lg:bottom-6 lg:left-auto">
      <div className="pointer-events-auto flex flex-col gap-2.5">
        {buttons.map((button) => (
          <button
            key={button.label}
            type="button"
            aria-label={button.label}
            title={button.label}
            tabIndex={button.visible ? 0 : -1}
            aria-hidden={!button.visible}
            onClick={button.onClick}
            className={`flex size-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-[0_12px_28px_-12px_rgba(6,23,51,0.55)] transition-[opacity,transform,background-color,color] duration-300 hover:bg-navy hover:text-white sm:size-12 ${
              button.visible
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-2 opacity-0"
            }`}
          >
            {button.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
