/**
 * Single source of truth for site content.
 *
 * Facts are limited to the supplied company brief and artwork. Nothing here
 * invents awards, certifications, testimonials, contact numbers or statistics
 * beyond the hero's "100+ Projects Delivered Across UAE" figure.
 */

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const COMPANY = {
  name: "JAYAM Technical Services LLC",
  shortName: "JAYAM",
  location: "Dubai, UAE",
  established: 2021,
  strapline: "The expertise your future facility needs",
  taglines: {
    script: ["Building Comfort", "Enhancing Lives"],
    vertical: ["People", "Spaces", "A Better", "Tomorrow"],
    lower: ["Engineering Comfort", "Enhancing Lives"],
  },
  phone: null as string | null,
  email: null as string | null,
  address: null as string | null,
  social: [] as { label: string; href: string }[],
} as const;

type LedePart = { text: string; bold?: boolean };

export const HERO = {
  eyebrow: "Integrated Facility Solutions",
  headline: ["Expertise", "for Spaces", "That Matter"],
  lede: [
    { text: "Complete " },
    { text: "MEP", bold: true },
    { text: ", " },
    { text: "Landscaping", bold: true },
    { text: " and " },
    { text: "Facility", bold: true },
    { text: " Solutions delivered with quality, " },
    { text: "reliability", bold: true },
    { text: " and a commitment to a better tomorrow." },
  ] as LedePart[],
  primaryCta: { label: "Explore Our Solutions", href: "/services" },
  secondaryCta: { label: "Watch Our Story", href: "/about" },
  features: [
    { icon: "gem", label: ["Quality", "Delivery"] },
    { icon: "users", label: ["Client", "Focused"] },
    { icon: "leaf", label: ["Sustainable", "Solutions"] },
    { icon: "chart", label: ["Long-term", "Partnerships"] },
  ],
  stat: { value: "100+", line1: "Projects Delivered", line2: "Across UAE" },
} as const;

export type Service = {
  slug: string;
  title: string;
  panelTitle: [string] | [string, string];
  icon: string;
  image: string;
  blurb: string;
};

export const SERVICES: Service[] = [
  {
    slug: "electro-mechanical",
    title: "Electro Mechanical",
    panelTitle: ["Electro", "Mechanical"],
    icon: "settings",
    image: "/assets/jayam/services/electro-mechanical.jpg",
    blurb:
      "Design, installation and maintenance of integrated electrical and mechanical systems across the building envelope.",
  },
  {
    slug: "air-conditioning",
    title: "Air Conditioning & Ventilation",
    panelTitle: ["Air Conditioning", "& Ventilation"],
    icon: "snowflake",
    image: "/assets/jayam/services/air-conditioning.jpg",
    blurb:
      "HVAC systems engineered for thermal comfort, indoor air quality and long-term operating efficiency.",
  },
  {
    slug: "plumbing-sanitary",
    title: "Plumbing & Sanitary",
    panelTitle: ["Plumbing & Sanitary"],
    icon: "droplet",
    image: "/assets/jayam/services/plumbing-sanitary.jpg",
    blurb:
      "Water supply, drainage and sanitary installations built to specification and maintained for reliability.",
  },
  {
    slug: "gypsum-ceiling",
    title: "Gypsum, False Ceiling & Partition",
    panelTitle: ["Gypsum, False Ceiling", "& Partition"],
    icon: "box",
    image: "/assets/jayam/services/gypsum-ceiling.jpg",
    blurb:
      "Interior systems — ceilings, partitions and finishes — executed to a clean, precise standard.",
  },
  {
    slug: "aluminium-glass",
    title: "Aluminum & Glass",
    panelTitle: ["Aluminum & Glass"],
    icon: "window",
    image: "/assets/jayam/services/aluminium-glass.jpg",
    blurb:
      "Façade, glazing and aluminium works that balance daylight, thermal performance and appearance.",
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    panelTitle: ["Landscaping"],
    icon: "leaf",
    image: "/assets/jayam/services/landscaping.jpg",
    blurb:
      "Soft and hard landscaping, irrigation and planting designed for the climate and maintained year-round.",
  },
  {
    slug: "pools-water-features",
    title: "Swimming Pools & Water Features",
    panelTitle: ["Swimming Pools", "& Water Features"],
    icon: "waves",
    image: "/assets/jayam/services/pools-water-features.jpg",
    blurb:
      "Pools, filtration and water features delivered as complete, serviceable systems.",
  },
  {
    slug: "lifts-escalators",
    title: "Lifts & Escalators",
    panelTitle: ["Lifts & Escalators"],
    icon: "escalator",
    image: "/assets/jayam/services/lifts-escalators.jpg",
    blurb:
      "Vertical transportation installation and servicing, kept safe, compliant and available.",
  },
];

