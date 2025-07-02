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
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const heroRef = useRef(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef(null);
  const whyRef = useRef(null);
  const specialtiesRef = useRef(null);
  const blogRef = useRef(null);

  useEffect(() => {
    // Hero text animation
    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroTextRef.current,
            start: "top 80%",
          },
        }
      );
    }
    // Hero card animation
    if (heroCardRef.current) {
      gsap.fromTo(
        heroCardRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroCardRef.current,
            start: "top 80%",
          },
        }
      );
    }
    // About animation
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
          },
        }
      );
    }
    // Why Choose Us animation
    if (whyRef.current) {
      gsap.fromTo(
        whyRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyRef.current,
            start: "top 80%",
          },
        }
      );
    }
    // Specialties animation
    if (specialtiesRef.current) {
      gsap.fromTo(
        specialtiesRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: specialtiesRef.current,
            start: "top 80%",
          },
        }
      );
    }
    // Blog animation
    if (blogRef.current) {
      gsap.fromTo(
        blogRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blogRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>
          ISO - Instituto Seu Olhar | Clínica Médica em Belo Horizonte
        </title>
        <meta
          name="description"
          content="Clínica ISO - Instituto Seu Olhar em Belo Horizonte: Oftalmologia, Saúde Mental, Nutrição, Obesidade, Estilo de Vida e mais. Atendimento humanizado e especializado. Agende sua consulta!"
        />
        <meta
          name="keywords"
          content="Clínica médica Belo Horizonte, Oftalmologia BH, Saúde Mental BH, Nutricionista BH, Obesidade, Estilo de Vida, Psiquiatria, Terapia, ISO Instituto Seu Olhar, Especialidades médicas BH"
        />
        <meta name="author" content="ISO - Instituto Seu Olhar" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="ISO - Instituto Seu Olhar | Clínica Médica em Belo Horizonte"
        />
        <meta
          property="og:description"
          content="Especialidades médicas em Belo Horizonte: Oftalmologia, Saúde Mental, Nutrição, Obesidade, Estilo de Vida e mais. Atendimento humanizado e especializado."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://institutoseuolhar.com.br/" />
        <meta
          property="og:image"
          content="https://institutoseuolhar.com.br/og-banner.jpg"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="ISO - Instituto Seu Olhar" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ISO - Instituto Seu Olhar | Clínica Médica em Belo Horizonte"
        />
        <meta
          name="twitter:description"
          content="Especialidades médicas em Belo Horizonte: Oftalmologia, Saúde Mental, Nutrição, Obesidade, Estilo de Vida e mais. Atendimento humanizado e especializado."
        />
        <meta
          name="twitter:image"
          content="https://institutoseuolhar.com.br/og-banner.jpg"
        />
        <meta name="twitter:site" content="@institutoseuolhar" />
        <link rel="canonical" href="https://institutoseuolhar.com.br/" />
      </Helmet>

      <SchemaOrg />

      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden pb-8"
      >
        {/* Background image */}
        <img
          src="/photos/eye3.webp"
          alt="Profissional médica do ISO - Instituto Seu Olhar"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchpriority="high"
          decoding="async"
        />
        {/* Overlay para mobile e desktop */}
        <div className="absolute inset-0 bg-zinc-950/70" />

        {/* Conteúdo */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Texto */}
          <div
            ref={heroTextRef}
            className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left pt-32 pb-12 lg:pt-48 lg:pb-24"
          >
            <span className="text-lg font-light mb-2 text-white/90 font-neue-haas">
              Redescubra sua essência
            </span>
            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-5 text-white font-neue-haas">
              A TRANSFORMAÇÃO,
              <br />
              COMEÇA DE
              <br />
              DENTRO PARA FORA
            </h1>

            <div className="flex flex-row items-center gap-5 mt-4">
              <Link
                to="https://cal.com/institutoseuolhar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-max"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="px-6 py-2 font-neue-haas"
                  bgGradient="bg-gradient-to-br from-[#FFD700] via-[#FFC300] to-[#B8860B] shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                >
                  <span className="text-black">Agende sua Consulta</span>
                </HoverBorderGradient>
              </Link>
            </div>
          </div>

          {/* Card lateral */}
          <div
            ref={heroCardRef}
            className="w-full lg:w-1/3 mt-12 lg:mt-0 flex flex-col items-center lg:items-end pb-8"
          >
            <div
              className="w-56 md:w-80 bg-white/10 backdrop-blur-lg rounded-3xl p-2 md:p-6 shadow-lg border border-white/20 mt-8 ml-auto md:mt-0 md:ml-0 transition-transform duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-2xl"
              style={{ willChange: "transform" }}
            >
              {/* Hashtags */}
              <div className="flex gap-0.5 md:gap-2 mb-2 md:mb-4 justify-center flex-wrap">
                {["#Sáude", "#Bem Estar"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] md:text-sm font-medium px-1.5 md:px-3 py-0.5 md:py-1 bg-white/20 text-white rounded-full font-neue-haas"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Imagem do Produto */}
              <div className="relative bg-white rounded-2xl p-1 md:p-4 mb-2 md:mb-4 aspect-square overflow-hidden">
                <img
                  src="/photos/ausculta.webp"
                  alt="SL Facial Cream"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>

              {/* Informações */}
              <div>
                <p className="text-gray-200 text-[11px] md:text-sm mb-1 text-center font-neue-haas"></p>
                <div className="flex items-center justify-end gap-x-1 md:gap-x-2">
                  <h2 className="text-white text-sm md:text-lg font-semibold font-neue-haas">
                    Clínica ISO
                  </h2>
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-white/30 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M7 7h10v10"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div ref={aboutRef}>
        <AboutSection />
      </div>

      {/* Why Choose Us Section */}
      <div ref={whyRef}>
        <WhyChooseUsSection />
      </div>

      {/* Specialties Section */}
      <div ref={specialtiesRef}>
        <SpecialtiesSection />
      </div>

      {/* Call-to-action section */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat text-white relative"
        style={{ backgroundImage: "url('/photos/background.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 text-center relative z-10 py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-neue-haas">
            Agende sua consulta
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90 font-neue-haas">
            É rápido e fácil agendar sua consulta no ISO - Instituto Seu Olhar.
            Atendimento humanizado e personalizado para suas necessidades.
          </p>
          <div className="flex justify-center">
            <a
              href="https://cal.com/institutoseuolhar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="px-6 py-2 font-neue-haas"
                bgGradient="bg-gradient-to-br from-[#FFD700] via-[#FFC300] to-[#B8860B] shadow-[0_0_10px_rgba(255,215,0,0.5)]"
              >
                <span className="text-gray-600">Agende sua Consulta</span>
              </HoverBorderGradient>
            </a>
          </div>
        </div>
      </section>

      {/* Team section with modernized cards */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-neue-haas">
              Nossa Equipe
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto font-neue-haas">
              Conheça nossos profissionais altamente qualificados e dedicados ao
              seu bem-estar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.slice(0, 3).map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/equipe">
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-black text-black font-neue-haas"
              >
                <span>Conheça toda nossa equipe</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <div ref={blogRef}>
        <BlogSection />
      </div>

      <Footer />
    </>
  );
}
