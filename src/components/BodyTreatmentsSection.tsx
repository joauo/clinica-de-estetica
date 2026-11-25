import {
  Activity,
  Droplets,
  Flame,
  Layers,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { BODY_TREATMENTS, CLINIC_INFO, type BodyTreatmentItem } from "../data/clinicData";

interface BodyTreatmentsSectionProps {
  onSelectProcedure: (procedureName: string) => void;
}

function renderIcon(iconKey: BodyTreatmentItem["iconKey"]) {
  const cls = "w-5 h-5 text-[#8A6D43]";
  switch (iconKey) {
    case "sculpt":
      return <Activity className={cls} strokeWidth={1.6} />;
    case "smooth":
      return <Layers className={cls} strokeWidth={1.6} />;
    case "drainage":
      return <Droplets className={cls} strokeWidth={1.6} />;
    case "firmness":
      return <Flame className={cls} strokeWidth={1.6} />;
    case "laser":
      return <Sparkles className={cls} strokeWidth={1.6} />;
    case "men":
      return <UserCheck className={cls} strokeWidth={1.6} />;
  }
}

export function BodyTreatmentsSection({
  onSelectProcedure,
}: BodyTreatmentsSectionProps) {
  return (
    <section
      id="corporais"
      className="bg-[#F7F6F4] py-16 lg:py-20 border-t border-[#EAE8E5]"
    >
      <div className="w-[min(100%-32px,1200px)] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs tracking-[0.08em] text-[#55504B] mb-2">
            Protocolos Corporais
          </p>
          <h2 className="text-[32px] lg:text-[36px] font-medium leading-[1.18] tracking-[-0.02em] text-[#252321] mb-3">
            Tratamentos corporais
          </h2>
          <p className="text-[14px] leading-[1.65] text-[#55504B]">
            Na {CLINIC_INFO.name} você encontra uma linha completa de tratamentos estéticos avançados para o corpo, conduzidos por especialistas com tecnologia certificada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-4">
            <div
              aria-hidden="true"
              className="h-full min-h-[280px] lg:min-h-[360px] rounded-[20px] bg-gradient-to-br from-[#EAE3D8] via-[#E3DCD2] to-[#DCD2C5] border border-[#DCD2C5]"
            />
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BODY_TREATMENTS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectProcedure(item.name)}
                className="group text-center bg-[#FEFEFE] border border-[#EAE8E5] rounded-[18px] p-6 flex flex-col items-center justify-center gap-3 hover:border-[#BA9B6E] transition-colors focus-visible:outline-2 focus-visible:outline-[#BA9B6E]"
              >
                <div className="w-11 h-11 rounded-full bg-[#F4F1EC] border border-[#DCD2C5] flex items-center justify-center group-hover:border-[#BA9B6E] transition-colors">
                  {renderIcon(item.iconKey)}
                </div>

                <div>
                  <h3 className="text-[15px] font-medium text-[#252321] leading-[1.3]">
                    {item.name}
                  </h3>
                  <p className="text-[12px] leading-[1.55] text-[#55504B] mt-1.5">
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
