import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, LANGUAGES } from "../../hooks/useLanguage";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cn } from "../../lib/utils";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { key: "nav.about", href: "#about" },
  { key: "nav.menu", href: "#menu" },
  { key: "nav.gallery", href: "#gallery" },
  { key: "nav.reserve", href: "#reserve" },
  { key: "nav.contact", href: "#contact" },
];

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function LanguageDropdown() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full border border-cream/20 text-cream/70 hover:text-amber hover:border-amber/40 transition-all duration-300"
        aria-label="Select language"
        aria-expanded={open}
      >
        {current.label}
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 min-w-[80px] bg-night/95 backdrop-blur-md border border-cream/10 rounded-xl overflow-hidden shadow-xl shadow-night/40 z-50"
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-left transition-colors duration-200",
                  lang === l.code
                    ? "text-amber bg-cream/5"
                    : "text-cream/60 hover:text-cream hover:bg-cream/5"
                )}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navigation() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={reduced ? {} : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-night/90 backdrop-blur-md shadow-lg shadow-night/20"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12 py-4 lg:py-5"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="group flex items-center gap-3"
            aria-label="Dariko Restaurant - Home"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-amber/30 transition-all duration-300 group-hover:border-amber/60">
              <img
                src="/images/logo.jpg"
                alt="Dariko Restaurant logo"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="eager"
              />
            </div>
            <span className="font-display text-xl font-semibold tracking-wide text-cream transition-colors duration-300 group-hover:text-amber-light">
              Dariko
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="group relative px-4 py-2 text-sm font-medium tracking-wide text-cream/70 hover:text-cream transition-colors duration-300"
              >
                <span className="relative z-10">{t(link.key)}</span>
                <span className="absolute bottom-1 left-4 right-4 h-px bg-amber origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}

            {/* Language dropdown */}
            <div className="ml-4">
              <LanguageDropdown />
            </div>

            {/* Reserve CTA */}
            <a
              href="#reserve"
              onClick={(e) => scrollToSection(e, "#reserve")}
              className="ml-3 px-5 py-2.5 bg-amber text-night text-sm font-semibold tracking-wide rounded-full hover:bg-amber-light transition-all duration-300 active:scale-[0.97]"
            >
              {t("hero.cta.reserve")}
            </a>
          </div>

          {/* Mobile: lang dropdown + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageDropdown />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="relative z-[60] flex flex-col items-center justify-center w-10 h-10"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={cn(
                  "block h-0.5 w-6 rounded-full bg-cream transition-all duration-300",
                  mobileOpen && "translate-y-[3px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 rounded-full bg-cream mt-1.5 transition-all duration-300",
                  mobileOpen && "-translate-y-[3px] -rotate-45"
                )}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-night/98 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => {
                    scrollToSection(e, link.href);
                    setMobileOpen(false);
                  }}
                  initial={reduced ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="font-display text-3xl text-cream/90 hover:text-amber transition-colors duration-300"
                >
                  {t(link.key)}
                </motion.a>
              ))}
              <motion.a
                href="#reserve"
                onClick={(e) => {
                  scrollToSection(e, "#reserve");
                  setMobileOpen(false);
                }}
                initial={reduced ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="mt-6 px-8 py-3 bg-amber text-night font-semibold tracking-wide rounded-full text-lg"
              >
                {t("hero.cta.reserve")}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
