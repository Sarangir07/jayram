import { Great_Vibes, Inter } from "next/font/google";

/** The single UI family across the whole site. */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Used for one element only — the "Building Comfort / Enhancing Lives" brush
 * line in the hero, which is a brand mark rather than body copy.
 */
export const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-script",
});
