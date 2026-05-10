import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your use of the NYSC Tech Skills Initiative website and application portal.",
};

const sections = [
  {
    number: "01",
    title: "About these terms",
    body: `These Terms of Use govern your access to and use of the NYSC Tech Skills Initiative website and application portal ("the Service"). By using the Service, you agree to these terms.

If you do not agree, please do not use the Service.

These terms apply alongside our Privacy Notice, which explains how we handle your personal data.`,
  },
  {
    number: "02",
    title: "Who can use the Service",
    body: `The Service is intended primarily for serving members of the National Youth Service Corps (NYSC) who are eligible to apply to the Tech Skills Initiative programme.

You may also use the Service to learn about the programme, contact us, or read public information without applying.

If you submit an application, you confirm that:

- You are a serving NYSC member at the time of application
- The information you provide is accurate, complete, and truthful
- You are submitting the application personally — not on behalf of someone else
- You are at least 18 years of age`,
  },
  {
    number: "03",
    title: "Your account and submissions",
    body: `Each NYSC state code may submit only one application per cohort. Submitting multiple applications using different state codes or false information may result in your applications being rejected.

If you provide a reference code from a previous submission, you are responsible for keeping that code confidential. We use it to identify your application, and anyone with the code can quote it in correspondence.

We are not responsible for inaccuracies in your application that result from incorrect information you provide.`,
  },
  {
    number: "04",
    title: "Acceptable use",
    body: `When using the Service, you agree not to:

- Submit false, misleading, or fraudulent information
- Use the Service to spam, harass, or impersonate others
- Attempt to interfere with the security or normal operation of the Service
- Scrape, copy, or reproduce content from the Service without permission, except for normal personal use
- Use automated systems (bots, scripts, scrapers) to interact with the Service without our written consent
- Reverse-engineer or attempt to extract the underlying source code of the Service

We reserve the right to suspend or terminate access to the Service for any user who violates these terms.`,
  },
  {
    number: "05",
    title: "Programme participation",
    body: `Submitting an application does not guarantee acceptance into the programme. Acceptance is at the discretion of the admissions team and is subject to verification of your information, eligibility, and available cohort places.

If accepted, your continued participation is subject to:

- Attendance and engagement requirements as outlined in the programme schedule
- Meeting the academic and project standards of your chosen track
- Acting in accordance with the programme's code of conduct, which will be shared at orientation

We reserve the right to remove participants who fail to meet these requirements, who provide false information at any stage, or who behave in ways that are harmful to other participants or staff.`,
  },
  {
    number: "06",
    title: "Fees and equipment",
    body: `The programme is fully sponsored. There are no tuition fees, examination fees, or certificate fees for accepted participants.

Where you indicate a need for laptop equipment in your application and are approved for our limited equipment-loan programme, you will be required to sign a separate equipment-loan agreement that governs the use, return, and care of any device provided.

You remain responsible for your own internet connectivity and personal expenses.`,
  },
  {
    number: "07",
    title: "Intellectual property",
    body: `The content on this Service, text, designs, graphics, logos, code is owned by us or our licensors and is protected by Nigerian and international copyright laws.

You may view, download, and print pages from the Service for personal, non-commercial use. You may not modify, redistribute, or republish the content without our written permission.

When you submit content to us for example, your application text, capstone project work — you retain ownership of that content. By submitting it, you grant us a non-exclusive licence to use it for the purposes of operating the programme: reviewing your application, evaluating your work, and (with your separate consent) showcasing accepted projects to partners.`,
  },
  {
    number: "08",
    title: "Third-party services and links",
    body: `The Service uses third-party services for hosting, email delivery, and other operational needs. These providers process limited data on our behalf, under contractual data-protection terms, see our Privacy Notice for details.

The Service may include links to third-party websites. We do not control those sites and are not responsible for their content, privacy practices, or terms of use. Visit them at your own discretion.`,
  },
  {
    number: "09",
    title: "Disclaimers",
    body: `The Service is provided "as is." We make reasonable efforts to keep it secure, accurate, and available, but we do not guarantee uninterrupted operation or the absence of errors.

We do not guarantee any specific career outcome from completing the programme. We do commit to delivering the curriculum, supporting your placement, and connecting you to our partner network, but employment depends on factors outside our control, including your own effort.

Information on this site about the programme structure, partners, and timelines may change. We will update the site to reflect material changes but cannot guarantee real-time accuracy.`,
  },
  {
    number: "10",
    title: "Limitation of liability",
    body: `To the maximum extent permitted by Nigerian law, we are not liable for indirect, incidental, or consequential losses arising from your use of the Service.

Our total liability to you, in any matter relating to the Service or the programme, is limited to the amount you have paid us which, since the programme is free, is generally zero, except where the law requires otherwise.

Nothing in these terms limits liability for fraud, gross negligence, or any liability that cannot be limited under Nigerian law.`,
  },
  {
    number: "11",
    title: "Suspension and termination",
    body: `We may suspend or terminate your access to the Service at any time, without notice, if you violate these terms or if we are required to do so by law.

You may stop using the Service at any time. If you wish to withdraw your application or have your data deleted, contact us see our Privacy Notice for details on data deletion.`,
  },
  {
    number: "12",
    title: "Governing law",
    body: `These terms are governed by the laws of the Federal Republic of Nigeria.

Any dispute arising from your use of the Service or participation in the programme will be subject to the exclusive jurisdiction of the courts of Nigeria.`,
  },
  {
    number: "13",
    title: "Changes to these terms",
    body: `We may update these terms from time to time. The "Last updated" date at the bottom of this page reflects the most recent version.

For material changes those that meaningfully affect your rights or obligations we will give reasonable notice through the Service or by email.

Your continued use of the Service after a material change indicates your acceptance of the updated terms.`,
  },
];

export default function TermsPage() {
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
                  Terms
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h1 className="font-display text-display-lg text-ink-900 leading-[0.95] tracking-tight text-balance">
                  The <em className="font-light text-emerald-500">terms</em> of using
                  this service.
                </h1>
                <p className="font-display text-2xl md:text-3xl text-ink-700 mt-8 leading-snug max-w-3xl text-balance">
                  Plainly stated. The rules of using this site, applying to the
                  programme, and what we promise — and don&apos;t promise — to one
                  another.
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
              These terms are currently in draft form during the staging phase of
              this programme. Before public launch, they will be reviewed and
              finalised by qualified legal counsel.
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
                Questions
              </div>
              <p className="text-lg text-ink-700 leading-relaxed">
                Reach out via our{" "}
                <Link
                  href="/contact"
                  className="text-emerald-500 underline underline-offset-4 hover:text-emerald-700"
                >
                  contact form
                </Link>{" "}
                or email{" "}
                <a
                  href="mailto:legal@nysc-tsi.org"
                  className="text-emerald-500 underline underline-offset-4 hover:text-emerald-700"
                >
                  legal@nysc-tsi.org
                </a>
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