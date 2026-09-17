import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 px-7 py-3.5 text-[0.7rem] font-bold tracking-[0.24em] uppercase " +
  "transition-[background-color,color,border-color,transform] duration-300 ease-[var(--ease-out-quint)] hover:-translate-y-0.5 " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

/** Closing call to action — dark navy, red primary, outlined secondary. */
export default function ArchiveCta() {
  return (
    <section className="relative isolate bg-navy text-white">
      <div aria-hidden className="u-eng-grid absolute inset-0 opacity-40" />
      <div className="u-container relative py-[clamp(4.5rem,9vw,9rem)]">
        <Reveal className="max-w-[48rem]">
          <p className="flex items-center gap-3 text-[0.66rem] font-bold tracking-[0.34em] text-white/70 uppercase">
            <span aria-hidden className="h-px w-8 bg-red" />
            <span className="text-red">11</span> — Start a conversation
          </p>
          <h2 className="mt-8 text-[clamp(2.4rem,6vw,5.6rem)] leading-[0.92] font-black tracking-[-0.045em] uppercase">
            <span className="block">Have a project</span>
            <span className="block text-blue-200">in mind?</span>
          </h2>
          <p className="mt-6 max-w-[32rem] text-[clamp(1rem,1.15vw,1.12rem)] leading-relaxed text-white/75">
            Let&apos;s discuss the technical requirements of your next project.
          </p>
        </Reveal>
        <Reveal delay={140} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/contact" className={cn(base, "bg-red text-white hover:bg-red-bright")}>
            Get a Quote
            <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.4} />
          </Link>
          <Link href="/services" className={cn(base, "border border-white/40 text-white hover:border-white hover:bg-white/10")}>
            View Our Services
            <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.4} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
