import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CLINIC_INFO } from "../data/clinicData";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? "bg-[#FEFEFE]/95 backdrop-blur-sm border-b border-[#EAE8E5]"
          : "bg-transparent"
      }`}
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto h-16 flex items-center justify-between gap-8">
        <a
          href="#topo"
          className={`text-lg font-semibold tracking-[-0.02em] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#BA9B6E] focus-visible:outline-offset-4 rounded-sm transition-colors ${
            isScrolled || mobileMenuOpen ? "text-[#252321]" : "text-[#FEFEFE]"
          }`}
        >
          {CLINIC_INFO.name}
        </a>

        <nav
          aria-label="Navegação principal"
          className={`hidden lg:flex items-center gap-7 text-[13px] transition-colors ${
            isScrolled ? "text-[#55504B]" : "text-[#F4F1EC]/90"
          }`}
        >
          <a
            href="#servicos"
            className={`hover:underline underline-offset-4 decoration-[#BA9B6E] transition-colors whitespace-nowrap shrink-0 ${
              isScrolled ? "hover:text-[#252321]" : "hover:text-[#FEFEFE]"
            }`}
          >
            Procedimentos
          </a>
          <a
            href="#resultados"
            className={`hover:underline underline-offset-4 decoration-[#BA9B6E] transition-colors whitespace-nowrap shrink-0 ${
              isScrolled ? "hover:text-[#252321]" : "hover:text-[#FEFEFE]"
            }`}
          >
            Resultados
          </a>
          <a
            href="#sobre"
            className={`hover:underline underline-offset-4 decoration-[#BA9B6E] transition-colors whitespace-nowrap shrink-0 ${
              isScrolled ? "hover:text-[#252321]" : "hover:text-[#FEFEFE]"
            }`}
          >
            Sobre
          </a>
          <a
            href="#depoimentos"
            className={`hover:underline underline-offset-4 decoration-[#BA9B6E] transition-colors whitespace-nowrap shrink-0 ${
              isScrolled ? "hover:text-[#252321]" : "hover:text-[#FEFEFE]"
            }`}
          >
            Depoimentos
          </a>
          <a
            href="#agendamento"
            className={`hover:underline underline-offset-4 decoration-[#BA9B6E] transition-colors whitespace-nowrap shrink-0 ${
              isScrolled ? "hover:text-[#252321]" : "hover:text-[#FEFEFE]"
            }`}
          >
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#agendamento"
            className={`hidden sm:inline-flex items-center justify-center min-h-[40px] px-5 py-2 rounded-full text-[13px] font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#BA9B6E] focus-visible:outline-offset-2 ${
              isScrolled || mobileMenuOpen
                ? "bg-[#45251A] text-[#FEFEFE] hover:bg-[#5E3526]"
                : "bg-[#E8E1D7] text-[#252321] hover:bg-[#FEFEFE]"
            }`}
          >
            Agendar Avaliação
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            className={`lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border transition-colors focus-visible:outline-2 focus-visible:outline-[#BA9B6E] ${
              isScrolled || mobileMenuOpen
                ? "border-[#EAE8E5] text-[#252321] hover:bg-[#F7F6F4]"
                : "border-[#FEFEFE]/35 text-[#FEFEFE] bg-[#252321]/25 hover:bg-[#252321]/40"
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE8E5] bg-[#FEFEFE] px-5 py-4 space-y-3">
          <nav className="flex flex-col gap-3 text-sm text-[#252321]">
            <a href="#servicos" onClick={closeMenu} className="py-1.5 border-b border-[#EAE8E5]/60">
              Procedimentos
            </a>
            <a href="#resultados" onClick={closeMenu} className="py-1.5 border-b border-[#EAE8E5]/60">
              Resultados
            </a>
            <a href="#sobre" onClick={closeMenu} className="py-1.5 border-b border-[#EAE8E5]/60">
              Sobre a Clínica
            </a>
            <a href="#depoimentos" onClick={closeMenu} className="py-1.5 border-b border-[#EAE8E5]/60">
              Depoimentos
            </a>
            <a href="#agendamento" onClick={closeMenu} className="py-1.5">
              Agendamento e Contato
            </a>
          </nav>
          <a
            href="#agendamento"
            onClick={closeMenu}
            className="w-full inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-full bg-[#45251A] text-[#FEFEFE] text-sm font-medium"
          >
            Agendar Avaliação
          </a>
        </div>
      )}
    </header>
  );
}
