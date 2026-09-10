import Reveal from "@/components/ui/Reveal";

/**
 * The section opener used site-wide: red rule, tracked eyebrow, display title
 * and an optional lede — the same hierarchy the hero establishes.
 */
export default function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-[52rem] text-center" : "max-w-[44rem]"} ${className}`}
    >
      <Reveal>
        <span
          aria-hidden
          className={`u-rule ${align === "center" ? "mx-auto" : ""}`}
        />
        <p
          className={`mt-5 text-[clamp(0.62rem,0.78vw,0.75rem)] font-semibold tracking-[0.34em] uppercase ${
            dark ? "text-blue-200" : "text-navy-700"
          }`}
        >
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={90}>
        <h2 className={`u-section-title mt-4 ${dark ? "text-white" : ""}`}>{title}</h2>
      </Reveal>
      {lede && (
        <Reveal delay={170}>
          <p
            className={`u-lede mt-5 text-[clamp(1rem,1.12vw,1.12rem)] ${
              dark ? "text-blue-50/78" : ""
            }`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
