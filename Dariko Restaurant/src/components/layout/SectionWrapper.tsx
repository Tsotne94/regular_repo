import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 sm:py-32 lg:py-40",
        dark && "bg-night text-cream",
        className
      )}
    >
      {children}
    </section>
  );
}
