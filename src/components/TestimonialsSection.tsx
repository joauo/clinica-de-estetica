import { Star } from "lucide-react";
import { SITE_CONFIG } from "../config";

export function TestimonialsSection() {
  const { testimonials } = SITE_CONFIG;

  return (
    <section
      id="depoimentos"
      className="bg-[var(--color-white)] py-16 lg:py-20 border-t border-[var(--color-border)]"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <p className="text-[13px] tracking-[0.06em] text-[var(--color-text-muted)] mb-2">
              {testimonials.eyebrow}
            </p>
            <h2 className="text-[34px] lg:text-[42px] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-text)]">
              {testimonials.title}
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-[var(--color-text-secondary)] max-w-md">
            {testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.items.map((item) => (
            <article
              key={item.id}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[18px] p-7 flex flex-col justify-between gap-6"
            >
              <div>
                <div
                  className="flex items-center gap-1 mb-4"
                  aria-label="Avaliação 5 de 5 estrelas"
                >
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-[var(--color-primary)] text-[var(--color-primary)]"
                    />
                  ))}
                </div>

                <p className="text-[15px] leading-[1.68] text-[var(--color-text)]">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-5 border-t border-[var(--color-border)] flex items-center gap-3.5">
                <div
                  aria-hidden="true"
                  className="w-11 h-11 rounded-full bg-[var(--color-beige-soft)] border border-[var(--color-sand)] shrink-0"
                />
                <div>
                  <p className="text-[15px] font-medium text-[var(--color-text)]">
                    {item.patientName}
                  </p>
                  <p className="text-[13px] text-[var(--color-text-muted)] mt-0.5">
                    {item.procedure}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
