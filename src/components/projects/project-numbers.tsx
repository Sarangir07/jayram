import Reveal from "@/components/ui/Reveal";
import { ARCHIVE_NUMBERS } from "@/data/projects";

/** Three figures, set very large, separated by thin rules. No cards. */
export default function ProjectNumbers() {
  return (
    <section className="bg-white" aria-labelledby="numbers-heading">
      <div className="u-container py-[clamp(4.5rem,8vw,8rem)]">
        <Reveal>
          <p className="u-coord">
            <span className="text-red">08</span> — In Numbers
          </p>
          <h2 id="numbers-heading" className="sr-only">
            Project numbers
          </h2>
        </Reveal>

        <dl className="mt-10 border-t border-navy">
          {ARCHIVE_NUMBERS.map((n, i) => (
            <Reveal
              key={n.label}
              delay={i * 80}
              className="grid grid-cols-[3rem_1fr] items-baseline gap-x-4 border-b border-navy/10 py-10 sm:grid-cols-[4.5rem_1fr] lg:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-8 lg:py-12"
            >
              <span className="text-[0.72rem] font-bold tracking-[0.22em] text-red tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <dd className="text-[clamp(4rem,12vw,11rem)] leading-[0.85] font-black tracking-[-0.06em] text-navy tabular-nums">
                {n.value}
              </dd>
              <dt className="col-start-2 mt-4 text-[0.66rem] font-bold tracking-[0.3em] text-muted uppercase lg:col-start-3 lg:mt-0 lg:self-end lg:pb-3">
                {n.label}
              </dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
