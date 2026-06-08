import { z } from "zod";

export const enquirySchema = z.object({
  kind: z.literal("wedding"),

  // Step 1 - Couple
  partnerOneName: z.string().min(2, "Please tell us your name."),
  partnerTwoName: z.string().min(2, "Please tell us your partner's name."),

  // Step 2 - Vision
  service: z.enum(["weddings", "proposals", "destination-weddings", "private-events", "honeymoons"], {
    required_error: "Choose a service.",
  }),
  vision: z.string().min(20, "A few sentences, please.").max(2000),

  // Step 3 - Date & Guests
  date: z.string().min(4, "Approximate month and year is fine."),
  guests: z.enum(["intimate", "small", "medium", "grand", "unsure"]),
  location: z.string().min(2, "City or region."),

  // Step 4 - Investment & Contact
  investment: z.enum(["250-500", "500-1000", "1000-2500", "2500+", "discuss"]),
  email: z.string().email("A valid email, please."),
  phone: z.string().min(6).optional().or(z.literal("")),
  referral: z.string().optional(),

  // Honeypot
  website: z.string().max(0).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const corporateEnquirySchema = z.object({
  kind: z.literal("corporate"),

  // Step 1 - Company
  companyName: z.string().min(2, "Please share the company name."),
  contactName: z.string().min(2, "Please tell us your name."),
  role: z.string().optional(),

  // Step 2 - Brief
  eventType: z.enum(
    [
      "exhibition-conference-trade-show",
      "commercial-pr",
      "concert-festival-live",
      "graduation-party",
      "private-public-party",
      "gala-award-night",
    ],
    { required_error: "Choose an event type." },
  ),
  vision: z.string().min(20, "A few sentences, please.").max(2000),

  // Step 3 - Date & Scale
  date: z.string().min(4, "Approximate month and year is fine."),
  attendees: z.enum(["50-150", "150-400", "400-1000", "1000+", "unsure"]),
  location: z.string().min(2, "City or region."),

  // Step 4 - Investment & Contact
  budget: z.enum(["500k-1m", "1m-2.5m", "2.5m-5m", "5m+", "discuss"]),
  email: z.string().email("A valid email, please."),
  phone: z.string().min(6).optional().or(z.literal("")),
  referral: z.string().optional(),

  // Honeypot
  website: z.string().max(0).optional().or(z.literal("")),
});

export type CorporateEnquiryInput = z.infer<typeof corporateEnquirySchema>;

export const combinedEnquirySchema = z.discriminatedUnion("kind", [
  enquirySchema,
  corporateEnquirySchema,
]);
