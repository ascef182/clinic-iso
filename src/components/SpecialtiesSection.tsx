import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const specialties = [
  {
    name: "Oftalmologia",
    cards: [
      {
        id: 1,
        title: "Exame de Vista",
        description: "Diagnóstico preciso com equipamentos de última geração.",
        image: "https://images.unsplash.com/photo-1588776814546-ec7e1345c492"
      },
      {
        id: 2,
        title: "Cirurgia Refrativa",
        description: "Correção de miopia, hipermetropia e astigmatismo.",
        image: "https://images.unsplash.com/photo-1580281658629-2499ab5b4e6c"
      },
      {
        id: 3,
        title: "Tratamento de Catarata",
        description: "Procedimentos modernos com rápida recuperação.",
        image: "https://images.unsplash.com/photo-1606761568499-6b03f6fbdcd4"
      }
    ]
  },
  {
    name: "Saúde Mental",
    cards: [
      {
        id: 4,
        title: "Terapia Cognitivo-Comportamental",
        description: "Auxílio no controle da ansiedade e depressão.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
      },
      {
        id: 5,
        title: "Psicoterapia Infantil",
        description: "Apoio emocional para crianças e adolescentes.",
        image: "https://images.unsplash.com/photo-1615397348212-5a1e94b58fcf"
      },
      {
        id: 6,
        title: "Avaliação Psiquiátrica",
        description: "Diagnóstico preciso e prescrição adequada.",
        image: "https://images.unsplash.com/photo-1588776814770-1e8ecdcf404a"
      }
    ]
  },
  {
    name: "Neurologia",
    cards: [
      {
        id: 7,
        title: "Diagnóstico de Epilepsia",
        description: "Monitoramento e análise detalhada do sistema nervoso.",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54"
      },
      {
        id: 8,
        title: "Tratamento de AVC",
        description: "Reabilitação especializada para recuperação pós-acidente vascular cerebral.",
        image: "https://images.unsplash.com/photo-1580281658629-2499ab5b4e6c"
      },
      {
        id: 9,
        title: "Consulta Neurológica",
        description: "Acompanhamento com neurologistas experientes.",
        image: "https://images.unsplash.com/photo-1606761568499-6b03f6fbdcd4"
      }
    ]
  },
  {
    name: "Medicina Geral",
    cards: [
      {
        id: 10,
        title: "Consulta Clínica",
        description: "Atendimento para sintomas gerais e encaminhamentos.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e85"
      },
      {
        id: 11,
        title: "Check-up Completo",
        description: "Exames laboratoriais e clínicos preventivos.",
        image: "https://images.unsplash.com/photo-1597764692274-0d4090e3b7e7"
      },
      {
        id: 12,
        title: "Atendimento Humanizado",
        description: "Cuidado empático e personalizado para todas as idades.",
        image: "https://images.unsplash.com/photo-1580281658629-2499ab5b4e6c"
      }
    ]
  }
];

export function SpecialtiesSection() {
  const [selected, setSelected] = useState("Oftalmologia");

  const selectedSpecialty = specialties.find((s) => s.name === selected);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-custom-black mb-6">
            Descubra Nossas Especialidades Médicas
          </h2>
          <p className="text-lg text-custom-dark-gray max-w-4xl mx-auto mb-8">
            Nossa equipe é composta por profissionais experientes prontos para oferecer o melhor cuidado em diversas áreas da saúde. Escolha uma especialidade abaixo para conhecer mais.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {specialties.map((s) => (
              <button
                key={s.name}
                onClick={() => setSelected(s.name)}
                className={`px-6 py-3 font-medium border rounded-full transition-colors
                  ${selected === s.name
                    ? "bg-amber-400 text-black border-amber-400"
                    : "text-custom-dark-gray border-custom-medium-gray hover:bg-custom-light-gray"}`}
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
              className="relative bg-white text-custom-black hover:bg-custom-black hover:text-white shadow-xl rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
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
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-custom-dark-gray text-custom-dark-gray hover:bg-custom-dark-gray hover:text-white"
            asChild
          >
            <Link to="/especialidades">Ver todas especialidades</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
