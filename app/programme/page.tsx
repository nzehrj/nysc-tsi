import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Tracks from "@/components/sections/Tracks";
import HowItWorks from "@/components/sections/HowItWorks";
import Eligibility from "@/components/sections/Eligibility";

export const metadata: Metadata = {
  title: "Programme",
  description:
    "Curriculum, structure, and outcomes of the NYSC Tech Skills Initiative.",
};

export default function ProgrammePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Page intro */}
        <section className="pt-32 md:pt-40 pb-12 md:pb-20">
          <div className="max-w-[88rem] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-emerald-500" />
                  Prospectus
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h1 className="font-display text-display-xl text-ink-900 leading-[0.95] tracking-tight text-balance">
                  The <em className="font-light text-emerald-500">programme</em>
                  <br />
                  in detail.
                </h1>
                <p className="font-display text-2xl md:text-3xl text-ink-700 mt-8 leading-snug max-w-3xl text-balance">
                  Twelve weeks of focused, hands-on training. One track. Real
                  teachers, real projects, real outcomes designed around the
                  realities of service year.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Tracks />
        <HowItWorks />
        <Eligibility />

        {/* Closing CTA */}
        <section className="py-24 md:py-32">
          <div className="max-w-[88rem] mx-auto px-6 md:px-10">
            <div className="border border-ink-900 p-10 md:p-16 text-center">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6 justify-center">
                <span className="w-8 h-px bg-emerald-500" />
                Ready?
              </div>
              <h2 className="font-display text-display-md text-ink-900 max-w-3xl mx-auto text-balance">
                Apply once.{" "}
                <em className="font-light text-emerald-500">
                  Choose your track
                </em>{" "}
                wisely.
              </h2>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-7 py-3.5 mt-10 bg-ink-900 text-cream-50 text-base tracking-wide hover:bg-emerald-700 transition-colors border border-ink-900 hover:border-emerald-700"
              >
                Start Application →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}