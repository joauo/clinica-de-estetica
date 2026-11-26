import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "../config";

export function WhatsAppFloatingButton() {
  const { brand, contact } = SITE_CONFIG;
  const [hiddenByOverlap, setHiddenByOverlap] = useState(false);

  const sanitizedWhatsapp = contact.whatsappNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${sanitizedWhatsapp}?text=${encodeURIComponent(
    `${contact.whatsappDefaultMessage} (${brand.name})`
  )}`;

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const visibilityMap = new Map<Element, boolean>();
    const observed = new Set<Element>();

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibilityMap.set(entry.target, entry.isIntersecting);
        }
        const anyVisible = Array.from(visibilityMap.values()).some(Boolean);
        setHiddenByOverlap(anyVisible);
      },
      { threshold: 0.05 }
    );

    const attachTargets = () => {
      const candidates = [
        document.getElementById("booking-submit-btn"),
        document.querySelector("footer"),
      ].filter((el): el is HTMLElement => Boolean(el));

      for (const target of candidates) {
        if (!observed.has(target)) {
          observed.add(target);
          visibilityMap.set(target, false);
          intersectionObserver.observe(target);
        }
      }
      return observed.size >= 2;
    };

    const allAttached = attachTargets();
    let mutationObserver: MutationObserver | null = null;

    if (!allAttached && typeof MutationObserver !== "undefined") {
      mutationObserver = new MutationObserver(() => {
        if (attachTargets()) {
          mutationObserver?.disconnect();
        }
      });
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      intersectionObserver.disconnect();
      mutationObserver?.disconnect();
    };
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${contact.whatsappFloatingLabel} · ${brand.name}`}
      aria-hidden={hiddenByOverlap}
      tabIndex={hiddenByOverlap ? -1 : 0}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2.5 min-h-[48px] min-w-[48px] justify-center px-3.5 sm:px-5 py-3 rounded-full bg-[var(--color-brown)] text-[var(--color-white)] border border-[var(--color-primary)]/45 shadow-lg hover:bg-[var(--color-brown-hover)] hover:-translate-y-0.5 transition-[transform,opacity,background-color] duration-200 ${
        hiddenByOverlap
          ? "opacity-0 translate-y-2 pointer-events-none"
          : "opacity-100 translate-y-0"
      }`}
    >
      <MessageCircle
        className="w-5 h-5 text-[var(--color-champagne)] shrink-0"
        aria-hidden="true"
      />
      <span className="text-[14px] font-medium hidden sm:inline">
        {contact.whatsappFloatingLabel}
      </span>
    </a>
  );
}
