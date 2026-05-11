import { cn } from "../../lib/utils";

interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-terracotta",
        className,
      )}
    >
      {children}
    </span>
  );
}
