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
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Overlay sutil para profundidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <div className="max-w-xl mx-auto lg:mx-0 space-y-10">
            <div>
              <p className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-3">
                Por que escolher a Clínica ISO
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                Cuidamos da sua saúde <br /> com excelência e dedicação.
              </h2>
            </div>

            {/* Grid dos benefícios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map(({ icon: Icon, title, description }, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-amber-600 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem e fundo */}
          <div className="relative flex justify-center items-center min-h-[500px]">
            {/* Formas geométricas suavizadas */}
            <div className="absolute -left-16 bottom-12 w-56 h-56 bg-amber-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-[480px] bg-amber-100 rounded-bl-[280px] opacity-40 blur-2xl"></div>
            
            {/* Imagem */}
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
              alt="Médico explicando tratamento para casal de pacientes na Clínica ISO"
              className="relative rounded-3xl shadow-2xl object-cover max-h-[480px] w-full max-w-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
