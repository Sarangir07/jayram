export default function WaveDivider({
  from = "#ffffff",
  to = "#ffffff",
  flip = false,
}: {
  from?: string;
  to?: string;
  flip?: boolean;
}) {
  return (
    <div className={`relative h-[72px] w-full overflow-hidden ${flip ? "rotate-180" : ""}`} style={{ background: from }} aria-hidden>
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path
          fill={to}
          d="M0,40 C240,72 480,0 720,28 C960,56 1200,8 1440,36 L1440,72 L0,72 Z"
        />
      </svg>
    </div>
  );
}
