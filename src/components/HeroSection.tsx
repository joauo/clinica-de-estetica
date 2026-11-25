import { useState } from "react";
import { ArrowRight } from "lucide-react";

const HERO_BOTTOM_CARDS = [
  {
    index: "01",
    title: "Corpo Clínico",
    detail: "Especialistas em precisão anatômica",
    href: "#sobre",
  },
  {
    index: "02",
    title: "Tecnologias",
    detail: "Equipamentos de alta performance",
    href: "#servicos",
  },
  {
    index: "03",
    title: "Protocolos",
    detail: "Planejamento único sob medida",
    href: "#servicos",
  },
  {
    index: "04",
    title: "Experiência",
    detail: "Privacidade e atendimento exclusivo",
    href: "#agendamento",
  },
];

export function HeroSection() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-[#3B2A20] w-full min-h-[600px] lg:h-[680px] xl:h-[720px] flex flex-col justify-between"
    >
      {/* Background photograph */}
      {!imageFailed && (
        <img
          src="/assets/aistudio/img-hero-pt3_9c5f3cf0.png"
          alt="Atendimento facial de estética avançada em ambiente iluminado e sereno"
          referrerPolicy="no-referrer"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* Measured contrast scrims so foreground text stays legible over any viewport */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#241A13]/85 via-[#241A13]/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#1E1510]/65 via-transparent to-[#1E1510]/30"
      />

      {/* Foreground Content */}
      <div className="relative z-10 w-[min(100%-32px,1200px)] mx-auto flex-1 flex flex-col justify-between pt-20 pb-5 lg:pt-20 lg:pb-6 xl:pt-24 xl:pb-10 gap-4 lg:gap-4 xl:gap-8">
        <div className="max-w-xl my-auto py-1 xl:py-2">
          <p className="text-xs tracking-[0.08em] text-[#E8E1D7]/90 mb-2 xl:mb-3">
            Estética Avançada · Protocolos Personalizados
          </p>

          <h1 className="text-[34px] sm:text-[42px] lg:text-[40px] xl:text-[52px] font-medium leading-[1.08] tracking-[-0.03em] text-[#FEFEFE] mb-3 xl:mb-4">
            Estética de alta precisão
            <br />
            para a sua melhor versão
          </h1>

          <p className="text-[14px] xl:text-[15px] leading-[1.6] xl:leading-[1.65] text-[#F4F1EC]/90 max-w-[50ch] mb-5 xl:mb-7">
            Unimos tecnologias de vanguarda, protocolos minimamente invasivos e olhar clínico refinado para entregar resultados naturais, duradouros e discretos em uma experiência pensada para o seu conforto.
          </p>

          <div className="flex flex-wrap items-center gap-3 xl:gap-4">
            <a
              href="#agendamento"
              className="inline-flex items-center justify-center gap-2.5 min-h-[42px] xl:min-h-[46px] px-6 xl:px-7 py-2.5 xl:py-3 rounded-full bg-[#E8E1D7] text-[#252321] text-[13px] font-medium hover:bg-[#FEFEFE] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#BA9B6E] focus-visible:outline-offset-2"
            >
              <span>Agendar Avaliação</span>
              <ArrowRight className="w-4 h-4 text-[#45251A]" />
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 min-h-[42px] xl:min-h-[46px] px-5 xl:px-6 py-2.5 xl:py-3 rounded-full border border-[#FEFEFE]/40 bg-[#252321]/25 backdrop-blur-xs text-[#FEFEFE] text-[13px] font-medium hover:bg-[#FEFEFE]/15 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#BA9B6E] focus-visible:outline-offset-2"
            >
              <span>Conhecer Procedimentos</span>
            </a>
          </div>
        </div>

        {/* Bottom 4-card row over the background image, matching the reference composition */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-4">
          {HERO_BOTTOM_CARDS.map((card) => (
            <a
              key={card.index}
              href={card.href}
              className="group rounded-[14px] bg-[#D8CCBC]/85 backdrop-blur-md border border-[#FEFEFE]/25 overflow-hidden flex items-stretch min-h-[74px] xl:min-h-[88px] hover:bg-[#E8E1D7]/95 transition-colors focus-visible:outline-2 focus-visible:outline-[#BA9B6E]"
            >
              <div
                aria-hidden="true"
                className="w-[32%] bg-[#C6B6A1]/60 border-r border-[#252321]/10 shrink-0"
              />
              <div className="p-4 flex flex-col justify-center">
                <p className="text-[11px] font-mono-tabular tracking-[0.06em] text-[#45251A] mb-0.5">
                  {card.index} · {card.title.toUpperCase()}
                </p>
                <p className="text-[13px] font-medium leading-[1.35] text-[#252321]">
                  {card.detail}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
