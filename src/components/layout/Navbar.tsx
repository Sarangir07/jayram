"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";

import Logo from "@/components/ui/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import { COMPANY, NAV } from "@/data/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-[var(--ease-out-quint)] ${
          condensed
            ? "bg-white/88 shadow-[0_1px_0_rgba(6,23,51,0.08),0_18px_40px_-32px_rgba(6,23,51,0.5)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div
          className="relative mx-auto flex w-full items-center justify-between px-[var(--gutter)] transition-[padding] duration-500 ease-[var(--ease-out-quint)] desk:grid desk:w-[calc(1536*var(--s))] desk:grid-cols-[calc(392*var(--s))_max-content_1fr] desk:items-center desk:px-[calc(54*var(--s))]"
          style={{ paddingBlock: condensed ? "0.6rem" : "var(--nav-pad)" }}
        >
          <Link
            href="/"
            aria-label={`${COMPANY.name} — home`}
            className="a-fade shrink-0 transition-opacity duration-300 hover:opacity-85"
            style={{ animationDelay: "80ms" }}
          >
            <span className="hidden lg:inline-flex">
              <Logo
                priority
                height={condensed ? "48px" : "calc(97 * var(--s))"}
              />
            </span>
            <span className="inline-flex lg:hidden">
              <Logo priority height={condensed ? "40px" : "clamp(40px,7.4vw,52px)"} />
            </span>
          </Link>

          <nav
            aria-label="Main"
            className="a-fade hidden lg:block desk:mt-[calc(12*var(--s))] desk:self-start"
            style={{ animationDelay: "160ms" }}
          >
            <ul
              className="flex items-center"
              style={{ gap: "clamp(0.85rem, 1.35vw, 1.85rem)" }}
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
                      className={`group relative block py-1 font-semibold tracking-[-0.005em] transition-colors duration-300 ${
                        isActive ? "text-navy" : "text-navy/78 hover:text-blue"
                      }`}
                      style={{ fontSize: "clamp(0.83rem, 1.04vw, 1rem)" }}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className={`absolute -bottom-0.5 left-0 h-[2.5px] rounded-full bg-red ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className="a-fade flex shrink-0 items-center desk:justify-self-end"
            style={{ animationDelay: "240ms", gap: "clamp(0.6rem, 1.3vw, 1.4rem)" }}
          >
            <button
              type="button"
              className="hidden items-center gap-2 font-bold tracking-[0.1em] text-navy uppercase transition-colors duration-300 hover:text-blue desk:flex"
              style={{ fontSize: "clamp(0.8rem, 1.02vw, 1.04rem)" }}
            >
              <MapPin aria-hidden strokeWidth={2.4} className="size-[1.35em] text-navy" />
              {COMPANY.location}
              <ChevronDown aria-hidden strokeWidth={2.4} className="size-[1.15em] opacity-70" />
            </button>

            <Link
              href="/contact"
              className="group hidden items-center gap-2.5 rounded-full bg-[linear-gradient(180deg,#cf1319_0%,#ab0b10_100%)] font-bold text-white shadow-[0_12px_28px_-14px_rgba(176,13,18,0.8)] transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-quint)] hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-14px_rgba(176,13,18,0.9)] sm:flex"
              style={{
                fontSize: "clamp(0.82rem, 1.02vw, 1rem)",
                paddingInline: "clamp(1.15rem, 1.7vw, 1.85rem)",
                paddingBlock: "clamp(0.68rem, 0.92vw, 0.98rem)",
              }}
            >
              Get a Quote
              <ArrowRight
                aria-hidden
                strokeWidth={2.4}
                className="size-[1.1em] transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:translate-x-1"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={`grid shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                condensed
                  ? "border-hairline text-navy hover:border-blue hover:text-blue"
                  : "border-navy/25 text-navy hover:border-blue hover:text-blue desk:border-white/60 desk:text-white desk:hover:border-white desk:hover:bg-white/10 desk:hover:text-white"
              }`}
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
