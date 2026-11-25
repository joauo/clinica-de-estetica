import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/clinicData";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-[#FEFEFE] py-16 lg:py-20 border-t border-[#EAE8E5]">
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.08em] text-[#55504B] mb-2">
              Experiência das Pacientes
            </p>
            <h2 className="text-[32px] lg:text-[36px] font-medium leading-[1.18] tracking-[-0.02em] text-[#252321]">
              Relatos de quem confia no nosso cuidado
            </h2>
          </div>
          <p className="text-[13px] text-[#55504B] max-w-md">
            Avaliações reais sobre o acolhimento, a discrição do atendimento e a naturalidade dos resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="bg-[#F7F6F4] border border-[#EAE8E5] rounded-[18px] p-7 flex flex-col justify-between gap-6"
            >
              <div>
                <div className="flex items-center gap-1 mb-4" aria-label="Avaliação 5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-[#BA9B6E] text-[#BA9B6E]"
                    />
                  ))}
                </div>

                <p className="text-[14px] leading-[1.65] text-[#252321]">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-5 border-t border-[#EAE8E5] flex items-center gap-3.5">
                <div
                  aria-hidden="true"
                  className="w-11 h-11 rounded-full bg-[#F4F1EC] border border-[#DCD2C5] shrink-0"
                />
                <div>
                  <p className="text-[14px] font-medium text-[#252321]">
                    {item.patientName}
                  </p>
                  <p className="text-[12px] text-[#55504B] mt-0.5">
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
