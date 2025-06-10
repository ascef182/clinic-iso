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
    <section className="relative py-28 bg-gradient-to-b from-white to-gray-50">
      {/* Overlay sutil para profundidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Conteúdo */}
          <div className="max-w-xl mx-auto lg:mx-0 space-y-12">
            <p className="text-amber-600 font-semibold uppercase tracking-wide text-base mb-2">
              Por que escolher a Clínica ISO
            </p>
            <h2 className="text-5xl font-extrabold leading-tight text-gray-900 font-serif">
              Cuidamos da sua saúde <br /> com excelência e dedicação.
            </h2>

            {/* Grid dos benefícios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {benefits.map(({ icon: Icon, title, description }, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-5 p-7 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  tabIndex={0} // acessibilidade para foco via teclado
                  aria-label={`${title}: ${description}`}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 shadow-md transition-transform duration-300 hover:scale-110">
                    <Icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem e fundo */}
          <div className="relative flex justify-center items-center min-h-[520px]">
            {/* Formas geométricas com brilho sutil */}
            <div className="absolute -left-20 bottom-14 w-60 h-60 bg-amber-100 rounded-full opacity-20 blur-3xl shadow-[0_0_40px_rgba(251,191,36,0.5)]"></div>
            <div className="absolute top-0 right-0 w-96 h-[500px] bg-amber-50 rounded-bl-[300px] opacity-25 blur-2xl shadow-[0_0_60px_rgba(251,191,36,0.3)]"></div>

            {/* Imagem */}
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
              alt="Médico explicando tratamento para casal de pacientes na Clínica ISO, em ambiente clínico moderno"
              className="relative rounded-3xl shadow-2xl object-cover max-h-[500px] w-full max-w-lg"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
