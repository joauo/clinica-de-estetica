export const imagens = {
  harmonizacao: "https://i.imgur.com/3HM94wW.jpeg",
  toxina: "https://i.imgur.com/9NCOKyt.jpeg",
  preenchimento: "https://i.imgur.com/2yRkOQD.jpeg",
  bioestimuladores: "https://i.imgur.com/HxRYT29.jpeg",
  skinbooster: "https://i.imgur.com/02bN4pX.jpeg",
  limpeza: "https://i.imgur.com/KUem3tA.jpeg",
  ultraformer: "https://i.imgur.com/qY7uVr0.jpeg",
  laser: "https://i.imgur.com/31OQ7nf.jpeg",
  corporalCard: "https://i.imgur.com/RkP2LfI.jpeg",
  avaliacao: "https://i.imgur.com/vkoMXXR.jpeg",
  corporalDestaque: "https://i.imgur.com/gyiVGgr.jpeg",
  sobre: "https://i.imgur.com/x8iyGas.jpeg",
  sobreDetalhe: "https://i.imgur.com/pKvgFpZ.jpeg",
  profissional: "https://i.imgur.com/pTnKhTY.jpeg",
  hero: "https://i.imgur.com/i3ZJJ92.png",
};

export type ProcedureCategory =
  | "Todos"
  | "Faciais"
  | "Tecnologias"
  | "Avaliação";

export interface ProcedureItem {
  id: string;
  name: string;
  category: Exclude<ProcedureCategory, "Todos">;
  duration: string;
  description: string;
  highlight: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface BodyTreatmentItem {
  id: string;
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
  beforeImage?: string;
  beforeImageAlt?: string;
  afterImage?: string;
  afterImageAlt?: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  procedure: string;
  quote: string;
  featured?: boolean;
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
    tagline: "Estética Avançada",
    logoUrl: "",
    metaTitle: "[Nome da Clínica] · Estética Avançada",
    metaDescription:
      "Clínica de estética avançada com protocolos individuais, tecnologias médicas e atendimento com hora marcada.",
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
      "Olá, gostaria de agendar uma avaliação e saber mais sobre os procedimentos.",
    whatsappFloatingLabel: "WhatsApp",
    instagramHandle: "[@instagram_da_clinica]",
    instagramUrl: "https://instagram.com",
    email: "[contato@suaclinica.com.br]",
    address: "Avenida Paulista, 1374, Bela Vista",
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
    technicalResponsibleLabel: "Responsável Técnico:",
    technicalResponsible: "[Nome do(a) Profissional · Registro Profissional]",
    copyrightYear: "2026",
    copyrightText: "Todos os direitos reservados.",
  },

  navigation: {
    homeLabel: "Início",
    skipToContentLabel: "Ir para o conteúdo principal",
    ctaLabel: "Quero agendar",
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
    image: "/images/hero-estetica-desktop.webp",
    imageMobile: "/images/hero-estetica-mobile.webp",
    imageAlt:
      "Atendimento facial de estética avançada em consultório iluminado",
    eyebrow: "Estética Facial e Corporal",
    titleLine1: "Estética de alta precisão",
    titleLine2: "para a sua melhor versão",
    description:
      "Atendimento clínico individual com procedimentos faciais e corporais planejados conforme a anatomia de cada paciente.",
    primaryCta: "Quero agendar",
    secondaryCta: "Conhecer procedimentos",
    stripItems: [
      "Avaliação clínica individual",
      "Protocolos faciais e corporais",
      "Atendimento com hora marcada",
    ],
  },

