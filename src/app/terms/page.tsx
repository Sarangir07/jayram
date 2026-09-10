import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <main id="main" className="u-container pt-36 pb-24">
      <p className="u-coord">Legal</p>
      <h1 className="u-display mt-6 text-[clamp(2rem,4vw,3.4rem)]">Terms</h1>
      <p className="u-lede mt-6 max-w-[42rem]">
        Engagement terms for {COMPANY.name} are issued with each project
        appointment. This page does not constitute a contract.
      </p>
      <Link href="/contact" className="mt-10 inline-block text-[0.78rem] font-bold tracking-[0.18em] text-navy uppercase">
        Return to enquiry →
      </Link>
    </main>
  );
}
