"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, FileText, Paperclip, X } from "lucide-react";

import {
  APPLY_COPY,
  CAREERS_COPY,
  DISCIPLINES,
  FORM_ENDPOINT,
  SITE_URL,
} from "@/data/careers";
import { CONTACT_DETAILS } from "@/data/inner";

const fields = [
  { name: "Full Name", type: "text", auto: "name", required: true },
  { name: "Phone Number", type: "tel", auto: "tel", required: true },
  { name: "Email Address", type: "email", auto: "email", required: true },
  { name: "Years of Experience", type: "text", auto: "off", required: false },
  { name: "Current Location", type: "text", auto: "address-level2", required: false },
  { name: "Visa Status", type: "text", auto: "off", required: false },
] as const;

/** FormSubmit caps the whole submission at 10MB; leave headroom for the fields. */
const MAX_BYTES = 8 * 1024 * 1024;

/**
 * Application form.
 *
 * Posts natively to FormSubmit, which is the backend: it emails the
 * application to the office with the CV attached and returns the applicant to
 * the thank-you page. A native POST — not fetch — because file uploads have to
 * ride a real multipart submission.
 */
export default function ApplyForm() {
  const [cv, setCv] = useState<File | null>(null);
  const [cvError, setCvError] = useState("");
  const [dragging, setDragging] = useState(false);
  const [nextUrl, setNextUrl] = useState(`${SITE_URL}/careers/thank-you`);
  const fileRef = useRef<HTMLInputElement>(null);

  // Prefer the origin actually being browsed, but never hand FormSubmit a
  // localhost URL — it will not redirect to one, and drops back to its own page.
  useEffect(() => {
    const { origin, hostname } = window.location;
    if (!/^(localhost|127\.|\[?::1)/.test(hostname)) {
      setNextUrl(`${origin}/careers/thank-you`);
    }
  }, []);

  const check = (file: File) => {
    if (!/\.(pdf|docx?)$/i.test(file.name)) {
      setCvError("Please choose a PDF, DOC or DOCX file.");
      return false;
    }
    if (file.size > MAX_BYTES) {
      setCvError("That file is over 8 MB. Please send a smaller copy.");
      return false;
    }
    setCvError("");
    return true;
  };

  const onPick = (file: File | undefined) => {
    if (!file) return;
    if (check(file)) setCv(file);
    else clearFile();
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (!file || !check(file) || !fileRef.current) return;
    // A drop on the label does not reach the input, so hand the file over.
    const dt = new DataTransfer();
    dt.items.add(file);
    fileRef.current.files = dt.files;
    setCv(file);
  };

  const clearFile = () => {
    setCv(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (cv && !check(cv)) e.preventDefault();
  };

  const sendOnWhatsApp = () => {
    const form = document.getElementById("apply-form") as HTMLFormElement | null;
    if (!form) return;
    const data = new FormData(form);
    const lines = [
      "Trade / Position",
      "Full Name",
      "Phone Number",
      "Email Address",
      "Years of Experience",
      "Current Location",
      "Visa Status",
      "About You",
    ].map((k) => `${k}: ${String(data.get(k) ?? "").trim()}`);
    const text = encodeURIComponent(
      `Job application — JAYAM\n\n${lines.join("\n")}\n\n(CV attached)`,
    );
    window.open(
      `${CONTACT_DETAILS.whatsappHref}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="apply" className="u-off scroll-mt-24">
      <div className="u-container grid gap-14 py-[clamp(4rem,8vw,7.5rem)] lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="u-coord">
            <span className="text-red">03</span> — {APPLY_COPY.label}
          </p>
          <h2 className="u-display mt-5 text-[clamp(2rem,4.2vw,3.4rem)]">
            <span className="block">{APPLY_COPY.title[0]}</span>
            <span className="u-display-gradient block">
              {APPLY_COPY.title[1]}
            </span>
          </h2>
          <p className="u-lede mt-5 max-w-[32rem] text-[0.98rem]">
            {APPLY_COPY.lede}
          </p>
          <p className="mt-4 max-w-[32rem] text-[0.88rem] leading-relaxed text-muted">
            {CAREERS_COPY.note}
          </p>

          <dl className="mt-9 space-y-4 border-t border-navy/12 pt-7">
            <div>
              <dt className="text-[0.6rem] font-semibold tracking-[0.2em] text-muted uppercase">
                Applications to
              </dt>
              <dd className="mt-1">
                <a
                  className="font-bold text-navy hover:text-blue"
                  href={CONTACT_DETAILS.emailHref}
                >
                  {CONTACT_DETAILS.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.6rem] font-semibold tracking-[0.2em] text-muted uppercase">
                WhatsApp
              </dt>
              <dd className="mt-1">
                <a
                  className="font-bold text-navy hover:text-blue"
                  href={CONTACT_DETAILS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_DETAILS.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.6rem] font-semibold tracking-[0.2em] text-muted uppercase">
                Office
              </dt>
              <dd className="mt-1 font-bold text-navy">
                {CONTACT_DETAILS.location}
              </dd>
            </div>
          </dl>
        </div>

        <form
          id="apply-form"
          action={FORM_ENDPOINT}
          method="POST"
          encType="multipart/form-data"
          onSubmit={onSubmit}
          className="grid gap-5 border border-navy/10 bg-white p-6 sm:p-8"
        >
          {/* FormSubmit controls — how the mail is built and where the applicant lands. */}
          <input
            type="hidden"
            name="_subject"
            value="New career application — jayam.me"
          />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for applying to JAYAM Technical Services LLC. We have received your application and CV, and will be in touch if there is a suitable opening."
          />
          <input type="hidden" name="_next" value={nextUrl} />
          {/* Honeypot: a bot fills this, a person never sees it. */}
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden
          />

          <label className="block">
            <span className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted uppercase">
              Trade / Position *
            </span>
            <select
              name="Trade / Position"
              defaultValue={DISCIPLINES[0]}
              className="mt-2 w-full border-0 border-b border-navy/20 bg-transparent py-3 text-[1rem] text-navy outline-none focus:border-blue"
            >
              {DISCIPLINES.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </label>

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
              About You
            </span>
            <textarea
              name="About You"
              rows={4}
              suppressHydrationWarning
              placeholder="The trades you have worked, the sites you have worked on, when you can start."
              className="mt-2 w-full resize-y border-0 border-b border-navy/20 bg-transparent py-3 text-[1rem] text-navy outline-none placeholder:text-muted/60 focus:border-blue"
            />
          </label>

          {/* CV — drop zone over a real file input, so the file rides the POST. */}
          <div>
            <span className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted uppercase">
              Attach CV
            </span>

            <input
              ref={fileRef}
              id="cv"
              name="attachment"
              type="file"
              accept=".pdf,.doc,.docx"
              className="sr-only"
              onChange={(e) => onPick(e.target.files?.[0])}
            />

            {cv ? (
              <div className="mt-2 flex items-center gap-3 border border-navy/15 bg-[var(--off-white)] px-4 py-3.5">
                <FileText
                  aria-hidden
                  className="size-5 shrink-0 text-blue"
                  strokeWidth={1.8}
                />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[0.92rem] font-bold text-navy">
                    {cv.name}
                  </span>
                  <span className="block text-[0.74rem] text-muted tabular-nums">
                    {(cv.size / 1024 / 1024).toFixed(2)} MB — attached to this
                    application
                  </span>
                </span>
                <button
                  type="button"
                  onClick={clearFile}
                  className="grid size-8 shrink-0 place-items-center border border-navy/15 text-muted transition-colors hover:border-navy/40 hover:text-navy"
                >
                  <X aria-hidden className="size-4" strokeWidth={2.2} />
                  <span className="sr-only">Remove {cv.name}</span>
                </button>
              </div>
            ) : (
              <label
                htmlFor="cv"
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={onDrop}
                className={`mt-2 flex cursor-pointer flex-col items-center justify-center gap-2 border border-dashed px-6 py-8 text-center transition-colors ${
                  dragging
                    ? "border-blue bg-blue-50"
                    : "border-navy/25 bg-[var(--off-white)] hover:border-blue"
                }`}
              >
                <Paperclip
                  aria-hidden
                  className="size-5 text-blue"
                  strokeWidth={1.8}
                />
                <span className="text-[0.92rem] font-bold text-navy">
                  Drop your CV here, or browse
                </span>
                <span className="text-[0.78rem] text-muted">
                  {APPLY_COPY.attach}
                </span>
              </label>
            )}

            {cvError && (
              <p role="alert" className="mt-2 text-[0.84rem] font-semibold text-red">
                {cvError}
              </p>
            )}
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-navy px-7 py-4 text-[0.7rem] font-bold tracking-[0.22em] text-white uppercase transition-colors hover:bg-blue"
            >
              Send application
              <ArrowRight aria-hidden className="size-4" strokeWidth={2.4} />
            </button>
            <button
              type="button"
              onClick={sendOnWhatsApp}
              className="inline-flex items-center justify-center gap-2 border border-navy/20 px-7 py-4 text-[0.7rem] font-bold tracking-[0.22em] text-navy uppercase transition-colors hover:border-navy"
            >
              Send on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
