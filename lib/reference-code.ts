/**
 * Generate a human-friendly reference code for a registration.
 * Format: TSI-XXXX-XXXX (e.g., TSI-A4F2-9K3M)
 *
 * Excludes I, O, 0, 1 to avoid visual ambiguity when read aloud
 * or hand-copied — common in support calls.
 */
export function generateReferenceCode(): string {
  const charset = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  const randomPart = (length: number) =>
    Array.from({ length }, () =>
      charset.charAt(Math.floor(Math.random() * charset.length))
    ).join("");

  return `TSI-${randomPart(4)}-${randomPart(4)}`;
}