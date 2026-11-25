import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { BodyTreatmentsSection } from "./components/BodyTreatmentsSection";
import { AboutSection } from "./components/AboutSection";
import { ResultsSection } from "./components/ResultsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { BookingSection } from "./components/BookingSection";
import { Footer } from "./components/Footer";
import { PROCEDURES } from "./data/clinicData";

export default function App() {
  const [selectedProcedure, setSelectedProcedure] = useState<string>(
    PROCEDURES[0].name
  );

  const handleSelectProcedure = (procedureName: string) => {
    setSelectedProcedure(procedureName);
    const el = document.getElementById("agendamento");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FEFEFE] text-[#252321]">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <ServicesSection onSelectProcedure={handleSelectProcedure} />
        <BodyTreatmentsSection onSelectProcedure={handleSelectProcedure} />
        <ResultsSection />
        <AboutSection />
        <TestimonialsSection />
        <BookingSection
          selectedProcedure={selectedProcedure}
          onProcedureChange={setSelectedProcedure}
        />
      </main>

      <Footer />
    </div>
  );
}
