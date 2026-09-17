"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const SHOW_AFTER = 320;

export default function ScrollButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setVisible(window.scrollY > SHOW_AFTER);
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

  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      title="Scroll to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      onClick={scrollToTop}
      className={`flex size-11 items-center justify-center rounded-full bg-navy text-white shadow-[0_12px_28px_-12px_rgba(6,23,51,0.55)] transition-[opacity,transform,background-color] duration-300 hover:-translate-x-0.5 hover:bg-navy-500 sm:size-12 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ChevronUp className="size-[1.15rem]" strokeWidth={2.2} />
    </button>
  );
}
