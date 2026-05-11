import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { Container } from "../layout/Container";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionLabel } from "../ui/SectionLabel";
import { menuData } from "../../lib/menu-data";
import { cn } from "../../lib/utils";

const categoryKeys = ["breakfast", "appetizers", "mains", "oven", "desserts"] as const;

export function Menu() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("breakfast");

  const activeMenuData = menuData.find((c) => c.key === activeCategory);

  return (
    <SectionWrapper id="menu">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel text={t.menu.sectionLabel} />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-serif text-4xl sm:text-5xl lg:text-6xl text-brand-cream mb-4"
          >
            {t.menu.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-warm-gray text-sm sm:text-base max-w-lg mx-auto"
          >
            {t.menu.subtitle}
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14"
        >
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300",
                activeCategory === key
                  ? "bg-brand-amber text-brand-dark"
                  : "border border-brand-border text-brand-warm-gray hover:text-brand-cream hover:border-brand-warm-gray"
              )}
            >
              {t.menu.categories[key as keyof typeof t.menu.categories]}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeMenuData?.items.map((item, i) => (
                <motion.div
                  key={item.name.en}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group flex items-start justify-between py-5 border-b border-brand-border/50 hover:border-brand-border transition-colors"
                >
                  <div className="flex-1 pr-6">
                    <h4 className="text-brand-cream font-medium text-sm sm:text-base group-hover:text-brand-amber transition-colors duration-300">
                      {item.name[language]}
                    </h4>
                    {item.description && (
                      <p className="text-brand-warm-gray text-xs sm:text-sm mt-1">
                        {item.description[language]}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-1 shrink-0 pt-0.5">
                    <span className="heading-serif text-lg sm:text-xl text-brand-amber">
                      {item.price}
                    </span>
                    <span className="text-xs text-brand-warm-gray">{t.menu.currency}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Price Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-brand-warm-gray mt-10 border-t border-brand-border/30 pt-6"
          >
            {t.menu.note}
          </motion.p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
