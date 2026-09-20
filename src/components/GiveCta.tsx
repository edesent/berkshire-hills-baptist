import Link from "next/link";
import { site } from "@/lib/site";

/**
 * The giving block on the homepage. It sends people to /donate rather than
 * embedding the PayPal button twice, so there is only one place to change if
 * the church ever switches how it receives gifts.
 */
export default function GiveCta() {
  return (
    <section className="section-pad paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 rounded-sm border border-linen-dark bg-cream p-8 shadow-[0_26px_60px_-38px_rgba(34,30,23,0.4)] sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-14">
          <div>
            <p className="eyebrow">Giving</p>
            <h2 className="display mt-4 text-[clamp(1.52rem,3.04vw,2.20rem)] text-ink">
              Help spread the Gospel here and abroad.
            </h2>
            <p className="mt-6 leading-relaxed text-text-light">
              If you feel so led of the Lord, you can make a gift to the
              ministry of {site.name} online. Any gift you make helps in
              spreading the Gospel of Jesus Christ here in {site.address.city},{" "}
              {site.address.region} and around the world.
            </p>
            <p className="ref mt-6">
              &ldquo;Every man according as he purposeth in his heart, so let
              him give; not grudgingly, or of necessity: for God loveth a
              cheerful giver.&rdquo; &mdash; 2 Corinthians 9:7
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Link
              href="/donate"
              className="focus-ring caps group inline-flex items-center gap-3 rounded-sm bg-ink px-8 py-4.5 text-[0.72rem] font-semibold text-cream transition hover:bg-oak-dark"
            >
              Give Online
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
            <p className="text-[0.82rem] leading-relaxed text-text-muted lg:text-right">
              Gifts are handled by PayPal. You do not need a PayPal account to
              give by card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
