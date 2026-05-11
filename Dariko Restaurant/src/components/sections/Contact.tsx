import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useInView } from "../../hooks/useInView";
import { Container } from "../layout/Container";
import { Phone, MapPin, Clock } from "lucide-react";
import { InstagramIcon } from "../ui/InstagramIcon";

export function Contact() {
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

  const contactItems = [
    {
      icon: Clock,
      label: t("contact.hours"),
      value: t("contact.hours.value"),
      href: undefined,
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+995 568 033 303",
      href: "tel:+995568033303",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: t("contact.location.value"),
      href: "https://maps.app.goo.gl/mYfVngM8mdkk7qs68",
      cta: t("contact.map"),
    },
    {
      icon: InstagramIcon,
      label: t("contact.instagram"),
      value: "@dariko_restaurant",
      href: "https://www.instagram.com/dariko_restaurant/",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 sm:py-36 lg:py-44 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone/40 to-transparent" />
      {/* Decorative glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-amber/5 rounded-full blur-[120px]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <div>
            <motion.p
              {...fadeUp(0)}
              className="text-amber tracking-[0.25em] uppercase text-xs font-semibold mb-4"
            >
              {t("contact.label")}
            </motion.p>
            <motion.h2
              {...fadeUp(0.1)}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-charcoal mb-12"
            >
              {t("contact.headline")}
            </motion.h2>

            <div className="space-y-8">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  {...fadeUp(0.15 + i * 0.08)}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-cream-dark flex items-center justify-center shrink-0 group-hover:bg-amber/10 transition-colors duration-300">
                    <item.icon className="h-[18px] w-[18px] text-amber-dark" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone-dark mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-charcoal font-medium hover:text-amber-dark transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-charcoal font-medium">{item.value}</p>
                    )}
                    {item.cta && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1 text-sm text-amber-dark hover:text-amber transition-colors duration-300 underline underline-offset-2"
                      >
                        {item.cta}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Map embed */}
          <motion.div
            {...fadeUp(0.3)}
            className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden rounded-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.530899!2d44.8!3d41.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQxJzI0LjAiTiA0NMKwNDgnMDAuMCJF!5e0!3m2!1sen!2sge!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "sepia(20%) saturate(80%) brightness(95%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dariko Restaurant location"
              className="absolute inset-0 w-full h-full"
            />
            {/* Overlay for style */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-stone/20" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
