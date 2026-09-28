"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/lib/site";

/**
 * Stand-in for <Phone /> while the church phone is out of service. Like the
 * phone number, the address is base64'd in site.ts and assembled in the
 * browser so it does not appear in the HTML source or a scraper's harvest.
 */
const subscribe = () => () => {};

export default function Email({
  className = "",
  showIcon = false,
}: {
  className?: string;
  showIcon?: boolean;
}) {
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const addr = hydrated
    ? {
        href: atob(site.emailHrefEncoded),
        label: atob(site.emailDisplayEncoded),
      }
    : null;

  if (!addr) {
    return (
      <span className={className} aria-hidden="true">
        &nbsp;
      </span>
    );
  }

  return (
    <a href={addr.href} className={`focus-ring break-words ${className}`}>
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
  );
}
