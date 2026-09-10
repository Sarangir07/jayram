"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import FrameImage from "@/components/ui/FrameImage";
import { CAPABILITIES } from "@/data/inner";

export default function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const current = CAPABILITIES[active];

  return (
    <section className="u-deep relative text-white">
      <div className="u-eng-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="u-container relative py-[clamp(3.5rem,7vw,7rem)]">
        <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">
          Capabilities explorer
        </p>
        <h2 className="u-display mt-4 max-w-[16ch] text-[clamp(1.8rem,3.4vw,3.2rem)] text-white">
          Technical solutions built around your property.
        </h2>

        <div className="mt-12 hidden gap-14 lg:grid lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <ol className="lg:sticky lg:top-32 lg:self-start">
            {CAPABILITIES.map((item, i) => {
              const on = i === active;
              return (
                <li key={item.slug} className="border-b border-white/12 first:border-t">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="flex w-full items-baseline gap-4 py-4 text-left"
                  >
                    <span className={`w-8 text-[0.68rem] font-bold tracking-[0.14em] ${on ? "text-red-bright" : "text-white/30"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-[1.02rem] font-extrabold tracking-[-0.02em] ${on ? "text-white" : "text-white/45"}`}>
                      {item.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="min-h-[36rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div data-cursor="Explore" className="relative aspect-[16/10] overflow-hidden">
                  <FrameImage src={current.image} alt="" sizes="52vw" />
                </div>
                <p className="mt-6 text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">
                  {String(active + 1).padStart(2, "0")} / {String(CAPABILITIES.length).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[clamp(1.6rem,2.4vw,2.4rem)] font-extrabold tracking-[-0.03em]">
                  {current.title}
                </h3>
                <p className="mt-2 text-[0.92rem] text-blue-200">{current.kicker}</p>
                <p className="mt-5 max-w-[48rem] text-[0.98rem] leading-relaxed text-white/70">{current.body}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {current.points.map((p) => (
                    <li key={p} className="border-t border-white/10 pt-2 text-[0.88rem] text-white/75">
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex text-[0.72rem] font-bold tracking-[0.2em] text-white uppercase"
                >
                  Discuss this service →
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <ol className="mt-10 grid gap-10 lg:hidden">
          {CAPABILITIES.map((item, i) => (
            <li key={item.slug}>
              <p className="text-[0.62rem] font-bold tracking-[0.24em] text-red-bright uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-[1.45rem] font-extrabold tracking-[-0.03em]">{item.title}</h3>
              <div className="relative mt-4 aspect-[16/10] overflow-hidden">
                <FrameImage src={item.image} alt="" sizes="100vw" />
              </div>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/72">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
