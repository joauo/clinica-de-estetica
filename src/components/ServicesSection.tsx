import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG, type ProcedureCategory } from "../config";

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

  const isFullTenGrid =
    selectedCategory === "Todos" && filteredProcedures.length === 10;

  return (
    <section id="servicos" className="bg-[var(--color-white)] py-16 lg:py-20">
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-[13px] tracking-[0.06em] text-[var(--color-text-muted)] mb-2">
              {services.eyebrow}
            </p>
            <h2 className="text-[34px] lg:text-[42px] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-text)]">
              {services.title}
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar procedimentos por categoria"
            className="inline-flex flex-wrap p-1 rounded-xl bg-[var(--color-beige-soft)] border border-[var(--color-border)] self-start"
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
                  className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] ${
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProcedures.map((procedure, idx) => {
            const isFeaturedLastCard = isFullTenGrid && idx === 9;

            if (isFeaturedLastCard) {
              return (
                <article
                  key={procedure.id}
                  className="md:col-span-2 lg:col-span-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[18px] overflow-hidden grid grid-cols-1 md:grid-cols-12 transition-colors hover:border-[var(--color-sand)]"
                >
                  <div
                    aria-hidden="true"
                    className="md:col-span-4 aspect-[4/3] md:aspect-auto md:min-h-[220px] w-full bg-[var(--color-beige-soft)] border-b md:border-b-0 md:border-r border-[var(--color-border)]"
                  />

                  <div className="md:col-span-8 p-6 lg:p-8 flex flex-col justify-between gap-5">
                    <div>
                      <div className="flex items-center gap-2 text-[13px] text-[var(--color-text-muted)] mb-2 tabular-nums">
                        <span>{procedure.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{procedure.duration}</span>
                      </div>

                      <h3 className="text-[24px] lg:text-[26px] font-semibold leading-[1.2] text-[var(--color-text)] mb-2.5">
                        {procedure.name}
                      </h3>

                      <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)] max-w-2xl">
                        {procedure.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between gap-3">
                      <span className="text-[13px] text-[var(--color-text-muted)]">
                        {procedure.highlight}
                      </span>

                      <button
                        type="button"
                        onClick={() => onSelectProcedure(procedure.name)}
                        className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-brown)] hover:text-[var(--color-primary-active)] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] rounded-sm"
                      >
                        <span>{services.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={procedure.id}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[18px] overflow-hidden flex flex-col transition-colors hover:border-[var(--color-sand)]"
              >
                <div
                  aria-hidden="true"
                  className="aspect-[4/3] w-full bg-[var(--color-beige-soft)] border-b border-[var(--color-border)]"
                />

                <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-2 text-[13px] text-[var(--color-text-muted)] mb-2 tabular-nums">
                      <span>{procedure.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{procedure.duration}</span>
                    </div>

                    <h3 className="text-[22px] font-semibold leading-[1.22] text-[var(--color-text)] mb-2.5">
                      {procedure.name}
                    </h3>

                    <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
                      {procedure.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between gap-3">
                    <span className="text-[13px] text-[var(--color-text-muted)]">
                      {procedure.highlight}
                    </span>

                    <button
                      type="button"
                      onClick={() => onSelectProcedure(procedure.name)}
                      className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-brown)] hover:text-[var(--color-primary-active)] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] rounded-sm"
                    >
                      <span>{services.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" />
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
