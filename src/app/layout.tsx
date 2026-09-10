import type { Metadata, Viewport } from "next";

import { inter, script } from "@/lib/fonts";
import { COMPANY } from "@/data/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — Integrated Facility Solutions, Dubai`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description:
    "Complete MEP, Landscaping and Facility Solutions delivered with quality, reliability and a commitment to a better tomorrow.",
  applicationName: COMPANY.name,
  icons: { icon: "/assets/jayam/logo/jayam-mark-square.png" },
  openGraph: {
    title: `${COMPANY.name} — Integrated Facility Solutions`,
    description:
      "Complete MEP, Landscaping and Facility Solutions delivered with quality, reliability and a commitment to a better tomorrow.",
    locale: "en_AE",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#061733",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${script.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-100 focus-visible:rounded-full focus-visible:bg-navy focus-visible:px-5 focus-visible:py-3 focus-visible:font-bold focus-visible:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
