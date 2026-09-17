"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import {
  CATEGORIES,
  PROJECTS,
  SERVICE_LABEL,
  projectCategories,
  projectNumber,
  type CategoryFilter,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { CLIENTS } from "@/data/clients";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-navy/10 pt-4">
      <dt className="text-[0.58rem] font-bold tracking-[0.28em] text-muted uppercase">{label}</dt>
      <dd className="mt-2 text-[0.95rem] leading-snug font-semibold text-navy">{children}</dd>
    </div>
  );
}

function RegisterRow({
  project,
  expanded,
  dimmed,
  lit,
  onToggle,
}: {
  project: Project;
  expanded: boolean;
  dimmed: boolean;
  lit: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  const panelId = `project-panel-${project.id}`;
  const buttonId = `project-row-${project.id}`;
  const client = project.client ? CLIENTS.find((c) => c.id === project.client) : undefined;
  const scope = projectCategories(project).map((c) => SERVICE_LABEL[c]);

  return (
    <div
      className={cn(
        "border-b border-navy/10 transition-opacity duration-300",
        dimmed && "opacity-35",
      )}
    >
      <button
        type="button"
        id={buttonId}
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
        className={cn(
          "group relative block w-full scroll-mt-[9.5rem] text-left",
          "transition-colors duration-300 ease-[var(--ease-out-quint)]",
          "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue",
          expanded || lit ? "bg-[#f4f8fb]" : "hover:bg-[#f7f9fc]",
        )}
      >
        {/* blue rule that slides in on hover / open */}
        <span
          aria-hidden
          className={cn(
            "absolute inset-y-0 left-0 w-[3px] origin-top bg-blue transition-transform duration-400 ease-[var(--ease-out-quint)]",
            expanded || lit ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100",
          )}
        />

        <span className="u-container grid grid-cols-[3.2rem_1fr] items-start gap-x-4 py-8 sm:grid-cols-[4.5rem_1fr] lg:grid-cols-[5.5rem_minmax(0,1.45fr)_minmax(0,0.85fr)_minmax(0,0.7fr)_9.5rem] lg:items-center lg:gap-x-8 lg:py-9">
          {/* number */}
          <span
            className={cn(
              "text-[0.78rem] font-bold tracking-[0.22em] tabular-nums transition-colors duration-300",
              expanded ? "text-red" : "text-navy group-hover:text-red",
            )}
          >
            {projectNumber(project.number)}
          </span>

          {/* title */}
          <span
            className={cn(
              "block text-[clamp(1.5rem,3.2vw,2.75rem)] leading-[0.98] font-black tracking-[-0.035em] uppercase",
              "transition-[transform,color] duration-400 ease-[var(--ease-out-quint)] group-hover:translate-x-1.5 lg:group-hover:translate-x-2",
              expanded ? "text-blue" : "text-navy",
            )}
          >
            {project.title}
          </span>

          {/* location */}
          <span className="col-start-2 mt-4 block text-[0.9rem] leading-snug font-medium text-ink lg:col-start-3 lg:mt-0 lg:text-[0.95rem]">
            {project.location}
          </span>

          {/* service */}
          <span className="col-start-2 mt-2 block text-[0.62rem] font-bold tracking-[0.24em] text-blue uppercase lg:col-start-4 lg:mt-0">
            {project.service}
          </span>

          {/* thumbnail + arrow (desktop) */}
          <span className="col-start-2 mt-5 flex items-center gap-4 lg:col-start-5 lg:mt-0 lg:justify-end">
            {project.image && (
              <span
                aria-hidden
                className={cn(
                  "relative hidden h-12 w-[4.5rem] shrink-0 overflow-hidden bg-navy/5 lg:block",
                  "transition-[opacity,transform] duration-400 ease-[var(--ease-out-quint)]",
                  expanded
                    ? "opacity-100"
                    : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                )}
              >
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="72px"
                  quality={60}
                  className="object-cover"
                />
              </span>
            )}
            <span className="inline-flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.26em] text-navy uppercase lg:hidden">
              {expanded ? "Close" : "View details"}
              <ArrowRight aria-hidden className="size-3.5" strokeWidth={2.4} />
            </span>
            <span
              aria-hidden
              className={cn(
                "hidden size-9 shrink-0 items-center justify-center border border-navy/15 text-navy lg:inline-flex",
                "transition-[opacity,transform,background-color,color,border-color] duration-400 ease-[var(--ease-out-quint)]",
                expanded
                  ? "rotate-90 border-blue bg-blue text-white opacity-100"
                  : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
              )}
            >
              <ArrowRight className="size-4" strokeWidth={2.2} />
            </span>
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="panel"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { height: 0, opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden bg-[#f4f8fb]"
          >
            <motion.div
              initial={reduce ? false : { y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="u-container pt-2 pb-10 lg:pb-12"
            >
              <div className="lg:ml-[calc(5.5rem+2rem)]">
                <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                  <Field label="Project">{project.title}</Field>
                  <Field label="Location">{project.location}</Field>
                  <Field label="Service">{project.service}</Field>
                  <Field label="Sector">{project.sector}</Field>
                  <Field label="Scope">{scope.join(" · ")}</Field>
                  <Field label="Emirate">{project.emirates.join(" & ")}</Field>
                  {client && <Field label="Client">{client.name}</Field>}
                  <Field label="Register No.">
                    <span className="text-red tabular-nums">{projectNumber(project.number)}</span>
                    <span className="text-muted"> / {projectNumber(PROJECTS.length)}</span>
                  </Field>
                </dl>

                {project.description && (
                  <div className="mt-8 max-w-[38rem] border-t border-navy/10 pt-5">
                    <p className="text-[0.58rem] font-bold tracking-[0.28em] text-muted uppercase">
                      Overview
                    </p>
                    <p className="mt-2 text-[1rem] leading-relaxed text-ink">{project.description}</p>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                  <Link
                    href="/contact"
                    className="group/link inline-flex items-center gap-2 text-[0.64rem] font-bold tracking-[0.26em] text-navy uppercase transition-colors hover:text-blue"
                  >
                    Discuss a similar project
                    <ArrowUpRight
                      aria-hidden
                      className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      strokeWidth={2.4}
                    />
                  </Link>
                  <Link
                    href="/services"
                    className="group/link inline-flex items-center gap-2 text-[0.64rem] font-bold tracking-[0.26em] text-muted uppercase transition-colors hover:text-blue"
                  >
                    Related services
                    <ArrowUpRight
                      aria-hidden
                      className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      strokeWidth={2.4}
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProjectRegister({
  id,
  projects,
  filter,
  expanded,
  onToggle,
  highlight,
}: {
  id: string;
  projects: Project[];
  filter: CategoryFilter;
  expanded: string | null;
  onToggle: (id: string) => void;
  /** category currently hovered in the services breakdown */
  highlight: ProjectCategory | null;
}) {
  const label = CATEGORIES.find((c) => c.id === filter)?.label ?? "All Projects";
  const activeTab = `tab-${filter}`;

  return (
    <section
      id={id}
      role="tabpanel"
      aria-labelledby={activeTab}
      tabIndex={-1}
      className="scroll-mt-[8rem] bg-white"
    >
      <div className="u-container flex items-end justify-between gap-6 pt-14 pb-5 lg:pt-20">
        <div>
          <p className="u-coord">
            <span className="text-red">03</span> — Project Register
          </p>
          <h2 className="mt-3 text-[clamp(1.6rem,2.6vw,2.4rem)] leading-none font-black tracking-[-0.035em] text-navy uppercase">
            {label}
          </h2>
        </div>
        <p className="shrink-0 text-[0.62rem] font-semibold tracking-[0.26em] text-muted uppercase tabular-nums">
          {String(projects.length).padStart(2, "0")} {projects.length === 1 ? "Entry" : "Entries"}
        </p>
      </div>

      <div aria-hidden className="u-container hidden lg:block">
        <div className="grid grid-cols-[5.5rem_minmax(0,1.45fr)_minmax(0,0.85fr)_minmax(0,0.7fr)_9.5rem] gap-x-8 border-b border-navy/10 pb-3 text-[0.56rem] font-bold tracking-[0.28em] text-muted uppercase">
          <span>No.</span>
          <span>Project</span>
          <span>Location</span>
          <span>Service</span>
          <span className="text-right">Detail</span>
        </div>
      </div>
      <div className="border-t border-navy/10 lg:border-t-0" />

      <ol aria-live="polite">
        <AnimatePresence initial={false} mode="popLayout">
          {projects.map((p) => (
            <motion.li
              key={p.id}
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <RegisterRow
                project={p}
                expanded={expanded === p.id}
                dimmed={highlight !== null && !projectCategories(p).includes(highlight)}
                lit={highlight !== null && projectCategories(p).includes(highlight)}
                onToggle={() => onToggle(p.id)}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>

      {projects.length === 0 && (
        <p className="u-container py-16 text-[0.9rem] text-muted">
          No named projects are listed under this heading yet.
        </p>
      )}
    </section>
  );
}
