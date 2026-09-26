import pages from "@/data/weebly.json";

/**
 * Sermons come live from Deacon Peter Markavage's archive.org account, so a
 * message he uploads on Sunday shows up here within the hour — nobody has to
 * touch the site.
 */
const UPLOADER = "pjmarkavage@hotmail.com";
const REVALIDATE = 3600;

export interface Sermon {
  id: string;
  title: string;
  /** ISO yyyy-mm-dd */
  date: string;
  speaker: string;
  description: string;
}

export interface SermonFile {
  label: string;
  url: string;
}

export interface SermonDetail extends Sermon {
  /** Usually one; a multi-part message carries one per part. */
  audio: SermonFile[];
  transcripts: SermonFile[];
  imageUrl: string | null;
  /** The matching post on the church's old Weebly sermon blog, if any. */
  notesHref: string | null;
}

type SearchDoc = {
  identifier: string;
  title?: string;
  date?: string;
  publicdate?: string;
  creator?: string | string[];
  description?: string | string[];
  mediatype?: string;
};

const first = (v: string | string[] | undefined) =>
  (Array.isArray(v) ? v[0] : v) ?? "";

/** Peter prefixes most titles with the date in a dozen shapes; drop it. */
function cleanTitle(raw: string) {
  let t = raw
    .replace(/^FULL\s+/i, "")
    .replace(
      /^\d{1,4}[\s.,/-]+\d{1,2}[\s.,/-]*\d{2,4}(\s+\d{1,2}\s+\d{1,2}\s+\d{1,2})?\s*[-–:]?\s*/,
      "",
    )
    .replace(/^Transcribe\s*[-–]?\s*/i, "")
    .trim();
  // A few early uploads kept the archive.org slug as their title.
  if (/^[a-z0-9]+(-[a-z0-9]+)+$/.test(t)) {
    t = t
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  return t || "Sunday Message";
}

function cleanSpeaker(raw: string) {
  const s = raw.replace(/^by\s+/i, "").trim();
  if (/doug mann/i.test(s) && /pastor/i.test(s)) return "Pastor Doug Mann";
  if (s === "Berkshire Hills Baptist Church") return "";
  return s;
}

function cleanDescription(raw: string) {
  return raw
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\u00a0/g, " ")
    .trim();
}

// Weebly sermon-blog posts, keyed by date, for linking a sermon to its notes.
const weeblyByDate = new Map<string, { title: string; href: string }>();
for (const e of pages.find((p) => p.path === "/sermons")?.entries ?? []) {
  const [m, d, y] = e.date.split("/");
  if (!y) continue;
  weeblyByDate.set(
    `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`,
    { title: e.title.replace(/^\d{2}\.\d{2}\.\d{4}\s*-\s*/, ""), href: e.href },
  );
}

function toSermon(doc: SearchDoc): Sermon {
  return {
    id: doc.identifier,
    title: cleanTitle(doc.title ?? doc.identifier),
    date: (doc.date ?? doc.publicdate ?? "").slice(0, 10),
    speaker: cleanSpeaker(first(doc.creator)),
    description: cleanDescription(first(doc.description)),
  };
}

/** Every sermon on the account, newest first. */
export async function getSermons(): Promise<Sermon[]> {
  const params = new URLSearchParams({
    q: `uploader:${UPLOADER} AND mediatype:audio`,
    sort: "date desc",
    rows: "5000",
    output: "json",
  });
  for (const f of [
    "identifier",
    "title",
    "date",
    "publicdate",
    "creator",
    "description",
  ])
    params.append("fl[]", f);
  try {
    const res = await fetch(
      `https://archive.org/advancedsearch.php?${params}`,
      { next: { revalidate: REVALIDATE } },
    );
    if (!res.ok) return [];
    const json = await res.json();
    const sermons: Sermon[] = (json.response?.docs ?? []).map(toSermon);

    // Where exactly one upload falls on a date that also has a Weebly post,
    // prefer the title Peter polished for the blog.
    const perDate = new Map<string, number>();
    for (const s of sermons) perDate.set(s.date, (perDate.get(s.date) ?? 0) + 1);
    for (const s of sermons) {
      const post = weeblyByDate.get(s.date);
      if (post && perDate.get(s.date) === 1) s.title = post.title;
    }

    return sermons.sort((a, b) => b.date.localeCompare(a.date));
  } catch {
    return [];
  }
}

type IaFile = { name: string; format?: string; source?: string };

/** One sermon with its audio, transcript and artwork resolved. */
export async function getSermon(id: string): Promise<SermonDetail | null> {
  try {
    const res = await fetch(
      `https://archive.org/metadata/${encodeURIComponent(id)}`,
      { next: { revalidate: REVALIDATE } },
    );
    if (!res.ok) return null;
    const json = await res.json();
    const m = json.metadata;
    if (!m || m.uploader !== UPLOADER || m.mediatype !== "audio") return null;

    const files: IaFile[] = (json.files ?? [])
      .filter((f: IaFile) => f.source === "original")
      .sort((a: IaFile, b: IaFile) =>
        a.name.localeCompare(b.name, undefined, { numeric: true }),
      );
    const url = (f: IaFile) =>
      `https://archive.org/download/${encodeURIComponent(id)}/${f.name
        .split("/")
        .map(encodeURIComponent)
        .join("/")}`;
    const stem = (name: string) => name.replace(/\.\w+$/, "");
    const label = (f: IaFile) =>
      cleanTitle(stem(f.name).replace(/^[\d.\s]+-\s*/, ""));
    const mp3s = files.filter((f) => /\.mp3$/i.test(f.name));
    const pdfs = files.filter((f) => /\.pdf$/i.test(f.name));
    const mp3Stems = new Set(mp3s.map((f) => stem(f.name)));
    const image = files.find(
      (f) =>
        /\.(jpe?g|png)$/i.test(f.name) &&
        !f.name.startsWith("__ia_thumb") &&
        // archive.org's auto waveform PNG shares the mp3's name
        !mp3Stems.has(stem(f.name)),
    );

    // Keep titles consistent with the list (which may use the blog's title).
    const listed = (await getSermons()).find((s) => s.id === id);
    const sermon = { ...toSermon({ identifier: id, ...m }), ...listed };
    const post = weeblyByDate.get(sermon.date);

    return {
      ...sermon,
      audio: mp3s.map((f) => ({ label: label(f), url: url(f) })),
      transcripts: pdfs.map((f) => ({ label: label(f), url: url(f) })),
      imageUrl: image ? url(image) : null,
      notesHref: post?.href ?? null,
    };
  } catch {
    return null;
  }
}

/** The newest few sermons, with audio, for the homepage and sermon page. */
export async function getLatestSermons(count: number) {
  const list = await getSermons();
  const details = await Promise.all(
    list.slice(0, count).map((s) => getSermon(s.id)),
  );
  return details.filter((d): d is SermonDetail => d !== null);
}

export function formatSermonDate(iso: string) {
  if (!iso) return "";
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
