import type { Easing } from "framer-motion";

/** Reusable ease curve for elegant transitions */
export const easeOut: Easing = [0.22, 1, 0.36, 1];

/** Creates fade-up animation props for Framer Motion */
export function fadeUp(
  delay: number,
  inView: boolean,
  reduced: boolean
) {
  if (reduced) {
    return {
      initial: { opacity: 1 } as const,
      animate: { opacity: 1 } as const,
    };
  }
  return {
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.7, delay, ease: easeOut },
  };
}

/** Creates fade-up animation props that always animate (for hero) */
export function fadeUpAlways(delay: number, reduced: boolean) {
  if (reduced) return {};
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: easeOut },
  };
}
