"use client";
import Link from "next/link";
import { useState } from "react";

type Entry = {
  id: string;
  title: string;
  date: string;
  dateLabel: string;
  speaker: string;
};

/** Searchable list of every sermon on the church's archive.org account. */
export default function SermonArchive({ entries }: { entries: Entry[] }) {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(24);
  const q = query.trim().toLowerCase();
  const filtered = q
    ? entries.filter((e) =>
        [e.title, e.dateLabel, e.date, e.speaker]
          .join(" ")
          .toLowerCase()
          .includes(q),
      )
    : entries;
  return (
    <div>
      <label className="block text-sm font-semibold" htmlFor="sermon-search">
        Search every message
      </label>
      <input
        id="sermon-search"
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setLimit(24);
        }}
        placeholder="Search by title, speaker, or year"
        className="focus-ring mt-3 w-full rounded-sm border border-linen-dark bg-cream px-4 py-3"
      />
      <p aria-live="polite" className="my-5 text-sm text-text-light">
        {filtered.length} {filtered.length === 1 ? "message" : "messages"}
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, limit).map((e) => (
          <li key={e.id}>
            <Link
              href={`/sermons/${e.id}`}
              className="focus-ring flex h-full flex-col rounded-sm border border-linen-dark bg-cream p-6 transition hover:border-gold hover:bg-parchment"
            >
              <span className="text-xs text-text-light">{e.dateLabel}</span>
              <span className="mt-2 text-lg font-semibold leading-snug text-ink">
                {e.title}
              </span>
              {e.speaker && (
                <span className="mt-1 text-sm text-text-light">
                  {e.speaker}
                </span>
              )}
              <span className="mt-auto block pt-4 text-sm text-oak-dark">
                Listen <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && (
        <p className="py-8">
          No messages match that search. Try a title, a speaker, or a year.
        </p>
      )}
      {filtered.length > limit && (
        <button
          onClick={() => setLimit((n) => n + 24)}
          className="focus-ring mt-8 rounded-sm bg-ink px-6 py-3 text-cream"
        >
          Show more messages
        </button>
      )}
    </div>
  );
}
