import type { Metadata } from "next";

import InnerShell from "@/components/inner/InnerShell";
import PageHero from "@/components/inner/PageHero";
import IndustriesExplorer from "@/components/inner/IndustriesExplorer";
import { HD } from "@/data/photos";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Technical solutions across villas, commercial buildings, offices, retail, hospitality and residential developments.",
};

export default function IndustriesPage() {
  return (
    <InnerShell>
      <PageHero
        index="04"
        label="Sectors"
        title={["Technical Solutions", "Across Different", "Property Types"]}
        lede="JAYAM provides technical and maintenance services for a variety of property types."
        image={HD.villa}
      />
      <IndustriesExplorer />
    </InnerShell>
  );
}
