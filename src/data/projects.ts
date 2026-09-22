/**
 * Project register for the /projects page.
 *
 * Every entry is transcribed from the client's "Completed site details
 * (Jayam)" workbook (public/assets) — the MEP sheet (62 numbered sites,
 * 2022–2026), the NAFFCO site-detail sheet and the Landscaping sheet — plus
 * the handful of landscape entries from the earlier company profile. The
 * register is ordered most recent first; within a year the latest job on the
 * sheet comes first. Sector and category tags are editorial groupings of that
 * same list; images are contextual, category-relevant photography from the
 * site's own library and are never presented as photographs of the named
 * project.
 *
 * Adding or editing a project only requires changing this file.
 */

import { HD } from "@/data/photos";

export type ProjectCategory =
  | "mep"
  | "fitout"
  | "electrical"
  | "plumbing"
  | "landscaping"
  | "pools"
  | "maintenance";

export type CategoryFilter = "all" | ProjectCategory;

export type Emirate = "Dubai" | "Abu Dhabi" | "Sharjah" | "Ajman" | "Umm Al Quwain";

export type Sector =
  | "Hospitality"
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Leisure"
  | "Education"
  | "Palace";

export type Project = {
  id: string;
  number: number;
  title: string;
  location: string;
  /** Emirate(s) the project sits in — a project may span more than one. */
  emirates: Emirate[];
  /** Service exactly as listed in the completed-site register. */
  service: string;
  /** Editorial category used by the archive filter. */
  category: ProjectCategory;
  sector: Sector;
  /** Year completed, per the register. Undated maintenance contracts omit it. */
  year?: number;
  /** Short overview composed only from the register's own name/location/service. */
  description?: string;
  /** Matching `Client.id` in data/clients.ts, where the register names the client. */
  client?: string;
  /** Optional, category-relevant supporting image. Falls back to a category image. */
  image?: string;
  imageAlt?: string;
};

export const CATEGORIES: { id: CategoryFilter; label: string; short: string }[] = [
  { id: "all", label: "All Projects", short: "All" },
  { id: "fitout", label: "MEP Fit-Out", short: "Fit-Out" },
  { id: "mep", label: "MEP", short: "MEP" },
  { id: "electrical", label: "Electrical", short: "Electrical" },
  { id: "plumbing", label: "Plumbing", short: "Plumbing" },
  { id: "landscaping", label: "Landscaping", short: "Landscaping" },
  { id: "pools", label: "Pools", short: "Pools" },
  { id: "maintenance", label: "Maintenance", short: "Maintenance" },
];

/** Long-form service names for the "What we deliver" breakdown. */
export const SERVICE_LABEL: Record<ProjectCategory, string> = {
  fitout: "MEP Fit-Out",
  mep: "MEP Work",
  electrical: "Electrical Works",
  plumbing: "Plumbing Work",
  landscaping: "Landscaping",
  pools: "Swimming Pools",
  maintenance: "Maintenance",
};

const EDITORIAL = "/assets/jayam/editorial";
const P = "/assets/jayam/projects";

/** Category-relevant fallback imagery for entries without a specific image. */
const CATEGORY_IMAGE: Record<ProjectCategory, { image: string; imageAlt: string }> = {
  fitout: { image: HD.interior, imageAlt: "Finished interior fit-out with ceiling services" },
  mep: { image: HD.mep, imageAlt: "Mechanical, electrical and plumbing services installation" },
  electrical: { image: HD.engineer, imageAlt: "Engineer working on an electrical installation" },
  plumbing: { image: HD.plumbing, imageAlt: "Plumbing installation detail" },
  landscaping: { image: `${EDITORIAL}/soft-landscape.jpg`, imageAlt: "Soft landscaping with lawns and planting" },
  pools: { image: `${P}/infinity-pool.jpg`, imageAlt: "Residential swimming pool edge" },
  maintenance: { image: HD.green, imageAlt: "Indoor plants against a modern interior" },
};

type Entry = Omit<Project, "number">;

const NAFFCO_SCOPE = "Fire pump room electrical works — tray, cabling, glanding & termination";

