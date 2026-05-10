import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Application received",
  description: "Your application to the NYSC Tech Skills Initiative has been received.",
  robots: { index: false, follow: false },
};

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;

  if (!ref) {
    redirect("/register");
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-32 md:pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-emerald-500" />
                Received
              </div>
            </div>

            <div className="col-span-12 md:col-span-9">
              <h1 className="font-display text-display-lg text-ink-900 leading-[0.95] tracking-tight text-balance">
                Thank you.
                <br />
                <em className="font-light text-emerald-500">
                  We have your application.
                </em>
              </h1>

              <p className="font-display text-2xl text-ink-700 mt-8 leading-snug max-w-2xl text-balance">
                A confirmation email is on its way to your inbox. Our review team
                will be in touch within seven working days with the next step.
              </p>

              {/* Reference card */}
              <div className="mt-12 bg-emerald-700 text-cream-50 p-8 md:p-10 relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-10 -right-6 font-display text-[20rem] leading-none text-cream-50/5 select-none pointer-events-none"
                >
                  ✦
                </div>
                <div className="relative z-10">
                  <div className="font-mono text-sm tracking-[0.25em] uppercase text-ochre-200 mb-4">
                    ── Your reference code
                  </div>
                  <div className="font-mono text-3xl md:text-4xl tracking-wider text-cream-50">
                    {ref}
                  </div>
                  <p className="text-base text-cream-50/80 mt-6 max-w-md">
                    Keep this code. Quote it in any correspondence about your
                    application — it&apos;s the fastest way for our team to find your
                    submission.
                  </p>
                </div>
              </div>

              {/* What's next */}
              <div className="mt-16">
                <div className="font-mono text-sm tracking-[0.2em] uppercase text-emerald-500 mb-6">
                  What happens next
                </div>
                <ol className="space-y-6">
                  {[
                    {
                      step: "01",
                      label: "Verification",
                      text: "We confirm your NYSC details against active service records.",
                    },
                    {
                      step: "02",
                      label: "Review",
                      text: "Your application is reviewed by our admissions team.",
                    },
                    {
                      step: "03",
                      label: "Decision",
                      text: "You receive an email with your status and cohort information.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex items-baseline gap-6">
                      <span className="font-mono text-sm text-ochre-300 tracking-[0.2em] shrink-0 w-8">
                        {item.step}
                      </span>
                      <div>
                        <div className="font-display text-2xl text-ink-900">
                          {item.label}
                        </div>
                        <div className="text-lg text-ink-600 mt-1 leading-relaxed">
                          {item.text}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-16 pt-8 border-t border-ink-900/10 flex flex-wrap items-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-ink-900 text-base tracking-wide border border-ink-900 hover:bg-ink-900 hover:text-cream-50 transition-colors"
                >
                  Return home
                </Link>
                <span className="font-mono text-sm tracking-[0.25em] uppercase text-ink-500">
                  Didn&apos;t receive an email? Check spam, then contact support.
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}