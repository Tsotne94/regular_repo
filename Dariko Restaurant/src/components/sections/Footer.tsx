import { useLanguage } from "../../hooks/useLanguage";
import { Container } from "../layout/Container";
import { Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "../ui/InstagramIcon";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-night py-16 sm:py-20">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber/15 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-amber/30">
                <img
                  src="/images/logo.jpg"
                  alt="Dariko"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="font-display text-2xl font-semibold text-cream tracking-wide">
                Dariko
              </span>
            </div>
            <p className="text-stone-dark text-sm leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber mb-5">
              {t("nav.about")}
            </h4>
            <nav className="space-y-3" aria-label="Footer navigation">
              {[
                { key: "nav.about", href: "#about" },
                { key: "nav.menu", href: "#menu" },
                { key: "nav.gallery", href: "#gallery" },
                { key: "nav.reserve", href: "#reserve" },
              ].map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="block text-sm text-cream/50 hover:text-cream transition-colors duration-300"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber mb-5">
              {t("contact.label")}
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+995568033303"
                className="flex items-center gap-2.5 text-sm text-cream/50 hover:text-cream transition-colors duration-300"
              >
                <Phone className="h-3.5 w-3.5" />
                +995 568 033 303
              </a>
              <a
                href="https://maps.app.goo.gl/mYfVngM8mdkk7qs68"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-cream/50 hover:text-cream transition-colors duration-300"
              >
                <MapPin className="h-3.5 w-3.5" />
                {t("contact.location.value")}
              </a>
              <a
                href="https://www.instagram.com/dariko_restaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-cream/50 hover:text-cream transition-colors duration-300"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
                @dariko_restaurant
              </a>
            </div>
          </div>
        </div>

        {/* Divider and bottom */}
        <div className="mt-14 pt-8 border-t border-cream/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30">
            &copy; {currentYear} Dariko Restaurant. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-cream/30">{t("footer.tagline")}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
