"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

import { CONTACT_COPY, CONTACT_DETAILS, SERVICE_OPTIONS } from "@/data/inner";

const fields = [
  { name: "Full Name", type: "text", auto: "name", required: true },
  { name: "Company Name", type: "text", auto: "organization", required: false },
  { name: "Phone Number", type: "tel", auto: "tel", required: true },
  { name: "Email Address", type: "email", auto: "email", required: true },
  { name: "Project Location", type: "text", auto: "address-level2", required: false },
] as const;

export default function ContactStudio() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("Full Name") ?? "").trim();
    const email = String(data.get("Email Address") ?? "").trim();
    const phone = String(data.get("Phone Number") ?? "").trim();
    const details = String(data.get("Project Details") ?? "").trim();
    if (!name || !email || !phone || !details) {
      setError("Please complete the required fields.");
      return;
    }
    setError("");
    const lines = [
      "Full Name",
      "Company Name",
      "Phone Number",
      "Email Address",
      "Service Required",
      "Project Location",
      "Project Details",
    ].map((k) => `${k}: ${String(data.get(k) ?? "").trim()}`);
    const subject = encodeURIComponent(`Quote request — ${name}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `${CONTACT_DETAILS.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="bg-white">
      <div className="u-container grid gap-14 py-[clamp(3.5rem,7vw,7rem)] lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-teal uppercase">Studio</p>
          <h2 className="u-display mt-4 text-[clamp(2rem,4vw,3.4rem)]">
            {CONTACT_COPY.heroTitle[0]}
            <span className="u-display-gradient block">{CONTACT_COPY.heroTitle[1]}</span>
          </h2>
          <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-relaxed text-muted">{CONTACT_COPY.support}</p>

          <dl className="mt-10 space-y-5 border-t border-navy/12 pt-8">
            <div>
              <dt className="text-[0.62rem] font-semibold tracking-[0.2em] text-muted uppercase">Company</dt>
              <dd className="mt-1 font-bold text-navy">{CONTACT_DETAILS.company}</dd>
            </div>
            <div>
              <dt className="text-[0.62rem] font-semibold tracking-[0.2em] text-muted uppercase">Manager</dt>
              <dd className="mt-1 font-bold text-navy">{CONTACT_DETAILS.manager}</dd>
            </div>
            <div>
              <dt className="text-[0.62rem] font-semibold tracking-[0.2em] text-muted uppercase">Telephone</dt>
              <dd className="mt-1">
                <a className="font-bold text-navy hover:text-blue" href={CONTACT_DETAILS.phoneHref}>
                  {CONTACT_DETAILS.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.62rem] font-semibold tracking-[0.2em] text-muted uppercase">Email</dt>
              <dd className="mt-1">
                <a className="font-bold text-navy hover:text-blue" href={CONTACT_DETAILS.emailHref}>
                  {CONTACT_DETAILS.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.62rem] font-semibold tracking-[0.2em] text-muted uppercase">Location</dt>
              <dd className="mt-1 font-bold text-navy">{CONTACT_DETAILS.location}</dd>
            </div>
          </dl>
        </div>

        {sent ? (
          <div className="flex min-h-[22rem] flex-col justify-center border border-navy/10 bg-[var(--off-white)] px-8 py-12">
            <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-red uppercase">Quote request</p>
            <p className="mt-4 text-[1.6rem] font-extrabold text-navy">Thank you.</p>
            <p className="mt-3 max-w-[36ch] text-muted">
              Your mail client should open with the enquiry addressed to {CONTACT_DETAILS.email}.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <label key={f.name} className="block">
                  <span className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted uppercase">
                    {f.name}
                    {f.required ? " *" : ""}
                  </span>
                  <input
                    name={f.name}
                    type={f.type}
                    autoComplete={f.auto}
                    required={f.required}
                    suppressHydrationWarning
                    className="mt-2 w-full border-0 border-b border-navy/20 bg-transparent py-3 text-[1rem] text-navy outline-none focus:border-blue"
                  />
                </label>
              ))}
            </div>
            <label className="block">
              <span className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted uppercase">
                Service Required
              </span>
              <select
                name="Service Required"
                defaultValue=""
                suppressHydrationWarning
                className="mt-2 w-full border-0 border-b border-navy/20 bg-transparent py-3 text-[1rem] text-navy outline-none focus:border-blue"
              >
                <option value="" disabled>
                  Select
                </option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted uppercase">
                Project Details *
              </span>
              <textarea
                name="Project Details"
                required
                rows={5}
                className="mt-2 w-full resize-y border-0 border-b border-navy/20 bg-transparent py-3 text-[1rem] text-navy outline-none focus:border-blue"
              />
            </label>
            {error && <p className="text-[0.88rem] text-red">{error}</p>}
            <button
              type="submit"
              suppressHydrationWarning
              className="group mt-2 inline-flex h-[3.4rem] items-center justify-center gap-3 rounded-full bg-[linear-gradient(180deg,#cf1319_0%,#ab0b10_100%)] px-8 text-[0.88rem] font-bold text-white"
            >
              Request a Free Quote
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
