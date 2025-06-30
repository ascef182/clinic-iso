import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

export default function Obrigado() {
  return (
    <>
      <Helmet>
        <title>Obrigado | ISO - Instituto Seu Olhar</title>
        <meta
          name="description"
          content="Mensagem de confirmação de envio de contato."
        />
      </Helmet>
      <Header />
      <section className="bg-black min-h-[60vh] flex flex-col justify-center items-center py-24">
        <div className="bg-zinc-900 rounded-2xl shadow-xl p-10 max-w-lg w-full flex flex-col items-center">
          <Badge className="bg-green-500 text-white text-base px-4 py-2 mb-6 flex items-center gap-2 font-neue-haas">
            <CheckCircle className="w-5 h-5 mr-1" />
            Mensagem enviada com sucesso!
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center font-neue-haas">
            Obrigado pelo contato!
          </h1>
          <p className="text-white/80 text-lg text-center mb-8 font-neue-haas">
            Recebemos sua mensagem e nossa equipe entrará em contato em breve.
            <br />
            Agradecemos pela confiança no ISO - Instituto Seu Olhar.
          </p>
          <Link to="/" className="w-full flex justify-center">
            <button className="bg-gradient-to-br from-[#FFD700] via-[#FFC300] to-[#B8860B] text-black font-neue-haas px-8 py-3 rounded-full font-semibold shadow-md hover:brightness-110 transition">
              Voltar para a página principal
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
