"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";

import {
  fullRegistrationSchema,
  personalSchema,
  nyscSchema,
  educationSchema,
  motivationSchema,
  NIGERIAN_STATES,
  TRACKS,
  type FullRegistration,
} from "@/lib/validation/registration";

import Stepper from "./Stepper";
import { Input, Select, Textarea, RadioGroup, Checkbox } from "./Fields";

// ── Step config ──────────────────────────────────────────
const STEPS = [
  { number: "01", label: "About You", title: "Personal" },
  { number: "02", label: "NYSC", title: "Service" },
  { number: "03", label: "Background", title: "Education" },
  { number: "04", label: "Motivation", title: "Track" },
] as const;

const STEP_FIELDS = {
  0: ["fullName", "email", "phone", "gender"] as const,
  1: ["stateCode", "serviceYear", "batch", "stream", "deploymentState", "deploymentLga", "cdsGroup", "callUpNumber"] as const,
  2: ["educationLevel", "institutionName", "courseOfStudy", "graduationYear", "track"] as const,
  3: ["priorExperience", "motivation", "hasLaptop", "internetAccess", "consentGiven"] as const,
} as const;

const stateOptions = NIGERIAN_STATES.map((s) => ({ value: s, label: s }));

// ── Step 1: Personal ────────────────────────────────────
function StepPersonal() {
  const { register, watch, setValue, formState: { errors } } =
    useFormContext<FullRegistration>();
  const gender = watch("gender");

  return (
    <div className="space-y-8">
      <Input
        label="Full name"
        placeholder="As written on your NYSC documents"
        required
        error={errors.fullName?.message}
        {...register("fullName")}
      />
      <div className="grid md:grid-cols-2 gap-8">
        <Input
          label="Email address"
          type="email"
          placeholder="you@example.com"
          required
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Phone number"
          type="tel"
          placeholder="0801 234 5678"
          required
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>
      <RadioGroup
        label="Gender"
        name="gender"
        required
        value={gender}
        onChange={(v) =>
          setValue(
            "gender",
            v as "male" | "female" | "prefer_not_to_say",
            { shouldValidate: true }
          )
        }
        error={errors.gender?.message}
        options={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "prefer_not_to_say", label: "Prefer not to say" },
        ]}
      />
    </div>
  );
}

// ── Step 2: NYSC ────────────────────────────────────────
function StepNysc() {
  const { register, watch, setValue, formState: { errors } } =
    useFormContext<FullRegistration>();
  const batch = watch("batch");
  const stream = watch("stream");

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Input
          label="State code"
          placeholder="e.g. EN/24A/1234"
          required
          error={errors.stateCode?.message}
          hint="Format: STATE/YEAR+BATCH/NUMBER"
          {...register("stateCode", {
            setValueAs: (v: string) =>
              typeof v === "string" ? v.toUpperCase() : v,
          })}
        />
        <Input
          label="Call-up number"
          placeholder="Optional"
          error={errors.callUpNumber?.message}
          {...register("callUpNumber")}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Input
          label="Service year"
          placeholder="2026"
          required
          error={errors.serviceYear?.message}
          {...register("serviceYear")}
        />
        <RadioGroup
          label="Batch"
          name="batch"
          required
          value={batch}
          onChange={(v) =>
            setValue("batch", v as "A" | "B" | "C", { shouldValidate: true })
          }
          error={errors.batch?.message}
          options={[
            { value: "A", label: "A" },
            { value: "B", label: "B" },
            { value: "C", label: "C" },
          ]}
        />
        <RadioGroup
          label="Stream"
          name="stream"
          value={stream || ""}
          onChange={(v) =>
            setValue("stream", v as "I" | "II" | "", {
              shouldValidate: true,
            })
          }
          error={errors.stream?.message}
          options={[
            { value: "I", label: "Stream I" },
            { value: "II", label: "Stream II" },
          ]}
        />
      </div>

      <Select
        label="State of deployment"
        required
        placeholder="Select your deployment state"
        error={errors.deploymentState?.message}
        options={stateOptions}
        {...register("deploymentState")}
      />

      <div className="grid md:grid-cols-2 gap-8">
        <Input
          label="Local Government Area"
          placeholder="LGA of your PPA"
          required
          error={errors.deploymentLga?.message}
          {...register("deploymentLga")}
        />
        <Input
          label="CDS group"
          placeholder="Optional"
          error={errors.cdsGroup?.message}
          {...register("cdsGroup")}
        />
      </div>
    </div>
  );
}

