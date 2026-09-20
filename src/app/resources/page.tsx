import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import pages from "@/data/weebly.json";
export const metadata: Metadata = {
  title: "Church Resources",
  alternates: { canonical: "/resources" },
};
const groups = [
  {
    title: "Our church",
    links: [
      ["About", "/who-we-are"],
      ["Our Pastor", "/our-pastor"],
      ["Doctrine", "/beliefs"],
      ["Services", "/services"],
      ["Directions", "/directions"],
      ["Contact Us", "/contact"],
      ["What to Expect", "/visit"],
    ],
  },
  {
    title: "Listen & grow",
    links: [
      ["Sermons", "/sermons"],
      ["Wednesday Night", "/wed-night"],
      ["Special Messages", "/special-messages"],
      ["Grow", "/grow"],
      ["Growing in Grace", "/blog"],
      ["Prayer", "/prayer"],
      ["All Prayer Requests", "/all-prayer-requests"],
    ],
  },
  {
    title: "Faith & missions",
    links: [
      ["Eternity", "/eternity"],
      ["Knowing God", "/salvation"],
      ["Missionary Partners", "/missions"],
      ["Missions Map", "/missions/map"],
      ["Missionary Sermons", "/missionary-sermons"],
      ["Donate", "/donate"],
    ],
  },
];
export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Explore"
          title="Church resources."
          lede="Messages, Bible studies, prayer, and the life of our church."
        />
        <section className="section-pad paper">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-10 md:grid-cols-3">
              {groups.map((g) => (
                <section key={g.title}>
                  <h2 className="display text-xl">{g.title}</h2>
                  <ul className="mt-5 space-y-3">
                    {g.links.map(([label, href]) => (
                      <li key={href}>
                        <Link
                          className="focus-ring text-oak-dark underline underline-offset-4"
                          href={href}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <details className="mt-14 border-t border-linen pt-8">
              <summary className="focus-ring cursor-pointer text-lg font-semibold">
                Historical pages & sermon collections
              </summary>
              <p className="my-5 text-sm text-text-light">
                Older events and collections are preserved here as part of the
                church’s history.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {pages
                  .filter((p) => p.path.startsWith("/archive/"))
                  .map((p) => (
                    <li key={p.path}>
                      <Link
                        className="focus-ring text-sm text-oak-dark underline"
                        href={p.path}
                      >
                        {p.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </details>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
