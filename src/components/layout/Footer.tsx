import Link from "next/link";
import { MapPin } from "lucide-react";

import Logo from "@/components/ui/Logo";
import { COMPANY, NAV } from "@/data/site";
import { CONTACT_DETAILS } from "@/data/inner";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative overflow-hidden bg-[#071526] text-blue-50/75">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: "url(/assets/jayam/hd/evening.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#071526_12%,rgba(7,21,38,0.82)_55%,rgba(7,21,38,0.55)_100%)]" />

      <div className="u-container relative">
        <div className="grid items-center gap-10 py-[clamp(2.8rem,5vw,4.5rem)] lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Logo height="52px" variant="light" />
            <p className="mt-5 max-w-[28rem] text-[0.92rem] leading-relaxed">
              Complete MEP, landscaping and facility solutions for a smarter,
              greener and brighter tomorrow.
            </p>
          </div>
          <div className="lg:text-right">
            <p className="text-[clamp(1.4rem,2.4vw,2rem)] font-extrabold tracking-[-0.03em] text-white">
              Ready to create better spaces?
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-full bg-[linear-gradient(180deg,#cf1319_0%,#ab0b10_100%)] px-6 py-3 text-[0.82rem] font-bold text-white"
            >
              Get in Touch
            </Link>
            <p className="mt-5 flex flex-col gap-2 text-[0.9rem] font-semibold text-white lg:items-end">
              <span className="flex items-center gap-2">
                <MapPin aria-hidden className="size-4 shrink-0 text-red-bright" />
                {CONTACT_DETAILS.location}
              </span>
              <a href={CONTACT_DETAILS.phoneHref} className="hover:text-blue-200">
                {CONTACT_DETAILS.phone}
              </a>
              <a href={CONTACT_DETAILS.emailHref} className="hover:text-blue-200">
                {CONTACT_DETAILS.email}
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.78rem]">© {year} {COMPANY.name}. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[0.78rem]">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
