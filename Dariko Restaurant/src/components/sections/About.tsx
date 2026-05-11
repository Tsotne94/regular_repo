import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useInView } from "../../hooks/useInView";
import { Container } from "../layout/Container";

export function About() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const { ref: sectionRef, inView } = useInView<HTMLElement>({
    threshold: 0.1,
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
      id="about"
      ref={sectionRef}
      className="relative py-28 sm:py-36 lg:py-44 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone/40 to-transparent" />
      <div className="absolute -right-32 top-1/4 w-64 h-64 bg-amber/5 rounded-full blur-[100px]" />
      <div className="absolute -left-32 bottom-1/4 w-48 h-48 bg-forest/5 rounded-full blur-[80px]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image column */}
          <motion.div
            {...fadeUp(0)}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="/images/hero-terrace.jpg"
                alt="Dariko Restaurant terrace dining"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-night/30 via-transparent to-transparent" />
            </div>
            {/* Floating accent image */}
            <motion.div
              {...fadeUp(0.3)}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-40 sm:w-52 aspect-square overflow-hidden rounded-xl shadow-2xl shadow-night/30 border-4 border-cream"
            >
              <img
                src="/images/georgian-salad.jpg"
                alt="Fresh Georgian salad"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-amber/20 rounded-xl -z-10" />
          </motion.div>

          {/* Text column */}
          <div className="lg:pl-4">
            <motion.p
              {...fadeUp(0.1)}
              className="text-amber tracking-[0.25em] uppercase text-xs font-semibold mb-4"
            >
              {t("about.label")}
            </motion.p>

            <motion.h2
              {...fadeUp(0.2)}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-charcoal mb-8"
            >
              {t("about.headline")}
            </motion.h2>

            <motion.div {...fadeUp(0.3)} className="space-y-5">
              <p className="text-stone-dark text-base sm:text-lg leading-relaxed">
                {t("about.p1")}
              </p>
              <p className="text-stone-dark text-base sm:text-lg leading-relaxed">
                {t("about.p2")}
              </p>
              <p className="text-stone-dark text-base sm:text-lg leading-relaxed">
                {t("about.p3")}
              </p>
            </motion.div>

            {/* Signature quote */}
            <motion.div
              {...fadeUp(0.5)}
              className="mt-10 pl-6 border-l-2 border-amber/40"
            >
              <p className="font-display text-xl sm:text-2xl italic text-charcoal/80 leading-relaxed">
                {t("about.signature")}
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
