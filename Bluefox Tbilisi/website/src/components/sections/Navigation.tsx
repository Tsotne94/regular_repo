import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { cn } from "../../lib/utils";
import type { Language } from "../../lib/i18n";

const navLinks = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "menu", href: "#menu" },
  { key: "gallery", href: "#gallery" },
  { key: "reservation", href: "#reservation" },
  { key: "contact", href: "#location" },
] as const;

const languages: { code: Language; label: string }[] = [
  { code: "ka", label: "GE" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const { scrollDirection, scrollY } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = scrollY > 50;
  const isHidden = scrollDirection === "down" && scrollY > 400 && !mobileOpen;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-brand-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12 h-16 sm:h-20">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center gap-3 group"
            aria-label="Blue Fox - Home"
          >
            <span className={cn(
              "text-lg sm:text-xl font-semibold tracking-wider transition-colors duration-300",
              isScrolled ? "text-brand-blue" : "text-white"
            )}>
              BLUE FOX
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={cn(
                  "link-underline text-sm transition-colors duration-300",
                  isScrolled ? "text-brand-text-muted hover:text-brand-text" : "text-white/70 hover:text-white"
                )}
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className={cn(
              "flex items-center gap-1 border rounded-full px-1 py-1",
              isScrolled ? "border-brand-border" : "border-white/30"
            )}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={cn(
                    "text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-300",
                    language === lang.code
                      ? "bg-brand-blue text-white"
                      : isScrolled ? "text-brand-text-muted hover:text-brand-text" : "text-white/60 hover:text-white"
                  )}
                  aria-label={`Switch to ${lang.label}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <a
              href="#reservation"
              onClick={(e) => { e.preventDefault(); handleNavClick("#reservation"); }}
              className="hidden lg:block text-xs font-medium tracking-wider uppercase px-5 py-2.5 bg-brand-blue text-white rounded-full hover:bg-brand-blue-light transition-all duration-300 active:scale-[0.97]"
            >
              {t.hero.cta}
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 transition-colors",
                isScrolled ? "text-brand-text" : "text-white"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="heading-serif text-3xl text-brand-text hover:text-brand-blue transition-colors"
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                </motion.a>
              ))}
              <motion.a
                href="#reservation"
                onClick={(e) => { e.preventDefault(); handleNavClick("#reservation"); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-4 text-sm font-medium tracking-wider uppercase px-8 py-3.5 bg-brand-blue text-white rounded-full hover:bg-brand-blue-light transition-all duration-300"
              >
                {t.hero.cta}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
