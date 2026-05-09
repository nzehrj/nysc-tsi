import { z } from "zod";

// ── Patterns ──────────────────────────────────────────────
// Nigerian state code, e.g. EN/24A/1234
const STATE_CODE_REGEX = /^[A-Z]{2}\/\d{2}[A-Z]\/\d{3,5}$/;

// Nigerian phone — 11 digits starting 0, or +234 followed by 10 digits
const NIGERIAN_PHONE_REGEX = /^(\+234|0)[789]\d{9}$/;

// ── Constants reused by the form UI ───────────────────────
export const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
  "Ekiti", "Enugu", "FCT - Abuja", "Gombe", "Imo", "Jigawa",
  "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun",
  "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
] as const;

export const TRACKS = [
  {
    value: "artificial_intelligence",
    label: "Artificial Intelligence",
    description: "Machine learning fundamentals, applied AI, and responsible deployment.",
  },
  {
    value: "data_protection",
    label: "Data Protection",
    description: "NDPA compliance, privacy engineering, and data governance.",
  },
  {
    value: "cybersecurity",
    label: "Cybersecurity",
    description: "Defensive security, threat analysis, and incident response.",
  },
] as const;

// ── Step 1: Personal & contact ────────────────────────────
export const personalSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(200, "Full name is too long")
    .regex(/^[A-Za-z\s'-]+$/, "Use only letters, spaces, hyphens, or apostrophes"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address")
    .max(200),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(NIGERIAN_PHONE_REGEX, "Enter a valid Nigerian phone number"),
  gender: z.enum(["male", "female", "prefer_not_to_say"], {
    message: "Please select an option",
  }),
});

// ── Step 2: NYSC details ──────────────────────────────────
export const nyscSchema = z.object({
  stateCode: z
    .string()
    .min(1, "State code is required")
    .regex(STATE_CODE_REGEX, "Format must be like EN/24A/1234")
    .transform((v) => v.toUpperCase()),
  callUpNumber: z.string().optional(),
  serviceYear: z
    .string()
    .min(1, "Service year is required")
    .regex(/^\d{4}$/, "Enter a 4-digit year"),
  batch: z.enum(["A", "B", "C"], {
    message: "Select your batch",
  }),
  stream: z.enum(["I", "II", ""]).optional(),
  deploymentState: z.enum(NIGERIAN_STATES, {
    message: "Select your state of deployment",
  }),
  deploymentLga: z
    .string()
    .min(2, "LGA name is required")
    .max(100),
  cdsGroup: z.string().optional(),
});

// ── Step 3: Education & Track ─────────────────────────────
export const educationSchema = z.object({
  educationLevel: z.enum(
    ["ond", "hnd", "bachelors", "masters", "phd", "other"],
    { message: "Select your highest qualification" }
  ),
  institutionName: z
    .string()
    .min(2, "Institution name is required")
    .max(200),
  courseOfStudy: z
    .string()
    .min(2, "Course of study is required")
    .max(200),
  graduationYear: z
    .string()
    .regex(/^\d{4}$/, "Enter a 4-digit year")
    .optional()
    .or(z.literal("")),
  track: z.enum(
    ["artificial_intelligence", "data_protection", "cybersecurity"],
    { message: "Choose a track" }
  ),
});

// ── Step 4: Background & motivation ───────────────────────
export const motivationSchema = z.object({
  priorExperience: z.string().max(2000).optional().or(z.literal("")),
  motivation: z
    .string()
    .min(50, "Tell us a little more — at least 50 characters")
    .max(2000, "Keep it under 2000 characters"),
  hasLaptop: z.enum(["yes", "no"], {
    message: "Please answer this",
  }),
  internetAccess: z.enum(["reliable", "moderate", "limited"], {
    message: "Please select an option",
  }),
  consentGiven: z.literal("yes", {
    message: "You must consent to data processing to continue",
  }),
});

// ── Combined schema for full submission ───────────────────
export const fullRegistrationSchema = personalSchema
  .extend(nyscSchema.shape)
  .extend(educationSchema.shape)
  .extend(motivationSchema.shape);

// ── Inferred types ────────────────────────────────────────
export type PersonalData = z.infer<typeof personalSchema>;
export type NyscData = z.infer<typeof nyscSchema>;
export type EducationData = z.infer<typeof educationSchema>;
export type MotivationData = z.infer<typeof motivationSchema>;
export type FullRegistration = z.infer<typeof fullRegistrationSchema>;