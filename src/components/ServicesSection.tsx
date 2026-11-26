import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG, type ProcedureCategory } from "../config";
import { MediaSlot } from "./MediaSlot";

interface ServicesSectionProps {
  onSelectProcedure: (procedureName: string) => void;
}

export function ServicesSection({ onSelectProcedure }: ServicesSectionProps) {
  const { services } = SITE_CONFIG;
  const [selectedCategory, setSelectedCategory] =
    useState<ProcedureCategory>("Todos");

  const filteredProcedures =
    selectedCategory === "Todos"
      ? services.items
      : services.items.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="servicos"
      className="scroll-mt-16 bg-[var(--color-white)] py-16 md:py-20 lg:py-28"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
          <h2 className="text-[clamp(1.85rem,3.4vw,2.625rem)] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-text)] max-w-2xl">
            {services.title}
          </h2>

          <div
            role="tablist"
            aria-label="Filtrar procedimentos por categoria"
            className="inline-flex flex-wrap gap-1 p-1 rounded-xl bg-[var(--color-beige-soft)] border border-[var(--color-border)] self-start"
          >
            {services.categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-[44px] px-4 py-2 rounded-lg text-[14px] font-medium transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? "bg-[var(--color-white)] text-[var(--color-text)] shadow-xs"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {filteredProcedures.map((procedure, idx) => {
            const total = filteredProcedures.length;
            const isSingle = total === 1;
            const isFullWidthTail = total === 9 && idx === 8;

            let colSpanClass = "md:col-span-6";
            let isHorizontal = false;
            let imageOnRight = false;

            if (isSingle || isFullWidthTail) {
              colSpanClass = "md:col-span-12";
              isHorizontal = true;
              imageOnRight = true;
            } else if (total === 2) {
              colSpanClass = idx === 0 ? "md:col-span-7" : "md:col-span-5";
              isHorizontal = idx === 0;
            } else {
              const slot = idx % 6;
              if (slot === 0) {
                colSpanClass = "md:col-span-7";
                isHorizontal = true;
                imageOnRight = false;
              } else if (slot === 1) {
                colSpanClass = "md:col-span-5";
              } else if (slot === 2) {
                colSpanClass = "md:col-span-5";
              } else if (slot === 3) {
                colSpanClass = "md:col-span-7";
                isHorizontal = true;
                imageOnRight = true;
              } else {
                colSpanClass = "md:col-span-6";
              }
            }

            const cardStyleClass = procedure.featured
              ? "bg-[var(--color-white)] border border-[var(--color-sand)] shadow-sm"
              : "bg-[var(--color-surface)] border border-[var(--color-border)]";

            if (isHorizontal) {
              return (
                <article
                  key={procedure.id}
                  className={`${colSpanClass} ${cardStyleClass} rounded-[16px] overflow-hidden grid grid-cols-1 md:grid-cols-12 transition-colors hover:border-[var(--color-primary)]/70`}
                >
                  <MediaSlot
                    src={procedure.image}
                    alt={procedure.imageAlt}
                    width={640}
                    height={480}
                    className={`aspect-[16/10] md:aspect-auto md:col-span-5 md:h-full md:min-h-[210px] w-full bg-[var(--color-beige-soft)] ${
                      imageOnRight
                        ? "md:order-2 border-b md:border-b-0 md:border-l border-[var(--color-border)]"
                        : "border-b md:border-b-0 md:border-r border-[var(--color-border)]"
                    }`}
                  />

                  <div
                    className={`md:col-span-7 p-6 lg:p-7 flex flex-col justify-center gap-4 ${
                      imageOnRight ? "md:order-1" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 text-[13px] text-[var(--color-text-muted)] mb-2 tabular-nums">
                        <span>{procedure.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{procedure.duration}</span>
                      </div>

                      <h3 className="text-[26px] lg:text-[31px] font-semibold leading-[1.16] text-[var(--color-text)] mb-3">
                        {procedure.name}
                      </h3>

                      <p className="text-[16px] leading-[1.65] text-[var(--color-text-secondary)]">
                        {procedure.description}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[13px] text-[var(--color-text-muted)]">
                        {procedure.highlight}
                      </span>

                      <button
                        type="button"
                        onClick={() => onSelectProcedure(procedure.name)}
                        className="inline-flex items-center gap-1.5 min-h-[44px] px-2 -mr-2 text-[15px] font-medium text-[var(--color-brown)] hover:text-[var(--color-primary-active)] transition-colors whitespace-nowrap shrink-0 rounded-md"
                      >
                        <span>{services.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={procedure.id}
                className={`${colSpanClass} ${cardStyleClass} rounded-[16px] overflow-hidden flex flex-col transition-colors hover:border-[var(--color-primary)]/70`}
              >
                <MediaSlot
                  src={procedure.image}
                  alt={procedure.imageAlt}
                  width={640}
                  height={400}
                  className="aspect-[16/10] w-full bg-[var(--color-beige-soft)] border-b border-[var(--color-border)]"
                />

                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-[13px] text-[var(--color-text-muted)] mb-2 tabular-nums">
                      <span>{procedure.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{procedure.duration}</span>
                    </div>

                    <h3 className="text-[22px] lg:text-[24px] font-semibold leading-[1.2] text-[var(--color-text)] mb-2.5">
                      {procedure.name}
                    </h3>

                    <p className="text-[16px] leading-[1.65] text-[var(--color-text-secondary)]">
                      {procedure.description}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[13px] text-[var(--color-text-muted)]">
                      {procedure.highlight}
                    </span>

                    <button
                      type="button"
                      onClick={() => onSelectProcedure(procedure.name)}
                      className="inline-flex items-center gap-1.5 min-h-[44px] px-2 -mr-2 text-[15px] font-medium text-[var(--color-brown)] hover:text-[var(--color-primary-active)] transition-colors whitespace-nowrap shrink-0 rounded-md"
                    >
                      <span>{services.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
