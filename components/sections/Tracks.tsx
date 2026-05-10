import Reveal from "@/components/Reveal";

const tracks = [
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
];

export default function Tracks() {
  return (
    <section id="tracks" className="py-24 md:py-32 relative">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <Reveal>
          <div className="grid grid-cols-12 gap-6 mb-20">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-emerald-500" />
                Three tracks
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-display text-display-lg text-ink-900 text-balance">
                Choose <em className="font-light text-emerald-500">one</em> direction.
                <br />
                Go deep, not wide.
              </h2>
              <p className="text-xl text-ink-600 mt-6 max-w-2xl text-balance">
                Each track is twelve weeks of focused, project-based learning, taught
                by practising professionals from Nigerian and international firms.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Track grid */}
        <Reveal delay={0.15}>
          <div className="space-y-px bg-ink-900/10">
            {tracks.map((track) => (
              <article
                key={track.number}
                className="bg-cream-50 hover:bg-cream-100/60 transition-colors duration-500 group"
              >
                <div className="grid grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 px-2 md:px-4">
                  <div className="col-span-12 md:col-span-1">
                    <div className="font-mono text-sm text-emerald-500 tracking-[0.2em]">
                      № {track.number}
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-4">
                    <h3 className="font-display text-4xl md:text-5xl text-ink-900 leading-[1.05] tracking-tight">
                      {track.title}
                    </h3>
                    <p className="font-display text-xl text-emerald-500 italic font-light mt-4">
                      {track.short}
                    </p>
                  </div>

                  <div className="col-span-12 md:col-span-7 md:pl-8">
                    <p className="text-lg text-ink-700 leading-relaxed text-pretty">
                      {track.description}
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {track.skills.map((skill, i) => (
                        <div key={i} className="flex items-baseline gap-3 text-base">
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
        </Reveal>
      </div>
    </section>
  );
}