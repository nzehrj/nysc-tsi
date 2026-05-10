import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description: "About the NYSC Tech Skills Initiative.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 md:pt-40">
        {/* Page intro */}
        <section className="py-12 md:py-20">
          <div className="max-w-8xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-emerald-500" />
                  About
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h1 className="font-display text-display-xl text-ink-900 leading-[0.95] tracking-tight text-balance">
                  Built for the{" "}
                  <em className="font-light text-emerald-500">corps members</em>
                  <br />
                  who&apos;ll build Nigeria.
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* The why */}
        <section className="py-12 md:py-20">
          <div className="max-w-8xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-12 gap-6 md:gap-10">
              <div className="col-span-12 md:col-span-7 md:col-start-2">
                <p className="font-display text-2xl md:text-3xl text-ink-900 leading-snug text-balance">
                  Nigeria graduates hundreds of thousands of corps members every
                  year. Most enter a job market that wasn&apos;t built for them
                  and that hasn&apos;t kept up with where the global economy
                  is going.
                </p>
                <p className="text-xl text-ink-700 leading-relaxed mt-8 text-pretty">
                  The NYSC Tech Skills Initiative exists to change that not
                  with another certificate that means nothing, but with serious,
                  hands-on training in three fields that will define the next
                  decade of work in Africa: Artificial Intelligence, Data
                  Protection, and Cybersecurity.
                </p>
                <p className="text-xl text-ink-700 leading-relaxed mt-6 text-pretty">
                  We work with practising professionals from Nigerian and
                  international firms, follow a curriculum that mirrors what
                  employers actually hire for, and structure the programme
                  around the real schedule of a serving corps member.
                </p>

                {/* Pull quote */}
                <div className="mt-16 mb-4 relative pt-6">
                  <span className="absolute top-0 left-0 right-0 h-px bg-ink-900" />
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cream-50 px-3 text-emerald-500 text-base">
                    ✦
                  </span>
                  <p className="font-display text-2xl md:text-3xl italic text-emerald-500 mt-6 text-balance leading-snug">
                    &ldquo;Service year is short. The skills you build during it
                    should outlast it.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three principles */}
        <section className="py-24 md:py-32 bg-cream-100/40">
          <div className="max-w-8xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-12 gap-6 mb-16">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-emerald-500" />
                  Principles
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="font-display text-display-lg text-ink-900 text-balance">
                  Three commitments we{" "}
                  <em className="font-light text-emerald-500">don&apos;t bend</em>{" "}
                  on.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-900/10">
              {[
                {
                  number: "01",
                  title: "Free, always",
                  body: "No corps member should pay to access skills they need to build a career. The programme is fully sponsored tuition, materials, examinations, and certificates included.",
                },
                {
                  number: "02",
                  title: "Built for working hands",
                  body: "We don't teach theory for theory's sake. Every track ends in a real capstone project that solves a real problem in a real Nigerian context. Graduates leave with portfolios, not just certificates.",
                },
                {
                  number: "03",
                  title: "Honest about outcomes",
                  body: "We won't promise jobs we can't deliver. We will promise the skills, the network, and the placement support and we'll be transparent about what corps members do with them.",
                },
              ].map((principle) => (
                <div
                  key={principle.number}
                  className="bg-cream-50 p-10 md:p-12"
                >
                  <div className="font-mono text-sm tracking-[0.2em] text-emerald-500 mb-6">
                    № {principle.number}
                  </div>
                  <h3 className="font-display text-3xl text-ink-900 leading-tight">
                    {principle.title}
                  </h3>
                  <p className="text-lg text-ink-700 leading-relaxed mt-6 text-pretty">
                    {principle.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 md:py-32">
          <div className="max-w-8xl mx-auto px-6 md:px-10">
            <div className="border border-ink-900 p-10 md:p-16 text-center">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6 justify-center">
                <span className="w-8 h-px bg-emerald-500" />
                Join us
              </div>
              <h2 className="font-display text-display-md text-ink-900 max-w-3xl mx-auto text-balance">
                Cohort 01 is{" "}
                <em className="font-light text-emerald-500">now open</em>.
              </h2>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-7 py-3.5 mt-10 bg-ink-900 text-cream-50 text-base tracking-wide hover:bg-emerald-700 transition-colors border border-ink-900 hover:border-emerald-700"
              >
                Begin Application →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}