import { NextResponse } from "next/server";
import { combinedEnquirySchema } from "@/lib/schemas";

export const runtime = "nodejs";

// Very lightweight in-memory rate limit (per-IP). Swap for Upstash Redis in production.
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX = 5;

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX) return false;
  entry.count += 1;
  return true;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many enquiries from this address. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  // Back-compat: legacy payloads without `kind` are treated as wedding enquiries.
  if (body && typeof body === "object" && !("kind" in body)) {
    (body as Record<string, unknown>).kind = "wedding";
  }

  const parsed = combinedEnquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Honeypot — if "website" was filled, silently accept.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const data = parsed.data;

  // TODO: persist to Sanity (submission doc) and email via Resend.
  // For now, we log and return success.
  if (data.kind === "corporate") {
    console.log("[enquiry:corporate]", {
      from: ip,
      company: data.companyName,
      contact: data.contactName,
      role: data.role,
      eventType: data.eventType,
      date: data.date,
      location: data.location,
      attendees: data.attendees,
      budget: data.budget,
      email: data.email,
    });
  } else {
    console.log("[enquiry:wedding]", {
      from: ip,
      couple: `${data.partnerOneName} & ${data.partnerTwoName}`,
      service: data.service,
      date: data.date,
      location: data.location,
      guests: data.guests,
      investment: data.investment,
      email: data.email,
    });
  }

  return NextResponse.json({ ok: true });
}
