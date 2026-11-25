import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "../config";

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
      className="bg-[var(--color-surface)] py-16 lg:py-20 border-t border-[var(--color-border)]"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-4">
            <div
              aria-hidden="true"
              className="h-full min-h-[280px] lg:min-h-[360px] rounded-[20px] bg-gradient-to-br from-[#EAE3D8] via-[#E3DCD2] to-[#DCD2C5] border border-[var(--color-sand)]"
            />
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bodyTreatments.items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectProcedure(item.name)}
                className="group text-left bg-[var(--color-white)] border border-[var(--color-border)] rounded-[18px] p-6 flex flex-col justify-between gap-4 hover:border-[var(--color-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
              >
                <div>
                  <span className="block font-serif-display text-[36px] font-medium leading-none text-[var(--color-primary)] group-hover:text-[var(--color-brown)] transition-colors tabular-nums mb-3">
                    {item.number}
                  </span>

                  <h3 className="text-[21px] font-semibold text-[var(--color-text)] leading-[1.25] mb-2">
                    {item.name}
                  </h3>

                  <p className="text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[13px] font-medium text-[var(--color-brown)] group-hover:text-[var(--color-primary-active)] transition-colors">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
