"use client";

interface Step {
  number: string;
  label: string;
  title: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (index: number) => void;
  furthestStep: number;
}

export default function Stepper({
  steps,
  currentStep,
  onStepClick,
  furthestStep,
}: StepperProps) {
  return (
    <nav aria-label="Application progress" className="w-full">
      <ol className="grid grid-cols-4 gap-px bg-ink-900/10">
        {steps.map((step, idx) => {
          const isCurrent = idx === currentStep;
          const isComplete = idx < currentStep;
          const isAccessible = idx <= furthestStep;

          return (
            <li key={step.number} className="bg-cream-50">
              <button
                type="button"
                onClick={() => isAccessible && onStepClick?.(idx)}
                disabled={!isAccessible}
                className={`w-full text-left p-4 md:p-5 transition-colors ${
                  isAccessible
                    ? "cursor-pointer hover:bg-cream-100"
                    : "cursor-not-allowed opacity-40"
                } ${isCurrent ? "bg-cream-100" : ""}`}
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span
                    className={`font-mono text-sm tracking-[0.2em] ${
                      isCurrent
                        ? "text-emerald-500"
                        : isComplete
                          ? "text-emerald-700"
                          : "text-ink-400"
                    }`}
                  >
                    {step.number}
                  </span>
                  {isComplete && (
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="#1F5524"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div
                  className={`font-mono text-sm tracking-[0.2em] uppercase ${
                    isCurrent ? "text-ink-900" : "text-ink-500"
                  }`}
                >
                  {step.label}
                </div>
                <div
                  className={`font-display text-lg md:text-lg mt-1 leading-tight ${
                    isCurrent ? "text-ink-900" : "text-ink-600"
                  }`}
                >
                  {step.title}
                </div>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}