"use client";

import { useState, type FormEvent } from "react";
import Phone from "@/components/Phone";

/**
 * The prayer request form on the homepage. It posts to the same /api/contact
 * route as the contact page, tagged as a prayer request, so requests arrive
 * wherever the church already receives messages — no third-party service.
 */

const field =
  "w-full rounded-sm border border-linen-dark bg-cream px-4 py-3.5 text-[0.95rem] font-normal text-ink outline-none transition placeholder:text-text-muted/70 focus:border-gold focus:bg-white";
const label = "caps block text-[0.6rem] font-semibold text-text-muted";

export default function PrayerRequest() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          reason: "A prayer request",
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error("failed");

      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  return (
    <section id="prayer" className="section-pad bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">Prayer</p>
            <h2 className="display mt-4 text-[clamp(1.60rem,3.34vw,2.51rem)] text-ink">
              Let us pray with you.
            </h2>
            <p className="mt-6 leading-relaxed text-text-light">
              We meet every Wednesday evening to share our needs and present
              them to God in prayer. If something is weighing on you, send it
              along &mdash; we will bring it before the Lord whether or not we
              have ever met you.
            </p>
            <p className="mt-6 leading-relaxed text-text-light">
              Requests come straight to the church. They are not posted
              anywhere, and nothing is shared beyond those who pray.
            </p>
            <p className="ref mt-8">
              &ldquo;Be careful for nothing; but in every thing by prayer and
              supplication with thanksgiving let your requests be made known
              unto God.&rdquo; &mdash; Philippians 4:6
            </p>
            <p className="mt-8 text-[0.88rem] leading-relaxed text-text-muted">
              If it is urgent, please call the church instead:{" "}
              <Phone className="text-oak-dark transition hover:text-gold" />
            </p>
          </div>

          {state === "sent" ? (
            <div className="rounded-sm border border-gold/40 bg-cream p-10 text-center shadow-[0_24px_50px_-34px_rgba(34,30,23,0.4)]">
              <div
                aria-hidden="true"
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="m5 12.5 4.5 4.5L19 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="display mt-6 text-2xl text-ink">
                We have it &mdash; and we will pray.
              </p>
              <p className="mt-3 leading-relaxed text-text-light">
                Thank you for trusting us with it.
              </p>
              <button
                type="button"
                onClick={() => setState("idle")}
                className="focus-ring caps mt-7 text-[0.66rem] font-semibold text-oak-dark"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-sm border border-linen-dark bg-cream p-6 shadow-[0_24px_55px_-38px_rgba(34,30,23,0.4)] sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className={label}>Your name</span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className={field}
                  />
                </label>
                <label className="space-y-2">
                  <span className={label}>Email</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={field}
                  />
                </label>
              </div>

              <label className="mt-5 block space-y-2">
                <span className={label}>Phone</span>
                <input name="phone" autoComplete="tel" className={field} />
              </label>

              <label className="mt-5 block space-y-2">
                <span className={label}>How can we pray?</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={field}
                />
              </label>

              <p className="mt-3 text-[0.78rem] leading-relaxed text-text-muted">
                Please leave either an email address or a phone number so we can
                follow up with you.
              </p>

              <button
                type="submit"
                disabled={state === "sending"}
                className="focus-ring caps mt-6 w-full rounded-sm bg-ink px-6 py-4 text-[0.7rem] font-semibold text-cream transition hover:bg-oak-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {state === "sending" ? "Sending…" : "Send Prayer Request"}
              </button>

              {state === "error" && (
                <p
                  role="alert"
                  className="mt-4 rounded-sm border border-claret/30 bg-claret/5 px-4 py-3 text-[0.86rem] text-claret-dark"
                >
                  Something went wrong sending that. Please try again, or give
                  the church a call.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
