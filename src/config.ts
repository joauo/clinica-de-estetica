import heroBgImage from "./assets/images/hero-estetica.png";

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

export interface BodyTreatmentItem {
  id: string;
  number: string;
  name: string;
  description: string;
}

export interface AboutMetric {
  id: string;
  value: string;
  label: string;
}

export interface ResultCase {
  id: string;
  title: string;
  protocol: string;
  timeline: string;
  summary: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  procedure: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export const SITE_CONFIG = {
  brand: {
    name: "[Nome da Clínica]",
    tagline: "Estética Avançada e Medicina Integrativa",
    logoUrl: "",
    metaTitle: "[Nome da Clínica] — Estética Avançada",
    metaDescription:
      "Clínica de estética avançada com protocolos personalizados, tecnologias de alta precisão e atendimento exclusivo.",
  },

  colors: {
    primary: "#BA9B6E",
    primaryHover: "#A8895F",
    primaryActive: "#96764F",
    brown: "#45251A",
    brownHover: "#5E3526",
    beige: "#E3DCD2",
    beigeSoft: "#F4F1EC",
    champagne: "#E8E1D7",
    sand: "#DCD2C5",
    white: "#FEFEFE",
    surface: "#F7F6F4",
    border: "#EAE8E5",
    text: "#252321",
    textSecondary: "#3E3A36",
    textMuted: "#55504B",
    error: "#B94A48",
    success: "#506F55",
  },

  contact: {
    phoneDisplay: "[Telefone / WhatsApp]",
    whatsappNumber: "5500000000000",
    whatsappDefaultMessage:
      "Olá! Gostaria de agendar uma avaliação personalizada e saber mais sobre os procedimentos.",
    instagramHandle: "[@instagram_da_clinica]",
    instagramUrl: "https://instagram.com",
    email: "[contato@suaclinica.com.br]",
    address: "Avenida Paulista, 1374 — Bela Vista",
    cityState: "São Paulo/SP",
    zipCode: "CEP 01310-100",
    addressDetails: "Próximo ao Metrô Trianon-Masp",
    coordinates: {
      lat: -23.56318,
      lng: -46.65409,
    },
    hours: "[Dias e horários de atendimento]",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Avenida+Paulista,+1374+-+Bela+Vista,+Sao+Paulo+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed",
    googleMapsLinkUrl:
      "https://www.google.com/maps/search/?api=1&query=-23.56318,-46.65409",
  },

  legal: {
    technicalResponsible: "[Nome do(a) Profissional · Registro Profissional]",
    copyrightYear: "2026",
    copyrightText: "Todos os direitos reservados.",
  },

  navigation: {
    ctaLabel: "Agendar Avaliação",
    links: [
      { label: "Procedimentos", href: "#servicos" },
      { label: "Corporais", href: "#corporais" },
      { label: "Resultados", href: "#resultados" },
      { label: "Sobre", href: "#sobre" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Dúvidas", href: "#faq" },
      { label: "Contato", href: "#agendamento" },
    ] as NavLinkItem[],
  },

  hero: {
    image: heroBgImage,
    imageAlt:
      "Atendimento facial de estética avançada em ambiente iluminado e sereno",
    eyebrow: "Estética Avançada · Protocolos Personalizados",
    titleLine1: "Estética de alta precisão",
    titleLine2: "para a sua melhor versão",
    description:
      "Unimos tecnologias de vanguarda, protocolos minimamente invasivos e olhar clínico refinado para entregar resultados naturais, duradouros e discretos em uma experiência pensada para o seu conforto.",
    primaryCta: "Agendar Avaliação",
    secondaryCta: "Conhecer Procedimentos",
    cards: [
      {
        index: "01",
        title: "Corpo Clínico",
        detail: "Especialistas em precisão anatômica",
        href: "#sobre",
      },
      {
        index: "02",
        title: "Tecnologias",
        detail: "Equipamentos de alta performance",
        href: "#servicos",
      },
      {
        index: "03",
        title: "Protocolos",
        detail: "Planejamento único sob medida",
        href: "#servicos",
      },
      {
        index: "04",
        title: "Experiência",
        detail: "Privacidade e atendimento exclusivo",
        href: "#agendamento",
      },
    ],
  },

  services: {
    eyebrow: "Menu de Procedimentos",
    title: "Tratamentos desenhados para resultados naturais",
    ctaLabel: "Agendar",
    categories: [
      "Todos",
      "Faciais",
      "Tecnologias",
      "Corporais",
      "Avaliação",
    ] as ProcedureCategory[],
    items: [
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
    ] as ProcedureItem[],
  },

  bodyTreatments: {
    eyebrow: "Protocolos Corporais",
    title: "Tratamentos corporais",
    subtitleTemplate:
      "Na {clinicName} você encontra uma linha completa de tratamentos estéticos avançados para o corpo, conduzidos por especialistas com tecnologia certificada.",
    items: [
      {
        id: "emagrecimento-avancado",
        number: "01",
        name: "Emagrecimento avançado",
        description:
          "Protocolos exclusivos para redução de medidas e definição de contorno.",
      },
      {
        id: "celulite-estrias",
        number: "02",
        name: "Celulite e estrias",
        description:
          "Combinação de tecnologias para uma pele corporal mais uniforme.",
      },
      {
        id: "drenagem-linfatica",
        number: "03",
        name: "Drenagem linfática",
        description:
          "Redução de retenção hídrica, melhora da circulação e sensação de leveza.",
      },
      {
        id: "radiofrequencia-corporal",
        number: "04",
        name: "Radiofrequência corporal",
        description:
          "Estímulo de colágeno para firmeza cutânea e tratamento da flacidez.",
      },
      {
        id: "depilacao-laser",
        number: "05",
        name: "Depilação a laser",
        description:
          "Remoção progressiva e segura dos pelos com conforto térmico.",
      },
      {
        id: "estetica-masculina",
        number: "06",
        name: "Estética masculina",
        description:
          "Procedimentos exclusivos pensados para a saúde e vitalidade do homem moderno.",
      },
    ] as BodyTreatmentItem[],
  },

  results: {
    eyebrow: "Resultados Clínicos",
    title: "Antes e depois com foco em naturalidade",
    subtitle:
      "Evoluções acompanhadas por registro fotográfico padronizado, respeitando a individualidade anatômica de cada paciente.",
    beforeLabel: "Antes",
    afterLabel: "Depois",
    disclaimer: "Os resultados variam de pessoa para pessoa.",
    cases: [
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
    ] as ResultCase[],
  },

  about: {
    eyebrow: "Sobre a Clínica",
    title: "Onde ciência estética e sofisticação se encontram",
    descriptionTemplate:
      "A {clinicName} nasceu com o propósito de oferecer uma jornada estética serena, segura e altamente personalizada. Cada plano de cuidado é desenhado para preservar sua identidade, valorizando a harmonia natural sem exageros.",
    pillars: [
      "Protocolos autorais baseados em evidência científica e anatomia facial.",
      "Equipamentos de última geração com manutenção certificada.",
      "Atendimento privativo, tempo de consulta estendido e pós-procedimento dedicado.",
    ],
    metrics: [
      {
        id: "years",
        value: "[+X] anos",
        label: "De atuação em estética avançada",
      },
      {
        id: "patients",
        value: "[+X] atendimentos",
        label: "Realizados com acompanhamento individual",
      },
      {
        id: "custom",
        value: "[X]%",
        label: "Protocolos desenhados sob medida",
      },
    ] as AboutMetric[],
    professional: {
      eyebrow: "Direção Clínica",
      name: "[Nome]",
      credentials: "[Formação/Registro]",
      bio: "[Mini-bio curta de até 3 linhas apresentando a trajetória profissional, áreas de especialização em estética avançada e compromisso com resultados naturais, seguros e individualizados.]",
    },
  },

  testimonials: {
    eyebrow: "Experiência das Pacientes",
    title: "Relatos de quem confia no nosso cuidado",
    subtitle:
      "Depoimentos compartilhados sobre o acolhimento, a privacidade do atendimento e a atenção aos detalhes em cada etapa.",
    items: [
      {
        id: "dep-1",
        patientName: "[Nome da paciente]",
        procedure: "[Procedimento realizado]",
        quote:
          "[Depoimento real sobre o atendimento, conforto durante o procedimento e naturalidade percebida após o protocolo.]",
      },
      {
        id: "dep-2",
        patientName: "[Nome da paciente]",
        procedure: "[Procedimento realizado]",
        quote:
          "[Depoimento real destacando a experiência na clínica, a clareza das orientações e o acompanhamento pós-procedimento.]",
      },
      {
        id: "dep-3",
        patientName: "[Nome da paciente]",
        procedure: "[Procedimento realizado]",
        quote:
          "[Depoimento real relatando a segurança transmitida pela equipe e o respeito aos traços naturais.]",
      },
    ] as TestimonialItem[],
  },

  faq: {
    eyebrow: "Dúvidas Frequentes",
    title: "Perguntas frequentes sobre os procedimentos",
    subtitle:
      "Informações essenciais sobre conforto, recuperação, planejamento e segurança clínica antes da sua avaliação presencial.",
    items: [
      {
        id: "faq-dor",
        question: "Os procedimentos costumam causar dor ou desconforto?",
        answer:
          "A maioria dos procedimentos é bem tolerada. Utilizamos anestésicos tópicos de alta eficácia, técnicas minimamente invasivas com microcânulas e recursos de conforto térmico para tornar cada sessão tranquila.",
      },
      {
        id: "faq-recuperacao",
        question: "Qual é o tempo de recuperação após o atendimento?",
        answer:
          "Grande parte dos protocolos permite retorno imediato às atividades sociais e profissionais. Pequenos edemas ou sensibilidade local podem ocorrer de forma discreta e regridem gradualmente nos dias seguintes, com orientações personalizadas.",
      },
      {
        id: "faq-resultados",
        question: "Em quanto tempo os resultados aparecem e quanto tempo duram?",
        answer:
          "O prazo varia conforme a técnica indicada: alguns tratamentos mostram melhora imediata após a sessão, enquanto bioestimuladores e tecnologias de colágeno evoluem progressivamente ao longo de semanas, com manutenção planejada caso a caso.",
      },
      {
        id: "faq-valores",
        question: "Como funcionam os valores e as formas de pagamento?",
        answer:
          "Como cada protocolo é desenhado individualmente de acordo com as necessidades anatômicas e objetivos de cada paciente, o orçamento detalhado e as condições de pagamento são apresentados após a consulta de avaliação.",
      },
      {
        id: "faq-avaliacao",
        question: "Como funciona a avaliação personalizada na clínica?",
        answer:
          "Na avaliação, realizamos uma análise clínica completa das proporções faciais ou corporais, escutamos suas queixas e expectativas, avaliamos histórico de saúde e montamos um cronograma seguro em etapas respeitando a naturalidade.",
      },
      {
        id: "faq-seguranca",
        question: "Os produtos e equipamentos utilizados são seguros?",
        answer:
          "Sim. Trabalhamos exclusivamente com insumos originais de laboratórios reconhecidos, registro regularizado na ANVISA, rastreabilidade de lote e equipamentos submetidos a calibração e manutenção periódica.",
      },
    ] as FaqItem[],
  },

  booking: {
    eyebrow: "Concierge & Agendamento",
    title: "Agende sua avaliação personalizada",
    subtitle:
      "Preencha seus dados ao lado para iniciar o atendimento diretamente pelo WhatsApp da clínica com nossa equipe de recepção.",
    locationEyebrow: "Localização",
    locationNote: "Atendimento presencial com hora marcada",
    mapPlaceholderLabel: "[link do mapa]",
    mapPlaceholderHint:
      "Espaço reservado para incorporar o mapa do Google (substitua [link do mapa] em src/config.ts pela URL de incorporação).",
    mapLinkLabel: "Abrir no Google Maps",
    instagramButtonLabel: "Acompanhar no Instagram",
    formTitle: "Solicitar horário via WhatsApp",
    formSubtitle:
      "Seus dados são organizados automaticamente em uma mensagem pronta para envio.",
    submitLabel: "Enviar Solicitação para o WhatsApp",
    periods: [
      "Manhã (09h às 12h)",
      "Tarde (12h às 17h)",
      "Noite (17h às 20h)",
    ],
  },

  footer: {
    description:
      "Ciência, tecnologia e olhar clínico para resultados naturais e individualizados.",
    navHeading: "Navegação",
    contactHeading: "Contato",
    serviceHeading: "Atendimento",
    whatsappButtonLabel: "Falar no WhatsApp",
  },
};
