
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
import { Play, Check } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";

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
      
      {/* Hero Section with Aurora background */}
      <AuroraBackground className="py-20 md:py-32 overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Sua Saúde em{" "} <br/>
                  <span className="text-white">Boas Mãos</span>
                </h1>
                <p className="text-xl md:text-2xl text-custom-light-gray leading-relaxed max-w-lg">
                  Cuidamos de você com excelência médica e atenção humanizada.
                </p>
              </div>
              
              {/* Video Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group flex items-center gap-4 text-lg font-medium text-white hover:text-custom-light-gray transition-colors">
                  <div className="h-16 w-16 rounded-full border-2 border-custom-gold flex items-center justify-center group-hover:border-custom-gold/80 transition-all bg-transparent">
                    <Play className="h-6 w-6 ml-1 text-custom-gold group-hover:text-custom-gold/80" />
                  </div>
                  <span className="relative text-custom-gold">
                    Conheça nossa clínica
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-custom-gold transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - Medical Professional Image */}
            <div className="relative lg:absolute lg:right-0 lg:bottom-0 lg:h-[85vh] lg:w-1/2 lg:max-w-2xl">
              <div className="relative h-full">
                <img 
                  src="/lovable-uploads/eb348a20-6ccb-48aa-81cf-2a1617f7021f.png" 
                  alt="Profissional médica do ISO - Instituto Seu Olhar" 
                  className="w-full h-full object-cover object-bottom lg:object-bottom rounded-3xl lg:rounded-none lg:rounded-tl-3xl"
                  loading="lazy"
                />
                
                {/* Floating Stats Cards */}
                <div className="absolute -bottom-8 -left-8 bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-custom-gold/80 to-custom-gold border-3 border-white shadow-lg"></div>
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-custom-medium-gray to-custom-light-gray border-3 border-white shadow-lg"></div>
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-custom-dark-gray to-custom-medium-gray border-3 border-white shadow-lg"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-custom-gold" />
                      <div>
                        <div className="text-2xl font-bold text-white">150K+</div>
                        <div className="text-sm text-custom-light-gray font-medium">Pacientes atendidos</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Floating Card - Doctors */}
                <div className="absolute -top-8 -right-8 bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30">
                  <div className="relative flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-custom-gold/80 to-custom-gold border-3 border-white shadow-lg mb-2"></div>
                    <div className="flex gap-2 mb-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-custom-medium-gray to-custom-light-gray border-2 border-white shadow-md"></div>
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-custom-dark-gray to-custom-medium-gray border-2 border-white shadow-md"></div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">20+</div>
                      <div className="text-sm text-custom-light-gray font-medium">Especialistas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>

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
