import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ArchiveList from "@/components/ArchiveList";
import pages from "@/data/weebly.json";

export default function ResourcePage({
  page,
}: {
  page: (typeof pages)[number];
}) {
  const historical = page.path.startsWith("/archive/");
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow={
            historical
              ? "From the church archives"
              : page.date
                ? page.date
                : "Berkshire Hills Baptist Church"
          }
          title={page.title}
          breadcrumb={[{ href: "/resources", label: "Church resources" }]}
        />
        <section className="paper px-6 py-14 lg:py-20">
          <div className="mx-auto max-w-4xl">
            {historical && (
              <p className="mb-8 rounded-sm border border-linen-dark bg-parchment p-5 text-sm">
                This is an archived page. Event dates and schedules here are
                historical. See{" "}
                <Link className="underline" href="/services">
                  our current service times
                </Link>{" "}
                to plan a visit.
              </p>
            )}
            {page.entries.length > 0 && <ArchiveList entries={page.entries} />}
            {page.html && (
              <div
                className="church-content"
                dangerouslySetInnerHTML={{ __html: page.html }}
              />
            )}
            {page.path === "/prayer" && (
              <p className="mt-6 text-sm">
                The prayer form is hosted by Airtable. If it does not load,{" "}
                <a
                  className="underline"
                  href="https://airtable.com/shrHjF3N2K71jQmGj"
                  target="_blank"
                  rel="noreferrer"
                >
                  open the prayer form
                </a>{" "}
                or{" "}
                <Link className="underline" href="/contact">
                  contact the church
                </Link>
                .
              </p>
            )}
            <div className="mt-12 flex flex-wrap gap-5 border-t border-linen pt-7 text-sm text-oak-dark">
              <Link
                className="focus-ring underline underline-offset-4"
                href="/resources"
              >
                All church resources
              </Link>
              {page.section === "sermons1" && (
                <Link
                  className="focus-ring underline underline-offset-4"
                  href="/sermons"
                >
                  All sermons
                </Link>
              )}
              {page.section === "grow" && (
                <Link
                  className="focus-ring underline underline-offset-4"
                  href="/grow"
                >
                  All devotionals
                </Link>
              )}
              <a
                className="focus-ring underline underline-offset-4"
                href={page.source}
                target="_blank"
                rel="noreferrer"
              >
                View original page
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
