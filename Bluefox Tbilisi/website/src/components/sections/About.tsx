import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { Container } from "../layout/Container";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionLabel } from "../ui/SectionLabel";

export function About() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <div>
            <SectionLabel text={t.about.sectionLabel} />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-serif text-4xl sm:text-5xl lg:text-6xl text-brand-text mb-8"
            >
              {t.about.title}
            </motion.h2>

            {t.about.description.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="text-brand-text-muted leading-relaxed mb-5 text-sm sm:text-base"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Dog-Friendly Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 inline-flex items-center gap-3 border border-brand-border rounded-full px-5 py-2.5"
            >
              <span className="text-lg">🐾</span>
              <span className="text-xs tracking-wide text-brand-text-muted">{t.dogFriendly}</span>
            </motion.div>
          </div>

          {/* Right: Images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src="/images/courtyard-wide.jpg"
                alt="Blue Fox courtyard with turquoise balconies"
                className="w-full h-[400px] sm:h-[500px] object-cover img-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </motion.div>

            {/* Floating accent image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -left-4 sm:-left-8 w-40 sm:w-52 h-52 sm:h-64 rounded-xl overflow-hidden border-4 border-white shadow-2xl"
            >
              <img
                src="/images/greenhouse-candles.jpg"
                alt="Candlelit greenhouse interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        {/* Chef Section */}
        <div className="mt-32 sm:mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Chef Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-2xl order-2 lg:order-1"
            >
              <img
                src="/images/chef-plating.jpg"
                alt="Chef Zuka plating a dish at Blue Fox"
                className="w-full h-[400px] sm:h-[500px] object-cover img-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />

              {/* Chef name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-xs tracking-[0.2em] uppercase text-brand-blue-light mb-1">
                  {t.about.chefTitle}
                </p>
                <p className="heading-serif text-2xl sm:text-3xl text-brand-cream">
                  {t.about.chefName}
                </p>
              </div>
            </motion.div>

            {/* Chef Info */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-brand-blue" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-blue-light">
                  {t.about.chefTitle}
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="heading-serif text-4xl sm:text-5xl text-brand-text mb-8"
              >
                {t.about.chefName}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-brand-text-muted leading-relaxed mb-8 text-sm sm:text-base"
              >
                {t.about.chefDescription}
              </motion.p>

              {/* Credentials */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="border-t border-brand-border pt-6"
              >
                <p className="text-xs tracking-[0.15em] uppercase text-brand-text-muted mb-2">
                  {t.about.chefTitle}
                </p>
                <p className="text-sm text-brand-blue-light font-medium tracking-wide">
                  {t.about.chefCredentials}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
