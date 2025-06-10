
export interface Treatment {
  name: string;
  description: string;
}

export interface Specialty {
  id: string;
  name: string;
  description: string;
  image: string;
  services: string[];
  treatments?: Treatment[];
}

export const specialties: Specialty[] = [
  {
    id: "oftalmologia",
    name: "Oftalmologia",
    description: "Cuidamos da saúde dos seus olhos com equipamentos de última geração e profissionais altamente qualificados. Nossa clínica oferece diagnósticos precisos e tratamentos avançados para diversas condições oculares.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    services: [
      "Consulta oftalmológica completa",
      "Cirurgia de catarata",
      "Tratamento de glaucoma",
      "Correção de vícios de refração",
      "Exames de retina",
      "Tratamento de doenças oculares"
    ],
    treatments: [
      {
        name: "Cirurgia Refrativa",
        description: "Procedimento que visa corrigir problemas de visão como miopia, hipermetropia e astigmatismo, reduzindo a dependência de óculos ou lentes de contato."
      },
      {
        name: "Cirurgia de Catarata",
        description: "Remoção da catarata (cristalino opaco) e implante de lente intraocular, restaurando a visão comprometida."
      },
      {
        name: "Tratamento de Glaucoma",
        description: "Controle da pressão ocular através de medicamentos, laser ou cirurgia, prevenindo danos ao nervo óptico."
      }
    ]
  },
  {
    id: "saude-mental",
    name: "Saúde Mental",
    description: "Nossa equipe de saúde mental oferece suporte para diversos transtornos psiquiátricos e emocionais, com uma abordagem integrativa e humanizada. Trabalhamos para o bem-estar psicológico e emocional dos nossos pacientes.",
    image: "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    services: [
      "Avaliação psiquiátrica",
      "Tratamento de depressão",
      "Tratamento de ansiedade",
      "Terapia cognitivo-comportamental",
      "Psicoterapia individual",
      "Orientação familiar"
    ],
    treatments: [
      {
        name: "Terapia Cognitivo-Comportamental",
        description: "Abordagem terapêutica focada em identificar e modificar padrões de pensamento e comportamento negativos."
      },
      {
        name: "Tratamento Farmacológico",
        description: "Uso de medicamentos prescritos para ajudar no tratamento de condições como depressão, ansiedade e outros transtornos."
      },
      {
        name: "Mindfulness e Técnicas de Relaxamento",
        description: "Práticas que ajudam a reduzir o estresse, promover a atenção plena e melhorar o equilíbrio emocional."
      }
    ]
  },
  {
    id: "obesidade",
    name: "Obesidade",
    description: "Tratamento multidisciplinar da obesidade com foco na saúde e qualidade de vida. Nossa abordagem integra aspectos nutricionais, médicos, psicológicos e de estilo de vida para resultados duradouros.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    services: [
      "Avaliação médica especializada",
      "Plano nutricional personalizado",
      "Acompanhamento psicológico",
      "Orientação para atividade física",
      "Tratamentos clínicos para obesidade",
      "Preparo para cirurgia bariátrica"
    ],
    treatments: [
      {
        name: "Plano Alimentar Personalizado",
        description: "Desenvolvimento de estratégias alimentares individualizadas que levam em consideração preferências, estilo de vida e objetivos de saúde."
      },
      {
        name: "Terapia Comportamental",
        description: "Abordagem que ajuda a identificar e modificar comportamentos alimentares problemáticos e estabelecer novos hábitos saudáveis."
      },
      {
        name: "Tratamento Medicamentoso",
        description: "Uso de medicamentos específicos, quando indicados, como parte de um programa abrangente para controle do peso."
      }
    ]
  },
  {
    id: "estilo-de-vida",
    name: "Estilo de Vida",
    description: "Promovemos mudanças sustentáveis no estilo de vida para melhorar sua saúde e bem-estar geral. Nossa equipe multidisciplinar trabalha para ajudá-lo a adotar hábitos saudáveis que se integram ao seu dia a dia.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    services: [
      "Avaliação de estilo de vida",
      "Orientação para atividade física",
      "Gerenciamento de estresse",
      "Melhorias na qualidade do sono",
      "Alimentação consciente",
      "Coaching de saúde"
    ],
    treatments: [
      {
        name: "Programa de Atividade Física",
        description: "Orientação personalizada sobre exercícios adequados ao seu perfil, condição de saúde e objetivos pessoais."
      },
      {
        name: "Técnicas de Gerenciamento de Estresse",
        description: "Estratégias práticas para lidar com o estresse cotidiano e melhorar sua resiliência emocional."
      },
      {
        name: "Coaching de Hábitos Saudáveis",
        description: "Acompanhamento e suporte para implementar e manter mudanças positivas em seu estilo de vida."
      }
    ]
  }
];
