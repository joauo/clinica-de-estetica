import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "../config";

export function FaqSection() {
  const { faq } = SITE_CONFIG;
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-[var(--color-surface)] py-16 lg:py-24 border-t border-[var(--color-border)]"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-[34px] lg:text-[40px] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-text)] mb-3">
              {faq.title}
            </h2>
            <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
              {faq.subtitle}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {faq.items.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-[var(--color-white)] border border-[var(--color-border)] rounded-[16px] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[var(--color-beige-soft)]/40 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
                  >
                    <span className="font-serif-display text-[21px] font-semibold leading-[1.25] text-[var(--color-text)]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[var(--color-brown)] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 border-t border-[var(--color-border)]/70">
                      <p className="text-[15px] leading-[1.68] text-[var(--color-text-secondary)] pt-3">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
