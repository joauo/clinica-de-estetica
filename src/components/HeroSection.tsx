import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG, imagens } from "../config";

export function HeroSection() {
  const [imageFailed, setImageFailed] = useState(false);
  const { hero } = SITE_CONFIG;
  const heroSrc = imagens.hero.trim() || hero.image;

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-[#3B2A20] w-full min-h-[600px] lg:h-[680px] xl:h-[720px] flex flex-col justify-between"
    >
      {/* Background photograph */}
      {heroSrc && !imageFailed && (
        <img
          src={heroSrc}
          alt={hero.imageAlt}
          referrerPolicy="no-referrer"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* Measured contrast scrims */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#241A13]/45" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#1E1510]/75 via-transparent to-[#1E1510]/35"
      />

      {/* Foreground Content */}
      <div className="relative z-10 w-[min(100%-32px,1200px)] mx-auto flex-1 flex flex-col justify-between pt-20 pb-0">
        <div className="max-w-3xl w-full mx-auto my-auto py-8 text-center flex flex-col items-center">
          <p className="text-[13px] tracking-[0.06em] text-[var(--color-champagne)] mb-2.5 xl:mb-3">
            {hero.eyebrow}
          </p>

          <h1 className="text-[38px] sm:text-[48px] lg:text-[50px] xl:text-[60px] font-semibold leading-[1.06] tracking-[-0.015em] text-[var(--color-white)] mb-3.5 xl:mb-4">
            <span className="block">{hero.titleLine1}</span>
            <span className="block sm:whitespace-nowrap">{hero.titleLine2}</span>
          </h1>

          <p className="text-[15px] xl:text-[16px] leading-[1.65] text-[var(--color-beige-soft)] max-w-[52ch] mx-auto mb-6 xl:mb-7">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-4">
            <a
              href="#agendamento"
              className="inline-flex items-center justify-center gap-2.5 min-h-[44px] xl:min-h-[48px] px-6 xl:px-7 py-2.5 xl:py-3 rounded-full bg-[var(--color-champagne)] text-[var(--color-text)] text-[14px] font-medium hover:bg-[var(--color-white)] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 text-[var(--color-brown)]" />
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] xl:min-h-[48px] px-5 xl:px-6 py-2.5 xl:py-3 rounded-full border border-[var(--color-white)]/45 bg-[var(--color-text)]/30 backdrop-blur-xs text-[var(--color-white)] text-[14px] font-medium hover:bg-[var(--color-white)]/15 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2"
            >
              <span>{hero.secondaryCta}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Thin bottom strip with 3 concise text items */}
      <div className="relative z-10 border-t border-[var(--color-white)]/20 bg-[#1E1510]/50 backdrop-blur-xs">
        <div className="w-[min(100%-32px,1200px)] mx-auto py-3.5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-6 text-[13px] text-[var(--color-champagne)]">
          {hero.stripItems.map((item, idx) => (
            <span key={item} className="flex items-center gap-6">
              <span>{item}</span>
              {idx < hero.stripItems.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden sm:inline-block w-1 h-1 rounded-full bg-[var(--color-primary)]"
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
