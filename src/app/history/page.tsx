import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EternalLifeCta from "@/components/EternalLifeCta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import {
  historyEpigraph,
  historyMilestones,
  historyNarrative,
} from "@/lib/content";
import { canonical, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our History",
  description:
    "Berkshire Hills Baptist Church began in May 1950 as the Sunday Evening Gospel Hour in the East Lee Chapel, and was organized as an Independent Baptist church on October 7, 1951.",
  alternates: { canonical: "/history" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": canonical("/history#page"),
  name: "Our History",
  description:
    "The founding of Berkshire Hills Baptist Church in Lee, Massachusetts, from the Sunday Evening Gospel Hour in 1950 to its organization as an Independent Baptist church on October 7, 1951.",
  isPartOf: { "@id": canonical("/#website") },
  about: { "@id": canonical("/#church") },
  inLanguage: "en-US",
};

export default function HistoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Our history"
          title="It started on a Sunday night in the East Lee Chapel."
          lede="Berkshire Hills Baptist Church began in May 1950 with a small group of believers in Lee who wanted more of the Word than they were getting anywhere else."
          breadcrumb={[
            { href: "/who-we-are", label: "About" },
            { href: "/history", label: "Our History" },
          ]}
        />

        <section className="paper">
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-24">
            <blockquote className="border-l-2 border-gold/55 pl-5 sm:pl-6">
              <p className="display text-[clamp(1.22rem,2.5vw,1.62rem)] leading-[1.5] text-ink">
                &ldquo;{historyEpigraph.text}&rdquo;
              </p>
              <p className="ref mt-4">{historyEpigraph.ref}</p>
            </blockquote>

            <div className="mt-14 space-y-7 text-[1.04rem] leading-[1.8] text-text-body">
              {historyNarrative.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="rule-diamond mx-auto mt-16 max-w-xs text-gold"
            >
              <span className="text-[0.6rem]">&#9670;</span>
            </div>
          </div>
        </section>

        <section className="section-pad bg-parchment">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="eyebrow">How it happened</p>
              <h2 className="display mt-4 text-[clamp(1.60rem,3.34vw,2.51rem)] text-ink">
                From a Sunday night meeting to a church.
              </h2>
            </div>

            <ol className="mt-14 grid gap-px overflow-hidden rounded-sm border border-linen-dark bg-linen-dark sm:grid-cols-2 lg:grid-cols-4">
              {historyMilestones.map((milestone, index) => (
                <li key={milestone.year} className="flex flex-col bg-cream p-7 lg:p-8">
                  <span className="display text-[0.95rem] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="caps mt-5 text-[0.6rem] font-semibold text-text-muted">
                    {milestone.year}
                  </p>
                  <h3 className="display mt-2 text-[1.32rem] leading-tight text-ink">
                    {milestone.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-5 h-px w-8 bg-gold/50"
                  />
                  <p className="mt-5 text-[0.88rem] leading-relaxed text-text-light">
                    {milestone.text}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
              <figure>
                <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_28px_60px_-32px_rgba(34,30,23,0.4)]">
                  <Image
                    src="/bhbc/church-exterior.jpg"
                    alt="The Berkshire Hills Baptist Church building on Pleasant Street, with its wood siding and large white cross."
                    width={960}
                    height={337}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-4 text-[0.79rem] leading-relaxed text-text-muted">
                  {site.address.street}, {site.address.city} &mdash; where the
                  church has met since it was organized.
                </figcaption>
              </figure>

              <div>
                <p className="eyebrow">Still here</p>
                <h2 className="display mt-4 text-[clamp(1.40rem,2.8vw,1.98rem)] text-ink">
                  The same Book, the same welcome.
                </h2>
                <p className="mt-6 leading-relaxed text-text-light">
                  Seventy-five years on, the names on the roll have changed.
                  The preaching has not. Come and see for yourself on a Sunday
                  morning &mdash; Sunday School at 10:00, Morning Worship at
                  11:00.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/visit"
                    className="focus-ring caps rounded-sm bg-ink px-6 py-4 text-[0.68rem] font-semibold text-cream transition hover:bg-oak-dark"
                  >
                    What to Expect
                  </Link>
                  <Link
                    href="/who-we-are"
                    className="focus-ring caps rounded-sm border border-linen-dark bg-cream px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
                  >
                    Who We Are
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EternalLifeCta />
      </main>
      <Footer />
    </>
  );
}
