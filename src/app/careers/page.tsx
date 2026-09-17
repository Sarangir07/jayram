import type { Metadata } from "next";

import InnerShell from "@/components/inner/InnerShell";
import CareersHero from "@/components/careers/careers-hero";
import SiteDay from "@/components/careers/site-day";
import WhyJoin from "@/components/careers/why-join";
import ApplyForm from "@/components/careers/apply-form";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the technical team at JAYAM Technical Services LLC in Dubai — MEP, interiors, landscaping and facility care. Send your CV and the trade you work.",
  openGraph: {
    title: "Careers | JAYAM Technical Services LLC",
    description:
      "Join a Dubai technical services team working across MEP, interiors, landscaping and facility care. Apply with your CV.",
  },
};

export default function CareersPage() {
  return (
    <InnerShell>
      <CareersHero />
      <SiteDay />
      <WhyJoin />
      <ApplyForm />
    </InnerShell>
  );
}
