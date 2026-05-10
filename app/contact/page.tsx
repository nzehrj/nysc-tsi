"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input, Select, Textarea } from "@/components/form/Fields";
import { contactSchema, type ContactData } from "@/lib/validation/contact";

const SUBJECT_OPTIONS = [
  { value: "application", label: "About my application" },
  { value: "partnership", label: "Partnership enquiry" },
  { value: "press", label: "Press enquiry" },
  { value: "general", label: "Something else" },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const body = await res.json();

      if (!res.ok) {
        setSubmitError(body.message || "Something went wrong.");
        setIsSubmitting(false);
        return;
      }

      setSuccess(true);
      reset();
      setIsSubmitting(false);
    } catch {
      setSubmitError("We couldn't reach our servers. Try again shortly.");
      setIsSubmitting(false);
    }
  });

  return (
    <>
      <Header />
      <main className="flex-1 pt-32 md:pt-40 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {/* Page intro */}
          <div className="mb-16 md:mb-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-sm tracking-[0.2em] uppercase text-ink-600 hover:text-emerald-500 transition-colors mb-8"
            >
              <span aria-hidden>←</span> Back to home
            </Link>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-emerald-500" />
                  Contact
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h1 className="font-display text-display-lg text-ink-900 leading-[0.95] tracking-tight text-balance">
                  Talk to <em className="font-light text-emerald-500">us</em>.
                </h1>
                <p className="font-display text-3xl text-ink-700 mt-8 leading-snug max-w-2xl text-balance">
                  Questions about applying, partnerships, press, or anything else.
                  We typically reply within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Success state */}
          {success ? (
            <div className="bg-emerald-700 text-cream-50 p-10 md:p-16 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-10 -right-6 font-display text-[20rem] leading-none text-cream-50/5 select-none pointer-events-none"
              >
                ✦
              </div>
              <div className="relative z-10">
                <div className="font-mono text-lg tracking-[0.25em] uppercase text-ochre-200 mb-4">
                   Message sent
                </div>
                <h2 className="font-display text-display-md text-cream-50 leading-[1.05] tracking-tight">
                  Thank you. <em className="font-light text-ochre-200">We&apos;ll be in touch.</em>
                </h2>
                <p className="text-xl text-cream-50/85 mt-6 max-w-md leading-relaxed">
                  Our team typically replies within 24 hours. Check your
                  inbox and your spam folder, just in case.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-10 inline-flex items-center gap-2 font-sans text-lg text-cream-50 border-b border-cream-50/30 hover:border-ochre-200 hover:text-ochre-200 pb-1 transition-colors"
                >
                  Send another message
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="bg-cream-50 border border-ink-900/10 p-8 md:p-12">
              <div className="space-y-8">
                <Input
                  label="Full name"
                  placeholder="Your name"
                  required
                  error={errors.fullName?.message}
                  {...register("fullName")}
                />

                <div className="grid md:grid-cols-2 gap-8">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    error={errors.email?.message}
                    {...register("email")}
                  />
                  <Input
                    label="Phone"
                    type="tel"
                    placeholder="Optional"
                    error={errors.phone?.message}
                    {...register("phone")}
                  />
                </div>

                <Select
                  label="Subject"
                  required
                  placeholder="What's this about?"
                  options={SUBJECT_OPTIONS}
                  error={errors.subject?.message}
                  {...register("subject")}
                />

                <Textarea
                  label="Message"
                  placeholder="Tell us what's on your mind..."
                  required
                  error={errors.message?.message}
                  {...register("message")}
                />
              </div>

              {submitError && (
                <div className="mt-6 p-5 border border-red-700/30 bg-red-50 text-lg text-red-900">
                  <strong className="font-mono text-xs uppercase tracking-wider">Error</strong>
                  <p className="mt-1.5">{submitError}</p>
                </div>
              )}

              <div className="mt-10 flex items-center justify-between gap-4 pt-8 border-t border-ink-900/10">
                <span className="font-mono text-sm tracking-[0.25em] uppercase text-ink-500">
                  We reply within 24 hours.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink-900 text-cream-50 text-base tracking-wide hover:bg-emerald-700 transition-colors border border-ink-900 hover:border-emerald-700 group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-3 h-3 border-2 border-cream-50 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Help footer */}
          <div className="mt-20 pt-12 border-t border-ink-900/10 grid md:grid-cols-2 gap-8">
            <div>
              <div className="font-mono text-sm tracking-[0.2em] uppercase text-emerald-500 mb-3">
                Email us directly
              </div>
              <p className="text-lg text-ink-700 leading-relaxed">
                <a
                  href="mailto:support@nysc-tsi.org"
                  className="text-emerald-500 underline underline-offset-4 hover:text-emerald-700"
                >
                  support@nysc-tsi.org
                </a>
              </p>
            </div>
            <div>
              <div className="font-mono text-sm tracking-[0.2em] uppercase text-emerald-500 mb-3">
                Headquarters
              </div>
              <p className="text-lg text-ink-700 leading-relaxed">
                Abuja, Federal Capital Territory<br />
                Nigeria
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}