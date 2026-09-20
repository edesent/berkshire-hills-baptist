import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { missionaries } from "@/lib/missions";
import { canonical, missionRef, missionStatement } from "@/lib/site";

export const metadata: Metadata = {
  title: "Missions",
  description:
    "Berkshire Hills Baptist Church supports missionaries around the world through Faith Promise Giving, as part of the Great Commission.",
  alternates: { canonical: "/missions" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": canonical("/missions#page"),
  name: "Missions",
  isPartOf: { "@id": canonical("/#website") },
  about: { "@id": canonical("/#church") },
  inLanguage: "en-US",
};

export default function MissionsPage() {
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
          eyebrow="Missions"
          title="Around the corner, and to the uttermost part of the earth."
          lede="We believe that the Church has been commissioned to share the Gospel of Jesus Christ locally and abroad, through personal evangelistic efforts and the support of missionaries both here in the United States and around the world."
          breadcrumb={[{ href: "/missions", label: "Missions" }]}
        />

        <section className="section-pad paper">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
              <div>
                <p className="eyebrow">Our mission</p>
                <p className="mt-6 text-[clamp(1.05rem,2vw,1.4rem)] leading-[1.6] text-ink">
                  {missionStatement}
                </p>
                <p className="ref mt-4">({missionRef})</p>

                <p className="mt-10 leading-relaxed text-text-light">
                  We participate in the Great Commission by supporting
                  missionaries the world over through Faith Promise Giving.
                  Please pray for each one, their families, and their place
                  of service.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/donate"
                    className="focus-ring caps rounded-sm bg-ink px-6 py-4 text-[0.68rem] font-semibold text-cream transition hover:bg-oak-dark"
                  >
                    Support Our Missionaries
                  </Link>
                  <Link
                    href="/contact"
                    className="focus-ring caps rounded-sm border border-linen-dark bg-cream px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
                  >
                    Ask About Missions
                  </Link>
                </div>
              </div>

              <figure>
                <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_28px_60px_-32px_rgba(34,30,23,0.4)]">
                  <Image
                    src="/bhbc/missions-tract-rack.jpg"
                    alt="A rack of missionary prayer cards and tracts at Berkshire Hills Baptist Church."
                    width={376}
                    height={500}
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-4 text-[0.79rem] leading-relaxed text-text-muted">
                  Prayer cards for the families we support, kept where the
                  church can pick one up and pray through the week.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section-pad bg-parchment">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
              <figure className="lg:sticky lg:top-32 lg:self-start">
                <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_28px_60px_-32px_rgba(34,30,23,0.4)]">
                  <Image
                    src="/bhbc/missions-tract-rack.jpg"
                    alt="A rack of missionary prayer cards and gospel tracts at Berkshire Hills Baptist Church."
                    width={678}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-4 text-[0.79rem] leading-relaxed text-text-muted">
                  Our missionary rack, with prayer cards for the families we
                  support.
                </figcaption>
              </figure>

              <div>
                <p className="eyebrow">Missionary partners</p>
                <h2 className="display mt-4 text-[clamp(1.44rem,2.74vw,1.98rem)] text-ink">
                  Please pray for these families.
                </h2>
                <p className="mt-5 leading-relaxed text-text-light">
                  This list is being updated — check back soon for current
                  photos and details on each family.
                </p>

                <ul className="mt-8 space-y-px overflow-hidden rounded-sm border border-linen-dark bg-linen-dark">
                  {missionaries.map((m) => (
                    <li key={m.name} className="bg-cream p-6">
                      {m.link ? (
                        <a
                          href={m.link}
                          target="_blank"
                          rel="noreferrer"
                          className="focus-ring group"
                        >
                          <MissionaryEntry m={m} />
                        </a>
                      ) : (
                        <MissionaryEntry m={m} />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function MissionaryEntry({ m }: { m: (typeof missionaries)[number] }) {
  return (
    <div>
      <p className="display text-[1.15rem] leading-snug text-ink group-hover:text-oak-dark">
        {m.name}
      </p>
      <p className="mt-1.5 text-[0.92rem] text-text-light">{m.role}</p>
      <p className="ref mt-1.5">
        {m.agency} &middot; {m.location}
      </p>
    </div>
  );
}
