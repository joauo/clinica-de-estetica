export const CLINIC_INFO = {
  name: "[Nome da Clínica]",
  tagline: "Estética Avançada e Medicina Integrativa",
  phoneDisplay: "(11) 99999-9999",
  whatsappNumber: "5511999999999",
  instagramHandle: "@sua_clinica",
  instagramUrl: "https://instagram.com/sua_clinica",
  email: "contato@suaclinica.com.br",
  address: "Alameda Lorena, 1420 — Jardins, São Paulo/SP",
  addressDetails: "CEP 01424-005 · Estacionamento privativo com manobrista",
  hours: "Segunda a Sexta, 09h às 20h · Sábado, 09h às 14h",
};

export type ProcedureCategory =
  | "Todos"
  | "Faciais"
  | "Tecnologias"
  | "Corporais"
  | "Avaliação";

export interface ProcedureItem {
  id: string;
  name: string;
  category: Exclude<ProcedureCategory, "Todos">;
  duration: string;
  description: string;
  highlight: string;
}

export const PROCEDURES: ProcedureItem[] = [
  {
    id: "harmonizacao-facial",
    name: "Harmonização Facial",
    category: "Faciais",
    duration: "60 min",
    description:
      "Planejamento tridimensional que equilibra proporções, valoriza ângulos naturais e preserva a expressividade individual.",
    highlight: "Visagismo clínico e naturalidade",
  },
  {
    id: "toxina-botulinica",
    name: "Toxina Botulínica (Botox)",
    category: "Faciais",
    duration: "30 min",
    description:
      "Aplicação de precisão em pontos estratégicos para suavizar linhas de expressão e prevenir marcas dinâmicas sem perder leveza.",
    highlight: "Expressão descansada e elegante",
  },
  {
    id: "preenchimento-labial-facial",
    name: "Preenchimento Labial e Facial",
    category: "Faciais",
    duration: "45 min",
    description:
      "Reposição sutil de volume, contorno labial definido e sustentação com ácido hialurônico de alta integração tecidual.",
    highlight: "Contorno refinado e hidratação",
  },
  {
    id: "bioestimuladores-colageno",
    name: "Bioestimuladores de Colágeno",
    category: "Faciais",
    duration: "50 min",
    description:
      "Estímulo progressivo das fibras de sustentação da derme para restaurar firmeza, densidade e viço duradouro da pele.",
    highlight: "Firmeza biológica gradual",
  },
  {
    id: "skinbooster",
    name: "Skinbooster",
    category: "Faciais",
    duration: "40 min",
    description:
      "Hidratação injetável profunda que devolve luminosidade, elasticidade e textura sedosa ao rosto, pescoço e colo.",
    highlight: "Luminosidade e maciez imediata",
  },
  {
    id: "limpeza-pele-peeling",
    name: "Limpeza de Pele e Peeling",
    category: "Faciais",
    duration: "60 min",
    description:
      "Renovação celular controlada associada à higienização profunda para uniformizar o tom, desobstruir poros e preparar a pele.",
    highlight: "Textura uniforme e revitalizada",
  },
  {
    id: "ultraformer",
    name: "Ultraformer / Ultrassom Microfocado",
    category: "Tecnologias",
    duration: "60 min",
    description:
      "Tecnologia de ancoragem muscular e estímulo térmico profundo para efeito lifting não cirúrgico e definição do contorno facial.",
    highlight: "Lifting sem tempo de recuperação",
  },
  {
    id: "laser",
    name: "Laser de Alta Precisão",
    category: "Tecnologias",
    duration: "45 min",
    description:
      "Plataformas a laser selecionadas para tratamento de manchas, poros dilatados, vasos e rejuvenescimento global com segurança.",
    highlight: "Renovação dérmica avançada",
  },
  {
    id: "criolipolise-corporais",
    name: "Criolipólise e Tratamentos Corporais",
    category: "Corporais",
    duration: "75 min",
    description:
      "Protocolos combinados de redução de gordura localizada, remodelamento de contorno e melhora da firmeza e celulite.",
    highlight: "Contorno corporal estratégico",
  },
  {
    id: "avaliacao-protocolo",
    name: "Avaliação + Protocolo Personalizado",
    category: "Avaliação",
    duration: "45 min",
    description:
      "Consulta diagnóstica individualizada para mapear prioridades faciais e corporais em um plano contínuo de cuidados.",
    highlight: "Jornada exclusiva sob medida",
  },
];

