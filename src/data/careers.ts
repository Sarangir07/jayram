/**
 * Careers content.
 *
 * The shift notes and joining reasons below are scaffolding written against the
 * company's actual service lines — they are not supplied facts. Nothing here
 * states a salary, a headcount or a benefit the company has not committed to.
 */

import { SERVICES } from "@/data/site";

export const CAREERS_COPY = {
  heroLabel: "Careers",
  heroIndex: "06",
  heroTitle: ["Build the", "spaces people", "actually live in."],
  heroLede:
    "JAYAM is a technical services team in Dubai — MEP, interiors, landscaping and facility care under one roof. If you work with your hands, or you run the people who do, we want to hear from you.",
  ticker: [
    "Electrical",
    "Plumbing",
    "Electromechanical",
    "Air Conditioning",
    "Gypsum",
    "Aluminium",
    "Lifts",
    "Pergola",
    "Landscaping",
    "Swimming Pool",
  ],
  note: "Where nothing is open today, applications are kept on file for the next project mobilisation.",
} as const;

/** The trade you would be hired into — the service lines, plus the roles that sit across them. */
export const DISCIPLINES: string[] = [
  ...SERVICES.map((s) => s.title),
  "Site Supervision",
  "Helper / Trainee",
  "Office & Admin",
  "Other",
];

/** A shift, told as the day actually runs on site. */
export const SITE_DAY = [
  {
    time: "06:00",
    title: "Toolbox talk",
    body: "The crew meets before the heat. Scope for the day, the sequence, and the safety points that matter on this particular site.",
  },
  {
    time: "07:30",
    title: "First fix",
    body: "Containment, pipework, framing — the work that disappears behind the finish, which is exactly why it has to be right.",
  },
  {
    time: "12:00",
    title: "Break",
    body: "Midday rest is observed. Nobody on a JAYAM site works through the regulated break period.",
  },
  {
    time: "14:00",
    title: "Coordination",
    body: "Trades cross over. The supervisor walks the sequence so electrical, mechanical and finishing are not fighting for the same ceiling.",
  },
  {
    time: "17:00",
    title: "Check and close",
    body: "Quality walk, materials secured, site left clean. Tomorrow's list is written before anyone leaves.",
  },
] as const;

/** What the company offers a technical hire. Non-numeric by design. */
export const WHY_JOIN = [
  {
    n: "01",
    title: "Every trade in one company",
    body: "MEP, interiors, landscape and pools sit under one roof, so you see how a building goes together — not just your slice of it.",
  },
  {
    n: "02",
    title: "Work that stays after handover",
    body: "We maintain what we install. You go back to the asset, which changes how carefully you build it the first time.",
  },
  {
    n: "03",
    title: "Named projects, real sites",
    body: "Hotels, restaurants, villas and communities across the UAE — work you can point at when someone asks what you do.",
  },
  {
    n: "04",
    title: "Room to move up",
    body: "Helpers become technicians and technicians become supervisors. The path is walked here, not advertised.",
  },
] as const;

/**
 * FormSubmit endpoint. It is the whole backend: the form POSTs here, FormSubmit
 * emails the submission — CV attached — to the address in the URL.
 *
 * First submission triggers a one-time activation mail to info@jayam.me that
 * has to be confirmed before anything is forwarded. Confirming also returns a
 * hashed endpoint (https://formsubmit.co/<hash>); swap it in here so the
 * address is not sitting in the page source for scrapers.
 */
export const FORM_ENDPOINT = "https://formsubmit.co/info@jayam.me";

/**
 * Public origin of the deployed site. FormSubmit's `_next` redirect has to be an
 * absolute, publicly reachable URL — it will not return anyone to localhost — so
 * the value is rendered on the server from here and only corrected in the
 * browser once the real origin is known.
 *
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment if the domain differs.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jayam.me"
).replace(/\/$/, "");

export const APPLY_COPY = {
  label: "Application",
  title: ["Send us", "your CV."],
  lede: "Tell us the trade you work and how to reach you. Your CV goes across with it.",
  attach: "PDF, DOC or DOCX — up to 8 MB.",
} as const;
