import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
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
              Nossa Equipe Médica
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl font-neue-haas">
            Profissionais altamente qualificados e dedicados ao seu bem-estar e
            saúde.
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

      <Footer />
    </>
  );
}
