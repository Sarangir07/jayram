"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";

import { COMPANY, NAV } from "@/data/site";
import { CONTACT_DETAILS } from "@/data/inner";

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
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
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
      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`absolute inset-0 flex flex-col bg-[#061733] text-white ${open ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex items-center justify-between px-[var(--gutter)] py-6">
          <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">{COMPANY.shortName}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid size-11 place-items-center rounded-full border border-white/25"
          >
            <X aria-hidden className="size-5" />
          </button>
        </div>
        <nav aria-label="Main" className="flex-1 overflow-y-auto px-[var(--gutter)] py-6">
          <ul>
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? activeHref === "/"
                  : activeHref === item.href || activeHref.startsWith(`${item.href}/`);
              return (
                <li key={item.href} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`block py-4 text-[clamp(1.6rem,6vw,2.4rem)] font-extrabold tracking-[-0.03em] ${
                      active ? "text-white" : "text-white/55"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="px-[var(--gutter)] py-8 text-[0.88rem] text-white/70">
          <p>{CONTACT_DETAILS.location}</p>
          <a className="mt-2 block" href={CONTACT_DETAILS.phoneHref}>
            {CONTACT_DETAILS.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
