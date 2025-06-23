import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Headset, User } from "lucide-react";
import { Button } from "./ui/button";

export function AboutSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;

    if (left) {
      gsap.fromTo(
        left,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: left,
            start: "top 80%",
          },
        }
      );
    }
    if (right) {
      gsap.fromTo(
        right,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: right,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
        {/* Lado Esquerdo - Imagem */}
        <div
          ref={leftRef}
          className="relative flex justify-center items-center w-full lg:w-1/2 mb-12 lg:mb-0"
        >
          {/* Elementos decorativos de fundo */}
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-custom-gold/8 rounded-full z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-custom-gold/5 rounded-full z-0"></div>

          {/* Padrão geométrico decorativo */}
          <div className="absolute top-1/3 -right-20 z-0">
            <div className="flex flex-col gap-3 opacity-15">
              <div className="w-16 h-0.5 bg-custom-gold"></div>
              <div className="w-12 h-0.5 bg-custom-gold"></div>
              <div className="w-8 h-0.5 bg-custom-gold"></div>
            </div>
          </div>

          {/* Texto "Como Trabalhamos" vertical - de baixo para cima */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 z-10">
            <div className="flex items-center">
              <div className="flex flex-col items-center gap-3">
                {/* Linha superior */}
                <div className="w-0.5 h-16 bg-gradient-to-t from-custom-gold to-custom-gold/20"></div>

                {/* Texto vertical legível de baixo para cima */}
                <div
                  className="text-custom-dark-gray text-[13px] font-medium tracking-[0.25em] font-neue-haas whitespace-nowrap transform rotate-180"
                  style={{ writingMode: "vertical-lr" }}
                >
                  COMO TRABALHAMOS
                </div>

                {/* Ponto animado */}
                <div className="w-3 h-3 bg-custom-gold rounded-full animate-pulse shadow-lg"></div>

                {/* Linha inferior */}
                <div className="w-0.5 h-8 bg-gradient-to-b from-custom-gold to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Container da imagem principal */}
          <div className="relative w-full max-w-md ml-8">
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="./photos/luva.jpeg"
                  alt="Equipe médica profissional do ISO"
                  className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Overlay gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-custom-dark-gray/10"></div>
              </div>

              {/* Badge ISO Quality */}
              <div className="absolute -bottom-6 -right-6 bg-custom-dark-gray text-white rounded-2xl px-5 py-4 shadow-xl border-4 border-white z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-custom-gold rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-custom-dark-gray"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold font-neue-haas block">
                      Certificado
                    </span>
                    <span className="text-xs text-gray-300 font-neue-haas">
                      ISO Quality
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elementos decorativos minimalistas */}
          <div className="absolute top-8 right-4 z-0">
            <div className="flex items-center gap-2 opacity-20">
              <div className="w-1 h-1 bg-custom-gold rounded-full"></div>
              <div className="w-1 h-1 bg-custom-gold rounded-full"></div>
              <div className="w-1 h-1 bg-custom-gold rounded-full"></div>
            </div>
          </div>

          <div className="absolute bottom-16 -left-8 z-0">
            <div className="w-6 h-6 border border-custom-gold/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-custom-gold/40 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Conteúdo */}
        <div ref={rightRef} className="space-y-6 w-full lg:w-1/2">
          {/* Mini título */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-custom-gold"></div>
            <span className="text-custom-gold font-medium text-sm uppercase tracking-wider font-neue-haas">
              Sobre Nós
            </span>
          </div>

          {/* Título principal */}
          <h2 className="text-4xl md:text-5xl font-bold text-custom-dark-gray leading-tight font-neue-haas">
            Excelência é <br />
            Nossa Essência
          </h2>

          {/* Parágrafo introdutório */}
          <p className="text-lg text-custom-medium-gray leading-relaxed font-neue-haas">
            Na Clínica ISO, acreditamos que cada história importa. Unimos
            conhecimento técnico, sensibilidade humana e compromisso com a saúde
            para entregar um cuidado completo e atencioso. Aqui, você é ouvido,
            respeitado e tratado com o tempo e atenção que merece.
          </p>

          {/* Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-custom-dark-gray group">
                  <Headset className="w-6 h-6 text-custom-dark-gray group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-custom-dark-gray font-neue-haas">
                  Escuta e Empatia
                </h3>
              </div>
              <p className="text-custom-medium-gray text-sm font-neue-haas">
                Cuidar vai além de tratar. Por isso, valorizamos o tempo de
                ouvir, acolher e entender cada pessoa, oferecendo atenção
                genuína desde a primeira conversa até cada etapa do tratamento.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-custom-dark-gray group">
                  <User className="w-6 h-6 text-custom-dark-gray group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-custom-dark-gray font-neue-haas">
                  Precisão e Confiança
                </h3>
              </div>
              <p className="text-custom-medium-gray text-sm font-neue-haas">
                Atuamos com responsabilidade, precisão e compromisso com a
                verdade. Cada conduta médica é pensada com base em evidências,
                ética e no melhor caminho para sua saúde.
              </p>
            </div>
          </div>

          {/* Texto complementar */}
          <div className="pt-4">
            <p className="text-custom-medium-gray font-neue-haas">
              Nossa missão é oferecer mais do que atendimento: é criar um espaço
              onde você se sinta confiante, acolhido e bem orientado para cuidar
              da sua saúde com tranquilidade.{" "}
            </p>
          </div>

          {/* Botão CTA */}
          <div className="pt-4">
            <Button className="bg-custom-gold hover:bg-custom-gold/90 text-custom-black px-8 py-3 rounded-full font-semibold font-neue-haas">
              Saiba mais
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
