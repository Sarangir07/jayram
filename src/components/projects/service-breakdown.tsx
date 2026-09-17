"use client";

import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import {
  PROJECTS,
  SERVICE_LABEL,
  projectCategories,
  projectNumber,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

const ORDER: ProjectCategory[] = ["mep", "fitout", "plumbing", "landscaping", "pools", "maintenance"];

/**
 * Service → projects. Hovering or focusing a service highlights its projects
 * in the register and matrix; activating it filters the register.
 */
export default function ServiceBreakdown({
  highlight,
  onHighlight,
  onSelect,
}: {
  highlight: ProjectCategory | null;
  onHighlight: (c: ProjectCategory | null) => void;
  onSelect: (c: ProjectCategory) => void;
}) {
  return (
    <section className="u-off border-t border-navy/10" aria-labelledby="deliver-heading">
      <div className="u-container py-[clamp(4.5rem,8vw,8rem)]">
        <Reveal className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="u-coord">
              <span className="text-red">07</span> — Services
            </p>
            <h2
              id="deliver-heading"
              className="mt-5 text-[clamp(2.2rem,5vw,4.8rem)] leading-[0.94] font-black tracking-[-0.045em] text-navy uppercase"
            >
              What we deliver.
            </h2>
          </div>
          <p className="u-lede self-end text-[0.98rem] lg:col-span-4 lg:col-start-9">
            The selected projects, grouped by the service delivered. Hover a
            service to trace it through the register; select it to filter.
          </p>
        </Reveal>

        <ul className="mt-14 border-t border-navy" onMouseLeave={() => onHighlight(null)}>
          {ORDER.map((cat, i) => {
            const items = PROJECTS.filter((p) => projectCategories(p).includes(cat));
            const on = highlight === cat;
            const dim = highlight !== null && !on;
            return (
              <Reveal key={cat} as="li" delay={i * 50} className="border-b border-navy/10">
                <button
                  type="button"
                  onMouseEnter={() => onHighlight(cat)}
                  onFocus={() => onHighlight(cat)}
                  onBlur={() => onHighlight(null)}
                  onClick={() => onSelect(cat)}
                  aria-label={`${SERVICE_LABEL[cat]}, ${items.length} projects — filter the register`}
                  className={cn(
                    "group grid w-full grid-cols-[3rem_1fr] items-start gap-x-4 py-8 text-left transition-opacity duration-300 sm:grid-cols-[4.5rem_1fr] lg:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-8 lg:py-10",
                    "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue",
                    dim && "opacity-40",
                  )}
                >
                  <span
                    className={cn(
                      "pt-2 text-[0.72rem] font-bold tracking-[0.22em] tabular-nums transition-colors",
                      on ? "text-red" : "text-navy group-hover:text-red",
                    )}
                  >
                    {projectNumber(i + 1)}
                  </span>

                  <span className="block">
                    <span
                      className={cn(
                        "block text-[clamp(1.9rem,4.4vw,4rem)] leading-[0.94] font-black tracking-[-0.045em] uppercase transition-[color,transform] duration-400 ease-[var(--ease-out-quint)]",
                        on ? "translate-x-2 text-blue" : "text-navy group-hover:translate-x-2 group-hover:text-blue",
                      )}
                    >
                      {SERVICE_LABEL[cat]}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-3 text-[0.62rem] font-bold tracking-[0.26em] text-muted uppercase tabular-nums">
                      {projectNumber(items.length)} {items.length === 1 ? "Project" : "Projects"}
                      <ArrowUpRight
                        aria-hidden
                        className={cn(
                          "size-3.5 text-blue transition-[opacity,transform] duration-300",
                          on ? "opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                        )}
                        strokeWidth={2.4}
                      />
                    </span>
                  </span>

                  <span className="col-start-2 mt-5 block lg:col-start-3 lg:mt-1">
                    <span className="flex flex-wrap gap-x-6 gap-y-1.5 lg:grid lg:grid-cols-2 lg:gap-x-8">
                      {items.map((p) => (
                        <span
                          key={p.id}
                          className={cn(
                            "text-[0.92rem] leading-snug font-semibold transition-colors",
                            on ? "text-navy" : "text-ink/80",
                          )}
                        >
                          {p.title}
                        </span>
                      ))}
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
