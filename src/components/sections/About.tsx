import Link from "next/link";
import { ArrowRight, Eye, Flag, Target } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { COMPANY, HERO, PILLARS } from "@/data/site";
import { script } from "@/lib/fonts";

const pillarIcons = [Eye, Target, Flag];

const STATS = [
  { value: HERO.stat.value, label: "Projects Across UAE" },
  { value: String(COMPANY.established), label: "Established in Dubai" },
  { value: "MEP+", label: "Landscape & Facility" },
  { value: "Long-Term", label: "Partnerships" },
] as const;

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="u-container py-[clamp(3.5rem,6.5vw,6.75rem)]">
        <p className="text-[0.72rem] font-bold tracking-[0.28em] text-teal uppercase">
          About Jayam
        </p>

        <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          <div>
            <Reveal>
              <h2 className="max-w-[12ch] text-[clamp(2.1rem,4.4vw,3.6rem)] font-extrabold tracking-[-0.04em] text-navy">
                Building
                <span className="block">More Than</span>
                <span className="block text-blue">Facilities</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-[36rem] text-[0.98rem] leading-[1.7] text-muted">
                {COMPANY.name} was established in {COMPANY.established} in the
                UAE. We deliver complete MEP, landscaping and facility solutions
                with quality, reliability and a commitment to a better tomorrow.
              </p>
              <Link
                href="/projects"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(180deg,#cf1319_0%,#ab0b10_100%)] px-6 py-3 text-[0.82rem] font-bold text-white shadow-[0_12px_28px_-14px_rgba(176,13,18,0.8)] transition-transform hover:-translate-y-0.5"
              >
                See More
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>

            <div
              aria-hidden
              className="mt-2 select-none font-black tracking-[-0.08em] text-transparent"
              style={{
                fontSize: "clamp(11rem, 26vw, 20rem)",
                lineHeight: 0.82,
                backgroundImage: "url(/assets/jayam/hero/still-landscape.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              J
            </div>
          </div>

          <div className="relative lg:pt-4">
            <p
              className={`${script.className} pointer-events-none absolute -top-2 right-0 hidden text-[1.65rem] leading-tight text-blue/80 lg:block`}
            >
              The expertise
              <span className="block">your future</span>
              <span className="block">facility needs</span>
            </p>

            <ul className="mt-8 grid gap-4">
              {PILLARS.map((pillar, i) => {
                const Icon = pillarIcons[i];
                return (
                  <Reveal key={pillar.key} delay={i * 80}>
                    <li className="flex gap-4 rounded-[1.35rem] border border-navy/8 bg-[#f4f8fb] p-5 shadow-[0_10px_30px_-22px_rgba(6,23,51,0.35)]">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-teal shadow-sm">
                        <Icon aria-hidden className="size-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <h3 className="text-[1.02rem] font-extrabold text-navy">Our {pillar.key}</h3>
                        <p className="mt-1.5 text-[0.86rem] leading-relaxed text-muted">{pillar.body}</p>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative mt-2 min-h-[14rem] overflow-hidden sm:min-h-[18rem]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/jayam/editorial/soft-landscape.jpg)" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(6,23,51,0.45)_100%)]" />
        <p className="absolute right-6 bottom-24 hidden text-right text-[0.62rem] font-bold tracking-[0.28em] text-white/85 uppercase sm:block">
          People
          <span className="block">Spaces</span>
          <span className="block">A Better</span>
          <span className="block">Tomorrow</span>
        </p>

        <div className="u-container relative py-8">
          <div className="grid grid-cols-2 gap-3 rounded-[1.5rem] bg-white/92 p-4 shadow-[0_20px_50px_-24px_rgba(6,23,51,0.45)] backdrop-blur-md sm:grid-cols-4 sm:gap-0 sm:p-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-3 py-2 text-center sm:py-1">
                <p className="text-[clamp(1.45rem,2.4vw,2.1rem)] font-extrabold tracking-[-0.04em] text-navy">
                  {stat.value}
                </p>
                <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.04em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
