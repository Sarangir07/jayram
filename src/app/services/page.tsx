import type { Metadata } from "next";

import Services from "@/components/sections/Services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <main id="main" className="pt-[4.75rem]">
      <Services />
    </main>
  );
}
