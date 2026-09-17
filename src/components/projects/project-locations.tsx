import Reveal from "@/components/ui/Reveal";
import { EMIRATES, PROJECTS, projectNumber } from "@/data/projects";

/** A text-only location index: each emirate with the projects listed there. */
export default function ProjectLocations() {
  return (
    <section className="u-off border-t border-navy/10" aria-labelledby="locations-heading">
      <div className="u-container py-[clamp(4.5rem,8vw,8rem)]">
        <Reveal className="max-w-[44rem]">
          <p className="u-coord">
            <span className="text-red">09</span> — Locations
          </p>
          <h2
            id="locations-heading"
            className="mt-5 text-[clamp(2.2rem,5vw,4.8rem)] leading-[0.94] font-black tracking-[-0.045em] text-navy uppercase"
          >
            <span className="block">Projects</span>
            <span className="block text-blue">across the UAE.</span>
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-navy">
          {EMIRATES.map((e, i) => {
            const items = PROJECTS.filter((p) => p.emirates.includes(e));
            return (
              <Reveal
                key={e}
                delay={i * 60}
                className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-navy/10 py-9 sm:grid-cols-[4.5rem_1fr] lg:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-x-8 lg:py-11"
              >
                <span className="pt-2 text-[0.72rem] font-bold tracking-[0.22em] text-red tabular-nums">
                  {projectNumber(i + 1)}
                </span>
                <div>
                  <h3 className="text-[clamp(1.9rem,4.4vw,4rem)] leading-[0.94] font-black tracking-[-0.045em] text-navy uppercase">
                    {e}
                  </h3>
                  <p className="mt-3 text-[0.62rem] font-bold tracking-[0.26em] text-muted uppercase tabular-nums">
                    {projectNumber(items.length)} {items.length === 1 ? "Project" : "Projects"}
                  </p>
                </div>
                <ul className="col-start-2 mt-5 grid gap-y-2 sm:grid-cols-2 sm:gap-x-8 lg:col-start-3 lg:mt-1">
                  {items.map((p) => (
                    <li key={p.id} className="flex items-baseline gap-3 text-[0.92rem] leading-snug font-semibold text-ink">
                      <span className="text-[0.58rem] font-bold tracking-[0.2em] text-muted tabular-nums">
                        {projectNumber(p.number)}
                      </span>
                      {p.title}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
