"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Reveal from "@/components/ui/Reveal";
import { PROJECTS, projectNumber, type Project } from "@/data/projects";
import { CLIENTS } from "@/data/clients";

const EASE = [0.22, 1, 0.36, 1] as const;

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-navy/10 pt-4">
      <dt className="text-[0.58rem] font-bold tracking-[0.28em] text-muted uppercase">{label}</dt>
      <dd className="mt-2 text-[1.05rem] leading-snug font-bold text-navy">{value}</dd>
    </div>
  );
}

/** Overview text: the project's own line where one exists, otherwise a sentence composed only from its listed facts. */
const overview = (p: Project) =>
  p.description ?? `${p.service} at ${p.location}.`;

export default function FeaturedProject({
  index,
  onChange,
}: {
  index: number;
  onChange: (next: number) => void;
}) {
  const reduce = useReducedMotion();
  const total = PROJECTS.length;
  const p = PROJECTS[index];
  const client = p.client ? CLIENTS.find((c) => c.id === p.client) : undefined;
  const prev = () => onChange((index - 1 + total) % total);
  const next = () => onChange((index + 1) % total);

  const navBtn =
    "group inline-flex items-center gap-3 text-[0.64rem] font-bold tracking-[0.28em] text-navy uppercase transition-colors hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue";

  return (
    <section className="u-off border-t border-navy/10" aria-labelledby="featured-heading">
      <div className="u-container py-[clamp(4.5rem,8vw,8rem)]">
        <Reveal className="flex items-end justify-between gap-6 border-b border-navy/10 pb-6">
          <p className="u-coord">
            <span className="text-red">05</span> — Featured Project
          </p>
          <p className="text-[0.62rem] font-semibold tracking-[0.26em] text-muted uppercase tabular-nums" aria-live="polite">
            {projectNumber(index + 1)} / {projectNumber(total)}
          </p>
        </Reveal>

        <div className="relative min-h-[26rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={p.id}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grid gap-12 pt-12 lg:grid-cols-12 lg:gap-8 lg:pt-16"
            >
              {/* left: number + title */}
              <div className="lg:col-span-5">
                <p className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none font-black tracking-[-0.05em] text-red tabular-nums">
                  {projectNumber(p.number)}
                </p>
                <p className="mt-4 text-[0.6rem] font-bold tracking-[0.3em] text-muted uppercase">
                  Featured Project
                </p>
                <h2
                  id="featured-heading"
                  className="mt-6 text-[clamp(2.2rem,4.6vw,4.4rem)] leading-[0.94] font-black tracking-[-0.045em] text-navy uppercase"
                >
                  {p.title}
                </h2>
              </div>

              {/* middle: metadata + overview */}
              <div className="lg:col-span-4">
                <dl className="grid gap-6">
                  <Meta label="Location" value={p.location} />
                  <Meta label="Service" value={p.service} />
                  <Meta label="Project Type" value={p.sector} />
                  {client && <Meta label="Client" value={client.name} />}
                </dl>
                <div className="mt-10 border-t border-navy/10 pt-5">
                  <p className="text-[0.58rem] font-bold tracking-[0.28em] text-muted uppercase">
                    Project Overview
                  </p>
                  <p className="mt-3 text-[1rem] leading-relaxed text-ink">{overview(p)}</p>
                </div>
              </div>

              {/* right: one small supporting image */}
              {p.image && (
                <div className="lg:col-span-3">
                  <div className="relative aspect-[4/3] w-full max-w-[22rem] overflow-hidden bg-navy/5 lg:aspect-[3/4] lg:max-w-none">
                    <Image
                      src={p.image}
                      alt={p.imageAlt ?? ""}
                      fill
                      sizes="(min-width: 1024px) 22vw, 60vw"
                      quality={70}
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-[0.56rem] font-semibold tracking-[0.24em] text-muted uppercase">
                    Category reference
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-navy/10 pt-6">
          <button type="button" onClick={prev} className={navBtn} aria-label="Previous project">
            <ArrowLeft aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={2.2} />
            Previous
          </button>
          <p className="text-[0.62rem] font-semibold tracking-[0.26em] text-muted uppercase tabular-nums">
            {projectNumber(index + 1)} / {projectNumber(total)}
          </p>
          <button type="button" onClick={next} className={navBtn} aria-label="Next project">
            Next
            <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
