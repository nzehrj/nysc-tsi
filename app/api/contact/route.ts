import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { sendContactEmail } from "@/lib/email/contact";

// Reuse the same in-memory rate limit pattern, separate map
const submissionTimestamps = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissionTimestamps.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    return false;
  }

  recent.push(now);
  submissionTimestamps.set(ip, recent);
  return true;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many submissions", message: "Please wait before trying again." },
      { status: 429 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request", message: "Body must be valid JSON" },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const result = await sendContactEmail(parsed.data);

  if (!result.success) {
    return NextResponse.json(
      {
        error: "Could not send",
        message: "Your message couldn't be sent. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { success: true, message: "Message sent" },
    { status: 200 }
  );
}