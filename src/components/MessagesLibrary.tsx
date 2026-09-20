import Link from "next/link";
import { sermonAudioLibrary } from "@/lib/sermon-audio";

function MessageCard({
  message,
}: {
  message: (typeof sermonAudioLibrary)[number];
}) {
  return (
    <div className="focus-ring group flex flex-col overflow-hidden rounded-sm border border-linen-dark bg-cream p-7 transition-shadow hover:shadow-[0_26px_55px_-32px_rgba(34,30,23,0.45)]">
      <span className="caps text-[0.6rem] font-semibold text-text-muted">
        {message.date}
      </span>
      <span className="display mt-2 text-[1.35rem] leading-tight text-ink">
        {message.title}
      </span>
      <span className="mt-3 text-[0.92rem] leading-relaxed text-text-light">
        {message.description}
      </span>
      <audio aria-label={`Listen to ${message.title}`} controls preload="none" className="mt-5 w-full">
        <source src={message.url} />
      </audio>
    </div>
  );
}

/** Homepage strip: the newest message featured, then the rest. */
export function LatestMessages() {
  const [featured, ...rest] = sermonAudioLibrary;

  return (
    <section className="section-pad paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Sermon audio</p>
            <h2 className="display mt-4 text-[clamp(1.60rem,3.34vw,2.51rem)] text-ink">
              Recent messages from our church.
            </h2>
            <p className="mt-6 leading-relaxed text-text-light">
              Listen to recent Sunday messages, then explore the sermon
              archive for Bible studies, notes, and transcripts.
            </p>
          </div>
          <Link
            href="/sermons"
            className="focus-ring caps group inline-flex shrink-0 items-center gap-2.5 text-[0.68rem] font-semibold text-oak-dark"
          >
            All messages
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
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <MessageCard message={featured} />
          </div>
          {rest.slice(0, 2).map((message) => (
            <MessageCard key={message.title} message={message} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Full library grid for /sermons. */
export default function MessagesLibrary() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {sermonAudioLibrary.map((message) => (
        <MessageCard key={message.title} message={message} />
      ))}
    </div>
  );
}
