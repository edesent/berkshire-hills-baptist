/**
 * Berkshire Hills has no vector logo — their current site sets the church
 * name in a large script font over a dark green band. This mirrors that
 * concept (name set in the site's own display face) rather than inventing a
 * mark that does not exist.
 */

export function BibleMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 124 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* left page */}
      <path
        d="M62 11.2C53 5.6 39.4 2.4 24.2 2.4c-5.2 0-10 .38-14.2 1.1 1.9 7.1 3 14.5 3.1 22.1 3.5-.6 7.4-.92 11.6-.92 13.6 0 25.6 2.9 34.6 8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* right page */}
      <path
        d="M62 11.2c9-5.6 22.6-8.8 37.8-8.8 5.2 0 10 .38 14.2 1.1-1.9 7.1-3 14.5-3.1 22.1-3.5-.6-7.4-.92-11.6-.92-13.6 0-25.6 2.9-34.6 8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* the crease where the two pages meet */}
      <path
        d="M56.4 8.6 62 11.2l5.6-2.6"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
      <path
        d="M10 3.5C7 4.1 4.5 4.9 2.6 5.8c1.9 7.1 3 14.5 3.1 22.2 1.9-.85 4.4-1.55 7.4-2.1"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <path
        d="M114 3.5c3 .6 5.5 1.4 7.4 2.3-1.9 7.1-3 14.5-3.1 22.2-1.9-.85-4.4-1.55-7.4-2.1"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

type LogoProps = {
  /** "ink" for cream bands, "cream" for dark bands. */
  tone?: "ink" | "cream";
  alt?: string;
  className?: string;
  /** "stacked" (default): name over a small "Baptist Church". "inline": the
   * whole name on one line at a single size — used in the top navigation. */
  layout?: "stacked" | "inline";
};

export default function Logo({
  tone = "ink",
  alt = "",
  className = "",
  layout = "stacked",
}: LogoProps) {
  const color = tone === "cream" ? "text-cream" : "text-ink";

  if (layout === "inline") {
    return (
      <span
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        className={`block whitespace-nowrap leading-none ${color} ${className}`}
      >
        <span className="display block text-[clamp(0.6rem,3.3vw,0.95rem)] leading-[1.15] sm:text-[1.05rem] lg:text-[1.3rem] 2xl:text-[1.35rem]">
          Berkshire Hills <span className="text-gold">Baptist Church</span>
        </span>
      </span>
    );
  }

  return (
    <span
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      className={`block whitespace-nowrap leading-none ${color} ${className}`}
    >
      <span className="display block text-[1.05rem] leading-[1.15] sm:text-[1.2rem]">
        Berkshire Hills
      </span>
      <span className="caps mt-1 block text-[0.52rem] font-semibold tracking-[0.16em] text-gold">
        Baptist Church
      </span>
    </span>
  );
}
