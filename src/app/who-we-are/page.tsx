import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EternalLifeCta from "@/components/EternalLifeCta";
import Footer from "@/components/Footer";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScriptureBanner from "@/components/ScriptureBanner";
import StillThatChurch from "@/components/StillThatChurch";
import { canonical, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "An Independent Baptist church in Lee, Massachusetts — King James Bible preaching, hymn singing, and a warm welcome in the Berkshires.",
  alternates: { canonical: "/who-we-are" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": canonical("/who-we-are#page"),
  name: "Who We Are",
  isPartOf: { "@id": canonical("/#website") },
  about: { "@id": canonical("/#church") },
  inLanguage: "en-US",
};

const facts = [
  { label: "Affiliation", value: "Independent Baptist" },
  { label: "Bible", value: "King James (Authorized Version)" },
  { label: "County", value: site.address.county },
  { label: "Doctrine last published", value: "October 24, 2010" },
];

export default function WhoWeArePage() {
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
          eyebrow="Who we are"
          title="A church filled with caring, friendly people."
          lede="Berkshire Hills Baptist Church meets on Pleasant Street in Lee, Massachusetts. What makes it special, in the church's own words, is simply the people — and a welcome that has not changed with the trends."
          breadcrumb={[{ href: "/who-we-are", label: "About" }]}
        />

        <section className="section-pad paper">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
              <div>
                <p className="eyebrow">What we believe, in short</p>
                <h2 className="display mt-4 text-[clamp(1.52rem,3.04vw,2.20rem)] text-ink">
                  Independent, Baptist, and unembarrassed about both.
                </h2>
                <div className="mt-8 space-y-6 text-[1.03rem] leading-[1.75] text-text-body">
                  <p>
                    Berkshire Hills Baptist Church is an Independent Baptist
                    church that believes the Bible is the preserved Word of
                    God and the only authority for our standard of conduct
                    and the rule for life and service. Rather than following
                    modern trends, we remain committed to King James Bible
                    preaching and teaching.
                  </p>
                  <p>
                    We warmly invite you to join us as we grow together in
                    grace and in the knowledge of our Lord and Saviour, Jesus
                    Christ.
                  </p>
                  <p>
                    Independent means there is no denominational headquarters
                    setting our direction. This is a local New Testament
                    church governing itself under one Head &mdash; Christ
                    &mdash; with two biblical offices, pastor and deacon.
                  </p>
                </div>

                <dl className="mt-12 grid gap-px overflow-hidden rounded-sm border border-linen-dark bg-linen-dark sm:grid-cols-2">
                  {facts.map((fact) => (
                    <div key={fact.label} className="bg-cream p-6">
                      <dt className="caps text-[0.58rem] font-semibold text-text-muted">
                        {fact.label}
                      </dt>
                      <dd className="display mt-2 text-[1.28rem] leading-snug text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/beliefs"
                    className="focus-ring caps rounded-sm bg-ink px-6 py-4 text-[0.68rem] font-semibold text-cream transition hover:bg-oak-dark"
                  >
                    Full Statement of Doctrine
                  </Link>
                  <Link
                    href="/our-pastor"
                    className="focus-ring caps rounded-sm border border-linen-dark bg-cream px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
                  >
                    Meet our pastor
                  </Link>
                </div>
              </div>

              <div className="space-y-8">
                <figure>
                  <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_28px_60px_-32px_rgba(34,30,23,0.4)]">
                    <Image
                      src="/bhbc/sanctuary-flags.jpg"
                      alt="The sanctuary at Berkshire Hills Baptist Church, with flags representing the nations where the church supports missionaries."
                      width={1100}
                      height={825}
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-4 text-[0.79rem] leading-relaxed text-text-muted">
                    Wooden pews, a simple platform, and a message on the
                    screen behind the pulpit.
                  </figcaption>
                </figure>

                <figure>
                  <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_28px_60px_-32px_rgba(34,30,23,0.4)]">
                    <Image
                      src="/bhbc/church-exterior.jpg"
                      alt="The Berkshire Hills Baptist Church building on Pleasant Street, with its wood siding and large white cross."
                      width={960}
                      height={337}
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-4 text-[0.79rem] leading-relaxed text-text-muted">
                    The building on Pleasant Street, Route 102.
                  </figcaption>
                </figure>

                <div className="grid grid-cols-2 gap-4">
                  <figure>
                    <div className="overflow-hidden rounded-sm border border-linen-dark">
                      <Image
                        src="/bhbc/christmas-decoration.jpg"
                        alt="A wreath decorated for the Christmas season inside the church."
                        width={500}
                        height={376}
                        sizes="(max-width: 1024px) 50vw, 23vw"
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="mt-3 text-[0.74rem] leading-relaxed text-text-muted">
                      Decorating together for the season.
                    </figcaption>
                  </figure>
                  <figure>
                    <div className="overflow-hidden rounded-sm border border-linen-dark">
                      <Image
                        src="/bhbc/sign-banner.jpg"
                        alt="A banner reading Berkshire Hills Baptist Church, with the church's Bible verse and address."
                        width={250}
                        height={186}
                        sizes="(max-width: 1024px) 50vw, 23vw"
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="mt-3 text-[0.74rem] leading-relaxed text-text-muted">
                      You'll find our name over the door.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Mission />
        <ScriptureBanner />
        <StillThatChurch />
        <EternalLifeCta />
      </main>
      <Footer />
    </>
  );
}
