import Link from "next/link";
import {
  formatSermonDate,
  getLatestSermons,
  type SermonDetail,
} from "@/lib/sermon-audio";

function Arrow() {
  return (
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
  );
}

/** Audio players for a sermon — one per part when it was uploaded in parts. */
export function SermonAudio({ sermon }: { sermon: SermonDetail }) {
  return (
    <div className="grid gap-3">
      {sermon.audio.map((a) => (
        <div key={a.url}>
          {sermon.audio.length > 1 && (
            <p className="mb-1.5 text-xs text-text-light">{a.label}</p>
          )}
          <audio
            aria-label={`Listen to ${sermon.audio.length > 1 ? a.label : sermon.title}`}
            controls
            preload="none"
            className="w-full"
          >
            <source src={a.url} type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </div>
  );
}

function MessageCard({
  message,
  featured = false,
}: {
  message: SermonDetail;
  featured?: boolean;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-sm border border-linen-dark bg-cream p-7 transition-shadow hover:shadow-[0_26px_55px_-32px_rgba(34,30,23,0.45)]">
      <span className="caps text-[0.6rem] font-semibold text-text-muted">
        {formatSermonDate(message.date)}
        {message.speaker && ` · ${message.speaker}`}
      </span>
      <Link
        href={`/sermons/${message.id}`}
        className="focus-ring display mt-2 text-[1.35rem] leading-tight text-ink hover:text-oak-dark"
      >
        {message.title}
      </Link>
      {message.description && (
        <p
          className={`mt-3 text-[0.92rem] leading-relaxed text-text-light ${featured ? "" : "line-clamp-5"}`}
        >
          {message.description}
        </p>
      )}
      <div className="mt-auto pt-5">
        <SermonAudio sermon={message} />
      </div>
    </div>
  );
}

/** Homepage strip: the newest message featured, then the next two. */
export async function LatestMessages() {
  const [featured, ...rest] = await getLatestSermons(3);
  if (!featured) return null;

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
            <Arrow />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <MessageCard message={featured} featured />
          </div>
          {rest.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </div>
      </div>
    </section>
  );
}
