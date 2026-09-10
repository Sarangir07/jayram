import Link from "next/link";
import { ArrowRight, Headphones, Settings, ShieldCheck, Zap } from "lucide-react";

import Reveal from "@/components/ui/Reveal";

const POINTS = [
  { icon: Settings, title: "Custom Solutions" },
  { icon: Zap, title: "Rapid Response" },
  { icon: ShieldCheck, title: "Professional Execution" },
  { icon: Headphones, title: "Long-Term Support" },
] as const;

export default function CallToAction() {
  return (
    <section id="start" className="relative overflow-hidden bg-white">
      <div className="u-container py-[clamp(3.5rem,6vw,5.5rem)]">
        <div className="grid items-center gap-10 rounded-[2rem] bg-[#f3f7fb] px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-14">
          <Reveal>
            <h2 className="max-w-[12ch] text-[clamp(1.9rem,3.8vw,3.2rem)] font-extrabold tracking-[-0.035em] text-navy">
              Let&apos;s <span className="text-blue">Build</span> Better Spaces Together
            </h2>
            <p className="mt-4 max-w-[34rem] text-[0.98rem] leading-relaxed text-muted">
              Talk to our team and get the right solution for your next project.
            </p>
            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(180deg,#cf1319_0%,#ab0b10_100%)] px-7 py-3.5 text-[0.88rem] font-bold text-white shadow-[0_14px_30px_-14px_rgba(176,13,18,0.8)] transition-transform hover:-translate-y-0.5"
            >
              Get a Quote
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8">
            {POINTS.map((item, i) => (
              <li key={item.title} className="flex flex-col items-center text-center">
                <Reveal delay={i * 70}>
                  <span className="grid size-[4.6rem] place-items-center rounded-full border-[3px] border-teal/25 bg-white text-teal shadow-[0_10px_24px_-16px_rgba(6,23,51,0.45)]">
                    <item.icon aria-hidden className="size-7" strokeWidth={1.7} />
                  </span>
                  <p className="mt-3 max-w-[10rem] text-[0.82rem] font-bold text-navy">
                    {item.title}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
