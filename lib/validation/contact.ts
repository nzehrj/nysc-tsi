import { z } from "zod";

const NIGERIAN_PHONE_REGEX = /^(\+234|0)[789]\d{9}$/;

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your name")
    .max(200, "Name is too long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address")
    .max(200),
  phone: z
    .string()
    .regex(NIGERIAN_PHONE_REGEX, "Enter a valid Nigerian phone number")
    .optional()
    .or(z.literal("")),
  subject: z.enum(
    ["application", "partnership", "press", "general"],
    { message: "Please choose a subject" }
  ),
  message: z
    .string()
    .min(20, "Tell us a bit more — at least 20 characters")
    .max(5000, "Keep it under 5000 characters"),
});

export type ContactData = z.infer<typeof contactSchema>;