import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail, Navigation } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { Container } from "../layout/Container";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionLabel } from "../ui/SectionLabel";

export function Location() {
  const { t } = useLanguage();

  const infoItems = [
    {
      icon: <MapPin size={18} />,
      label: t.location.address,
      sublabel: undefined,
    },
    {
      icon: <Clock size={18} />,
      label: t.location.hoursValue,
      sublabel: t.location.everyDay,
    },
    {
      icon: <Phone size={18} />,
      label: t.location.phone,
      href: "tel:+995591986598",
    },
    {
      icon: <Mail size={18} />,
      label: t.location.email,
      href: "mailto:bluefoxtbilisi@gmail.com",
    },
  ];

  return (
    <SectionWrapper id="location" className="bg-brand-blue-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <div>
            <SectionLabel text={t.location.sectionLabel} />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-serif text-4xl sm:text-5xl lg:text-6xl text-brand-text mb-10"
            >
              {t.location.title}
            </motion.h2>

            <div className="space-y-6">
              {infoItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-brand-blue-light">
                    {item.icon}
                  </div>
                  <div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-brand-text text-sm sm:text-base hover:text-brand-blue-light transition-colors link-underline"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <p className="text-brand-text text-sm sm:text-base">{item.label}</p>
                    )}
                    {item.sublabel && (
                      <p className="text-brand-text-muted text-xs mt-0.5">{item.sublabel}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Get Directions CTA */}
            <motion.a
              href="https://share.google/TdiiKvyucr2ihNZOw"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-white border border-brand-border rounded-full text-sm text-brand-text hover:border-brand-blue hover:text-brand-blue-light transition-all duration-300"
            >
              <Navigation size={14} />
              {t.location.getDirections}
            </motion.a>
          </div>

          {/* Right: Map / Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Map embed */}
            <div className="relative overflow-hidden rounded-2xl border border-brand-border h-[400px] sm:h-[480px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.345!2d44.8!3d41.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd0e2e0b8e7%3A0x1234567890abcdef!2sBlue%20Fox%20Restaurant!5e0!3m2!1sen!2sge!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Blue Fox Restaurant location"
              />
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-brand-border rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue-pale flex items-center justify-center">
                    <MapPin size={16} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-text">Blue Fox</p>
                    <p className="text-xs text-brand-text-muted">{t.location.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
