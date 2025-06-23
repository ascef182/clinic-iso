import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
      <section className="bg-primary/5 py-16 pt-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold font-neue-haas">
              Sobre o ISO - Instituto Seu Olhar
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl font-neue-haas">
            Conheça nossa história e compromisso com a saúde e bem-estar dos
            nossos pacientes.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-neue-haas">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground font-neue-haas">
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
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="História do ISO - Instituto Seu Olhar"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-neue-haas">
              Missão, Visão e Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-neue-haas">
              Os princípios que norteiam nosso trabalho e compromisso com a
              saúde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.075.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.893.527-.967 1.02Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-neue-haas">Missão</h3>
              <p className="text-muted-foreground font-neue-haas">
                Oferecer atendimento médico de excelência, promovendo saúde e
                bem-estar através de um cuidado humanizado e tratamentos
                personalizados.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-neue-haas">Visão</h3>
              <p className="text-muted-foreground font-neue-haas">
                Ser referência nacional em cuidados médicos integrados,
                combinando inovação tecnológica, pesquisa avançada e atendimento
                humanizado.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-neue-haas">Valores</h3>
              <ul className="text-muted-foreground space-y-2 font-neue-haas">
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

      {/* Clinic Photos */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-neue-haas">
              Nossa Clínica
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-neue-haas">
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
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Sala de exames"
              className="w-full h-64 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-neue-haas">
                Tecnologia e Inovação
              </h2>
              <div className="space-y-4 text-muted-foreground font-neue-haas">
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
