import Link from "next/link";
import { missionaries } from "@/lib/missions";

/**
 * The homepage strip of missionary partners. It reads straight from
 * src/lib/missions.ts, so updating that list updates this too.
 */
export default function MissionariesHome() {
  if (missionaries.length === 0) return null;

  return (
    <section className="section-pad bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Around the world</p>
            <h2 className="display mt-4 text-[clamp(1.60rem,3.34vw,2.51rem)] text-ink">
              The missionaries we stand behind.
            </h2>
            <p className="mt-6 leading-relaxed text-text-light">
              We believe the Church has been commissioned to share the Gospel
              locally and abroad. These families carry that out on our behalf,
              and we pray for them by name.
            </p>
          </div>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {missionaries.map((missionary) => (
            <li
              key={missionary.name}
              className="flex flex-col rounded-sm border border-linen-dark bg-cream p-7"
            >
              <p className="caps text-[0.6rem] font-semibold text-text-muted">
                {missionary.location}
              </p>
              <h3 className="display mt-3 text-[1.25rem] leading-tight text-ink">
                {missionary.name}
              </h3>
              <span
                aria-hidden="true"
                className="mt-4 h-px w-8 bg-gold/50"
              />
              <p className="mt-4 text-[0.86rem] leading-relaxed text-text-light">
                {missionary.role}
              </p>
              <p className="ref mt-2 text-[0.78rem]">{missionary.agency}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="/missions"
            className="focus-ring caps group inline-flex items-center gap-2.5 rounded-sm border border-linen-dark bg-cream px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
          >
            See our missionary partners
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            >
              <path
                d="M5 12h14m0 0-5-5m5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
