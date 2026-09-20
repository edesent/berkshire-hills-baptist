import { NextResponse } from "next/server";
import { chat } from "@/lib/chat";

/**
 * Contact and prayer form target.
 *
 * Delivery goes to the church's own Slack channel — the same one the chat
 * widget already talks to — so messages reach a phone in seconds and the form
 * works without any environment variable being set. SLACK_WEBHOOK_URL still
 * wins if it is configured, for a church that wants its own webhook.
 *
 * If neither route is available we return an error rather than a success, so
 * a visitor is never told an undelivered message was sent.
 */

type Payload = Partial<
  Record<
    "name" | "email" | "phone" | "reason" | "message" | "website",
    string
  >
>;

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Payload;

  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error("Invalid payload");
    body = parsed as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "bad_request" },
      { status: 400 },
    );
  }

  // Honeypot: a real visitor never fills this in, a bot fills in everything.
  // Answer as though it sent, so the bot has nothing to learn from retrying.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 60);
  const reason = clean(body.reason, 120);
  const message = clean(body.message);

  if (!name || !message || (!email && !phone)) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 422 },
    );
  }

  const isPrayer = reason.toLowerCase().includes("prayer");
  const subject = isPrayer
    ? "Prayer request from the website"
    : "New message from the Berkshire Hills Baptist website";

  const contact = [email, phone].filter(Boolean).join(" · ");

  const webhook = process.env.SLACK_WEBHOOK_URL;

  if (webhook) {
    const lines = [
      `*${subject}*`,
      `*Name:* ${name}`,
      email ? `*Email:* ${email}` : null,
      phone ? `*Phone:* ${phone}` : null,
      reason ? `*About:* ${reason}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: lines }),
      });

      if (!response.ok) {
        console.error("contact: slack webhook rejected", response.status);
        return NextResponse.json(
          { ok: false, error: "delivery_failed" },
          { status: 502 },
        );
      }

      return NextResponse.json({ ok: true });
    } catch (error) {
      console.error("contact: slack webhook unreachable", error);
      return NextResponse.json(
        { ok: false, error: "delivery_failed" },
        { status: 502 },
      );
    }
  }

  // Default: the church's chat channel.
  try {
    const response = await fetch(`${chat.origin}/api/chat/contact-form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey: chat.apiKey,
        subject,
        name,
        contact: contact || "No contact details given",
        message: reason && !isPrayer ? `*About:* ${reason}\n\n${message}` : message,
      }),
    });

    if (!response.ok) {
      console.error("contact: chat backend rejected", response.status);
      return NextResponse.json(
        { ok: false, error: "delivery_failed" },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("contact: chat backend unreachable", error);
    return NextResponse.json(
      { ok: false, error: "delivery_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
