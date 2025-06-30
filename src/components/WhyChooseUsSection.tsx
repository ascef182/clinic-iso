import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function WhyChooseUsSection() {
  const features = [
    {
      title: "Cuidado Individualizado",
      description:
        "Cada paciente é único — e nosso atendimento reflete essa verdade.",
    },
    {
      title: "Agilidade com Qualidade",
      description:
        "Respostas rápidas, sem abrir mão da segurança e da atenção aos detalhes.",
    },
    {
      title: "Time Altamente Capacitado",
      description:
        "Profissionais que combinam conhecimento técnico com sensibilidade humana.",
    },
    {
      title: "Acompanhamento Próximo",
      description: "Estamos com você em cada etapa: do diagnóstico ao retorno.",
    },
    {
      title: "Tecnologia a Favor da Vida",
      description:
        "Equipamentos modernos e práticas atualizadas para diagnósticos mais precisos.",
    },
    {
      title: "Acesso e Transparência",
      description:
        "Excelência acessível, com clareza em cada passo do tratamento.",
    },
  ];

  // Refs para animação dos itens
  const itemsRef = useRef<HTMLDivElement[]>([]);
  itemsRef.current = [];
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: -40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full py-12 lg:py-20 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-6  items-start">
          <div>
            <Badge className="font-neue-haas bg-gradient-to-br from-[#FFD700] via-[#FFC300] to-[#B8860B] text-black hover:brightness-110">
              Por que escolher a Clínica ISO
            </Badge>
          </div>

          <div className="flex flex-col space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-neue-haas">
              Cuidado e acolhimento
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-white/80 font-neue-haas">
              Oferecemos mais do que medicina: entregamos escuta, presença e
              compromisso com a sua saúde. Combinamos tecnologia e empatia para
              tornar cada consulta uma experiência de cuidado real.
            </p>
          </div>

          <div className="flex gap-8 pt-8 flex-col w-full">
            <div className="grid grid-cols-1 items-start lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  className="flex flex-row gap-6 w-full items-start group"
                >
                  <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 bg-transparent group-hover:bg-gradient-to-br group-hover:from-[#FFD700] group-hover:via-[#FFC300] group-hover:to-[#B8860B] group-hover:shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                    <Check className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-lg leading-relaxed tracking-tight text-white font-neue-haas">
                      {feature.title}
                    </p>
                    <p className="text-white/80 text-sm font-neue-haas">
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
