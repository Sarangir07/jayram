import { CAREERS_COPY } from "@/data/careers";
import { SERVICES } from "@/data/site";

/**
 * Careers opener — a shift board rather than the photographic PageHero used by
 * the other inner pages. Deep field, engineering grid, and the trades running
 * as a ticker along the bottom edge so the page announces itself as hiring.
 */
export default function CareersHero() {
  const copy = CAREERS_COPY;

  return (
    <header className="u-deep relative isolate overflow-hidden text-white">
      <div className="u-eng-grid pointer-events-none absolute inset-0 opacity-40" />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(29,111,165,0.42)_0%,rgba(29,111,165,0)_68%)]"
      />

      <div className="u-container relative grid gap-12 pt-[clamp(7rem,13vw,11rem)] pb-[clamp(3rem,6vw,5rem)] lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
        <div>
          <p className="text-[0.68rem] font-semibold tracking-[0.32em] text-blue-200 uppercase">
            {copy.heroIndex} / {copy.heroLabel}
          </p>
          <h1 className="u-display mt-5 text-[clamp(2.4rem,6.2vw,5.4rem)] text-white">
            {copy.heroTitle.map((line, i) => (
              <span
                key={line}
                className={i === 2 ? "block text-blue-200" : "block"}
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-[42rem] text-[1.02rem] leading-relaxed text-white/75">
            {copy.heroLede}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-red px-6 py-3.5 text-[0.7rem] font-bold tracking-[0.22em] text-white uppercase transition-colors hover:bg-red-bright"
            >
              Apply with your CV
            </a>
            <a
              href="#day"
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-[0.7rem] font-bold tracking-[0.22em] text-white uppercase transition-colors hover:border-white/60"
            >
              A day on site
            </a>
          </div>
        </div>

        {/* Title block, drawn like the corner stamp on a drawing sheet. */}
        <dl className="grid grid-cols-2 gap-px border border-white/12 bg-white/12 text-white lg:mb-2">
          <div className="bg-[#061733] px-5 py-5">
            <dt className="text-[0.58rem] font-semibold tracking-[0.26em] text-blue-200 uppercase">
              Trades
            </dt>
            <dd className="mt-2 text-[1.9rem] leading-none font-extrabold tabular-nums">
              {String(SERVICES.length).padStart(2, "0")}
            </dd>
          </div>
          <div className="bg-[#061733] px-5 py-5">
            <dt className="text-[0.58rem] font-semibold tracking-[0.26em] text-blue-200 uppercase">
              Based
            </dt>
            <dd className="mt-2 text-[1.05rem] leading-tight font-extrabold">
              Dubai, UAE
            </dd>
          </div>
          <div className="bg-[#061733] px-5 py-5">
            <dt className="text-[0.58rem] font-semibold tracking-[0.26em] text-blue-200 uppercase">
              Disciplines
            </dt>
            <dd className="mt-2 text-[1.05rem] leading-tight font-extrabold">
              MEP · Interiors · Landscape
            </dd>
          </div>
          <div className="bg-[#061733] px-5 py-5">
            <dt className="text-[0.58rem] font-semibold tracking-[0.26em] text-blue-200 uppercase">
              Apply to
            </dt>
            <dd className="mt-2 text-[1.05rem] leading-tight font-extrabold break-all">
              info@jayam.me
            </dd>
          </div>
        </dl>
      </div>

      {/* Trade ticker — the service lines you would be hired into. */}
      <div className="relative border-t border-white/12">
        <div
          aria-hidden
          className="a-marquee-pause flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
        >
          <div className="a-marquee flex w-max shrink-0">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="flex shrink-0">
                {CAREERS_COPY.ticker.map((t) => (
                  <span
                    key={`${copyIndex}-${t}`}
                    className="flex shrink-0 items-center gap-6 px-6 py-4 text-[0.72rem] font-bold tracking-[0.24em] text-white/45 uppercase"
                  >
                    {t}
                    <span className="h-1 w-1 rounded-full bg-red-bright" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
