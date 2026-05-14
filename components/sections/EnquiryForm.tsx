"use client";

import { useState } from "react";
import { useForm, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { enquirySchema, type EnquiryInput } from "@/lib/schemas";
import { cn } from "@/lib/cn";

const steps: { title: string; eyebrow: string; fields: (keyof EnquiryInput)[] }[] = [
  { eyebrow: "Step I", title: "The Couple", fields: ["partnerOneName", "partnerTwoName"] },
  { eyebrow: "Step II", title: "The Vision", fields: ["service", "vision"] },
  { eyebrow: "Step III", title: "Date & Guests", fields: ["date", "guests", "location"] },
  { eyebrow: "Step IV", title: "Investment & You", fields: ["investment", "email", "phone", "referral"] },
];

export function EnquiryForm() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const form = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    mode: "onBlur",
    defaultValues: {
      kind: "wedding",
      partnerOneName: "",
      partnerTwoName: "",
      service: undefined,
      vision: "",
      date: "",
      guests: undefined,
      location: "",
      investment: undefined,
      email: "",
      phone: "",
      referral: "",
      website: "",
    },
  });

  const { register, handleSubmit, trigger, formState } = form;
  const errors = formState.errors;

  async function next() {
    const fields = steps[step].fields as Path<EnquiryInput>[];
    const ok = await trigger(fields, { shouldFocus: true });
    if (ok) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(data: EnquiryInput) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setDone(true);
      toast.success("Your letter has been received.");
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
          Your letter has been received.
        </h3>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink/85">
          One of the founders will reply personally within two working days,
          from a private inbox. In the meantime, a glass of something cold —
          you have done the hardest part.
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
              <div className="grid gap-10 md:grid-cols-2">
                <Field label="Your name" error={errors.partnerOneName?.message}>
                  <input
                    className={input}
                    placeholder="Liyana"
                    {...register("partnerOneName")}
                  />
                </Field>
                <Field label="Your partner's name" error={errors.partnerTwoName?.message}>
                  <input
                    className={input}
                    placeholder="Idris"
                    {...register("partnerTwoName")}
                  />
                </Field>
              </div>
            )}

            {step === 1 && (
              <>
                <Field label="The kind of commission" error={errors.service?.message}>
                  <RadioGroup
                    name="service"
                    options={[
                      { value: "weddings", label: "Bespoke Wedding" },
                      { value: "proposals", label: "Cinematic Proposal" },
                      { value: "destination-weddings", label: "Destination Wedding" },
                      { value: "private-events", label: "Private Event" },
                      { value: "honeymoons", label: "Honeymoon" },
                    ]}
                    register={register}
                  />
                </Field>
                <Field
                  label="Tell us about the celebration you imagine"
                  error={errors.vision?.message}
                >
                  <textarea
                    rows={6}
                    className={cn(input, "resize-none")}
                    placeholder="A morning on a private island, an evening of black-tie under a chandelier of orchids…"
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
                      placeholder="Dubai · Lake Como · Undecided"
                      {...register("location")}
                    />
                  </Field>
                </div>
                <Field label="Expected guests" error={errors.guests?.message}>
                  <RadioGroup
                    name="guests"
                    options={[
                      { value: "intimate", label: "Intimate · up to 30" },
                      { value: "small", label: "Small · 30–100" },
                      { value: "medium", label: "Medium · 100–250" },
                      { value: "grand", label: "Grand · 250+" },
                      { value: "unsure", label: "Still composing" },
                    ]}
                    register={register}
                  />
                </Field>
              </>
            )}

            {step === 3 && (
              <>
                <Field label="Investment range (AED)" error={errors.investment?.message}>
                  <RadioGroup
                    name="investment"
                    options={[
                      { value: "250-500", label: "250K — 500K" },
                      { value: "500-1000", label: "500K — 1M" },
                      { value: "1000-2500", label: "1M — 2.5M" },
                      { value: "2500+", label: "2.5M and above" },
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
                      placeholder="you@private.com"
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
                    placeholder="Referral, Vogue Arabia, Instagram…"
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
            {submitting ? "Sending…" : "Send Enquiry"}
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
  name: keyof EnquiryInput;
  options: { value: string; label: string }[];
  register: ReturnType<typeof useForm<EnquiryInput>>["register"];
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