// ── Step 3: Education + Track ───────────────────────────
function StepEducation() {
  const { register, watch, setValue, formState: { errors } } =
    useFormContext<FullRegistration>();
  const track = watch("track");

  return (
    <div className="space-y-8">
      <Select
        label="Highest qualification"
        required
        placeholder="Select your highest qualification"
        error={errors.educationLevel?.message}
        options={[
          { value: "ond", label: "Ordinary National Diploma (OND)" },
          { value: "hnd", label: "Higher National Diploma (HND)" },
          { value: "bachelors", label: "Bachelor's Degree" },
          { value: "masters", label: "Master's Degree" },
          { value: "phd", label: "Doctorate (PhD)" },
          { value: "other", label: "Other" },
        ]}
        {...register("educationLevel")}
      />

      <div className="grid md:grid-cols-2 gap-8">
        <Input
          label="Institution name"
          placeholder="University of Nigeria, Nsukka"
          required
          error={errors.institutionName?.message}
          {...register("institutionName")}
        />
        <Input
          label="Course of study"
          placeholder="Computer Science"
          required
          error={errors.courseOfStudy?.message}
          {...register("courseOfStudy")}
        />
      </div>

      <Input
        label="Year of graduation"
        placeholder="2024"
        error={errors.graduationYear?.message}
        {...register("graduationYear")}
      />

      <RadioGroup
        label="Choose your track"
        name="track"
        required
        variant="card"
        value={track}
        onChange={(v) =>
          setValue(
            "track",
            v as "artificial_intelligence" | "data_protection" | "cybersecurity",
            { shouldValidate: true }
          )
        }
        error={errors.track?.message}
        options={TRACKS.map((t) => ({
          value: t.value,
          label: t.label,
          description: t.description,
        }))}
      />
    </div>
  );
}

// ── Step 4: Motivation ──────────────────────────────────
function StepMotivation() {
  const { register, watch, setValue, formState: { errors } } =
    useFormContext<FullRegistration>();
  const hasLaptop = watch("hasLaptop");
  const internet = watch("internetAccess");
  const consent = watch("consentGiven");
  const motivation = watch("motivation") || "";

  return (
    <div className="space-y-8">
      <Textarea
        label="Prior experience"
        placeholder="If you've done any related courses, projects, or work, briefly mention them. Otherwise, leave blank — no experience required."
        error={errors.priorExperience?.message}
        {...register("priorExperience")}
      />

      <Textarea
        label="Why this track, why now?"
        placeholder="Tell us in a few sentences what drew you to your chosen track and how you plan to use the skills."
        required
        error={errors.motivation?.message}
        hint={`${motivation.length} / 2000 characters`}
        {...register("motivation")}
      />

      <div className="grid md:grid-cols-2 gap-8">
        <RadioGroup
          label="Do you have access to a laptop?"
          name="hasLaptop"
          required
          variant="stacked"
          value={hasLaptop}
          onChange={(v) =>
            setValue("hasLaptop", v as "yes" | "no", { shouldValidate: true })
          }
          error={errors.hasLaptop?.message}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No — I'd need equipment loan support" },
          ]}
        />
        <RadioGroup
          label="Internet access"
          name="internetAccess"
          required
          variant="stacked"
          value={internet}
          onChange={(v) =>
            setValue(
              "internetAccess",
              v as "reliable" | "moderate" | "limited",
              { shouldValidate: true }
            )
          }
          error={errors.internetAccess?.message}
          options={[
            { value: "reliable", label: "Reliable broadband" },
            { value: "moderate", label: "Moderate (mobile data)" },
            { value: "limited", label: "Limited connectivity" },
          ]}
        />
      </div>

      <div className="pt-6 border-t border-ink-900/10">
        <Checkbox
          name="consentGiven"
          required
          checked={consent === "yes"}
          onChange={(c) =>
            setValue(
              "consentGiven",
              c ? "yes" : ("" as "yes"),
              { shouldValidate: true }
            )
          }
          error={errors.consentGiven?.message}
          label={
            <>
              I consent to the NYSC Tech Skills Initiative collecting and
              processing the personal data submitted in this form for the purpose
              of evaluating my application, contacting me about the programme,
              and managing my participation if accepted. I understand my rights
              under the <strong>Nigeria Data Protection Act</strong>, including
              the right to access, correct, or delete my data.
            </>
          }
        />
      </div>
    </div>
  );
}

// ── Main form ──────────────────────────────────────────

