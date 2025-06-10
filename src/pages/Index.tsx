
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
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
import { Play, Check, ArrowRight } from "lucide-react";

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
              <p className="mb-4 text-sm text-white/80">Cuidado Especializado e Humanizado</p>
              <h1 className="mb-8 text-4xl font-bold leading-tight text-white lg:text-6xl font-playfair">
                Sua Saúde em{" "}
                <br />
                Boas Mãos,
                <br />
                <span className="text-custom-gold">Sempre.</span>
              </h1>
              
              {/* Sophisticated Button */}
              <div className="group relative inline-flex">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-custom-gold via-yellow-400 to-custom-gold opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
                <button className="relative flex items-center gap-3 rounded-full bg-black/80 px-8 py-4 text-white border border-custom-gold hover:bg-black/90 transition-all duration-300 backdrop-blur-sm">
                  <Play className="h-5 w-5 text-custom-gold" />
                  <span className="font-semibold text-lg">Conheça nossa clínica</span>
                </button>
              </div>
            </div>

            {/* Right Product Card */}
            <div className="hidden lg:block xl:block 2xl:block">
              <div className="rounded-2xl bg-white/10 p-6 lg:p-8 xl:p-10 backdrop-blur-sm border border-white/20 lg:w-80 xl:w-96 2xl:w-[28rem]">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-custom-gold/20 px-3 py-1 text-xs text-white">#Oftalmologia</span>
                  <span className="rounded-full bg-custom-gold/20 px-3 py-1 text-xs text-white">#SaúdeMental</span>
                  <span className="rounded-full bg-custom-gold/20 px-3 py-1 text-xs text-white">#Nutrologia</span>
                </div>

                <div className="mb-4 h-56 lg:h-64 xl:h-72 2xl:h-80 rounded-2xl bg-white/20 p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-24 w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36 rounded-full bg-custom-gold/30 mx-auto mb-4 flex items-center justify-center">
                      <Check className="h-12 w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-18 2xl:w-18 text-white" />
                    </div>
                    <div className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white">150K+</div>
                    <div className="text-base lg:text-lg xl:text-xl text-white/80">Pacientes</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm lg:text-base text-white/80">Excelência em Cuidados</p>
                    <p className="font-semibold text-lg lg:text-xl xl:text-2xl text-white">Atendimento ISO</p>
                  </div>
                  <button className="rounded-full bg-custom-gold/20 p-3 lg:p-4 text-white hover:bg-custom-gold/30 transition-all">
                    <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Agende sua consulta</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-custom-light-gray">
            É rápido e fácil agendar sua consulta no ISO - Instituto Seu Olhar. 
            Atendimento humanizado e personalizado para suas necessidades.
          </p>
          <Button size="lg" className="bg-custom-gold hover:bg-custom-gold/90 text-custom-black font-semibold" asChild>
            <Link to="/agendamento">Agendar agora</Link>
          </Button>
        </div>
      </section>

      {/* Team section with modernized cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-custom-black">Nossa Equipe</h2>
            <p className="text-lg text-custom-medium-gray max-w-3xl mx-auto">
              Conheça nossos profissionais altamente qualificados e dedicados ao seu bem-estar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.slice(0, 3).map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-custom-dark-gray text-custom-dark-gray hover:bg-custom-dark-gray hover:text-white" asChild>
              <Link to="/equipe">Conheça toda nossa equipe</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      <Footer />
    </>
  );
}
