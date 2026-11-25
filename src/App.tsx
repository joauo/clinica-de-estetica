import { useEffect, useState, type CSSProperties } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { BodyTreatmentsSection } from "./components/BodyTreatmentsSection";
import { ResultsSection } from "./components/ResultsSection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { BookingSection } from "./components/BookingSection";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { SITE_CONFIG } from "./config";

export default function App() {
  const [selectedProcedure, setSelectedProcedure] = useState<string>(
    SITE_CONFIG.services.items[0].name
  );
  const [mapsQuotaExceeded, setMapsQuotaExceeded] = useState(false);

  useEffect(() => {
    document.title = SITE_CONFIG.brand.metaTitle;
  }, []);

  useEffect(() => {
    const onQuotaExceeded = () => setMapsQuotaExceeded(true);
    window.addEventListener("gmp-quota-exceeded", onQuotaExceeded);
    return () =>
      window.removeEventListener("gmp-quota-exceeded", onQuotaExceeded);
  }, []);

  const handleSelectProcedure = (procedureName: string) => {
    setSelectedProcedure(procedureName);
    const el = document.getElementById("agendamento");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const themeVars = {
    "--color-primary": SITE_CONFIG.colors.primary,
    "--color-primary-hover": SITE_CONFIG.colors.primaryHover,
    "--color-primary-active": SITE_CONFIG.colors.primaryActive,
    "--color-brown": SITE_CONFIG.colors.brown,
    "--color-brown-hover": SITE_CONFIG.colors.brownHover,
    "--color-beige": SITE_CONFIG.colors.beige,
    "--color-beige-soft": SITE_CONFIG.colors.beigeSoft,
    "--color-champagne": SITE_CONFIG.colors.champagne,
    "--color-sand": SITE_CONFIG.colors.sand,
    "--color-white": SITE_CONFIG.colors.white,
    "--color-surface": SITE_CONFIG.colors.surface,
    "--color-border": SITE_CONFIG.colors.border,
    "--color-text": SITE_CONFIG.colors.text,
    "--color-text-secondary": SITE_CONFIG.colors.textSecondary,
    "--color-text-muted": SITE_CONFIG.colors.textMuted,
    "--color-error": SITE_CONFIG.colors.error,
    "--color-success": SITE_CONFIG.colors.success,
  } as CSSProperties;

  return (
    <div
      style={themeVars}
      className="min-h-screen flex flex-col bg-[var(--color-white)] text-[var(--color-text)]"
    >
      {mapsQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{" "}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{" "}
            for instructions to update your account.
          </span>
        </div>
      )}
      <Header />

      <main className="flex-1">
        <HeroSection />
        <ServicesSection onSelectProcedure={handleSelectProcedure} />
        <BodyTreatmentsSection onSelectProcedure={handleSelectProcedure} />
        <ResultsSection />
        <AboutSection />
        <TestimonialsSection />
        <FaqSection />
        <BookingSection
          selectedProcedure={selectedProcedure}
          onProcedureChange={setSelectedProcedure}
        />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
