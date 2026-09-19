import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MessagesLibrary from "@/components/MessagesLibrary";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { sermonAudioLibrary } from "@/lib/sermon-audio";
import { canonical, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sermon Audio",
  description:
    "Listen to recent Bible study messages from Pastor Mann at Berkshire Hills Baptist Church in Lee, Massachusetts, preached from the King James Bible.",
  alternates: { canonical: "/sermons" },
};

export default function SermonsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": canonical("/sermons#page"),
    name: `Sermon Audio — ${site.name}`,
    isPartOf: { "@id": canonical("/#website") },
    about: { "@id": canonical("/#church") },
    inLanguage: "en-US",
  };

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
          eyebrow="Sermon audio"
          title="Listen to recent messages."
          lede="We work through a book of the Bible chapter by chapter on Wednesday nights. A few recent ones are below, with more added as they're recorded."
          breadcrumb={[{ href: "/sermons", label: "Sermon Audio" }]}
        >
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://berkshirehillsbaptist.weebly.com/sermons1"
              target="_blank"
              rel="noreferrer"
              className="focus-ring caps rounded-sm bg-gold-pale px-6 py-4 text-[0.68rem] font-semibold text-ink transition hover:bg-gold-light"
            >
              Full Sermon Archive & Blog
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="focus-ring caps rounded-sm border border-linen-dark bg-cream px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
            >
              Follow on Facebook
            </a>
          </div>
        </PageHero>

        <section className="section-pad paper">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <MessagesLibrary />

            <p className="mt-14 border-t border-linen pt-8 text-[0.85rem] leading-relaxed text-text-muted">
              Showing {sermonAudioLibrary.length} recent{" "}
              {sermonAudioLibrary.length === 1 ? "message" : "messages"}. For
              the complete sermon archive and Pastor Mann's blog, visit our{" "}
              <a
                href="https://berkshirehillsbaptist.weebly.com/sermons1"
                target="_blank"
                rel="noreferrer"
                className="text-oak-dark underline decoration-gold/50 underline-offset-4 transition hover:decoration-gold"
              >
                Sermons page
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