/** Ordered most recent first. Numbering is assigned from this order. */
const ENTRIES: Entry[] = [
  /* ───────────────────────────── 2026 ───────────────────────────── */
  {
    id: "five-iron-golf-yas-bay-terrace",
    title: "Five Iron Golf — Outdoor Terrace",
    location: "Yas Bay Mall, Abu Dhabi",
    emirates: ["Abu Dhabi"],
    service: "MEP Fit-Out (Outdoor Terrace Area)",
    category: "fitout",
    sector: "Leisure",
    year: 2026,
    client: "five-iron-golf",
    description: "MEP fit-out of the outdoor terrace area at Five Iron Golf, Yas Bay Mall, Abu Dhabi.",
    image: `${EDITORIAL}/golf-estate.jpg`,
    imageAlt: "Golf greens under an open sky",
  },
  {
    id: "club-jumana-simulators",
    title: "Club Jumana",
    location: "Jebel Ali, Dubai",
    emirates: ["Dubai"],
    service: "Gaming Simulators Works (2 Nos)",
    category: "fitout",
    sector: "Leisure",
    year: 2026,
    description: "Installation works for two gaming simulators at Club Jumana, Jebel Ali.",
    image: HD.play,
    imageAlt: "Leisure venue interior",
  },
  {
    id: "bota-cafe-jge",
    title: "Bota Café",
    location: "Jumeirah Golf Estate, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2026,
    image: HD.dining,
    imageAlt: "Café dining interior",
  },
  {
    id: "rowleys-yas-bay",
    title: "Rowleys Restaurant",
    location: "Yas Bay, Abu Dhabi",
    emirates: ["Abu Dhabi"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2026,
    client: "rowleys",
    image: HD.restaurant,
    imageAlt: "Restaurant dining room interior",
  },
  {
    id: "hudson-ray-grease-trap",
    title: "Hudson & Ray Restaurant — Grease Trap",
    location: "DIFC, Dubai",
    emirates: ["Dubai"],
    service: "Grease Trap Work",
    category: "plumbing",
    sector: "Hospitality",
    year: 2026,
    client: "hudson-rye",
    description: "Grease trap works for the Hudson & Ray restaurant kitchen at DIFC, Dubai.",
  },
  {
    id: "al-khaleej-camp-grease-trap",
    title: "Al Khaleej Camp — Grease Trap",
    location: "Jebel Ali, Dubai",
    emirates: ["Dubai"],
    service: "Grease Trap Work",
    category: "plumbing",
    sector: "Industrial",
    year: 2026,
    client: "al-khaleej-sugar",
    image: HD.industrial,
    imageAlt: "Industrial facility exterior",
  },
  {
    id: "five-iron-golf-yas-bay-simulators",
    title: "Five Iron Golf — Simulators",
    location: "Yas Bay Mall, Abu Dhabi",
    emirates: ["Abu Dhabi"],
    service: "Gaming Simulators Works (12 Nos)",
    category: "fitout",
    sector: "Leisure",
    year: 2026,
    client: "five-iron-golf",
    description: "Installation works for twelve golf gaming simulators at Five Iron Golf, Yas Bay Mall.",
    image: HD.golf,
    imageAlt: "Indoor golf simulator bay",
  },
  {
    id: "five-iron-golf-yas-bay",
    title: "Five Iron Golf",
    location: "Yas Bay Mall (G+1), Abu Dhabi",
    emirates: ["Abu Dhabi"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Leisure",
    year: 2026,
    client: "five-iron-golf",
    description: "Full MEP fit-out of the two-level Five Iron Golf venue at Yas Bay Mall, Abu Dhabi.",
    image: HD.golf,
    imageAlt: "Indoor golf venue",
  },
  {
    id: "hudson-ray-difc",
    title: "Hudson & Ray Restaurant",
    location: "DIFC, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2026,
    client: "hudson-rye",
    image: `${EDITORIAL}/restaurant.jpg`,
    imageAlt: "Restaurant interior",
  },
  {
    id: "kurasu-difc",
    title: "Kurasu",
    location: "DIFC, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2026,
    client: "kurasu",
    image: `${EDITORIAL}/dining.jpg`,
    imageAlt: "Restaurant dining interior",
  },
  {
    id: "api-packing-industries",
    title: "API Packing Industries",
    location: "Al Khabaisi, Deira, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Industrial",
    year: 2026,
    image: `${EDITORIAL}/industrial.jpg`,
    imageAlt: "Industrial building exterior",
  },
  {
    id: "kurasu-saadiyat-grove",
    title: "Kurasu",
    location: "Saadiyat Grove Mall, Abu Dhabi",
    emirates: ["Abu Dhabi"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2026,
    client: "kurasu",
    image: HD.dining,
    imageAlt: "Casual dining interior",
  },
  {
    id: "five-iron-golf-paramount-simulators",
    title: "Five Iron Golf — Simulators",
    location: "DAMAC Paramount, Business Bay, Dubai",
    emirates: ["Dubai"],
    service: "Gaming Simulators Works (5 Nos)",
    category: "fitout",
    sector: "Leisure",
    year: 2026,
    client: "five-iron-golf",
    description: "Installation works for five golf gaming simulators at Five Iron Golf, DAMAC Paramount.",
    image: HD.golf,
    imageAlt: "Indoor golf simulator bay",
  },
  {
    id: "five-iron-golf-paramount",
    title: "Five Iron Golf",
    location: "DAMAC Paramount, Business Bay, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Leisure",
    year: 2026,
    client: "five-iron-golf",
    image: `${EDITORIAL}/golf-estate.jpg`,
    imageAlt: "Golf greens",
  },
  {
    id: "dirty-birdie-westin-marina",
    title: "Dirti Birti Bar",
    location: "Westin Dubai Marina",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2026,
    image: `${EDITORIAL}/hospitality.jpg`,
    imageAlt: "Hospitality venue interior",
  },
  {
    id: "ontario-tower-office",
    title: "Ontario Tower Office Renovation",
    location: "Business Bay, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Commercial",
    year: 2026,
    image: `${EDITORIAL}/tower.jpg`,
    imageAlt: "Commercial tower exterior",
  },

  /* ───────────────────────────── 2025 ───────────────────────────── */
  {
    id: "city-walk-apartment",
    title: "3 BHK Apartment",
    location: "City Walk, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Residential",
    year: 2025,
    image: `${EDITORIAL}/interior.jpg`,
    imageAlt: "Residential apartment interior",
  },
  {
    id: "five-iron-golf-westin-marina",
    title: "Five Iron Golf",
    location: "Westin Dubai Marina",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Leisure",
    year: 2025,
    client: "five-iron-golf",
    image: HD.golf,
    imageAlt: "Indoor golf venue",
  },
  {
    id: "jge-washroom",
    title: "Jumeirah Golf Estate — Washroom",
    location: "Jumeirah Golf Estate, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Leisure",
    year: 2025,
    image: `${EDITORIAL}/golf-estate.jpg`,
    imageAlt: "Golf course greens in Dubai",
  },
  {
    id: "al-khaleej-camp-painting",
    title: "Al Khaleej Camp (G+4+R)",
    location: "Jebel Ali, Dubai",
    emirates: ["Dubai"],
    service: "Painting Work",
    category: "maintenance",
    sector: "Industrial",
    year: 2025,
    client: "al-khaleej-sugar",
    description: "Painting works across the G+4+R Al Khaleej staff camp building at Jebel Ali.",
    image: HD.industrial,
    imageAlt: "Industrial facility exterior",
  },
  {
    id: "kurasu-dfc-mall",
    title: "Kurasu Restaurant",
    location: "DFC Mall, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2025,
    client: "kurasu",
    image: HD.restaurant,
    imageAlt: "Restaurant dining room interior",
  },
  {
    id: "azure-lounge-jumeirah",
    title: "Azure Lounge",
    location: "Jumeirah, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2025,
    image: `${EDITORIAL}/hospitality.jpg`,
    imageAlt: "Lounge interior",
  },
  {
    id: "g7-residential-ajman",
    title: "G+7 Residential Building",
    location: "Ajman",
    emirates: ["Ajman"],
    service: "Plumbing Work — Replacement of Water Supply & Drainage Lines",
    category: "plumbing",
    sector: "Residential",
    year: 2025,
    description:
      "Replacement of all existing water supply and drainage pipework throughout a G+7 residential building in Ajman.",
    image: HD.tower,
    imageAlt: "Residential building exterior",
  },
  {
    id: "naffco-dubai-south",
    title: "NAFFCO — Multi-User Warehouse",
    location: "Plots FB95 & FB96, Dubai South",
    emirates: ["Dubai"],
    service: NAFFCO_SCOPE,
    category: "electrical",
    sector: "Industrial",
    year: 2025,
    description: "Fire pump room electrical works for a multi-user warehouse at Dubai South, delivered for NAFFCO.",
  },
  {
    id: "naffco-al-qudra",
    title: "NAFFCO — Mira Dubai British School",
    location: "Al Qudra Road, Al Yalayis, Dubai",
    emirates: ["Dubai"],
    service: NAFFCO_SCOPE,
    category: "electrical",
    sector: "Education",
    year: 2025,
    description: "Fire pump room electrical works at Mira Dubai British School (Plot 921 6993), delivered for NAFFCO.",
  },
  {
    id: "naffco-jvc",
    title: "NAFFCO — Rise Residences",
    location: "Jumeirah Village Circle, Dubai",
    emirates: ["Dubai"],
    service: NAFFCO_SCOPE,
    category: "electrical",
    sector: "Residential",
    year: 2025,
    description: "Fire pump room electrical works at Rise Residences (G+4P+1I+R), JVC, delivered for NAFFCO.",
  },
  {
    id: "naffco-al-jada",
    title: "NAFFCO — Al Jada (2 Sites)",
    location: "Al Jada, Sharjah",
    emirates: ["Sharjah"],
    service: NAFFCO_SCOPE,
    category: "electrical",
    sector: "Commercial",
    year: 2025,
    description:
      "Fire pump room electrical works at two B+G+7+R / B+G+6+R commercial and residential buildings (Plots K006 & K003), Al Jada, delivered for NAFFCO.",
  },
  {
    id: "naffco-al-jubail",
    title: "NAFFCO — Al Jubail",
    location: "Al Jubail, Sharjah",
    emirates: ["Sharjah"],
    service: NAFFCO_SCOPE,
    category: "electrical",
    sector: "Commercial",
    year: 2025,
    description:
      "Fire pump room electrical works at a B+G+7+R commercial and residential building (Plot K003), Al Jubail, delivered for NAFFCO.",
  },
  {
    id: "naffco-al-furjan",
    title: "NAFFCO — Amalia Residential Tower",
    location: "Al Furjan, Dubai",
    emirates: ["Dubai"],
    service: NAFFCO_SCOPE,
    category: "electrical",
    sector: "Residential",
    year: 2025,
    description: "Fire pump room electrical works at Amalia Residential Tower (Plot 024), Al Furjan, delivered for NAFFCO.",
  },
  {
    id: "naffco-al-satwa",
    title: "NAFFCO — Al Satwa (2 Sites)",
    location: "Al Satwa, Dubai",
    emirates: ["Dubai"],
    service: NAFFCO_SCOPE,
    category: "electrical",
    sector: "Residential",
    year: 2025,
    description:
      "Fire pump room electrical works at two G+2P+8+HC buildings (Plots 334-7221 & 334-7222), Al Satwa, delivered for NAFFCO.",
  },
  {
    id: "al-khaleej-camp-waterproofing",
    title: "Al Khaleej Sugar Camp — Waterproofing",
    location: "Jebel Ali, Dubai",
    emirates: ["Dubai"],
    service: "Waterproofing Work (3rd & 4th Floor, 8 Washroom Units)",
    category: "maintenance",
    sector: "Industrial",
    year: 2025,
    client: "al-khaleej-sugar",
    image: HD.industrial,
    imageAlt: "Industrial facility exterior",
  },
  {
    id: "al-khaleej-camp-drainage",
    title: "Al Khaleej Sugar Camp — Drainage",
    location: "Jebel Ali, Dubai",
    emirates: ["Dubai"],
    service: "Drainage Replacement Work (3rd & 4th Floor, 8 Washroom Units)",
    category: "plumbing",
    sector: "Industrial",
    year: 2025,
    client: "al-khaleej-sugar",
    image: HD.industrial,
    imageAlt: "Industrial facility exterior",
  },
  {
    id: "al-khaleej-camp-3f",
    title: "Al Khaleej Sugar Camp — 3rd Floor",
    location: "Jebel Ali, Dubai",
    emirates: ["Dubai"],
    service: "Plumbing Maintenance Work (3rd Floor Washroom, 4 Units)",
    category: "plumbing",
    sector: "Industrial",
    year: 2025,
    client: "al-khaleej-sugar",
    image: HD.industrial,
    imageAlt: "Industrial facility exterior",
  },
  {
    id: "al-khaleej-camp-4f",
    title: "Al Khaleej Sugar Camp — 4th Floor",
    location: "Jebel Ali, Dubai",
    emirates: ["Dubai"],
    service: "Plumbing Maintenance Work (4th Floor Washroom, 4 Units)",
    category: "plumbing",
    sector: "Industrial",
    year: 2025,
    client: "al-khaleej-sugar",
    image: HD.industrial,
    imageAlt: "Industrial facility exterior",
  },
  {
    id: "flat-401-al-haseer",
    title: "Flat 401, Al Haseer 7",
    location: "Palm Jumeirah, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Residential",
    year: 2025,
    image: `${EDITORIAL}/luxury-villa.jpg`,
    imageAlt: "Luxury residential interior",
  },
  {
    id: "kurasu-dar-al-wasl",
    title: "Kurasu Restaurant",
    location: "Dar Al Wasl Mall, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2025,
    client: "kurasu",
    image: `${EDITORIAL}/dining.jpg`,
    imageAlt: "Restaurant dining interior",
  },

  /* ───────────────────────────── 2024 ───────────────────────────── */
  {
    id: "le-meridien-main-kitchen",
    title: "Main Kitchen Renovation",
    location: "Le Méridien Mina Seyahi, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2024,
    image: HD.hospitality,
    imageAlt: "Hotel interior with warm lighting",
  },
  {
    id: "al-khaleej-camp-1f-4",
    title: "Al Khaleej Sugar Camp — 1st Floor",
    location: "Jebel Ali, Dubai",
    emirates: ["Dubai"],
    service: "Plumbing Maintenance Work (1st Floor Washroom, 4 Units)",
    category: "plumbing",
    sector: "Industrial",
    year: 2024,
    client: "al-khaleej-sugar",
    image: HD.industrial,
    imageAlt: "Industrial facility exterior",
  },
  {
    id: "westin-cold-kitchen",
    title: "Cold Kitchen Renovation",
    location: "Westin Mina Seyahi, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2024,
    image: HD.hospitality,
    imageAlt: "Hotel interior",
  },
  {
    id: "westin-main-kitchen",
    title: "Main Kitchen Renovation",
    location: "Westin Mina Seyahi, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2024,
    image: `${EDITORIAL}/hospitality.jpg`,
    imageAlt: "Hospitality venue interior",
  },
  {
    id: "la-brioche-cityland",
    title: "La Brioche Restaurant",
    location: "Cityland Mall, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2024,
    image: HD.dining,
    imageAlt: "Casual dining interior",
  },
  {
    id: "al-khaleej-camp-2f",
    title: "Al Khaleej Sugar Camp — 2nd Floor",
    location: "Jebel Ali, Dubai",
    emirates: ["Dubai"],
    service: "Plumbing Maintenance Work (2nd Floor Washroom, 4 Units)",
    category: "plumbing",
    sector: "Industrial",
    year: 2024,
    client: "al-khaleej-sugar",
    image: HD.industrial,
    imageAlt: "Industrial facility exterior",
  },
  {
    id: "shura-island-dune-camp",
    title: "Shura Island Hotel 3 — East Dune Camp",
    location: "Dupod, Dubai Industrial City",
    emirates: ["Dubai"],
    service: "Plumbing Work",
    category: "plumbing",
    sector: "Industrial",
    year: 2024,
    image: `${EDITORIAL}/industrial.jpg`,
    imageAlt: "Industrial site",
  },
  {
    id: "drift-beach-club",
    title: "Drift Beach Club",
    location: "One&Only Royal Mirage, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2024,
    image: `${EDITORIAL}/pool-amenity.jpg`,
    imageAlt: "Beach club pool amenity",
  },
  {
    id: "tiger-jax-grand-hyatt",
    title: "Tiger JAX",
    location: "Grand Hyatt, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2024,
    client: "hyatt",
    description: "MEP fit-out for an entertainment venue inside the Grand Hyatt, Dubai.",
    image: HD.hospitality,
    imageAlt: "Hotel interior with warm lighting, representative of hospitality MEP work",
  },
  {
    id: "chinese-restaurant-grand-belle-vue",
    title: "Chinese Restaurant, Grand Belle Vue",
    location: "Barsha Heights, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2024,
    image: HD.restaurant,
    imageAlt: "Restaurant dining room interior",
  },
  {
    id: "crafty-fox-yas-links",
    title: "Crafty Fox",
    location: "Yas Links, Abu Dhabi",
    emirates: ["Abu Dhabi"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2024,
    client: "crafty-fox",
    image: `${EDITORIAL}/dining.jpg`,
    imageAlt: "Restaurant dining interior",
  },
  {
    id: "fair-way",
    title: "Fair Way",
    location: "Al Garhoud, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Commercial",
    year: 2024,
    image: `${EDITORIAL}/golf-estate.jpg`,
    imageAlt: "Golf course greens in Dubai",
  },
  {
    id: "riviera-tower",
    title: "Riviera Tower",
    location: "Sharjah",
    emirates: ["Sharjah"],
    service: "Indoor Plant Maintenance",
    category: "maintenance",
    sector: "Residential",
    year: 2024,
    image: HD.green,
    imageAlt: "Indoor plants against a modern interior",
  },
  {
    id: "line-investment-properties",
    title: "Line Investment Properties",
    location: "Sharjah Central",
    emirates: ["Sharjah"],
    service: "Soft Landscape & Maintenance",
    category: "landscaping",
    sector: "Commercial",
    year: 2024,
    image: `${EDITORIAL}/soft-landscape.jpg`,
    imageAlt: "Soft landscaping with lawns and planting",
  },
  {
    id: "al-gurm-palace",
    title: "Al Gurm Palace",
    location: "H.H. Sheikh Ammar Bin Humaid Al Nuaimi, Ajman",
    emirates: ["Ajman"],
    service: "Indoor Plants",
    category: "landscaping",
    sector: "Palace",
    year: 2024,
    image: `${P}/indoor-greenery.jpg`,
    imageAlt: "Indoor planting in a large interior",
  },

  /* ───────────────────────────── 2023 ───────────────────────────── */
  {
    id: "kai-enzo-restaurant",
    title: "Kai Enzo Restaurant",
    location: "Hyatt Centric, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2023,
    client: "hyatt",
    image: HD.restaurant,
    imageAlt: "Restaurant dining room interior",
  },
  {
    id: "yogurt-berry",
    title: "Yogurt Berry",
    location: "Sport Society, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Leisure",
    year: 2023,
    image: HD.dining,
    imageAlt: "Casual dining counter interior",
  },
  {
    id: "al-khaleej-camp-1f-1",
    title: "Al Khaleej Sugar Camp — 1st Floor",
    location: "Jebel Ali, Dubai",
    emirates: ["Dubai"],
    service: "Plumbing Maintenance Work (1st Floor Washroom, 1 Unit)",
    category: "plumbing",
    sector: "Industrial",
    year: 2023,
    client: "al-khaleej-sugar",
    image: HD.industrial,
    imageAlt: "Industrial facility exterior",
  },
  {
    id: "grand-belle-vue",
    title: "Grand Belle Vue",
    location: "Barsha Heights, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2023,
    image: HD.interior,
    imageAlt: "Finished interior fit-out with ceiling services",
  },
  {
    id: "muteena-villa",
    title: "Muteena Villa",
    location: "Dubai",
    emirates: ["Dubai"],
    service: "Plumbing Work",
    category: "plumbing",
    sector: "Residential",
    year: 2023,
    image: HD.plumbing,
    imageAlt: "Plumbing installation detail",
  },
  {
    id: "sparkle-tower",
    title: "Sparkle Tower",
    location: "Dubai Marina, Jumeirah",
    emirates: ["Dubai"],
    service: "Chilled Water Work",
    category: "mep",
    sector: "Residential",
    year: 2023,
    image: `${EDITORIAL}/marina.jpg`,
    imageAlt: "Dubai Marina towers at dusk",
  },
  {
    id: "al-khaleej-sugar-refinery",
    title: "Al Khaleej Sugar Refinery",
    location: "JAFZA, Dubai",
    emirates: ["Dubai"],
    service: "Plumbing Maintenance Work",
    category: "plumbing",
    sector: "Industrial",
    year: 2023,
    client: "al-khaleej-sugar",
    image: `${EDITORIAL}/industrial.jpg`,
    imageAlt: "Industrial refinery exterior",
  },
  {
    id: "villa-79-damac-hills",
    title: "Villa 79, DAMAC Hills",
    location: "DAMAC Hills, Dubai — 32 Villas",
    emirates: ["Dubai"],
    service: "Plumbing Work (32 Villas)",
    category: "plumbing",
    sector: "Residential",
    year: 2023,
    client: "damac-hills",
    description: "Plumbing works across a 32-villa development at DAMAC Hills, Dubai.",
    image: `${P}/villa-pool.jpg`,
    imageAlt: "Residential villa with garden and pool",
  },

  /* ───────────────────────────── 2022 ───────────────────────────── */
  {
    id: "bussola",
    title: "Bussola",
    location: "Jumeirah Golf Estate, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2022,
    client: "bussola",
    description: "MEP fit-out for the Bussola restaurant at Jumeirah Golf Estate, Dubai.",
    image: `${EDITORIAL}/hospitality.jpg`,
    imageAlt: "Hospitality venue interior",
  },
  {
    id: "private-villa-l29",
    title: "Villa L29",
    location: "Emirates Hills, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Residential",
    year: 2022,
    description: "MEP fit-out for a private residence in Emirates Hills, Dubai.",
    image: `${P}/villa-white.jpg`,
    imageAlt: "White contemporary villa exterior",
  },
  {
    id: "botanica",
    title: "Botanica",
    location: "Jumeirah Golf Estate, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2022,
    client: "botanica",
    description: "MEP fit-out for Botanica at Jumeirah Golf Estate, Dubai.",
    image: `${P}/indoor-greenery.jpg`,
    imageAlt: "Indoor greenery in a dining space",
  },
  {
    id: "crafty-fox",
    title: "Crafty Fox",
    location: "Jumeirah Golf Estate & Yas Links, Abu Dhabi",
    emirates: ["Dubai", "Abu Dhabi"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    year: 2022,
    client: "crafty-fox",
    description: "MEP fit-out delivered across two venues — Jumeirah Golf Estate and Yas Links, Abu Dhabi.",
    image: `${EDITORIAL}/dining.jpg`,
    imageAlt: "Restaurant dining interior",
  },

  /* ─────────────── Landscape & pool maintenance (ongoing) ─────────────── */
  {
    id: "private-villa-218-al-muteena",
    title: "Private Villa 218",
    location: "Al Muteena, Dubai",
    emirates: ["Dubai"],
    service: "Soft Landscape & Maintenance",
    category: "landscaping",
    sector: "Residential",
    image: `${P}/garden-path.jpg`,
    imageAlt: "Garden path through planted landscaping",
  },
  {
    id: "private-villa-10-sharqan",
    title: "Private Villa 10",
    location: "Sharqan, Sharjah",
    emirates: ["Sharjah"],
    service: "Soft Landscape & Swimming Pool Maintenance",
    category: "pools",
    sector: "Residential",
    image: `${P}/villa-pool.jpg`,
    imageAlt: "Residential villa with garden and pool",
  },
  {
    id: "private-villa-6-rahmania",
    title: "Private Villa 6",
    location: "Rahmania, Sharjah",
    emirates: ["Sharjah"],
    service: "Soft Landscape & Fountain Maintenance",
    category: "landscaping",
    sector: "Residential",
    image: `${EDITORIAL}/water-feature.jpg`,
    imageAlt: "Landscaped water feature",
  },
  {
    id: "private-villa-1582-rahmania",
    title: "Private Villa 1582",
    location: "Rahmania, Sharjah",
    emirates: ["Sharjah"],
    service: "Landscape & Fountain Maintenance",
    category: "landscaping",
    sector: "Residential",
    image: `${P}/water-dusk.jpg`,
    imageAlt: "Landscaped water feature at dusk",
  },
  {
    id: "private-villa-334-rahmania",
    title: "Private Villa 334",
    location: "Rahmania, Sharjah",
    emirates: ["Sharjah"],
    service: "Landscape & Fountain Maintenance",
    category: "landscaping",
    sector: "Residential",
    image: `${EDITORIAL}/water-feature.jpg`,
    imageAlt: "Landscaped water feature",
  },
  {
    id: "private-villa-131",
    title: "Private Villa 131",
    location: "Al Juraina, Sharjah",
    emirates: ["Sharjah"],
    service: "Landscape & Swimming Pool Maintenance",
    category: "pools",
    sector: "Residential",
    description: "Landscape and swimming pool maintenance for a private residence at Al Juraina, Sharjah.",
    image: `${P}/infinity-pool.jpg`,
    imageAlt: "Residential swimming pool edge",
  },
  {
    id: "al-zahir-palace",
    title: "Al Zahir Palace",
    location: "Ajman",
    emirates: ["Ajman"],
    service: "Landscape & Indoor Plantation",
    category: "landscaping",
    sector: "Palace",
    image: `${P}/water-dusk.jpg`,
    imageAlt: "Landscaped water feature at dusk",
  },
  {
    id: "private-villa-4",
    title: "Private Villa 4",
    location: "Umm Al Quwain",
    emirates: ["Umm Al Quwain"],
    service: "Landscape & Indoor Plantation",
    category: "landscaping",
    sector: "Residential",
    image: `${P}/garden-path.jpg`,
    imageAlt: "Garden path through planted landscaping",
  },
];

export const PROJECTS: Project[] = ENTRIES.map((e, i) => ({
  ...CATEGORY_IMAGE[e.category],
  ...e,
  number: i + 1,
}));

/**
 * Some register entries sit under more than one heading — e.g. "Landscape &
 * Swimming Pool Maintenance" is a pools project *and* a maintenance project.
 * This is the full set of categories each project answers to.
 */
export const projectCategories = (p: Project): ProjectCategory[] => {
  const set = new Set<ProjectCategory>([p.category]);
  const s = p.service.toLowerCase();
  if (s.includes("maintenance")) set.add("maintenance");
  if (s.includes("landscape") || s.includes("plant")) set.add("landscaping");
  if (s.includes("pool")) set.add("pools");
  if (s.includes("plumbing") || s.includes("drainage") || s.includes("grease trap")) set.add("plumbing");
  if (s.includes("electrical")) set.add("electrical");
  if (s.includes("mep")) set.add("mep");
  return [...set];
};

export const inCategory = (p: Project, c: CategoryFilter) =>
  c === "all" || projectCategories(p).includes(c);

export const EMIRATES: Emirate[] = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Umm Al Quwain"];

/** Distinct years in the register, most recent first. */
export const YEARS = [...new Set(PROJECTS.flatMap((p) => (p.year ? [p.year] : [])))].sort(
  (a, b) => b - a,
);

const SPAN = `${YEARS[YEARS.length - 1]}–${YEARS[0]}`;

export type YearGroup = { key: string; label: string; year?: number; projects: Project[] };

/** Label used for undated (ongoing maintenance) contracts. */
export const ONGOING_LABEL = "Ongoing Maintenance";

/**
 * Split a list of projects into year groups, preserving register order
 * (newest first). Undated maintenance contracts form a final group.
 */
export const groupByYear = (list: Project[]): YearGroup[] => {
  const groups: YearGroup[] = [];
  for (const p of list) {
    const key = p.year ? String(p.year) : "ongoing";
    let g = groups[groups.length - 1];
    if (!g || g.key !== key) {
      g = { key, label: p.year ? String(p.year) : ONGOING_LABEL, year: p.year, projects: [] };
      groups.push(g);
    }
    g.projects.push(p);
  }
  return groups;
};

export const HERO_STATS = [
  { value: String(PROJECTS.length), label: "Completed Sites" },
  { value: SPAN, label: "Delivery Years" },
  { value: String(CATEGORIES.length - 1), label: "Service Areas" },
  { value: "UAE", label: "Region" },
] as const;

export const ARCHIVE_NUMBERS = [
  { value: String(PROJECTS.length), label: "Completed Sites" },
  { value: SPAN, label: "Delivery Years" },
  { value: "UAE", label: "Project Region" },
] as const;

export const byId = (id: string): Project => {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown project id ${id}`);
  return p;
};

export const projectNumber = (n: number) => String(n).padStart(2, "0");
