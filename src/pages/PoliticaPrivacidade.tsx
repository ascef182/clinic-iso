import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

export default function PoliticaPrivacidade() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | ISO - Instituto Seu Olhar</title>
        <meta
          name="description"
          content="Saiba como o Instituto Seu Olhar protege e utiliza seus dados pessoais conforme a LGPD."
        />
      </Helmet>
      <Header />
      <section className="bg-black py-16 pt-32 min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold font-neue-haas text-white mb-8 text-center">
            Política de Privacidade
          </h1>
          <div className="prose prose-invert text-white/90 font-neue-haas mx-auto">
            <p>
              O Instituto Seu Olhar respeita a sua privacidade e está
              comprometido com a transparência no tratamento de dados pessoais.
              Esta Política de Privacidade explica como coletamos, utilizamos e
              protegemos as informações fornecidas por você, em conformidade com
              a Lei Geral de Proteção de Dados (Lei nº 13.709/18 – LGPD).
            </p>
            <br /> <hr /> <br />
            <h2>1. Coleta de Informações</h2>
            <p>
              Coletamos dados pessoais como nome, e-mail, telefone e demais
              informações fornecidas voluntariamente por você ao preencher
              formulários em nosso site, agendar consultas ou entrar em contato.
            </p>{" "}
            <br />
            <h2>2. Finalidade do Uso</h2>
            <p>
              Os dados coletados são utilizados exclusivamente para:
              <ul>
                <li>Responder solicitações e mensagens enviadas por você;</li>
                <li>Agendar consultas e prestar nossos serviços;</li>
                <li>
                  Melhorar sua experiência com nossos atendimentos e website;
                </li>
                <li>
                  Enviar informações relevantes sobre nossos serviços, com seu
                  consentimento.
                </li>
              </ul>
            </p>{" "}
            <br />
            <h2>3. Compartilhamento de Dados</h2>
            <p>
              Não compartilhamos seus dados pessoais com terceiros, exceto
              quando necessário para a prestação dos serviços contratados ou por
              exigência legal, sempre respeitando os princípios da LGPD.
            </p>
            <br />
            <h2>4. Segurança das Informações</h2>
            <p>
              Adotamos medidas técnicas e administrativas para proteger seus
              dados contra acessos não autorizados, perdas, alterações ou
              divulgações indevidas.
            </p>
            <br />
            <h2>5. Seus Direitos</h2>
            <p>
              Você pode, a qualquer momento, solicitar:
              <ul>
                <li>Confirmação da existência de tratamento de dados;</li>
                <li>Acesso aos seus dados pessoais;</li>
                <li>
                  Correção de dados incompletos, inexatos ou desatualizados;
                </li>
                <li>
                  Eliminação de dados desnecessários ou tratados em
                  desconformidade com a LGPD;
                </li>
                <li>Revogação do consentimento previamente concedido.</li>
              </ul>
              Para exercer seus direitos, entre em contato pelo e-mail abaixo.
            </p>
            <br />
            <h2>6. Atualizações desta Política</h2>
            <p>
              Esta Política de Privacidade poderá ser atualizada periodicamente,
              visando sempre maior transparência. Recomendamos que você a
              consulte regularmente.
            </p>
            <p>
              Em caso de dúvidas ou solicitações relacionadas aos seus dados
              pessoais, entre em contato conosco:
            </p>
            <br />
            <hr /> <br />
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
