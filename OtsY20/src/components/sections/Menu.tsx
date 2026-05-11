"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

interface MenuItem {
  key: string;
  price: number;
}

interface MenuCategory {
  id: string;
  labelKey: "starters" | "mains" | "sides" | "desserts";
  items: MenuItem[];
}

const MENU_DATA: MenuCategory[] = [
  {
    id: "starters",
    labelKey: "starters",
    items: [
      { key: "crabAvocado", price: 38 },
      { key: "goatCheese", price: 28 },
      { key: "tomatoBurrata", price: 32 },
      { key: "roastedVeg", price: 24 },
      { key: "georgianSalad", price: 22 },
      { key: "eggplantRolls", price: 26 },
    ],
  },
  {
    id: "mains",
    labelKey: "mains",
    items: [
      { key: "beefCheeks", price: 52 },
      { key: "lambFillet", price: 58 },
      { key: "steak", price: 64 },
      { key: "chicken", price: 42 },
      { key: "trout", price: 46 },
      { key: "sucklingPig", price: 56 },
    ],
  },
  {
    id: "sides",
    labelKey: "sides",
    items: [
      { key: "khachapuri", price: 18 },
      { key: "lobiani", price: 16 },
      { key: "rice", price: 14 },
      { key: "potatoes", price: 12 },
    ],
  },
  {
    id: "desserts",
    labelKey: "desserts",
    items: [
      { key: "churchkhela", price: 22 },
      { key: "tklapi", price: 18 },
      { key: "chocolate", price: 24 },
      { key: "pelamushi", price: 20 },
    ],
  },
];

function MenuItemRow({ name, description, price, index }: { name: string; description: string; price: number; index: number }) {
  return (
    <FadeIn delay={0.05 * index} direction="none">
      <div className="group py-5 first:pt-0 last:pb-0">
        <div className="flex items-baseline justify-between gap-4">
          <h4 className="font-serif text-lg md:text-xl text-linen group-hover:text-gold transition-colors duration-300">
            {name}
          </h4>
          <div className="flex-1 border-b border-dotted border-walnut/20 mb-1.5 min-w-[40px]" />
          <span className="font-sans text-sm tabular-nums text-gold/80 shrink-0">
            {price}
          </span>
        </div>
        <p className="mt-1.5 font-sans text-[13px] font-light text-sage-light/50 leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </FadeIn>
  );
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useI18n();

  const handleCategoryChange = useCallback((id: string) => {
    setActiveCategory(id);
  }, []);

  const activeData = MENU_DATA.find((c) => c.id === activeCategory)!;

  return (
    <SectionWrapper id="menu" className="relative">
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-walnut/20 to-transparent" />

      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="mb-14 text-center">
            <FadeIn>
              <span className="inline-block font-sans text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-6">
                {t.menu.label}
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-linen">
                {t.menu.heading}
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-4 text-sm text-sage-light/50 font-light">
                {t.menu.currency}
              </p>
            </FadeIn>
          </div>

          {/* Category tabs */}
          <FadeIn delay={0.2}>
            <div className="flex justify-center gap-1 mb-12">
              {MENU_DATA.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={cn(
                    "relative px-4 py-2.5 font-sans text-[12px] uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer",
                    activeCategory === category.id
                      ? "text-gold"
                      : "text-sage-light/40 hover:text-sage-light/70"
                  )}
                >
                  {t.menu[category.labelKey]}
                  {activeCategory === category.id && (
                    <motion.div
                      className="absolute bottom-0 left-4 right-4 h-px bg-gold/50"
                      layoutId="menu-underline"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Menu items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="divide-y divide-walnut/10">
                {activeData.items.map((item, i) => {
                  const translated = t.menu.items[item.key];
                  return (
                    <MenuItemRow
                      key={item.key}
                      name={translated?.name ?? item.key}
                      description={translated?.description ?? ""}
                      price={item.price}
                      index={i}
                    />
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Footer note */}
          <FadeIn delay={0.3}>
            <div className="mt-14 pt-8 border-t border-walnut/10 text-center">
              <p className="text-[12px] text-sage-light/30 font-light leading-relaxed">
                {t.menu.seasonal}
                <br />
                {t.menu.dietary}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </SectionWrapper>
  );
}
