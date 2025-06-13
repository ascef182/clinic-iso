
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function WhyChooseUsSection() {
  const features = [
    {
      title: "Atenção Especializada",
      description: "Profissionais com expertise multidisciplinar."  
    },
    {
      title: "Resposta Imediata",
      description: "Atendimento de emergência em tempo recorde."  
    },
    {
      title: "Equipe de Excelência",
      description: "Médicos e enfermeiros em constante aperfeiçoamento."  
    },
    {
      title: "Cuidado Contínuo",
      description: "Suporte dedicado durante toda a sua jornada."  
    },
    {
      title: "Inovação Científica",
      description: "Tecnologia de ponta e pesquisa constante."  
    },
    {
      title: "Planos Acessíveis",
      description: "Qualidade premium com valores justos."  
    }
  ];

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Por que escolher a Clínica ISO</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Excelência em saúde com cuidado humanizado
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Oferecemos atendimento de qualidade superior com tecnologia avançada e uma equipe altamente qualificada.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 items-start lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-row gap-6 w-full items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{feature.title}</p>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
