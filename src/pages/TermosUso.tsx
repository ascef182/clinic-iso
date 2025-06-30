import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

export default function TermosUso() {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | ISO - Instituto Seu Olhar</title>
        <meta
          name="description"
          content="Conheça os Termos de Uso do site do Instituto Seu Olhar e saiba suas responsabilidades ao navegar por nossa plataforma."
        />
      </Helmet>
      <Header />
      <section className="bg-black py-16 pt-32 min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold font-neue-haas text-white mb-8 text-center">
            Termos de Uso
          </h1>
          <div className="prose prose-invert text-white/90 font-neue-haas mx-auto">
            <p>
              Ao acessar e utilizar o site do ISO – Instituto Seu Olhar, você
              concorda com os termos e condições descritos a seguir. Caso não
              concorde com estes termos, recomendamos que não utilize este
              website.
            </p>
            <br /> <hr /> <br />
            <h2>1. Finalidade do Site</h2>
            <p>
              Este site tem caráter estritamente informativo. Nenhuma informação
              aqui disponível substitui consultas, diagnósticos ou tratamentos
              realizados por profissionais de saúde qualificados.
            </p>
            <br />
            <h2>2. Propriedade Intelectual</h2>
            <p>
              Todos os conteúdos presentes neste site, incluindo textos,
              imagens, logotipos, marcas, vídeos e demais elementos visuais, são
              de propriedade do Instituto Seu Olhar ou utilizados mediante
              autorização. É proibida a reprodução, distribuição ou modificação
              sem autorização prévia e por escrito.
            </p>
            <br />
            <h2>3. Responsabilidades do Usuário</h2>
            <p>
              Ao utilizar este site, o usuário compromete-se a não realizar
              qualquer atividade que possa comprometer sua segurança,
              integridade ou disponibilidade. O Instituto não se responsabiliza
              por danos decorrentes do uso indevido das informações aqui
              apresentadas, nem por conteúdos de sites externos acessados por
              meio de links.
            </p>
            <br />
            <h2>4. Modificações nos Termos</h2>
            <p>
              Estes Termos de Uso podem ser atualizados a qualquer momento, sem
              aviso prévio. A versão mais recente estará sempre disponível nesta
              página. Recomendamos que o usuário a revise periodicamente.
            </p>
            <br />
            <h2>5. Legislação Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do
              Brasil. Em caso de conflito, fica eleito o foro da comarca de
              atuação do Instituto Seu Olhar.
            </p>
            <br /> <hr /> <br />
            <p>
              Para dúvidas, sugestões ou solicitações, entre em contato com
              nossa equipe:
            </p>
            <p>
              <strong>E-mail:</strong>{" "}
              <a
                href="mailto:institutoseuolhar@gmail.com"
                className="text-white underline"
              >
                institutoseuolhar@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
