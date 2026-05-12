import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-100 mt-32">
      <div className="max-w-[88rem] mx-auto px-6 md:px-10 py-20">
        {/* Top — large editorial wordmark */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-cream-100/10">
          <div className="md:col-span-7">
            <div className="font-mono text-sm tracking-[0.2em] uppercase text-emerald-200 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-emerald-200" />
              Equipping Nigeria&apos;s next generation
            </div>
            <h2 className="font-display text-display-lg text-cream-50 leading-[0.95] tracking-tight">
              Skills that{" "}
              <em className="text-ochre-200 not-italic font-light">outlast</em>
              <br />
              service year.
            </h2>
            <Link
              href="/register"
              className="inline-flex items-center gap-3 mt-10 font-sans text-base text-cream-50 border-b border-cream-50/30 hover:border-ochre-200 hover:text-ochre-200 pb-1 transition-colors"
            >
              Begin your application
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <div className="font-mono text-xs tracking-[0.25em] uppercase text-cream-100/50 mb-4">
                Programme
              </div>
              <ul className="space-y-3">
                {[
                  ["About", "/about"],
                  ["Tracks", "/#tracks"],
                  ["Curriculum", "/programme"],
                  ["FAQ", "/#faq"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="font-sans text-base text-cream-100/80 hover:text-cream-50 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-xs tracking-[0.25em] uppercase text-cream-100/50 mb-4">
                Support
              </div>
              <ul className="space-y-3">
                {[
                  ["Contact", "/contact"],
                  ["Privacy", "/privacy"],
                  ["Terms", "/terms"],
                  ["NDPA", "/data-protection"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="font-sans text-base text-cream-100/80 hover:text-cream-50 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-cream-100/40">
            © {new Date().getFullYear()} NYSC Tech Skills Initiative · A national
            programme
          </div>
          <div className="hidden md:flex items-center gap-6 font-mono text-xs tracking-[0.2em] uppercase text-cream-100/40">
            <span>Headquarters · Abuja</span>
            <span className="w-px h-3 bg-cream-100/20" />
            <span>Operations · Nationwide</span>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="border-t border-cream-100/10 py-4 overflow-hidden">
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-8 px-4 font-mono text-xs tracking-[0.25em] uppercase text-cream-100/30"
            >
              <span>Artificial Intelligence</span>
              <span>✦</span>
              <span>Data Protection</span>
              <span>✦</span>
              <span>Cybersecurity</span>
              <span>✦</span>
              <span>NYSC Tech Skills Initiative</span>
              <span>✦</span>
              <span>2026 Cohort</span>
              <span>✦</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}