"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, X } from "lucide-react";

import Logo from "@/components/ui/Logo";
import { COMPANY, NAV } from "@/data/site";

export default function MobileMenu({
  open,
  onClose,
  activeHref,
}: {
  open: boolean;
  onClose: () => void;
  activeHref: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div className={`fixed inset-0 z-[90] ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 h-full w-full cursor-default bg-navy/55 ${open ? "opacity-100" : "opacity-0"}`}
      />

      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`absolute top-0 right-0 flex h-full w-[min(400px,88vw)] flex-col bg-white shadow-[-30px_0_80px_-30px_rgba(6,23,51,0.55)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-hairline/70 px-6 py-5">
          <Logo height="44px" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid size-11 place-items-center rounded-full border border-hairline text-navy"
          >
            <X aria-hidden strokeWidth={2} className="size-5" />
          </button>
        </div>

        <nav aria-label="Main" className="flex-1 overflow-y-auto px-6 py-7">
          <ul className="flex flex-col">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? activeHref === "/"
                  : activeHref === item.href || activeHref.startsWith(`${item.href}/`);
              return (
                <li key={item.href} className="border-b border-hairline/60 last:border-0">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-4 text-[1.35rem] font-extrabold tracking-[-0.02em] ${
                      active ? "text-blue" : "text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-4 border-t border-hairline/70 px-6 py-6">
          <p className="flex items-center gap-2 text-[0.82rem] font-bold tracking-[0.14em] text-muted uppercase">
            <MapPin aria-hidden strokeWidth={2.2} className="size-4 text-red" />
            {COMPANY.location}
          </p>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[linear-gradient(180deg,#cf1319_0%,#ab0b10_100%)] px-6 py-4 font-bold text-white"
          >
            Get a Quote
            <ArrowRight aria-hidden strokeWidth={2.4} className="size-[1.1em]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
