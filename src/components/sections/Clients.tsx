import Link from "next/link";
import { ArrowRight } from "lucide-react";

import LogoMarquee from "@/components/ui/logo-marquee";
import Reveal from "@/components/ui/Reveal";
import { CLIENTS } from "@/data/clients";

/** Landing-page client strip: the full roster from data/clients in one marquee row. */
export default function Clients() {
  return (
    <section id="clients" className="bg-[#f3f7fb]" aria-labelledby="clients-heading">
      <div className="u-container pt-[clamp(3.5rem,6vw,5.5rem)]">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.72rem] font-bold tracking-[0.28em] text-red uppercase">
              Trusted across the UAE
            </p>
            <h2
              id="clients-heading"
              className="mt-3 max-w-[16ch] text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-navy"
            >
              The names we <span className="text-blue">build for</span>
            </h2>
          </div>
          <p className="max-w-[30rem] text-[0.95rem] leading-relaxed text-muted">
            Hotels, developers, restaurants and contractors across Dubai who
            rely on JAYAM for MEP, fit-out and facility works.
          </p>
        </Reveal>
      </div>

      <div className="mt-10 flex flex-col gap-6 pb-[clamp(3.5rem,6vw,5.5rem)] lg:mt-12">
        <LogoMarquee logos={CLIENTS} label="Client logos" />
        <Reveal className="u-container mt-2">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-[0.88rem] font-bold text-navy transition-colors hover:text-blue"
          >
            See the projects behind these names
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
