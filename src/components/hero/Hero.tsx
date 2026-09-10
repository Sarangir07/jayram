import HeroCompact from "@/components/hero/HeroCompact";
import HeroDesktop from "@/components/hero/HeroDesktop";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="JAYAM Technical Services — integrated facility solutions"
      className="u-hero-sky relative isolate overflow-hidden"
      style={{ minHeight: "min(100svh, calc(1024 * var(--s)))" }}
    >
      <HeroDesktop />
      <HeroCompact />

      {/* joins the hero to the section beneath it without a hard edge */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.85)_72%,#ffffff_100%)]"
      />
    </section>
  );
}
