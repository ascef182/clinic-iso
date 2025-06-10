
import { Headset, User } from "lucide-react";
import { Button } from "./ui/button";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo - Imagens */}
          <div className="relative">
            {/* Elementos decorativos */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full"></div>
            <div className="absolute top-1/2 -left-16 transform -translate-y-1/2">
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700 transform -rotate-90 whitespace-nowrap">
                  How We Work
                </span>
              </div>
            </div>
            
            {/* Layout de imagens conforme referência */}
            <div className="relative">
              {/* Imagem principal - Médico */}
              <div className="relative mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
                  alt="Equipe médica profissional do ISO"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
                
                {/* Badge de experiência */}
                <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-2xl">
                  <span className="text-2xl font-bold">26+</span>
                  <span className="text-xs font-medium">Experience</span>
                </div>
              </div>
              
              {/* Imagem secundária - Cuidado ao paciente */}
              <div className="relative -mt-20 ml-12">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f"
                  alt="Atendimento humanizado aos pacientes"
                  className="rounded-2xl shadow-lg w-4/5 h-48 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Lado Direito - Conteúdo */}
          <div className="space-y-6">
            {/* Mini título */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-blue-500"></div>
              <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">
                Sobre Nós
              </span>
            </div>

            {/* Título principal */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Mais de 26+ Anos 
              <br />
              Cuidando da Sua Saúde
            </h2>

            {/* Parágrafo introdutório */}
            <p className="text-lg text-slate-600 leading-relaxed">
              Temos o privilégio de trabalhar com centenas de profissionais da saúde visionários, 
              incluindo muitos dos melhores especialistas, tecnologias e marcas do mundo, 
              proporcionando segurança e conforto no estabelecimento do cuidado médico.
            </p>

            {/* Benefícios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Suporte ao Cliente */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                    <Headset className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Suporte ao Cliente</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  Mas deve explicar para você o atendimento médico e como cuidamos da sua dor.
                </p>
              </div>

              {/* Suporte Médico */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Suporte Médico</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  Mas deve explicar para você o atendimento médico e como cuidamos da sua dor.
                </p>
              </div>
            </div>

            {/* Texto complementar */}
            <div className="pt-4">
              <p className="text-slate-600">
                Existem muitas variações de atendimento disponíveis neste serviço médico pela nossa equipe{" "}
                <span className="text-blue-500 font-medium cursor-pointer hover:underline">
                  SAIBA MAIS +
                </span>
              </p>
            </div>

            {/* Botão CTA */}
            <div className="pt-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full">
                Saiba Mais
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
