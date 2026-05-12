import Reveal from "@/components/Reveal";

const steps = [
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
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-emerald-700 text-cream-50 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-10 right-10 md:top-20 md:right-20 font-display text-[20rem] md:text-[30rem] leading-none text-cream-50/3 select-none pointer-events-none"
      >
        ❝
      </div>

      <div className="max-w-[88rem] mx-auto px-6 md:px-10 relative z-10">
        <Reveal>
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
        </Reveal>

        <Reveal delay={0.15}>
          <ol className="space-y-px">
            {steps.map((step) => (
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
        </Reveal>
      </div>
    </section>
  );
}