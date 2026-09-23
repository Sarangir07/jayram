"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

import { COMPANY, PROJECT_TYPES } from "@/data/site";
import { CONTACT_DETAILS } from "@/data/inner";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const lines = ["Name", "Company", "Email", "Phone", "Project Type", "Message"].map(
      (key) => `${key}: ${String(data.get(key) ?? "").trim()}`,
    );
    const subject = encodeURIComponent(`Enquiry — ${data.get("Name") || "JAYAM"}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `${CONTACT_DETAILS.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-[#f3f7fb]">
      <div className="u-container py-[clamp(3.5rem,6vw,6rem)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[0.72rem] font-bold tracking-[0.28em] text-teal uppercase">Contact</p>
            <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-[-0.035em] text-navy">
              Ready to create
              <span className="block text-blue">better spaces?</span>
            </h2>
            <p className="mt-4 max-w-[32rem] text-[0.98rem] leading-relaxed text-muted">
              Share the project. Our team will follow through with the right technical scope.
            </p>
            <dl className="mt-8 space-y-4">
              <div>
                <dt className="text-[0.62rem] font-semibold tracking-[0.22em] text-muted uppercase">Location</dt>
                <dd className="mt-1 text-[1.05rem] font-bold text-navy">{COMPANY.address}</dd>
              </div>
              <div>
                <dt className="text-[0.62rem] font-semibold tracking-[0.22em] text-muted uppercase">Telephone</dt>
                <dd className="mt-1 text-[1.05rem] font-bold text-navy">
                  <a className="hover:text-blue" href={CONTACT_DETAILS.phoneHref}>
                    {CONTACT_DETAILS.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.62rem] font-semibold tracking-[0.22em] text-muted uppercase">Email</dt>
                <dd className="mt-1 text-[1.05rem] font-bold text-navy">
                  <a className="hover:text-blue" href={CONTACT_DETAILS.emailHref}>
                    {CONTACT_DETAILS.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {sent ? (
            <div className="flex min-h-[18rem] flex-col justify-center rounded-[1.75rem] bg-white px-8 py-10 shadow-[0_18px_40px_-28px_rgba(6,23,51,0.35)]">
              <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-red uppercase">Received</p>
              <p className="mt-3 text-[1.5rem] font-extrabold text-navy">Thank you.</p>
              <p className="mt-3 max-w-[36ch] text-muted">Your enquiry is ready for our team.</p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="grid gap-5 rounded-[1.75rem] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(6,23,51,0.35)] sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { name: "Name", type: "text", auto: "name" },
                  { name: "Company", type: "text", auto: "organization" },
                  { name: "Email", type: "email", auto: "email" },
                  { name: "Phone", type: "tel", auto: "tel" },
                ].map((field) => (
                  <label key={field.name} className="block">
                    <span className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted uppercase">
                      {field.name}
                    </span>
                    <input
                      required={field.name === "Name" || field.name === "Email"}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.auto}
                      suppressHydrationWarning
                      className="mt-2 w-full rounded-xl border border-navy/10 bg-[#f7fafc] px-3 py-3 text-[0.95rem] text-navy outline-none transition-colors focus:border-blue"
                    />
                  </label>
                ))}
              </div>
              <label className="block">
                <span className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted uppercase">
                  Project Type
                </span>
                <select
                  name="Project Type"
                  suppressHydrationWarning
                  className="mt-2 w-full rounded-xl border border-navy/10 bg-[#f7fafc] px-3 py-3 text-[0.95rem] text-navy outline-none focus:border-blue"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted uppercase">
                  Message
                </span>
                <textarea
                  name="Message"
                  required
                  rows={4}
                  suppressHydrationWarning
                  className="mt-2 w-full resize-y rounded-xl border border-navy/10 bg-[#f7fafc] px-3 py-3 text-[0.95rem] text-navy outline-none focus:border-blue"
                />
              </label>
              <button
                type="submit"
                suppressHydrationWarning
                className="group mt-1 inline-flex h-[3.2rem] items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#cf1319_0%,#ab0b10_100%)] px-8 text-[0.88rem] font-bold text-white shadow-[0_14px_30px_-14px_rgba(176,13,18,0.8)] transition-transform hover:-translate-y-0.5"
              >
                Get in Touch
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
