import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-md shadow-lg border-b border-amber-500/20">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-white font-neue-haas">
              ISO
            </span>
            <span className="hidden sm:inline-block text-white">|</span>
            <span className="hidden sm:inline-block text-lg text-white/90 font-neue-haas">
              Instituto Seu Olhar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-amber-500 font-neue-haas",
                  isActive ? "text-amber-500" : "text-white/80"
                )
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-amber-500 font-neue-haas",
                  isActive ? "text-amber-500" : "text-white/80"
                )
              }
            >
              Sobre
            </NavLink>
            <NavLink
              to="/especialidades"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-amber-500 font-neue-haas",
                  isActive ? "text-amber-500" : "text-white/80"
                )
              }
            >
              Especialidades
            </NavLink>
            <NavLink
              to="/equipe"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-amber-500 font-neue-haas",
                  isActive ? "text-amber-500" : "text-white/80"
                )
              }
            >
              Equipe
            </NavLink>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-amber-500 font-neue-haas",
                  isActive ? "text-amber-500" : "text-white/80"
                )
              }
            >
              Contato
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="https://cal.com/institutoseuolhar">
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-amber-500 text-black font-neue-haas"
              >
                <span>Agendamento</span>
              </HoverBorderGradient>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="text-white">{isMenuOpen ? <X /> : <Menu />}</div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-amber-500/20">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn(
                    "text-base font-medium transition-colors hover:text-amber-500 font-neue-haas",
                    isActive ? "text-amber-500" : "text-white/80"
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  cn(
                    "text-base font-medium transition-colors hover:text-amber-500 font-neue-haas",
                    isActive ? "text-amber-500" : "text-white/80"
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </NavLink>
              <NavLink
                to="/especialidades"
                className={({ isActive }) =>
                  cn(
                    "text-base font-medium transition-colors hover:text-amber-500 font-neue-haas",
                    isActive ? "text-amber-500" : "text-white/80"
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Especialidades
              </NavLink>
              <NavLink
                to="/equipe"
                className={({ isActive }) =>
                  cn(
                    "text-base font-medium transition-colors hover:text-amber-500 font-neue-haas",
                    isActive ? "text-amber-500" : "text-white/80"
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Equipe
              </NavLink>
              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  cn(
                    "text-base font-medium transition-colors hover:text-amber-500 font-neue-haas",
                    isActive ? "text-amber-500" : "text-white/80"
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </NavLink>
            </nav>
            <Link
              to="https://cal.com/institutoseuolhar"
              onClick={() => setIsMenuOpen(false)}
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-amber-500 text-black font-neue-haas"
              >
                <span>Agendamento</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