export default function RegistrationForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [furthestStep, setFurthestStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const methods = useForm<FullRegistration>({
    resolver: zodResolver(fullRegistrationSchema),
    mode: "onChange",
    defaultValues: {
      gender: undefined,
      batch: undefined,
      stream: "",
      track: undefined,
      educationLevel: undefined,
      hasLaptop: undefined,
      internetAccess: undefined,
      serviceYear: "2026",
    },
  });

  // Validate the current step's fields, advance if they pass
  const goNext = useCallback(async () => {
    const fields = STEP_FIELDS[currentStep as keyof typeof STEP_FIELDS];
    const isStepValid = await methods.trigger(
      fields as readonly (keyof FullRegistration)[]
    );

    if (isStepValid) {
      const next = Math.min(currentStep + 1, STEPS.length - 1);
      setCurrentStep(next);
      setFurthestStep((prev) => Math.max(prev, next));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentStep, methods]);

  const goBack = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Final submission 
  const onSubmit = methods.handleSubmit(async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const body = await res.json();

      if (!res.ok) {
        setSubmitError(body.message || "Submission failed. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Success — redirect to confirmation page with the reference code
      router.push(`/confirmation?ref=${encodeURIComponent(body.referenceCode)}`);
    } catch (err) {
      console.error(err);
      setSubmitError(
        "We couldn't reach our servers. Check your connection and try again."
      );
      setIsSubmitting(false);
    }
  });

  return (
    <FormProvider {...methods}>
      <div className="space-y-12">
        <Stepper
          steps={STEPS as unknown as { number: string; label: string; title: string }[]}
          currentStep={currentStep}
          furthestStep={furthestStep}
          onStepClick={(idx) => idx <= furthestStep && setCurrentStep(idx)}
        />

        <form onSubmit={onSubmit}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-10">
                <div className="font-mono text-xs tracking-[0.25em] uppercase text-emerald-500 mb-3">
                  Section {String(currentStep + 1).padStart(2, "0")} of{" "}
                  {String(STEPS.length).padStart(2, "0")}
                </div>
                <h2 className="font-display text-display-sm md:text-display-md text-ink-900 leading-[1.05] text-balance">
                  {currentStep === 0 && (
                    <>
                      Let&apos;s start with the{" "}
                      <em className="font-light text-emerald-500">basics</em>.
                    </>
                  )}
                  {currentStep === 1 && (
                    <>
                      Now your{" "}
                      <em className="font-light text-emerald-500">service</em>{" "}
                      details.
                    </>
                  )}
                  {currentStep === 2 && (
                    <>
                      Your background, and the track you{" "}
                      <em className="font-light text-emerald-500">choose</em>.
                    </>
                  )}
                  {currentStep === 3 && (
                    <>
                      One more thing —{" "}
                      <em className="font-light text-emerald-500">why</em>.
                    </>
                  )}
                </h2>
              </div>

              <div className="bg-cream-50 border border-ink-900/10 p-8 md:p-12">
                {currentStep === 0 && <StepPersonal />}
                {currentStep === 1 && <StepNysc />}
                {currentStep === 2 && <StepEducation />}
                {currentStep === 3 && <StepMotivation />}
              </div>
            </motion.div>
          </AnimatePresence>

          {submitError && (
            <div className="mt-6 p-5 border border-red-700/30 bg-red-50 text-sm text-red-900">
              <strong className="font-mono text-xs uppercase tracking-wider">
                Error
              </strong>
              <p className="mt-1.5">{submitError}</p>
            </div>
          )}

          <div className="mt-10 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-ink-900/10">
            <button
              type="button"
              onClick={goBack}
              disabled={currentStep === 0 || isSubmitting}
              className="font-sans text-base text-ink-700 hover:text-emerald-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <span aria-hidden>←</span> Previous
            </button>

            <div className="flex items-center gap-4">
              <span className="font-mono text-sm tracking-[0.25em] uppercase text-ink-500">
                {currentStep === STEPS.length - 1
                  ? "Final step"
                  : `Next: ${STEPS[currentStep + 1].title}`}
              </span>
              {currentStep < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink-900 text-cream-50 text-base tracking-wide hover:bg-emerald-700 transition-colors border border-ink-900 hover:border-emerald-700 group"
                >
                  Continue
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink-900 text-cream-50 text-base tracking-wide hover:bg-emerald-700 transition-colors border border-ink-900 hover:border-emerald-700 group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-3 h-3 border-2 border-cream-50 border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <span
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden
                      >
                        →
                      </span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}