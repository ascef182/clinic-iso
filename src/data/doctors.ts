export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  photo: string;
  crm: string;
  bio: string;
  education: string[];
}

export const doctors: Doctor[] = [
  {
    id: "kennedy",
    name: "Dr. Kennedy Matheus Ázara Pinheiro",
    specialty: "Saúde Mental ",
    photo: "./photos/Kennedy.webp",
    crm: "87388 MG", // Atualize com o CRM verdadeiro, se necessário
    bio: "Dr. Kennedy Matheus Ázara Pinheiro é médico com atuação dedicada à Saúde Mental e à Medicina do Estilo de Vida. Com uma abordagem ética, empática e baseada em evidências, oferece cuidado individualizado e integral, focado na transformação de hábitos e no bem-estar físico, mental e emocional dos pacientes.",
    education: [
      "Médico formado pela UNIFENAS-BH",
      "Pós-graduando em Psiquiatria",
      "Pós-graduando em Nutrologia",
      "Pós-graduando em Mudança de Estilo de Vida",
    ],
  },

  {
    id: "maria",
    name: "Dra. Maria Fernanda Malagoli",
    specialty: "Nutrologia ",
    photo: "./photos/Maria.webp",
    crm: "106699 MG", // Verifique se este CRM está correto
    bio: "Dra. Maria Fernanda Malagoli é médica com atuação voltada para a Nutrologia e a Medicina do Estilo de Vida. Com uma abordagem preventiva e acolhedora, acredita na importância de hábitos consistentes, equilíbrio entre corpo e mente e no acompanhamento próximo para transformar a saúde e o bem-estar dos seus pacientes.",
    education: [
      "Médica formada pela UNIFENAS-BH",
      "Pós-graduanda em Nutrologia",
      "Pós-graduanda em Mudança de Estilo de Vida",
    ],
  },
  {
    id: "rafaela",
    name: "Dra. Rafaela Malagoli",
    specialty: "Oftalmologia | Plástica Ocular",
    photo: "./photos/Rafaela.webp",
    crm: "84889 MG", // Confirme se este CRM está correto
    bio: "Dra. Rafaela Malagoli é médica oftalmologista com especialização em Plástica Ocular pela Faculdade de Ciências Médicas de Minas Gerais. Atua com foco na blefaroplastia e em procedimentos estéticos da região periocular, unindo precisão técnica, sensibilidade artística e cuidado individualizado para promover saúde, expressão e autoestima com naturalidade e segurança.",
    education: [
      "Médica formada pela UNIFENAS-BH",
      "Residência em Oftalmologia pela Faculdade de Ciências Médicas de Minas Gerais",
      "Fellow em Plástica Ocular pela Faculdade de Ciências Médicas de Minas Gerais",
    ],
  },
];
