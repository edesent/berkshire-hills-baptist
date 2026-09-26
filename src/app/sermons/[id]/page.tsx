import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SermonAudio } from "@/components/MessagesLibrary";
import { formatSermonDate, getSermon, getSermons } from "@/lib/sermon-audio";

export const revalidate = 3600;

// Prerender the recent ones; older sermons render on first visit and cache.
export async function generateStaticParams() {
  return (await getSermons()).slice(0, 30).map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const sermon = await getSermon(decodeURIComponent(id));
  if (!sermon) return {};
  return {
    title: `${sermon.title} — Sermon`,
    description: sermon.description.slice(0, 300) || undefined,
    alternates: { canonical: `/sermons/${sermon.id}` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sermon = await getSermon(decodeURIComponent(id));
  if (!sermon) notFound();

  const byline = [formatSermonDate(sermon.date), sermon.speaker]
    .filter(Boolean)
    .join(" · ");

  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow={byline || "Sermon"}
          title={sermon.title}
          breadcrumb={[
            { href: "/sermons", label: "Sermons" },
            { href: `/sermons/${sermon.id}`, label: sermon.title },
          ]}
        />
        <section className="section-pad paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_22rem] lg:px-10">
            <div>
              <SermonAudio sermon={sermon} />
              {sermon.description && (
                <p className="mt-8 whitespace-pre-line text-[1.05rem] leading-relaxed text-text">
                  {sermon.description}
                </p>
              )}
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                {sermon.transcripts.map((t) => (
                  <a
                    key={t.url}
                    href={t.url}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring text-oak-dark underline underline-offset-4"
                  >
                    {sermon.transcripts.length > 1
                      ? `Transcript: ${t.label}`
                      : "Read the transcript"}{" "}
                    (PDF)
                  </a>
                ))}
                {sermon.notesHref && (
                  <Link
                    href={sermon.notesHref}
                    className="focus-ring text-oak-dark underline underline-offset-4"
                  >
                    Sermon notes
                  </Link>
                )}
                <a
                  href={`https://archive.org/details/${encodeURIComponent(sermon.id)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring text-oak-dark underline underline-offset-4"
                >
                  Download from the Internet Archive
                </a>
              </div>
              <Link
                href="/sermons"
                className="focus-ring caps mt-12 inline-block text-[0.68rem] font-semibold text-oak-dark"
              >
                <span aria-hidden="true">←</span> All messages
              </Link>
            </div>
            {sermon.imageUrl && (
              <div className="self-start overflow-hidden rounded-sm border border-linen-dark bg-cream">
                <Image
                  src={sermon.imageUrl}
                  alt={`Title slide for “${sermon.title}”`}
                  width={1440}
                  height={1080}
                  sizes="(min-width: 1024px) 22rem, 100vw"
                  className="h-auto w-full"
                />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
