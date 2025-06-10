import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const specialties = [
  {
    id: "oftalmologia",
    title: "Oftalmologia",
    description:
      "Cuidados especializados para a saúde dos seus olhos com equipamentos de última geração.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
  },
  {
    id: "saude-mental",
    title: "Saúde Mental",
    description:
      "Atendimento psicológico e psiquiátrico para o seu bem-estar emocional e mental.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },
  {
    id: "neurologia",
    title: "Neurologia",
    description:
      "Diagnóstico e tratamento de doenças neurológicas com uma equipe experiente e dedicada.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
  },
  {
    id: "medicina-geral",
    title: "Medicina Geral",
    description:
      "Consultas médicas gerais com profissionais qualificados e atendimento humanizado.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
  },
];

export function SpecialtiesSection() {
  const [selected, setSelected] = useState("medicina-geral");

  const filteredSpecialties = specialties.filter((s) => s.id === selected);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-custom-black mb-6">
            Áreas de atuação <br /> com excelência e cuidado
          </h2>
          <p className="text-lg text-custom-dark-gray max-w-4xl mx-auto mb-8">
            Nossos especialistas estão preparados para oferecer um atendimento humano e eficaz,
            com tecnologia de ponta e empatia em todas as áreas da medicina.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {specialties.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelected(s.id)}
                className={`px-6 py-3 font-medium border rounded-full transition-colors duration-300
                  ${
                  selected === s.id
                    ? "bg-amber-400 border-amber-400 text-black"
                    : "text-custom-dark-gray border-custom-medium-gray hover:bg-custom-light-gray"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredSpecialties.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:bg-custom-dark-gray hover:text-white transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-sm leading-relaxed">
                  {card.description}
                </p>
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
