import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { SITE_CONFIG } from "../config";
import { MediaSlot } from "./MediaSlot";
import { Reveal } from "./Reveal";

export function AboutSection() {
  const { about, brand } = SITE_CONFIG;
  const description = about.descriptionTemplate.replace(
    "{clinicName}",
    brand.name
  );

  const metricsRef = useRef<HTMLDivElement | null>(null);
  const [metricsVisible, setMetricsVisible] = useState(false);

  useEffect(() => {
    const el = metricsRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setMetricsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setMetricsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      className="scroll-mt-16 bg-[var(--color-beige-soft)] py-16 lg:py-28 border-t border-[var(--color-border)]"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-6 lg:gap-0">
          <div className="lg:col-start-1 lg:col-end-7 lg:row-start-1">
            <MediaSlot
              src={about.mainImage}
              alt={about.mainImageAlt}
              width={800}
              height={900}
              className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[460px] w-full rounded-[16px] bg-gradient-to-br from-[#EAE3D8] via-[#E3DCD2] to-[#DCD2C5] border border-[var(--color-sand)]"
            />
          </div>

          <div className="lg:col-start-6 lg:col-end-13 lg:row-start-1 relative z-10 bg-[var(--color-white)] border border-[var(--color-sand)] shadow-sm rounded-[16px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-start justify-between gap-5 mb-4">
                <div>
                  <p className="text-[13px] tracking-[0.06em] text-[var(--color-text-muted)] mb-2">
                    {about.eyebrow}
                  </p>
                  <h2 className="text-[clamp(1.85rem,3.2vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-text)]">
                    {about.title}
                  </h2>
                </div>

                <MediaSlot
                  src={about.detailImage}
                  alt={about.detailImageAlt}
                  width={320}
                  height={240}
                  className="hidden lg:block w-32 xl:w-36 aspect-[4/3] rounded-[12px] bg-[var(--color-champagne)] border border-[var(--color-sand)] shadow-xs shrink-0"
                />
              </div>

              <p className="text-[16px] leading-[1.68] text-[var(--color-text-secondary)]">
                {description}
              </p>
            </div>

            <ul className="space-y-3 pt-5 border-t border-[var(--color-border)]">
              {about.pillars.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[15px] leading-[1.6] text-[var(--color-text)]"
                >
                  <span
                    aria-hidden="true"
                    className="w-5 h-5 rounded-full bg-[var(--color-beige-soft)] border border-[var(--color-sand)] flex items-center justify-center shrink-0 mt-0.5"
                  >
                    <Check
                      className="w-3 h-3 text-[var(--color-brown)]"
                      aria-hidden="true"
                    />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </Reveal>

        <div
          ref={metricsRef}
          className="mt-10 lg:mt-14 border-y border-[var(--color-sand)] py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {about.metrics.map((metric, idx) => (
            <div
              key={metric.id}
              data-visible={metricsVisible}
              style={{ transitionDelay: `${(idx % 3) * 60}ms` }}
              className="reveal-metric md:border-r md:last:border-r-0 border-[var(--color-sand)] md:pr-6"
            >
              <p className="font-serif-display text-[38px] lg:text-[46px] font-semibold leading-none text-[var(--color-brown)] tabular-nums">
                {metric.value}
              </p>
              <p className="text-[16px] leading-[1.55] text-[var(--color-text-secondary)] mt-2.5">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="card-hover-lift mt-10 lg:mt-14 bg-[var(--color-white)] border border-[var(--color-border)] rounded-[16px] p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="md:col-span-4 lg:col-span-3">
            <MediaSlot
              src={about.professional.image}
              alt={about.professional.imageAlt}
              width={480}
              height={600}
              className="aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px] md:max-w-none mx-auto rounded-[16px] bg-gradient-to-br from-[#EAE3D8] via-[#E3DCD2] to-[#DCD2C5] border border-[var(--color-sand)]"
            />
          </div>

          <div className="md:col-span-8 lg:col-span-9 space-y-3">
            <p className="text-[13px] tracking-[0.06em] text-[var(--color-text-muted)]">
              {about.professional.eyebrow}
            </p>
            <div>
              <h3 className="text-[28px] lg:text-[32px] font-semibold leading-[1.15] text-[var(--color-text)]">
                {about.professional.name}
              </h3>
              <p className="text-[15px] font-medium text-[var(--color-brown)] mt-1">
                {about.professional.credentials}
              </p>
            </div>
            <p className="text-[16px] leading-[1.7] text-[var(--color-text-secondary)] max-w-2xl">
              {about.professional.bio}
            </p>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
