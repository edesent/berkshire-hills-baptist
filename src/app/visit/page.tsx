import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Email from "@/components/Email";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { canonical, site, visitFacts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan a Visit",
  description:
    "What to expect on your first Sunday at Berkshire Hills Baptist Church in Lee, Massachusetts — what to wear, what the music is like, and what happens with your children.",
  alternates: { canonical: "/visit" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": canonical("/visit#faq"),
  mainEntity: visitFacts.map((fact) => ({
    "@type": "Question",
    name: fact.q,
    acceptedAnswer: { "@type": "Answer", text: fact.a },
  })),
};

const steps = [
  {
    title: "Pick a service",
    body: "Sunday morning at 11:00 is the easiest first visit. If you would rather start somewhere quieter, come to the Sunday Afternoon Service at 2:00.",
  },
  {
    title: "Find Pleasant Street",
    body: `We are at ${site.address.street}, in ${site.address.city}. Come in the main entrance.`,
  },
  {
    title: "Walk in",
    body: "Somebody will greet you and point you toward Sunday School or the service. Sit wherever you like.",
  },
  {
    title: "That is it",
    body: "You will not be asked to stand, introduce yourself, sign anything, or give anything. Come, sit, sing, and hear the Book preached.",
  },
];

export default function VisitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Plan a visit"
          title="Come and see. That is the whole invitation."
          lede="Walking into a church you have never been to is a strange feeling for anybody. So here is exactly what a first Sunday at Berkshire Hills is like, before you have to find out in person."
          breadcrumb={[{ href: "/visit", label: "What to Expect" }]}
        >
          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-5 border-t border-cream/15 pt-8 sm:grid-cols-4">
            {[
              ["Sunday School", "10:00 a.m."],
              ["Morning Worship", "11:00 a.m."],
              ["Sunday Afternoon Service", "2:00 p.m."],
              ["Wednesday", "6:30 p.m."],
            ].map(([label, time]) => (
              <div key={label}>
                <p className="caps text-[0.57rem] font-semibold text-gold-light/70">
                  {label}
                </p>
                <p className="display mt-1.5 text-lg text-cream">{time}</p>
              </div>
            ))}
          </div>
        </PageHero>

        <section className="section-pad paper">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              <div>
                <p className="eyebrow">Four steps, and none of them hard</p>
                <h2 className="display mt-4 text-[clamp(1.52rem,3.04vw,2.20rem)] text-ink">
                  Your first Sunday, start to finish.
                </h2>
                <ol className="mt-10 space-y-8 border-l border-linen pl-7">
                  {steps.map((step, index) => (
                    <li key={step.title} className="relative">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[calc(1.75rem+4.5px)] top-2 h-2 w-2 rounded-full bg-gold ring-4 ring-cream"
                      />
                      <p className="caps text-[0.58rem] font-semibold text-oak">
                        Step {index + 1}
                      </p>
                      <h3 className="display mt-2 text-[1.45rem] leading-snug text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-text-light">
                        {step.body}
                      </p>
                    </li>
                  ))}
                </ol>

                <figure className="mt-12">
                  <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_26px_60px_-32px_rgba(34,30,23,0.4)]">
                    <Image
                      src="/bhbc/sanctuary.jpg"
                      alt="The sanctuary at Berkshire Hills Baptist Church, viewed from the pews."
                      width={577}
                      height={324}
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-4 text-[0.79rem] leading-relaxed text-text-muted">
                    This is the room &mdash; a hymnal in the rack in front of
                    you.
                  </figcaption>
                </figure>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <figure>
                    <div className="overflow-hidden rounded-sm border border-linen-dark">
                      <Image
                        src="/bhbc/altar-flowers.jpg"
                        alt="The altar at Berkshire Hills Baptist Church, set with flowers before a service."
                        width={500}
                        height={237}
                        sizes="(max-width: 1024px) 50vw, 21vw"
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="mt-3 text-[0.74rem] leading-relaxed text-text-muted">
                      The altar, ready for Sunday.
                    </figcaption>
                  </figure>
                  <figure>
                    <div className="overflow-hidden rounded-sm border border-linen-dark">
                      <Image
                        src="/bhbc/sanctuary-service.jpg"
                        alt="A service in progress at Berkshire Hills Baptist Church."
                        width={500}
                        height={281}
                        sizes="(max-width: 1024px) 50vw, 21vw"
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="mt-3 text-[0.74rem] leading-relaxed text-text-muted">
                      A Sunday service in progress.
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div>
                <p className="eyebrow">The questions people actually ask</p>
                <dl className="mt-8 space-y-px overflow-hidden rounded-sm border border-linen-dark bg-linen-dark">
                  {visitFacts.map((fact) => (
                    <div key={fact.q} className="bg-cream p-7 lg:p-8">
                      <dt className="display text-[1.4rem] leading-snug text-ink">
                        {fact.q}
                      </dt>
                      <dd className="mt-3 leading-relaxed text-text-light">
                        {fact.a}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-10 rounded-sm border border-gold/40 bg-gold-pale/25 p-8">
                  <h2 className="display text-[1.7rem] leading-snug text-ink">
                    Still would rather ask a person?
                  </h2>
                  <p className="mt-3 leading-relaxed text-text-light">
                    Email the church and somebody will get back to you, or
                    send a message through our contact page.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Email
                      showIcon
                      className="rounded-sm bg-ink px-6 py-4 text-[0.85rem] font-semibold text-cream transition hover:bg-oak-dark"
                    />
                    <Link
                      href="/contact"
                      className="focus-ring caps rounded-sm border border-linen-dark bg-cream px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
                    >
                      Send a message
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FindUs />
      </main>
      <Footer />
    </>
  );
}
