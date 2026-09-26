"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from "framer-motion";

import ServiceDetail from "@/components/inner/ServiceDetail";
import FrameImage from "@/components/ui/FrameImage";
import { CAPABILITIES, type Capability } from "@/data/inner";

const EASE = [0.22, 1, 0.36, 1] as const;
const pad = (n: number) => String(n).padStart(2, "0");

export type Origin = { x: number; y: number };

// Touch devices and small screens get a lighter, GPU-only transition (no clip-path reveal or shared-image morph).
const LITE_QUERY = "(max-width: 1023px), (pointer: coarse)";

function useLite() {
  const [lite, setLite] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(LITE_QUERY);
    const update = () => setLite(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return lite;
}

export default function ServicesExplorer() {
  const [open, setOpen] = useState<number | null>(null);
  // Only the card the visitor clicked morphs into the detail view; after prev/next the panel fades instead.
  const [morph, setMorph] = useState<string | null>(null);
  const [origin, setOrigin] = useState<Origin>({ x: 0.5, y: 0.5 });
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const lite = useLite();

  const show = useCallback(
    (i: number, from?: Origin) => {
      setOrigin(from ?? { x: 0.5, y: 0.5 });
      setMorph(lite ? null : CAPABILITIES[i].slug);
      setOpen(i);
      history.replaceState(null, "", `#${CAPABILITIES[i].slug}`);
    },
    [lite],
  );

  const go = useCallback((i: number) => {
    const next = (i + CAPABILITIES.length) % CAPABILITIES.length;
    setMorph(null);
    setOpen(next);
    history.replaceState(null, "", `#${CAPABILITIES[next].slug}`);
  }, []);

  const close = useCallback(() => {
    if (open !== null) {
      const card = cards.current[open];
      // A card that morphs back is already in view; after prev/next, bring the last one viewed into view.
      if (morph !== CAPABILITIES[open].slug) card?.scrollIntoView({ block: "center" });
      card?.focus({ preventScroll: true });
    }
    setOpen(null);
    history.replaceState(null, "", location.pathname + location.search);
  }, [open, morph]);

  // Deep link: /services#swimming-pools opens that service directly.
  // useLayoutEffect commits the open state before the browser paints, so
  // there's no visible flash of the plain grid before the detail opens.
  useLayoutEffect(() => {
    const slug = decodeURIComponent(location.hash.slice(1));
    const i = CAPABILITIES.findIndex((c) => c.slug === slug);
    if (i >= 0) {
      setMorph(null);
      setOpen(i);
    }
  }, []);

  useEffect(() => {
    const fromHash = () => {
      const slug = decodeURIComponent(location.hash.slice(1));
      const i = CAPABILITIES.findIndex((c) => c.slug === slug);
      if (i >= 0) {
        setMorph(null);
        setOpen(i);
      }
    };
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <LayoutGroup>
        <section className="u-deep relative overflow-hidden text-white">
          <div className="u-eng-grid pointer-events-none absolute inset-0 opacity-30" />
          <div className="u-container relative py-[clamp(3.5rem,7vw,7rem)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">
                  Capabilities · {pad(CAPABILITIES.length)} disciplines
                </p>
                <h2 className="u-display mt-4 max-w-[16ch] text-[clamp(1.8rem,3.4vw,3.2rem)] text-white">
                  Technical solutions built around your property.
                </h2>
              </div>
              <p className="max-w-[26rem] text-[0.92rem] leading-relaxed text-white/60">
                Select any discipline to open its full scope, what is included and how we deliver it.
              </p>
            </div>

            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {CAPABILITIES.map((item, i) => (
                <ServiceCard
                  key={item.slug}
                  item={item}
                  index={i}
                  hidden={open === i && morph === item.slug}
                  morph={morph === item.slug}
                  lite={lite}
                  ref={(el) => {
                    cards.current[i] = el;
                  }}
                  onOpen={(from) => show(i, from)}
                />
              ))}
            </ol>
          </div>
        </section>

        <AnimatePresence>
          {open !== null && (
            <ServiceDetail
              key="service-detail"
              index={open}
              morph={morph === CAPABILITIES[open].slug}
              origin={origin}
              lite={lite}
              onClose={close}
              onNavigate={go}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </MotionConfig>
  );
}

function ServiceCard({
  item,
  index,
  hidden,
  morph,
  lite,
  ref,
  onOpen,
}: {
  item: Capability;
  index: number;
  hidden: boolean;
  morph: boolean;
  lite: boolean;
  ref: (el: HTMLButtonElement | null) => void;
  onOpen: (from: Origin) => void;
}) {
  const track = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.li
      initial={lite ? { opacity: 0, y: 24 } : { opacity: 0, y: 36, clipPath: "inset(12% 0% 0% 0%)" }}
      whileInView={lite ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: lite ? 0.5 : 0.8, ease: EASE, delay: lite ? 0 : (index % 3) * 0.08 }}
    >
      <button
        ref={ref}
        type="button"
        data-cursor="Open"
        aria-haspopup="dialog"
        aria-label={`${item.title} — view details`}
        onPointerMove={track}
        onClick={(e) => {
          const x = e.clientX || window.innerWidth / 2;
          const y = e.clientY || window.innerHeight / 2;
          onOpen({ x: x / window.innerWidth, y: y / window.innerHeight });
        }}
        className="group relative flex h-full w-full flex-col overflow-hidden border border-white/10 bg-white/[0.03] text-left transition-colors duration-500 hover:border-white/25 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-200"
      >
        {/* Pointer-following light */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(127,182,220,0.16), transparent 60%)",
          }}
        />

        <span className="relative block aspect-[16/11] overflow-hidden">
          <motion.span
            layoutId={morph ? `svc-media-${item.slug}` : undefined}
            className="absolute inset-0 block overflow-hidden"
            style={{ visibility: hidden ? "hidden" : "visible" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <span className="absolute inset-0 block transition-transform duration-[1.1s] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]">
              <FrameImage src={item.image} alt="" sizes="(min-width:1024px) 32vw, (min-width:640px) 48vw, 100vw" />
            </span>
          </motion.span>
          <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,16,31,0)_40%,rgba(4,16,31,0.75)_100%)]" />
          <span className="absolute top-4 left-4 text-[0.66rem] font-bold tracking-[0.2em] text-white/90">
            {pad(index + 1)}
          </span>
          <span className="absolute right-4 bottom-4 grid size-10 place-items-center rounded-full border border-white/30 bg-[#04101f]/40 backdrop-blur-sm transition-all duration-500 group-hover:rotate-90 group-hover:border-red-bright group-hover:bg-red-bright">
            <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden>
              <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
        </span>

        <span className="relative flex flex-1 flex-col p-5 lg:p-6">
          <span className="text-[1.2rem] leading-tight font-extrabold tracking-[-0.025em]">{item.title}</span>
          <span className="mt-2 line-clamp-2 text-[0.85rem] leading-snug text-white/55">{item.kicker}</span>
          <span className="mt-5 flex items-center gap-3 text-[0.64rem] font-bold tracking-[0.22em] text-white/70 uppercase">
            <span className="relative h-px w-6 overflow-hidden bg-white/25">
              <span className="absolute inset-0 origin-left scale-x-0 bg-red-bright transition-transform duration-500 group-hover:scale-x-100" />
            </span>
            View details
          </span>
        </span>
      </button>
    </motion.li>
  );
}
