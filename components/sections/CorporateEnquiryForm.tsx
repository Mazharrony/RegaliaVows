"use client";

import { useState } from "react";
import { useForm, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { corporateEnquirySchema, type CorporateEnquiryInput } from "@/lib/schemas";
import { cn } from "@/lib/cn";

const steps: { title: string; eyebrow: string; fields: (keyof CorporateEnquiryInput)[] }[] = [
  { eyebrow: "Step I", title: "The Company", fields: ["companyName", "contactName", "role"] },
  { eyebrow: "Step II", title: "The Brief", fields: ["eventType", "vision"] },
  { eyebrow: "Step III", title: "Date & Scale", fields: ["date", "attendees", "location"] },
  { eyebrow: "Step IV", title: "Investment & You", fields: ["budget", "email", "phone", "referral"] },
];

export function CorporateEnquiryForm() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const form = useForm<CorporateEnquiryInput>({
    resolver: zodResolver(corporateEnquirySchema),
    mode: "onBlur",
    defaultValues: {
      kind: "corporate",
      companyName: "",
      contactName: "",
      role: "",
      eventType: undefined,
      vision: "",
      date: "",
      attendees: undefined,
      location: "",
      budget: undefined,
      email: "",
      phone: "",
      referral: "",
      website: "",
    },
  });

  const { register, handleSubmit, trigger, formState } = form;
  const errors = formState.errors;

  async function next() {
    const fields = steps[step].fields as Path<CorporateEnquiryInput>[];
    const ok = await trigger(fields, { shouldFocus: true });
    if (ok) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(data: CorporateEnquiryInput) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setDone(true);
      toast.success("Your brief has been received.");
    } catch {
      toast.error("Something went amiss. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 rounded-card border border-gilded-600/30 bg-pearl-50 p-12 text-center md:p-20"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-gilded text-ink mx-auto">
          <Check size={22} strokeWidth={1.5} />
        </span>
        <h3 className="display mt-8 text-display-md italic text-ink">
          Your brief has been received.
        </h3>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink/85">
          One of the founders will reply personally within two working days,
          from a private inbox. Treatments, references and an indicative
          production plan will follow shortly thereafter.
        </p>
        <p className="mt-10 font-display text-2xl italic text-gilded-600">
          — Regalia Vows
        </p>
      </motion.div>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-16" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0"
        {...register("website")}
      />

      <div className="mb-12">
        <div className="flex items-center justify-between">
          <p className="eyebrow !text-gilded-800">
            {steps[step].eyebrow} of IV
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

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="display text-display-md italic text-ink">
            {steps[step].title}
          </h2>

          <div className="mt-12 space-y-10">
            {step === 0 && (
              <>
                <div className="grid gap-10 md:grid-cols-2">
                  <Field label="Company or organisation" error={errors.companyName?.message}>
                    <input
                      className={input}
                      placeholder="Maison Aurum"
                      {...register("companyName")}
                    />
                  </Field>
                  <Field label="Your name" error={errors.contactName?.message}>
                    <input
                      className={input}
                      placeholder="Layla Haddad"
                      {...register("contactName")}
                    />
                  </Field>
                </div>
                <Field label="Your role (optional)" error={errors.role?.message}>
                  <input
                    className={input}
                    placeholder="Head of Brand · Chief of Staff · Founder…"
                    {...register("role")}
                  />
                </Field>
              </>
            )}

            {step === 1 && (
              <>
                <Field label="The kind of event" error={errors.eventType?.message}>
                  <RadioGroup
                    name="eventType"
                    options={[
                      { value: "brand-launch", label: "Brand Launch · Product Reveal" },
                      { value: "gala", label: "Gala · Awards · Charity Dinner" },
                      { value: "conference", label: "Conference · Summit" },
                      { value: "incentive", label: "Incentive Trip · Off-site" },
                      { value: "private-vip", label: "Private VIP · Family Office" },
                    ]}
                    register={register}
                  />
                </Field>
                <Field
                  label="Tell us about the moment you imagine"
                  error={errors.vision?.message}
                >
                  <textarea
                    rows={6}
                    className={cn(input, "resize-none")}
                    placeholder="A 600-guest reveal at Museum of the Future, a black-tie gala with a private orchestra, a three-day summit at Atlantis…"
                    {...register("vision")}
                  />
                </Field>
              </>
            )}

            {step === 2 && (
              <>
                <div className="grid gap-10 md:grid-cols-2">
                  <Field label="Approximate date" error={errors.date?.message}>
                    <input
                      className={input}
                      placeholder="November 2026"
                      {...register("date")}
                    />
                  </Field>
                  <Field label="Location or region" error={errors.location?.message}>
                    <input
                      className={input}
                      placeholder="Dubai · Abu Dhabi · Riyadh · Undecided"
                      {...register("location")}
                    />
                  </Field>
                </div>
                <Field label="Expected attendees" error={errors.attendees?.message}>
                  <RadioGroup
                    name="attendees"
                    options={[
                      { value: "50-150", label: "50 — 150" },
                      { value: "150-400", label: "150 — 400" },
                      { value: "400-1000", label: "400 — 1,000" },
                      { value: "1000+", label: "1,000 and above" },
                      { value: "unsure", label: "Still scoping" },
                    ]}
                    register={register}
                  />
                </Field>
              </>
            )}

            {step === 3 && (
              <>
                <Field label="Budget range (AED)" error={errors.budget?.message}>
                  <RadioGroup
                    name="budget"
                    options={[
                      { value: "500k-1m", label: "500K — 1M" },
                      { value: "1m-2.5m", label: "1M — 2.5M" },
                      { value: "2.5m-5m", label: "2.5M — 5M" },
                      { value: "5m+", label: "5M and above" },
                      { value: "discuss", label: "Prefer to discuss" },
                    ]}
                    register={register}
                  />
                </Field>
                <div className="grid gap-10 md:grid-cols-2">
                  <Field label="Email" error={errors.email?.message}>
                    <input
                      className={input}
                      type="email"
                      placeholder="you@company.com"
                      {...register("email")}
                    />
                  </Field>
                  <Field label="Phone (optional)" error={errors.phone?.message}>
                    <input
                      className={input}
                      type="tel"
                      placeholder="+971 …"
                      {...register("phone")}
                    />
                  </Field>
                </div>
                <Field label="How did you find us? (optional)">
                  <input
                    className={input}
                    placeholder="Referral, agency partner, press…"
                    {...register("referral")}
                  />
                </Field>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-16 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          data-cursor="link"
          className="group inline-flex items-center gap-3 font-tight text-eyebrow uppercase tracking-widest2 text-ink/85 transition-colors hover:text-ink disabled:pointer-events-none disabled:opacity-40"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
          Back
        </button>

        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={next}
            data-cursor="link"
            className="group inline-flex items-center gap-3 bg-ink px-8 py-4 font-tight text-eyebrow uppercase tracking-widest2 text-pearl transition-all hover:bg-gilded-600 hover:text-ink"
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
            {submitting ? "Sending…" : "Send Brief"}
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </button>
        )}
      </div>
    </form>
  );
}

const input =
  "w-full border-b border-ink/20 bg-transparent py-4 font-display text-2xl italic text-ink placeholder:text-ink/30 focus:border-gilded-600 focus:outline-none transition-colors";

function Field({
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

function RadioGroup({
  name,
  options,
  register,
}: {
  name: keyof CorporateEnquiryInput;
  options: { value: string; label: string }[];
  register: ReturnType<typeof useForm<CorporateEnquiryInput>>["register"];
}) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {options.map((o) => (
        <label
          key={o.value}
          data-cursor="link"
          className="group flex cursor-pointer items-center gap-4 border border-ink/15 px-5 py-4 transition-all hover:border-gilded-600 hover:bg-ink/[0.03] has-[:checked]:border-gilded-600 has-[:checked]:bg-gilded/10"
        >
          <input
            type="radio"
            value={o.value}
            className="peer sr-only"
            {...register(name)}
          />
          <span className="relative grid h-4 w-4 place-items-center rounded-full border border-ink/40 transition-all peer-checked:border-gilded-600">
            <span className="h-2 w-2 rounded-full bg-gilded-600 opacity-0 transition-opacity peer-checked:opacity-100 group-has-[:checked]:opacity-100" />
          </span>
          <span className="font-display text-lg italic text-ink">{o.label}</span>
        </label>
      ))}
    </div>
  );
}
