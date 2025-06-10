
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function SpecialtiesSection() {
  const specialtyCards = [
    {
      id: 1,
      title: "Oftalmologia",
      description: "Cuidados especializados para a saúde dos seus olhos com equipamentos de última geração.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
      backgroundStyle: "circle-left",
      cardStyle: "light"
    },
    {
      id: 2,
      title: "Saúde Mental",
      description: "Atendimento psicológico e psiquiátrico para o seu bem-estar emocional e mental.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      backgroundStyle: "circle-right",
      cardStyle: "light"
    },
    {
      id: 3,
      title: "Medicina Geral",
      description: "Consultas médicas gerais com profissionais qualificados e atendimento humanizado.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
      backgroundStyle: "curve-top-right",
      cardStyle: "dark"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Todo o Excelente Trabalho que
            <br />
            Nosso Serviço Médico
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8">
            Somos privilegiados em trabalhar com centenas de profissionais médicos visionários, 
            incluindo muitos dos melhores especialistas em hardware, software e marcas, 
            para que você se sinta seguro e confortável ao estabelecer um relacionamento conosco.
          </p>
          
          {/* Tabs de especialidades */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-3 text-slate-700 font-medium border border-slate-300 rounded-full hover:bg-slate-100 transition-colors">
              Oftalmologia
            </button>
            <button className="px-6 py-3 text-slate-700 font-medium border border-slate-300 rounded-full hover:bg-slate-100 transition-colors">
              Cardiologia
            </button>
            <button className="px-6 py-3 text-slate-700 font-medium border border-slate-300 rounded-full hover:bg-slate-100 transition-colors">
              Neurologia
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white font-medium border border-blue-500 rounded-full">
              Medicina Geral
            </button>
          </div>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {specialtyCards.map((card) => (
            <div 
              key={card.id}
              className={`relative ${
                card.cardStyle === 'dark' 
                  ? 'bg-slate-900' 
                  : 'bg-white'
              } shadow-xl rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300`}
            >
              {/* Formas de fundo decorativas */}
              {card.backgroundStyle === 'circle-left' && (
                <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-slate-800 rounded-full z-0 opacity-60"></div>
              )}
              {card.backgroundStyle === 'circle-right' && (
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-slate-700 rounded-full z-0 opacity-50"></div>
              )}
              {card.backgroundStyle === 'curve-top-right' && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-slate-600 rounded-bl-[120px] z-0 opacity-40"></div>
              )}

              {/* Imagem */}
              <div className="relative z-10 h-64 overflow-hidden">
                <img 
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Conteúdo */}
              <div className={`relative z-10 p-8 ${
                card.cardStyle === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className={`text-sm leading-relaxed ${
                  card.cardStyle === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {card.description}
                </p>
              </div>

              {/* Número decorativo */}
              <div className={`absolute bottom-6 right-6 ${
                card.cardStyle === 'dark' 
                  ? 'bg-white text-slate-900' 
                  : 'bg-slate-900 text-white'
              } w-10 h-10 flex items-center justify-center rounded-full z-20 font-bold text-sm shadow-lg`}>
                {card.id}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" asChild>
            <Link to="/especialidades">Ver todas especialidades</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
