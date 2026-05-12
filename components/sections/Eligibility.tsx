import Reveal from "@/components/Reveal";

const requirements = [
  "Currently serving as a member of the National Youth Service Corps (NYSC)",
  "Hold at minimum an OND, HND, or Bachelor's degree from a recognised institution",
  "Possess a personal laptop or reliable access to one",
  "Have moderate to reliable internet connectivity",
  "Commit to twelve weeks of part-time study (approximately 10–15 hours weekly)",
  "Genuine interest in building a career in technology",
];

const notRequired = [
  "Prior coding or technical experience",
  "A degree in computer science or a related field",
  "Specific deployment state open to corps members nationwide",
];

export default function Eligibility() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[88rem] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4">
              <div className="md:sticky md:top-32">
                <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-emerald-500" />
                  Eligibility
                </div>
                <h2 className="font-display text-display-md text-ink-900 leading-[1.05] tracking-tight text-balance">
                  Who this <em className="font-light text-emerald-500">is for</em>
                  and isn&apos;t.
                </h2>
                <p className="text-lg text-ink-600 mt-6 leading-relaxed">
                  We keep the bar accessible but the commitment real. The programme is
                  designed for serving corps members ready to invest twelve focused
                  weeks in their professional future.
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8 md:pl-8 space-y-12">
              <div>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-mono text-sm tracking-[0.2em] uppercase text-emerald-500">
                    Required
                  </span>
                  <span className="flex-1 h-px bg-ink-900/15" />
                </div>
                <ul className="space-y-4">
                  {requirements.map((req, i) => (
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

              <div>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-mono text-sm tracking-[0.2em] uppercase text-ochre-400">
                    Not Required
                  </span>
                  <span className="flex-1 h-px bg-ink-900/15" />
                </div>
                <ul className="space-y-3">
                  {notRequired.map((item, i) => (
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
        </Reveal>
      </div>
    </section>
  );
}