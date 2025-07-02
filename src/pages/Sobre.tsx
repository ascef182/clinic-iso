import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Eye, HeartHandshake } from "lucide-react";
export default function Sobre() {
  return (
    <>
      <Helmet>
        <title>Sobre | ISO - Instituto Seu Olhar</title>
        <meta
          name="description"
          content="Conheça a história, missão, visão e valores do ISO - Instituto Seu Olhar. Uma clínica médica comprometida com a excelência e cuidado humanizado."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="bg-black py-16 pt-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to="/"
              className="text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-6 w-full">
              <h1 className="text-4xl md:text-5xl font-bold font-neue-haas text-white">
                Sobre o ISO - Instituto Seu Olhar
              </h1>
              <p className="text-lg text-white/80 max-w-3xl font-neue-haas mt-4">
                Conheça nossa história e compromisso com a saúde e bem-estar dos
                nossos pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-neue-haas text-white">
                Nossa História
              </h2>
              <div className="space-y-4 text-white/80 font-neue-haas">
                <p>
                  O ISO – Instituto Seu Olhar surgiu a partir da união de
                  profissionais comprometidos com a saúde e o bem-estar das
                  pessoas, reunindo diferentes especialidades médicas em um só
                  lugar com uma abordagem integrada e humanizada.
                </p>
                <p>
                  Fundado em Belo Horizonte- MG, o Instituto começou com foco em
                  oftalmologia e expandiu para outras especialidades, sempre
                  mantendo o compromisso com a qualidade e excelência no
                  atendimento.
                </p>
                <p>
                  Hoje, o ISO é reconhecido como referência em tratamentos
                  especializados, combinando tecnologia com um atendimento
                  acolhedor e personalizado.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://caetanocontabil.com.br/wp-content/uploads/2022/10/14377-930x620.jpg"
                alt="História do ISO - Instituto Seu Olhar"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/photos/background.webp')" }}
      >
        <div className="container mx-auto px-4 bg-black/50 backdrop-blur-sm rounded-xl py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-neue-haas text-white">
              Missão, Visão e Valores
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto font-neue-haas">
              Os princípios que norteiam nosso trabalho e compromisso com a
              saúde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-white/10">
              <div className="h-16 w-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mb-6">
                <Target className="text-[#FFD700] w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-neue-haas text-white">
                Missão
              </h3>
              <p className="text-white/80 font-neue-haas">
                Oferecer atendimento médico de excelência, promovendo saúde e
                bem-estar através de um cuidado humanizado e tratamentos
                personalizados.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-white/10">
              <div className="h-16 w-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-[#FFD700] w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-neue-haas text-white">
                Visão
              </h3>
              <p className="text-white/80 font-neue-haas">
                Ser referência nacional em cuidados médicos integrados,
                combinando inovação tecnológica, pesquisa avançada e atendimento
                humanizado.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-white/10">
              <div className="h-16 w-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mb-6">
                <HeartHandshake className="text-[#FFD700] w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-neue-haas text-white">
                Valores
              </h3>
              <ul className="text-white/80 space-y-2 font-neue-haas">
                <li>• Ética e responsabilidade profissional</li>
                <li>• Excelência técnica e científica</li>
                <li>• Humanização no atendimento</li>
                <li>• Inovação e atualização constante</li>
                <li>• Compromisso com resultados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/photos/background2.jpeg')" }}
      >
        <div className="container mx-auto px-4 bg-black/50 backdrop-blur-sm rounded-xl py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-neue-haas text-white">
              Nossa Clínica
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto font-neue-haas">
              Conheça nossa estrutura moderna e acolhedora, projetada para seu
              conforto e bem-estar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
              alt="Sala de espera"
              className="w-full h-64 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Consultório médico"
              className="w-full h-64 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
            <img
              src="https://www.atacadaomedicohospitalar.com.br/media/sig_3LRK1MWW1V/produtos/calibracao-de-equipamentos-hospitalares/calibracao-de-equipamentos-hospitalares-15.jpeg"
              alt="Equipamentos médicos"
              className="w-full h-64 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/photos/background2.jpeg')" }}
      >
        <div className="container mx-auto px-4 bg-black/50 backdrop-blur-sm rounded-xl py-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-neue-haas">
                Tecnologia e Inovação
              </h2>
              <div className="space-y-4 text-white/90 font-neue-haas">
                <p>
                  O ISO - Instituto Seu Olhar investe constantemente em
                  tecnologia de ponta para oferecer diagnósticos precisos e
                  tratamentos eficazes.
                </p>
                <p>
                  Nossa clínica conta com equipamentos modernos para exames
                  oftalmológicos, avaliação nutricional, monitoramento cardíaco
                  e muito mais.
                </p>
                <p>
                  Além disso, utilizamos sistema integrado de prontuário
                  eletrônico, garantindo mais segurança e eficiência no
                  acompanhamento dos pacientes.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                alt="Tecnologia no ISO - Instituto Seu Olhar"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
