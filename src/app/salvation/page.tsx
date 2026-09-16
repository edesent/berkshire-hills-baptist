import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { salvationIntro, salvationSteps } from "@/lib/content";
import { canonical, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Knowing God — How to Have Eternal Life",
  description:
    "Eternity with God is not a hit-or-miss proposition. Four steps, laid out entirely from Scripture: you are a sinner, you cannot save yourself, Jesus is the only way, and you must respond by faith.",
  alternates: { canonical: "/salvation" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": canonical("/salvation#article"),
  headline: "Knowing God",
  description: salvationIntro,
  isPartOf: { "@id": canonical("/#website") },
  publisher: { "@id": canonical("/#church") },
  about: "The Gospel of Jesus Christ",
  inLanguage: "en-US",
};

export default function SalvationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Salvation"
          title="Knowing God"
          lede={salvationIntro}
          breadcrumb={[{ href: "/salvation", label: "Salvation" }]}
        />

        <div className="paper">
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-24">
            {salvationSteps.map((step, index) => (
              <section
                key={step.id}
                id={step.id}
                className={
                  index === 0
                    ? "scroll-mt-32"
                    : "mt-16 scroll-mt-32 border-t border-linen pt-16"
                }
              >
                <p className="display text-[0.95rem] text-gold">
                  {["FIRST", "SECOND", "THIRD", "FOURTH"][index]}
                </p>
                <h2 className="display mt-3 text-[clamp(1.41rem,2.74vw,1.98rem)] leading-tight text-ink">
                  {step.heading}
                </h2>
                <div className="mt-7 space-y-5">
                  {step.verses.map((verse) => (
                    <blockquote
                      key={verse.ref}
                      className="border-l-2 border-gold/55 pl-5 sm:pl-6"
                    >
                      <p className="display text-[1.22rem] leading-[1.5] text-ink sm:text-[1.32rem]">
                        &ldquo;{verse.text}&rdquo;
                      </p>
                      <cite className="ref mt-2 block not-italic">
                        {verse.ref}
                      </cite>
                    </blockquote>
                  ))}
                </div>
              </section>
            ))}

            <div className="mt-16 rounded-sm border border-gold/40 bg-cream p-8 sm:p-10">
              <h2 className="display text-[clamp(1.29rem,2.43vw,1.75rem)] text-ink">
                If you made that decision today, we would love to hear it.
              </h2>
              <p className="mt-5 leading-relaxed text-text-light">
                Tell your decision to someone who cares for your soul, and
                find a Bible-believing church you can fellowship with and
                learn more in. If that could be us, the door is open at every
                service.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="focus-ring caps rounded-sm bg-ink px-6 py-4 text-[0.68rem] font-semibold text-cream transition hover:bg-oak-dark"
                >
                  Tell us about it
                </Link>
                <Link
                  href="/visit"
                  className="focus-ring caps rounded-sm border border-linen-dark bg-parchment px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
                >
                  Plan a visit
                </Link>
              </div>
              <p className="ref mt-7">
                {site.name} &mdash; {site.address.street}, {site.address.city}
                , {site.address.region} {site.address.postalCode}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
