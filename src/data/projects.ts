/**
 * Project register for the /projects page.
 *
 * Project names, locations and service scopes are transcribed from the JAYAM
 * company profile and are the only facts the page presents. Sector and
 * category tags are editorial groupings of that same list; images are
 * contextual, category-relevant photography from the site's own library and
 * are never presented as photographs of the named project.
 *
 * Adding or editing a project only requires changing this file.
 */

import { HD } from "@/data/photos";

export type ProjectCategory =
  | "mep"
  | "fitout"
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
  | "Palace";

export type Project = {
  id: string;
  number: number;
  title: string;
  location: string;
  /** Emirate(s) the project sits in — a project may span more than one. */
  emirates: Emirate[];
  /** Service exactly as listed in the company profile. */
  service: string;
  /** Editorial category used by the archive filter. */
  category: ProjectCategory;
  sector: Sector;
  /** Short overview composed only from the profile's own name/location/service. */
  description?: string;
  /** Matching `Client.id` in data/clients.ts, where the profile names the client. */
  client?: string;
  /** Optional, category-relevant supporting image. Used sparingly. */
  image?: string;
  imageAlt?: string;
};

export const CATEGORIES: { id: CategoryFilter; label: string; short: string }[] = [
  { id: "all", label: "All Projects", short: "All" },
  { id: "mep", label: "MEP", short: "MEP" },
  { id: "fitout", label: "Fit-Out", short: "Fit-Out" },
  { id: "plumbing", label: "Plumbing", short: "Plumbing" },
  { id: "landscaping", label: "Landscaping", short: "Landscaping" },
  { id: "pools", label: "Pools", short: "Pools" },
  { id: "maintenance", label: "Maintenance", short: "Maintenance" },
];

/** Long-form service names for the "What we deliver" breakdown. */
export const SERVICE_LABEL: Record<ProjectCategory, string> = {
  mep: "MEP Work",
  fitout: "MEP Fit-Out",
  plumbing: "Plumbing Work",
  landscaping: "Landscaping",
  pools: "Swimming Pools",
  maintenance: "Maintenance",
};

const EDITORIAL = "/assets/jayam/editorial";
const P = "/assets/jayam/projects";

