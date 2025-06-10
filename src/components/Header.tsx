
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-custom-black/20 backdrop-blur-md shadow-lg border-b border-custom-medium-gray/20">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-white">ISO</span>
            <span className="hidden sm:inline-block text-white">|</span>
            <span className="hidden sm:inline-block text-lg text-white/90">Instituto Seu Olhar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-white",
                isActive ? "text-white" : "text-custom-light-gray"
              )}
            >
              Home
            </NavLink>
            <NavLink 
              to="/sobre" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-white",
                isActive ? "text-white" : "text-custom-light-gray"
              )}
            >
              Sobre
            </NavLink>
            <NavLink 
              to="/especialidades" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-white",
                isActive ? "text-white" : "text-custom-light-gray"
              )}
            >
              Especialidades
            </NavLink>
            <NavLink 
              to="/equipe" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-white",
                isActive ? "text-white" : "text-custom-light-gray"
              )}
            >
              Equipe
            </NavLink>
            <NavLink 
              to="/contato" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-white",
                isActive ? "text-white" : "text-custom-light-gray"
              )}
            >
              Contato
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-custom-gold hover:bg-custom-gold/90 text-black border-0">
              <Link to="/agendamento">Agende sua Consulta</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-custom-black/30 backdrop-blur-md border-b border-custom-medium-gray/20">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-white",
                  isActive ? "text-white" : "text-custom-light-gray"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/sobre" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-white",
                  isActive ? "text-white" : "text-custom-light-gray"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </NavLink>
              <NavLink 
                to="/especialidades" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-white",
                  isActive ? "text-white" : "text-custom-light-gray"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Especialidades
              </NavLink>
              <NavLink 
                to="/equipe" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-white",
                  isActive ? "text-white" : "text-custom-light-gray"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Equipe
              </NavLink>
              <NavLink 
                to="/contato" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-white",
                  isActive ? "text-white" : "text-custom-light-gray"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </NavLink>
            </nav>
            <Button asChild className="w-full bg-custom-gold hover:bg-custom-gold/90 text-black border-0">
              <Link to="/agendamento" onClick={() => setIsMenuOpen(false)}>
                Agende sua Consulta
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
