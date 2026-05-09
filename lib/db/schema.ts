import {
  pgTable,
  text,
  varchar,
  timestamp,
  pgEnum,
  uuid,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

// ── Enums ─────────────────────────────────────────────────
// These mirror the validation schemas. Postgres enforces them at the database level.

export const trackEnum = pgEnum("track", [
  "artificial_intelligence",
  "data_protection",
  "cybersecurity",
]);

export const statusEnum = pgEnum("status", [
  "pending",
  "verified",
  "accepted",
  "rejected",
  "withdrawn",
]);

export const educationEnum = pgEnum("education_level", [
  "ond",
  "hnd",
  "bachelors",
  "masters",
  "phd",
  "other",
]);

// ── Registrations table ───────────────────────────────────
export const registrations = pgTable(
  "registrations",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    referenceCode: varchar("reference_code", { length: 12 }).notNull().unique(),

    // Personal
    fullName: varchar("full_name", { length: 200 }).notNull(),
    email: varchar("email", { length: 200 }).notNull(),
    phone: varchar("phone", { length: 20 }).notNull(),
    gender: varchar("gender", { length: 20 }),

    // NYSC
    stateCode: varchar("state_code", { length: 20 }).notNull(),
    callUpNumber: varchar("call_up_number", { length: 30 }),
    deploymentState: varchar("deployment_state", { length: 50 }).notNull(),
    deploymentLga: varchar("deployment_lga", { length: 100 }).notNull(),
    cdsGroup: varchar("cds_group", { length: 100 }),
    serviceYear: varchar("service_year", { length: 10 }).notNull(),
    batch: varchar("batch", { length: 10 }).notNull(),
    stream: varchar("stream", { length: 10 }),

    // Education
    educationLevel: educationEnum("education_level").notNull(),
    institutionName: varchar("institution_name", { length: 200 }).notNull(),
    courseOfStudy: varchar("course_of_study", { length: 200 }).notNull(),
    graduationYear: varchar("graduation_year", { length: 10 }),

    // Programme
    track: trackEnum("track").notNull(),
    priorExperience: text("prior_experience"),
    motivation: text("motivation").notNull(),
    hasLaptop: varchar("has_laptop", { length: 10 }).notNull(),
    internetAccess: varchar("internet_access", { length: 30 }).notNull(),

    // System
    status: statusEnum("status").notNull().default("pending"),
    consentGiven: varchar("consent_given", { length: 10 }).notNull().default("yes"),
    submittedFromIp: varchar("submitted_from_ip", { length: 45 }),
    userAgent: text("user_agent"),

    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("registrations_state_code_idx").on(table.stateCode),
    index("registrations_email_idx").on(table.email),
    index("registrations_track_idx").on(table.track),
    index("registrations_status_idx").on(table.status),
    index("registrations_deployment_state_idx").on(table.deploymentState),
  ]
);

// ── Inferred TypeScript types ─────────────────────────────
// `Registration` is the shape of a row when you SELECT from the DB.
// `NewRegistration` is the shape required when INSERTing a new row.
export type Registration = typeof registrations.$inferSelect;
export type NewRegistration = typeof registrations.$inferInsert;