import { lazy, Suspense, useEffect, useState, type CSSProperties } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SITE_CONFIG } from "./config";

const ServicesSection = lazy(() =>
  import("./components/ServicesSection").then((m) => ({
    default: m.ServicesSection,
  }))
);
const BodyTreatmentsSection = lazy(() =>
  import("./components/BodyTreatmentsSection").then((m) => ({
    default: m.BodyTreatmentsSection,
  }))
);
const ResultsSection = lazy(() =>
  import("./components/ResultsSection").then((m) => ({
    default: m.ResultsSection,
  }))
);
const AboutSection = lazy(() =>
  import("./components/AboutSection").then((m) => ({
    default: m.AboutSection,
  }))
);
const TestimonialsSection = lazy(() =>
  import("./components/TestimonialsSection").then((m) => ({
    default: m.TestimonialsSection,
  }))
);
const FaqSection = lazy(() =>
  import("./components/FaqSection").then((m) => ({ default: m.FaqSection }))
);
const BookingSection = lazy(() =>
  import("./components/BookingSection").then((m) => ({
    default: m.BookingSection,
  }))
);
const Footer = lazy(() =>
  import("./components/Footer").then((m) => ({ default: m.Footer }))
);
const WhatsAppFloatingButton = lazy(() =>
  import("./components/WhatsAppFloatingButton").then((m) => ({
    default: m.WhatsAppFloatingButton,
  }))
);

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

  const scrollToBooking = (procedureName?: string) => {
    if (procedureName) {
      setSelectedProcedure(procedureName);
    }
    const el = document.getElementById("agendamento");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuickBook = () => {
    scrollToBooking();
  };

  const handleSelectProcedure = (procedureName: string) => {
    scrollToBooking(procedureName);
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
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-[var(--color-brown)] focus:text-[var(--color-white)] focus:text-sm focus:font-medium"
      >
        {SITE_CONFIG.navigation.skipToContentLabel}
      </a>

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

      <Header onQuickBook={handleQuickBook} />

      <main id="conteudo-principal" className="flex-1">
        <HeroSection onQuickBook={handleQuickBook} />

        <Suspense fallback={<div className="min-h-[480px]" aria-hidden="true" />}>
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
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <WhatsAppFloatingButton />
      </Suspense>
    </div>
  );
}
