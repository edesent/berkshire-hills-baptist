import Image from "next/image";
import Link from "next/link";

const marks = [
  {
    title: "Preaching from the Bible",
    body: "We encourage everyone to follow along in their Bibles. For consistency, we use the King James Version. Bring your own, or use one of the Bibles in the pews.",
    ref: "Psalm 12:6-7 · 2 Timothy 3:16",
  },
  {
    title: "Hymns and songs of praise",
    body: "We appreciate the old-fashioned hymns as well as some of the newer songs, choosing musical selections that are conservative in presentation and consistent with the day's message.",
    ref: "Ephesians 5:19",
  },
  {
    title: "Bible preaching and teaching",
    body: "Our Sunday morning sermon is usually verse-by-verse or topical preaching from the Word of God. Wednesday Bible study works through a book of the Bible chapter by chapter.",
    ref: "2 Timothy 4:2",
  },
  {
    title: "An independent local church",
    body: "We are self-governing and free of denominational control. We follow the Baptist distinctives of salvation by faith, baptism by immersion after salvation, and the Bible as our authority for faith and practice.",
    ref: "Colossians 1:18 · 1 Timothy 3:1-13",
  },
];

export default function StillThatChurch() {
  return (
    <section className="section-pad bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.08fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">What that actually means</p>
            <h2 className="display mt-4 text-[clamp(1.60rem,3.34vw,2.51rem)] text-ink">
              Rooted in Scripture. Growing together.
            </h2>
            <p className="mt-6 leading-relaxed text-text-light">
              Get to know the beliefs and practices that shape our worship,
              our teaching, and our life together as a church.
            </p>

            <figure className="mt-10">
              <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_26px_60px_-30px_rgba(34,30,23,0.4)]">
                <Image
                  src="/bhbc/sanctuary.jpg"
                  alt="The sanctuary at Berkshire Hills Baptist Church during a service, seen from the pews."
                  width={577}
                  height={324}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-[0.78rem] leading-relaxed text-text-muted">
                View from the pew: special music and a projector screen to
                help lead worship!
              </figcaption>
            </figure>
          </div>

          <ol className="space-y-px overflow-hidden rounded-sm border border-linen-dark bg-linen-dark">
            {marks.map((mark, index) => (
              <li key={mark.title} className="bg-cream p-7 lg:p-9">
                <div className="flex items-baseline gap-4">
                  <span className="display text-[0.95rem] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-[1.6rem] leading-tight text-ink">
                    {mark.title}
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-text-light">
                  {mark.body}
                </p>
                <p className="ref mt-4">{mark.ref}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/beliefs"
            className="focus-ring caps group inline-flex items-center gap-2.5 rounded-sm border border-linen-dark bg-cream px-6 py-4 text-[0.68rem] font-semibold text-ink-soft transition hover:border-gold hover:text-oak-dark"
          >
            Read our full Statement of Faith
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
      </div>
    </section>
  );
}
