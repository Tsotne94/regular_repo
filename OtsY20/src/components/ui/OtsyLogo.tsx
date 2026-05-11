"use client";

import { cn } from "@/lib/utils";

interface OtsyLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  showTagline?: boolean;
}

const sizeMap = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-4xl md:text-5xl",
  hero: "text-6xl md:text-8xl lg:text-9xl",
} as const;

const taglineSizeMap = {
  sm: "text-[8px] tracking-[0.25em]",
  md: "text-[9px] tracking-[0.3em]",
  lg: "text-xs tracking-[0.35em]",
  hero: "text-xs md:text-sm tracking-[0.4em]",
} as const;

export function OtsyLogo({
  className,
  size = "md",
  showTagline = false,
}: OtsyLogoProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <span
        className={cn(
          "font-serif font-bold leading-none select-none",
          sizeMap[size]
        )}
        aria-label="OtsY"
      >
        <span className="inline-block">O</span>
        <span className="inline-block relative">
          {/* The cross-shaped t */}
          <span className="relative">
            t
            <span
              className="absolute top-[0.32em] left-[-0.15em] right-[-0.15em] h-[0.06em] bg-current"
              aria-hidden="true"
            />
          </span>
        </span>
        <span className="inline-block text-[0.85em]">s</span>
        <span className="inline-block">Y</span>
      </span>
      {showTagline && (
        <span
          className={cn(
            "mt-2 font-sans uppercase text-sage-light font-light",
            taglineSizeMap[size]
          )}
        >
          Tbilisi Cuisine
        </span>
      )}
    </div>
  );
}
