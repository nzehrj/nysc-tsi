import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/form/RegistrationForm";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Apply for the NYSC Tech Skills Initiative — AI, Data Protection, and Cybersecurity.",
};

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 md:pt-40 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {/* Page intro */}
          <div className="mb-16 md:mb-24">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-ink-600 hover:text-emerald-500 transition-colors mb-8"
            >
              <span aria-hidden>←</span> Back to home
            </Link>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-emerald-500" />
                  Registration
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h1 className="font-display text-display-lg text-ink-900 leading-[0.95] tracking-tight text-balance">
                  Application,
                  <br />
                  <em className="font-light text-emerald-500">Cohort 01</em>.
                </h1>
                <p className="text-lg text-ink-600 mt-8 max-w-2xl text-balance">
                  Four short sections — about ten minutes. Have your state code,
                  deployment details, and a moment to think about why you&apos;re
                  applying.
                </p>
              </div>
            </div>
          </div>

          {/* The form */}
          <RegistrationForm />

          {/* Help footer */}
          <div className="mt-20 pt-12 border-t border-ink-900/10 grid md:grid-cols-2 gap-8">
            <div>
              <div className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-500 mb-3">
                Need help?
              </div>
              <p className="text-sm text-ink-700 leading-relaxed">
                Reach out at{" "}
                <a
                  href="mailto:support@nysc-tsi.org"
                  className="text-emerald-500 underline underline-offset-4 hover:text-emerald-700"
                >
                  support@nysc-tsi.org
                </a>{" "}
                — we typically reply within one working day.
              </p>
            </div>
            <div>
              <div className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-500 mb-3">
                Your data
              </div>
              <p className="text-sm text-ink-700 leading-relaxed">
                We follow Nigeria&apos;s NDPA strictly. Read our{" "}
                <Link
                  href="/privacy"
                  className="text-emerald-500 underline underline-offset-4 hover:text-emerald-700"
                >
                  privacy notice
                </Link>{" "}
                to understand what we collect and why.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}