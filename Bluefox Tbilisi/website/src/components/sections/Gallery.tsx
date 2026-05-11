import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { Container } from "../layout/Container";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionLabel } from "../ui/SectionLabel";
import { cn } from "../../lib/utils";

type GalleryFilter = "all" | "courtyard" | "food" | "atmosphere";

interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryFilter;
  aspect: "portrait" | "landscape" | "square";
}

const galleryImages: GalleryImage[] = [
  { src: "/images/courtyard-wide.jpg", alt: "Turquoise balcony courtyard", category: "courtyard", aspect: "landscape" },
  { src: "/images/interior-1.jpg", alt: "Khachapuri on blue plate", category: "food", aspect: "square" },
  { src: "/images/greenhouse-night.jpg", alt: "Greenhouse dining at dusk", category: "atmosphere", aspect: "landscape" },
  { src: "/images/venue-1.jpg", alt: "Cocktail close-up with garnish", category: "food", aspect: "portrait" },
  { src: "/images/entrance-gate.jpg", alt: "Ornate Georgian entrance gate", category: "courtyard", aspect: "portrait" },
  { src: "/images/grilled-chicken.jpg", alt: "Herb-grilled chicken", category: "food", aspect: "landscape" },
  { src: "/images/venue-2.jpg", alt: "Evening courtyard with candlelit tables", category: "courtyard", aspect: "landscape" },
  { src: "/images/interior-3.jpg", alt: "Cocktail being poured", category: "food", aspect: "portrait" },
  { src: "/images/detail-3.jpg", alt: "Table setting with bread and cocktail", category: "atmosphere", aspect: "square" },
  { src: "/images/balcony-detail.jpg", alt: "Wine in the courtyard", category: "courtyard", aspect: "portrait" },
  { src: "/images/venue-4.jpg", alt: "Chocolate pancake stack", category: "food", aspect: "square" },
  { src: "/images/courtyard-evening.jpg", alt: "Overhead crowd with string lights", category: "atmosphere", aspect: "landscape" },
  { src: "/images/detail-2.jpg", alt: "Hands making khinkali", category: "food", aspect: "square" },
  { src: "/images/greenhouse-candles.jpg", alt: "Candlelit greenhouse interior", category: "atmosphere", aspect: "portrait" },
  { src: "/images/outdoor-crowd.jpg", alt: "Lively crowd against brick wall", category: "atmosphere", aspect: "landscape" },
  { src: "/images/detail-4.jpg", alt: "Mchadi cheese pkhali platter", category: "food", aspect: "landscape" },
  { src: "/images/dinner-plate.jpg", alt: "Dinner plate with wine", category: "food", aspect: "square" },
  { src: "/images/dog-friendly.jpg", alt: "Golden retriever in courtyard", category: "courtyard", aspect: "square" },
  { src: "/images/detail-1.jpg", alt: "Kitchen workers cooking", category: "atmosphere", aspect: "landscape" },
  { src: "/images/atmosphere-2.jpg", alt: "Kitchen prep", category: "atmosphere", aspect: "landscape" },
  { src: "/images/courtyard-day.jpg", alt: "Natural wine bottles", category: "food", aspect: "square" },
  { src: "/images/interior-2.jpg", alt: "Colorful dish presentation", category: "food", aspect: "square" },
  { src: "/images/venue-3.jpg", alt: "Shakshuka with toast", category: "food", aspect: "landscape" },
  { src: "/images/chef-plating.jpg", alt: "Chef Zuka plating food", category: "atmosphere", aspect: "landscape" },
];

export function Gallery() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, goNext, goPrev]);

  const filters: { key: GalleryFilter; label: string }[] = [
    { key: "all", label: t.gallery.filters.all },
    { key: "courtyard", label: t.gallery.filters.courtyard },
    { key: "food", label: t.gallery.filters.food },
    { key: "atmosphere", label: t.gallery.filters.atmosphere },
  ];

  return (
    <SectionWrapper id="gallery" className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel text={t.gallery.sectionLabel} center />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-serif text-4xl sm:text-5xl lg:text-6xl text-brand-text mb-6"
          >
            {t.gallery.title}
          </motion.h2>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={cn(
                  "px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300",
                  filter === f.key
                    ? "bg-brand-blue text-white"
                    : "border border-brand-border text-brand-text-muted hover:text-brand-text hover:border-brand-blue"
                )}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, i) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => openLightbox(i)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={cn(
                      "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                      image.aspect === "portrait" ? "h-[380px] sm:h-[420px]" : "",
                      image.aspect === "landscape" ? "h-[220px] sm:h-[260px]" : "",
                      image.aspect === "square" ? "h-[280px] sm:h-[300px]" : ""
                    )}
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors duration-500" />

                  {/* Zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-label="Image lightbox"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-brand-warm-gray hover:text-brand-cream transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-brand-warm-gray hover:text-brand-cream transition-colors z-10 p-2"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-brand-warm-gray hover:text-brand-cream transition-colors z-10 p-2"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <motion.img
              key={filteredImages[lightboxIndex].src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-brand-warm-gray">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
