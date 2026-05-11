import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useInView } from "../../hooks/useInView";
import { Container } from "../layout/Container";
import { InstagramIcon } from "../ui/InstagramIcon";

const instagramImages = [
  { src: "/images/wine-cheese.jpg", alt: "Wine and cheese" },
  { src: "/images/hero-terrace.jpg", alt: "Terrace dining" },
  { src: "/images/georgian-salad.jpg", alt: "Georgian salad" },
  { src: "/images/tea-pouring.jpg", alt: "Tea service" },
  { src: "/images/iced-latte.jpg", alt: "Iced latte" },
  { src: "/images/whiskey-bar.jpg", alt: "Bar atmosphere" },
];

export function Instagram() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const { ref: sectionRef, inView } = useInView<HTMLElement>({
    threshold: 0.05,
  });

  const fadeUp = (delay: number) =>
    reduced
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 30 },
          animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="instagram"
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 bg-cream-dark/50 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone/40 to-transparent" />

      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.p
            {...fadeUp(0)}
            className="text-amber tracking-[0.25em] uppercase text-xs font-semibold mb-4"
          >
            {t("instagram.label")}
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-charcoal"
          >
            {t("instagram.headline")}
          </motion.h2>
        </div>

        {/* Instagram grid */}
        <motion.div
          {...fadeUp(0.2)}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {instagramImages.map((img, i) => (
            <motion.a
              key={img.src}
              href="https://www.instagram.com/dariko_restaurant/"
              target="_blank"
              rel="noopener noreferrer"
              initial={
                reduced ? {} : { opacity: 0, scale: 0.9 }
              }
              animate={
                inView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
              aria-label={`View on Instagram: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-night/0 group-hover:bg-night/40 transition-all duration-500 flex items-center justify-center">
                <InstagramIcon className="h-6 w-6 text-cream opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.4)} className="text-center mt-10 sm:mt-14">
          <a
            href="https://www.instagram.com/dariko_restaurant/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-charcoal/20 rounded-full text-sm font-medium text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 active:scale-[0.97]"
          >
            <InstagramIcon className="h-4 w-4" />
            {t("instagram.cta")}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
