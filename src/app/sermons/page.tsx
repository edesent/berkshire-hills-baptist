import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MessagesLibrary from "@/components/MessagesLibrary";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { canonical, recentMessages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Messages",
  description:
    "Recent Bible study messages from Pastor Mann at Berkshire Hills Baptist Church in Lee, Massachusetts, preached from the King James Bible.",
  alternates: { canonical: "/sermons" },
};

export default function SermonsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": canonical("/sermons#page"),
    name: `Messages — ${site.name}`,
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
          eyebrow="Messages"
          title="Recent Bible study messages."
          lede="We work through a book of the Bible chapter by chapter on Wednesday nights. A few recent ones are below — follow along on Facebook for the rest."
          breadcrumb={[{ href: "/sermons", label: "Messages" }]}
        >
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="focus-ring caps rounded-sm bg-gold-pale px-6 py-4 text-[0.68rem] font-semibold text-ink transition hover:bg-gold-light"
            >
              Follow on Facebook
            </a>
          </div>
        </PageHero>

        <section className="section-pad paper">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <MessagesLibrary />

            <p className="mt-14 border-t border-linen pt-8 text-[0.85rem] leading-relaxed text-text-muted">
              Showing {recentMessages.length} recent messages. Ask us on a
              Sunday and we can point you to more.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
