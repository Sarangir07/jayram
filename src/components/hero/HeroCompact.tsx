import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import Glyph, { type GlyphName } from "@/components/ui/Glyph";
import ServiceCard from "@/components/hero/ServiceCard";
import { COMPANY, HERO, SERVICES } from "@/data/site";
import { script } from "@/lib/fonts";

/**
 * Tablet and mobile hero — a vertical editorial composition rather than a
 * scaled-down desktop stage.
 *
 * The photograph is a taller, tighter crop of the same artwork so the engineer
 * stays large and nothing important sits under the type; the stat card rides on
 * the image, and the feature indicators become a 2 x 2 grid.
 */
export default function HeroCompact() {
  return (
    <div className="px-[var(--gutter)] pb-14 desk:hidden"
      style={{ paddingTop: "clamp(6.5rem, 17vw, 8.5rem)" }}>
      <div className="mx-auto grid max-w-[560px] gap-7 md:max-w-[900px] md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10">
        {/* ------------------------------------------------ copy ------- */}
        <div>
          <div className="a-rise flex items-center gap-4" style={{ animationDelay: "140ms" }}>
            <span className="u-eyebrow">{HERO.eyebrow}</span>
            <span aria-hidden className="h-px flex-1 bg-navy/25 md:hidden" />
          </div>

          <h1
            className="u-display a-rise mt-4"
            style={{ fontSize: "clamp(2.55rem,10.2vw,4.15rem)", animationDelay: "230ms" }}
          >
            <span className="block">{HERO.headline[0]}</span>
            <span className="block">{HERO.headline[1]}</span>
            <span className="u-display-gradient block">{HERO.headline[2]}</span>
          </h1>

          <p
            className="u-lede a-rise mt-5 max-w-[46ch] text-[clamp(0.98rem,3.7vw,1.1rem)]"
            style={{ animationDelay: "320ms" }}
          >
            {HERO.lede.map((part, i) =>
              part.bold ? (
                <strong key={i} className="font-bold text-navy">
                  {part.text}
                </strong>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </p>

          <div
            className="a-rise mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6"
            style={{ animationDelay: "410ms" }}
          >
            <Link
              href={HERO.primaryCta.href}
              className="group inline-flex h-[3.35rem] w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(180deg,#cf1319_0%,#a90a10_100%)] px-6 text-[0.92rem] font-bold whitespace-nowrap text-white shadow-[0_14px_30px_-14px_rgba(150,10,16,0.85)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-7 sm:text-[0.95rem]"
            >
              {HERO.primaryCta.label}
              <ArrowRight
                aria-hidden
                strokeWidth={2.4}
                className="size-[1.1em] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link href={HERO.secondaryCta.href} className="group inline-flex items-center justify-center gap-3.5 sm:justify-start">
              <span className="grid size-[3.1rem] shrink-0 place-items-center rounded-full bg-white shadow-[0_10px_24px_-10px_rgba(6,23,51,0.4)] ring-1 ring-navy/10 transition-transform duration-400 group-hover:scale-105">
                <Play aria-hidden fill="currentColor" strokeWidth={0} className="ml-0.5 size-[1.1rem] text-teal" />
              </span>
              <span className="text-[0.95rem] font-bold text-navy transition-colors duration-300 group-hover:text-blue">
                {HERO.secondaryCta.label}
              </span>
            </Link>
          </div>
        </div>

        {/* ----------------------------------------------- visual ------ */}
        <div className="a-plate relative" style={{ animationDelay: "180ms" }}>
          <div className="relative aspect-[6/7] overflow-hidden rounded-[26px] shadow-[0_34px_70px_-34px_rgba(6,23,51,0.6)] sm:aspect-[7/6] md:aspect-[6/7]">
            <Image
              src="/assets/jayam/hero/hero-mobile.jpg"
              alt="A JAYAM engineer reviewing drawings beside a landscaped resort pool in Dubai"
              fill
              priority
              sizes="(min-width: 768px) 44vw, 92vw"
              className="object-cover object-[68%_42%]"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(178deg,rgba(4,20,40,0)_44%,rgba(4,20,40,0.62)_100%)]"
            />

            {/* the brush line, kept as a brand mark on the image */}
            <span
              className={`${script.className} absolute top-4 right-5 text-right text-[clamp(1.4rem,5vw,1.85rem)] leading-[1.15] text-white/92 drop-shadow-[0_2px_10px_rgba(0,25,50,0.5)]`}
            >
              <span className="block">{COMPANY.taglines.script[0]}</span>
              <span className="block">{COMPANY.taglines.script[1]}</span>
            </span>

            {/* stat card */}
            <Link
              href="/projects"
              className="u-glass absolute right-4 bottom-4 left-4 flex items-center gap-4 rounded-2xl px-4 py-3.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Glyph name="building" strokeWidth={1.3} className="size-9 shrink-0 text-white" />
              <div className="flex-1">
                <p className="text-[1.35rem] leading-none font-extrabold tracking-[-0.02em] text-white">
                  {HERO.stat.value}
                </p>
                <p className="mt-1.5 text-[0.6rem] leading-[1.35] font-semibold tracking-[0.15em] text-white/88 uppercase">
                  <span className="block">{HERO.stat.line1}</span>
                  <span className="block">{HERO.stat.line2}</span>
                </p>
              </div>
              <ArrowRight aria-hidden strokeWidth={1.8} className="size-5 shrink-0 text-white/80" />
            </Link>
          </div>
        </div>

        {/* --------------------------------------------- features ------ */}
        <ul
          className="a-rise grid grid-cols-2 gap-x-4 gap-y-6 border-t border-navy/10 pt-7 sm:grid-cols-4 md:col-span-2"
          style={{ animationDelay: "520ms" }}
        >
          {HERO.features.map((feature) => (
            <li key={feature.label.join(" ")} className="flex items-center gap-3">
              <Glyph
                name={feature.icon as GlyphName}
                strokeWidth={1.45}
                className="size-7 shrink-0 text-navy"
              />
              <span className="text-[0.66rem] leading-[1.35] font-bold tracking-[0.1em] text-[#243c54] uppercase">
                {feature.label.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>

        {/* -------------------------------------------- strapline ------ */}
        <div className="a-rise md:col-span-2" style={{ animationDelay: "600ms" }}>
          <span aria-hidden className="u-rule" />
          <p className="mt-4 text-[0.68rem] leading-[1.85] font-semibold tracking-[0.3em] text-navy/85 uppercase">
            {COMPANY.taglines.lower.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        <ul className="grid gap-2.5 md:col-span-2 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <li key={service.slug}>
              <ServiceCard service={service} index={i} layout="stack" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
