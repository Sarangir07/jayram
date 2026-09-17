"use client";

import Reveal from "@/components/ui/Reveal";
import {
  PROJECTS,
  projectCategories,
  projectNumber,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

const COLS = ["Project", "Location", "Service", "Sector"] as const;

/**
 * The whole portfolio as one register table — a second reading of the same
 * data. A real <table> on desktop; stacked records on small screens.
 */
export default function ProjectMatrix({
  highlight,
  onSelect,
}: {
  highlight: ProjectCategory | null;
  /** jump to a project in the register */
  onSelect: (id: string) => void;
}) {
  const rowBtn =
    "text-left transition-colors hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue";

  return (
    <section className="bg-white" aria-labelledby="matrix-heading">
      <div className="u-container py-[clamp(4.5rem,8vw,8rem)]">
        <Reveal className="max-w-[40rem]">
          <p className="u-coord">
            <span className="text-red">06</span> — Project Matrix
          </p>
          <h2
            id="matrix-heading"
            className="mt-5 text-[clamp(2rem,4vw,3.6rem)] leading-[0.96] font-black tracking-[-0.04em] text-navy uppercase"
          >
            The full register.
          </h2>
          <p className="u-lede mt-5 max-w-[32rem] text-[0.98rem]">
            Every selected project, by location, service and sector. Select an
            entry to open it in the register above.
          </p>
        </Reveal>

        {/* desktop: table */}
        <Reveal className="mt-12 hidden md:block">
          <table className="w-full border-collapse">
            <caption className="sr-only">Selected projects by location, service and sector</caption>
            <thead>
              <tr className="border-b border-navy text-left">
                <th scope="col" className="w-[4.5rem] pb-3 text-[0.56rem] font-bold tracking-[0.28em] text-muted uppercase">
                  No.
                </th>
                {COLS.map((c) => (
                  <th key={c} scope="col" className="pb-3 text-[0.56rem] font-bold tracking-[0.28em] text-muted uppercase">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PROJECTS.map((p) => {
                const cats = projectCategories(p);
                const dim = highlight !== null && !cats.includes(highlight);
                const lit = highlight !== null && cats.includes(highlight);
                return (
                  <tr
                    key={p.id}
                    className={cn(
                      "border-b border-navy/10 align-top transition-[opacity,background-color] duration-300",
                      dim && "opacity-35",
                      lit && "bg-[#f4f8fb]",
                    )}
                  >
                    <td className="py-5 pr-4 text-[0.68rem] font-bold tracking-[0.2em] text-red tabular-nums">
                      {projectNumber(p.number)}
                    </td>
                    <th scope="row" className="py-5 pr-6 text-left font-extrabold tracking-[-0.02em] text-navy">
                      <button type="button" onClick={() => onSelect(p.id)} className={cn(rowBtn, "text-[1.05rem]")}>
                        {p.title}
                      </button>
                    </th>
                    <td className="py-5 pr-6 text-[0.9rem] text-ink">{p.location}</td>
                    <td className="py-5 pr-6 text-[0.62rem] font-bold tracking-[0.22em] text-blue uppercase">
                      {p.service}
                    </td>
                    <td className="py-5 text-[0.62rem] font-semibold tracking-[0.22em] text-muted uppercase">
                      {p.sector}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Reveal>

        {/* mobile: stacked records */}
        <ol className="mt-10 border-t border-navy md:hidden">
          {PROJECTS.map((p) => (
            <li key={p.id} className="grid grid-cols-[3rem_1fr] gap-x-3 border-b border-navy/10 py-5">
              <span className="text-[0.66rem] font-bold tracking-[0.2em] text-red tabular-nums">
                {projectNumber(p.number)}
              </span>
              <div>
                <button
                  type="button"
                  onClick={() => onSelect(p.id)}
                  className={cn(rowBtn, "text-[1.1rem] font-extrabold tracking-[-0.02em] text-navy")}
                >
                  {p.title}
                </button>
                <dl className="mt-3 grid gap-2 text-[0.82rem]">
                  <div className="flex gap-3">
                    <dt className="w-16 shrink-0 text-[0.54rem] font-bold tracking-[0.24em] text-muted uppercase">Location</dt>
                    <dd className="text-ink">{p.location}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-16 shrink-0 text-[0.54rem] font-bold tracking-[0.24em] text-muted uppercase">Service</dt>
                    <dd className="text-[0.62rem] font-bold tracking-[0.2em] text-blue uppercase">{p.service}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-16 shrink-0 text-[0.54rem] font-bold tracking-[0.24em] text-muted uppercase">Sector</dt>
                    <dd className="text-[0.62rem] font-semibold tracking-[0.2em] text-muted uppercase">{p.sector}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
