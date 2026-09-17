/**
 * Client roster for the /clients page.
 *
 * Logos are the supplied artwork in public/assets/client_logos_HD_transparent_PNG.
 * Names, descriptors and locations are taken from the logo lockups themselves
 * and from the project list in the company profile — nothing else is claimed.
 */

export type ClientSector =
  "hospitality" | "residential" | "commercial" | "leisure" | "industrial";

export type Client = {
  id: string;
  name: string;
  logo: string;
  /** Secondary line read from the lockup or the profile. */
  descriptor?: string;
  location?: string;
  sector: ClientSector;
  /** Project id(s) in the profile associated with this client, if any. */
  projectIds?: number[];
  /** Logos with a lot of fine detail get a little more room in the tile. */
  scale?: number;
};

const L = "/assets/client_logos_HD_transparent_PNG";

export const SECTORS: { id: ClientSector | "all"; label: string }[] = [
  { id: "all", label: "All Clients" },
  { id: "hospitality", label: "Hospitality & Dining" },
  { id: "residential", label: "Residential & Developers" },
  { id: "commercial", label: "Commercial & Contracting" },
  { id: "leisure", label: "Leisure" },
  { id: "industrial", label: "Industrial" },
];

export const CLIENTS: Client[] = [
  {
    id: "hyatt",
    name: "Hyatt",
    descriptor: "Grand Hyatt · Hyatt Centric",
    location: "Dubai",
    sector: "hospitality",
    logo: `${L}/09_Hyatt.png`,
    projectIds: [1, 4],
    scale: 0.82,
  },
  {
    id: "damac-hills",
    name: "DAMAC Hills",
    descriptor: "Villa 79 — 32 villas",
    location: "Dubai",
    sector: "residential",
    logo: `${L}/04_Damac_Hills.png`,
    projectIds: [12],
    scale: 0.86,
  },
  {
    id: "bussola",
    name: "Bussola",
    descriptor: "Dubai Marriott",
    location: "Jumeirah Golf Estate",
    sector: "hospitality",
    logo: `${L}/03_Bussola.png`,
    projectIds: [7],
  },
  {
    id: "crafty-fox",
    name: "Crafty Fox",
    descriptor: "Jumeirah Golf Estates",
    location: "Dubai & Abu Dhabi",
    sector: "hospitality",
    logo: `${L}/02_Crafty_Fox.png`,
    projectIds: [8],
  },
  {
    id: "botanica",
    name: "Botanica",
    descriptor: "Jumeirah Golf Estates",
    location: "Dubai",
    sector: "hospitality",
    logo: `${L}/06_Botanica.png`,
    projectIds: [9],
  },
  {
    id: "deyaar",
    name: "Deyaar",
    descriptor: "Property developer",
    location: "Dubai",
    sector: "residential",
    logo: `${L}/07_Deyaar.png`,
    scale: 0.84,
  },
  {
    id: "samara-villas",
    name: "Samara Villas",
    descriptor: "Emaar",
    location: "Dubai",
    sector: "residential",
    logo: `${L}/05_Samara_Villas.png`,
  },
  {
    id: "team-99",
    name: "Team 99",
    descriptor: "Interiors & Contracting",
    sector: "commercial",
    logo: `${L}/01_Team_99.png`,
    scale: 0.86,
  },
  {
    id: "al-khaleej-sugar",
    name: "Al Khaleej Sugar",
    descriptor: "Industrial",
    location: "Dubai",
    sector: "industrial",
    logo: `${L}/08_Al_Khaleej_Sugar.png`,
    scale: 0.78,
  },
  {
    id: "five-iron-golf",
    name: "Five Iron Golf",
    descriptor: "Indoor golf & entertainment",
    sector: "leisure",
    logo: `${L}/12_Five_Iron_Golf.png`,
    scale: 0.8,
  },
  {
    id: "kurasu",
    name: "Kurasu",
    descriptor: "Specialty coffee",
    sector: "hospitality",
    logo: `${L}/10_Kurasu.png`,
    scale: 0.82,
  },
  {
    id: "hudson-rye",
    name: "Hudson & Rye",
    descriptor: "NYC-style deli",
    sector: "hospitality",
    logo: `${L}/11_Hudson_Rye.png`,
    scale: 0.84,
  },
  {
    id: "rowleys",
    name: "Rowley's",
    descriptor: "Restaurant",
    location: "Abu Dhabi",
    sector: "hospitality",
    logo: `${L}/13_Rowleys.png`,
    scale: 0.86,
  },
];

/** The clients shown first — the hospitality and developer names that anchor the portfolio. */
export const FEATURED_CLIENT_IDS = [
  "hyatt",
  "damac-hills",
  "bussola",
  "crafty-fox",
  "botanica",
  "deyaar",
];

/** Editorial copy for the clients page, kept with the data so the UI stays content-free. */
export const CLIENTS_COPY = {
  hero: {
    eyebrow: "Our Clients",
    title: ["Trusted by the names", "behind the spaces."],
    lede: "From hospitality and dining to residential developments, commercial facilities and leisure destinations, our work is trusted by teams responsible for some of the UAE's most distinctive spaces.",
  },
  index: {
    eyebrow: "01 — Client Index",
    title: ["The companies", "we work with."],
    lede: "Strong partnerships are built through consistent delivery. Explore the organisations and destinations we've supported across the UAE.",
  },
  sectors: {
    eyebrow: "02 — Sectors",
    title: ["One partner", "across sectors."],
  },
  cta: {
    eyebrow: "Let's build together",
    title: ["Have a project", "in mind?"],
    lede: "Talk to our team about your next technical, landscaping or facility requirement.",
  },
} as const;

export const SECTOR_LABEL = Object.fromEntries(
  SECTORS.filter((s) => s.id !== "all").map((s) => [s.id, s.label]),
) as Record<ClientSector, string>;

export const CLIENT_STATS = [
  { value: "50+", label: "Happy Clients" },
  { value: "100+", label: "Projects Delivered" },
  { value: "5", label: "Sectors" },
  { value: "2021", label: "Established" },
] as const;

/** Sector overview — what each type of client typically engages JAYAM for. */
export const SECTOR_NOTES: {
  id: ClientSector;
  title: string;
  body: string;
  image: string;
}[] = [
  {
    id: "hospitality",
    title: "Hospitality & Dining",
    body: "Restaurants, hotels and entertainment venues — MEP works and MEP fit-out delivered around opening dates and live operations.",
    image: "/assets/jayam/editorial/hospitality.jpg",
  },
  {
    id: "residential",
    title: "Residential & Developers",
    body: "Master-planned communities and private villas — plumbing, MEP, landscaping and pool maintenance at community scale.",
    image: "/assets/jayam/projects/villa-pool.jpg",
  },
  {
    id: "commercial",
    title: "Commercial & Contracting",
    body: "Offices, retail and fit-out contractors who need a coordinated technical partner across trades.",
    image: "/assets/jayam/hd/interior.jpg",
  },
  {
    id: "leisure",
    title: "Leisure",
    body: "Indoor sport and entertainment concepts with demanding air-conditioning, ventilation and electrical loads.",
    image: "/assets/jayam/projects/infinity-pool.jpg",
  },
  {
    id: "industrial",
    title: "Industrial",
    body: "Plants and staff accommodation where plumbing, drainage and technical maintenance must simply keep working.",
    image: "/assets/jayam/hd/industrial.jpg",
  },
];
