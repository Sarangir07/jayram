/**
 * The brand glyph set.
 *
 * These are drawn to match the line icons in the supplied artwork (gear, cassette
 * snowflake, tap, isometric box, window, leaf, water, escalator, and the four
 * hero feature marks). Lucide has no escalator glyph and its shapes read
 * noticeably different from the reference, so the branded set is inline SVG and
 * Lucide is kept for generic UI chrome only.
 *
 * Every glyph is drawn on a 24x24 grid with `currentColor` strokes so it can be
 * sized and coloured from CSS.
 */

export type GlyphName =
  | "settings"
  | "snowflake"
  | "droplet"
  | "box"
  | "window"
  | "leaf"
  | "waves"
  | "escalator"
  | "gem"
  | "users"
  | "chart"
  | "building";

const paths: Record<GlyphName, React.ReactNode> = {
  /* gear — electro mechanical */
  settings: (
    <>
      <circle cx="12" cy="12" r="3.1" />
      <path d="M12 2.6v2.2M12 19.2v2.2M21.4 12h-2.2M4.8 12H2.6M18.6 5.4l-1.55 1.55M6.95 17.05 5.4 18.6M18.6 18.6l-1.55-1.55M6.95 6.95 5.4 5.4" />
      <circle cx="12" cy="12" r="7.2" strokeDasharray="2.1 2.35" />
    </>
  ),
  /* snowflake — air conditioning */
  snowflake: (
    <>
      <path d="M12 2.4v19.2M3.7 7.2l16.6 9.6M20.3 7.2 3.7 16.8" />
      <path d="M9.4 4.6 12 7.1l2.6-2.5M9.4 19.4 12 16.9l2.6 2.5" />
      <path d="m5.2 10.6.9 3.4-3.3 1M18.8 13.4l-.9-3.4 3.3-1M5.2 13.4l.9-3.4-3.3-1M18.8 10.6l-.9 3.4 3.3 1" />
    </>
  ),
  /* tap — plumbing & sanitary */
  droplet: (
    <>
      <path d="M4.4 9.6h6.2v2.6H4.4z" />
      <path d="M10.6 10.9h3.1a2.9 2.9 0 0 1 2.9 2.9v1.1" />
      <path d="M14.3 6.1h5.3M16.95 6.1v3.5M15.5 9.6h2.9" />
      <path d="M7.5 12.2v7.4M4.9 19.6h5.2" />
    </>
  ),
  /* isometric box — gypsum, false ceiling & partition */
  box: (
    <>
      <path d="M12 2.8 20.4 7v10L12 21.2 3.6 17V7z" />
      <path d="M3.6 7 12 11.2 20.4 7M12 11.2v10" />
      <path d="M7.8 9.1v4.4" />
    </>
  ),
  /* window — aluminium & glass */
  window: (
    <>
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="1.2" />
      <path d="M12 3.6v16.8M3.6 12h16.8" />
      <path d="M6.4 6.4h2.6v2.6H6.4z" />
    </>
  ),
  /* leaf — landscaping / sustainability */
  leaf: (
    <>
      <path d="M20.4 3.9c0 8.3-4.2 12.6-9.1 12.6a5.3 5.3 0 0 1-5.3-5.3C6 6.6 11.5 3.9 20.4 3.9Z" />
      <path d="M4.2 20.1c2.6-4.6 6.2-8 11.3-11.2" />
    </>
  ),
  /* water — swimming pools & water features */
  waves: (
    <>
      <path d="M2.6 7.4c1.6-1.5 3.2-1.5 4.7 0 1.6 1.5 3.1 1.5 4.7 0 1.6-1.5 3.1-1.5 4.7 0 1.5 1.5 3.1 1.5 4.7 0" />
      <path d="M2.6 12c1.6-1.5 3.2-1.5 4.7 0 1.6 1.5 3.1 1.5 4.7 0 1.6-1.5 3.1-1.5 4.7 0 1.5 1.5 3.1 1.5 4.7 0" />
      <path d="M2.6 16.6c1.6-1.5 3.2-1.5 4.7 0 1.6 1.5 3.1 1.5 4.7 0 1.6-1.5 3.1-1.5 4.7 0 1.5 1.5 3.1 1.5 4.7 0" />
    </>
  ),
  /* escalator — lifts & escalators */
  escalator: (
    <>
      <path d="M3.4 17.4h2.9l9-10.8h3.6" />
      <path d="M3.4 20.3h3.9l9-10.8h2.7" />
      <circle cx="19.4" cy="5.4" r="1.9" />
    </>
  ),
  /* diamond — quality delivery */
  gem: (
    <>
      <path d="M3.1 9.4h17.8L12 20.4z" />
      <path d="M6.4 4.6h11.2l3.3 4.8H3.1z" />
      <path d="M6.4 4.6 9.2 9.4 12 20.4 14.8 9.4l2.8-4.8M9.2 9.4h5.6" />
    </>
  ),
  /* people — client focused */
  users: (
    <>
      <circle cx="12" cy="7.6" r="2.9" />
      <path d="M6.6 19.6a5.4 5.4 0 0 1 10.8 0" />
      <circle cx="4.5" cy="9.6" r="1.9" />
      <circle cx="19.5" cy="9.6" r="1.9" />
      <path d="M2.2 17.4a3.4 3.4 0 0 1 3.2-3.3M21.8 17.4a3.4 3.4 0 0 0-3.2-3.3" />
    </>
  ),
  /* bars — long-term partnerships */
  chart: (
    <>
      <path d="M4.2 20.2h15.6" />
      <rect x="5.2" y="13.4" width="3.6" height="5.2" rx="0.7" />
      <rect x="10.2" y="9.2" width="3.6" height="9.4" rx="0.7" />
      <rect x="15.2" y="4.8" width="3.6" height="13.8" rx="0.7" />
    </>
  ),
  /* towers — project stat card */
  building: (
    <>
      <path d="M9.4 20.6V6.2l5.2-1.8v16.2" />
      <path d="M4.2 20.6v-8.4l5.2-1.5M14.6 20.6v-8.4l5.2 1.5v6.9" />
      <path d="M12 4.4V2.2" />
      <path d="M2.8 20.6h18.4" />
      <path d="M11.2 8.4h1.6M11.2 11.2h1.6M11.2 14h1.6M6.2 14.4h1.2M6.2 17.2h1.2M16.6 14.4h1.2M16.6 17.2h1.2" />
    </>
  ),
};

export default function Glyph({
  name,
  className = "",
  strokeWidth = 1.5,
  style,
}: {
  name: GlyphName;
  className?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      {paths[name]}
    </svg>
  );
}
