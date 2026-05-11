import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32 lg:py-40 scroll-mt-[100px]", className)}
    >
      {children}
    </section>
  );
}
