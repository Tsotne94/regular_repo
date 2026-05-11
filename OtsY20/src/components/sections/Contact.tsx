"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { OtsyLogo } from "@/components/ui/OtsyLogo";
import { CONTACT } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

function SocialLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-underline text-sm text-sage-light/60 hover:text-linen transition-colors duration-300 font-light"
    >
      {label}
    </a>
  );
}

export function Contact() {
  const { t } = useI18n();
  return (
    <footer id="contact" className="relative pt-24 md:pt-32 lg:pt-40 pb-8 scroll-mt-[100px]">
      {/* Top divider */}
      <div className="hr-gold mb-24 md:mb-32 mx-6 md:mx-8 lg:mx-12" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          {/* Left column - Logo + tagline */}
          <div className="md:col-span-4">
            <FadeIn>
              <OtsyLogo size="lg" className="text-linen items-start" />
              <p className="mt-6 text-sm text-sage-light/50 font-light leading-relaxed max-w-xs">
                {t.contact.tagline}
              </p>
            </FadeIn>
          </div>

          {/* Middle column - Contact */}
          <div className="md:col-span-4">
            <FadeIn delay={0.1}>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-6 font-sans">
                {t.contact.contactLabel}
              </h3>
              <div className="space-y-4">
                <div>
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="text-sm text-linen/80 hover:text-gold transition-colors duration-300 font-light"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm text-linen/80 hover:text-gold transition-colors duration-300 font-light"
                  >
                    {CONTACT.email}
                  </a>
                </div>
                <div className="pt-2">
                  <a
                    href={CONTACT.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sage-light/60 hover:text-linen transition-colors duration-300 font-light leading-relaxed"
                  >
                    {t.contact.oldTown}
                    <br />
                    <span className="text-[11px] text-sage-light/40">
                      {t.contact.viewMap}
                    </span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right column - Hours + Social */}
          <div className="md:col-span-4">
            <FadeIn delay={0.2}>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-6 font-sans">
                {t.contact.hoursLabel}
              </h3>
              <div className="space-y-2 mb-10">
                <p className="text-sm text-linen/80 font-light">
                  {t.contact.tueSun}
                </p>
                <p className="text-sm text-sage-light/50 font-light">
                  12:00 &ndash; 23:00
                </p>
                <p className="text-[12px] text-sage-light/30 font-light mt-1">
                  {t.contact.closedMon}
                </p>
              </div>

              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-5 font-sans">
                {t.contact.followLabel}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <SocialLink
                  href={CONTACT.instagram}
                  label="Instagram"
                />
                <SocialLink
                  href={CONTACT.facebook}
                  label="Facebook"
                />
                <SocialLink
                  href={CONTACT.tripadvisor}
                  label="Tripadvisor"
                />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 md:mt-32 pt-6 border-t border-walnut/15">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-sage-light/30 font-light tracking-wide">
              {t.contact.rights}
            </p>
            <p className="text-[11px] text-sage-light/20 font-light">
              {t.contact.location}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
