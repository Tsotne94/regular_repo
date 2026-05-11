import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";

const heroImages = [
  { src: "/images/courtyard-wide.jpg", alt: "Blue Fox courtyard" },
  { src: "/images/venue-2.jpg", alt: "Evening courtyard" },
  { src: "/images/greenhouse-night.jpg", alt: "Greenhouse dining" },
  { src: "/images/entrance-gate.jpg", alt: "Entrance gate" },
  { src: "/images/ambiance-1.jpg", alt: "Night ambiance" },
];

export function Hero() {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  const handleScrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden" aria-label="Hero">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentImage].src}
            alt={heroImages[currentImage].alt}
            className="h-full w-full object-cover"
            loading={currentImage === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-white/40" />
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-white/80">
              Est. 2022
            </span>
            <span className="h-px w-12 bg-white/40" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="heading-serif text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-3"
        >
          Blue Fox
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base tracking-[0.2em] uppercase text-white/70 mb-8"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-xl text-center text-sm sm:text-base text-white/60 leading-relaxed mb-12"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.a
          href="#reservation"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" });
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-3.5 sm:px-10 sm:py-4 bg-brand-blue text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-full hover:bg-brand-blue-light transition-all duration-300 glow-blue"
        >
          {t.hero.cta}
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-28 sm:bottom-32 flex gap-2"
        >
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentImage ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer group"
        aria-label={t.hero.scroll}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
