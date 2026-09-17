import Reveal from "@/components/ui/Reveal";
import { SITE_DAY } from "@/data/careers";

/**
 * The shift, laid out as a clock rather than a list of perks — the honest
 * answer to "what is the day actually like". Stations sit on a single rule on
 * desktop; on small screens the rule runs down the left edge instead.
 */
export default function SiteDay() {
  return (
    <section id="day" className="u-deep relative scroll-mt-24 overflow-hidden text-white">
      <div className="u-eng-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="u-container relative py-[clamp(4rem,8vw,7.5rem)]">
        <Reveal className="max-w-[46rem]">
          <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">
            <span className="text-red-bright">01</span> — A day on site
          </p>
          <h2 className="u-display mt-5 text-[clamp(2rem,4.4vw,3.6rem)] text-white">
            <span className="block">From toolbox talk</span>
            <span className="block text-blue-200">to the closing walk.</span>
          </h2>
        </Reveal>

        {/* Desktop: five stations on one rule. */}
        <div className="relative mt-16 hidden lg:block">
          <span
            aria-hidden
            className="absolute top-[0.52rem] right-0 left-0 h-px bg-white/18"
          />
          <ol className="relative grid grid-cols-5 gap-8">
            {SITE_DAY.map((step, i) => (
              <Reveal as="li" key={step.time} delay={i * 90}>
                <span
                  aria-hidden
                  className="block size-[0.6rem] rounded-full bg-red-bright ring-4 ring-[#061733]"
                />
                <p className="mt-6 text-[1.5rem] leading-none font-extrabold tracking-[-0.03em] tabular-nums">
                  {step.time}
                </p>
                <h3 className="mt-3 text-[0.72rem] font-bold tracking-[0.2em] text-blue-200 uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-white/68">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Mobile and tablet: the same clock, run vertically. */}
        <ol className="relative mt-12 space-y-8 border-l border-white/18 pl-7 lg:hidden">
          {SITE_DAY.map((step, i) => (
            <Reveal as="li" key={step.time} delay={i * 70} className="relative">
              <span
                aria-hidden
                className="absolute top-2 -left-[2.0rem] size-[0.55rem] rounded-full bg-red-bright ring-4 ring-[#061733]"
              />
              <p className="text-[1.3rem] leading-none font-extrabold tracking-[-0.03em] tabular-nums">
                {step.time}
              </p>
              <h3 className="mt-2 text-[0.7rem] font-bold tracking-[0.2em] text-blue-200 uppercase">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-white/68">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