export const DIFFERENTIATORS = [
  {
    n: "01",
    key: "Quality",
    title: "Quality Delivery",
    body: "Work handed over to specification, inspected and signed off — the standard is the same on every scope we take on.",
  },
  {
    n: "02",
    key: "Client Focused",
    title: "Client Focused",
    body: "One accountable team across MEP, landscaping and facility scopes, so coordination is ours to manage, not yours.",
  },
  {
    n: "03",
    key: "Technical Expertise",
    title: "Technical Expertise",
    body: "Electro-mechanical, interiors, landscape and water systems under one roof — specified, installed and maintained as a whole.",
  },
  {
    n: "04",
    key: "Sustainable Approach",
    title: "Sustainable Approach",
    body: "Systems specified for efficiency and longevity, because how a building runs matters as much as how it is built.",
  },
  {
    n: "05",
    key: "Long-term Partnership",
    title: "Long-term Partnership",
    body: "We stay with the asset after handover — maintenance, servicing and support through the life of the facility.",
  },
] as const;

export const PILLARS = [
  {
    key: "Vision",
    title: "People, Spaces, A Better Tomorrow",
    body: "To be the technical services partner behind spaces that serve the people who use them — today and for the long term.",
  },
  {
    key: "Mission",
    title: "Building Comfort, Enhancing Lives",
    body: "To deliver complete MEP, landscaping and facility solutions with the quality and reliability our clients build their operations on.",
  },
  {
    key: "Goals",
    title: "Engineering Comfort, Enhancing Lives",
    body: "To bring every discipline under one accountable team, so buildings are delivered, maintained and improved without the gaps.",
  },
] as const;

export type ExpertiseItem = {
  title: string;
  detail: string;
  image: string;
};

export const EXPERTISE: ExpertiseItem[] = [
  {
    title: "Soft Landscaping",
    detail: "Planting, turf and irrigation specified for the UAE climate and kept in condition through the year.",
    image: "/assets/jayam/editorial/soft-landscape.jpg",
  },
  {
    title: "Hard Landscaping",
    detail: "Paving, stone, edges and outdoor structure that hold the landscape together under use and weather.",
    image: "/assets/jayam/editorial/hard-landscape.jpg",
  },
  {
    title: "Swimming & Kids Pool Maintenance",
    detail: "Pool plant, water quality and finishes maintained so the amenity stays open and dependable.",
    image: "/assets/jayam/editorial/pool-amenity.jpg",
  },
  {
    title: "Water Features / Water Fountains",
    detail: "Fountains and water features as complete systems — hydraulics, lighting and ongoing care.",
    image: "/assets/jayam/editorial/water-feature.jpg",
  },
  {
    title: "Pergola / Shade Structures",
    detail: "Shade structures designed for climate, use and the architecture they sit beside.",
    image: "/assets/jayam/editorial/pergola.jpg",
  },
  {
    title: "Play Area Maintenance",
    detail: "Outdoor play environments kept safe, clean and ready — surfaces, equipment setting and landscape.",
    image: "/assets/jayam/editorial/play-landscape.jpg",
  },
  {
    title: "Electro Mechanical",
    detail: "Electrical and mechanical systems coordinated across the building, from plant to point of use.",
    image: "/assets/jayam/services/electro-mechanical.jpg",
  },
  {
    title: "Air Conditioning & Ventilation",
    detail: "Comfort cooling and ventilation engineered for occupancy, not just peak load.",
    image: "/assets/jayam/services/air-conditioning.jpg",
  },
  {
    title: "Plumbing & Sanitary",
    detail: "Supply, drainage and sanitary works installed to spec and kept reliable in operation.",
    image: "/assets/jayam/services/plumbing-sanitary.jpg",
  },
  {
    title: "Gypsum / False Ceiling / Partition",
    detail: "Interior envelopes executed to a precise line — ceilings, partitions and the services they conceal.",
    image: "/assets/jayam/services/gypsum-ceiling.jpg",
  },
  {
    title: "Aluminum & Glass",
    detail: "Glazing and aluminium assemblies that carry daylight, weather and the building’s elevation.",
    image: "/assets/jayam/services/aluminium-glass.jpg",
  },
];

