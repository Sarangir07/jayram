import { ArrowDown } from "lucide-react";

import { HERO_STATS } from "@/data/projects";

/**
 * Archive opener. Typography only — no photograph — so the register below is
 * the first visual the reader meets.
 */
export default function ArchiveHero() {
  return (
    <header className="relative isolate overflow-hidden bg-navy text-white">
      <div aria-hidden className="u-eng-grid absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_70%_at_100%_0%,rgba(29,111,165,0.28)_0%,rgba(29,111,165,0)_60%)]"
      />

      <div className="u-container relative flex min-h-[88svh] flex-col justify-between pt-32 pb-8 lg:pt-40 lg:pb-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="a-rise flex items-center gap-3 text-[0.66rem] font-bold tracking-[0.34em] text-white/70 uppercase">
              <span aria-hidden className="h-px w-8 bg-red" />
              Project Archive
            </p>
            <h1
              className="a-rise mt-8 text-[clamp(3rem,9vw,8.4rem)] leading-[0.9] font-black tracking-[-0.05em] uppercase"
              style={{ animationDelay: "90ms" }}
            >
              <span className="block">Projects</span>
              <span className="block">That Speak</span>
              <span className="block text-blue-200">Through Delivery.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:self-end">
            <p
              className="a-rise max-w-[30rem] text-[clamp(1rem,1.15vw,1.12rem)] leading-relaxed text-white/72"
              style={{ animationDelay: "180ms" }}
            >
              Every completed site from 2022 to 2026 — MEP fit-out, electrical, plumbing,
              landscaping, swimming pools and technical services throughout the UAE.
            </p>
          </div>
        </div>

        <dl
          className="a-rise mt-16 grid grid-cols-2 gap-y-10 border-t border-white/15 pt-8 lg:mt-20 lg:grid-cols-4 lg:gap-x-8"
          style={{ animationDelay: "270ms" }}
        >
          {HERO_STATS.map((s, i) => (
            <div key={s.label} className="lg:border-l lg:border-white/12 lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
              <dd className="text-[clamp(2.4rem,4.2vw,4rem)] leading-none font-black tracking-[-0.04em] text-white tabular-nums">
                {s.value}
              </dd>
              <dt className="mt-3 flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.26em] text-white/55 uppercase">
                <span className="text-red">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </dt>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex items-center justify-between border-t border-white/12 pt-5 lg:mt-14">
          <a
            href="#register"
            className="group inline-flex items-center gap-3 text-[0.62rem] font-bold tracking-[0.3em] text-white/70 uppercase transition-colors hover:text-white"
          >
            Scroll to explore
            <ArrowDown aria-hidden className="a-scroll-dot size-3.5" strokeWidth={2.2} />
          </a>
          <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-white/45 uppercase">
            Project Register <span aria-hidden className="mx-2 text-red">/</span>
            <span className="hidden sm:inline">Dubai, UAE</span>
            <span className="sm:hidden">UAE</span>
          </p>
        </div>
      </div>
    </header>
  );
}
