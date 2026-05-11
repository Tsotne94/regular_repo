import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../../hooks/useLanguage";

const quotes = {
  ka: "სადაც ასწლოვანი კედლები ხვალინდელ სამზარეულოს ხვდება",
  en: "Where centuries-old walls meet tomorrow's cuisine",
  ru: "Где вековые стены встречают кухню завтрашнего дня",
};

export function ImageStrip() {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-[-10%]">
        <img
          src="/images/courtyard-evening.jpg"
          alt="Blue Fox courtyard from above at night"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-brand-dark/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg" />

      <div className="relative z-10 flex items-center justify-center h-full px-5">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <span className="heading-serif text-2xl sm:text-4xl lg:text-5xl text-white italic">
            "{quotes[language]}"
          </span>
        </motion.blockquote>
      </div>
    </div>
  );
}
