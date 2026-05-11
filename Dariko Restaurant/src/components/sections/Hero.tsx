import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/wine-cheese.jpg"
          alt="Wine evening atmosphere at Dariko Restaurant"
          className="h-full w-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/50 to-night/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/40 via-transparent to-night/40" />
        {/* Warm amber glow at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber/8 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-8 max-w-4xl mx-auto">
        {/* Decorative line */}
        <motion.div
          {...fadeUp(0.2)}
          className="w-px h-16 sm:h-20 bg-gradient-to-b from-transparent via-amber/60 to-amber mb-8"
        />

        {/* Label */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-amber tracking-[0.3em] uppercase text-xs sm:text-sm font-medium mb-5"
        >
          {t("hero.tagline")}
        </motion.p>

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.6)}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-medium leading-[1.1] tracking-tight text-balance"
        >
          {t("hero.headline")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.8)}
          className="mt-6 sm:mt-8 text-cream/60 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-light"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(1.0)}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#reserve"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="group relative px-8 py-4 bg-amber text-night font-semibold tracking-wide rounded-full text-sm sm:text-base overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber/20 active:scale-[0.97]"
          >
            <span className="relative z-10">{t("hero.cta.reserve")}</span>
            <div className="absolute inset-0 bg-amber-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="px-8 py-4 text-cream/80 font-medium tracking-wide text-sm sm:text-base border border-cream/20 rounded-full hover:border-cream/40 hover:text-cream transition-all duration-300 active:scale-[0.97]"
          >
            {t("hero.cta.menu")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={reduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/30 text-xs tracking-widest uppercase mb-2">
          {t("hero.scroll")}
        </span>
        <motion.div
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-cream/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
