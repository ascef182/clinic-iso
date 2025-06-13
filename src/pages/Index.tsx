
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Link } from "react-router-dom";
import { DoctorCard } from "@/components/DoctorCard";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { SpecialtiesSection } from "@/components/SpecialtiesSection";
import { BlogSection } from "@/components/BlogSection";
import { doctors } from "@/data/doctors";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SchemaOrg } from "@/lib/schema";
import { Check, ArrowRight } from "lucide-react";
import { HeroButton } from "@/components/HeroButton";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>ISO - Instituto Seu Olhar | Clínica Médica Especializada</title>
        <meta 
          name="description" 
          content="O ISO - Instituto Seu Olhar oferece atendimento especializado em Oftalmologia, Saúde Mental, Obesidade e Estilo de Vida. Agende sua consulta!"
        />
        <meta property="og:title" content="ISO - Instituto Seu Olhar | Clínica Médica Especializada" />
        <meta property="og:description" content="Atendimento especializado em Oftalmologia, Saúde Mental, Obesidade e Estilo de Vida." />
        <meta property="og:type" content="website" />
      </Helmet>

      <SchemaOrg />

      <Header />
      
      {/* Hero Section */}
      <div className="min-h-screen">
        <div className="relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/eb348a20-6ccb-48aa-81cf-2a1617f7021f.png" 
              alt="Profissional médica do ISO - Instituto Seu Olhar" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex min-h-screen items-center justify-between p-6 lg:p-8 pt-32">
            {/* Left Content */}
            <div className="max-w-lg">
              <p className="mb-4 text-sm text-white/80 font-inter">Cuidado Especializado e Humanizado</p>
              <h1 className="mb-8 text-4xl font-bold leading-tight text-white lg:text-6xl font-inter">
                Sua Saúde em{" "}
                <br />
                Boas Mãos,
                <br />
                <span className="text-black">Sempre.</span>
              </h1>
              <HeroButton />
            </div>

            {/* Right Product Card - Responsivo */}
            <div className="hidden lg:block">
              <div className="rounded-2xl bg-white/10 p-6 lg:p-8 xl:p-10 backdrop-blur-sm border border-white/20 lg:w-72 xl:w-80 2xl:w-96">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-black/20 px-3 py-1 text-xs text-white font-inter">#Oftalmologia</span>
                  <span className="rounded-full bg-black/20 px-3 py-1 text-xs text-white font-inter">#SaúdeMental</span>
                  <span className="rounded-full bg-black/20 px-3 py-1 text-xs text-white font-inter">#Nutrologia</span>
                </div>

                <div className="mb-4 h-48 lg:h-56 xl:h-64 rounded-2xl bg-white/20 p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-20 w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 rounded-full bg-black/30 mx-auto mb-4 flex items-center justify-center">
                      <Check className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 text-white" />
                    </div>
                    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white font-inter">150K+</div>
                    <div className="text-sm lg:text-base text-white/80 font-inter">Pacientes</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs lg:text-sm text-white/80 font-inter">Excelência em Cuidados</p>
                    <p className="font-semibold lg:text-lg text-white font-inter">Atendimento ISO</p>
                  </div>
                  <button className="rounded-full bg-black/20 p-2 lg:p-3 text-white hover:bg-black/30 transition-all">
                    <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Specialties Section */}
      <SpecialtiesSection />

      {/* Call-to-action section */}
      <section className="py-20 bg-custom-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-inter">Agende sua consulta</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-custom-light-gray font-inter">
            É rápido e fácil agendar sua consulta no ISO - Instituto Seu Olhar. 
            Atendimento humanizado e personalizado para suas necessidades.
          </p>
          <Link to="/agendamento">
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-black text-white font-inter"
            >
              <span>Agende sua Consulta</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </section>

      {/* Team section with modernized cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-custom-black font-inter">Nossa Equipe</h2>
            <p className="text-lg text-custom-medium-gray max-w-3xl mx-auto font-inter">
              Conheça nossos profissionais altamente qualificados e dedicados ao seu bem-estar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.slice(0, 3).map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/equipe">
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-black text-white font-inter"
              >
                <span>Conheça toda nossa equipe</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      <Footer />
    </>
  );
}
