"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { OtsyLogo } from "@/components/ui/OtsyLogo";
import { IMAGES } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useI18n();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.55, 0.85]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={shouldReduceMotion ? {} : { y: imageY }}
      >
        <Image
          src={IMAGES.cornerTable}
          alt="Intimate dining setting at OtsY restaurant in Tbilisi's old town"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={
          shouldReduceMotion
            ? { opacity: 0.6 }
            : { opacity: overlayOpacity }
        }
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/50 to-charcoal" />
      </motion.div>

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(26,24,20,0.7) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6"
        style={
          shouldReduceMotion
            ? {}
            : { opacity: contentOpacity, y: contentY }
        }
      >
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <OtsyLogo size="hero" showTagline className="text-linen" />
        </motion.div>

        {/* Thin horizontal rule */}
        <motion.div
          className="mt-10 w-16 h-px bg-gold/40"
          initial={shouldReduceMotion ? {} : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Tagline below the rule */}
        <motion.p
          className="mt-6 max-w-md text-center font-sans text-sm md:text-base font-light leading-relaxed tracking-wide text-linen/60"
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {t.hero.tagline}
          <br />
          {t.hero.tagline2}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-linen/30">
          {t.hero.scroll}
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
