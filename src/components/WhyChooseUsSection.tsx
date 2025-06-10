
import { Hospital, Ambulance, Stethoscope, Pill, Microscope, FlaskRound } from "lucide-react";

export function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Hospital,
      title: "Atendimento Especializado",
      description: "Equipe com experiência em diversas especialidades médicas."
    },
    {
      icon: Ambulance,
      title: "Socorro Rápido",
      description: "Atendimento emergencial com agilidade e preparo técnico."
    },
    {
      icon: Stethoscope,
      title: "Médicos Qualificados",
      description: "Profissionais reconhecidos e constantemente atualizados."
    },
    {
      icon: Pill,
      title: "Orientações Médicas",
      description: "Suporte e acompanhamento contínuo ao paciente."
    },
    {
      icon: Microscope,
      title: "Pesquisas Clínicas",
      description: "Atualização constante em ciência e tecnologia médica."
    },
    {
      icon: FlaskRound,
      title: "Preços Acessíveis",
      description: "Soluções médicas com excelente custo-benefício."
    }
  ];

  return (
    <section className="py-20 bg-custom-light-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo - Conteúdo */}
          <div className="space-y-8">
            {/* Mini título */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-custom-black"></div>
              <span className="text-custom-black font-medium text-sm uppercase tracking-wider">
                Por que escolher a Clínica ISO
              </span>
            </div>

            {/* Título principal */}
            <h2 className="text-4xl md:text-5xl font-bold text-custom-black leading-tight">
              Estamos prontos para 
              <br />
              cuidar da sua saúde 
              <br />
              com excelência.
            </h2>

            {/* Grid de benefícios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-custom-black rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-custom-gold" />
                      </div>
                      <h3 className="text-lg font-semibold text-custom-black">{benefit.title}</h3>
                    </div>
                    <p className="text-custom-dark-gray text-sm">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lado Direito - Imagem com efeito de fundo */}
          <div className="relative flex justify-center items-center min-h-[600px]">
            {/* Formas geométricas de fundo */}
            <div className="absolute -left-10 bottom-10 w-48 h-48 bg-custom-dark-gray rounded-full z-0 opacity-80"></div>
            <div className="absolute top-0 right-0 w-80 h-[500px] bg-custom-medium-gray rounded-bl-[200px] z-0 opacity-60"></div>
            
            {/* Imagem principal sobreposta */}
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2" 
                alt="Médico explicando tratamento para casal de pacientes na Clínica ISO"
                className="rounded-2xl shadow-2xl max-h-[500px] w-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
