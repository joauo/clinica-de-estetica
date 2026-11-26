import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG, imagens } from "../config";

interface HeroSectionProps {
  onQuickBook: () => void;
}

export function HeroSection({ onQuickBook }: HeroSectionProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const { hero } = SITE_CONFIG;
  const customHero = imagens.hero.trim();
  const heroSrc = customHero || hero.image;
  const heroSrcSet =
    !customHero && hero.imageMobile
      ? `${hero.imageMobile} 768w, ${hero.image} 1774w`
      : undefined;

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-[#3B2A20] w-full min-h-[100svh] lg:min-h-0 lg:h-[max(600px,min(48vw,92svh))] flex flex-col justify-between"
    >
      {heroSrc && !imageFailed && (
        <img
          src={heroSrc}
          srcSet={heroSrcSet}
          sizes={heroSrcSet ? "100vw" : undefined}
          alt={hero.imageAlt}
          width={1774}
          height={887}
          fetchPriority="high"
          decoding="sync"
          referrerPolicy="no-referrer"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
        />
      )}

      <div aria-hidden="true" className="absolute inset-0 bg-[#241A13]/48" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#1E1510]/80 via-transparent to-[#1E1510]/40"
      />

      <div className="relative z-10 w-[min(100%-32px,1200px)] mx-auto flex-1 flex flex-col justify-center pt-20 pb-8 sm:pb-10">
        <div className="max-w-3xl w-full mx-auto text-center flex flex-col items-center">
          <p className="text-[13px] sm:text-[14px] tracking-[0.06em] text-[var(--color-champagne)] mb-3">
            {hero.eyebrow}
          </p>

          <h1 className="text-[clamp(2.25rem,5vw,4.15rem)] font-semibold leading-[1.06] tracking-[-0.015em] text-[var(--color-white)] mb-4 sm:mb-5">
            <span className="block">{hero.titleLine1}</span>
            <span className="block sm:whitespace-nowrap">{hero.titleLine2}</span>
          </h1>

          <p className="text-[16px] sm:text-[18px] leading-[1.65] text-[var(--color-beige-soft)] max-w-[52ch] mx-auto mb-8 sm:mb-10">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="#agendamento"
              onClick={(e) => {
                e.preventDefault();
                onQuickBook();
              }}
              className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-7 py-3 rounded-full bg-[var(--color-champagne)] text-[var(--color-text)] text-[15px] font-medium hover:bg-[var(--color-white)] transition-colors whitespace-nowrap shrink-0"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight
                className="w-4 h-4 text-[var(--color-brown)]"
                aria-hidden="true"
              />
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full border border-[var(--color-white)]/50 bg-[var(--color-text)]/35 md:backdrop-blur-xs text-[var(--color-white)] text-[15px] font-medium hover:bg-[var(--color-white)]/15 transition-colors whitespace-nowrap shrink-0"
            >
              <span>{hero.secondaryCta}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[var(--color-white)]/20 bg-[#1E1510]/55 md:backdrop-blur-xs">
        <div className="w-[min(100%-32px,1200px)] mx-auto py-3.5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-6 text-[13px] sm:text-[14px] text-[var(--color-champagne)] text-center">
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
