import type { Metadata } from "next";

import InnerShell from "@/components/inner/InnerShell";
import PageHero from "@/components/inner/PageHero";
import AboutView from "@/components/inner/AboutView";
import { ABOUT_COPY } from "@/data/inner";
import { HD } from "@/data/photos";

export const metadata: Metadata = {
  title: "About",
  description: ABOUT_COPY.heroLede,
};

export default function AboutPage() {
  return (
    <InnerShell>
      <PageHero
        index="01"
        label={ABOUT_COPY.heroLabel}
        title={[...ABOUT_COPY.heroTitle]}
        lede={ABOUT_COPY.heroLede}
        image={HD.evening}
      />
      <AboutView />
    </InnerShell>
  );
}
