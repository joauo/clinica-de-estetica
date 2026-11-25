import { SITE_CONFIG } from "../config";

export function ResultsSection() {
  const { results } = SITE_CONFIG;

  return (
    <section
      id="resultados"
      className="bg-[var(--color-white)] py-16 lg:py-20 border-t border-[var(--color-border)]"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <p className="text-[13px] tracking-[0.06em] text-[var(--color-text-muted)] mb-2">
              {results.eyebrow}
            </p>
            <h2 className="text-[34px] lg:text-[42px] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-text)]">
              {results.title}
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-[var(--color-text-secondary)] max-w-md">
            {results.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {results.cases.map((item) => (
            <article
              key={item.id}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[18px] p-5 flex flex-col justify-between gap-5"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div
                    aria-hidden="true"
                    className="aspect-[3/4] w-full rounded-xl bg-[#EAE3D8]/70 border border-[var(--color-sand)]"
                  />
                  <p className="text-[12px] font-medium tracking-[0.04em] text-[var(--color-text-muted)]">
                    {results.beforeLabel}
                  </p>
                </div>

                <div className="space-y-2">
                  <div
                    aria-hidden="true"
                    className="aspect-[3/4] w-full rounded-xl bg-[#E3DCD2]/80 border border-[var(--color-sand)]"
                  />
                  <p className="text-[12px] font-medium tracking-[0.04em] text-[var(--color-brown)]">
                    {results.afterLabel}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)]">
                <div className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--color-text-muted)] mb-1.5">
                  <span>{item.protocol}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.timeline}</span>
                </div>
                <h3 className="text-[21px] font-semibold text-[var(--color-text)] leading-[1.22] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-[13px] text-[var(--color-text-muted)] text-center">
          {results.disclaimer}
        </p>
      </div>
    </section>
  );
}
