"use client";

import {
  ReactNode,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  Ref,
} from "react";

// ── Wrapper: shared label/error/hint chrome ──────────────
interface FieldWrapperProps {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  htmlFor?: string;
}

export function FieldWrapper({
  label,
  required,
  error,
  hint,
  children,
  htmlFor,
}: FieldWrapperProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="font-mono text-sm uppercase tracking-[0.15em] text-ink-700 block"
      >
        {label}
        {required && <span className="text-ochre-300 ml-1">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="text-sm text-ink-500 mt-1.5">{hint}</p>
      )}
      {error && (
        <p className="text-sm text-red-700 mt-1.5 flex items-start gap-1.5">
          <span aria-hidden>↳</span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

// ── Shared field styles ───────────────────────────────────
const fieldBaseClasses =
  "w-full bg-transparent border-0 border-b border-ink-700/30 px-0 py-4 text-xl text-ink-900 font-display placeholder:text-ink-400 placeholder:font-sans placeholder:text-lg focus:border-emerald-500 focus:ring-0 transition-colors duration-200 outline-none";

// ── Text input ───────────────────────────────────────────
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  ref?: Ref<HTMLInputElement>;
}

export function Input({
  label,
  error,
  hint,
  required,
  id,
  ref,
  ...props
}: InputProps) {
  const fieldId =
    id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <FieldWrapper
      label={label}
      required={required}
      error={error}
      hint={hint}
      htmlFor={fieldId}
    >
      <input
        ref={ref}
        id={fieldId}
        className={`${fieldBaseClasses} ${error ? "border-red-500" : ""}`}
        aria-invalid={!!error}
        {...props}
      />
    </FieldWrapper>
  );
}

// ── Select ───────────────────────────────────────────────
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
  ref?: Ref<HTMLSelectElement>;
}

export function Select({
  label,
  error,
  hint,
  required,
  options,
  placeholder,
  id,
  ref,
  ...props
}: SelectProps) {
  const fieldId =
    id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <FieldWrapper
      label={label}
      required={required}
      error={error}
      hint={hint}
      htmlFor={fieldId}
    >
      <select
        ref={ref}
        id={fieldId}
        className={`${fieldBaseClasses} cursor-pointer ${error ? "border-red-500" : ""}`}
        aria-invalid={!!error}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}

// ── Textarea ─────────────────────────────────────────────
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  ref?: Ref<HTMLTextAreaElement>;
}

export function Textarea({
  label,
  error,
  hint,
  required,
  id,
  ref,
  ...props
}: TextareaProps) {
  const fieldId =
    id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <FieldWrapper
      label={label}
      required={required}
      error={error}
      hint={hint}
      htmlFor={fieldId}
    >
      <textarea
        ref={ref}
        id={fieldId}
        className={`${fieldBaseClasses} min-h-30 py-3 resize-y leading-relaxed ${
          error ? "border-red-500" : ""
        }`}
        aria-invalid={!!error}
        {...props}
      />
    </FieldWrapper>
  );
}

// ── Radio group ──────────────────────────────────────────
interface RadioGroupProps {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  hint?: string;
  options: { value: string; label: string; description?: string }[];
  value?: string;
  onChange?: (value: string) => void;
  variant?: "inline" | "stacked" | "card";
}

export function RadioGroup({
  label,
  name,
  required,
  error,
  hint,
  options,
  value,
  onChange,
  variant = "inline",
}: RadioGroupProps) {
  if (variant === "card") {
    return (
      <FieldWrapper label={label} required={required} error={error} hint={hint}>
        <div className="grid gap-3 mt-2">
          {options.map((opt) => (
            <label
              key={opt.value}
              className={`group flex items-start gap-4 p-5 border cursor-pointer transition-all ${
                value === opt.value
                  ? "border-emerald-500 bg-emerald-50/50"
                  : "border-ink-900/15 hover:border-ink-900/40"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={(e) => onChange?.(e.target.value)}
                className="sr-only"
              />
              <span
                className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                  value === opt.value
                    ? "border-emerald-500 bg-emerald-500"
                    : "border-ink-900/30 group-hover:border-ink-900/60"
                }`}
              >
                {value === opt.value && (
                  <span className="w-1.5 h-1.5 bg-cream-50 rounded-full" />
                )}
              </span>
              <span className="flex-1">
                <span className="font-display text-xl text-ink-900 leading-tight block">
                  {opt.label}
                </span>
                {opt.description && (
                  <span className="text-base text-ink-600 mt-1.5 leading-relaxed block">
                    {opt.description}
                  </span>
                )}
              </span>
            </label>
          ))}
        </div>
      </FieldWrapper>
    );
  }

  return (
    <FieldWrapper label={label} required={required} error={error} hint={hint}>
      <div
        className={`mt-2 ${
          variant === "stacked"
            ? "flex flex-col gap-3"
            : "flex flex-wrap gap-x-6 gap-y-3"
        }`}
      >
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="sr-only"
            />
            <span
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                value === opt.value
                  ? "border-emerald-500 bg-emerald-500"
                  : "border-ink-900/30 group-hover:border-ink-900/60"
              }`}
            >
              {value === opt.value && (
                <span className="w-1.5 h-1.5 bg-cream-50 rounded-full" />
              )}
            </span>
            <span className="font-display text-lg text-ink-900">
              {opt.label}
            </span>
          </label>
        ))}
      </div>
    </FieldWrapper>
  );
}

// ── Checkbox ─────────────────────────────────────────────
interface CheckboxProps {
  label: string | ReactNode;
  required?: boolean;
  error?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
}

export function Checkbox({
  label,
  required,
  error,
  checked,
  onChange,
  name,
}: CheckboxProps) {
  return (
    <div>
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="sr-only"
        />
        <span
          className={`mt-0.5 w-5 h-5 border-2 flex items-center justify-center shrink-0 transition-colors ${
            checked
              ? "border-emerald-500 bg-emerald-500"
              : "border-ink-900/30 group-hover:border-ink-900/60"
          }`}
        >
          {checked && (
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path
                d="M1 5L4.5 8.5L11 1"
                stroke="#FBF8F1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <span className="text-base text-ink-700 leading-relaxed">
          {label}
          {required && <span className="text-ochre-400 ml-1">*</span>}
        </span>
      </label>
      {error && (
        <p className="text-sm text-red-700 mt-1.5 ml-8 flex items-start gap-1.5">
          <span aria-hidden>↳</span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}