import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { registrations } from "@/lib/db/schema";
import { fullRegistrationSchema } from "@/lib/validation/registration";
import { generateReferenceCode } from "@/lib/reference-code";

// ── Simple in-memory rate limiter ────────────────────────
// Good enough for staging. For production, swap in Upstash Redis
// (see notes below) since serverless cold starts wipe this map.
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

// ── POST handler ─────────────────────────────────────────
export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = request.headers.get("user-agent") ?? null;

  // 1. Rate limit
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      {
        error: "Too many submissions",
        message: "Please wait before trying again.",
      },
      { status: 429 }
    );
  }

  // 2. Parse JSON body
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request", message: "Body must be valid JSON" },
      { status: 400 }
    );
  }

  // 3. Validate against the same Zod schema the form uses
  const parsed = fullRegistrationSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // 4. Check for duplicate state code
  try {
    const existing = await db
      .select({ id: registrations.id })
      .from(registrations)
      .where(eq(registrations.stateCode, data.stateCode))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        {
          error: "Duplicate registration",
          message:
            "An application with this state code has already been submitted. Please contact support if you believe this is an error.",
        },
        { status: 409 }
      );
    }
  } catch (err) {
    console.error("Duplicate check failed:", err);
    return NextResponse.json(
      { error: "Server error", message: "Unable to process at this time" },
      { status: 500 }
    );
  }

  // 5. Generate a unique reference code (retry up to 5 times on collision)
  let referenceCode = generateReferenceCode();
  for (let i = 0; i < 5; i++) {
    const exists = await db
      .select({ id: registrations.id })
      .from(registrations)
      .where(eq(registrations.referenceCode, referenceCode))
      .limit(1);
    if (exists.length === 0) break;
    referenceCode = generateReferenceCode();
  }

  // 6. Insert the registration
  try {
    await db.insert(registrations).values({
      referenceCode,
      fullName: data.fullName,
      email: data.email.toLowerCase(),
      phone: data.phone,
      gender: data.gender,
      stateCode: data.stateCode,
      callUpNumber: data.callUpNumber || null,
      deploymentState: data.deploymentState,
      deploymentLga: data.deploymentLga,
      cdsGroup: data.cdsGroup || null,
      serviceYear: data.serviceYear,
      batch: data.batch,
      stream: data.stream || null,
      educationLevel: data.educationLevel,
      institutionName: data.institutionName,
      courseOfStudy: data.courseOfStudy,
      graduationYear: data.graduationYear || null,
      track: data.track,
      priorExperience: data.priorExperience || null,
      motivation: data.motivation,
      hasLaptop: data.hasLaptop,
      internetAccess: data.internetAccess,
      consentGiven: data.consentGiven,
      submittedFromIp: ip,
      userAgent,
    });
  } catch (err) {
    console.error("Insert failed:", err);
    return NextResponse.json(
      {
        error: "Could not save registration",
        message: "An error occurred. Please try again shortly.",
      },
      { status: 500 }
    );
  }

  // 7. Email will be added next round. For now, return success.
  return NextResponse.json(
    {
      success: true,
      referenceCode,
      message: "Registration received",
    },
    { status: 201 }
  );
}