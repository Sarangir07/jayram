import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { COMPANY } from "@/data/site";

export default function Careers() {
  return (
    <section id="careers" className="border-y border-navy/8 bg-white">
      <div className="u-container flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[0.68rem] font-bold tracking-[0.24em] text-teal uppercase">Careers</p>
          <p className="mt-2 text-[1.15rem] font-extrabold text-navy">
            Craft, in {COMPANY.location}.
          </p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 text-[0.8rem] font-bold text-navy uppercase tracking-[0.12em]"
        >
          Introduce yourself
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
