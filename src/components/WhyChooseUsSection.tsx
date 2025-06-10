import { Hospital, Ambulance, Heart, Users, Beaker, CreditCard } from "lucide-react";

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Hospital,
      title: "Atenção Especializada",
      description: "Profissionais com expertise multidisciplinar."  
    },
    {
      icon: Ambulance,
      title: "Resposta Imediata",
      description: "Atendimento de emergência em tempo recorde."  
    },
    {
      icon: Users,
      title: "Equipe de Excelência",
      description: "Médicos e enfermeiros em constante aperfeiçoamento."  
    },
    {
      icon: Heart,
      title: "Cuidado Contínuo",
      description: "Suporte dedicado durante toda a sua jornada."  
    },
    {
      icon: Beaker,
      title: "Inovação Científica",
      description: "Tecnologia de ponta e pesquisa constante."  
    },
    {
      icon: CreditCard,
      title: "Planos Acessíveis",
      description: "Qualidade premium com valores justos."  
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-yellow-600 uppercase">
            Por que escolher a Clínica ISO
          </span>
          <h2 className="mt-2 text-4xl font-bold text-gray-800">
            Excelência em saúde com cuidado humanizado
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="p-4 bg-yellow-100 rounded-full mb-4">
                <Icon className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
            alt="Profissionais de saúde atendendo pacientes"
            className="w-full max-w-2xl rounded-2xl shadow-xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
