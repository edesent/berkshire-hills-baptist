import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * The church's own photo of their building on Pleasant Street, behind a
 * cream wash so the copy column stays readable — no stock or generated
 * imagery, and no video (the church has none to show).
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[80svh] flex-col overflow-hidden bg-cream">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/bhbc/church-exterior-fresh.jpg"
          alt="Berkshire Hills Baptist Church, a wood-sided sanctuary with a large white cross, on Pleasant Street in Lee, Massachusetts."
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,251,246,0.70)_0%,rgba(255,251,246,0.80)_55%,rgba(255,251,246,0.88)_100%)] lg:bg-[linear-gradient(100deg,rgba(255,251,246,0.92)_0%,rgba(255,251,246,0.88)_30%,rgba(255,251,246,0.76)_44%,rgba(255,251,246,0.28)_60%,rgba(255,251,246,0.06)_74%,rgba(255,251,246,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(255,251,246,0.92)_0%,rgba(255,251,246,0.26)_14%,rgba(255,251,246,0)_34%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-gold-pale/25 to-transparent"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-16 pt-14 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="max-w-2xl">
          <p className="eyebrow animate-fade-up">
            {site.address.city}, {site.address.regionName}
          </p>

          <h1 className="display animate-fade-up delay-1 mt-6 text-[clamp(2.20rem,5.02vw,3.88rem)] text-ink">
            A church filled with
            <br />
            <span className="relative text-gold">
              caring, friendly people
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-gold via-gold-light to-transparent"
              />
            </span>
            .
          </h1>

          <p className="animate-fade-up delay-2 mt-9 max-w-xl text-[1.09rem] leading-relaxed text-text-light">
            An Independent Baptist church on Pleasant Street in Lee,
            preaching the King James Bible and singing the old hymns. No
            screens, no smoke, no sales pitch — just the Book, sung and
            preached, and a seat saved for you.
          </p>

          <div className="animate-fade-up delay-3 mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/visit"
              className="focus-ring caps group inline-flex items-center gap-2.5 rounded-sm bg-ink px-6 py-4 text-[0.7rem] font-semibold text-cream transition hover:bg-oak-dark"
            >
              Plan Your First Visit
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
            <Link
              href="/sermons"
              className="focus-ring caps inline-flex items-center gap-2.5 rounded-sm border border-linen-dark bg-cream/80 px-6 py-4 text-[0.7rem] font-semibold text-ink-soft backdrop-blur-[2px] transition hover:border-gold hover:text-oak-dark"
            >
              Hear a Message
            </Link>
          </div>

          <dl className="animate-fade-up delay-4 mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-5 border-t border-linen pt-8 sm:grid-cols-4">
            {[
              ["Sunday School", "10:00 a.m."],
              ["Worship", "11:00 a.m."],
              ["Sunday Evening", "2:00 p.m."],
              ["Wednesday", "6:30 p.m."],
            ].map(([label, time]) => (
              <div key={label}>
                <dt className="caps text-[0.6rem] font-semibold text-text-muted">
                  {label}
                </dt>
                <dd className="display mt-1.5 text-xl text-ink">{time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