export type Project = {
  id: number;
  title: string;
  place: string;
  image: string;
};

/** Project names and locations as supplied. No invented scope or outcomes. */
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Tiger JAX",
    place: "Megaplex, Grand Hyatt",
    image: "/assets/jayam/editorial/hospitality.jpg",
  },
  {
    id: 2,
    title: "Fair Way",
    place: "Al Garhoud",
    image: "/assets/jayam/editorial/dubai-architecture.jpg",
  },
  {
    id: 3,
    title: "Private Villa L29",
    place: "Emirates Hills",
    image: "/assets/jayam/editorial/luxury-villa.jpg",
  },
  {
    id: 4,
    title: "Kai Enzo Restaurant",
    place: "Hyatt Centric",
    image: "/assets/jayam/editorial/restaurant.jpg",
  },
  {
    id: 5,
    title: "Yogurt Berry",
    place: "Sport Society",
    image: "/assets/jayam/editorial/interior.jpg",
  },
  {
    id: 6,
    title: "Grand Belle Vue",
    place: "Barsha Heights",
    image: "/assets/jayam/editorial/villa-evening.jpg",
  },
  {
    id: 7,
    title: "Bussola",
    place: "Jumeirah Golf Estate",
    image: "/assets/jayam/editorial/golf-estate.jpg",
  },
  {
    id: 8,
    title: "Crafty Fox",
    place: "Jumeirah Golf Estate & Yas Links",
    image: "/assets/jayam/editorial/dining.jpg",
  },
  {
    id: 9,
    title: "Botanica",
    place: "Jumeirah Golf Estate",
    image: "/assets/jayam/services/landscaping.jpg",
  },
  {
    id: 10,
    title: "Muteenavilla",
    place: "Dubai",
    image: "/assets/jayam/hero/still-pool.jpg",
  },
  {
    id: 11,
    title: "Al Khaleej Camp",
    place: "Jebel Ali Industrial 3",
    image: "/assets/jayam/editorial/industrial.jpg",
  },
  {
    id: 12,
    title: "Villa 79",
    place: "DAMAC Hills",
    image: "/assets/jayam/editorial/villa-evening.jpg",
  },
  {
    id: 13,
    title: "Sparkle Tower",
    place: "Marina Jumeirah",
    image: "/assets/jayam/editorial/marina.jpg",
  },
];

export const PROCESS = [
  { n: "01", title: "Understand", body: "The brief, the asset and how people will use the space." },
  { n: "02", title: "Plan", body: "Scope, sequence and coordination across every trade involved." },
  { n: "03", title: "Engineer", body: "Systems specified and detailed so they can be built and maintained." },
  { n: "04", title: "Deliver", body: "Installation and finishing to the standard signed off at handover." },
  { n: "05", title: "Maintain", body: "Ongoing care so comfort and appearance hold after the project closes." },
] as const;

export const CLIENT_JOURNEY = [
  { title: "Understanding", body: "We start with how the space is used, not with a catalogue of trades." },
  { title: "Planning", body: "One plan across MEP, landscape and interiors, so the work arrives in the right order." },
  { title: "Execution", body: "Site work is coordinated as a single delivery, not a sequence of subcontractors." },
  { title: "Support", body: "After handover, the same team remains accountable for the systems in service." },
] as const;

/** Qualitative measures only — no fabricated figures. */
export const IMPACT = [
  { label: "Established", value: "2021" },
  { label: "Geography", value: "UAE" },
  { label: "Delivery", value: "100+" },
  { label: "Work", value: "Integrated" },
] as const;

export const IMPACT_NOTES = [
  { k: "01", t: "Multiple UAE Projects" },
  { k: "02", t: "Integrated Technical Services" },
  { k: "03", t: "Residential + Commercial + Hospitality" },
] as const;

export const PROJECT_TYPES = [
  "Electro Mechanical",
  "Air Conditioning",
  "Plumbing",
  "Landscaping",
  "Swimming Pools",
  "Interiors",
  "Aluminum & Glass",
  "Facility Maintenance",
  "Other",
] as const;

/** No testimonials were supplied. */
export const TESTIMONIALS: { quote: string; author: string; role: string }[] = [];
