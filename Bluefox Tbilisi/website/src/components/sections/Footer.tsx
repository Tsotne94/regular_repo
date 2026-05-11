import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { Container } from "../layout/Container";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const socialLinks = [
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/bluefox.restaurant/",
    label: "Instagram",
  },
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/Bluefox.Tbilisi",
    label: "Facebook",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.42 14.89c-2.81 0-4.78-1.49-5.56-3.47l1.96-.81c.49 1.19 1.73 2.05 3.33 2.05 1.3 0 2.42-.69 2.42-1.85 0-1.32-1.35-1.78-3.16-2.43C7.45 9.64 6.08 8.78 6.08 6.86c0-2.11 1.86-3.39 4.06-3.39 2 0 3.44 1.05 4.14 2.65l-1.89.87c-.42-.89-1.26-1.54-2.38-1.54-1.1 0-1.86.62-1.86 1.5 0 1.08 1.03 1.48 2.87 2.13 2.29.81 3.94 1.67 3.94 4.05 0 2.23-1.92 3.76-4.38 3.76z" />
      </svg>
    ),
    href: "https://www.tripadvisor.com/Restaurant_Review-g294195-d25251864-Reviews-Blue_Fox_Restaurant_Tbilisi-Tbilisi.html",
    label: "TripAdvisor",
  },
];

export function Footer() {
  const { t } = useLanguage();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-blue-dim text-white">
      <Container>
        <div className="py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.button
                onClick={handleScrollTop}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-4 cursor-pointer"
              >
                <span className="text-xl font-semibold tracking-wider text-white hover:text-brand-amber-light transition-colors">
                  BLUE FOX
                </span>
              </motion.button>
              <p className="text-sm text-white/70 max-w-sm leading-relaxed">
                {t.footer.description}
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white/80 mb-5">
                {t.location.sectionLabel}
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+995591986598"
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  +995 591 98 65 98
                </a>
                <a
                  href="mailto:bluefoxtbilisi@gmail.com"
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  bluefoxtbilisi@gmail.com
                </a>
                <p className="text-sm text-white/70">{t.location.address}</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white/80 mb-5">
                {t.footer.followUs}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50">{t.footer.copyright}</p>
            <p className="text-xs text-white/50 flex items-center gap-1.5">
              {t.footer.madeWith} <Heart size={10} className="text-white/70 fill-white/70" />
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
