
import { Helmet } from "react-helmet-async";
import { doctors } from "@/data/doctors";
import { DoctorCard } from "@/components/DoctorCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Equipe() {
  return (
    <>
      <Helmet>
        <title>Equipe Médica | ISO - Instituto Seu Olhar</title>
        <meta 
          name="description" 
          content="Conheça nossa equipe médica especializada: Dr. Kennedy Matheus, Dra. Maria Fernanda e Dra. Rafaela Malagoli. Profissionais qualificados para cuidar da sua saúde."
        />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa Equipe Médica</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Profissionais altamente qualificados e dedicados ao seu bem-estar e saúde.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} detailed />
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Abordagem</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              No ISO - Instituto Seu Olhar, trabalhamos com uma abordagem integrada e multidisciplinar 
              para oferecer o melhor cuidado para nossos pacientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 22h2a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2v11Z"></path><path d="M6 22h2v-11H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2Z"></path><rect width="8" height="14" x="8" y="8" rx="1"></rect><path d="M15 5V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Atualização Constante</h3>
              <p className="text-muted-foreground">
                Nossa equipe está sempre se atualizando com as mais recentes técnicas e tratamentos para oferecer o melhor cuidado possível.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Trabalho em Equipe</h3>
              <p className="text-muted-foreground">
                Nossos profissionais trabalham de forma integrada, compartilhando conhecimentos para um tratamento completo e eficaz.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cuidado Humanizado</h3>
              <p className="text-muted-foreground">
                Além da excelência técnica, valorizamos o acolhimento e a atenção individualizada para cada paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Education */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Formação Contínua</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nossa equipe participa regularmente de congressos, cursos e especializações nacionais e internacionais.
                </p>
                <p>
                  Acreditamos que a educação continuada é fundamental para oferecer tratamentos modernos e eficazes, baseados nas mais recentes evidências científicas.
                </p>
                <p>
                  Além disso, o ISO - Instituto Seu Olhar promove encontros científicos entre a equipe para discussão de casos e atualização constante.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Formação contínua da equipe médica" 
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