export const PROJECTS: Project[] = [
  {
    id: "tiger-jax-megaplex",
    number: 1,
    title: "Tiger JAX at Megaplex",
    location: "Grand Hyatt, Dubai",
    emirates: ["Dubai"],
    service: "MEP Work",
    category: "mep",
    sector: "Hospitality",
    client: "hyatt",
    description:
      "Mechanical, electrical and plumbing works for an entertainment venue inside the Grand Hyatt, Dubai.",
    image: HD.hospitality,
    imageAlt: "Hotel interior with warm lighting, representative of hospitality MEP work",
  },
  {
    id: "fair-way",
    number: 2,
    title: "Fair Way",
    location: "Al Garhoud, Dubai",
    emirates: ["Dubai"],
    service: "MEP Work",
    category: "mep",
    sector: "Commercial",
    image: `${EDITORIAL}/golf-estate.jpg`,
    imageAlt: "Golf course greens in Dubai",
  },
  {
    id: "private-villa-l29",
    number: 3,
    title: "Private Villa L29",
    location: "Emirates Hills, Dubai",
    emirates: ["Dubai"],
    service: "MEP Work",
    category: "mep",
    sector: "Residential",
    description:
      "MEP works for a private residence in Emirates Hills, Dubai.",
    image: `${P}/villa-white.jpg`,
    imageAlt: "White contemporary villa exterior",
  },
  {
    id: "kai-enzo-restaurant",
    number: 4,
    title: "Kai Enzo Restaurant",
    location: "Hyatt Centric, Dubai",
    emirates: ["Dubai"],
    service: "MEP Work",
    category: "mep",
    sector: "Hospitality",
    client: "hyatt",
    image: HD.restaurant,
    imageAlt: "Restaurant dining room interior",
  },
  {
    id: "yogurt-berry",
    number: 5,
    title: "Yogurt Berry",
    location: "Sport Society, Dubai",
    emirates: ["Dubai"],
    service: "MEP Work",
    category: "mep",
    sector: "Leisure",
    image: HD.dining,
    imageAlt: "Casual dining counter interior",
  },
  {
    id: "grand-belle-vue",
    number: 6,
    title: "Grand Belle Vue",
    location: "Barsha Heights, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    image: HD.interior,
    imageAlt: "Finished interior fit-out with ceiling services",
  },
  {
    id: "bussola",
    number: 7,
    title: "Bussola",
    location: "Jumeirah Golf Estate, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    client: "bussola",
    description:
      "MEP fit-out for the Bussola restaurant at Jumeirah Golf Estate, Dubai.",
    image: `${EDITORIAL}/hospitality.jpg`,
    imageAlt: "Hospitality venue interior",
  },
  {
    id: "crafty-fox",
    number: 8,
    title: "Crafty Fox",
    location: "Jumeirah Golf Estate & Yas Links, Abu Dhabi",
    emirates: ["Dubai", "Abu Dhabi"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    client: "crafty-fox",
    description:
      "MEP fit-out delivered across two venues — Jumeirah Golf Estate and Yas Links, Abu Dhabi.",
    image: `${EDITORIAL}/dining.jpg`,
    imageAlt: "Restaurant dining interior",
  },
  {
    id: "botanica",
    number: 9,
    title: "Botanica",
    location: "Jumeirah Golf Estate, Dubai",
    emirates: ["Dubai"],
    service: "MEP Fit-Out",
    category: "fitout",
    sector: "Hospitality",
    client: "botanica",
    description:
      "MEP fit-out for Botanica at Jumeirah Golf Estate, Dubai.",
    image: `${P}/indoor-greenery.jpg`,
    imageAlt: "Indoor greenery in a dining space",
  },
  {
    id: "muteena-villa",
    number: 10,
    title: "Muteena Villa",
    location: "Dubai",
    emirates: ["Dubai"],
    service: "Plumbing Work",
    category: "plumbing",
    sector: "Residential",
    image: HD.plumbing,
    imageAlt: "Plumbing installation detail",
  },
  {
    id: "al-khaleej-camp",
    number: 11,
    title: "Al Khaleej Camp",
    location: "Jebel Ali Industrial 3, Dubai",
    emirates: ["Dubai"],
    service: "Plumbing Work",
    category: "plumbing",
    sector: "Industrial",
    image: HD.industrial,
    imageAlt: "Industrial facility exterior",
  },
  {
    id: "villa-79-damac-hills",
    number: 12,
    title: "Villa 79, DAMAC Hills",
    location: "DAMAC Hills, Dubai — 32 Villas",
    emirates: ["Dubai"],
    service: "Plumbing Work",
    category: "plumbing",
    sector: "Residential",
    client: "damac-hills",
    description:
      "Plumbing works across a 32-villa development at DAMAC Hills, Dubai.",
    image: `${P}/villa-pool.jpg`,
    imageAlt: "Residential villa with garden and pool",
  },
  {
    id: "sparkle-tower",
    number: 13,
    title: "Sparkle Tower",
    location: "Dubai Marina, Jumeirah",
    emirates: ["Dubai"],
    service: "Chilled Water Work",
    category: "mep",
    sector: "Residential",
    image: `${EDITORIAL}/marina.jpg`,
    imageAlt: "Dubai Marina towers at dusk",
  },
  {
    id: "al-gurm-palace",
    number: 14,
    title: "Al Gurm Palace",
    location: "H H Sheikh Ammar Bin Humaid Al Nuaimi, Ajman",
    emirates: ["Ajman"],
    service: "Indoor Plantation",
    category: "landscaping",
    sector: "Palace",
    image: `${P}/indoor-greenery.jpg`,
    imageAlt: "Indoor planting in a large interior",
  },
  {
    id: "riviera-tower",
    number: 15,
    title: "Riviera Tower",
    location: "Sharjah",
    emirates: ["Sharjah"],
    service: "Indoor Plant Maintenance",
    category: "maintenance",
    sector: "Residential",
    image: HD.green,
    imageAlt: "Indoor plants against a modern interior",
  },
  {
    id: "line-investment-properties",
    number: 16,
    title: "Line Investment Properties",
    location: "Sharjah Central",
    emirates: ["Sharjah"],
    service: "Soft Landscape & Maintenance",
    category: "landscaping",
    sector: "Commercial",
    image: `${EDITORIAL}/soft-landscape.jpg`,
    imageAlt: "Soft landscaping with lawns and planting",
  },
  {
    id: "private-villa-4",
    number: 17,
    title: "Private Villa 4",
    location: "Umm Al Quwain",
    emirates: ["Umm Al Quwain"],
    service: "Landscape & Indoor Plantation",
    category: "landscaping",
    sector: "Residential",
    image: `${P}/garden-path.jpg`,
    imageAlt: "Garden path through planted landscaping",
  },
  {
    id: "al-zahir-palace",
    number: 18,
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
    id: "private-villa-131",
    number: 19,
    title: "Private Villa 131",
    location: "Al Juraina, Sharjah",
    emirates: ["Sharjah"],
    service: "Landscape & Swimming Pool Maintenance",
    category: "pools",
    sector: "Residential",
    description:
      "Landscape and swimming pool maintenance for a private residence at Al Juraina, Sharjah.",
    image: `${P}/infinity-pool.jpg`,
    imageAlt: "Residential swimming pool edge",
  },
];

/**
 * Some profile entries sit under more than one heading — e.g. "Landscape &
 * Swimming Pool Maintenance" is a pools project *and* a maintenance project.
 * This is the full set of categories each project answers to.
 */
export const projectCategories = (p: Project): ProjectCategory[] => {
  const set = new Set<ProjectCategory>([p.category]);
  const s = p.service.toLowerCase();
  if (s.includes("maintenance")) set.add("maintenance");
  if (s.includes("landscape") || s.includes("plantation")) set.add("landscaping");
  if (s.includes("pool")) set.add("pools");
  if (s.includes("plumbing")) set.add("plumbing");
  return [...set];
};

export const inCategory = (p: Project, c: CategoryFilter) =>
  c === "all" || projectCategories(p).includes(c);

export const EMIRATES: Emirate[] = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Umm Al Quwain"];

export const HERO_STATS = [
  { value: "100+", label: "Projects" },
  { value: String(PROJECTS.length), label: "Selected Projects" },
  { value: "5+", label: "Service Areas" },
  { value: "UAE", label: "Region" },
] as const;

export const ARCHIVE_NUMBERS = [
  { value: String(PROJECTS.length), label: "Selected Projects" },
  { value: "100+", label: "Delivered Projects" },
  { value: "UAE", label: "Project Region" },
] as const;

export const byId = (id: string): Project => {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown project id ${id}`);
  return p;
};

export const projectNumber = (n: number) => String(n).padStart(2, "0");
