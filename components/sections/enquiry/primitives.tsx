"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/cn";

/**
 * Shared chrome for both EnquiryForm (couples) and CorporateEnquiryForm.
 * Keeps each form's state machine, schema, and step-bodies local while
 * standardising the editorial look of inputs, radios, progress and buttons.
 */

export const inputClass =
  "w-full border-b border-ink/20 bg-transparent py-4 font-display text-2xl italic text-ink placeholder:text-ink/30 focus:border-gilded-600 focus:outline-none transition-colors";

export function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow !text-gilded-800">{label}</span>
      <span className="mt-3 block">{children}</span>
      {error && (
        <span className="mt-2 block text-xs italic text-red-700">{error}</span>
      )}
    </label>
  );
}

export function RadioGroup<T extends FieldValues>({
  name,
  options,
  register,
}: {
  name: Path<T>;
  options: { value: string; label: string }[];
  register: UseFormRegister<T>;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {options.map((o) => (
        <label
          key={o.value}
          className="group relative flex cursor-pointer items-center gap-4 border border-ink/15 px-5 py-4 transition-all hover:border-gilded-600 has-[:checked]:border-gilded-600 has-[:checked]:bg-gilded/5"
        >
          <input
            type="radio"
            value={o.value}
            {...register(name)}
            className="peer sr-only"
          />
          <span
            aria-hidden
            className="grid h-5 w-5 place-items-center rounded-full border border-ink/30 transition-all peer-checked:border-gilded-600"
          >
            <span className="h-2 w-2 rounded-full bg-gilded-600 opacity-0 transition-opacity peer-checked:opacity-100" />
          </span>
          <span className="font-display text-lg italic text-ink">
            {o.label}
          </span>
        </label>
      ))}
    </div>
  );
}

export function StepperProgress({
  eyebrow,
  stepIndex,
  total,
}: {
  eyebrow: string;
  stepIndex: number;
  total: number;
}) {
  const progress = ((stepIndex + 1) / total) * 100;
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        <p className="eyebrow !text-gilded-800">
          {eyebrow} of {toRoman(total)}
        </p>
        <p className="font-tight text-xs uppercase tracking-widest2 text-ink/85">
          {Math.round(progress)}%
        </p>
      </div>
      <div className="mt-3 h-px w-full bg-ink/10">
        <motion.div
          className="h-full bg-gilded-600"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export function StepperNav({
  canBack,
  isLast,
  onBack,
  onNext,
  submitting,
  submitLabel,
}: {
  canBack: boolean;
  isLast: boolean;
  onBack: () => void;
  onNext: () => void;
  submitting: boolean;
  submitLabel: string;
}) {
  return (
    <div className="mt-16 flex items-center justify-between gap-4">
      <button
        type="button"
        onClick={onBack}
        disabled={!canBack}
        data-cursor="link"
        className="group inline-flex items-center gap-3 font-tight text-eyebrow uppercase tracking-widest2 text-ink/85 transition-colors hover:text-ink disabled:pointer-events-none disabled:opacity-40"
      >
        <ArrowLeft size={16} strokeWidth={1.5} />
        Back
      </button>

      {!isLast ? (
        <button
          type="button"
          onClick={onNext}
          data-cursor="link"
          className="dark-panel group inline-flex items-center gap-3 bg-ink px-8 py-4 font-tight text-eyebrow uppercase tracking-widest2 text-pearl transition-all hover:bg-gilded-600 hover:text-ink"
        >
          Continue
          <ArrowRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform duration-500 group-hover:translate-x-1"
          />
        </button>
      ) : (
        <button
          type="submit"
          disabled={submitting}
          data-cursor="link"
          className="group inline-flex items-center gap-3 bg-gilded px-8 py-4 font-tight text-eyebrow uppercase tracking-widest2 text-ink shadow-gilded transition-all hover:bg-gilded-100 disabled:opacity-60"
        >
          {submitting ? "Sending…" : submitLabel}
          <ArrowRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform duration-500 group-hover:translate-x-1"
          />
        </button>
      )}
    </div>
  );
}

export function SuccessPanel({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mt-12 rounded-card border border-gilded-600/30 bg-pearl-50 p-12 text-center md:p-20"
    >
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gilded text-ink">
        <Check size={22} strokeWidth={1.5} />
      </span>
      <h3 className="display mt-8 text-display-md italic text-ink">{title}</h3>
      <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink/85">
        {body}
      </p>
      <p className="mt-10 font-display text-2xl italic text-gilded-600">
        — Regalia Vows
      </p>
    </motion.div>
  );
}

export function Honeypot<T extends FieldValues>({
  register,
  name,
}: {
  register: UseFormRegister<T>;
  name: Path<T>;
}) {
  return (
    <input
      type="text"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden
      className="absolute left-[-9999px] h-0 w-0"
      {...register(name)}
    />
  );
}

// Tiny helper — keep IV / III labels editorial. Roman numerals only used by
// the stepper, so it lives here.
function toRoman(n: number): string {
  const map: [number, string][] = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let out = "";
  for (const [v, s] of map) {
    while (n >= v) {
      out += s;
      n -= v;
    }
  }
  return out;
}

// Re-export cn for sub-components that need it.
export { cn };
