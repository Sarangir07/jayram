"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";

import Logo from "@/components/ui/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import { COMPANY, NAV } from "@/data/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[80] bg-white shadow-[0_1px_0_rgba(6,23,51,0.08)]">
        <div className="relative mx-auto flex w-full items-center justify-between px-[var(--gutter)] py-3 desk:grid desk:w-[calc(1536*var(--s))] desk:grid-cols-[calc(392*var(--s))_max-content_1fr] desk:items-center desk:px-[calc(54*var(--s))] desk:py-[calc(18*var(--s))]">
          <Link href="/" aria-label={`${COMPANY.name} — home`} className="shrink-0">
            <span className="hidden lg:inline-flex">
              <Logo priority height="52px" />
            </span>
            <span className="inline-flex lg:hidden">
              <Logo priority height="44px" />
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul
              className="flex items-center"
              style={{ gap: "clamp(1.15rem, 2.24vw, 2.5rem)" }}
            >
              {NAV.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative block py-1 font-semibold tracking-[-0.005em] ${
                        isActive ? "text-navy" : "text-navy/78 hover:text-blue"
                      }`}
                      style={{ fontSize: "clamp(0.83rem, 1.04vw, 1rem)" }}
                    >
                      {item.label}
                      {isActive && (
                        <span aria-hidden className="absolute -bottom-0.5 left-0 h-[2.5px] w-full rounded-full bg-red" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className="flex shrink-0 items-center desk:justify-self-end"
            style={{ gap: "clamp(0.6rem, 1.3vw, 1.4rem)" }}
          >
            <span
              className="hidden items-center gap-2 font-bold tracking-[0.1em] text-navy uppercase desk:flex"
              style={{ fontSize: "clamp(0.8rem, 1.02vw, 1.04rem)" }}
            >
              <MapPin aria-hidden strokeWidth={2.4} className="size-[1.35em] text-navy" />
              {COMPANY.location}
              <ChevronDown aria-hidden strokeWidth={2.4} className="size-[1.15em] opacity-70" />
            </span>

            <Link
              href="/contact"
              className="hidden items-center gap-2.5 rounded-full bg-[linear-gradient(180deg,#cf1319_0%,#ab0b10_100%)] font-bold text-white sm:flex"
              style={{
                fontSize: "clamp(0.82rem, 1.02vw, 1rem)",
                paddingInline: "clamp(1.15rem, 1.7vw, 1.85rem)",
                paddingBlock: "clamp(0.68rem, 0.92vw, 0.98rem)",
              }}
            >
              Get a Quote
              <ArrowRight aria-hidden strokeWidth={2.4} className="size-[1.1em]" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="grid shrink-0 place-items-center rounded-full border border-hairline text-navy hover:border-blue hover:text-blue"
              style={{ width: "clamp(2.6rem, 3.4vw, 3.4rem)", height: "clamp(2.6rem, 3.4vw, 3.4rem)" }}
            >
              <span aria-hidden className="flex flex-col gap-[5px]">
                <span className="block h-[2px] w-[18px] rounded-full bg-current" />
                <span className="block h-[2px] w-[18px] rounded-full bg-current" />
                <span className="block h-[2px] w-[18px] rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeHref={pathname} />
    </>
  );
}
