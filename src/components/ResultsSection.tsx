import { useEffect, useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { SITE_CONFIG } from "../config";

interface ResultPhotoSlotProps {
  src?: string;
  alt: string;
}

function ResultPhotoSlot({ src, alt }: ResultPhotoSlotProps) {
  const [failed, setFailed] = useState(false);
  const cleanSrc = src?.trim() ?? "";

  useEffect(() => {
    setFailed(false);
  }, [cleanSrc]);

  const showImage = Boolean(cleanSrc) && !failed;

  return (
    <div className="relative aspect-[4/5] w-full rounded-[16px] bg-[#4A291D] border border-[var(--color-champagne)]/25 overflow-hidden flex items-center justify-center">
      {showImage ? (
        <img
          src={cleanSrc}
          alt={alt}
          width={400}
          height={500}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover rounded-[inherit]"
        />
      ) : (
        <ImageIcon
          strokeWidth={1.25}
          className="w-7 h-7 text-[var(--color-champagne)]/35"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export function ResultsSection() {
  const { results } = SITE_CONFIG;

  if (!results.mostrarAntesDepois) {
    return null;
  }

  return (
    <section
      id="resultados"
      className="scroll-mt-16 bg-[var(--color-brown)] text-[var(--color-white)] py-20 lg:py-24"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="text-[clamp(1.85rem,3.4vw,2.625rem)] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-white)] max-w-xl">
            {results.title}
          </h2>
          <p className="text-[16px] leading-[1.65] text-[var(--color-champagne)] max-w-md">
            {results.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {results.cases.map((item) => (
            <article
              key={item.id}
              className="rounded-[16px] border border-[#FEFEFE]/15 bg-[#361D14] p-5 sm:p-6 flex flex-col justify-between gap-5"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <ResultPhotoSlot
                    src={item.beforeImage}
                    alt={
                      item.beforeImageAlt ??
                      `${results.beforeLabel} — ${item.title}`
                    }
                  />
                  <p className="text-[14px] font-medium text-[var(--color-champagne)]">
                    {results.beforeLabel}
                  </p>
                </div>

                <div className="space-y-2">
                  <ResultPhotoSlot
                    src={item.afterImage}
                    alt={
                      item.afterImageAlt ??
                      `${results.afterLabel} — ${item.title}`
                    }
                  />
                  <p className="text-[14px] font-medium text-[var(--color-primary)]">
                    {results.afterLabel}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#FEFEFE]/12 space-y-2 flex-1 flex flex-col justify-start">
                <p className="text-[13px] leading-[1.5] text-[var(--color-champagne)]/90">
                  {item.protocol} | {item.timeline}
                </p>
                <h3 className="text-[22px] font-semibold text-[var(--color-white)] leading-[1.22]">
                  {item.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[var(--color-beige-soft)]">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-[14px] text-[var(--color-champagne)] text-center">
          {results.disclaimer}
        </p>
      </div>
    </section>
  );
}
