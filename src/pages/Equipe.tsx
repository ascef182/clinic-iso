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
                Nossa Equipe Médica
              </h1>
              <p className="text-lg text-white/80 max-w-3xl font-neue-haas mt-4">
                Profissionais altamente qualificados e dedicados ao seu
                bem-estar e saúde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-black">
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
