/**
 * "Upcoming Dates" bar shown on the home page between the hero photo and
 * the quick-facts strip. Edit the list below to change what it shows, or
 * remove <UpcomingDatesBanner /> from src/app/page.tsx to take it down.
 */
const dates: {
  date: string;
  lines: string[];
  note?: string;
  badge?: string;
}[] = [
  {
    date: "Wed, Oct 28",
    lines: ["6:30 pm \u00b7 Prayer and Bible Study"],
    note: "Location: email pjmarkavage@gmail.com for tonight's location.",
  },
  {
    date: "Sun, Nov 1",
    lines: ["Daylight Saving Time ends — don't forget to fall back!", "10:00 am \u00b7 Sunday School", "11:00 am \u00b7 Morning Service"],
    note: "A light luncheon will follow the morning service, followed by an abbreviated afternoon service.",
    badge: "No 2 pm Afternoon Service on Nov 1",
  },
];

export default function UpcomingDatesBanner() {
  return (
    <section
      aria-label="Upcoming Dates"
      className="relative overflow-hidden bg-ink"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 120% at 50% -30%, rgba(188,143,47,0.35), transparent 70%)",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gold/60"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gold/60"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-12 text-center lg:px-10 lg:py-16">
        <h2 className="display text-[clamp(1.6rem,3.6vw,2.6rem)] leading-tight text-cream">
          Upcoming Dates
        </h2>

        <span
          aria-hidden="true"
          className="mx-auto mt-6 block h-px w-16 bg-gold/60"
        />

        <ul className="mt-8 space-y-9">
          {dates.map((item) => (
            <li key={item.date}>
              <p className="caps text-[0.78rem] font-semibold text-gold-light">
                {item.date}
              </p>
              {item.lines.map((line) => (
                <p
                  key={line}
                  className="mt-2 text-[clamp(1rem,1.7vw,1.2rem)] leading-relaxed text-cream/90"
                >
                  {line}
                </p>
              ))}
              {item.note ? (
                <p className="mt-2 text-[clamp(1rem,1.7vw,1.2rem)] leading-relaxed text-cream/90">
                  {item.note}
                </p>
              ) : null}
              {item.badge ? (
                <p className="caps mt-4 inline-block max-w-full rounded-sm border border-gold/60 px-5 py-2 text-[0.68rem] font-semibold leading-relaxed text-gold-light">
                  {item.badge}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
