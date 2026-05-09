"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is this programme officially recognised by NYSC?",
    a: "Yes. The Tech Skills Initiative is delivered in partnership with the National Youth Service Corps and counts toward the SAED (Skill Acquisition and Entrepreneurship Development) component of service. Successful graduates receive a certificate jointly recognised by NYSC and our industry partners.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing. The programme is fully sponsored. Corps members pay no tuition, no examination fees, and no certificate fees. We expect commitment in return — your time, your attendance, and your effort.",
  },
  {
    q: "Can I do this while still serving at my Place of Primary Assignment?",
    a: "Yes — this is designed for serving corps members. Sessions are structured around weekends, with self-paced weekday assignments. You'll need to commit roughly 10–15 hours per week, but the schedule respects your service obligations.",
  },
  {
    q: "Is the training online or in-person?",
    a: "It's hybrid. Live sessions and the bulk of instruction happen virtually so corps members from any state can attend. Each cohort also has scheduled in-person zonal sessions — typically in Lagos, Abuja, Port Harcourt, Kano, and Enugu — for hands-on labs and networking.",
  },
  {
    q: "What happens after I graduate?",
    a: "You receive a certificate, alumni network access, and active placement support. Our partner companies prioritise NYSC TSI graduates for entry-level roles and internships. The skills you build — and the portfolio of projects — are what employers actually evaluate.",
  },
  {
    q: "Can I switch tracks once I've started?",
    a: "Within the first two weeks, yes — if there's space in your preferred track. After that, you commit to your chosen track to ensure depth of learning. We encourage you to pick carefully; the application asks why you've chosen your track for exactly this reason.",
  },
  {
    q: "What if I don't have a laptop?",
    a: "A laptop is required because the work is hands-on. If access is a barrier, indicate this in your application — we have a limited equipment-loan programme for accepted candidates with demonstrated need.",
  },
  {
    q: "How is my personal data handled?",
    a: "Strictly under Nigeria's NDPA. We collect only what's needed to verify and serve you, store it securely on Nigerian or NDPC-approved infrastructure, never sell or share it with third parties for marketing, and delete it on request after the programme ends.",
  },
];

function FaqItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-ink-900/15">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-7 flex items-start gap-6 md:gap-10 text-left group"
        aria-expanded={open}
      >
        <span className="font-mono text-sm text-emerald-500 tracking-[0.2em] mt-2 shrink-0 w-8">
          {String(idx + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-display text-xl md:text-2xl text-ink-900 leading-tight tracking-tight group-hover:text-emerald-500 transition-colors">
          {q}
        </span>
        <span
          className={`font-display text-2xl md:text-3xl text-emerald-500 mt-1 shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pl-14 md:pl-[4.5rem] pr-12 max-w-3xl">
            <p className="text-lg text-ink-700 leading-relaxed text-pretty">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-cream-100/40">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-emerald-500" />
              FAQ
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-display-lg text-ink-900 text-balance">
              Honest answers to the questions{" "}
              <em className="font-light text-emerald-500">
                you&apos;re actually asking
              </em>
              .
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-start-4 md:col-span-9">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} idx={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}