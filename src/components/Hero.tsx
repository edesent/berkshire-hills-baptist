import Image from "next/image";
import Link from "next/link";
import { serviceTimes, site } from "@/lib/site";
export default function Hero() {
  return (
    <section className="overflow-hidden bg-cream">
      <div className="relative isolate lg:min-h-[680px]">
        <div className="relative aspect-[1808/870] lg:absolute lg:inset-0 lg:aspect-auto">
          <Image
            src="/bhbc/outside-building.png"
            alt="Berkshire Hills Baptist Church in Lee, with its wooden exterior, white cross, and church sign."
            fill
            preload
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(0,0,0,0.50)_0%,rgba(0,0,0,0.28)_36%,rgba(0,0,0,0.04)_62%,transparent_100%)] lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.45)_0%,transparent_65%)] lg:block"
          />
        </div>
        <div className="relative mx-auto flex max-w-7xl items-end px-6 py-10 lg:min-h-[680px] lg:px-10 lg:py-14">
          <div className="max-w-xl lg:max-w-[31rem]">
            <p className="eyebrow lg:text-gold-light">
              {site.address.city}, {site.address.regionName}
            </p>
            <h1 className="display mt-5 text-[clamp(2rem,4vw,3.25rem)] leading-tight text-ink lg:text-white">
              A church filled with{" "}
              <span className="text-gold lg:text-gold-light">
                caring, friendly people.
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-text-light lg:text-white/95">
              Welcome to Berkshire Hills Baptist Church. Join us for Bible
              preaching, hymns, prayer, and fellowship in the heart of the
              Berkshires.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/visit"
                className="focus-ring caps rounded-sm bg-ink px-6 py-4 text-xs font-semibold text-cream transition hover:bg-oak-dark lg:bg-cream lg:text-ink lg:hover:bg-gold-pale"
              >
                Plan Your First Visit
              </Link>
              <Link
                href="/sermons"
                className="focus-ring caps rounded-sm border border-linen-dark px-6 py-4 text-xs font-semibold text-ink transition hover:border-gold lg:border-white/65 lg:bg-black/15 lg:text-white lg:hover:bg-black/30"
              >
                Hear a Message
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y border-linen bg-parchment">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-7 lg:grid-cols-4 lg:px-10">
          {serviceTimes.map((s) => (
            <div key={s.title}>
              <dt className="text-xs text-text-light">
                {s.day} · {s.title}
              </dt>
              <dd className="display mt-2 text-xl text-ink">{s.time}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
