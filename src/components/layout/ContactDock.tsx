import { Mail, Phone } from "lucide-react";

import { CONTACT_DETAILS } from "@/data/inner";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.45 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.28-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.59 0 11.94-5.35 11.94-11.93 0-3.19-1.24-6.19-3.47-8.42ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.17 6.5 6.6 2.08 12.05 2.08c2.63 0 5.1 1.03 6.96 2.89a9.77 9.77 0 0 1 2.88 6.95c0 5.45-4.43 9.88-9.84 9.88Zm5.4-7.4c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

const actions = [
  {
    href: CONTACT_DETAILS.whatsappHref,
    label: "WhatsApp",
    className: "bg-[#25D366] hover:bg-[#1ebe57]",
    icon: <WhatsAppIcon className="size-5" />,
    external: true,
  },
  {
    href: CONTACT_DETAILS.phoneHref,
    label: "Call",
    className: "bg-blue hover:bg-blue-400",
    icon: <Phone className="size-[1.15rem]" strokeWidth={2.2} />,
    external: false,
  },
  {
    href: CONTACT_DETAILS.emailHref,
    label: "Email",
    className: "bg-red hover:bg-red-bright",
    icon: <Mail className="size-[1.15rem]" strokeWidth={2.2} />,
    external: false,
  },
] as const;

export default function ContactDock() {
  return (
    <div className="pointer-events-none fixed top-1/2 right-3 z-[70] -translate-y-1/2 sm:right-4">
      <nav aria-label="Quick contact" className="pointer-events-auto flex flex-col gap-2.5">
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noreferrer" : undefined}
            aria-label={action.label}
            className={`group relative flex size-12 items-center justify-center rounded-full text-white shadow-[0_12px_28px_-12px_rgba(6,23,51,0.55)] transition-[transform,background-color] duration-300 hover:-translate-x-0.5 ${action.className}`}
          >
            {action.icon}
            <span className="pointer-events-none absolute right-[3.35rem] hidden rounded-full bg-navy px-3 py-1.5 text-[0.72rem] font-bold tracking-[0.12em] text-white uppercase opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 lg:block">
              {action.label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}
