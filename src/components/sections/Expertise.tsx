"use client";

import { useState } from "react";

import FrameImage from "@/components/ui/FrameImage";
import Reveal from "@/components/ui/Reveal";
import { EXPERTISE } from "@/data/site";

export default function Expertise() {
  const [active, setActive] = useState(0);
  const current = EXPERTISE[active];

  return (
    <section id="expertise" className="relative overflow-hidden bg-navy text-white">
      <div className="u-eng-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="u-container relative py-[clamp(4.5rem,8vw,8.5rem)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">
              Sec 04 — Index
            </p>
            <Reveal>
              <h2 className="u-display mt-6 text-[clamp(2.15rem,4.2vw,4rem)] text-white">
                Areas of
                <span className="block text-blue-200">expertise.</span>
              </h2>
            </Reveal>
          </div>
          <p className="max-w-[22rem] text-[0.92rem] leading-relaxed text-white/65">
            An architectural index of the trades we carry — landscape, water,
            interiors and electro-mechanical systems.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[28rem] lg:sticky lg:top-28 lg:h-[min(70vh,38rem)]">
            {EXPERTISE.map((item, i) => (
              <div
                key={item.title}
                className={`absolute inset-0 transition-opacity duration-700 ease-[var(--ease-out-quint)] ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              >
                <FrameImage
                  src={item.image}
                  alt={item.title}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,23,51,0)_30%,rgba(6,23,51,0.72)_100%)]" />
            <div className="absolute right-5 bottom-5 left-5">
              <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">
                {String(active + 1).padStart(2, "0")} / {String(EXPERTISE.length).padStart(2, "0")}
              </p>
              <p className="mt-2 text-[1.35rem] font-extrabold tracking-[-0.03em]">{current.title}</p>
            </div>
          </div>

          <ol>
            {EXPERTISE.map((item, i) => {
              const on = i === active;
              return (
                <li key={item.title} className="border-b border-white/12 first:border-t">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="grid w-full grid-cols-[3.2rem_1fr] gap-4 py-5 text-left sm:grid-cols-[4.2rem_1fr_minmax(0,16rem)] sm:items-baseline"
                  >
                    <span className={`font-bold tracking-[0.14em] ${on ? "text-red-bright" : "text-white/35"}`} style={{ fontSize: "0.72rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-[clamp(1.02rem,1.4vw,1.28rem)] font-extrabold tracking-[-0.02em] transition-colors duration-400 ${on ? "text-white" : "text-white/55"}`}>
                      {item.title}
                    </span>
                    <span className={`col-span-2 hidden text-[0.86rem] leading-relaxed text-white/55 sm:col-span-1 sm:block ${on ? "opacity-100" : "opacity-0"}`}>
                      {item.detail}
                    </span>
                    {on && (
                      <span className="col-span-2 text-[0.9rem] leading-relaxed text-white/70 sm:hidden">
                        {item.detail}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
