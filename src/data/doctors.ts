
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
    specialty: "Oftalmologia",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    crm: "12345 MG",
    bio: "Dr. Kennedy Matheus Ázara Pinheiro é fundador e diretor clínico do ISO - Instituto Seu Olhar. Com vasta experiência em cirurgias oftalmológicas e tratamentos especializados, Dr. Kennedy se dedica a oferecer o melhor atendimento e os procedimentos mais avançados para seus pacientes.",
    education: [
      "Médico formado pela Universidade Federal de Minas Gerais",
      "Residência em Oftalmologia pelo Instituto Brasileiro de Oftalmologia",
      "Especialização em Cirurgia Refrativa pela Johns Hopkins University",
      "Membro da Sociedade Brasileira de Oftalmologia"
    ]
  },
  {
    id: "maria",
    name: "Dra. Maria Fernanda Malagoli",
    specialty: "Psiquiatria",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    crm: "23456 MG",
    bio: "Dra. Maria Fernanda Malagoli é especialista em saúde mental, com abordagem humanizada e integrada. Atua no tratamento de transtornos de ansiedade, depressão e outros distúrbios psiquiátricos, oferecendo um cuidado personalizado para cada paciente.",
    education: [
      "Médica formada pela Universidade Federal de São Paulo",
      "Residência em Psiquiatria pela Santa Casa de São Paulo",
      "Especialização em Terapia Cognitivo-Comportamental",
      "Membro da Associação Brasileira de Psiquiatria"
    ]
  },
  {
    id: "rafaela",
    name: "Dra. Rafaela Malagoli",
    specialty: "Nutrição e Obesidade",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    crm: "34567 MG",
    bio: "Dra. Rafaela Malagoli é especialista em Nutrição e tratamentos para obesidade. Com uma abordagem integral, ela ajuda seus pacientes a desenvolverem uma relação saudável com a alimentação e a alcançarem seus objetivos de saúde de forma sustentável.",
    education: [
      "Nutricionista formada pela Universidade de São Paulo",
      "Mestrado em Ciências da Nutrição pela UFMG",
      "Especialização em Transtornos Alimentares e Obesidade",
      "Membro da Associação Brasileira para o Estudo da Obesidade"
    ]
  }
];
