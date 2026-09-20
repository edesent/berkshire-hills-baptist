"use client";
import Link from "next/link";
import { useState } from "react";

type Entry = { title: string; date: string; href: string };
export default function ArchiveList({ entries }: { entries: Entry[] }) {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(20);
  const filtered = entries.filter((e) =>
    (e.title + " " + e.date).toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div>
      <label className="block text-sm font-semibold" htmlFor="archive-search">
        Search messages and devotionals
      </label>
      <input
        id="archive-search"
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setLimit(20);
        }}
        placeholder="Search by title, Scripture, or date"
        className="focus-ring mt-3 w-full rounded-sm border border-linen-dark bg-cream px-4 py-3"
      />
      <p aria-live="polite" className="my-5 text-sm text-text-light">
        {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {filtered.slice(0, limit).map((e) => (
          <li key={e.href}>
            <Link
              href={e.href}
              className="focus-ring block h-full rounded-sm border border-linen-dark bg-cream p-6 transition hover:border-gold hover:bg-parchment"
            >
              {e.date && (
                <span className="text-xs text-text-light">{e.date}</span>
              )}
              <h2 className="mt-2 text-lg font-semibold leading-relaxed text-ink">
                {e.title}
              </h2>
              <span className="mt-4 block text-sm text-oak-dark">
                Read & listen <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && (
        <p className="py-8">
          No entries match that search. Try a title, Bible book, or year.
        </p>
      )}
      {filtered.length > limit && (
        <button
          onClick={() => setLimit((n) => n + 20)}
          className="focus-ring mt-8 rounded-sm bg-ink px-6 py-3 text-cream"
        >
          Show more entries
        </button>
      )}
    </div>
  );
}
