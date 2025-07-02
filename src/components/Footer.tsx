import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <span className="text-2xl font-bold font-neue-haas text-white">
                ISO
              </span>
              <span className="font-neue-haas text-white">|</span>
              <span className="text-lg font-neue-haas text-white">
                Instituto Seu Olhar
              </span>
            </Link>
            <p className="text-white/80 max-w-xs font-neue-haas">
              Cuidado médico especializado para você e sua família. Nossa equipe
              está pronta para oferecer o melhor atendimento.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-neue-haas text-white">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-[#FFD700] transition-colors font-neue-haas"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-white/80 hover:text-[#FFD700] transition-colors font-neue-haas"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  to="/especialidades"
                  className="text-white/80 hover:text-[#FFD700] transition-colors font-neue-haas"
                >
                  Especialidades
                </Link>
              </li>
              <li>
                <Link
                  to="/equipe"
                  className="text-white/80 hover:text-[#FFD700] transition-colors font-neue-haas"
                >
                  Equipe Médica
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-white/80 hover:text-[#FFD700] transition-colors font-neue-haas"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-neue-haas text-white">
              Contato
            </h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start gap-2 font-neue-haas">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 flex-shrink-0"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>
                  Rua Fernandes Tourinho, 235 - Sala 1002, Funcionários
                  <br />
                  Belo Horizonte, MG
                </span>
              </li>

              <li className="flex items-center gap-2 font-neue-haas">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span> (31) 99564-9538</span>
              </li>
              <li className="flex items-center gap-2 font-neue-haas">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>institutoseuolhar@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-neue-haas text-white">
              Horário de Atendimento
            </h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex justify-between font-neue-haas">
                <span>Segunda à Sexta</span>
                <span>08:00 - 20:00</span>
              </li>
              <li className="flex justify-between font-neue-haas">
                <span>Sábado</span>
                <span>08:00 - 17:00</span>
              </li>
              <li className="flex justify-between font-neue-haas">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-white/80 text-sm font-neue-haas">
            © {currentYear} ISO - Instituto Seu Olhar. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/politica-de-privacidade"
              className="text-white/80 hover:text-[#FFD700] transition-colors font-neue-haas"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/termos-de-uso"
              className="text-white/80 hover:text-[#FFD700] transition-colors font-neue-haas"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
