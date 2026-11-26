import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SITE_CONFIG } from "../config";
import { MediaSlot } from "./MediaSlot";

export function AboutSection() {
  const { about, brand } = SITE_CONFIG;
  const description = about.descriptionTemplate.replace(
    "{clinicName}",
    brand.name
  );

  return (
    <section
      id="sobre"
      className="bg-[var(--color-beige-soft)] py-20 lg:py-28 border-t border-[var(--color-border)]"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto space-y-12 lg:space-y-14">
        {/* Overlapping image + text card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-0">
          <div className="lg:col-span-6 relative">
            <MediaSlot
              src={about.mainImage}
              alt={about.mainImageAlt}
              className="min-h-[340px] lg:min-h-[460px] w-full rounded-[16px] bg-gradient-to-br from-[#EAE3D8] via-[#E3DCD2] to-[#DCD2C5] border border-[var(--color-sand)]"
            />
            <MediaSlot
              src={about.detailImage}
              alt={about.detailImageAlt}
              className="hidden lg:block w-44 aspect-[4/3] rounded-[16px] bg-[var(--color-champagne)] border border-[var(--color-sand)] shadow-sm -mt-12 ml-6 relative z-20"
            />
          </div>

          <div className="lg:col-span-7 lg:-ml-16 relative z-10 bg-[var(--color-white)] border border-[var(--color-sand)] shadow-sm rounded-[16px] p-7 lg:p-10 flex flex-col justify-between gap-6">
            <div>
              <p className="text-[13px] tracking-[0.06em] text-[var(--color-text-muted)] mb-2">
                {about.eyebrow}
              </p>
              <h2 className="text-[32px] lg:text-[40px] font-semibold leading-[1.12] tracking-[-0.015em] text-[var(--color-text)] mb-4">
                {about.title}
              </h2>
              <p className="text-[15px] lg:text-[16px] leading-[1.68] text-[var(--color-text-secondary)]">
                {description}
              </p>
            </div>

            <ul className="space-y-3 pt-5 border-t border-[var(--color-border)]">
              {about.pillars.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-[var(--color-text)]"
                >
                  <span className="w-5 h-5 rounded-full bg-[var(--color-beige-soft)] border border-[var(--color-sand)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[var(--color-primary-active)]" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Horizontal metrics band with large serif figures */}
        <div className="border-y border-[var(--color-sand)] py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {about.metrics.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="md:border-r md:last:border-r-0 border-[var(--color-sand)] md:pr-6"
            >
              <p className="font-serif-display text-[38px] lg:text-[46px] font-semibold leading-none text-[var(--color-brown)] tabular-nums">
                {metric.value}
              </p>
              <p className="text-[14px] leading-[1.55] text-[var(--color-text-secondary)] mt-2.5">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Specialist block */}
        <div className="bg-[var(--color-white)] border border-[var(--color-border)] rounded-[16px] p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="md:col-span-4 lg:col-span-3">
            <MediaSlot
              src={about.professional.image}
              alt={about.professional.imageAlt}
              className="aspect-[4/5] w-full rounded-[16px] bg-gradient-to-br from-[#EAE3D8] via-[#E3DCD2] to-[#DCD2C5] border border-[var(--color-sand)]"
            />
          </div>

          <div className="md:col-span-8 lg:col-span-9 space-y-3">
            <p className="text-[13px] tracking-[0.06em] text-[var(--color-text-muted)]">
              {about.professional.eyebrow}
            </p>
            <div>
              <h3 className="text-[28px] lg:text-[32px] font-semibold leading-[1.15] text-[var(--color-text)]">
                {about.professional.name}
              </h3>
              <p className="text-[14px] font-medium text-[var(--color-primary-active)] mt-1">
                {about.professional.credentials}
              </p>
            </div>
            <p className="text-[15px] leading-[1.7] text-[var(--color-text-secondary)] max-w-2xl">
              {about.professional.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
