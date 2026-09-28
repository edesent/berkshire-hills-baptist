/**
 * Special-event banner shown on the home page between the hero photo and
 * the quick-facts strip. Remove <AnniversaryBanner /> from src/app/page.tsx
 * after the event to take it down.
 */
export default function AnniversaryBanner() {
  return (
    <section
      aria-label="75th Anniversary Service announcement"
      className="relative overflow-hidden bg-ink"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 120% at 50% -30%, rgba(188,143,47,0.35), transparent 70%)",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gold/60"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gold/60"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-12 text-center lg:px-10 lg:py-16">
        <p className="eyebrow text-gold-light/90">All Welcome</p>

        <h2 className="display mt-4 text-[clamp(1.6rem,3.6vw,2.6rem)] leading-tight text-cream">
          75th Anniversary Service
        </h2>
        <p className="caps mt-3 text-[0.72rem] font-semibold text-gold-light">
          Sunday, October 4, 2026
        </p>

        <span
          aria-hidden="true"
          className="mx-auto mt-6 block h-px w-16 bg-gold/60"
        />

        <p className="mt-6 text-[clamp(1rem,1.7vw,1.2rem)] leading-relaxed text-cream/90">
          <strong className="font-semibold text-cream">10 am</strong>
          &nbsp;&nbsp;Sunday School &nbsp;&middot;&nbsp;{" "}
          <strong className="font-semibold text-cream">11 am</strong>
          &nbsp;&nbsp;Worship Service
        </p>
        <p className="mt-2 text-[clamp(1rem,1.7vw,1.2rem)] leading-relaxed text-cream/90">
          followed by a light lunch and a hymn sing &amp; testimonies
        </p>

        <p className="caps mt-7 inline-block max-w-full rounded-sm border border-gold/60 px-5 py-2 text-[0.68rem] font-semibold leading-relaxed text-gold-light">
          In place of our regular 2 pm service
        </p>
      </div>
    </section>
  );
}
