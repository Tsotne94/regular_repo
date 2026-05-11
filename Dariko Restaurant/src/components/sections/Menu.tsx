import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage, type Language } from "../../hooks/useLanguage";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useInView } from "../../hooks/useInView";
import { Container } from "../layout/Container";
import { menuData, type MenuItem as MenuItemType } from "../../data/menu";
import { cn } from "../../lib/utils";

const categoryKeys = menuData.map((c) => c.key);

function MenuItemRow({
  item,
  lang,
}: {
  item: MenuItemType;
  lang: Language;
}) {
  return (
    <div className="group flex items-baseline gap-3 py-5 border-b border-cream/10 last:border-b-0 hover:border-amber/20 transition-colors duration-300">
      <div className="flex-1 min-w-0">
        <h4 className="font-display text-lg sm:text-xl font-medium text-cream group-hover:text-amber-light transition-colors duration-300">
          {item.name[lang]}
        </h4>
        <p className="mt-1 text-cream/50 text-sm leading-relaxed">
          {item.description[lang]}
        </p>
      </div>
      {/* Dotted leader */}
      <div className="hidden sm:block flex-1 border-b border-dotted border-cream/15 min-w-8 translate-y-[-4px]" />
      {/* Price */}
      <div className="text-right shrink-0">
        <span className="font-display text-lg sm:text-xl font-medium text-amber">
          {item.price} <span className="text-sm text-cream/40">GEL</span>
        </span>
        {item.unit && (
          <span className="text-xs text-cream/40 ml-1">/ {item.unit[lang]}</span>
        )}
      </div>
    </div>
  );
}

export function Menu() {
  const { t, lang } = useLanguage();
  const reduced = useReducedMotion();
  const { ref: sectionRef, inView } = useInView<HTMLElement>({
    threshold: 0.05,
  });
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0]);

  const activeCategoryData = menuData.find((c) => c.key === activeCategory);

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
      id="menu"
      ref={sectionRef}
      className="relative bg-night py-28 sm:py-36 lg:py-44 overflow-hidden"
    >
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber/3 rounded-full blur-[150px]" />

      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            {...fadeUp(0)}
            className="text-amber tracking-[0.25em] uppercase text-xs font-semibold mb-4"
          >
            {t("menu.label")}
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-cream"
          >
            {t("menu.headline")}
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 text-stone-dark text-base sm:text-lg leading-relaxed"
          >
            {t("menu.subtitle")}
          </motion.p>
        </div>

        {/* Category tabs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14"
        >
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={cn(
                "px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium tracking-wide rounded-full transition-all duration-200 cursor-pointer select-none",
                activeCategory === key
                  ? "bg-amber text-night"
                  : "text-cream/50 border border-cream/10 hover:border-cream/25 hover:text-cream/80"
              )}
            >
              {t(`menu.${key}`)}
            </button>
          ))}
        </motion.div>

        {/* Menu items */}
        <motion.div {...fadeUp(0.4)} className="max-w-3xl mx-auto">
          <div key={activeCategory}>
            {activeCategoryData?.items.map((item) => (
              <MenuItemRow
                key={item.name.en}
                item={item}
                lang={lang}
              />
            ))}
          </div>
        </motion.div>

        {/* Decorative image strip */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-20 grid grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {["/images/georgian-salad.jpg", "/images/tea-pouring.jpg", "/images/wine-cheese.jpg"].map(
            (src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl group"
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-night/20 group-hover:bg-night/10 transition-colors duration-500" />
                {i === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-amber/20 backdrop-blur-sm flex items-center justify-center border border-amber/30">
                      <div className="h-3 w-3 rounded-full bg-amber" />
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </motion.div>
      </Container>
    </section>
  );
}
