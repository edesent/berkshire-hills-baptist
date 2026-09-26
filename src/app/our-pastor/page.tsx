import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { formatSermonDate, getSermons } from "@/lib/sermon-audio";
import { canonical, pastor, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Our Pastor — ${pastor.displayName}`,
  description:
    "Pastor Dr. Doug Mann leads Berkshire Hills Baptist Church in Lee, Massachusetts, preaching verse-by-verse and topically from the King James Bible.",
  alternates: { canonical: "/our-pastor" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": canonical("/our-pastor#pastor"),
  name: pastor.displayName,
  jobTitle: `${pastor.title}, ${site.name}`,
  worksFor: { "@id": canonical("/#church") },
  honorificPrefix: "Dr.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Bethany Divinity School",
  },
  image: canonical(pastor.photo),
  inLanguage: "en-US",
};

export const revalidate = 3600;

export default async function OurPastorPage() {
  const recent = (await getSermons())
    .filter((s) => s.speaker === "Pastor Doug Mann")
    .slice(0, 3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Our pastor"
          title={pastor.displayName}
          lede={`${pastor.title} of Berkshire Hills Baptist Church.`}
          breadcrumb={[
            { href: "/who-we-are", label: "Our Church" },
            { href: "/our-pastor", label: "Our Pastor" },
          ]}
        />

        <section className="section-pad paper">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <figure className="mx-auto w-full max-w-[380px] lg:mx-0">
                  <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_30px_65px_-32px_rgba(34,30,23,0.45)]">
                    <Image
                      src={pastor.photo}
                      alt={`${pastor.displayName} of Berkshire Hills Baptist Church.`}
                      width={1384}
                      height={1136}
                      preload
                      quality={90}
                      sizes="(max-width: 528px) calc(100vw - 48px), 380px"
                      className="h-auto w-full"
                    />
                  </div>
                </figure>

                <dl className="mx-auto mt-8 grid w-full max-w-[380px] gap-px overflow-hidden rounded-sm border border-linen-dark bg-linen-dark lg:mx-0">
                  {pastor.facts.map((fact) => (
                    <div key={fact.label} className="bg-cream px-6 py-5">
                      <dt className="caps text-[0.58rem] font-semibold text-text-muted">
                        {fact.label}
                      </dt>
                      <dd className="display mt-2 text-[1.1rem] leading-snug text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <p className="eyebrow">A welcome, in his own words</p>
                <blockquote className="mt-6 border-l-2 border-gold/55 pl-5 text-[1.1rem] leading-[1.7] text-ink sm:pl-6">
                  &ldquo;{pastor.welcomeQuote}&rdquo;
                </blockquote>
                <p className="ref mt-4">&mdash; {pastor.displayName}</p>

                <h2 className="display mt-14 text-[clamp(1.29rem,2.43vw,1.75rem)] text-ink">
                  About Pastor Mann
                </h2>
                <div className="mt-7 space-y-5 leading-relaxed text-text-body">
                  {pastor.bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                  <p>
                    He preaches verse-by-verse and topically from the King James
                    Bible on Sunday mornings, and leads a chapter-by-chapter
                    Wednesday night Bible study &mdash; recently working through
                    the book of Joshua.
                  </p>
                </div>

                <h2 className="display mt-14 text-[clamp(1.29rem,2.43vw,1.75rem)] text-ink">
                  Recent messages
                </h2>
                <ul className="mt-7 space-y-px overflow-hidden rounded-sm border border-linen-dark bg-linen-dark">
                  {recent.map((message) => (
                    <li key={message.id} className="bg-cream p-6">
                      <Link
                        href={`/sermons/${message.id}`}
                        className="focus-ring group"
                      >
                        <p className="display text-[1.2rem] leading-snug text-ink group-hover:text-oak-dark">
                          {message.title}
                        </p>
                        <p className="mt-2 line-clamp-3 text-[0.92rem] text-text-light">
                          {message.description}
                        </p>
                        <p className="ref mt-2">
                          {formatSermonDate(message.date)}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-14 rounded-sm border border-linen-dark bg-parchment p-8 sm:p-10">
                  <h2 className="display text-[clamp(1.22rem,2.28vw,1.60rem)] text-ink">
                    He would be glad to hear from you.
                  </h2>
                  <p className="mt-4 leading-relaxed text-text-light">
                    Whether it is a question about the church, something you are
                    working through, or you would simply like to know what to
                    expect on a Sunday &mdash; get in touch.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="focus-ring caps rounded-sm bg-ink px-6 py-4 text-[0.68rem] font-semibold text-cream transition hover:bg-oak-dark"
                    >
                      Contact Pastor Mann
                    </Link>
                    <Link
                      href="/sermons"
                      className="focus-ring caps rounded-sm border border-linen-dark bg-cream px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
                    >
                      Hear him preach
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
