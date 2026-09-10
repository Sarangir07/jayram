import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

import Glyph, { type GlyphName } from "@/components/ui/Glyph";
import HeroVisual from "@/components/hero/HeroVisual";
import ServiceCard from "@/components/hero/ServiceCard";
import { COMPANY, HERO, SERVICES } from "@/data/site";

/**
 * The desktop hero, reconstructed on the artwork's own 1536 x 1024 grid.
 *
 * Every measurement below is the reference pixel value multiplied by `--s`
 * (one reference pixel expressed in CSS pixels — see globals.css), so the whole
 * composition holds its proportions exactly at any desktop width instead of
 * drifting element by element. Below 1200px this is replaced wholesale by
 * HeroCompact, which is a different composition rather than a shrunken one.
 */
export default function HeroDesktop() {
  const u = (n: number) => `calc(${n} * var(--s))`;

  return (
    <div
      className="relative mx-auto hidden desk:block"
      style={{ width: u(1536), height: u(1024) }}
    >
      <HeroVisual />

      {/* ------------------------------------------------ left column ---- */}

      {/* eyebrow + rule */}
      <div
        className="a-rise absolute flex items-center"
        style={{ left: u(54), top: u(188), gap: u(20), animationDelay: "180ms" }}
      >
        <span
          className="font-semibold text-navy uppercase"
          style={{ fontSize: u(11.6), letterSpacing: "0.355em" }}
        >
          {HERO.eyebrow}
        </span>
        <span
          aria-hidden
          className="block bg-navy/45"
          style={{ width: u(68), height: u(1.4) }}
        />
      </div>

      <h1
        className="u-display a-rise absolute"
        style={{
          left: u(51),
          top: u(218),
          fontSize: u(76.4),
          lineHeight: u(72.4),
          animationDelay: "280ms",
        }}
      >
        <span className="block">{HERO.headline[0]}</span>
        <span className="block">{HERO.headline[1]}</span>
        <span className="u-display-gradient block">{HERO.headline[2]}</span>
      </h1>

      <p
        className="u-lede a-rise absolute"
        style={{
          left: u(54),
          top: u(449),
          width: u(444),
          fontSize: u(16.9),
          lineHeight: u(24.2),
          animationDelay: "380ms",
        }}
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

      {/* CTAs */}
      <div
        className="a-rise absolute flex items-center"
        style={{ left: u(54), top: u(543), gap: u(29), animationDelay: "470ms" }}
      >
        <Link
          href={HERO.primaryCta.href}
          className="group inline-flex items-center justify-center rounded-full bg-[linear-gradient(180deg,#cf1319_0%,#a90a10_100%)] font-bold text-white shadow-[0_calc(14*var(--s))_calc(30*var(--s))_calc(-14*var(--s))_rgba(150,10,16,0.85)] transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-quint)] hover:-translate-y-0.5 hover:shadow-[0_calc(20*var(--s))_calc(40*var(--s))_calc(-14*var(--s))_rgba(150,10,16,0.95)]"
          style={{
            width: u(246),
            height: u(55),
            fontSize: u(15.4),
            gap: u(13),
          }}
        >
          {HERO.primaryCta.label}
          <ArrowRight
            aria-hidden
            strokeWidth={2.4}
            style={{ width: u(17), height: u(17) }}
            className="transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:translate-x-[calc(4*var(--s))]"
          />
        </Link>

        <Link
          href={HERO.secondaryCta.href}
          className="group inline-flex items-center"
          style={{ gap: u(14) }}
        >
          <span
            className="grid shrink-0 place-items-center rounded-full bg-white shadow-[0_calc(10*var(--s))_calc(24*var(--s))_calc(-10*var(--s))_rgba(6,23,51,0.4)] ring-1 ring-navy/10 transition-transform duration-400 ease-[var(--ease-out-quint)] group-hover:scale-[1.07]"
            style={{ width: u(54), height: u(54) }}
          >
            <Play
              aria-hidden
              fill="currentColor"
              strokeWidth={0}
              className="text-teal"
              style={{ width: u(20), height: u(20), marginLeft: u(2) }}
            />
          </span>
          <span
            className="font-bold text-navy transition-colors duration-300 group-hover:text-blue"
            style={{ fontSize: u(15.4) }}
          >
            {HERO.secondaryCta.label}
          </span>
        </Link>
      </div>

      {/* feature indicators */}
      <ul
        className="a-rise absolute flex items-stretch"
        style={{ left: u(54), top: u(654), animationDelay: "560ms" }}
      >
        {HERO.features.map((feature, i) => (
          <li
            key={feature.label.join(" ")}
            className={`flex flex-col items-center text-center ${
              i > 0 ? "border-l border-navy/12" : ""
            }`}
            style={{
              paddingInline: i === 0 ? `0 ${u(24)}` : `${u(24)} ${u(24)}`,
              minWidth: u(58),
            }}
          >
            <Glyph
              name={feature.icon as GlyphName}
              strokeWidth={1.45}
              className="text-navy"
              style={{ width: u(36), height: u(36) }}
            />
            <span
              className="font-bold text-[#243c54] uppercase"
              style={{
                marginTop: u(8),
                fontSize: u(10.5),
                lineHeight: u(15.4),
                letterSpacing: "0.1em",
              }}
            >
              {feature.label.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>

      {/* lower strapline */}
      <div
        className="a-rise absolute"
        style={{ left: u(54), top: u(790), animationDelay: "660ms" }}
      >
        <span
          aria-hidden
          className="block bg-red"
          style={{ width: u(50), height: u(3) }}
        />
        <p
          className="font-semibold text-navy/85 uppercase"
          style={{
            marginTop: u(19),
            fontSize: u(11.6),
            lineHeight: u(20),
            letterSpacing: "0.5em",
          }}
        >
          {COMPANY.taglines.lower.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>

      {/* scroll cue */}
      <a
        href="/services"
        className="a-fade group absolute flex items-center text-navy/80 transition-colors duration-300 hover:text-blue"
        style={{ left: u(62), top: u(904), gap: u(14), animationDelay: "900ms" }}
      >
        <span
          aria-hidden
          className="relative block rounded-full border-[1.5px] border-current"
          style={{ width: u(26), height: u(41) }}
        >
          <span
            className="absolute left-1/2 block -translate-x-1/2 rounded-full bg-current"
            style={{
              top: u(8),
              width: u(2.6),
              height: u(8),
              animation: "j-scroll-dot 2.1s var(--ease-out-quint) infinite",
            }}
          />
        </span>
        <span className="font-medium" style={{ fontSize: u(13.4) }}>
          Scroll to explore
        </span>
      </a>

      {/* ---------------------------------------------- service rail ---- */}
      <ul
        className="absolute"
        style={{
          left: u(1236),
          top: u(144),
          width: u(282),
          display: "grid",
          gap: u(6),
        }}
      >
        {SERVICES.map((service, i) => (
          <li key={service.slug}>
            <ServiceCard service={service} index={i} />
          </li>
        ))}
      </ul>

      {/* ------------------------------------------------ stat card ---- */}
      <Link
        href="/projects"
        className="group a-rise absolute flex items-center overflow-hidden"
        style={{
          left: u(1154),
          top: u(870),
          width: u(368),
          height: u(102),
          borderRadius: u(22),
          border: "1px solid rgba(255,255,255,0.28)",
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(10px) saturate(120%)",
          WebkitBackdropFilter: "blur(10px) saturate(120%)",
          paddingInline: u(26),
          gap: u(22),
          animationDelay: "1050ms",
        }}
      >
        <Glyph
          name="building"
          strokeWidth={1.3}
          className="shrink-0 text-white"
          style={{ width: u(46), height: u(46) }}
        />
        <span className="flex-1">
          <span
            className="block font-extrabold text-white"
            style={{ fontSize: u(27), lineHeight: u(29), letterSpacing: "-0.02em" }}
          >
            {HERO.stat.value}
          </span>
          <span
            className="block font-semibold text-white/88 uppercase"
            style={{
              marginTop: u(5),
              fontSize: u(10.4),
              lineHeight: u(14.4),
              letterSpacing: "0.15em",
            }}
          >
            <span className="block">{HERO.stat.line1}</span>
            <span className="block">{HERO.stat.line2}</span>
          </span>
        </span>
        <span
          aria-hidden
          className="grid shrink-0 place-items-center rounded-full border border-white/60 text-white transition-colors duration-400 group-hover:bg-white/15"
          style={{ width: u(46), height: u(46) }}
        >
          <ArrowRight
            strokeWidth={1.8}
            style={{ width: u(20), height: u(20) }}
            className="transition-transform duration-400 ease-[var(--ease-out-quint)] group-hover:translate-x-[calc(3*var(--s))]"
          />
        </span>
      </Link>
    </div>
  );
}
