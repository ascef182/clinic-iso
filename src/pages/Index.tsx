
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
              
              {/* Action Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Video Button */}
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
            <div className="relative lg:absolute lg:right-0 lg:bottom-0 lg:h-[85vh] lg:w-1/2">
              <div className="relative h-full">
                <img 
                  src="/lovable-uploads/eb348a20-6ccb-48aa-81cf-2a1617f7021f.png" 
                  alt="Profissional médica do ISO - Instituto Seu Olhar" 
                  className="w-full h-full object-cover object-bottom lg:object-bottom rounded-2xl lg:rounded-none lg:rounded-tl-2xl"
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

      {/* Nossos Diferenciais section */}
      <section className="py-20 bg-custom-dark-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nossos Diferenciais</h2>
            <p className="text-lg text-custom-light-gray max-w-3xl mx-auto">
              O ISO - Instituto Seu Olhar se destaca pela excelência no atendimento e infraestrutura moderna.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-custom-medium-gray p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 w-20 bg-custom-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-gold"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Atendimento Humanizado</h3>
              <p className="text-custom-light-gray">Cuidado centrado no paciente, respeitando necessidades individuais.</p>
            </div>
            
            <div className="bg-custom-medium-gray p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 w-20 bg-custom-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-gold"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Horário Flexível</h3>
              <p className="text-custom-light-gray">Consultas com horários adaptados à sua agenda e necessidades.</p>
            </div>
            
            <div className="bg-custom-medium-gray p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 w-20 bg-custom-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-gold"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Tecnologia Avançada</h3>
              <p className="text-custom-light-gray">Equipamentos de última geração para diagnósticos precisos.</p>
            </div>
            
            <div className="bg-custom-medium-gray p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 w-20 bg-custom-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-gold"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Equipe Multidisciplinar</h3>
              <p className="text-custom-light-gray">Profissionais integrados para um tratamento completo.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
