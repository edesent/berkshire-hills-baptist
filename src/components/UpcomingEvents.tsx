import { upcomingEvents } from "@/lib/site";

/**
 * The dated things on the calendar. Each event drops off by itself the day
 * after it happens, and the whole section disappears once the list is empty —
 * so this never shows a visitor something that has already been and gone.
 * Add the next one in `churchEvents` in src/lib/site.ts.
 */
export default function UpcomingEvents() {
  const events = upcomingEvents();
  if (events.length === 0) return null;

  return (
    <section className="section-pad bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Coming up</p>
          <h2 className="display mt-4 text-[clamp(1.60rem,3.34vw,2.51rem)] text-ink">
            Beyond the usual week.
          </h2>
          <p className="mt-6 leading-relaxed text-text-light">
            Everyone is welcome at these, the same as any Sunday.
          </p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-linen-dark bg-linen-dark sm:grid-cols-2">
          {events.map((event) => (
            <li key={event.title} className="flex flex-col bg-cream p-7 lg:p-8">
              <p className="caps text-[0.6rem] font-semibold text-text-muted">
                {event.date}
              </p>
              <h3 className="display mt-3 text-[1.42rem] leading-tight text-ink">
                {event.title}
              </h3>
              <span aria-hidden="true" className="mt-5 h-px w-8 bg-gold/50" />
              {event.detail && (
                <p className="mt-5 text-[0.88rem] leading-relaxed text-text-light">
                  {event.detail}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
