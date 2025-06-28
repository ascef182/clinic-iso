import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { specialties } from "@/data/specialties";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Especialidades() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(specialties[0].id);

  // Use the activeTab from location state if available
  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [location.state?.activeTab]);

  return (
    <>
      <Helmet>
        <title>Especialidades | ISO - Instituto Seu Olhar</title>
        <meta
          name="description"
          content="Conheça nossas especialidades médicas: Obesidade, Estilo de Vida, Oftalmologia e Saúde Mental. Atendimento especializado para suas necessidades."
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
                Nossas Especialidades
              </h1>
              <p className="text-lg text-white/80 max-w-3xl font-neue-haas mt-4">
                O ISO - Instituto Seu Olhar oferece atendimento especializado em
                diversas áreas da medicina, garantindo um cuidado completo para
                você e sua família.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Tabs */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <Tabs
            value={activeTab}
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 font-neue-haas bg-zinc-900 border border-zinc-700">
              {specialties.map((specialty) => (
                <TabsTrigger
                  key={specialty.id}
                  value={specialty.id}
                  className="font-neue-haas data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                >
                  {specialty.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {specialties.map((specialty) => (
              <TabsContent
                key={specialty.id}
                value={specialty.id}
                className="space-y-8"
              >
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-6 font-neue-haas text-white">
                      {specialty.name}
                    </h2>
                    <div className="prose max-w-none text-white/80 font-neue-haas">
                      <p className="mb-4">{specialty.description}</p>
                      <h3 className="text-xl font-semibold mt-8 mb-4 font-neue-haas text-white">
                        Serviços
                      </h3>
                      <ul className="space-y-2 font-neue-haas">
                        {specialty.services.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:w-1/2 mt-6 lg:mt-0">
                    <img
                      src={specialty.image}
                      alt={specialty.name}
                      className="w-full h-auto rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>
                </div>

                {specialty.treatments && specialty.treatments.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6 font-neue-haas text-white">
                      Nossos Tratamentos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {specialty.treatments.map((treatment, index) => (
                        <div
                          key={index}
                          className="bg-zinc-900 p-6 rounded-lg border border-zinc-700"
                        >
                          <h4 className="text-lg font-semibold mb-2 font-neue-haas text-white">
                            {treatment.name}
                          </h4>
                          <p className="text-white/80 font-neue-haas">
                            {treatment.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/photos/background.jpeg')" }}
      >
        <div className="container mx-auto px-4 text-center bg-black/50 backdrop-blur-sm rounded-xl py-12">
          <h2 className="text-3xl font-bold mb-6 font-neue-haas text-white">
            Agende sua consulta especializada
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-neue-haas text-white/80">
            Entre em contato conosco para marcar uma consulta com nossos
            especialistas na área de{" "}
            {specialties.find((s) => s.id === activeTab)?.name}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5531999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-green-500 text-white hover:bg-green-600 font-neue-haas"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              WhatsApp
            </a>
            <Link
              to="/agendamento"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-white bg-transparent text-white hover:bg-white hover:text-black font-neue-haas"
            >
              Formulário de Agendamento
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
