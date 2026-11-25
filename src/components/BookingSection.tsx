import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { SITE_CONFIG } from "../config";
import { ClinicLocationMap } from "./ClinicLocationMap";

interface BookingSectionProps {
  selectedProcedure: string;
  onProcedureChange: (procedure: string) => void;
}

export function BookingSection({
  selectedProcedure,
  onProcedureChange,
}: BookingSectionProps) {
  const { booking, brand, contact, services, bodyTreatments } = SITE_CONFIG;

  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [period, setPeriod] = useState(booking.periods[1] ?? booking.periods[0]);
  const [notes, setNotes] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    whatsappUrl: string;
    messagePreview: string;
  } | null>(null);

  const hiddenLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (submittedData && hiddenLinkRef.current) {
      hiddenLinkRef.current.click();
    }
  }, [submittedData]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setFormError(null);

    if (patientName.trim().length < 2) {
      setFormError(
        "Informe seu nome completo para personalizarmos o atendimento."
      );
      return;
    }

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setFormError("Informe um telefone ou WhatsApp válido com DDD.");
      return;
    }

    const lines = [
      `Olá! Gostaria de agendar uma avaliação na ${brand.name}.`,
      `• Nome: ${patientName.trim()}`,
      `• WhatsApp: ${phone.trim()}`,
      `• Procedimento de interesse: ${selectedProcedure}`,
      `• Melhor período: ${period}`,
      notes.trim() ? `• Observações: ${notes.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
      lines
    )}`;

    setSubmittedData({
      whatsappUrl,
      messagePreview: lines,
    });
  };

  return (
    <section
      id="agendamento"
      className="bg-[var(--color-white)] py-16 lg:py-20 border-t border-[var(--color-border)]"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div>
              <p className="text-[13px] tracking-[0.06em] text-[var(--color-text-muted)] mb-2">
                {booking.eyebrow}
              </p>
              <h2 className="text-[34px] lg:text-[40px] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-text)] mb-4">
                {booking.title}
              </h2>
              <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
                {booking.subtitle}
              </p>
            </div>

            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[18px] p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[var(--color-primary-active)] shrink-0 mt-1" />
                <div>
                  <p className="text-[13px] text-[var(--color-text-muted)]">
                    Telefone e WhatsApp
                  </p>
                  <p className="text-[15px] font-medium text-[var(--color-text)] tabular-nums">
                    {contact.phoneDisplay}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-primary-active)] shrink-0 mt-1" />
                <div>
                  <p className="text-[13px] text-[var(--color-text-muted)]">
                    Endereço
                  </p>
                  <p className="text-[15px] text-[var(--color-text)]">
                    {contact.address} · {contact.cityState} · {contact.zipCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[var(--color-primary-active)] shrink-0 mt-1" />
                <div>
                  <p className="text-[13px] text-[var(--color-text-muted)]">
                    Horário de Atendimento
                  </p>
                  <p className="text-[15px] text-[var(--color-text)]">
                    {contact.hours}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 min-h-[46px] px-5 py-2.5 rounded-full border border-[var(--color-primary)] bg-[var(--color-white)] text-[var(--color-brown)] text-[14px] font-medium hover:bg-[var(--color-beige-soft)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
                >
                  <Instagram className="w-4 h-4 text-[var(--color-primary-active)]" />
                  <span>
                    {booking.instagramButtonLabel} ({contact.instagramHandle})
                  </span>
                </a>
              </div>
            </div>

            <div className="rounded-[18px] bg-[var(--color-beige-soft)] border border-[var(--color-sand)] p-6 flex flex-col justify-between gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[13px] tracking-[0.06em] text-[var(--color-text-muted)] mb-1">
                    {booking.locationEyebrow}
                  </p>
                  <p className="text-[16px] font-medium text-[var(--color-text)] leading-[1.4]">
                    {contact.address} — {contact.cityState}
                  </p>
                  <p className="text-[14px] text-[var(--color-text-secondary)] mt-1">
                    {contact.zipCode} · {contact.addressDetails}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[var(--color-white)] border border-[var(--color-sand)] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[var(--color-primary-active)]" />
                </div>
              </div>

              <ClinicLocationMap />

              <div className="pt-3 border-t border-[var(--color-sand)]/70 flex items-center justify-between gap-3 text-[13px] text-[var(--color-text-secondary)]">
                <span>{booking.locationNote}</span>
                <a
                  href={contact.googleMapsLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--color-brown)] hover:underline whitespace-nowrap shrink-0"
                >
                  {booking.mapLinkLabel}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex">
            <div className="w-full h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[20px] p-6 sm:p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-[26px] font-semibold text-[var(--color-text)] mb-1.5">
                  {booking.formTitle}
                </h3>
                <p className="text-[14px] text-[var(--color-text-secondary)]">
                  {booking.formSubtitle}
                </p>
              </div>

              {formError && (
                <div
                  role="alert"
                  className="mb-5 rounded-xl border border-[#B94A48]/35 bg-[#FDF6F6] px-4 py-3 text-[14px] text-[#7D2927]"
                >
                  {formError}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="flex-1 flex flex-col justify-between gap-5"
              >
                <div className="flex-1 flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="booking-name"
                        className="block text-[14px] font-medium text-[var(--color-text)] mb-1.5"
                      >
                        Nome completo
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        required
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full min-h-[48px] px-4 py-2.5 bg-[var(--color-white)] border border-[var(--color-sand)] rounded-xl text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-2 focus:outline-[var(--color-primary)]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block text-[14px] font-medium text-[var(--color-text)] mb-1.5"
                      >
                        WhatsApp para retorno
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(00) 00000-0000"
                        className="w-full min-h-[48px] px-4 py-2.5 bg-[var(--color-white)] border border-[var(--color-sand)] rounded-xl text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-2 focus:outline-[var(--color-primary)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="booking-procedure"
                        className="block text-[14px] font-medium text-[var(--color-text)] mb-1.5"
                      >
                        Procedimento de interesse
                      </label>
                      <select
                        id="booking-procedure"
                        value={selectedProcedure}
                        onChange={(e) => onProcedureChange(e.target.value)}
                        className="w-full min-h-[48px] px-4 py-2.5 bg-[var(--color-white)] border border-[var(--color-sand)] rounded-xl text-[15px] text-[var(--color-text)] focus:outline-2 focus:outline-[var(--color-primary)]"
                      >
                        <optgroup label="Procedimentos Principais">
                          {services.items.map((proc) => (
                            <option key={proc.id} value={proc.name}>
                              {proc.name}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Tratamentos Corporais">
                          {bodyTreatments.items.map((proc) => (
                            <option key={proc.id} value={proc.name}>
                              {proc.name}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="booking-period"
                        className="block text-[14px] font-medium text-[var(--color-text)] mb-1.5"
                      >
                        Preferência de horário
                      </label>
                      <select
                        id="booking-period"
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        className="w-full min-h-[48px] px-4 py-2.5 bg-[var(--color-white)] border border-[var(--color-sand)] rounded-xl text-[15px] text-[var(--color-text)] focus:outline-2 focus:outline-[var(--color-primary)]"
                      >
                        {booking.periods.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label
                      htmlFor="booking-notes"
                      className="block text-[14px] font-medium text-[var(--color-text)] mb-1.5"
                    >
                      Objetivos ou observações (opcional)
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={5}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Conte brevemente o que gostaria de aprimorar ou sua disponibilidade de datas..."
                      className="w-full flex-1 min-h-[150px] px-4 py-3 bg-[var(--color-white)] border border-[var(--color-sand)] rounded-xl text-[15px] leading-[1.6] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-2 focus:outline-[var(--color-primary)] resize-y"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[50px] px-6 py-3 rounded-full bg-[var(--color-brown)] text-[var(--color-white)] text-[14px] font-medium hover:bg-[var(--color-brown-hover)] transition-colors inline-flex items-center justify-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2"
                >
                  <MessageCircle className="w-4 h-4 text-[var(--color-champagne)]" />
                  <span>{booking.submitLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[var(--color-champagne)]" />
                </button>
              </form>

              {submittedData && (
                <div className="mt-6 rounded-2xl bg-[var(--color-white)] border border-[var(--color-sand)] p-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-success)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-medium text-[var(--color-text)]">
                        Mensagem pronta para envio no WhatsApp
                      </p>
                      <p className="text-[13px] text-[var(--color-text-secondary)] mt-0.5">
                        Caso a janela do WhatsApp não tenha sido aberta
                        automaticamente, utilize o botão abaixo.
                      </p>
                    </div>
                  </div>

                  <pre className="whitespace-pre-wrap text-[13px] leading-[1.55] text-[var(--color-text-secondary)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-3.5 font-sans">
                    {submittedData.messagePreview}
                  </pre>

                  <a
                    ref={hiddenLinkRef}
                    href={submittedData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[42px] px-5 py-2 rounded-full bg-[var(--color-primary)] text-[var(--color-text)] text-[14px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir conversa no WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
