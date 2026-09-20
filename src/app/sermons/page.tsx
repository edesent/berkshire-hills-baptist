import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ArchiveList from "@/components/ArchiveList";
import pages from "@/data/weebly.json";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Sermons",
  alternates: { canonical: "/sermons" },
};
export default function Page() {
  const archive = pages.find((p) => p.path === "/sermons")!;
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
            <ArchiveList entries={archive.entries} />

            <div className="mt-16 rounded-sm border border-linen-dark bg-parchment p-8 sm:p-10">
              <p className="eyebrow">Looking for an older message?</p>
              <h2 className="display mt-4 text-[clamp(1.22rem,2.28vw,1.60rem)] text-ink">
                Every message we have recorded is archived in one place.
              </h2>
              <p className="mt-4 leading-relaxed text-text-light">
                The complete archive goes back further than the messages listed
                above, and every sermon is free to stream or download.
              </p>
              <a
                href={site.social.sermonArchive}
                target="_blank"
                rel="noreferrer"
                className="focus-ring caps group mt-7 inline-flex items-center gap-2.5 rounded-sm bg-ink px-6 py-4 text-[0.68rem] font-semibold text-cream transition hover:bg-oak-dark"
              >
                Browse the full sermon archive
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
