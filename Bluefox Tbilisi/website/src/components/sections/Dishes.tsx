import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { Container } from "../layout/Container";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionLabel } from "../ui/SectionLabel";

const dishes = [
  {
    src: "/images/interior-1.jpg",
    alt: "Khachapuri on blue plate",
    title: { en: "Khachapuri", ka: "ხაჭაპური", ru: "Хачапури" },
    subtitle: { en: "Georgian cheese bread", ka: "ქართული ყველის პური", ru: "Грузинский сырный хлеб" },
    span: "col-span-1 sm:col-span-2 row-span-2",
    height: "h-[400px] sm:h-full",
  },
  {
    src: "/images/venue-3.jpg",
    alt: "Shakshuka with toast",
    title: { en: "Shakshuka", ka: "შაქშუქა", ru: "Шакшука" },
    subtitle: { en: "Spiced baked eggs", ka: "სუნელებიანი კვერცხი", ru: "Яйца в томатном соусе" },
    span: "col-span-1",
    height: "h-[280px] sm:h-[260px]",
  },
  {
    src: "/images/interior-3.jpg",
    alt: "Cocktail being poured",
    title: { en: "Craft Cocktails", ka: "კოქტეილები", ru: "Авторские коктейли" },
    subtitle: { en: "Artisan mixology", ka: "ავტორული მიქსოლოგია", ru: "Авторская миксология" },
    span: "col-span-1",
    height: "h-[280px] sm:h-[260px]",
  },
  {
    src: "/images/grilled-chicken.jpg",
    alt: "Herb-grilled chicken on silver platter",
    title: { en: "Chicken Mtsvadi", ka: "ქათმის მწვადი", ru: "Куриный мцвади" },
    subtitle: { en: "Herb-grilled on the vine", ka: "მწვანილით შეწვარი", ru: "На углях с зеленью" },
    span: "col-span-1",
    height: "h-[280px] sm:h-[260px]",
  },
  {
    src: "/images/detail-2.jpg",
    alt: "Hands making khinkali",
    title: { en: "Khinkali", ka: "ხინკალი", ru: "Хинкали" },
    subtitle: { en: "Handmade dumplings", ka: "ხელით გაკეთებული", ru: "Ручной работы" },
    span: "col-span-1",
    height: "h-[280px] sm:h-[260px]",
  },
  {
    src: "/images/venue-4.jpg",
    alt: "Chocolate pancake stack",
    title: { en: "Waffles & Pancakes", ka: "ვაფლი და ბლინი", ru: "Вафли и блины" },
    subtitle: { en: "Sweet breakfast", ka: "ტკბილი საუზმე", ru: "Сладкий завтрак" },
    span: "col-span-1",
    height: "h-[280px] sm:h-[260px]",
  },
  {
    src: "/images/detail-4.jpg",
    alt: "Mchadi cheese and pkhali platter",
    title: { en: "Phkali Platter", ka: "ფხალი", ru: "Пхали" },
    subtitle: { en: "Traditional Georgian appetizers", ka: "ქართული წინამღვრები", ru: "Традиционные закуски" },
    span: "col-span-1",
    height: "h-[280px] sm:h-[260px]",
  },
];

export function Dishes() {
  const { t, language } = useLanguage();

  return (
    <SectionWrapper id="dishes" className="bg-brand-darker">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel text={t.dishes.sectionLabel} />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-serif text-4xl sm:text-5xl lg:text-6xl text-brand-cream mb-4"
          >
            {t.dishes.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-warm-gray text-sm sm:text-base max-w-md mx-auto"
          >
            {t.dishes.subtitle}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-[260px]">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${dish.span}`}
            >
              <img
                src={dish.src}
                alt={dish.alt}
                className={`w-full ${dish.height} object-cover transition-transform duration-700 group-hover:scale-110`}
                loading="lazy"
              />
              {/* Warm overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-brand-amber/0 group-hover:bg-brand-amber/5 transition-colors duration-500" />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="heading-serif text-xl sm:text-2xl text-brand-cream mb-1">
                  {dish.title[language]}
                </h3>
                <p className="text-xs text-brand-warm-gray opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {dish.subtitle[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
