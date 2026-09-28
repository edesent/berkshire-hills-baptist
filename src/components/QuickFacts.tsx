import Email from "@/components/Email";
import { site } from "@/lib/site";

/** The strip under the hero. No brand icon set exists for this church, so
 * these are plain line icons rather than a borrowed or invented brand mark. */

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-9 w-9">
      <path
        d="M12 21s7-6.1 7-11.6A7 7 0 0 0 5 9.4C5 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-9 w-9">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-9 w-9">
      <path
        d="M12 5.5c-1.6-1.1-4-1.6-6.5-1.6v13c2.5 0 4.9.5 6.5 1.6 1.6-1.1 4-1.6 6.5-1.6v-13c-2.5 0-4.9.5-6.5 1.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 5.5v13" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

const FACTS = [
  {
    icon: PinIcon,
    label: "Where we are",
    body: (
      <>
        {site.address.street}
        <br />
        {site.address.city}, {site.address.regionName}
      </>
    ),
  },
  {
    icon: MailIcon,
    label: "Email the church",
    body: <Email className="transition hover:text-oak" />,
  },
  {
    icon: BookIcon,
    label: "What you will hear",
    body: <>Christ centered Teaching and Preaching for the Whole Family</>,
  },
] as const;

export default function QuickFacts() {
  return (
    <section className="border-y border-linen bg-parchment">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-3 sm:gap-8 lg:px-10 lg:py-14">
        {FACTS.map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col items-center gap-4 text-center text-oak"
          >
            <span className="flex h-14 items-center justify-center">
              <fact.icon />
            </span>
            <span className="caps text-[0.62rem] font-semibold text-text-muted">
              {fact.label}
            </span>
            <p className="display max-w-[34ch] text-[1.05rem] leading-snug text-ink">
              {fact.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
