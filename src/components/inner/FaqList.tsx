"use client";

import { useState } from "react";

import { FAQS } from "@/data/inner";

export default function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {FAQS.map((item, i) => {
        const on = open === i;
        return (
          <div key={item.q} className="border-b border-navy/12 first:border-t">
            <button
              type="button"
              aria-expanded={on}
              onClick={() => setOpen(on ? null : i)}
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
            >
              <span className="text-[1.02rem] font-extrabold tracking-[-0.02em] text-navy">
                {item.q}
              </span>
              <span aria-hidden className={`mt-1 text-red transition-transform ${on ? "rotate-45" : ""}`}>
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-400 ease-[var(--ease-out-quint)] ${
                on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 max-w-[46rem] text-[0.95rem] leading-relaxed text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
