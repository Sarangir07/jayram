import type { Metadata } from "next";

import InnerShell from "@/components/inner/InnerShell";
import PageHero from "@/components/inner/PageHero";
import FaqList from "@/components/inner/FaqList";
import { HD } from "@/data/photos";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about JAYAM Technical Services LLC.",
};

export default function FaqPage() {
  return (
    <InnerShell>
      <PageHero
        index="05"
        label="FAQ"
        title={["Everything You", "Need to Know"]}
        lede="Answers taken from the official JAYAM Technical Services LLC company profile."
        image={HD.interior}
      />
      <section className="bg-white">
        <div className="u-container grid gap-12 py-[clamp(3.5rem,7vw,7rem)] lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-teal uppercase">Questions</p>
            <h2 className="u-display mt-4 text-[clamp(2rem,4.4vw,4rem)]">
              Frequently
              <span className="block">asked</span>
              <span className="u-display-gradient block">questions.</span>
            </h2>
          </div>
          <FaqList />
        </div>
      </section>
    </InnerShell>
  );
}
