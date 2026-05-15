"use client";

import { useState } from "react";
import { useForm, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import {
  corporateEnquirySchema,
  type CorporateEnquiryInput,
} from "@/lib/schemas";
import {
  Field,
  Honeypot,
  RadioGroup,
  StepperNav,
  StepperProgress,
  SuccessPanel,
  cn,
  inputClass,
} from "./enquiry/primitives";

const steps: {
  title: string;
  eyebrow: string;
  fields: (keyof CorporateEnquiryInput)[];
}[] = [
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
      <SuccessPanel
        title="Your brief has been received."
        body="One of the founders will reply personally within two working days, from a private inbox. Treatments, references and an indicative production plan will follow shortly thereafter."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-16" noValidate>
      <Honeypot register={register} name="website" />

      <StepperProgress
        eyebrow={steps[step].eyebrow}
        stepIndex={step}
        total={steps.length}
      />

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
                      className={inputClass}
                      placeholder="Company name"
                      {...register("companyName")}
                    />
                  </Field>
                  <Field label="Your name" error={errors.contactName?.message}>
                    <input
                      className={inputClass}
                      placeholder="Full name"
                      {...register("contactName")}
                    />
                  </Field>
                </div>
                <Field label="Your role (optional)" error={errors.role?.message}>
                  <input
                    className={inputClass}
                    placeholder="Head of Brand · Chief of Staff · Founder…"
                    {...register("role")}
                  />
                </Field>
              </>
            )}

            {step === 1 && (
              <>
                <Field label="The kind of event" error={errors.eventType?.message}>
                  <RadioGroup<CorporateEnquiryInput>
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
                    className={cn(inputClass, "resize-none")}
                    placeholder="A press-day reveal, a black-tie gala with a private orchestra, a three-day summit…"
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
                      className={inputClass}
                      placeholder="November 2026"
                      {...register("date")}
                    />
                  </Field>
                  <Field label="Location or region" error={errors.location?.message}>
                    <input
                      className={inputClass}
                      placeholder="Dubai · Abu Dhabi · Riyadh · Undecided"
                      {...register("location")}
                    />
                  </Field>
                </div>
                <Field label="Expected attendees" error={errors.attendees?.message}>
                  <RadioGroup<CorporateEnquiryInput>
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
                  <RadioGroup<CorporateEnquiryInput>
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
                      className={inputClass}
                      type="email"
                      placeholder="you@company.com"
                      {...register("email")}
                    />
                  </Field>
                  <Field label="Phone (optional)" error={errors.phone?.message}>
                    <input
                      className={inputClass}
                      type="tel"
                      placeholder="+971 …"
                      {...register("phone")}
                    />
                  </Field>
                </div>
                <Field label="How did you find us? (optional)">
                  <input
                    className={inputClass}
                    placeholder="Referral · agency partner · press"
                    {...register("referral")}
                  />
                </Field>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <StepperNav
        canBack={step > 0}
        isLast={step === steps.length - 1}
        onBack={back}
        onNext={next}
        submitting={submitting}
        submitLabel="Send Brief"
      />
    </form>
  );
}
