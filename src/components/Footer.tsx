import { CLINIC_INFO } from "../data/clinicData";

export function Footer() {
  const directWhatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Olá! Gostaria de mais informações sobre os procedimentos da ${CLINIC_INFO.name}.`
  )}`;

  return (
    <footer className="bg-[#F7F6F4] border-t border-[#EAE8E5] pt-14 pb-10">
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#EAE8E5]">
          <div>
            <span className="text-lg font-semibold tracking-[-0.02em] text-[#252321]">
              {CLINIC_INFO.name}
            </span>
            <p className="text-[13px] leading-[1.6] text-[#55504B] mt-3 max-w-xs">
              {CLINIC_INFO.tagline}. Ciência, tecnologia e olhar artístico para resultados naturais.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-medium text-[#252321] mb-3.5">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-[13px] text-[#55504B]">
              <li>
                <a href="#topo" className="hover:text-[#252321] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#252321] transition-colors">
                  Procedimentos
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-[#252321] transition-colors">
                  Resultados
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#252321] transition-colors">
                  Sobre a Clínica
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#252321] transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-medium text-[#252321] mb-3.5">
              Contato
            </h3>
            <ul className="space-y-2.5 text-[13px] text-[#55504B]">
              <li className="font-mono-tabular">{CLINIC_INFO.phoneDisplay}</li>
              <li>{CLINIC_INFO.email}</li>
              <li>{CLINIC_INFO.address}</li>
              <li>
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#45251A] font-medium hover:underline"
                >
                  Instagram: {CLINIC_INFO.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-medium text-[#252321] mb-3.5">
              Atendimento
            </h3>
            <p className="text-[13px] leading-[1.6] text-[#55504B] mb-4">
              {CLINIC_INFO.hours}
            </p>
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[42px] px-5 py-2 rounded-full bg-[#45251A] text-[#FEFEFE] text-[13px] font-medium hover:bg-[#5E3526] transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-[#55504B]">
          <p>© 2026 {CLINIC_INFO.name}. Todos os direitos reservados.</p>
          <p>Responsável Técnico: [Nome do(a) Profissional · CRM/CRBM 00000]</p>
        </div>
      </div>
    </footer>
  );
}
