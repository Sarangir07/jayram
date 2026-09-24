"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

import type { Origin } from "@/components/inner/ServicesExplorer";
import FrameImage from "@/components/ui/FrameImage";
import { CAPABILITIES, PROCESS } from "@/data/inner";

const EASE = [0.22, 1, 0.36, 1] as const;
const pad = (n: number) => String(n).padStart(2, "0");

export default function ServiceDetail({
  index,
  morph,
  origin,
  lite,
  onClose,
  onNavigate,
}: {
  index: number;
  morph: boolean;
  origin: Origin;
  lite: boolean;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const item = CAPABILITIES[index];
  const next = CAPABILITIES[(index + 1) % CAPABILITIES.length];
  const scroller = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const { scrollYProgress } = useScroll({ container: scroller });
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 32, mass: 0.3 });

  const at = `${(origin.x * 100).toFixed(1)}% ${(origin.y * 100).toFixed(1)}%`;

  // Lock the page behind, focus the dialog, and wire keyboard controls.
  useEffect(() => {
    const body = document.body;
    const previous = body.style.overflow;
    body.style.overflow = "hidden";
    closeBtn.current?.focus({ preventScroll: true });
    return () => {
      body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNavigate(index + 1);
      else if (e.key === "ArrowLeft") onNavigate(index - 1);
      else if (e.key === "Tab" && dialog.current) {
        const nodes = dialog.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, onClose, onNavigate]);

  // Each new service starts at the top of the panel.
  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [index]);

  return createPortal(
    <motion.div
      ref={dialog}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-detail-title"
      className="fixed inset-0 z-[100] text-white"
    >
      {/* Blueprint curtain expands from the point the visitor clicked */}
      <motion.div
        aria-hidden
        className="u-deep absolute inset-0"
        {...(lite
          ? {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0, transition: { duration: 0.25, ease: EASE, delay: 0.05 } },
              transition: { duration: 0.3, ease: EASE },
            }
          : {
              initial: { clipPath: `circle(0% at ${at})` },
              animate: { clipPath: `circle(150% at ${at})` },
              exit: { clipPath: `circle(0% at ${at})`, transition: { duration: 0.6, ease: [0.7, 0, 0.84, 0], delay: 0.1 } },
              transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
            })}
      >
        <div className="u-eng-grid absolute inset-0 opacity-40" />
        <motion.div
          className="absolute inset-y-0 left-[8%] w-px bg-white/10"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
          style={{ originY: 0 }}
        />
      </motion.div>

      {/* Top bar */}
      <motion.header
        className={`absolute inset-x-0 top-0 z-20 border-b border-white/10 ${lite ? "bg-[#04101f]" : "bg-[#04101f]/70 backdrop-blur-md"}`}
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%", transition: { duration: lite ? 0.25 : 0.35, ease: EASE } }}
        transition={{ duration: lite ? 0.4 : 0.6, ease: EASE, delay: lite ? 0.1 : 0.35 }}
      >
        <div className="u-container flex h-16 items-center gap-4 lg:h-20">
          <span className="text-[0.66rem] font-bold tracking-[0.24em] text-white/50 tabular-nums">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={index}
                className="inline-block text-red-bright"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {pad(index + 1)}
              </motion.span>
            </AnimatePresence>{" "}
            / {pad(CAPABILITIES.length)}
          </span>
          <span className="hidden truncate text-[0.72rem] font-semibold tracking-[0.18em] text-white/70 uppercase sm:block">
            {item.title}
          </span>

          <div className="ml-auto flex items-center gap-2">
            <NavButton label="Previous service" onClick={() => onNavigate(index - 1)} dir="prev" />
            <NavButton label="Next service" onClick={() => onNavigate(index + 1)} dir="next" />
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              aria-label="Close service details"
              className="group ml-2 flex h-10 items-center gap-3 rounded-full border border-white/20 pr-1.5 pl-1.5 text-[0.64rem] sm:pl-4 font-bold tracking-[0.22em] uppercase transition-colors hover:border-red-bright hover:bg-red-bright focus-visible:outline-2 focus-visible:outline-blue-200"
            >
              <span className="hidden sm:inline">Close</span>
              <span className="grid size-7 place-items-center rounded-full bg-white/10 transition-transform duration-500 group-hover:rotate-90">
                <svg viewBox="0 0 16 16" className="size-3" aria-hidden>
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <motion.div className="h-[2px] origin-left bg-red-bright" style={{ scaleX: progress }} />
      </motion.header>

      {/* Scrollable body */}
      <motion.div
        ref={scroller}
        className="absolute inset-0 z-10 overflow-y-auto overscroll-contain pt-16 lg:pt-20"
        initial={lite ? { opacity: 0, y: 28 } : false}
        animate={lite ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.4, ease: EASE, delay: 0.05 }}
        exit={lite ? { opacity: 0, y: 16, transition: { duration: 0.22, ease: EASE } } : { opacity: 0, transition: { duration: 0.3 } }}
      >
        <AnimatePresence mode="wait" initial={true}>
          <motion.article
            key={item.slug}
            initial="hidden"
            animate="show"
            exit="leave"
            variants={{
              hidden: {},
              show: {
                transition: lite
                  ? { staggerChildren: 0.04, delayChildren: 0.12 }
                  : { staggerChildren: 0.07, delayChildren: morph ? 0.45 : 0.15 },
              },
              leave: { opacity: 0, x: lite ? -20 : -40, transition: { duration: lite ? 0.2 : 0.3, ease: EASE } },
            }}
          >
            {/* Hero */}
            <div className="u-container grid gap-10 pt-8 pb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pt-14 lg:pb-24">
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[5/6] lg:max-h-[calc(100svh-9rem)] lg:w-full">
                {morph ? (
                  <motion.div
                    layoutId={`svc-media-${item.slug}`}
                    className="absolute inset-0 overflow-hidden"
                    transition={{ duration: 0.85, ease: EASE }}
                  >
                    <FrameImage src={item.image} alt="" sizes="(min-width:1024px) 52vw, 100vw" priority />
                  </motion.div>
                ) : lite ? (
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <FrameImage src={item.image} alt="" sizes="(min-width:1024px) 52vw, 100vw" priority />
                  </motion.div>
                ) : (
                  <motion.div
                    className="absolute inset-0"
                    initial={{ clipPath: "inset(0% 100% 0% 0%)", scale: 1.15 }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
                    transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <FrameImage src={item.image} alt="" sizes="(min-width:1024px) 52vw, 100vw" priority />
                  </motion.div>
                )}
                {/* Corner registration marks */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-4 border border-white/0"
                  variants={{ hidden: { opacity: 0, scale: 1.04 }, show: { opacity: 1, scale: 1 } }}
                  transition={{ duration: 0.8, ease: EASE }}
                >
                  {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "right-0 bottom-0 border-r border-b"].map((c) => (
                    <span key={c} className={`absolute size-5 border-white/80 ${c}`} />
                  ))}
                </motion.span>
                <motion.span
                  className="absolute bottom-5 left-5 bg-red-bright px-3 py-1.5 text-[0.6rem] font-bold tracking-[0.24em] uppercase"
                  variants={rise}
                >
                  Discipline {pad(index + 1)}
                </motion.span>
              </div>

              <div className="flex flex-col justify-center">
                <motion.p variants={rise} className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">
                  JAYAM Technical Services
                </motion.p>
                <h1
                  id="service-detail-title"
                  className="u-display mt-4 text-[clamp(2.1rem,3.9vw,4.3rem)] leading-[0.98] text-white"
                >
                  {item.title.split(" ").map((word, w) => (
                    <span key={w} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                      <motion.span
                        className="inline-block"
                        variants={{ hidden: { y: "110%", rotate: 4 }, show: { y: 0, rotate: 0 } }}
                        transition={{ duration: 0.9, ease: EASE }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </h1>
                <motion.p variants={rise} className="mt-5 text-[1.05rem] font-medium text-blue-200">
                  {item.kicker}
                </motion.p>
                <motion.span
                  variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className="mt-7 block h-px w-full origin-left bg-white/15"
                />
                <motion.p variants={rise} className="mt-7 max-w-[40rem] text-[1rem] leading-[1.75] text-white/72">
                  {item.body}
                </motion.p>
                <motion.div variants={rise} className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex h-12 items-center gap-3 bg-red-bright px-6 text-[0.7rem] font-bold tracking-[0.2em] uppercase transition-colors hover:bg-red"
                  >
                    Request a free quote
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                  <a
                    href="#scope"
                    onClick={(e) => {
                      e.preventDefault();
                      scroller.current
                        ?.querySelector("#scope")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="inline-flex h-12 items-center border border-white/25 px-6 text-[0.7rem] font-bold tracking-[0.2em] uppercase transition-colors hover:border-white"
                  >
                    What&apos;s included
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Scope */}
            <section id="scope" className="scroll-mt-24 border-t border-white/10">
              <div className="u-container grid gap-10 py-16 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] lg:py-24">
                <InView>
                  <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">Scope of work</p>
                  <h2 className="u-display mt-4 text-[clamp(1.7rem,2.8vw,2.6rem)] text-white">What&apos;s included</h2>
                  <p className="mt-4 max-w-[22rem] text-[0.92rem] leading-relaxed text-white/55">
                    Every property is assessed on site — the scope is tailored to its condition and requirements.
                  </p>
                </InView>
                <ol className="grid border-t border-white/12 sm:grid-cols-2">
                  {item.points.map((point, i) => (
                    <motion.li
                      key={point}
                      className="group relative flex items-start gap-5 border-b border-white/12 py-5 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, root: scroller, margin: "-40px" }}
                      transition={{ duration: 0.6, ease: EASE, delay: (i % 2) * 0.08 + Math.floor(i / 2) * 0.05 }}
                    >
                      <span className="pt-1 text-[0.66rem] font-bold tracking-[0.16em] text-red-bright tabular-nums">
                        {pad(i + 1)}
                      </span>
                      <span className="text-[1.02rem] leading-snug font-semibold text-white/90">{point}</span>
                      <span className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-red-bright transition-transform duration-500 group-hover:scale-x-100" />
                    </motion.li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Process */}
            <section className="border-t border-white/10 bg-white/[0.02]">
              <div className="u-container py-16 lg:py-24">
                <InView>
                  <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">How we deliver</p>
                  <h2 className="u-display mt-4 max-w-[18ch] text-[clamp(1.7rem,2.8vw,2.6rem)] text-white">
                    Simple, professional &amp; customer-focused.
                  </h2>
                </InView>
                <div className="relative mt-12">
                  <motion.span
                    aria-hidden
                    className="absolute top-[7px] left-0 hidden h-px w-full origin-left bg-gradient-to-r from-red-bright via-blue-200/60 to-transparent lg:block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, root: scroller, margin: "-80px" }}
                    transition={{ duration: 1.6, ease: EASE }}
                  />
                  <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
                    {PROCESS.map((step, i) => (
                      <motion.li
                        key={step.n}
                        className="relative border-l border-white/12 pl-5 lg:border-l-0 lg:pl-0"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, root: scroller, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.12 }}
                      >
                        <span className="relative hidden size-[15px] place-items-center rounded-full border border-white/40 bg-[#051529] lg:grid">
                          <span className="size-[5px] rounded-full bg-red-bright" />
                        </span>
                        <p className="text-[0.66rem] font-bold tracking-[0.2em] text-red-bright lg:mt-5">{step.n}</p>
                        <p className="mt-2 text-[1.1rem] font-extrabold tracking-[-0.02em]">{step.title}</p>
                        <p className="mt-2 text-[0.86rem] leading-relaxed text-white/55">{step.body}</p>
                      </motion.li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>

            {/* Next service */}
            <section className="border-t border-white/10">
              <button
                type="button"
                onClick={() => onNavigate(index + 1)}
                data-cursor="Next"
                className="group relative block w-full overflow-hidden text-left"
              >
                <span className="absolute inset-0 opacity-30 transition-opacity duration-700 group-hover:opacity-55">
                  <span className="absolute inset-0 block scale-105 transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-100">
                    <FrameImage src={next.image} alt="" sizes="100vw" />
                  </span>
                </span>
                <span className="absolute inset-0 bg-[linear-gradient(90deg,#04101f_0%,rgba(4,16,31,0.6)_60%,rgba(4,16,31,0.2)_100%)]" />
                <span className="u-container relative flex items-end justify-between gap-6 py-16 lg:py-24">
                  <span>
                    <span className="block text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">
                      Next discipline · {pad(((index + 1) % CAPABILITIES.length) + 1)}
                    </span>
                    <span className="u-display mt-4 block text-[clamp(2rem,5vw,4.4rem)] leading-[1] text-white transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-3">
                      {next.title}
                    </span>
                  </span>
                  <span className="grid size-14 shrink-0 place-items-center rounded-full border border-white/30 transition-all duration-500 group-hover:border-red-bright group-hover:bg-red-bright lg:size-20">
                    <svg viewBox="0 0 24 24" className="size-5 transition-transform duration-500 group-hover:translate-x-1" aria-hidden>
                      <path d="M4 12h16M14 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </button>
            </section>
          </motion.article>
        </AnimatePresence>
      </motion.div>
    </motion.div>,
    document.body,
  );
}

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function InView({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function NavButton({ label, onClick, dir }: { label: string; onClick: () => void; dir: "prev" | "next" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="group grid size-10 place-items-center rounded-full border border-white/20 transition-colors hover:border-white hover:bg-white hover:text-[#04101f] focus-visible:outline-2 focus-visible:outline-blue-200"
    >
      <svg
        viewBox="0 0 24 24"
        className={`size-4 transition-transform duration-300 ${dir === "prev" ? "rotate-180 group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"}`}
        aria-hidden
      >
        <path d="M4 12h16M14 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
