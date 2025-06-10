import { Headset, User } from "lucide-react";
import { Button } from "./ui/button";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo - Imagens */}
          <div className="relative flex justify-center items-center">
            {/* Círculo decorativo */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-custom-gold/20 rounded-full z-0"></div>

            {/* Badge rotacionada */}
            <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 z-10">
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border">
                <div className="w-3 h-3 bg-custom-gold rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-custom-dark-gray transform -rotate-90 whitespace-nowrap">
                  How We Work
                </span>
              </div>
            </div>

            {/* Imagens */}
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
                  alt="Equipe médica profissional do ISO"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-custom-dark-gray text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl border-4 border-white">
                  <span className="text-2xl font-bold">26+</span>
                  <span className="text-xs font-medium">Experience</span>
                </div>
              </div>

              <div className="absolute -bottom-16 left-8 w-4/5 z-0">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f"
                  alt="Atendimento humanizado aos pacientes"
                  className="rounded-2xl shadow-md h-44 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Lado Direito - Conteúdo */}
          <div className="space-y-6">
            {/* Mini título */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-custom-gold"></div>
              <span className="text-custom-gold font-medium text-sm uppercase tracking-wider">
                Sobre Nós
              </span>
            </div>

            {/* Título principal */}
            <h2 className="text-4xl md:text-5xl font-bold text-custom-dark-gray leading-tight">
              Compromisso com a Excelência<br />
              e o Cuidado Individualizado
            </h2>

            {/* Parágrafo introdutório */}
            <p className="text-lg text-custom-medium-gray leading-relaxed">
              Atuamos com foco em proporcionar um atendimento médico de alta qualidade, embasado em experiência clínica,
              atualização científica constante e atenção integral à saúde de cada paciente. Aqui, a escuta qualificada e a confiança
              são pilares do cuidado.
            </p>

            {/* Benefícios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-custom-dark-gray group">
                    <Headset className="w-6 h-6 text-custom-dark-gray group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-custom-dark-gray">Atendimento Humanizado</h3>
                </div>
                <p className="text-custom-medium-gray text-sm">
                  Respeitamos a individualidade de cada pessoa, promovendo acolhimento e escuta ativa em todas as etapas do cuidado.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-custom-dark-gray group">
                    <User className="w-6 h-6 text-custom-dark-gray group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-custom-dark-gray">Precisão e Confiança</h3>
                </div>
                <p className="text-custom-medium-gray text-sm">
                  Atuamos com precisão diagnóstica, responsabilidade ética e excelência técnica — garantindo tranquilidade em cada decisão clínica.
                </p>
              </div>
            </div>

            {/* Texto complementar */}
            <div className="pt-4">
              <p className="text-custom-medium-gray">
                Nossa missão é cuidar com profundidade, oferecendo um ambiente onde você se sinta seguro, respeitado e bem orientado em todas as fases da sua saúde.{" "}
                <span className="text-custom-gold font-medium cursor-pointer hover:underline">
                  Saiba mais →
                </span>
              </p>
            </div>

            {/* Botão CTA */}
            <div className="pt-4">
              <Button className="bg-custom-gold hover:bg-custom-gold/90 text-custom-black px-8 py-3 rounded-full font-semibold">
                Agende sua Consulta
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
