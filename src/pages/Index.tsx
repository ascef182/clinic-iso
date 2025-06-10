
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
import { ArrowRight, Check } from "lucide-react";
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
      
      {/* Hero Section com layout similar ao exemplo */}
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-custom-medium-gray to-custom-dark-gray mt-20">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/lovable-uploads/eb348a20-6ccb-48aa-81cf-2a1617f7021f.png" 
                alt="Profissional médica do ISO - Instituto Seu Olhar" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-custom-black/40" />
            </div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative z-10 flex min-h-[700px] items-center justify-between p-6 lg:p-8"
            >
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
                <button className="rounded-full bg-custom-gold/90 px-6 py-3 text-custom-black backdrop-blur-sm hover:bg-custom-gold font-semibold transition-all">
                  Conheça Nossa Clínica
                </button>
              </div>

              {/* Right Product Card - Adaptado para serviços médicos */}
              <div className="hidden lg:block">
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm border border-white/20">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-custom-gold/20 px-3 py-1 text-xs text-white">#Oftalmologia</span>
                    <span className="rounded-full bg-custom-gold/20 px-3 py-1 text-xs text-white">#SaúdeMental</span>
                    <span className="rounded-full bg-custom-gold/20 px-3 py-1 text-xs text-white">#Nutrologia</span>
                  </div>

                  <div className="mb-4 h-48 w-48 rounded-2xl bg-white/20 p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-20 w-20 rounded-full bg-custom-gold/30 mx-auto mb-4 flex items-center justify-center">
                        <Check className="h-10 w-10 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white">150K+</div>
                      <div className="text-sm text-white/80">Pacientes</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/80">Excelência em Cuidados</p>
                      <p className="font-semibold text-white">Atendimento ISO</p>
                    </div>
                    <button className="rounded-full bg-custom-gold/20 p-2 text-white hover:bg-custom-gold/30 transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
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
