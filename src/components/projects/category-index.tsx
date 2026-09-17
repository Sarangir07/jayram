"use client";

import { useRef } from "react";

import { CATEGORIES, type CategoryFilter } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Category navigation drawn as a numbered technical index. Implements the
 * WAI-ARIA tabs pattern: arrow keys move between categories, Home/End jump.
 */
export default function CategoryIndex({
  value,
  onChange,
  counts,
  controls,
}: {
  value: CategoryFilter;
  onChange: (next: CategoryFilter) => void;
  counts: Record<CategoryFilter, number>;
  /** id of the register the tabs control */
  controls: string;
}) {
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const last = CATEGORIES.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    tabs.current[next]?.focus();
    onChange(CATEGORIES[next].id);
  };

  return (
    <div className="sticky top-[3.9rem] z-30 border-b border-hairline bg-white/95 backdrop-blur-xl lg:top-[4.3rem]">
      <div className="u-container">
        <div
          role="tablist"
          aria-label="Filter projects by service"
          className="u-rail -mx-1 flex overflow-x-auto"
        >
          {CATEGORIES.map((c, i) => {
            const on = c.id === value;
            return (
              <button
                key={c.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={on}
                aria-controls={controls}
                tabIndex={on ? 0 : -1}
                onClick={() => onChange(c.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={cn(
                  "group relative shrink-0 px-4 pt-4 pb-3.5 text-left whitespace-nowrap sm:px-6 lg:px-7",
                  "transition-colors duration-300 ease-[var(--ease-out-quint)]",
                  "focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-blue",
                  on ? "text-blue" : "text-navy hover:text-blue",
                )}
              >
                <span
                  className={cn(
                    "block text-[0.58rem] font-semibold tracking-[0.26em] tabular-nums",
                    on ? "text-red" : "text-muted group-hover:text-red",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 flex items-baseline gap-2 text-[0.72rem] font-extrabold tracking-[0.2em] uppercase">
                  {c.label}
                  <span className="text-[0.58rem] font-semibold tracking-[0.1em] text-muted tabular-nums">
                    {String(counts[c.id]).padStart(2, "0")}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-4 bottom-0 h-[2px] origin-left bg-blue transition-transform duration-400 ease-[var(--ease-out-quint)] sm:inset-x-6 lg:inset-x-7",
                    on ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
