import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Glyph, { type GlyphName } from "@/components/ui/Glyph";
import type { Service } from "@/data/site";

/**
 * One card in the hero's right-hand rail (desktop) or the stacked mobile list.
 *
 * Geometry follows the artwork: a 282 x 75 glass panel, icon at 30px in, title
 * from 68px, and the photograph filling the right 42% behind a scrim that fades
 * it into the glass. The arrow disc is real UI, so it animates on hover — the
 * supplied thumbnails are cropped short of the baked-in disc for that reason.
 */
export default function ServiceCard({
  service,
  index,
  layout = "rail",
}: {
  service: Service;
  index: number;
  layout?: "rail" | "stack";
}) {
  const stack = layout === "stack";

  return (
    <Link
      href="/services"
      aria-label={service.title}
      className={`group relative block overflow-hidden transition-[transform,border-color,box-shadow] duration-400 ease-[var(--ease-out-quint)] ${
        stack
          ? "a-rise hover:-translate-y-0.5"
          : "a-slide-left hover:-translate-x-[calc(5*var(--s))]"
      } hover:border-white/55 hover:shadow-[0_18px_38px_-16px_rgba(3,16,34,0.55)]`}
      style={{
        height: stack ? "4.55rem" : "calc(75 * var(--s))",
        borderRadius: stack ? "16px" : "calc(15 * var(--s))",
        border: "1px solid rgba(255,255,255,0.3)",
        background: stack
          ? "linear-gradient(118deg, #163a5c 0%, #1a4a72 48%, #12344f 100%)"
          : "linear-gradient(118deg, rgba(255,255,255,0.19) 0%, rgba(255,255,255,0.08) 44%, rgba(255,255,255,0.03) 100%)",
        backdropFilter: stack ? undefined : "blur(8px) saturate(125%)",
        WebkitBackdropFilter: stack ? undefined : "blur(8px) saturate(125%)",
        animationDelay: stack ? `${280 + index * 55}ms` : `${640 + index * 70}ms`,
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 block overflow-hidden"
        style={{ width: stack ? "42%" : "calc(118 * var(--s))" }}
      >
        <Image
          src={service.image}
          alt=""
          fill
          sizes={stack ? "180px" : "180px"}
          className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.09]"
        />
        <span
          className="absolute inset-0 block"
          style={{
            background:
              "linear-gradient(90deg, rgba(16,48,78,0.72) 0%, rgba(16,48,78,0.28) 38%, rgba(16,48,78,0.08) 72%, rgba(16,48,78,0.02) 100%)",
          }}
        />
      </span>

      <span
        className="relative flex h-full items-center"
        style={{ paddingLeft: stack ? "1rem" : "calc(16 * var(--s))" }}
      >
        <Glyph
          name={service.icon as GlyphName}
          strokeWidth={1.7}
          className="shrink-0 text-white drop-shadow-[0_2px_6px_rgba(0,20,40,0.45)]"
          style={{
            width: stack ? "1.7rem" : "calc(29 * var(--s))",
            height: stack ? "1.7rem" : "calc(29 * var(--s))",
          }}
        />

        <span
          className="relative font-semibold text-white drop-shadow-[0_1px_5px_rgba(0,18,36,0.5)]"
          style={{
            marginLeft: stack ? "0.85rem" : "calc(22 * var(--s))",
            fontSize: stack ? "0.92rem" : "calc(13.2 * var(--s))",
            lineHeight: stack ? "1.15" : "calc(16.4 * var(--s))",
            letterSpacing: "-0.004em",
          }}
        >
          {service.panelTitle.map((line) => (
            <span key={line} className="block whitespace-nowrap">
              {line}
            </span>
          ))}
        </span>

        <span
          aria-hidden
          className="absolute grid place-items-center rounded-full border border-white/45 bg-navy/45 text-white backdrop-blur-[2px] transition-[background-color,border-color] duration-400 group-hover:border-white/80 group-hover:bg-navy/65"
          style={{
            right: stack ? "0.7rem" : "calc(11 * var(--s))",
            top: "50%",
            transform: "translateY(-50%)",
            width: stack ? "1.9rem" : "calc(31 * var(--s))",
            height: stack ? "1.9rem" : "calc(31 * var(--s))",
          }}
        >
          <ArrowRight
            strokeWidth={2.2}
            style={{
              width: stack ? "0.9rem" : "calc(15 * var(--s))",
              height: stack ? "0.9rem" : "calc(15 * var(--s))",
            }}
            className="transition-transform duration-400 ease-[var(--ease-out-quint)] group-hover:translate-x-[3px]"
          />
        </span>
      </span>
    </Link>
  );
}
