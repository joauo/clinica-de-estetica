import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "../config";

export function HeroSection() {
  const [imageFailed, setImageFailed] = useState(false);
  const { hero } = SITE_CONFIG;

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-[#3B2A20] w-full min-h-[600px] lg:h-[680px] xl:h-[720px] flex flex-col justify-between"
    >
      {/* Background photograph */}
      {!imageFailed && (
        <img
          src={hero.image}
          alt={hero.imageAlt}
          onError={() => setImageFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* Measured contrast scrims so foreground text stays legible over any viewport */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#241A13]/85 via-[#241A13]/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#1E1510]/65 via-transparent to-[#1E1510]/30"
      />

      {/* Foreground Content */}
      <div className="relative z-10 w-[min(100%-32px,1200px)] mx-auto flex-1 flex flex-col justify-between pt-20 pb-5 lg:pt-20 lg:pb-6 xl:pt-24 xl:pb-10 gap-4 lg:gap-4 xl:gap-8">
        <div className="max-w-2xl my-auto py-1 xl:py-2">
          <p className="text-[13px] tracking-[0.06em] text-[var(--color-champagne)] mb-2.5 xl:mb-3">
            {hero.eyebrow}
          </p>

          <h1 className="text-[38px] sm:text-[48px] lg:text-[50px] xl:text-[60px] font-semibold leading-[1.06] tracking-[-0.015em] text-[var(--color-white)] mb-3.5 xl:mb-4">
            <span className="block">{hero.titleLine1}</span>
            <span className="block sm:whitespace-nowrap">{hero.titleLine2}</span>
          </h1>

          <p className="text-[15px] xl:text-[16px] leading-[1.65] text-[var(--color-beige-soft)] max-w-[54ch] mb-6 xl:mb-7">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 xl:gap-4">
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

        {/* Bottom 4-card row over the background image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-4">
          {hero.cards.map((card) => (
            <a
              key={card.index}
              href={card.href}
              className="group rounded-[14px] bg-[#D8CCBC]/90 backdrop-blur-md border border-[var(--color-white)]/30 overflow-hidden flex items-stretch min-h-[76px] xl:min-h-[88px] hover:bg-[var(--color-champagne)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
            >
              <div
                aria-hidden="true"
                className="w-[30%] bg-[#C6B6A1]/65 border-r border-[var(--color-text)]/10 shrink-0"
              />
              <div className="p-3.5 xl:p-4 flex flex-col justify-center">
                <p className="text-[11px] font-semibold tracking-[0.06em] text-[var(--color-brown)] mb-0.5 tabular-nums">
                  {card.index} · {card.title.toUpperCase()}
                </p>
                <p className="text-[14px] font-medium leading-[1.35] text-[var(--color-text)]">
                  {card.detail}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
