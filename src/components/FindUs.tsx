import Link from "next/link";
import Phone from "@/components/Phone";
import { site } from "@/lib/site";

export default function FindUs() {
  return (
    <section id="visit" className="section-pad paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <p className="eyebrow">Come and see</p>
            <h2 className="display mt-4 text-[clamp(1.60rem,3.34vw,2.51rem)] text-ink">
              You will not have to figure it out on your own.
            </h2>
            <p className="mt-6 leading-relaxed text-text-light">
              Please be seated and be prepared for our friendly people to
              introduce themselves and welcome you. There is also a time of
              greeting during the service. There is no specific dress code; most
              people dress in modest, casual attire.
            </p>

            <dl className="mt-10 space-y-5 border-t border-linen pt-8">
              <div>
                <dt className="caps text-[0.6rem] font-semibold text-text-muted">
                  Address
                </dt>
                <dd className="display mt-1.5 text-xl text-ink">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region}{" "}
                  {site.address.postalCode}
                </dd>
              </div>
              <div>
                <dt className="caps text-[0.6rem] font-semibold text-text-muted">
                  By email
                </dt>
                <dd className="display mt-1.5 text-xl text-ink">
                  <Email className="transition hover:text-oak-dark" />
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring caps rounded-sm bg-ink px-6 py-4 text-[0.68rem] font-semibold text-cream transition hover:bg-oak-dark"
              >
                Get Directions
              </a>
              <Link
                href="/contact"
                className="focus-ring caps rounded-sm border border-linen-dark bg-cream px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
              >
                Send a Message
              </Link>
            </div>

            <Link
              href="/visit"
              className="focus-ring caps group mt-8 inline-flex items-center gap-2.5 text-[0.66rem] font-semibold text-oak-dark"
            >
              Questions a first-time visitor asks
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

          <div className="overflow-hidden rounded-sm border border-linen-dark bg-parchment">
            <iframe
              src={site.mapEmbedUrl}
              title="Map to Berkshire Hills Baptist Church, 190 Pleasant Street, Lee, Massachusetts"
              className="h-[360px] w-full border-0 sm:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="border-t border-linen px-6 py-5">
              <p className="text-sm text-text-light">
                190 Pleasant Street · Lee, MA 01238
              </p>
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-3 inline-flex text-sm font-semibold text-oak-dark underline underline-offset-4"
              >
                Open map & get directions{" "}
                <span aria-hidden="true" className="ml-2">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
