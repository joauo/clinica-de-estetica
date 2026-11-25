import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { Check } from "lucide-react";
import { ABOUT_METRICS, CLINIC_INFO } from "../data/clinicData";

const INSTITUTIONAL_PILLARS = [
  "Protocolos autorais baseados em evidência científica e anatomia facial.",
  "Equipamentos de última geração com manutenção certificada.",
  "Atendimento privativo, tempo de consulta estendido e pós-procedimento dedicado.",
];

interface AnimatedMetricValueProps {
  prefix?: string;
  target: number;
  suffix?: string;
}

function AnimatedMetricValue({
  prefix = "",
  target,
  suffix = "",
}: AnimatedMetricValueProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayValue(target);
      return;
    }

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, target]);

  const formatted = new Intl.NumberFormat("pt-BR").format(displayValue);

  return (
    <p
      ref={ref}
      className="font-mono-tabular text-[24px] font-semibold tracking-[-0.02em] text-[#45251A]"
    >
      {prefix}
      {formatted}
      {suffix}
    </p>
  );
}

export function AboutSection() {
  return (
    <section id="sobre" className="bg-[#F4F1EC] py-16 lg:py-20 border-t border-[#EAE8E5]">
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5">
            <div
              aria-hidden="true"
              className="h-full min-h-[320px] lg:min-h-[400px] rounded-[20px] bg-gradient-to-br from-[#EAE3D8] via-[#E3DCD2] to-[#DCD2C5] border border-[#DCD2C5]"
            />
          </div>

          <div className="lg:col-span-5 bg-[#FEFEFE] border border-[#EAE8E5] rounded-[20px] p-7 lg:p-9 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-[0.08em] text-[#55504B] mb-2">
                Sobre a Clínica
              </p>
              <h2 className="text-[28px] lg:text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-[#252321] mb-4">
                Onde ciência estética e sofisticação se encontram
              </h2>
              <p className="text-[14px] leading-[1.65] text-[#55504B] mb-6">
                A {CLINIC_INFO.name} nasceu com o propósito de oferecer uma jornada estética serena, segura e altamente personalizada. Cada plano de cuidado é desenhado para preservar sua identidade, valorizando a harmonia natural sem exageros.
              </p>
            </div>

            <ul className="space-y-3 pt-5 border-t border-[#EAE8E5]">
              {INSTITUTIONAL_PILLARS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-[#252321]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#F4F1EC] border border-[#DCD2C5] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#8A6D43]" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-between gap-6">
            <div className="bg-[#FEFEFE] border border-[#EAE8E5] rounded-[20px] p-6 space-y-6 flex-1 flex flex-col justify-center">
              {ABOUT_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="border-b border-[#EAE8E5] last:border-b-0 pb-4 last:pb-0"
                >
                  <AnimatedMetricValue
                    prefix={metric.prefix}
                    target={metric.target}
                    suffix={metric.suffix}
                  />
                  <p className="text-[12px] leading-[1.45] text-[#55504B] mt-1">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="hidden lg:block aspect-[4/3] w-full rounded-[18px] bg-[#E8E1D7] border border-[#DCD2C5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
