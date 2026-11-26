import { SITE_CONFIG } from "../config";

export function Footer() {
  const { brand, contact, footer, legal, navigation } = SITE_CONFIG;

  const directWhatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Olá, gostaria de mais informações sobre os procedimentos da ${brand.name}.`
  )}`;

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] pt-14 pb-10">
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[var(--color-border)]">
          <div>
            {brand.logoUrl ? (
              <img
                src={brand.logoUrl}
                alt={brand.name}
                className="h-9 w-auto object-contain"
              />
            ) : (
              <span className="font-serif-display text-[24px] font-semibold tracking-[-0.01em] text-[var(--color-text)]">
                {brand.name}
              </span>
            )}
            <p className="text-[14px] leading-[1.65] text-[var(--color-text-secondary)] mt-3 max-w-xs">
              {brand.tagline}. {footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-[var(--color-text)] mb-3.5">
              {footer.navHeading}
            </h3>
            <ul className="space-y-2.5 text-[14px] text-[var(--color-text-secondary)]">
              <li>
                <a href="#topo" className="hover:text-[var(--color-text)] transition-colors">
                  Início
                </a>
              </li>
              {navigation.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[var(--color-text)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-[var(--color-text)] mb-3.5">
              {footer.contactHeading}
            </h3>
            <ul className="space-y-2.5 text-[14px] text-[var(--color-text-secondary)]">
              <li className="tabular-nums">{contact.phoneDisplay}</li>
              <li>{contact.email}</li>
              <li>
                {contact.address} · {contact.cityState}
              </li>
              <li>{contact.zipCode}</li>
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-brown)] font-medium hover:underline"
                >
                  Instagram: {contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-[var(--color-text)] mb-3.5">
              {footer.serviceHeading}
            </h3>
            <p className="text-[14px] leading-[1.65] text-[var(--color-text-secondary)] mb-4">
              {contact.hours}
            </p>
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2 rounded-full bg-[var(--color-brown)] text-[var(--color-white)] text-[14px] font-medium hover:bg-[var(--color-brown-hover)] transition-colors"
            >
              {footer.whatsappButtonLabel}
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[13px] text-[var(--color-text-muted)]">
          <p>
            © {legal.copyrightYear} {brand.name}. {legal.copyrightText}
          </p>
          <p>Responsável Técnico: {legal.technicalResponsible}</p>
        </div>
      </div>
    </footer>
  );
}
