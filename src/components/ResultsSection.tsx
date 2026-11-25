import { RESULT_CASES } from "../data/clinicData";

export function ResultsSection() {
  return (
    <section id="resultados" className="bg-[#FEFEFE] py-16 lg:py-20 border-t border-[#EAE8E5]">
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.08em] text-[#55504B] mb-2">
              Resultados Clínicos
            </p>
            <h2 className="text-[32px] lg:text-[36px] font-medium leading-[1.18] tracking-[-0.02em] text-[#252321]">
              Antes e depois com foco em naturalidade
            </h2>
          </div>
          <p className="text-[13px] text-[#55504B] max-w-md">
            Evoluções acompanhadas por registro fotográfico padronizado, respeitando a individualidade anatômica de cada paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {RESULT_CASES.map((item) => (
            <article
              key={item.id}
              className="bg-[#F7F6F4] border border-[#EAE8E5] rounded-[18px] p-5 flex flex-col justify-between gap-5"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div
                    aria-hidden="true"
                    className="aspect-[3/4] w-full rounded-xl bg-[#EAE3D8]/70 border border-[#DCD2C5]"
                  />
                  <p className="text-[11px] font-medium tracking-[0.04em] text-[#55504B]">
                    Antes
                  </p>
                </div>

                <div className="space-y-2">
                  <div
                    aria-hidden="true"
                    className="aspect-[3/4] w-full rounded-xl bg-[#E3DCD2]/80 border border-[#DCD2C5]"
                  />
                  <p className="text-[11px] font-medium tracking-[0.04em] text-[#45251A]">
                    Depois
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE8E5]">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#55504B] mb-1.5">
                  <span>{item.protocol}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.timeline}</span>
                </div>
                <h3 className="text-[17px] font-medium text-[#252321] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.55] text-[#55504B]">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