  services: {
    title: "Procedimentos faciais e tecnologias clínicas",
    ctaLabel: "Quero agendar",
    categories: [
      "Todos",
      "Faciais",
      "Tecnologias",
      "Avaliação",
    ] as ProcedureCategory[],
    items: [
      {
        id: "harmonizacao-facial",
        name: "Harmonização Facial",
        category: "Faciais",
        duration: "60 min",
        description:
          "Conjunto de técnicas indicado para quem busca equilibrar proporções do rosto respeitando os traços naturais.",
        highlight: "[Protocolo facial da clínica]",
        image: imagens.harmonizacao,
        imageAlt: "Procedimento de harmonização facial em consultório",
        featured: true,
      },
      {
        id: "toxina-botulinica",
        name: "Toxina Botulínica (Botox)",
        category: "Faciais",
        duration: "30 min",
        description:
          "Aplicação direcionada à musculatura facial para suavizar marcas de expressão em testa, glabela e região dos olhos.",
        highlight: "[Marca utilizada pela clínica]",
        image: imagens.toxina,
        imageAlt: "Aplicação de toxina botulínica facial",
      },
      {
        id: "preenchimento-labial-facial",
        name: "Preenchimento Labial e Facial",
        category: "Faciais",
        duration: "45 min",
        description:
          "Uso de ácido hialurônico para repor volume ou definir contornos em lábios, olheiras, malar e mento.",
        highlight: "[Linha de preenchedores utilizada]",
        image: imagens.preenchimento,
        imageAlt: "Preenchimento labial e facial com ácido hialurônico",
      },
      {
        id: "bioestimuladores-colageno",
        name: "Bioestimuladores de Colágeno",
        category: "Faciais",
        duration: "50 min",
        description:
          "Substâncias injetáveis indicadas para pacientes que desejam tratar flacidez leve a moderada no rosto ou pescoço.",
        highlight: "[Bioestimulador utilizado na clínica]",
        image: imagens.bioestimuladores,
        imageAlt: "Tratamento com bioestimuladores de colágeno",
      },
      {
        id: "skinbooster",
        name: "Skinbooster",
        category: "Faciais",
        duration: "40 min",
        description:
          "Microinjeções de ácido hialurônico fluido voltadas para hidratação profunda da pele de rosto, pescoço e colo.",
        highlight: "Hidratação dérmica",
        image: imagens.skinbooster,
        imageAlt: "Procedimento de hidratação profunda Skinbooster",
      },
      {
        id: "limpeza-pele-peeling",
        name: "Limpeza de Pele e Peeling",
        category: "Faciais",
        duration: "60 min",
        description:
          "Higienização facial associada a renovação química para quem precisa controlar oleosidade, poros e manchas superficiais.",
        highlight: "[Ativos e peelings aplicados]",
        image: imagens.limpeza,
        imageAlt: "Limpeza de pele e peeling facial em consultório",
      },
      {
        id: "ultraformer",
        name: "Ultraformer / Ultrassom Microfocado",
        category: "Tecnologias",
        duration: "60 min",
        description:
          "Equipamento de ultrassom focado indicado para tratar flacidez de face e papada sem cortes nem afastamento.",
        highlight: "[Equipamento e ponteiras disponíveis]",
        image: imagens.ultraformer,
        imageAlt: "Atendimento com ultrassom microfocado facial",
        featured: true,
      },
      {
        id: "laser",
        name: "Plataformas a Laser",
        category: "Tecnologias",
        duration: "45 min",
        description:
          "Tecnologia luminosa voltada a pacientes com queixas de manchas, pequenos vasos, cicatrizes de acne ou textura irregular.",
        highlight: "[Modelo do laser da clínica]",
        image: imagens.laser,
        imageAlt: "Sessão com tecnologia a laser dermatológico",
      },
      {
        id: "avaliacao-protocolo",
        name: "Avaliação + Protocolo Personalizado",
        category: "Avaliação",
        duration: "45 min",
        description:
          "Consulta presencial para examinar a pele, ouvir suas prioridades e definir a ordem mais segura de tratamentos.",
        highlight: "Plano clínico individual",
        image: imagens.avaliacao,
        imageAlt: "Consulta de avaliação estética individual",
      },
    ] as ProcedureItem[],
  },

  bodyTreatments: {
    eyebrow: "Cuidados Corporais",
    title: "Tratamentos corporais",
    subtitleTemplate:
      "Na {clinicName}, o atendimento corporal combina avaliação clínica e [equipamentos e tecnologias utilizados pela clínica].",
    featuredImage: imagens.corporalDestaque,
    featuredImageAlt: "Atendimento de estética corporal na clínica",
    ctaLabel: "Quero agendar",
    items: [
      {
        id: "emagrecimento-avancado",
        name: "Emagrecimento avançado",
        description:
          "Acompanhamento com associação de procedimentos voltado à redução de medidas e gordura localizada.",
      },
      {
        id: "celulite-estrias",
        name: "Celulite e estrias",
        description:
          "Combinação de recursos estéticos indicada para suavizar irregularidades e cicatrizes na pele corporal.",
      },
      {
        id: "drenagem-linfatica",
        name: "Drenagem linfática",
        description:
          "Técnica manual recomendada para aliviar retenção de líquidos, inchaço e desconforto circulatório.",
      },
      {
        id: "radiofrequencia-corporal",
        name: "Radiofrequência corporal",
        description:
          "Aquecimento controlado das camadas da pele indicado para regiões com flacidez após emagrecimento ou gestação.",
      },
      {
        id: "depilacao-laser",
        name: "Depilação a laser",
        description:
          "Sessões programadas para redução gradual dos pelos em diferentes fototipos com [tecnologia de laser da clínica].",
      },
      {
        id: "estetica-masculina",
        name: "Estética masculina",
        description:
          "Protocolos faciais e corporais adaptados à espessura da pele e às queixas mais comuns do público masculino.",
      },
    ] as BodyTreatmentItem[],
  },

