import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import { Map } from "@/components/Map";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato | ISO - Instituto Seu Olhar</title>
        <meta
          name="description"
          content="Entre em contato com o ISO - Instituto Seu Olhar. Estamos localizados em Belo Horizonte e prontos para atender você."
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
                Entre em Contato
              </h1>
              <p className="text-lg text-white/80 max-w-3xl font-neue-haas mt-4">
                Estamos à disposição para esclarecer suas dúvidas e oferecer as
                informações necessárias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-700 text-center">
              <div className="h-12 w-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#FFD700]"
                >
                  <path d="m16 16 L22 22"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-neue-haas text-white">
                Endereço
              </h3>
              <address className="not-italic text-white/80 font-neue-haas">
                Rua Fernandes Tourinho, 235 - Sala 1002
                <br />
                Bairro Funcionários
                <br />
                Belo Horizonte - MG
                <br />
                CEP: 30112-000
              </address>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-700 text-center">
              <a
                href="https://wa.me/5531995659538"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="h-12 w-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[#FFD700]/30 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#FFD700]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </a>

              <h3 className="text-lg font-semibold mb-2 font-neue-haas">
                Telefones
              </h3>
              <div className="text-muted-foreground font-neue-haas">
                <p>Marque com nossa secretária</p>
                <p>+55 (31) 99565-9538 (WhatsApp)</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
              <div className="h-12 w-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#FFD700]"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-neue-haas">
                Email
              </h3>
              <div className="text-muted-foreground font-neue-haas">
                <p>institutoseuolhar@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-6 font-neue-haas">
                Envie sua Mensagem
              </h2>
              <ContactForm />
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-6 font-neue-haas">
                Nossa Localização
              </h2>
              <div className="h-[400px] rounded-lg overflow-hidden border">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
