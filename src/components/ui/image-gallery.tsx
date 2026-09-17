"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

export type GalleryItem = {
  id: string | number;
  image: string;
  /** Short category eyebrow, e.g. "Landscaping". */
  label: string;
  title: string;
  location: string;
  alt: string;
  href: string;
  /** Focal point for the crop. */
  objectPosition?: string;
};

/**
 * Horizontal expandable gallery.
 *
 * Desktop: panels sit side by side and the active one grows while its
 * neighbours shrink, driven purely by a `flex` transition. Hover and keyboard
 * focus both activate a panel, so it never depends on a pointer.
 *
 * Below `lg` it becomes a snap-scrolling rail of fixed-width cards.
 */
export default function ImageGallery({
  items,
  defaultActive = 0,
  className = "",
  onItemSelect,
}: {
  items: GalleryItem[];
  defaultActive?: number;
  className?: string;
  /** Called with the item's id when a panel is clicked, in addition to following `href`. */
  onItemSelect?: (id: GalleryItem["id"]) => void;
}) {
  const [active, setActive] = useState(defaultActive);

  return (
    <ul
      className={cn(
        "u-rail -mx-[var(--gutter)] flex snap-x snap-mandatory gap-3 overflow-x-auto px-[var(--gutter)] pb-2",
        "lg:mx-0 lg:h-[clamp(30rem,62vh,40rem)] lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0",
        className,
      )}
      onMouseLeave={() => setActive(defaultActive)}
    >
      {items.map((item, i) => {
        const on = i === active;
        return (
          <li
            key={item.id}
            className={cn(
              "relative h-[26rem] w-[78vw] shrink-0 snap-start sm:h-[30rem] sm:w-[58vw]",
              "lg:h-auto lg:w-auto lg:min-w-0 lg:shrink lg:flex-(--f)",
              "lg:transition-[flex] lg:duration-600 lg:ease-[var(--ease-out-quint)]",
            )}
            style={{ "--f": on ? "4.2 1 0%" : "1 1 0%" } as React.CSSProperties}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            <Link
              href={item.href}
              onClick={onItemSelect ? () => onItemSelect(item.id) : undefined}
              className="group relative block h-full w-full overflow-hidden rounded-[1.25rem] bg-navy outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-4"
              aria-label={`${item.title}, ${item.location} — ${item.label}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                quality={85}
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 58vw, 78vw"
                className={cn(
                  "object-cover transition-transform duration-700 ease-[var(--ease-out-quint)]",
                  on ? "scale-100" : "scale-[1.06]",
                  "group-hover:scale-[1.03]",
                )}
                style={{ objectPosition: item.objectPosition ?? "center" }}
              />
              {/* grade */}
              <span
                aria-hidden
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  "bg-[linear-gradient(180deg,rgba(6,23,51,0.05)_0%,rgba(6,23,51,0.22)_45%,rgba(6,23,51,0.86)_100%)]",
                  on ? "opacity-100" : "opacity-90",
                )}
              />

              {/* collapsed label — desktop only */}
              <span
                aria-hidden
                className={cn(
                  "absolute top-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex",
                  "transition-opacity duration-400",
                  on ? "opacity-0" : "opacity-100",
                )}
              >
                <span className="text-[0.62rem] font-bold tracking-[0.3em] whitespace-nowrap text-white/85 uppercase [writing-mode:vertical-rl]">
                  {item.label}
                </span>
              </span>

              {/* arrow */}
              <span
                aria-hidden
                className={cn(
                  "absolute top-5 right-5 grid size-11 place-items-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-sm",
                  "transition-[opacity,transform,background-color] duration-500 ease-[var(--ease-out-quint)]",
                  on ? "opacity-100" : "opacity-0 lg:scale-90",
                  "group-hover:bg-blue group-hover:border-blue",
                )}
              >
                <ArrowUpRight className="size-5 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
              </span>

              {/* details */}
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 flex flex-col p-6 text-white sm:p-7",
                  "transition-[opacity,transform] duration-500 ease-[var(--ease-out-quint)]",
                  on ? "translate-y-0 opacity-100 delay-150" : "lg:translate-y-3 lg:opacity-0",
                )}
              >
                <span className="text-[0.66rem] font-bold tracking-[0.3em] text-blue-200 uppercase">
                  {item.label}
                </span>
                <span className="mt-2 text-[clamp(1.35rem,2vw,1.9rem)] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance">
                  {item.title}
                </span>
                <span className="mt-2 flex items-center gap-1.5 text-[0.78rem] font-semibold tracking-[0.12em] text-white/75 uppercase">
                  <MapPin aria-hidden className="size-3.5" strokeWidth={2.2} />
                  {item.location}
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
