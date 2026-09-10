import Image from "next/image";

export default function PageHero({
  label,
  title,
  lede,
  image,
  index = "01",
}: {
  label: string;
  title: string[];
  lede?: string;
  image: string;
  index?: string;
}) {
  return (
    <header className="relative isolate min-h-[72vh] overflow-hidden lg:min-h-[82vh]">
      <Image
        src={image}
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,14,30,0.28)_0%,rgba(4,14,30,0.72)_100%)]" />
      <div className="u-container relative flex min-h-[72vh] flex-col justify-end py-16 lg:min-h-[82vh] lg:py-24">
        <p className="text-[0.68rem] font-semibold tracking-[0.32em] text-blue-200 uppercase">
          {index} / {label}
        </p>
        <h1 className="u-display mt-5 max-w-[16ch] text-[clamp(2.4rem,6vw,5.2rem)] text-white">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        {lede && (
          <p className="mt-6 max-w-[40rem] text-[1.02rem] leading-relaxed text-white/78">
            {lede}
          </p>
        )}
      </div>
    </header>
  );
}
