import { Resend } from "resend";
import type { ContactData } from "@/lib/validation/contact";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM_ADDRESS =
  process.env.EMAIL_FROM || "NYSC TSI <onboarding@resend.dev>";
const TEAM_INBOX =
  process.env.EMAIL_REPLY_TO || "support@nysc-tsi.org";

const SUBJECT_LABELS: Record<string, string> = {
  application: "Application question",
  partnership: "Partnership enquiry",
  press: "Press enquiry",
  general: "General question",
};

function buildContactHtml(data: ContactData): string {
  const subjectLabel = SUBJECT_LABELS[data.subject] || data.subject;

  return `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background-color:#FEFEFC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0A0E0B;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FEFEFC;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border:1px solid rgba(10,14,11,0.08);">

          <tr>
            <td style="padding:32px 48px;border-bottom:1px solid rgba(10,14,11,0.08);">
              <div style="font-family:'SF Mono',Menlo,monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#1F5524;">
                ── New contact submission
              </div>
              <h1 style="font-family:Georgia,serif;font-size:24px;line-height:1.2;letter-spacing:-0.02em;margin:8px 0 0;color:#0A0E0B;">
                ${subjectLabel}
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding:32px 48px;">
              <table cellpadding="0" cellspacing="0" width="100%" style="font-size:14px;color:#293530;">
                <tr>
                  <td style="padding:8px 0;color:#6B756F;width:30%;vertical-align:top;">From</td>
                  <td style="padding:8px 0;">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6B756F;vertical-align:top;">Email</td>
                  <td style="padding:8px 0;">
                    <a href="mailto:${data.email}" style="color:#1F5524;text-decoration:underline;">${data.email}</a>
                  </td>
                </tr>
                ${
                  data.phone
                    ? `<tr>
                        <td style="padding:8px 0;color:#6B756F;vertical-align:top;">Phone</td>
                        <td style="padding:8px 0;font-family:'SF Mono',Menlo,monospace;">${data.phone}</td>
                      </tr>`
                    : ""
                }
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 48px 32px;">
              <div style="font-family:'SF Mono',Menlo,monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#1F5524;margin-bottom:8px;">
                Message
              </div>
              <div style="background-color:#F9F8F4;border-left:3px solid #1F5524;padding:20px 24px;font-size:15px;line-height:1.6;color:#0A0E0B;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
            </td>
          </tr>

        </table>

        <div style="font-family:Georgia,serif;font-size:11px;letter-spacing:0.1em;color:#8E978F;margin-top:24px;text-align:center;">
          NYSC TECH SKILLS INITIATIVE
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(
  data: ContactData
): Promise<{ success: boolean; error?: string }> {
  if (!resend) {
    console.warn("RESEND_API_KEY not configured — skipping contact email");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const subjectLabel = SUBJECT_LABELS[data.subject] || data.subject;
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TEAM_INBOX,
      replyTo: data.email,
      subject: `[Contact] ${subjectLabel} — ${data.fullName}`,
      html: buildContactHtml(data),
    });

    if (error) {
      console.error("Resend contact error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown email error";
    console.error("Contact email exception:", err);
    return { success: false, error: message };
  }
}