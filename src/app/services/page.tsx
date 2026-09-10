import type { Metadata } from "next";

import Services from "@/components/sections/Services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <main id="main" className="pt-[calc(var(--nav-pad)+4.5rem)] lg:pt-[calc(var(--nav-pad)+6.2rem)]">
      <Services />
    </main>
  );
}
