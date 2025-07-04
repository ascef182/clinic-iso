import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Link } from "react-router-dom";

const specialties = [
  {
    name: "Oftalmologia ",
    cards: [
      {
        id: 1,
        title: "Avaliação Oftalmológica Completa",
        description:
          "Inclui exames como acuidade visual, fundo de olho e tonometria.",
        image: "./photos/olharprofundo.webp",
      },
      {
        id: 2,
        title: "Cirurgia Plástica Ocular",
        description:
          "Procedimentos como blefaroplastia realizados com precisão.",
        image: "./photos/cirurgia.jpeg",
      },
      {
        id: 3,
        title: "Aplicação de Botox",
        description: "Toxina botulínica para fins terapêuticos e estéticos.",
        image: "./photos/botox.jpeg",
      },
    ],
  },
  {
    name: "Psiquiatria",
    cards: [
      {
        id: 4,
        title: "Tratamento de Ansiedade",
        description: "Atenção especializada para ansiedade, fobias e pânico.",
        image: "./photos/psiquiatria.webp",
      },
      {
        id: 5,
        title: "TDAH e Transtornos de Atenção",
        description: "Diagnóstico e acompanhamento focado na funcionalidade.",
        image: "./photos/terapia.webp",
      },
      {
        id: 6,
        title: "Transtornos do Sono",
        description:
          "Abordagem completa para insônia e distúrbios relacionados.",
        image: "./photos/sono.jpg",
      },
    ],
  },
  {
    name: "Emagrecimento",
    cards: [
      {
        id: 7,
        title: "Protocolos com Ozempic e Wegovy",
        description:
          "Medicamentos modernos para apoio no emagrecimento estratégico.",
        image: "./photos/ozempic.webp",
      },
      {
        id: 8,
        title: "Hipertrofia e Massa Muscular",
        description:
          "Acompanhamento médico para ganho saudável de massa muscular.",
        image: "./photos/hipertrofia.webp",
      },
      {
        id: 9,
        title: "Bioimpedância e Avaliação Corporal",
        description:
          "Análise precisa da composição corporal para planejamento efetivo.",
        image: "./photos/acompanhamento.webp",
      },
    ],
  },
  {
    name: "Mudança de Estilo de Vida",
    cards: [
      {
        id: 10,
        title: "Tratamento de Dependências",
        description:
          "Apoio médico para dependência de álcool, drogas e tabagismo.",
        image: "./photos/dependencia.jpg",
      },
      {
        id: 11,
        title: "Transtornos Alimentares",
        description: "Cuidado humanizado para anorexia, bulimia e compulsão.",
        image: "./photos/alimentar.webp",
      },
      {
        id: 12,
        title: "Promoção de Hábitos Saudáveis",
        description:
          "Sono, alimentação e propósito alinhados para uma vida melhor.",
        image: "./photos/yoga.webp",
      },
    ],
  },
];

export function SpecialtiesSection() {
  const [selected, setSelected] = useState("Emagrecimento");

  const selectedSpecialty = specialties.find((s) => s.name === selected);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-neue-haas">
            Especialidades Médicas
          </h2>
          <p className="text-lg text-white max-w-4xl mx-auto mb-8 font-neue-haas"></p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {specialties.map((s) => (
              <button
                key={s.name}
                onClick={() => setSelected(s.name)}
                className={`px-4 py-1 font-medium border rounded-full transition-colors font-neue-haas
                  ${
                    selected === s.name
                      ? "bg-gradient-to-br from-[#FFD700] via-[#FFC300] to-[#B8860B] text-black border-[#FFD700]"
                      : "text-white border-[#FFD700] hover:bg-gradient-to-br hover:from-[#FFD700] hover:via-[#FFC300] hover:to-[#B8860B] hover:text-black"
                  }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {selectedSpecialty?.cards.map((card) => (
            <div
              key={card.id}
              className="relative bg-zinc-900 text-white hover:bg-gradient-to-br hover:from-[#FFD700] hover:via-[#FFC300] hover:to-[#B8860B] hover:text-black shadow-xl rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-zinc-700"
            >
              <div className="relative z-10 h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="relative z-10 p-8">
                <h3 className="text-xl font-bold mb-4 font-neue-haas">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed font-neue-haas">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16">
          <Link to="/especialidades">
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-black text-black font-neue-haas"
            >
              <span>Ver todas especialidades</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </section>
  );
}
