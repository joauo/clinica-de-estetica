import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PROCEDURES, type ProcedureCategory } from "../data/clinicData";

interface ServicesSectionProps {
  onSelectProcedure: (procedureName: string) => void;
}

const CATEGORIES: ProcedureCategory[] = [
  "Todos",
  "Faciais",
  "Tecnologias",
  "Corporais",
  "Avaliação",
];

export function ServicesSection({ onSelectProcedure }: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProcedureCategory>("Todos");
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const trackRef = useRef<HTMLDivElement | null>(null);

  const filteredProcedures =
    selectedCategory === "Todos"
      ? PROCEDURES
      : PROCEDURES.filter((item) => item.category === selectedCategory);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(el.scrollLeft < maxScrollLeft - 8);

    const firstCard = el.querySelector<HTMLElement>("[data-carousel-card]");
    if (firstCard) {
      const cardStep = firstCard.offsetWidth + 24;
      const idx = Math.round(el.scrollLeft / cardStep);
      setActiveSlide(Math.max(0, Math.min(idx, filteredProcedures.length - 1)));
    }
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "auto" });
    setActiveSlide(0);
    const frame = requestAnimationFrame(updateScrollState);
    return () => cancelAnimationFrame(frame);
  }, [selectedCategory, filteredProcedures.length]);

  useEffect(() => {
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [filteredProcedures.length]);

  const handleScrollBy = (direction: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-carousel-card]");
    const step = firstCard ? firstCard.offsetWidth + 24 : el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <section id="servicos" className="bg-[#FEFEFE] py-16 lg:py-20">
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.08em] text-[#55504B] mb-2">
              Menu de Procedimentos
            </p>
            <h2 className="text-[32px] lg:text-[36px] font-medium leading-[1.18] tracking-[-0.02em] text-[#252321]">
              Tratamentos desenhados para resultados naturais
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar procedimentos por categoria"
            className="inline-flex flex-wrap p-1 rounded-xl bg-[#F4F1EC] border border-[#EAE8E5] self-start"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#BA9B6E] ${
                    active
                      ? "bg-[#FEFEFE] text-[#252321] shadow-xs"
                      : "text-[#55504B] hover:text-[#252321]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={updateScrollState}
          aria-label="Carrossel de procedimentos"
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {filteredProcedures.map((procedure) => (
            <article
              key={procedure.id}
              data-carousel-card
              className="w-[85%] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start bg-[#F7F6F4] border border-[#EAE8E5] rounded-[18px] overflow-hidden flex flex-col transition-colors hover:border-[#DCD2C5]"
            >
              <div
                aria-hidden="true"
                className="aspect-[4/3] w-full bg-[#F4F1EC] border-b border-[#EAE8E5]"
              />

              <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#55504B] mb-2">
                    <span>{procedure.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-tabular">{procedure.duration}</span>
                  </div>

                  <h3 className="text-[19px] font-medium leading-[1.25] tracking-[-0.01em] text-[#252321] mb-2.5">
                    {procedure.name}
                  </h3>

                  <p className="text-[13px] leading-[1.6] text-[#55504B]">
                    {procedure.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE8E5] flex items-center justify-between gap-3">
                  <span className="text-[12px] text-[#706A64]">
                    {procedure.highlight}
                  </span>

                  <button
                    type="button"
                    onClick={() => onSelectProcedure(procedure.name)}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#45251A] hover:text-[#BA9B6E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#BA9B6E] rounded-sm"
                  >
                    <span>Agendar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-xs text-[#55504B] font-mono-tabular">
            {String(activeSlide + 1).padStart(2, "0")} /{" "}
            {String(filteredProcedures.length).padStart(2, "0")} ·{" "}
            {filteredProcedures.length}{" "}
            {filteredProcedures.length === 1 ? "procedimento" : "procedimentos"}
          </p>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => handleScrollBy("prev")}
              disabled={!canScrollPrev}
              aria-label="Procedimento anterior"
              className="w-11 h-11 rounded-full border border-[#DCD2C5] bg-[#FEFEFE] text-[#252321] flex items-center justify-center hover:border-[#BA9B6E] hover:bg-[#F7F6F4] disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-[#BA9B6E]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => handleScrollBy("next")}
              disabled={!canScrollNext}
              aria-label="Próximo procedimento"
              className="w-11 h-11 rounded-full border border-[#DCD2C5] bg-[#FEFEFE] text-[#252321] flex items-center justify-center hover:border-[#BA9B6E] hover:bg-[#F7F6F4] disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-[#BA9B6E]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
