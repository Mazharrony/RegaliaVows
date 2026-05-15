"use client";

import { useState } from "react";
import { useForm, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { enquirySchema, type EnquiryInput } from "@/lib/schemas";
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
      <SuccessPanel
        title="Your letter has been received."
        body="One of the founders will reply personally within two working days, from a private inbox. In the meantime, a glass of something cold — you have done the hardest part."
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
              <div className="grid gap-10 md:grid-cols-2">
                <Field label="Your name" error={errors.partnerOneName?.message}>
                  <input
                    className={inputClass}
                    placeholder="Your first name"
                    {...register("partnerOneName")}
                  />
                </Field>
                <Field label="Your partner's name" error={errors.partnerTwoName?.message}>
                  <input
                    className={inputClass}
                    placeholder="Their first name"
                    {...register("partnerTwoName")}
                  />
                </Field>
              </div>
            )}

            {step === 1 && (
              <>
                <Field label="The kind of commission" error={errors.service?.message}>
                  <RadioGroup<EnquiryInput>
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
                    className={cn(inputClass, "resize-none")}
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
                      className={inputClass}
                      placeholder="November 2026"
                      {...register("date")}
                    />
                  </Field>
                  <Field label="Location or region" error={errors.location?.message}>
                    <input
                      className={inputClass}
                      placeholder="Dubai · Lake Como · Undecided"
                      {...register("location")}
                    />
                  </Field>
                </div>
                <Field label="Expected guests" error={errors.guests?.message}>
                  <RadioGroup<EnquiryInput>
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
                  <RadioGroup<EnquiryInput>
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
                      className={inputClass}
                      type="email"
                      placeholder="you@private.com"
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
                    placeholder="Referral · publication · social"
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
        submitLabel="Send Enquiry"
      />
    </form>
  );
}
