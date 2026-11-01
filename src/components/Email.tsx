"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/lib/site";

/**
 * The church's email addresses (pastor@ and peter@). Like the phone number
 * was, the addresses are base64'd in site.ts and assembled in the browser so
 * they do not appear in the HTML source or a scraper's harvest.
 *
 * By default the two addresses sit side by side; pass `stacked` to put each
 * on its own line.
 */
const subscribe = () => () => {};

export default function Email({
  className = "",
  showIcon = false,
  stacked = false,
}: {
  className?: string;
  showIcon?: boolean;
  stacked?: boolean;
}) {
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const addrs = hydrated
    ? site.emails.map((email) => ({
        href: atob(email.hrefEncoded),
        label: atob(email.displayEncoded),
      }))
    : null;

  if (!addrs) {
    return (
      <span className={className} aria-hidden="true">
        &nbsp;
      </span>
    );
  }

  return (
    <span className={className}>
      {addrs.map((addr, index) => (
        <span key={addr.href} className={stacked ? "block" : undefined}>
          {index > 0 && !stacked && (
            <span aria-hidden="true" className="mx-2 opacity-50">
              &middot;
            </span>
          )}
          <a href={addr.href} className="focus-ring break-words">
            {showIcon && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="mr-2 inline-block h-4 w-4 align-[-2px]"
              >
                <rect
                  x="3.5"
                  y="5.5"
                  width="17"
                  height="13"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="m4 7 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {addr.label}
          </a>
        </span>
      ))}
    </span>
  );
}
