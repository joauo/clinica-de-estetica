import { SITE_CONFIG } from "../config";

export function ResultsSection() {
  const { results } = SITE_CONFIG;

  return (
    <section
      id="resultados"
      className="bg-[var(--color-brown)] text-[var(--color-white)] py-24 lg:py-32"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="text-[34px] lg:text-[42px] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-white)] max-w-xl">
            {results.title}
          </h2>
          <p className="text-[15px] leading-[1.65] text-[var(--color-champagne)] max-w-md">
            {results.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {results.cases.map((item, idx) => {
            const isFeaturedWide = idx === 0;

            if (isFeaturedWide) {
              return (
                <article
                  key={item.id}
                  className="lg:col-span-12 rounded-[16px] border border-[#FEFEFE]/15 bg-[#361D14] p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  <div className="lg:col-span-7 grid grid-cols-2 gap-3.5">
                    <div className="space-y-2">
                      <div
                        aria-hidden="true"
                        className="aspect-[4/3] w-full rounded-[12px] bg-[#2B160F] border border-[#FEFEFE]/15"
                      />
                      <p className="text-[12px] font-medium text-[var(--color-champagne)]">
                        {results.beforeLabel}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div
                        aria-hidden="true"
                        className="aspect-[4/3] w-full rounded-[12px] bg-[#2E1911] border border-[var(--color-primary)]/40"
                      />
                      <p className="text-[12px] font-medium text-[var(--color-primary)]">
                        {results.afterLabel}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--color-champagne)]/85">
                      <span>{item.protocol}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.timeline}</span>
                    </div>
                    <h3 className="text-[26px] font-semibold text-[var(--color-white)] leading-[1.2]">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-[1.65] text-[var(--color-beige-soft)]">
                      {item.summary}
                    </p>
                    <p className="text-[12px] text-[var(--color-champagne)]/75 pt-2 border-t border-[#FEFEFE]/10">
                      {results.illustrativeCaption}
                    </p>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={item.id}
                className="lg:col-span-6 rounded-[16px] border border-[#FEFEFE]/15 bg-[#361D14] p-6 flex flex-col justify-between gap-5"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <div
                      aria-hidden="true"
                      className="aspect-[3/4] w-full rounded-[12px] bg-[#2B160F] border border-[#FEFEFE]/15"
                    />
                    <p className="text-[12px] font-medium text-[var(--color-champagne)]">
                      {results.beforeLabel}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div
                      aria-hidden="true"
                      className="aspect-[3/4] w-full rounded-[12px] bg-[#2E1911] border border-[var(--color-primary)]/40"
                    />
                    <p className="text-[12px] font-medium text-[var(--color-primary)]">
                      {results.afterLabel}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#FEFEFE]/12 space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--color-champagne)]/85">
                    <span>{item.protocol}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.timeline}</span>
                  </div>
                  <h3 className="text-[22px] font-semibold text-[var(--color-white)] leading-[1.22]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-[var(--color-beige-soft)]">
                    {item.summary}
                  </p>
                  <p className="text-[12px] text-[var(--color-champagne)]/75 pt-1">
                    {results.illustrativeCaption}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-[13px] text-[var(--color-champagne)]/85 text-center">
          {results.disclaimer}
        </p>
      </div>
    </section>
  );
}
