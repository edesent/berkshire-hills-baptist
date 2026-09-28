"use client";
import Script from "next/script";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Email from "@/components/Email";
import { chat } from "@/lib/chat";
import { site } from "@/lib/site";

export default function ChurchChat({ enabled }: { enabled: boolean }) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    panel.current?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  if (enabled && !failed)
    return (
      <Script
        id="berkshire-chat"
        src={`${chat.origin}/widget/wbc-chat.js`}
        data-api={chat.origin}
        data-key={chat.apiKey}
        data-brand-color="#2b3422"
        data-accent-color="#fcd68a"
        data-greeting="Welcome to Berkshire Hills Baptist Church. How can we help you?"
        data-form-subtitle="Leave a message and we’ll reply when someone is available."
        strategy="afterInteractive"
        onReady={() => {
          document.querySelectorAll(".wbc-header-title").forEach((element) => {
            element.textContent = site.shortName;
          });
          document.querySelectorAll(".wbc-header-subtitle").forEach((element) => {
            element.textContent = "Leave a message for our church";
          });
        }}
        onError={() => setFailed(true)}
      />
    );
  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
      {open && (
        <div
          ref={panel}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="church-contact-title"
          className="mb-3 w-[min(340px,calc(100vw-32px))] rounded-lg border border-linen-dark bg-cream p-6 shadow-xl"
        >
          <div className="flex items-start justify-between gap-3">
            <h2
              id="church-contact-title"
              className="text-lg font-semibold text-ink"
            >
              Contact our church
            </h2>
            <button
              type="button"
              aria-label="Close contact options"
              onClick={() => {
                setOpen(false);
                button.current?.focus();
              }}
              className="focus-ring px-2 text-xl"
            >
              ×
            </button>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-text-light">
            Live chat is currently unavailable. We’d still love to hear from
            you.
          </p>
          <Email
            showIcon
            className="mt-5 block rounded-sm bg-ink px-4 py-3 text-center text-sm text-cream"
          />
          <a
            className="focus-ring mt-3 block text-sm text-oak-dark underline"
            href={site.social.facebook}
            target="_blank"
            rel="noreferrer"
          >
            Contact us on Facebook
          </a>
          <Link
            onClick={() => setOpen(false)}
            className="focus-ring mt-3 block text-sm text-oak-dark underline"
            href="/contact"
          >
            Church contact details
          </Link>
        </div>
      )}
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((v) => !v)}
        className="focus-ring ml-auto flex items-center gap-2 rounded-full bg-ink px-5 py-4 text-sm font-semibold text-cream shadow-lg"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
        </svg>
        {open ? "Close" : "Contact us"}
      </button>
    </div>
  );
}
