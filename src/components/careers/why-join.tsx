import Image from "next/image";

import Reveal from "@/components/ui/Reveal";
import { WHY_JOIN } from "@/data/careers";
import { HD } from "@/data/photos";

/** Four reasons, set against one photograph — no perks grid, no stock icons. */
export default function WhyJoin() {
  return (
    <section className="bg-white">
      <div className="u-container grid gap-12 py-[clamp(4rem,8vw,7.5rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative min-h-[20rem] overflow-hidden bg-navy lg:min-h-full">
          <Image
            src={HD.engineer}
            alt="A JAYAM technician at work on site"
            fill
            loading="lazy"
            quality={80}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,23,51,0)_45%,rgba(6,23,51,0.78)_100%)]"
          />
          <p className="absolute bottom-7 left-7 text-[clamp(1.3rem,2.1vw,1.9rem)] leading-[1.05] font-extrabold tracking-[-0.03em] text-white">
            <span className="block">The trade is</span>
            <span className="block">the qualification.</span>
          </p>
        </div>

        <div className="lg:py-3">
          <Reveal>
            <p className="u-coord">
              <span className="text-red">02</span> — Why JAYAM
            </p>
            <h2 className="u-display mt-5 text-[clamp(2rem,4.2vw,3.4rem)]">
              <span className="block">What you get</span>
              <span className="u-display-gradient block">out of the job.</span>
            </h2>
          </Reveal>

          <ol className="mt-10 border-t border-navy/12">
            {WHY_JOIN.map((item, i) => (
              <Reveal
                as="li"
                key={item.n}
                delay={i * 70}
                className="border-b border-navy/12"
              >
                <div className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                  <span className="pt-1 text-[0.66rem] font-bold tracking-[0.28em] text-red tabular-nums">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="text-[1.02rem] font-extrabold tracking-[-0.02em] text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[32rem] text-[0.92rem] leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
