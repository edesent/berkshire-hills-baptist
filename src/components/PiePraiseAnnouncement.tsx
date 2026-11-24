/**
 * Announcement picture for the "Pie and Praise" Thanksgiving Service, shown on
 * the home page right below the hero photo. To take it down, remove
 * <PiePraiseAnnouncement /> from src/app/page.tsx.
 */
export default function PiePraiseAnnouncement() {
  return (
    <section
      aria-label="Pie and Praise Thanksgiving Service announcement"
      className="bg-cream"
    >
      <div className="mx-auto max-w-3xl px-6 py-10 text-center lg:px-10 lg:py-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/pie-and-praise.jpg"
          alt="Announcement for the Pie and Praise Thanksgiving Service, Wednesday, November 25 at 6:30 pm at the church"
          className="mx-auto h-auto w-full max-w-2xl rounded-sm shadow-lg"
          loading="eager"
        />
      </div>
    </section>
  );
}
