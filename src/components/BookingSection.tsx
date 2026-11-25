import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Clock, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { BODY_TREATMENTS, CLINIC_INFO, PROCEDURES } from "../data/clinicData";

interface BookingSectionProps {
  selectedProcedure: string;
  onProcedureChange: (procedure: string) => void;
}

const PERIOD_OPTIONS = ["Manhã (09h às 12h)", "Tarde (12h às 17h)", "Noite (17h às 20h)"];

export function BookingSection({
  selectedProcedure,
  onProcedureChange,
}: BookingSectionProps) {
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [period, setPeriod] = useState(PERIOD_OPTIONS[1]);
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
      setFormError("Informe seu nome completo para personalizarmos o atendimento.");
      return;
    }

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setFormError("Informe um telefone ou WhatsApp válido com DDD.");
      return;
    }

    const lines = [
      `Olá! Gostaria de agendar uma avaliação na ${CLINIC_INFO.name}.`,
      `• Nome: ${patientName.trim()}`,
      `• WhatsApp: ${phone.trim()}`,
      `• Procedimento de interesse: ${selectedProcedure}`,
      `• Melhor período: ${period}`,
      notes.trim() ? `• Observações: ${notes.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(lines)}`;

    setSubmittedData({
      whatsappUrl,
      messagePreview: lines,
    });
  };

  return (
    <section id="agendamento" className="bg-[#FEFEFE] py-16 lg:py-20 border-t border-[#EAE8E5]">
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.08em] text-[#55504B] mb-2">
                Concierge & Agendamento
              </p>
              <h2 className="text-[32px] lg:text-[36px] font-medium leading-[1.18] tracking-[-0.02em] text-[#252321] mb-4">
                Agende sua avaliação personalizada
              </h2>
              <p className="text-[14px] leading-[1.65] text-[#55504B]">
                Preencha seus dados ao lado para iniciar o atendimento diretamente pelo WhatsApp da clínica com nossa equipe de recepção.
              </p>
            </div>

            <div className="bg-[#F7F6F4] border border-[#EAE8E5] rounded-[18px] p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#8A6D43] shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-[#55504B]">Telefone e WhatsApp</p>
                  <p className="text-[14px] font-medium text-[#252321] font-mono-tabular">
                    {CLINIC_INFO.phoneDisplay}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8A6D43] shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-[#55504B]">Endereço</p>
                  <p className="text-[14px] text-[#252321]">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#8A6D43] shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-[#55504B]">Horário de Atendimento</p>
                  <p className="text-[14px] text-[#252321]">
                    {CLINIC_INFO.hours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-[#8A6D43] shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-[#55504B]">Instagram</p>
                  <a
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-medium text-[#45251A] hover:underline"
                  >
                    {CLINIC_INFO.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[18px] bg-[#F4F1EC] border border-[#DCD2C5] p-6 flex flex-col justify-between gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.06em] text-[#55504B] mb-1.5">
                    Localização no Brasil
                  </p>
                  <p className="text-[16px] font-medium text-[#252321] leading-[1.35]">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-[13px] text-[#55504B] mt-1.5">
                    {CLINIC_INFO.addressDetails} · Próximo à Rua Oscar Freire
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FEFEFE] border border-[#DCD2C5] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#8A6D43]" />
                </div>
              </div>

              <div className="pt-3 border-t border-[#DCD2C5]/70 flex items-center justify-between gap-3 text-[12px] text-[#55504B]">
                <span>Atendimento presencial com hora marcada</span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#45251A] hover:underline whitespace-nowrap shrink-0"
                >
                  Ver no mapa
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex">
            <div className="w-full h-full bg-[#F7F6F4] border border-[#EAE8E5] rounded-[20px] p-6 sm:p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-[22px] font-medium text-[#252321] mb-1.5">
                  Solicitar horário via WhatsApp
                </h3>
                <p className="text-[13px] text-[#55504B]">
                  Seus dados são organizados automaticamente em uma mensagem pronta para envio.
                </p>
              </div>

              {formError && (
                <div
                  role="alert"
                  className="mb-5 rounded-xl border border-[#B94A48]/35 bg-[#FDF6F6] px-4 py-3 text-[13px] text-[#7D2927]"
                >
                  {formError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between gap-5">
                <div className="flex-1 flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="booking-name"
                        className="block text-[13px] font-medium text-[#252321] mb-1.5"
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
                        className="w-full min-h-[48px] px-4 py-2.5 bg-[#FEFEFE] border border-[#DCD2C5] rounded-xl text-[14px] text-[#252321] placeholder:text-[#706A64] focus:outline-2 focus:outline-[#BA9B6E]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block text-[13px] font-medium text-[#252321] mb-1.5"
                      >
                        WhatsApp para retorno
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(11) 99999-9999"
                        className="w-full min-h-[48px] px-4 py-2.5 bg-[#FEFEFE] border border-[#DCD2C5] rounded-xl text-[14px] text-[#252321] placeholder:text-[#706A64] focus:outline-2 focus:outline-[#BA9B6E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="booking-procedure"
                        className="block text-[13px] font-medium text-[#252321] mb-1.5"
                      >
                        Procedimento de interesse
                      </label>
                      <select
                        id="booking-procedure"
                        value={selectedProcedure}
                        onChange={(e) => onProcedureChange(e.target.value)}
                        className="w-full min-h-[48px] px-4 py-2.5 bg-[#FEFEFE] border border-[#DCD2C5] rounded-xl text-[14px] text-[#252321] focus:outline-2 focus:outline-[#BA9B6E]"
                      >
                        <optgroup label="Procedimentos Principais">
                          {PROCEDURES.map((proc) => (
                            <option key={proc.id} value={proc.name}>
                              {proc.name}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Tratamentos Corporais">
                          {BODY_TREATMENTS.map((proc) => (
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
                        className="block text-[13px] font-medium text-[#252321] mb-1.5"
                      >
                        Preferência de horário
                      </label>
                      <select
                        id="booking-period"
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        className="w-full min-h-[48px] px-4 py-2.5 bg-[#FEFEFE] border border-[#DCD2C5] rounded-xl text-[14px] text-[#252321] focus:outline-2 focus:outline-[#BA9B6E]"
                      >
                        {PERIOD_OPTIONS.map((opt) => (
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
                      className="block text-[13px] font-medium text-[#252321] mb-1.5"
                    >
                      Objetivos ou observações (opcional)
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={5}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Conte brevemente o que gostaria de aprimorar ou sua disponibilidade de datas..."
                      className="w-full flex-1 min-h-[140px] px-4 py-3 bg-[#FEFEFE] border border-[#DCD2C5] rounded-xl text-[14px] leading-[1.55] text-[#252321] placeholder:text-[#706A64] focus:outline-2 focus:outline-[#BA9B6E] resize-y"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] px-6 py-3 rounded-full bg-[#45251A] text-[#FEFEFE] text-[14px] font-medium hover:bg-[#5E3526] transition-colors inline-flex items-center justify-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[#BA9B6E] focus-visible:outline-offset-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#D6C3A3]" />
                  <span>Enviar Solicitação para o WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-[#D6C3A3]" />
                </button>
              </form>

              {submittedData && (
                <div className="mt-6 rounded-2xl bg-[#FEFEFE] border border-[#DCD2C5] p-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#506F55] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-medium text-[#252321]">
                        Mensagem pronta para envio no WhatsApp
                      </p>
                      <p className="text-[12px] text-[#55504B] mt-0.5">
                        Caso a janela do WhatsApp não tenha sido aberta automaticamente, utilize o botão abaixo.
                      </p>
                    </div>
                  </div>

                  <pre className="whitespace-pre-wrap text-[12px] leading-[1.55] text-[#55504B] bg-[#F7F6F4] border border-[#EAE8E5] rounded-xl p-3.5 font-sans">
                    {submittedData.messagePreview}
                  </pre>

                  <a
                    ref={hiddenLinkRef}
                    href={submittedData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[42px] px-5 py-2 rounded-full bg-[#BA9B6E] text-[#252321] text-[13px] font-medium hover:bg-[#A8895F] transition-colors"
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
