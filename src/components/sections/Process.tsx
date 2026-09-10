import Reveal from "@/components/ui/Reveal";
import { PROCESS } from "@/data/site";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-white">
      <div className="u-container py-[clamp(4.5rem,8vw,8.5rem)]">
        <p className="u-coord">Sec 10 — Method</p>
        <Reveal>
          <h2 className="u-display mt-6 max-w-[14ch] text-[clamp(2.1rem,4vw,3.8rem)]">
            A measured
            <span className="u-display-gradient block">workflow.</span>
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid gap-0 md:grid-cols-5">
          <span
            aria-hidden
            className="pointer-events-none absolute top-[1.15rem] right-[8%] left-[8%] hidden h-px bg-navy/15 md:block"
          />
          {PROCESS.map((step, i) => (
            <li key={step.n} className="relative border-t border-navy/10 py-8 md:border-t-0 md:px-4 md:py-0">
              <Reveal delay={i * 90}>
                <span className="relative z-10 grid size-9 place-items-center rounded-full border border-navy/20 bg-white text-[0.68rem] font-bold tracking-[0.12em] text-navy">
                  {step.n}
                </span>
                <h3 className="mt-6 text-[0.82rem] font-extrabold tracking-[0.22em] text-navy uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[16rem] text-[0.9rem] leading-relaxed text-muted">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