export interface BodyTreatmentItem {
  id: string;
  name: string;
  description: string;
  iconKey: "sculpt" | "smooth" | "drainage" | "firmness" | "laser" | "men";
}

export const BODY_TREATMENTS: BodyTreatmentItem[] = [
  {
    id: "emagrecimento-avancado",
    name: "Emagrecimento avançado",
    description: "Protocolos exclusivos para redução de medidas e definição de contorno.",
    iconKey: "sculpt",
  },
  {
    id: "celulite-estrias",
    name: "Celulite e estrias",
    description: "Combinação de tecnologias para uma pele corporal mais uniforme.",
    iconKey: "smooth",
  },
  {
    id: "drenagem-linfatica",
    name: "Drenagem linfática",
    description: "Redução de retenção hídrica, melhora da circulação e sensação de leveza.",
    iconKey: "drainage",
  },
  {
    id: "radiofrequencia-corporal",
    name: "Radiofrequência corporal",
    description: "Estímulo de colágeno para firmeza cutânea e tratamento da flacidez.",
    iconKey: "firmness",
  },
  {
    id: "depilacao-laser",
    name: "Depilação a laser",
    description: "Remoção progressiva e segura dos pelos com conforto térmico.",
    iconKey: "laser",
  },
  {
    id: "estetica-masculina",
    name: "Estética masculina",
    description: "Procedimentos exclusivos pensados para a saúde e vitalidade do homem moderno.",
    iconKey: "men",
  },
];

export interface AboutMetric {
  prefix?: string;
  target: number;
  suffix?: string;
  label: string;
}

export const ABOUT_METRICS: AboutMetric[] = [
  { prefix: "+", target: 10, label: "Anos de atuação em estética avançada" },
  { prefix: "+", target: 12000, label: "Atendimentos realizados com acompanhamento" },
  { target: 100, suffix: "%", label: "Protocolos desenhados sob medida" },
];

export interface ResultCase {
  id: string;
  title: string;
  protocol: string;
  timeline: string;
  summary: string;
}

export const RESULT_CASES: ResultCase[] = [
  {
    id: "case-harmonizacao",
    title: "Equilíbrio de Terço Médio e Contorno",
    protocol: "Harmonização Facial · Bioestimuladores",
    timeline: "Evolução em 45 dias",
    summary:
      "Sustentação discreta das regiões malar e mandibular, devolvendo leveza ao olhar e definição natural do perfil.",
  },
  {
    id: "case-ultraformer",
    title: "Ancoragem e Firmeza Sem Cirurgia",
    protocol: "Ultraformer · Skinbooster",
    timeline: "Resultado progressivo em 60 dias",
    summary:
      "Melhora expressiva da linha da mandíbula e qualidade dérmica com aspecto descansado e textura uniforme.",
  },
  {
    id: "case-laser",
    title: "Uniformização e Luminosidade Global",
    protocol: "Laser · Peeling Personalizado",
    timeline: "Protocolo de 3 sessões",
    summary:
      "Redução visível de hiperpigmentações e poros aparentes, restaurando o brilho saudável da pele.",
  },
];

export interface TestimonialItem {
  id: string;
  patientName: string;
  procedure: string;
  quote: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "dep-1",
    patientName: "Camila Mendonça",
    procedure: "Harmonização Facial e Skinbooster",
    quote:
      "Desde a avaliação senti uma segurança enorme. O resultado ficou exatamente como eu desejava: meu rosto ganhou descanso e contorno sem que ninguém percebesse que fiz um procedimento.",
  },
  {
    id: "dep-2",
    patientName: "Beatriz Vasconcelos",
    procedure: "Bioestimuladores e Ultraformer",
    quote:
      "O ambiente é silencioso, privativo e extremamente elegante. O acompanhamento pós-procedimento faz toda a diferença para quem busca seriedade médica e naturalidade.",
  },
  {
    id: "dep-3",
    patientName: "Fernanda Albuquerque",
    procedure: "Toxina Botulínica e Laser",
    quote:
      "Finalmente encontrei uma clínica que respeita os meus traços. Os protocolos são explicados com clareza e o cuidado em cada detalhe supera qualquer expectativa.",
  },
];
