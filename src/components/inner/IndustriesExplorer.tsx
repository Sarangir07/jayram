"use client";

import { useState } from "react";

import FrameImage from "@/components/ui/FrameImage";
import { INDUSTRIES } from "@/data/inner";

export default function IndustriesExplorer() {
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active];

  return (
    <section className="bg-white">
      <div className="u-container py-[clamp(3.5rem,7vw,7rem)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <ol>
            {INDUSTRIES.map((item, i) => {
              const on = i === active;
              return (
                <li key={item.title} className="border-b border-navy/12 first:border-t">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="flex w-full items-baseline gap-5 py-5 text-left"
                  >
                    <span className={`text-[0.68rem] font-bold tracking-[0.16em] ${on ? "text-red" : "text-navy/30"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className={`block text-[clamp(1.15rem,2vw,1.7rem)] font-extrabold tracking-[-0.03em] ${on ? "text-navy" : "text-navy/40"}`}>
                        {item.title}
                      </span>
                      {on && (
                        <span className="mt-2 block max-w-[36rem] text-[0.92rem] leading-relaxed text-muted lg:hidden">
                          {item.body}
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="hidden lg:block">
            <div data-cursor="View" className="relative min-h-[28rem] overflow-hidden lg:sticky lg:top-28 lg:h-[min(70vh,38rem)]">
              {INDUSTRIES.map((item, i) => (
                <div
                  key={item.title}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
                >
                  <FrameImage src={item.image} alt="" sizes="48vw" />
                </div>
              ))}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,23,51,0)_40%,rgba(6,23,51,0.7)_100%)]" />
              <p className="absolute right-6 bottom-6 left-6 max-w-[34rem] text-[0.95rem] leading-relaxed text-white/85">
                {current.body}
              </p>
            </div>
            <p className="mt-3 text-[0.62rem] tracking-[0.2em] text-muted uppercase">
              Contextual photography — not a JAYAM project photograph.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
