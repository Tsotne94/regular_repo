"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn } from "@/components/ui/FadeIn";
import { IMAGES } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();
  return (
    <SectionWrapper id="about" className="relative overflow-hidden">
      {/* Subtle decorative element */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196,162,101,1) 0%, transparent 70%)",
        }}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <div className="lg:col-span-5 lg:col-start-1 order-2 lg:order-1">
            <FadeIn delay={0.1}>
              <span className="inline-block font-sans text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-6">
                {t.about.label}
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-linen mb-8">
                {t.about.heading1}
                <br />
                {t.about.heading2}
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-5 text-sage-light/80 font-light leading-relaxed text-[15px] md:text-base">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-walnut/30 max-w-20" />
                <span className="font-serif text-sm italic text-gold/60">
                  {t.about.chef}
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <FadeIn delay={0.2} direction="right">
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={IMAGES.diningPaintings}
                    alt="OtsY dining room with contemporary Georgian art and mid-century chandelier"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                  />
                </div>

                {/* Overlapping smaller image */}
                <div className="absolute -bottom-8 -left-6 md:-left-12 w-2/5 aspect-square overflow-hidden shadow-2xl border border-walnut/20 hidden md:block">
                  <Image
                    src={IMAGES.glassTreesDetail}
                    alt="Elegant table setting detail at OtsY"
                    fill
                    className="object-cover"
                    sizes="20vw"
                    quality={80}
                  />
                </div>

                {/* Decorative corner frame */}
                <div className="absolute -top-3 -right-3 w-24 h-24 border-t border-r border-gold/20 pointer-events-none" />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
