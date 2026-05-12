import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import Tracks from "@/components/sections/Tracks";
import HowItWorks from "@/components/sections/HowItWorks";
import Eligibility from "@/components/sections/Eligibility";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          {/* Decorative serif character — large, faded */}
          <div
            aria-hidden
            className="absolute -top-20 -right-10 md:-right-20 font-display text-[28rem] md:text-[40rem] leading-none text-emerald-500/4 select-none pointer-events-none"
          >
            ʌ
          </div>

          {/* Top metadata strip */}
          <div className="max-w-[88rem] mx-auto px-6 md:px-10 mb-16 md:mb-24 relative z-10">
            <Reveal>
              <div className="flex flex-wrap items-center gap-6 md:gap-12 font-mono text-sm tracking-[0.25em] uppercase text-ink-700">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
                  Cohort 01 · Now Open
                </span>
                <span className="hidden md:inline">A National Initiative</span>
                <span className="hidden md:inline">Federal Republic of Nigeria</span>
                <span className="ml-auto hidden md:inline">№ 2026 / 01</span>
              </div>
            </Reveal>
          </div>

          <div className="max-w-[88rem] mx-auto px-6 md:px-10 relative z-10">
            <div className="grid grid-cols-12 gap-6 md:gap-10">
              {/* Eyebrow */}
              <div className="col-span-12 md:col-span-4">
                <Reveal delay={0.1}>
                  <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-8 md:mb-12">
                    <span className="w-8 h-px bg-emerald-500" />
                    For serving corps members
                  </div>
                </Reveal>
              </div>

              {/* Headline */}
              <div className="col-span-12 lg:col-span-11 -mt-2">
                <Reveal delay={0.2}>
                  <h1 className="font-display text-display-xl text-ink-900 text-balance">
                    Build skills the{" "}
                    <em className="font-light text-emerald-500">future</em> of Nigeria{" "}
                    <span className="block md:inline">depends on.</span>
                  </h1>
                </Reveal>
              </div>

              {/* Sub-copy + CTAs */}
              <div className="col-span-12 md:col-span-7 lg:col-start-2 mt-12 md:mt-20">
                <Reveal delay={0.35}>
                  <p className="font-display text-2xl md:text-3xl text-ink-700 leading-snug text-balance">
                    A federal training programme equipping serving NYSC members with
                    industry-grade expertise in{" "}
                    <em className="text-emerald-500 font-medium not-italic">
                      Artificial Intelligence
                    </em>
                    ,{" "}
                    <em className="text-emerald-500 font-medium not-italic">
                      Data Protection
                    </em>
                    , and{" "}
                    <em className="text-emerald-500 font-medium not-italic">
                      Cybersecurity
                    </em>{" "}
                    three fields shaping the next decade of work in Africa.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-10">
                    <Link
                      href="/register"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink-900 text-cream-50 text-base tracking-wide hover:bg-emerald-700 transition-colors border border-ink-900 hover:border-emerald-700 group"
                    >
                      Start Application
                      <span
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden
                      >
                        →
                      </span>
                    </Link>
                    <Link
                      href="/programme"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-ink-900 text-base tracking-wide border border-ink-900 hover:bg-ink-900 hover:text-cream-50 transition-colors"
                    >
                      Read the prospectus
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Side stats column */}
              <div className="col-span-12 md:col-span-4 lg:col-span-3 lg:col-start-10 mt-12 md:mt-20 md:pl-8 md:border-l md:border-ink-900/10">
                <Reveal delay={0.5}>
                  <dl className="space-y-8">
                    <div>
                      <dt className="font-mono text-sm tracking-[0.25em] uppercase text-emerald-500 mb-2">
                        Cohort Size
                      </dt>
                      <dd className="font-display text-5xl text-ink-900">500</dd>
                      <dd className="text-base text-ink-600 mt-1">
                        corps members per intake
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-sm tracking-[0.25em] uppercase text-emerald-500 mb-2">
                        Duration
                      </dt>
                      <dd className="font-display text-5xl text-ink-900">
                        12<span className="text-ochre-300 text-3xl">w</span>
                      </dd>
                      <dd className="text-base text-ink-600 mt-1">
                        intensive, part-time
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-sm tracking-[0.25em] uppercase text-emerald-500 mb-2">
                        Tuition
                      </dt>
                      <dd className="font-display text-5xl text-ink-900">
                        Free<span className="text-ochre-300">.</span>
                      </dd>
                      <dd className="text-base text-ink-600 mt-1">
                        fully sponsored programme
                      </dd>
                    </div>
                  </dl>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Bottom rule */}
          <div className="max-w-[88rem] mx-auto px-6 md:px-10 mt-20 md:mt-32 relative z-10">
            <div className="border-t border-ink-900/15" />
          </div>
        </section>

        {/* ── Tracks section ───────────────────────────────── */}
        <Tracks />

        {/* ── How It Works ─────────────────────────────────── */}
        <HowItWorks />

        {/* ── Eligibility ──────────────────────────────────── */}
        <Eligibility />

        {/* ── FAQ ───────────────────────────────────────────── */}
        <Faq />

        {/* ── Final CTA ────────────────────────────────────── */}
        <section className="py-24 md:py-32 relative">
          <div className="max-w-[88rem] mx-auto px-6 md:px-10">
            <Reveal>
              <div className="border border-ink-900 p-10 md:p-16 lg:p-20 relative overflow-hidden bg-cream-50">
                {/* Decorative corner ornaments */}
                <div className="hidden md:block absolute top-6 right-6 font-mono text-xs tracking-[0.3em] uppercase text-emerald-500">
                  ✦ № 2026
                </div>
                <div className="hidden md:block absolute bottom-6 left-6 font-mono text-xs tracking-[0.3em] uppercase text-emerald-500">
                  Apply Now
                </div>

                <div className="grid grid-cols-12 gap-6 md:gap-10 relative z-10">
                  <div className="col-span-12 md:col-span-7">
                    <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6">
                      <span className="w-8 h-px bg-emerald-500" />
                      A final word
                    </div>
                    <h2 className="font-display text-display-md text-ink-900 leading-[1.05] tracking-tight text-balance">
                      Twelve weeks now,
                      <br />
                      <em className="font-light text-emerald-500">
                        a different career later
                      </em>
                      .
                    </h2>
                    <p className="text-lg md:text-xl text-ink-700 mt-8 leading-relaxed max-w-xl text-pretty">
                      Service year is a window short, finite, and uniquely yours to
                      shape. Spend a portion of it building real skills with real
                      teachers, alongside corps members who&apos;ll be your colleagues
                      for the next decade.
                    </p>
                  </div>

                  <div className="col-span-12 md:col-span-5 md:pl-8 md:border-l md:border-ink-900/15 flex flex-col justify-between gap-8">
                    <div>
                      <div className="font-mono text-xs tracking-[0.25em] uppercase text-ink-500 mb-2">
                        Applications close
                      </div>
                      <div className="font-display text-3xl text-ink-900">
                        Rolling intake
                      </div>
                      <p className="text-base text-ink-600 mt-2">
                        We review applications continuously. Apply early cohort
                        places are limited.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Link
                        href="/register"
                        className="inline-flex items-center justify-center gap-2 w-full px-7 py-3.5 bg-ink-900 text-cream-50 text-base tracking-wide hover:bg-emerald-700 transition-colors border border-ink-900 hover:border-emerald-700 group"
                      >
                        Begin Application
                        <span
                          className="transition-transform group-hover:translate-x-1"
                          aria-hidden
                        >
                          →
                        </span>
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 w-full px-7 py-3.5 bg-transparent text-ink-900 text-base tracking-wide border border-ink-900 hover:bg-ink-900 hover:text-cream-50 transition-colors"
                      >
                        Speak with our team
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
