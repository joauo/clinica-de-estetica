import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "../config";
import { MediaSlot } from "./MediaSlot";

interface BodyTreatmentsSectionProps {
  onSelectProcedure: (procedureName: string) => void;
}

export function BodyTreatmentsSection({
  onSelectProcedure,
}: BodyTreatmentsSectionProps) {
  const { bodyTreatments, brand } = SITE_CONFIG;
  const subtitle = bodyTreatments.subtitleTemplate.replace(
    "{clinicName}",
    brand.name
  );

  return (
    <section
      id="corporais"
      className="bg-[var(--color-surface)] py-16 lg:py-24 border-t border-[var(--color-border)]"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-[13px] tracking-[0.06em] text-[var(--color-text-muted)] mb-2">
            {bodyTreatments.eyebrow}
          </p>
          <h2 className="text-[34px] lg:text-[42px] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-text)] mb-3">
            {bodyTreatments.title}
          </h2>
          <p className="text-[15px] lg:text-[16px] leading-[1.65] text-[var(--color-text-secondary)]">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <MediaSlot
              src={bodyTreatments.featuredImage}
              alt={bodyTreatments.featuredImageAlt}
              className="aspect-[4/5] w-full rounded-[16px] bg-gradient-to-br from-[#EAE3D8] via-[#E3DCD2] to-[#DCD2C5] border border-[var(--color-sand)]"
            />
          </div>

          <div className="lg:col-span-8 border-t border-[var(--color-sand)]">
            {bodyTreatments.items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectProcedure(item.name)}
                className="group w-full text-left py-6 border-b border-[var(--color-sand)] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-8 hover:bg-[var(--color-beige-soft)]/50 px-2 -mx-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
              >
                <h3 className="sm:w-[38%] text-[22px] font-semibold text-[var(--color-text)] leading-[1.25] shrink-0">
                  {item.name}
                </h3>

                <div className="sm:w-[62%] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-brown)] group-hover:text-[var(--color-primary-active)] whitespace-nowrap shrink-0 transition-colors">
                    <span>{bodyTreatments.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
