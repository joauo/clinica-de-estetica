import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG, type ProcedureCategory } from "../config";
import { MediaSlot } from "./MediaSlot";
import { Reveal } from "./Reveal";

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
        <Reveal>
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
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {filteredProcedures.map((procedure, idx) => {
            const total = filteredProcedures.length;
            const isSingle = total === 1;
            const isFullWidthTail = total === 9 && idx === 8;
            const isFullWidthStrip = isSingle || isFullWidthTail;

            let colSpanClass = "md:col-span-6";
            if (isFullWidthStrip) {
              colSpanClass = "md:col-span-12";
            } else if (total === 2) {
              colSpanClass = idx === 0 ? "md:col-span-7" : "md:col-span-5";
            } else {
              const rowSlot = idx % 8;
              if (rowSlot === 0 || rowSlot === 3 || rowSlot === 6) {
                colSpanClass = "md:col-span-7";
              } else if (rowSlot === 1 || rowSlot === 2 || rowSlot === 7) {
                colSpanClass = "md:col-span-5";
              } else {
                colSpanClass = "md:col-span-6";
              }
            }

            const unifiedCardClass =
              "card-hover-lift bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[16px] shadow-xs overflow-hidden hover:border-[var(--color-primary)]/70";

            if (isFullWidthStrip) {
              return (
                <Reveal
                  key={procedure.id}
                  staggerIndex={idx}
                  className={`${colSpanClass} h-full`}
                >
                  <article
                    className={`${unifiedCardClass} h-full grid grid-cols-1 md:grid-cols-12`}
                  >
                    <MediaSlot
                      src={procedure.image}
                      alt={procedure.imageAlt}
                      width={640}
                      height={480}
                      className="aspect-[4/3] md:aspect-auto md:col-span-5 md:order-2 md:h-full md:min-h-[260px] w-full bg-[var(--color-beige-soft)] border-b md:border-b-0 md:border-l border-[var(--color-border)]"
                    />

                    <div className="md:col-span-7 md:order-1 p-6 flex flex-col gap-5">
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-[13px] text-[var(--color-text-muted)] tabular-nums">
                          <span>{procedure.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{procedure.duration}</span>
                        </div>

                        <h3 className="text-[24px] lg:text-[26px] font-semibold leading-[1.18] text-[var(--color-text)]">
                          {procedure.name}
                        </h3>

                        <p className="text-[16px] leading-[1.65] text-[var(--color-text-secondary)]">
                          {procedure.description}
                        </p>

                        {procedure.highlight.trim() && (
                          <p className="text-[14px] text-[var(--color-text-muted)] pt-0.5">
                            {procedure.highlight}
                          </p>
                        )}
                      </div>

                      <div className="mt-auto pt-4 border-t border-[var(--color-border)] flex items-center justify-end">
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
                </Reveal>
              );
            }

            return (
              <Reveal
                key={procedure.id}
                staggerIndex={idx}
                className={`${colSpanClass} h-full`}
              >
                <article
                  className={`${unifiedCardClass} h-full flex flex-col`}
                >
                  <MediaSlot
                    src={procedure.image}
                    alt={procedure.imageAlt}
                    width={640}
                    height={400}
                    className="aspect-[4/3] md:aspect-auto md:h-[260px] w-full bg-[var(--color-beige-soft)] border-b border-[var(--color-border)] shrink-0"
                  />

                  <div className="p-6 flex-1 flex flex-col gap-5">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-[13px] text-[var(--color-text-muted)] tabular-nums">
                        <span>{procedure.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{procedure.duration}</span>
                      </div>

                      <h3 className="text-[22px] lg:text-[24px] font-semibold leading-[1.2] text-[var(--color-text)]">
                        {procedure.name}
                      </h3>

                      <p className="text-[16px] leading-[1.65] text-[var(--color-text-secondary)]">
                        {procedure.description}
                      </p>

                      {procedure.highlight.trim() && (
                        <p className="text-[14px] text-[var(--color-text-muted)] pt-0.5">
                          {procedure.highlight}
                        </p>
                      )}
                    </div>

                    <div className="mt-auto pt-4 border-t border-[var(--color-border)] flex items-center justify-end">
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
