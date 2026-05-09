import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";

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
          <div className="max-w-8xl mx-auto px-6 md:px-10 mb-16 md:mb-24 relative z-10">
            <div className="flex flex-wrap items-center gap-6 md:gap-12 font-mono text-sm tracking-[0.25em] uppercase text-ink-700">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
                Cohort 01 · Now Open
              </span>
              <span className="hidden md:inline">A National Initiative</span>
              <span className="hidden md:inline">Federal Republic of Nigeria</span>
              <span className="ml-auto hidden md:inline">№ 2026 / 01</span>
            </div>
          </div>

          <div className="max-w-8xl mx-auto px-6 md:px-10 relative z-10">
            <div className="grid grid-cols-12 gap-6 md:gap-10">
              {/* Eyebrow */}
              <div className="col-span-12 md:col-span-4">
                <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-8 md:mb-12">
                  <span className="w-8 h-px bg-emerald-500" />
                  For serving corps members
                </div>
              </div>

              {/* Headline */}
              <div className="col-span-12 lg:col-span-11 -mt-2">
                <h1 className="font-display text-display-xl text-ink-900 text-balance">
                  Build skills the{" "}
                  <em className="font-light text-emerald-500">future</em> of Nigeria{" "}
                  <span className="block md:inline">depends on.</span>
                </h1>
              </div>

              {/* Sub-copy + CTAs */}
              <div className="col-span-12 md:col-span-7 lg:col-start-2 mt-12 md:mt-20">
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
                  — three fields shaping the next decade of work in Africa.
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
              </div>

              {/* Side stats column */}
              <div className="col-span-12 md:col-span-4 lg:col-span-3 lg:col-start-10 mt-12 md:mt-20 md:pl-8 md:border-l md:border-ink-900/10">
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
              </div>
            </div>
          </div>

          {/* Bottom rule */}
          <div className="max-w-8xl mx-auto px-6 md:px-10 mt-20 md:mt-32 relative z-10">
            <div className="border-t border-ink-900/15" />
          </div>
        </section>

        {/* ── Tracks section ───────────────────────────────── */}
        <section id="tracks" className="py-24 md:py-32 relative">
          <div className="max-w-8xl mx-auto px-6 md:px-10">
            {/* Section header */}
            <div className="grid grid-cols-12 gap-6 mb-20">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-emerald-500" />
                  Three tracks
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="font-display text-display-lg text-ink-900 text-balance">
                  Choose <em className="font-light text-emerald-500">one</em>{" "}
                  direction.
                  <br />
                  Go deep, not wide.
                </h2>
                <p className="text-xl text-ink-600 mt-6 max-w-2xl text-balance">
                  Each track is twelve weeks of focused, project-based learning,
                  taught by practising professionals from Nigerian and international
                  firms.
                </p>
              </div>
            </div>

            {/* Track grid */}
            <div className="space-y-px bg-ink-900/10">
              {[
                {
                  number: "01",
                  title: "Artificial Intelligence",
                  short: "Build with the technology reshaping every industry.",
                  description:
                    "From foundational machine learning to applied AI engineering. Corps members work with real datasets, build production-grade models, and learn the ethics of deployment in Nigerian contexts.",
                  skills: [
                    "Python & Data Science Foundations",
                    "Machine Learning & Deep Learning",
                    "LLMs and Applied AI",
                    "Responsible AI & Bias Mitigation",
                    "Capstone: Solve a Nigerian-context problem",
                  ],
                },
                {
                  number: "02",
                  title: "Data Protection",
                  short: "Master the laws and engineering of privacy.",
                  description:
                    "Nigeria's NDPA is reshaping how organisations handle personal data. This track combines legal literacy with the technical practices that make compliance real — from privacy-by-design to data subject rights operations.",
                  skills: [
                    "NDPA & GDPR Literacy",
                    "Privacy Engineering",
                    "Data Governance & DPIAs",
                    "Records, Retention, and Lawful Bases",
                    "Capstone: Privacy programme for a Nigerian SME",
                  ],
                },
                {
                  number: "03",
                  title: "Cybersecurity",
                  short: "Defend the systems that keep Nigeria running.",
                  description:
                    "Hands-on defensive security. Corps members learn to harden infrastructure, hunt threats, and respond to incidents — graduating with the practical skills employers actually hire for, not just certifications.",
                  skills: [
                    "Networks, Operating Systems, Linux",
                    "Threat Detection & SIEM",
                    "Incident Response & Forensics",
                    "Application Security Fundamentals",
                    "Capstone: Secure a real-world deployment",
                  ],
                },
              ].map((track) => (
                <article
                  key={track.number}
                  className="bg-cream-50 hover:bg-cream-100/60 transition-colors duration-500 group"
                >
                  <div className="grid grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 px-2 md:px-4">
                    {/* Number */}
                    <div className="col-span-12 md:col-span-1">
                      <div className="font-mono text-sm text-emerald-500 tracking-[0.2em]">
                        № {track.number}
                      </div>
                    </div>

                    {/* Title block */}
                    <div className="col-span-12 md:col-span-4">
                      <h3 className="font-display text-4xl md:text-5xl text-ink-900 leading-[1.05] tracking-tight">
                        {track.title}
                      </h3>
                      <p className="font-display text-xl text-emerald-500 italic font-light mt-4">
                        {track.short}
                      </p>
                    </div>

                    {/* Description + skills */}
                    <div className="col-span-12 md:col-span-7 md:pl-8">
                      <p className="text-lg text-ink-700 leading-relaxed text-pretty">
                        {track.description}
                      </p>

                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {track.skills.map((skill, i) => (
                          <div
                            key={i}
                            className="flex items-baseline gap-3 text-base"
                          >
                            <span className="font-mono text-xs text-ochre-300 tracking-wider">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-ink-700">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ─────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-emerald-700 text-cream-50 relative overflow-hidden">
          {/* Decorative quote-mark */}
          <div
            aria-hidden
            className="absolute top-10 right-10 md:top-20 md:right-20 font-display text-[20rem] md:text-[30rem] leading-none text-cream-50/3 select-none pointer-events-none"
          >
            ❝
          </div>

          <div className="max-w-8xl mx-auto px-6 md:px-10 relative z-10">
            <div className="grid grid-cols-12 gap-6 mb-20">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-sm uppercase tracking-[0.2em] text-ochre-200 flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-ochre-200" />
                  The journey
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="font-display text-display-lg text-cream-50 text-balance">
                  From application to{" "}
                  <em className="font-light text-ochre-200">alumnus</em>,
                  <br />
                  in five steps.
                </h2>
              </div>
            </div>

            {/* Steps */}
            <ol className="space-y-px">
              {[
                {
                  number: "01",
                  title: "Submit your application",
                  description:
                    "Complete the registration in under ten minutes. We ask for your NYSC details, educational background, and a short statement of why you're interested.",
                  duration: "10 minutes",
                },
                {
                  number: "02",
                  title: "We confirm your eligibility",
                  description:
                    "Our team verifies your service status and reviews your application. You'll hear back within seven working days with a decision.",
                  duration: "7 working days",
                },
                {
                  number: "03",
                  title: "Join orientation",
                  description:
                    "Successful applicants attend a virtual orientation session and receive their cohort assignment, learning materials, and schedule.",
                  duration: "1 week",
                },
                {
                  number: "04",
                  title: "Twelve weeks of focused learning",
                  description:
                    "Weekend cohort sessions combined with structured weekday assignments. Live instruction, mentor reviews, and a real-world capstone project.",
                  duration: "12 weeks",
                },
                {
                  number: "05",
                  title: "Certification & placement",
                  description:
                    "Complete the capstone, earn a certificate co-signed by NYSC and our industry partners, and join an alumni network with placement support.",
                  duration: "Lifetime access",
                },
              ].map((step) => (
                <li
                  key={step.number}
                  className="grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-t border-cream-50/15"
                >
                  <div className="col-span-12 md:col-span-1">
                    <div className="font-mono text-base tracking-[0.2em] text-ochre-200">
                      {step.number}
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-3">
                    <div className="font-mono text-xs tracking-[0.25em] uppercase text-cream-50/60 mb-3">
                      Step {step.number}
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl text-cream-50 leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <p className="text-lg text-cream-50/85 leading-relaxed text-pretty">
                      {step.description}
                    </p>
                  </div>

                  <div className="col-span-12 md:col-span-2 md:text-right">
                    <div className="font-mono text-xs tracking-[0.25em] uppercase text-cream-50/50 mb-1">
                      Duration
                    </div>
                    <div className="font-display text-xl text-ochre-200">
                      {step.duration}
                    </div>
                  </div>
                </li>
              ))}
              <li className="border-t border-cream-50/15" />
            </ol>
          </div>
        </section>

        {/* ── Eligibility ──────────────────────────────────── */}
        <section className="py-24 md:py-32">
          <div className="max-w-8xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-12 gap-6 md:gap-10">
              <div className="col-span-12 md:col-span-4">
                <div className="md:sticky md:top-32">
                  <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6">
                    <span className="w-8 h-px bg-emerald-500" />
                    Eligibility
                  </div>
                  <h2 className="font-display text-display-md text-ink-900 leading-[1.05] tracking-tight text-balance">
                    Who this{" "}
                    <em className="font-light text-emerald-500">is for</em> — and isn&apos;t.
                  </h2>
                  <p className="text-lg text-ink-600 mt-6 leading-relaxed">
                    We keep the bar accessible but the commitment real. The programme is
                    designed for serving corps members ready to invest twelve focused
                    weeks in their professional future.
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-8 md:pl-8 space-y-12">
                {/* Required */}
                <div>
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-mono text-sm tracking-[0.2em] uppercase text-emerald-500">
                      Required
                    </span>
                    <span className="flex-1 h-px bg-ink-900/15" />
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Currently serving as a member of the National Youth Service Corps (NYSC)",
                      "Hold at minimum an OND, HND, or Bachelor's degree from a recognised institution",
                      "Possess a personal laptop or reliable access to one",
                      "Have moderate to reliable internet connectivity",
                      "Commit to twelve weeks of part-time study (approximately 10–15 hours weekly)",
                      "Genuine interest in building a career in technology",
                    ].map((req, i) => (
                      <li key={i} className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-ochre-300 tracking-wider mt-1 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-xl md:text-2xl text-ink-900 leading-snug">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not required */}
                <div>
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-mono text-sm tracking-[0.2em] uppercase text-ochre-400">
                      Not Required
                    </span>
                    <span className="flex-1 h-px bg-ink-900/15" />
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Prior coding or technical experience",
                      "A degree in computer science or a related field",
                      "Specific deployment state — open to corps members nationwide",
                    ].map((item, i) => (
                      <li key={i} className="flex items-baseline gap-4">
                        <span className="font-mono text-emerald-500 text-base shrink-0">
                          ×
                        </span>
                        <span className="text-lg md:text-xl text-ink-600 leading-snug line-through decoration-ochre-300/40">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Faq />
        {/* ── Final CTA ────────────────────────────────────── */}
        <section className="py-24 md:py-32 relative">
          <div className="max-w-8xl mx-auto px-6 md:px-10">
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
                    Service year is a window — short, finite, and uniquely yours to
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
                      We review applications continuously. Apply early — cohort
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
          </div>
        </section> 
      </main>
      <Footer />
    </>
  );
}
