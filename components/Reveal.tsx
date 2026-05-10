"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Distance the element travels up while fading in. Default 24px. */
  y?: number;
  /** Re-trigger the animation each time it scrolls into view. Default false. */
  repeat?: boolean;
}

/**
 * Wraps any content with a gentle fade-up reveal as it enters the viewport.
 * Respects the user's prefers-reduced-motion setting — falls back to a plain
 * fade with no movement when motion is disabled at the OS level.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
  repeat = false,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: !repeat, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}