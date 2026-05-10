import { Resend } from "resend";
import type { FullRegistration } from "@/lib/validation/registration";

// ── Setup ────────────────────────────────────────────────
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM_ADDRESS =
  process.env.EMAIL_FROM || "NYSC TSI <onboarding@resend.dev>";
const REPLY_TO = process.env.EMAIL_REPLY_TO || "support@nysc-tsi.org";

const TRACK_LABELS: Record<string, string> = {
  artificial_intelligence: "Artificial Intelligence",
  data_protection: "Data Protection",
  cybersecurity: "Cybersecurity",
};

interface ConfirmationEmailParams {
  registration: FullRegistration;
  referenceCode: string;
}

// ── HTML template ────────────────────────────────────────
function buildConfirmationHtml({
  registration,
  referenceCode,
}: ConfirmationEmailParams): string {
  const trackLabel = TRACK_LABELS[registration.track] || registration.track;
  const firstName = registration.fullName.split(" ")[0];

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Registration received — NYSC Tech Skills Initiative</title>
</head>
<body style="margin:0;padding:0;background-color:#FEFEFC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0A0E0B;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FEFEFC;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border:1px solid rgba(10,14,11,0.08);">

          <tr>
            <td style="padding:40px 48px 32px;border-bottom:1px solid rgba(10,14,11,0.08);">
              <div style="font-family:Georgia,serif;font-size:22px;letter-spacing:-0.02em;color:#0A0E0B;font-weight:600;">
                NYSC <span style="color:#1F5524;">Tech Skills</span> Initiative
              </div>
              <div style="font-family:'SF Mono',Menlo,monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#1F5524;margin-top:6px;">
                ── Registration Confirmation
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:40px 48px 24px;">
              <h1 style="font-family:Georgia,serif;font-size:32px;line-height:1.15;letter-spacing:-0.03em;margin:0 0 16px;color:#0A0E0B;">
                Thank you, ${firstName}.
              </h1>
              <p style="font-size:16px;line-height:1.6;color:#293530;margin:0 0 16px;">
                Your application for the <strong>${trackLabel}</strong> track has been received. We&rsquo;ve recorded your details and a member of our review team will be in touch within <strong>7 working days</strong>.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:0 48px 32px;">
              <div style="background-color:#F9F8F4;border-left:3px solid #1F5524;padding:24px 28px;">
                <div style="font-family:'SF Mono',Menlo,monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#1F5524;margin-bottom:8px;">
                  Your Reference Code
                </div>
                <div style="font-family:'SF Mono',Menlo,monospace;font-size:22px;letter-spacing:0.05em;color:#0A0E0B;font-weight:600;">
                  ${referenceCode}
                </div>
                <div style="font-size:13px;color:#4A554F;margin-top:10px;line-height:1.5;">
                  Quote this code in any correspondence about your application.
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:0 48px 32px;">
              <div style="font-family:Georgia,serif;font-size:18px;color:#0A0E0B;margin-bottom:16px;">What happens next</div>
              <ol style="margin:0;padding-left:20px;color:#293530;font-size:15px;line-height:1.7;">
                <li style="margin-bottom:10px;">Our team verifies your NYSC details against active service records.</li>
                <li style="margin-bottom:10px;">You receive an acceptance email with your cohort assignment.</li>
                <li style="margin-bottom:10px;">Programme orientation begins &mdash; virtually first, then weekend in-person sessions in your zone.</li>
              </ol>
            </td>
          </tr>

          <tr>
            <td style="padding:0 48px 40px;">
              <div style="border-top:1px solid rgba(10,14,11,0.08);padding-top:24px;">
                <div style="font-family:Georgia,serif;font-size:16px;color:#0A0E0B;margin-bottom:12px;">Submission summary</div>
                <table cellpadding="0" cellspacing="0" width="100%" style="font-size:14px;color:#293530;">
                  <tr>
                    <td style="padding:6px 0;color:#6B756F;width:40%;">State Code</td>
                    <td style="padding:6px 0;font-family:'SF Mono',Menlo,monospace;">${registration.stateCode}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#6B756F;">Deployment</td>
                    <td style="padding:6px 0;">${registration.deploymentLga}, ${registration.deploymentState}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#6B756F;">Track</td>
                    <td style="padding:6px 0;">${trackLabel}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#6B756F;">Service Batch</td>
                    <td style="padding:6px 0;">${registration.serviceYear} Batch ${registration.batch}${registration.stream ? ` Stream ${registration.stream}` : ""}</td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 48px;background-color:#F9F8F4;border-top:1px solid rgba(10,14,11,0.08);">
              <div style="font-size:12px;color:#6B756F;line-height:1.6;">
                If you did not submit this application, please reply to this email immediately.<br />
                Questions? Reach us at <a href="mailto:${REPLY_TO}" style="color:#1F5524;text-decoration:underline;">${REPLY_TO}</a>.
              </div>
            </td>
          </tr>

        </table>

        <div style="font-family:Georgia,serif;font-size:11px;letter-spacing:0.1em;color:#8E978F;margin-top:24px;text-align:center;">
          NYSC TECH SKILLS INITIATIVE &middot; NIGERIA
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Send function ────────────────────────────────────────
export async function sendConfirmationEmail(
  params: ConfirmationEmailParams
): Promise<{ success: boolean; error?: string }> {
  if (!resend) {
    console.warn("RESEND_API_KEY not configured — skipping email send");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: params.registration.email,
      replyTo: REPLY_TO,
      subject: `Application received — ${params.referenceCode}`,
      html: buildConfirmationHtml(params),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown email error";
    console.error("Email send exception:", err);
    return { success: false, error: message };
  }
}