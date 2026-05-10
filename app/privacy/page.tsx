import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How the NYSC Tech Skills Initiative collects, uses, and protects your personal data under Nigeria's NDPA.",
};

const sections = [
  {
    number: "01",
    title: "What we collect",
    body: `We collect only the personal data necessary to evaluate your application, manage your participation in the programme, and communicate with you about it. Specifically:

- Your full name, email address, and phone number
- Your NYSC details state code, call-up number, deployment state, LGA, CDS group, service year, batch, and stream
- Your educational background institution, course of study, qualification level, and graduation year
- Information about your chosen track and motivation for applying
- Your laptop and internet access status, used to plan logistics and equipment loans
- Technical metadata about your submission IP address, browser user agent, and timestamp collected for security and audit purposes`,
  },
  {
    number: "02",
    title: "Why we collect it",
    body: `We process your data for clearly defined purposes:

- To verify your eligibility and active service status with NYSC
- To evaluate your application and communicate decisions to you
- To deliver the programme: cohort assignment, materials, schedules, and instruction
- To award certificates and provide alumni network access
- To support placement and partner-employer introductions, where you opt in
- To meet our legal and reporting obligations, including those owed to NYSC and the Nigeria Data Protection Commission`,
  },
  {
    number: "03",
    title: "Lawful basis under NDPA",
    body: `Our primary lawful basis for processing your data is your explicit consent, which you provide when submitting your application. You can withdraw that consent at any time by contacting us, though doing so will end your participation in the programme.

Where required by law (for example, in responding to lawful requests from regulatory authorities), we may also process data under the lawful bases of legal obligation or public interest as defined in the Nigeria Data Protection Act 2023.`,
  },
  {
    number: "04",
    title: "Where your data lives",
    body: `Your data is stored on encrypted, access-controlled infrastructure provided by our hosting partners. We prefer infrastructure with a Nigerian data centre presence wherever operationally feasible.

Some processing, such as transactional email delivery may involve cross-border transfer to service providers in jurisdictions deemed adequate under NDPA, or covered by contractual safeguards. We will not transfer your data outside Nigeria except where the transfer meets one of the conditions set out in the NDPA.`,
  },
  {
    number: "05",
    title: "Who can see it",
    body: `Only authorised members of the NYSC Tech Skills Initiative team have access to your application data, and only for the purposes set out above. We do not sell, rent, or share your personal data with third parties for marketing.

We share limited data with the following categories of recipients, strictly as needed:

- NYSC's relevant offices, for verification and reporting
- Our hosting and email service providers, who process data on our instructions and under contractual data-protection terms
- Programme partners only with your explicit, separate consent, for opportunities like placement introductions

Where law requires it, we may also disclose data to regulatory or judicial authorities.`,
  },
  {
    number: "06",
    title: "How long we keep it",
    body: `We retain your application data for the duration of your participation in the programme, plus a defined retention period afterwards for alumni records, audit, and legal compliance.

Specific retention periods:

- Successful applicants: data retained for the duration of programme participation plus 5 years for alumni and audit purposes
- Unsuccessful or withdrawn applicants: data retained for 12 months from the application date, then anonymised or deleted
- Audit logs: retained for 24 months as required for security and compliance

You can request earlier deletion under your rights below. we will comply unless legally required to retain specific records.`,
  },
  {
    number: "07",
    title: "Your rights",
    body: `Under the Nigeria Data Protection Act 2023, you have the right to:

- Access the personal data we hold about you
- Correct inaccurate or incomplete data
- Request deletion of your data, subject to legal retention requirements
- Object to or restrict our processing of your data
- Withdraw consent at any time
- Receive your data in a portable, machine-readable format
- Lodge a complaint with the Nigeria Data Protection Commission (NDPC)

To exercise any of these rights, contact us using the details below. We will respond within 30 days.`,
  },
  {
    number: "08",
    title: "Security",
    body: `We protect your data with appropriate technical and organisational measures, including:

- Encryption of data in transit (TLS 1.2+) and at rest
- Access controls limiting who on our team can see what
- Audit logging of access to sensitive records
- Regular security reviews of our hosting and processing arrangements
- Rate limiting and submission monitoring on our application forms

No system is perfectly secure. If we ever experience a breach affecting your data, we will notify you and the NDPC in accordance with the NDPA's breach notification requirements.`,
  },
  {
    number: "09",
    title: "Cookies and tracking",
    body: `Our website uses only essential cookies required to operate the application form and remember your progress between steps. We do not use advertising cookies, third-party analytics that profile users, or cross-site tracking.

We may collect anonymised, aggregated usage statistics to understand how the site is used and improve it. These statistics cannot be linked back to you individually.`,
  },
  {
    number: "10",
    title: "Changes to this notice",
    body: `We may update this privacy notice over time as our practices, the programme, or applicable law evolve. The "Last updated" date at the bottom of this page reflects the most recent version.

For material changes, particularly any that affect your rights or how we use your data, we will notify you directly using the contact details you provided.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 md:pt-40 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {/* Page intro */}
          <div className="mb-16 md:mb-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-sm tracking-[0.2em] uppercase text-ink-600 hover:text-emerald-500 transition-colors mb-8"
            >
              <span aria-hidden>←</span> Back to home
            </Link>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-emerald-500" />
                  Privacy
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h1 className="font-display text-display-lg text-ink-900 leading-[0.95] tracking-tight text-balance">
                  How we handle{" "}
                  <em className="font-light text-emerald-500">your data</em>.
                </h1>
                <p className="font-display text-2xl md:text-3xl text-ink-700 mt-8 leading-snug max-w-3xl text-balance">
                  Plain language, no fine print. This is how the NYSC Tech Skills
                  Initiative collects, uses, and protects your personal data under
                  Nigeria&apos;s Data Protection Act.
                </p>
              </div>
            </div>
          </div>

          {/* Draft notice */}
          <div className="mb-16 md:mb-20 p-6 md:p-8 border border-ochre-300/40 bg-ochre-50">
            <div className="font-mono text-sm tracking-[0.2em] uppercase text-ochre-400 mb-3">
              ── Notice
            </div>
            <p className="text-lg text-ink-800 leading-relaxed">
              This privacy notice is currently in draft form during the staging
              phase of this programme. Before public launch, it will be reviewed
              and finalised by qualified legal counsel and registered with the
              Nigeria Data Protection Commission as required.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-px bg-ink-900/10">
            {sections.map((section) => (
              <article key={section.number} className="bg-cream-50 p-8 md:p-12">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-3">
                    <div className="font-mono text-sm text-emerald-500 tracking-[0.2em] mb-2">
                      № {section.number}
                    </div>
                    <h2 className="font-display text-3xl text-ink-900 leading-tight tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <div className="text-xl text-ink-700 leading-relaxed whitespace-pre-line text-pretty">
                      {section.body}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Contact + last updated */}
          <div className="mt-20 pt-12 border-t border-ink-900/10 grid md:grid-cols-2 gap-8">
            <div>
              <div className="font-mono text-sm tracking-[0.2em] uppercase text-emerald-500 mb-3">
                Questions or requests
              </div>
              <p className="text-lg text-ink-700 leading-relaxed">
                Email our data protection officer at{" "}
                <a
                  href="mailto:privacy@nysc-tsi.org"
                  className="text-emerald-500 underline underline-offset-4 hover:text-emerald-700"
                >
                  privacy@nysc-tsi.org
                </a>
                , or use our{" "}
                <Link
                  href="/contact"
                  className="text-emerald-500 underline underline-offset-4 hover:text-emerald-700"
                >
                  contact form
                </Link>
                .
              </p>
            </div>
            <div>
              <div className="font-mono text-sm tracking-[0.2em] uppercase text-emerald-500 mb-3">
                Last updated
              </div>
              <p className="text-lg text-ink-700 leading-relaxed">
                10 May 2026 · Version 0.1 (draft)
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}