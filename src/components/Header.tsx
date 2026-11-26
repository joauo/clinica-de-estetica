import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "../config";

interface HeaderProps {
  onQuickBook: () => void;
}

export function Header({ onQuickBook }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);
  const { brand, navigation, results } = SITE_CONFIG;
  const visibleLinks = navigation.links.filter(
    (link) => results.mostrarAntesDepois || link.href !== "#resultados"
  );

  const handleBookAction = () => {
    closeMenu();
    onQuickBook();
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? "bg-[var(--color-white)]/95 backdrop-blur-sm border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto h-16 flex items-center justify-between gap-2 sm:gap-6">
        <a
          href="#topo"
          className={`flex items-center gap-2 text-[18px] sm:text-[22px] font-semibold tracking-[-0.01em] font-serif-display whitespace-nowrap shrink-0 truncate max-w-[165px] sm:max-w-none rounded-sm transition-colors ${
            isScrolled || mobileMenuOpen
              ? "text-[var(--color-text)]"
              : "text-[var(--color-white)]"
          }`}
        >
          {brand.logoUrl && !logoFailed ? (
            <img
              src={brand.logoUrl}
              alt={brand.name}
              width={140}
              height={36}
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setLogoFailed(true)}
              className="h-9 w-auto object-contain"
            />
          ) : (
            <span className="truncate">{brand.name}</span>
          )}
        </a>

        <nav
          aria-label="Navegação principal"
          className={`hidden lg:flex items-center gap-6 text-[14px] transition-colors ${
            isScrolled
              ? "text-[var(--color-text-secondary)]"
              : "text-[var(--color-beige-soft)]/95"
          }`}
        >
          {visibleLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`py-2 hover:underline underline-offset-4 decoration-[var(--color-primary)] transition-colors whitespace-nowrap shrink-0 ${
                isScrolled
                  ? "hover:text-[var(--color-text)]"
                  : "hover:text-[var(--color-white)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#agendamento"
            onClick={(e) => {
              e.preventDefault();
              handleBookAction();
            }}
            className={`inline-flex items-center justify-center min-h-[44px] px-3.5 sm:px-5 py-2 rounded-full text-[13px] font-medium transition-colors whitespace-nowrap shrink-0 ${
              isScrolled || mobileMenuOpen
                ? "bg-[var(--color-brown)] text-[var(--color-white)] hover:bg-[var(--color-brown-hover)]"
                : "bg-[var(--color-champagne)] text-[var(--color-text)] hover:bg-[var(--color-white)]"
            }`}
          >
            {navigation.ctaLabel}
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            className={`lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border transition-colors ${
              isScrolled || mobileMenuOpen
                ? "border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                : "border-[var(--color-white)]/35 text-[var(--color-white)] bg-[var(--color-text)]/30 hover:bg-[var(--color-text)]/45"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-white)] px-5 py-4 space-y-3 shadow-md"
        >
          <nav
            aria-label="Menu de navegação móvel"
            className="flex flex-col text-[16px] text-[var(--color-text)]"
          >
            {visibleLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="min-h-[44px] flex items-center py-2 border-b border-[var(--color-border)]/70 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#agendamento"
            onClick={(e) => {
              e.preventDefault();
              handleBookAction();
            }}
            className="w-full inline-flex items-center justify-center min-h-[46px] px-5 py-2.5 rounded-full bg-[var(--color-brown)] text-[var(--color-white)] text-[15px] font-medium"
          >
            {navigation.ctaLabel}
          </a>
        </div>
      )}
    </header>
  );
}
