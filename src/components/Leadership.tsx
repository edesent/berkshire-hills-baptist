import Image from "next/image";
import Link from "next/link";
import { leadership } from "@/lib/site";

/**
 * The leadership strip. Anyone without a photo shows their initials rather
 * than a stand-in picture — see `leadership` in src/lib/site.ts.
 */

function initials(name: string) {
  return name
    .replace(/^Dr\.\s+/, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export default function Leadership() {
  if (leadership.length === 0) return null;

  return (
    <section className="section-pad bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Who leads here</p>
            <h2 className="display mt-4 text-[clamp(1.60rem,3.34vw,2.51rem)] text-ink">
              You will know who is in the pulpit before you walk in.
            </h2>
          </div>
          <Link
            href="/our-pastor"
            className="focus-ring caps group inline-flex shrink-0 items-center gap-2.5 text-[0.68rem] font-semibold text-oak-dark"
          >
            Meet our pastor
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

        <ul
          className={
            leadership.length === 1
              ? "mt-12 grid max-w-xl gap-8"
              : "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {leadership.map((leader) => {
            const card = (
              <>
                <div className="shrink-0">
                  {leader.photo ? (
                    <div className="h-28 w-28 overflow-hidden rounded-sm border border-linen-dark">
                      <Image
                        src={leader.photo}
                        alt={`${leader.name}, ${leader.role} at Berkshire Hills Baptist Church.`}
                        width={192}
                        height={192}
                        sizes="112px"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="display flex h-28 w-28 items-center justify-center rounded-sm border border-linen-dark bg-parchment text-[1.5rem] text-gold"
                    >
                      {initials(leader.name)}
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="caps text-[0.6rem] font-semibold text-text-muted">
                    {leader.role}
                  </p>
                  <h3 className="display mt-2 text-[1.42rem] leading-tight text-ink group-hover:text-oak-dark">
                    {leader.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-px w-8 bg-gold/50"
                  />
                  <p className="mt-4 text-[0.88rem] leading-relaxed text-text-light">
                    {leader.detail}
                  </p>
                </div>
              </>
            );

            return (
              <li
                key={leader.name}
                className="rounded-sm border border-linen-dark bg-cream p-7 lg:p-8"
              >
                {leader.href ? (
                  <Link
                    href={leader.href}
                    className="focus-ring group flex gap-6"
                  >
                    {card}
                  </Link>
                ) : (
                  <div className="flex gap-6">{card}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
