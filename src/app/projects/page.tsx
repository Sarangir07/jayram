import type { Metadata } from "next";

import InnerShell from "@/components/inner/InnerShell";
import PageHero from "@/components/inner/PageHero";
import ProjectsArchive from "@/components/inner/ProjectsArchive";
import { HD } from "@/data/photos";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected JAYAM work across the UAE, including MEP, fit-out, plumbing, chilled water, landscape and pool maintenance.",
};

export default function ProjectsPage() {
  return (
    <InnerShell>
      <PageHero
        index="03"
        label="Projects"
        title={["Selected Work", "Across the UAE"]}
        lede="Our project portfolio demonstrates experience across villas, restaurants, hotels, retail spaces, commercial properties and residential developments. Names and scopes are taken from the company brochure."
        image={HD.hospitality}
      />
      <ProjectsArchive />
    </InnerShell>
  );
}
