
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20" 
          : "bg-gradient-to-r from-slate-200 via-slate-400 to-slate-900"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <span className={cn(
              "text-2xl font-bold transition-colors",
              isScrolled ? "text-slate-900" : "text-slate-800"
            )}>ISO</span>
            <span className="hidden sm:inline-block">|</span>
            <span className={cn(
              "hidden sm:inline-block text-lg transition-colors",
              isScrolled ? "text-slate-800" : "text-slate-700"
            )}>Instituto Seu Olhar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-slate-900",
                isActive 
                  ? (isScrolled ? "text-slate-900" : "text-slate-800") 
                  : (isScrolled ? "text-slate-700" : "text-slate-600")
              )}
            >
              Home
            </NavLink>
            <NavLink 
              to="/sobre" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-slate-900",
                isActive 
                  ? (isScrolled ? "text-slate-900" : "text-slate-800") 
                  : (isScrolled ? "text-slate-700" : "text-slate-600")
              )}
            >
              Sobre
            </NavLink>
            <NavLink 
              to="/especialidades" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-slate-900",
                isActive 
                  ? (isScrolled ? "text-slate-900" : "text-slate-800") 
                  : (isScrolled ? "text-slate-700" : "text-slate-600")
              )}
            >
              Especialidades
            </NavLink>
            <NavLink 
              to="/equipe" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-slate-900",
                isActive 
                  ? (isScrolled ? "text-slate-900" : "text-slate-800") 
                  : (isScrolled ? "text-slate-700" : "text-slate-600")
              )}
            >
              Equipe
            </NavLink>
            <NavLink 
              to="/contato" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-slate-900",
                isActive 
                  ? (isScrolled ? "text-slate-900" : "text-slate-800") 
                  : (isScrolled ? "text-slate-700" : "text-slate-600")
              )}
            >
              Contato
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-slate-800 hover:bg-slate-900 text-white">
              <Link to="/agendamento">Agende sua Consulta</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className={cn(
              "transition-colors",
              isScrolled ? "text-slate-900" : "text-slate-800"
            )}>
              {isMenuOpen ? <X /> : <Menu />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-b border-white/20">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-slate-900",
                  isActive ? "text-slate-900" : "text-slate-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/sobre" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-slate-900",
                  isActive ? "text-slate-900" : "text-slate-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </NavLink>
              <NavLink 
                to="/especialidades" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-slate-900",
                  isActive ? "text-slate-900" : "text-slate-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Especialidades
              </NavLink>
              <NavLink 
                to="/equipe" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-slate-900",
                  isActive ? "text-slate-900" : "text-slate-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Equipe
              </NavLink>
              <NavLink 
                to="/contato" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-slate-900",
                  isActive ? "text-slate-900" : "text-slate-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </NavLink>
            </nav>
            <Button asChild className="w-full bg-slate-800 hover:bg-slate-900 text-white">
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
