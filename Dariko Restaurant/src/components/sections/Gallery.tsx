import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useInView } from "../../hooks/useInView";
import { Container } from "../layout/Container";
import { galleryImages } from "../../data/gallery";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

export function Gallery() {
  const { t, lang } = useLanguage();
  const reduced = useReducedMotion();
  const { ref: sectionRef, inView } = useInView<HTMLElement>({
    threshold: 0.05,
  });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const fadeUp = (delay: number) =>
    reduced
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 30 },
          animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className="relative py-28 sm:py-36 lg:py-44 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone/40 to-transparent" />

        <Container>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.p
              {...fadeUp(0)}
              className="text-amber tracking-[0.25em] uppercase text-xs font-semibold mb-4"
            >
              {t("gallery.label")}
            </motion.p>
            <motion.h2
              {...fadeUp(0.1)}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-charcoal"
            >
              {t("gallery.headline")}
            </motion.h2>
            <motion.p
              {...fadeUp(0.15)}
              className="mt-5 text-stone-dark text-base sm:text-lg leading-relaxed"
            >
              {t("gallery.subtitle")}
            </motion.p>
          </div>

          {/* Masonry grid */}
          <motion.div
            {...fadeUp(0.2)}
            className="columns-2 md:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
          >
            {galleryImages.map((img, i) => (
              <motion.button
                key={img.src}
                initial={reduced ? {} : { opacity: 0, scale: 0.95 }}
                animate={
                  inView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                onClick={() => setSelectedIndex(i)}
                className={cn(
                  "group relative w-full overflow-hidden rounded-xl break-inside-avoid cursor-pointer block",
                  img.span === "tall" && "aspect-[3/4]",
                  img.span === "wide" && "aspect-[4/3]",
                  !img.span && "aspect-square"
                )}
                aria-label={`View ${img.alt[lang]}`}
              >
                <img
                  src={img.src}
                  alt={img.alt[lang]}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-night/0 group-hover:bg-night/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-12 w-12 rounded-full bg-cream/20 backdrop-blur-md flex items-center justify-center border border-cream/30">
                    <svg
                      className="h-5 w-5 text-cream"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-night/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-label="Image lightbox"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-10 h-10 w-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5 text-cream" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  selectedIndex > 0
                    ? selectedIndex - 1
                    : galleryImages.length - 1
                );
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors duration-300"
              aria-label="Previous image"
            >
              <svg
                className="h-5 w-5 text-cream"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  selectedIndex < galleryImages.length - 1
                    ? selectedIndex + 1
                    : 0
                );
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors duration-300"
              aria-label="Next image"
            >
              <svg
                className="h-5 w-5 text-cream"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={reduced ? {} : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? {} : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt[lang]}
                className="w-full h-full max-h-[85vh] object-contain rounded-xl"
              />
              <p className="absolute bottom-0 left-0 right-0 text-center text-cream/60 text-sm py-4">
                {galleryImages[selectedIndex].alt[lang]}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
