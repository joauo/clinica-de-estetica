import { useRef, useState, type KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "../config";
import { Reveal } from "./Reveal";

export function FaqSection() {
  const { faq } = SITE_CONFIG;
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const count = faq.items.length;
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown") {
      nextIndex = (index + 1) % count;
    } else if (event.key === "ArrowUp") {
      nextIndex = (index - 1 + count) % count;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = count - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      triggerRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section
      id="faq"
      className="scroll-mt-16 bg-[var(--color-surface)] py-16 lg:py-24 border-t border-[var(--color-border)]"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <Reveal className="lg:col-span-4" staggerIndex={0}>
            <h2 className="text-[clamp(1.85rem,3.2vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-text)] mb-3">
              {faq.title}
            </h2>
            <p className="text-[16px] leading-[1.65] text-[var(--color-text-secondary)]">
              {faq.subtitle}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-8 space-y-3" staggerIndex={1}>
            {faq.items.map((item, idx) => {
              const isOpen = openId === item.id;
              const triggerId = `faq-trigger-${item.id}`;
              const panelId = `faq-panel-${item.id}`;

              return (
                <div
                  key={item.id}
                  className="bg-[var(--color-white)] border border-[var(--color-border)] rounded-[16px] overflow-hidden transition-colors"
                >
                  <h3>
                    <button
                      ref={(el) => {
                        triggerRefs.current[idx] = el;
                      }}
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                      onKeyDown={(e) => handleKeyDown(e, idx)}
                      className="w-full min-h-[56px] px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-[var(--color-beige-soft)]/40 transition-colors"
                    >
                      <span className="font-serif-display text-[20px] sm:text-[22px] font-semibold leading-[1.25] text-[var(--color-text)]">
                        {item.question}
                      </span>
                      <ChevronDown
                        aria-hidden="true"
                        className={`w-5 h-5 text-[var(--color-brown)] shrink-0 transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 visible"
                        : "grid-rows-[0fr] opacity-0 invisible"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-[var(--color-border)]/70">
                        <p className="text-[16px] leading-[1.68] text-[var(--color-text-secondary)] pt-3">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
