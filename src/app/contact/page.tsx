import type { Metadata } from "next";

import InnerShell from "@/components/inner/InnerShell";
import PageHero from "@/components/inner/PageHero";
import ContactStudio from "@/components/inner/ContactStudio";
import { CONTACT_COPY } from "@/data/inner";
import { HD } from "@/data/photos";

export const metadata: Metadata = {
  title: "Contact",
  description: CONTACT_COPY.lede,
};

export default function ContactPage() {
  return (
    <InnerShell>
      <PageHero
        index="06"
        label={CONTACT_COPY.heroLabel}
        title={[...CONTACT_COPY.heroTitle]}
        lede={CONTACT_COPY.lede}
        image={HD.dubai}
      />
      <ContactStudio />
    </InnerShell>
  );
}
