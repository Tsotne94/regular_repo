"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { OtsyLogo } from "@/components/ui/OtsyLogo";
import { useI18n, LOCALES } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const NAV_SECTIONS = ["about", "menu", "gallery", "reserve", "contact"] as const;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { t, locale, setLocale } = useI18n();
  const headerRef = useRef<HTMLElement>(null);

  const navLinks = NAV_SECTIONS.map((id) => ({
    href: `#${id}`,
    label: t.nav[id],
  }));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback(
    (href: string) => {
      const target = document.querySelector(href);
      if (!target) return;
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const offset = headerHeight - 80;
      const top =
        target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    },
    []
  );

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        // Wait for menu close and body overflow reset before scrolling
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scrollToSection(href);
          });
        });
      } else {
        scrollToSection(href);
      }
    },
    [isMobileMenuOpen, scrollToSection]
  );

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-charcoal/90 backdrop-blur-md border-b border-walnut/20"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="relative z-10"
            aria-label="OtsY - return to top"
          >
            <OtsyLogo size="sm" className="text-linen" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="link-underline text-sm font-sans font-light tracking-wide text-linen/70 hover:text-linen transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 ml-4 pl-4 border-l border-walnut/20">
              {LOCALES.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => setLocale(loc.code)}
                  className={cn(
                    "px-1.5 py-1 text-[11px] font-sans tracking-wide transition-colors duration-200 cursor-pointer",
                    locale === loc.code
                      ? "text-gold"
                      : "text-sage-light/40 hover:text-linen/70"
                  )}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="relative z-10 flex md:hidden flex-col justify-center items-center w-8 h-8 gap-[5px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={cn(
                "block h-[1px] w-6 bg-linen transition-all duration-300 origin-center",
                isMobileMenuOpen && "rotate-45 translate-y-[3px]"
              )}
            />
            <span
              className={cn(
                "block h-[1px] w-6 bg-linen transition-all duration-300 origin-center",
                isMobileMenuOpen && "-rotate-45 -translate-y-[3px]"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-sm"
            style={{ backgroundColor: "rgba(26, 24, 20, 0.98)" }}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 20 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="font-serif text-3xl text-linen/80 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Language Switcher */}
              <motion.div
                className="flex items-center gap-4 mt-12"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                {LOCALES.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => setLocale(loc.code)}
                    className={cn(
                      "px-2 py-1 text-sm font-sans tracking-wide transition-colors duration-200 cursor-pointer",
                      locale === loc.code
                        ? "text-gold"
                        : "text-sage-light/40 hover:text-linen/70"
                    )}
                  >
                    {loc.label}
                  </button>
                ))}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
