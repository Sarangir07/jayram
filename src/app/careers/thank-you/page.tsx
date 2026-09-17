import type { Metadata } from "next";
import Link from "next/link";

import InnerShell from "@/components/inner/InnerShell";
import { CONTACT_DETAILS } from "@/data/inner";

export const metadata: Metadata = {
  title: "Application received",
  description: "Your application has been sent to JAYAM Technical Services LLC.",
  robots: { index: false, follow: false },
};

/** Where FormSubmit returns the applicant once the application and CV are away. */
export default function CareersThankYouPage() {
  return (
    <InnerShell>
      <section className="u-deep relative isolate overflow-hidden text-white">
        <div className="u-eng-grid pointer-events-none absolute inset-0 opacity-40" />
        <span
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(29,111,165,0.42)_0%,rgba(29,111,165,0)_68%)]"
        />

        <div className="u-container relative flex min-h-[78vh] flex-col justify-center py-[clamp(7rem,13vw,11rem)]">
          <p className="text-[0.68rem] font-semibold tracking-[0.32em] text-blue-200 uppercase">
            Careers / Application received
          </p>
          <h1 className="u-display mt-6 max-w-[18ch] text-[clamp(2.4rem,6vw,5rem)] text-white">
            <span className="block">Your application</span>
            <span className="block text-blue-200">is with us.</span>
          </h1>
          <p className="mt-7 max-w-[44rem] text-[1.02rem] leading-relaxed text-white/75">
            Your details and CV have been sent to our office. We read every
            application that comes in, and we will be in touch if there is an
            opening that matches your trade — or when the next project
            mobilises.
          </p>

          <dl className="mt-10 grid max-w-[40rem] grid-cols-1 gap-px border border-white/12 bg-white/12 sm:grid-cols-2">
            <div className="bg-[#061733] px-5 py-5">
              <dt className="text-[0.58rem] font-semibold tracking-[0.26em] text-blue-200 uppercase">
                Sent to
              </dt>
              <dd className="mt-2 text-[1.02rem] font-extrabold break-all">
                {CONTACT_DETAILS.email}
              </dd>
            </div>
            <div className="bg-[#061733] px-5 py-5">
              <dt className="text-[0.58rem] font-semibold tracking-[0.26em] text-blue-200 uppercase">
                Anything to add?
              </dt>
              <dd className="mt-2 text-[1.02rem] font-extrabold">
                <a
                  className="hover:text-blue-200"
                  href={CONTACT_DETAILS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp {CONTACT_DETAILS.phone}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 bg-red px-6 py-3.5 text-[0.7rem] font-bold tracking-[0.22em] text-white uppercase transition-colors hover:bg-red-bright"
            >
              Back to careers
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-[0.7rem] font-bold tracking-[0.22em] text-white uppercase transition-colors hover:border-white/60"
            >
              Return home
            </Link>
          </div>
        </div>
      </section>
    </InnerShell>
  );
}