  results: {
    mostrarAntesDepois: false,
    compactTitle: "[Resultados reais da clínica]",
    title: "Antes e depois com foco em naturalidade",
    subtitle:
      "Registros fotográficos padronizados que ilustram o acompanhamento clínico em diferentes etapas do tratamento.",
    beforeLabel: "Antes",
    afterLabel: "Depois",
    illustrativeCaption: "Exemplo ilustrativo",
    disclaimer: "Os resultados variam de pessoa para pessoa.",
    cases: [
      {
        id: "case-harmonizacao",
        title: "Equilíbrio de terço médio e contorno",
        protocol: "Harmonização Facial · Bioestimuladores",
        timeline: "[Prazo de acompanhamento]",
        summary:
          "Registro de preenchimento estrutural e bioestímulo em paciente com queixa de perda de sustentação facial.",
        beforeImage: "",
        beforeImageAlt: "Registro fotográfico antes do protocolo facial",
        afterImage: "",
        afterImageAlt: "Registro fotográfico após o protocolo facial",
      },
      {
        id: "case-ultraformer",
        title: "Contorno mandibular e firmeza",
        protocol: "Ultrassom Microfocado · Skinbooster",
        timeline: "[Prazo de acompanhamento]",
        summary:
          "Acompanhamento de flacidez leve na região do pescoço e mandíbula com associação de ultrassom e hidratação dérmica.",
        beforeImage: "",
        beforeImageAlt: "Registro fotográfico antes do ultrassom microfocado",
        afterImage: "",
        afterImageAlt: "Registro fotográfico após o ultrassom microfocado",
      },
      {
        id: "case-laser",
        title: "Textura e uniformização do tom",
        protocol: "Laser · Peeling Facial",
        timeline: "[Número de sessões]",
        summary:
          "Evolução fotográfica após sessões voltadas para manchas solares e poros dilatados.",
        beforeImage: "",
        beforeImageAlt: "Registro fotográfico antes das sessões de laser",
        afterImage: "",
        afterImageAlt: "Registro fotográfico após as sessões de laser",
      },
    ] as ResultCase[],
  },

  about: {
    eyebrow: "Sobre a Clínica",
    title: "Cuidado clínico com tempo para ouvir você",
    descriptionTemplate:
      "A {clinicName} atende pacientes que buscam procedimentos faciais e corporais feitos sem pressa, com explicações claras sobre cada etapa, indicações reais e limites seguros de cada técnica.",
    pillars: [
      "[Protocolos clínicos e marcas utilizadas pela clínica].",
      "[Equipamentos com registro na ANVISA e manutenção periódica].",
      "Atendimento com hora marcada e retorno de acompanhamento após o procedimento.",
    ],
    mainImage: imagens.sobre,
    mainImageAlt: "Ambiente de atendimento da clínica",
    detailImage: imagens.sobreDetalhe,
    detailImageAlt: "Detalhe da recepção e consultório da clínica",
    metrics: [
      {
        id: "years",
        value: "[+X] anos",
        label: "De atuação clínica em estética",
      },
      {
        id: "patients",
        value: "[+X] atendimentos",
        label: "Realizados com acompanhamento",
      },
      {
        id: "custom",
        value: "[X]%",
        label: "Protocolos planejados caso a caso",
      },
    ] as AboutMetric[],
    professional: {
      eyebrow: "Responsável Técnica",
      image: imagens.profissional,
      imageAlt: "Foto da profissional responsável pela clínica",
      name: "[Nome]",
      credentials: "[Formação/Registro]",
      bio: "[Mini-bio curta de até 3 linhas apresentando a formação acadêmica, área de atuação em estética facial e corporal e a conduta clínica adotada nas consultas.]",
    },
  },

  testimonials: {
    title: "Relatos de pacientes atendidas na clínica",
    subtitle:
      "Comentários compartilhados sobre o atendimento na recepção, a consulta de avaliação e o pós-procedimento.",
    items: [
      {
        id: "dep-1",
        patientName: "[Nome da paciente]",
        procedure: "[Procedimento realizado]",
        quote:
          "[Depoimento real em destaque sobre como foi a consulta de avaliação, o cuidado durante a sessão e a percepção após o procedimento.]",
        featured: true,
      },
      {
        id: "dep-2",
        patientName: "[Nome da paciente]",
        procedure: "[Procedimento realizado]",
        quote:
          "[Depoimento real comentando a clareza nas orientações e o acompanhamento nos dias seguintes.]",
      },
      {
        id: "dep-3",
        patientName: "[Nome da paciente]",
        procedure: "[Procedimento realizado]",
        quote:
          "[Depoimento real relatando o conforto no consultório e o respeito às características naturais.]",
      },
    ] as TestimonialItem[],
  },

