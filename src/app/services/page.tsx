import type { Metadata } from "next";

import InnerShell from "@/components/inner/InnerShell";
import PageHero from "@/components/inner/PageHero";
import ServicesExplorer from "@/components/inner/ServicesExplorer";
import { HD } from "@/data/photos";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Complete MEP, landscaping and technical services for residential and commercial properties in Dubai and the UAE.",
};

export default function ServicesPage() {
  return (
    <InnerShell>
      <PageHero
        index="02"
        label="Capabilities"
        title={["Technical Solutions", "Built Around", "Your Property"]}
        lede="JAYAM Technical Services LLC provides a range of professional services designed to support residential, commercial and retail properties."
        image={HD.mep}
      />
      <ServicesExplorer />
    </InnerShell>
  );
}
