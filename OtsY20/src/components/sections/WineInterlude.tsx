"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export function WineInterlude() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useI18n();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [40, 0, 0, -40]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={shouldReduceMotion ? {} : { y: imageY }}
      >
        <Image
          src={IMAGES.baroloRiserva}
          alt="Barolo Riserva from our curated Italian wine collection"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/70" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(26,24,20,0.8) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={
          shouldReduceMotion
            ? {}
            : { opacity: textOpacity, y: textY }
        }
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-gold/60 mb-6">
          {t.wine.label}
        </span>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight text-linen/90 max-w-lg leading-snug">
          {t.wine.heading}
        </h2>
        <div className="mt-6 w-12 h-px bg-gold/30" />
        <p className="mt-5 text-sm text-sage-light/50 font-light max-w-sm leading-relaxed">
          {t.wine.description}
        </p>
      </motion.div>
    </section>
  );
}
