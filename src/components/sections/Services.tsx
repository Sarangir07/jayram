import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Glyph, { type GlyphName } from "@/components/ui/Glyph";
import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="relative bg-[#f3f7fb]">
      <div className="u-container py-[clamp(3.5rem,6.5vw,6.5rem)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="text-[0.72rem] font-bold tracking-[0.28em] text-teal uppercase">
              Our Expertise
            </p>
            <h2 className="mt-3 max-w-[16ch] text-[clamp(1.85rem,3.6vw,3.15rem)] font-extrabold tracking-[-0.035em] text-navy">
              Complete Solutions
              <span className="block">
                Under <span className="text-blue">One Vision</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={80} className="max-w-[28rem]">
            <p className="text-[0.95rem] leading-relaxed text-muted">
              Eight technical systems for inspiring spaces, delivered as one
              accountable MEP, landscape and facility practice.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-[0.78rem] font-bold tracking-[0.04em] text-navy transition-colors hover:border-blue hover:text-blue"
            >
              View All Services
              <ArrowRight aria-hidden className="size-4" strokeWidth={2.2} />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, i) => (
            <li key={service.slug}>
              <Reveal delay={i * 50}>
                <article className="group h-full overflow-hidden rounded-[1.65rem] bg-[#123044] p-3.5 shadow-[0_18px_40px_-24px_rgba(6,23,51,0.55)] transition-transform duration-500 ease-[var(--ease-out-quint)] hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.15rem]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1280px) 22vw, (min-width: 640px) 44vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-105"
                    />
                  </div>
                  <div className="px-3 pt-4 pb-4">
                    <Glyph
                      name={service.icon as GlyphName}
                      strokeWidth={1.5}
                      className="size-7 text-blue-200"
                    />
                    <h3 className="mt-3 text-[1.02rem] font-bold tracking-[-0.02em] text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[0.8rem] leading-relaxed text-white/60">
                      {service.blurb}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
