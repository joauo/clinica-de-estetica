import { SITE_CONFIG } from "../config";

export function TestimonialsSection() {
  const { testimonials } = SITE_CONFIG;
  const featuredItem =
    testimonials.items.find((item) => item.featured) ?? testimonials.items[0];
  const secondaryItems = testimonials.items.filter(
    (item) => item.id !== featuredItem.id
  );

  return (
    <section
      id="depoimentos"
      className="bg-[var(--color-white)] py-14 lg:py-20 border-t border-[var(--color-border)]"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="text-[34px] lg:text-[42px] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-text)] max-w-xl">
            {testimonials.title}
          </h2>
          <p className="text-[15px] leading-[1.6] text-[var(--color-text-secondary)] max-w-md">
            {testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <article className="lg:col-span-7 bg-[var(--color-white)] border border-[var(--color-sand)] shadow-sm rounded-[16px] p-8 lg:p-10 flex flex-col justify-between gap-8">
            <p className="font-serif-display text-[24px] lg:text-[28px] font-medium leading-[1.35] text-[var(--color-text)]">
              “{featuredItem.quote}”
            </p>

            <div className="pt-5 border-t border-[var(--color-border)] flex items-center gap-3.5">
              <div
                aria-hidden="true"
                className="w-11 h-11 rounded-full bg-[var(--color-beige-soft)] border border-[var(--color-sand)] shrink-0"
              />
              <div>
                <p className="text-[15px] font-medium text-[var(--color-text)]">
                  {featuredItem.patientName}
                </p>
                <p className="text-[13px] text-[var(--color-text-muted)] mt-0.5">
                  {featuredItem.procedure}
                </p>
              </div>
            </div>
          </article>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryItems.map((item) => (
              <article
                key={item.id}
                className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[16px] p-6 flex flex-col justify-between gap-5"
              >
                <p className="text-[15px] leading-[1.65] text-[var(--color-text)]">
                  “{item.quote}”
                </p>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 rounded-full bg-[var(--color-beige-soft)] border border-[var(--color-sand)] shrink-0"
                  />
                  <div>
                    <p className="text-[14px] font-medium text-[var(--color-text)]">
                      {item.patientName}
                    </p>
                    <p className="text-[13px] text-[var(--color-text-muted)]">
                      {item.procedure}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
