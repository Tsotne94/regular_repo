"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn } from "@/components/ui/FadeIn";
import { IMAGES } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes: string;
}

function GalleryImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
}: GalleryImageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden group ${className}`}
      whileHover={
        shouldReduceMotion
          ? {}
          : { scale: 1.015, transition: { duration: 0.5, ease: "easeOut" } }
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
        sizes={sizes}
        quality={85}
        priority={priority}
      />
      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export function Gallery() {
  const { t } = useI18n();
  return (
    <SectionWrapper id="gallery" className="relative">
      <Container>
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <FadeIn>
            <span className="inline-block font-sans text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-6">
              {t.gallery.label}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-linen">
              {t.gallery.heading}
            </h2>
          </FadeIn>
        </div>

        {/* Gallery Grid - Asymmetric editorial layout */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
          {/* Row 1: Large left + stacked right */}
          <FadeIn
            delay={0.1}
            className="col-span-2 md:col-span-7 row-span-2"
          >
            <GalleryImage
              src={IMAGES.fourDishSpread}
              alt="A curated spread of four signature dishes"
              className="aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] md:min-h-[500px]"
              sizes="(max-width: 768px) 100vw, 58vw"
              priority
            />
          </FadeIn>

          <FadeIn delay={0.15} className="col-span-1 md:col-span-5">
            <GalleryImage
              src={IMAGES.privateDining}
              alt="Private dining room with contemporary art"
              className="aspect-square md:aspect-[5/3]"
              sizes="(max-width: 768px) 50vw, 42vw"
            />
          </FadeIn>

          <FadeIn delay={0.2} className="col-span-1 md:col-span-5">
            <GalleryImage
              src={IMAGES.salmonTartare}
              alt="Salmon tartare with caviar"
              className="aspect-square md:aspect-[5/3]"
              sizes="(max-width: 768px) 50vw, 42vw"
            />
          </FadeIn>

          {/* Row 2: Three equal columns */}
          <FadeIn delay={0.25} className="col-span-1 md:col-span-4">
            <GalleryImage
              src={IMAGES.georgianSalad}
              alt="Georgian salad with white wine"
              className="aspect-[3/4] md:aspect-[3/4]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </FadeIn>

          <FadeIn delay={0.3} className="col-span-1 md:col-span-4">
            <GalleryImage
              src={IMAGES.mainHall}
              alt="The main dining hall"
              className="aspect-[3/4] md:aspect-[3/4]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </FadeIn>

          <FadeIn delay={0.35} className="col-span-2 md:col-span-4">
            <GalleryImage
              src={IMAGES.tomatoBurrata}
              alt="Tomato burrata salad"
              className="aspect-[2/1] md:aspect-[3/4]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </FadeIn>

          {/* Row 3: Wide left + narrow right */}
          <FadeIn delay={0.4} className="col-span-1 md:col-span-5">
            <GalleryImage
              src={IMAGES.overheadDish}
              alt="Overhead view of a signature dish with amber wine"
              className="aspect-square md:aspect-[5/4]"
              sizes="(max-width: 768px) 50vw, 42vw"
            />
          </FadeIn>

          <FadeIn
            delay={0.45}
            className="col-span-1 md:col-span-3"
          >
            <GalleryImage
              src={IMAGES.tignanello}
              alt="Tignanello wine bottles from our curated collection"
              className="aspect-square md:aspect-[3/4]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </FadeIn>

          <FadeIn delay={0.5} className="col-span-2 md:col-span-4">
            <GalleryImage
              src={IMAGES.roastedVegetable}
              alt="Roasted seasonal vegetables with wine pairing"
              className="aspect-[2/1] md:aspect-[4/3]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </FadeIn>
        </div>
      </Container>
    </SectionWrapper>
  );
}
