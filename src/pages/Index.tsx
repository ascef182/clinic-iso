
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SpecialtyCard } from "@/components/SpecialtyCard";
import { DoctorCard } from "@/components/DoctorCard";
import { specialties } from "@/data/specialties";
import { doctors } from "@/data/doctors";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SchemaOrg } from "@/lib/schema";
import { Play } from "lucide-react";

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
      
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-muted via-background to-muted/50 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Seu Parceiro em{" "}
                  <span className="text-primary">Saúde e Bem-estar</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Estamos comprometidos em fornecer os melhores serviços médicos e de saúde para ajudá-lo a viver de forma mais saudável e feliz.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild className="h-14 px-8 text-lg">
                  <Link to="/agendamento">Agendar Consulta</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg group">
                  <Link to="/sobre" className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Play className="h-5 w-5 ml-1" />
                    </div>
                    Veja como trabalhamos
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image with Stats */}
            <div className="relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2" 
                  alt="Equipe médica profissional do ISO - Instituto Seu Olhar" 
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  loading="lazy"
                />
                
                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-lg border">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-primary/20 border-2 border-background"></div>
                      <div className="h-8 w-8 rounded-full bg-primary/40 border-2 border-background"></div>
                      <div className="h-8 w-8 rounded-full bg-primary/60 border-2 border-background"></div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">150K+</div>
                      <div className="text-sm text-muted-foreground">Pacientes Atendidos</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-background rounded-xl p-4 shadow-lg border">
                  <div className="text-center">
                    <div className="h-10 w-10 rounded-full bg-green-500 mx-auto mb-2 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div className="text-2xl font-bold text-foreground">20+</div>
                    <div className="text-sm text-muted-foreground">Especialistas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Especialidades</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferecemos atendimento especializado em diversas áreas da saúde para cuidar de você por completo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.slice(0, 4).map((specialty) => (
              <SpecialtyCard key={specialty.id} specialty={specialty} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/especialidades">Ver todas especialidades</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Appointment CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Agende sua consulta</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            É rápido e fácil agendar sua consulta no ISO - Instituto Seu Olhar. 
            Atendimento humanizado e personalizado para suas necessidades.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/agendamento">Agendar agora</Link>
          </Button>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça nossos profissionais altamente qualificados e dedicados ao seu bem-estar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.slice(0, 3).map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/equipe">Conheça toda nossa equipe</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Diferenciais</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              O ISO - Instituto Seu Olhar se destaca pela excelência no atendimento e infraestrutura moderna.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Humanizado</h3>
              <p className="text-muted-foreground">Cuidado centrado no paciente, respeitando necessidades individuais.</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Horário Flexível</h3>
              <p className="text-muted-foreground">Consultas com horários adaptados à sua agenda e necessidades.</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tecnologia Avançada</h3>
              <p className="text-muted-foreground">Equipamentos de última geração para diagnósticos precisos.</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Equipe Multidisciplinar</h3>
              <p className="text-muted-foreground">Profissionais integrados para um tratamento completo.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
