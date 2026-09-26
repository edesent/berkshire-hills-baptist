import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SermonArchive from "@/components/SermonArchive";
import { SermonAudio } from "@/components/MessagesLibrary";
import { formatSermonDate, getSermon, getSermons } from "@/lib/sermon-audio";
import { site } from "@/lib/site";
export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Sermons",
  alternates: { canonical: "/sermons" },
};
export default async function Page() {
  const sermons = await getSermons();
  const latest = sermons[0] ? await getSermon(sermons[0].id) : null;
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Open the Word"
          title="Sermons & Bible teaching."
          lede="Listen to messages from Berkshire Hills Baptist Church, with the church’s original notes and available transcripts."
        >
          <div className="mt-7 flex flex-wrap gap-5 text-sm text-gold-light">
            {[
              ["Wednesday Night", "/wed-night"],
              ["Special Messages", "/special-messages"],
              ["Missionary Sermons", "/missionary-sermons"],
            ].map(([label, href]) => (
              <Link
                className="focus-ring underline underline-offset-4"
                href={href}
                key={href}
              >
                {label}
              </Link>
            ))}
          </div>
        </PageHero>
        <section className="section-pad paper">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            {latest && (
              <article className="mb-16 rounded-sm border border-linen-dark bg-cream p-8 sm:p-10">
                <p className="eyebrow">Latest message</p>
                <p className="caps mt-5 text-[0.62rem] font-semibold text-text-muted">
                  {formatSermonDate(latest.date)}
                  {latest.speaker && ` · ${latest.speaker}`}
                </p>
                <h2 className="display mt-2 text-[clamp(1.45rem,2.9vw,2.1rem)] text-ink">
                  <Link
                    href={`/sermons/${latest.id}`}
                    className="focus-ring hover:text-oak-dark"
                  >
                    {latest.title}
                  </Link>
                </h2>
                {latest.description && (
                  <p className="mt-4 max-w-3xl leading-relaxed text-text-light">
                    {latest.description}
                  </p>
                )}
                <div className="mt-7 max-w-3xl">
                  <SermonAudio sermon={latest} />
                </div>
                <Link
                  href={`/sermons/${latest.id}`}
                  className="focus-ring mt-6 inline-block text-sm text-oak-dark underline underline-offset-4"
                >
                  {latest.transcripts.length > 0
                    ? "Transcript & details"
                    : "Details"}
                </Link>
              </article>
            )}

            <SermonArchive
              entries={sermons.map((s) => ({
                id: s.id,
                title: s.title,
                date: s.date,
                dateLabel: formatSermonDate(s.date),
                speaker: s.speaker,
              }))}
            />

            <div className="mt-16 rounded-sm border border-linen-dark bg-parchment p-8 sm:p-10">
              <p className="eyebrow">Download or share</p>
              <h2 className="display mt-4 text-[clamp(1.22rem,2.28vw,1.60rem)] text-ink">
                Every message is also kept on the Internet Archive.
              </h2>
              <p className="mt-4 leading-relaxed text-text-light">
                Each sermon above is free to stream or download there, along
                with its transcript where one is available.
              </p>
              <a
                href={site.social.sermonArchive}
                target="_blank"
                rel="noreferrer"
                className="focus-ring caps group mt-7 inline-flex items-center gap-2.5 rounded-sm bg-ink px-6 py-4 text-[0.68rem] font-semibold text-cream transition hover:bg-oak-dark"
              >
                Open the Internet Archive
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
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
