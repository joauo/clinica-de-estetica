import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "../config";

export function WhatsAppFloatingButton() {
  const { brand, contact } = SITE_CONFIG;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `${contact.whatsappDefaultMessage} (${brand.name})`
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar pelo WhatsApp com ${brand.name}`}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2.5 min-h-[52px] px-5 py-3 rounded-full bg-[var(--color-brown)] text-[var(--color-white)] border border-[var(--color-primary)]/45 shadow-lg hover:bg-[var(--color-brown-hover)] hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2"
    >
      <MessageCircle className="w-5 h-5 text-[var(--color-champagne)] shrink-0" />
      <span className="text-[14px] font-medium hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
