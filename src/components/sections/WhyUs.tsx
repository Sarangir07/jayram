import Reveal from "@/components/ui/Reveal";
import { DIFFERENTIATORS } from "@/data/site";

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-[var(--off-white)]">
      <div className="u-eng-grid-light pointer-events-none absolute inset-0 opacity-70" />
      <div className="u-container relative py-[clamp(4.5rem,8vw,8.5rem)]">
        <p className="u-coord">Sec 07 — Specification</p>
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="u-display max-w-[14ch] text-[clamp(2.2rem,4.2vw,4rem)]">
              Why
              <span className="u-display-gradient"> JAYAM.</span>
            </h2>
          </Reveal>
          <p className="max-w-[28rem] text-[0.95rem] leading-relaxed text-muted">
            The measures we work to — written as a specification, not a claim
            of awards we do not hold.
          </p>
        </div>

        <ol className="mt-14 border-t border-navy/12">
          {DIFFERENTIATORS.map((item, i) => (
            <li
              key={item.n}
              className="group grid gap-3 border-b border-navy/12 py-8 md:grid-cols-[6.5rem_minmax(0,16rem)_1fr] md:items-baseline md:gap-8"
            >
              <Reveal delay={i * 60}>
                <span className="font-extrabold tracking-[-0.05em] text-navy/18 transition-colors duration-500 group-hover:text-red/40" style={{ fontSize: "clamp(2rem,3vw,2.8rem)" }}>
                  {item.n}
                </span>
              </Reveal>
              <Reveal delay={i * 60 + 40}>
                <h3 className="text-[1.15rem] font-extrabold tracking-[-0.02em] text-navy">{item.title}</h3>
              </Reveal>
              <Reveal delay={i * 60 + 80}>
                <p className="max-w-[38rem] text-[0.98rem] leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
