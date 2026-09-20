import Image from "next/image";
import Link from "next/link";
import { pastor } from "@/lib/site";

export default function WelcomePastor() {
  return (
    <section className="section-pad bg-parchment">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.78fr_1fr] lg:gap-20 lg:px-10">
        <figure className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="overflow-hidden rounded-sm border border-linen-dark shadow-[0_28px_60px_-28px_rgba(34,30,23,0.45)]">
            <Image
              src={pastor.photo}
              alt={`${pastor.displayName} of Berkshire Hills Baptist Church.`}
              width={1384}
              height={1136}
              quality={90}
              sizes="(max-width: 432px) calc(100vw - 48px), 384px"
              className="h-auto w-full"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-sm border border-gold/40"
          />
        </figure>

        <div>
          <p className="eyebrow">A word from our pastor</p>
          <blockquote className="mt-6 text-[clamp(1.2rem,2.3vw,1.72rem)] leading-[1.5] text-ink">
            <span aria-hidden="true" className="text-gold">
              &ldquo;
            </span>
            {pastor.welcomeQuote}
            <span aria-hidden="true" className="text-gold">
              &rdquo;
            </span>
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            <div>
              <p className="display text-lg text-oak-dark">
                {pastor.displayName}
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-xl leading-relaxed text-text-light">
            On behalf of everyone here, we would love to have you worship the
            Lord with us. If we can be of any assistance in your spiritual
            journey, please get in touch.
          </p>

          <Link
            href="/our-pastor"
            className="focus-ring caps group mt-8 inline-flex items-center gap-2.5 text-[0.68rem] font-semibold text-oak-dark"
          >
            Meet Pastor Mann
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