  faq: {
    title: "Perguntas frequentes",
    subtitle:
      "Respostas diretas sobre dor, recuperação, prazos, valores, avaliação presencial e segurança dos insumos.",
    items: [
      {
        id: "faq-dor",
        question: "Os procedimentos causam dor?",
        answer:
          "A sensibilidade varia conforme a região tratada, mas aplicamos anestésico tópico antes das sessões e utilizamos técnicas de conforto para reduzir o incômodo ao mínimo.",
      },
      {
        id: "faq-recuperacao",
        question: "Como é a recuperação após o atendimento?",
        answer:
          "A maior parte dos procedimentos permite voltar à rotina no mesmo dia, com recomendações simples como evitar sol direto ou esforço físico intenso nas primeiras horas.",
      },
      {
        id: "faq-resultados",
        question: "Quando aparecem os resultados e quanto tempo duram?",
        answer:
          "Algumas técnicas trazem mudanças visíveis logo após a sessão, enquanto bioestimuladores e tecnologias agem gradualmente ao longo de semanas, sempre variando conforme o organismo.",
      },
      {
        id: "faq-valores",
        question: "Como funcionam os valores e as formas de pagamento?",
        answer:
          "Os valores dependem da quantidade de sessões e produtos indicados para o seu caso, por isso o orçamento completo e [as formas de pagamento aceitas pela clínica] são informados na avaliação.",
      },
      {
        id: "faq-avaliacao",
        question: "Como funciona a avaliação presencial?",
        answer:
          "Na consulta inicial avaliamos seu histórico de saúde, analisamos a pele ou região corporal em detalhe e definimos juntos o plano de tratamento mais adequado.",
      },
      {
        id: "faq-seguranca",
        question: "Os produtos e aparelhos têm procedência garantida?",
        answer:
          "Trabalhamos com [marcas e fornecedores utilizados pela clínica], insumos com registro na ANVISA e equipamentos calibrados periodicamente conforme normas sanitárias.",
      },
    ] as FaqItem[],
  },

  booking: {
    eyebrow: "Agendamento",
    title: "Marque sua avaliação presencial",
    subtitle:
      "Envie seus dados pelo formulário para iniciar a conversa com a recepção pelo WhatsApp.",
    instagramButtonLabel: "Ver Instagram",
    contactLabels: {
      phone: "Telefone e WhatsApp",
      address: "Endereço",
      hours: "Horário de Atendimento",
    },
    formTitle: "Solicitar horário",
    formSubtitle:
      "Os campos abaixo montam a mensagem pronta para você enviar no WhatsApp da clínica.",
    submitLabel: "Falar no WhatsApp",
    fieldLabels: {
      name: "Nome completo",
      namePlaceholder: "Seu nome completo",
      phone: "WhatsApp para retorno",
      phonePlaceholder: "(00) 00000-0000",
      procedure: "Procedimento de interesse",
      procedureGroupFacial: "Procedimentos Faciais e Tecnologias",
      procedureGroupBody: "Tratamentos Corporais",
      period: "Preferência de horário",
      notes: "Objetivos ou observações (opcional)",
      notesPlaceholder:
        "Conte o que gostaria de avaliar na consulta ou os melhores dias da semana.",
    },
    validationMessages: {
      invalidName: "Informe seu nome completo para enviar a mensagem.",
      invalidPhone:
        "Informe um número de telefone ou WhatsApp válido com DDD.",
    },
    confirmation: {
      title: "Mensagem pronta para envio no WhatsApp",
      description: "Se a janela não abrir sozinha, use o botão abaixo.",
      greetingTemplate: "Olá, gostaria de agendar uma avaliação na {clinicName}.",
    },
    periods: [
      "Manhã (09h às 12h)",
      "Tarde (12h às 17h)",
      "Noite (17h às 20h)",
    ],
  },

  footer: {
    description:
      "Protocolos faciais e corporais conduzidos com critério clínico e hora marcada.",
    navHeading: "Navegação",
    contactHeading: "Contato",
    serviceHeading: "Atendimento",
    instagramPrefix: "Instagram:",
    whatsappButtonLabel: "Falar no WhatsApp",
    whatsappMessageTemplate:
      "Olá, gostaria de mais informações sobre os procedimentos da {clinicName}.",
  },
};
