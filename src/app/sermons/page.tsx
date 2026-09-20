import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ArchiveList from "@/components/ArchiveList";
import pages from "@/data/weebly.json";
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
