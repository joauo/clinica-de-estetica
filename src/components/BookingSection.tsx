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
import { Reveal } from "./Reveal";

interface BookingSectionProps {
  selectedProcedure: string;
  onProcedureChange: (procedure: string) => void;
}

function formatBrazilPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function BookingSection({
  selectedProcedure,
  onProcedureChange,
}: BookingSectionProps) {
  const { booking, brand, contact, services, bodyTreatments } = SITE_CONFIG;

  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [period, setPeriod] = useState(
    booking.periods[1] ?? booking.periods[0]
  );
  const [notes, setNotes] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: boolean;
    phone?: boolean;
  }>({});
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
    setFieldErrors({});

    const trimmedName = patientName.trim();
    if (trimmedName.length < 2) {
      setFieldErrors({ name: true });
      setFormError(booking.validationMessages.invalidName);
      return;
    }

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 11) {
      setFieldErrors({ phone: true });
      setFormError(booking.validationMessages.invalidPhone);
      return;
    }

    const greeting = booking.confirmation.greetingTemplate.replace(
      "{clinicName}",
      brand.name
    );

    const lines = [
      greeting,
      `${booking.fieldLabels.name}: ${trimmedName}`,
      `${booking.fieldLabels.phone}: ${phone.trim()}`,
      `${booking.fieldLabels.procedure}: ${selectedProcedure}`,
      `${booking.fieldLabels.period}: ${period}`,
      notes.trim() ? `${booking.fieldLabels.notes}: ${notes.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const sanitizedWhatsapp = contact.whatsappNumber.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${sanitizedWhatsapp}?text=${encodeURIComponent(
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
      className="scroll-mt-16 bg-[var(--color-white)] py-16 lg:py-28 border-t border-[var(--color-border)]"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <Reveal
            className="lg:col-span-6 flex flex-col justify-between gap-6"
            staggerIndex={0}
          >
            <div>
              <p className="text-[13px] tracking-[0.06em] text-[var(--color-text-muted)] mb-2">
                {booking.eyebrow}
              </p>
              <h2 className="text-[clamp(1.85rem,3.2vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-text)] mb-4">
                {booking.title}
              </h2>
              <p className="text-[16px] leading-[1.65] text-[var(--color-text-secondary)]">
                {booking.subtitle}
              </p>
            </div>

            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[16px] p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Phone
                  className="w-4 h-4 text-[var(--color-brown)] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[13px] text-[var(--color-text-muted)]">
                    {booking.contactLabels.phone}
                  </p>
                  <p className="text-[16px] font-medium text-[var(--color-text)] tabular-nums">
                    {contact.phoneDisplay}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 text-[var(--color-brown)] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[13px] text-[var(--color-text-muted)]">
                    {booking.contactLabels.address}
                  </p>
                  <p className="text-[16px] text-[var(--color-text)]">
                    {contact.address} · {contact.cityState} · {contact.zipCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock
                  className="w-4 h-4 text-[var(--color-brown)] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[13px] text-[var(--color-text-muted)]">
                    {booking.contactLabels.hours}
                  </p>
                  <p className="text-[16px] text-[var(--color-text)]">
                    {contact.hours}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 min-h-[46px] px-5 py-2.5 rounded-full border border-[var(--color-primary)] bg-[var(--color-white)] text-[var(--color-brown)] text-[15px] font-medium hover:bg-[var(--color-beige-soft)] transition-colors"
                >
                  <Instagram
                    className="w-4 h-4 text-[var(--color-brown)] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="truncate">
                    {booking.instagramButtonLabel} ({contact.instagramHandle})
                  </span>
                </a>
              </div>
            </div>

            <div className="flex-1 min-h-[280px] rounded-[16px] overflow-hidden border border-[var(--color-sand)] bg-[var(--color-surface)] flex">
              <ClinicLocationMap />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 flex" staggerIndex={1}>
            <div className="w-full h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[16px] p-6 sm:p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-[26px] font-semibold text-[var(--color-text)] mb-1.5">
                  {booking.formTitle}
                </h3>
                <p className="text-[15px] text-[var(--color-text-secondary)]">
                  {booking.formSubtitle}
                </p>
              </div>

              {formError && (
                <div
                  role="alert"
                  className="mb-5 rounded-xl border border-[#B94A48]/35 bg-[#FDF6F6] px-4 py-3 text-[15px] text-[#7D2927]"
                >
                  {formError}
                </div>
              )}

              <form
                noValidate
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
                        {booking.fieldLabels.name}
                      </label>
                      <input
                        id="booking-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        aria-invalid={Boolean(fieldErrors.name)}
                        value={patientName}
                        onChange={(e) => {
                          setPatientName(e.target.value);
                          if (fieldErrors.name) {
                            setFieldErrors((prev) => ({ ...prev, name: false }));
                            setFormError(null);
                          }
                        }}
                        placeholder={booking.fieldLabels.namePlaceholder}
                        className={`w-full min-h-[48px] px-4 py-2.5 bg-[var(--color-white)] border rounded-xl text-[16px] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] ${
                          fieldErrors.name
                            ? "border-[var(--color-error)]"
                            : "border-[var(--color-sand)]"
                        }`}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block text-[14px] font-medium text-[var(--color-text)] mb-1.5"
                      >
                        {booking.fieldLabels.phone}
                      </label>
                      <input
                        id="booking-phone"
                        name="tel"
                        type="tel"
                        inputMode="tel"
                        required
                        autoComplete="tel"
                        maxLength={15}
                        aria-invalid={Boolean(fieldErrors.phone)}
                        value={phone}
                        onChange={(e) => {
                          setPhone(formatBrazilPhone(e.target.value));
                          if (fieldErrors.phone) {
                            setFieldErrors((prev) => ({
                              ...prev,
                              phone: false,
                            }));
                            setFormError(null);
                          }
                        }}
                        placeholder={booking.fieldLabels.phonePlaceholder}
                        className={`w-full min-h-[48px] px-4 py-2.5 bg-[var(--color-white)] border rounded-xl text-[16px] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] tabular-nums ${
                          fieldErrors.phone
                            ? "border-[var(--color-error)]"
                            : "border-[var(--color-sand)]"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="booking-procedure"
                        className="block text-[14px] font-medium text-[var(--color-text)] mb-1.5"
                      >
                        {booking.fieldLabels.procedure}
                      </label>
                      <select
                        id="booking-procedure"
                        name="procedure"
                        value={selectedProcedure}
                        onChange={(e) => onProcedureChange(e.target.value)}
                        className="w-full min-h-[48px] px-4 py-2.5 bg-[var(--color-white)] border border-[var(--color-sand)] rounded-xl text-[16px] text-[var(--color-text)]"
                      >
                        <optgroup
                          label={booking.fieldLabels.procedureGroupFacial}
                        >
                          {services.items.map((proc) => (
                            <option key={proc.id} value={proc.name}>
                              {proc.name}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label={booking.fieldLabels.procedureGroupBody}>
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
                        {booking.fieldLabels.period}
                      </label>
                      <select
                        id="booking-period"
                        name="period"
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        className="w-full min-h-[48px] px-4 py-2.5 bg-[var(--color-white)] border border-[var(--color-sand)] rounded-xl text-[16px] text-[var(--color-text)]"
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
                      {booking.fieldLabels.notes}
                    </label>
                    <textarea
                      id="booking-notes"
                      name="notes"
                      rows={5}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={booking.fieldLabels.notesPlaceholder}
                      className="w-full flex-1 min-h-[140px] px-4 py-3 bg-[var(--color-white)] border border-[var(--color-sand)] rounded-xl text-[16px] leading-[1.6] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] resize-y"
                    />
                  </div>
                </div>

                <button
                  id="booking-submit-btn"
                  type="submit"
                  className="w-full min-h-[50px] px-6 py-3 rounded-full bg-[var(--color-brown)] text-[var(--color-white)] text-[15px] font-medium hover:bg-[var(--color-brown-hover)] transition-colors inline-flex items-center justify-center gap-2.5"
                >
                  <MessageCircle
                    className="w-4 h-4 text-[var(--color-champagne)]"
                    aria-hidden="true"
                  />
                  <span>{booking.submitLabel}</span>
                  <ArrowRight
                    className="w-4 h-4 text-[var(--color-champagne)]"
                    aria-hidden="true"
                  />
                </button>
              </form>

              {submittedData && (
                <div className="mt-6 rounded-[16px] bg-[var(--color-white)] border border-[var(--color-sand)] p-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[var(--color-success)] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[15px] font-medium text-[var(--color-text)]">
                        {booking.confirmation.title}
                      </p>
                      <p className="text-[14px] text-[var(--color-text-secondary)] mt-0.5">
                        {booking.confirmation.description}
                      </p>
                    </div>
                  </div>

                  <pre className="whitespace-pre-wrap text-[14px] leading-[1.55] text-[var(--color-text-secondary)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-3.5 font-sans">
                    {submittedData.messagePreview}
                  </pre>

                  <a
                    ref={hiddenLinkRef}
                    href={submittedData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full bg-[var(--color-primary)] text-[var(--color-text)] text-[15px] font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>{booking.submitLabel}</span>
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
