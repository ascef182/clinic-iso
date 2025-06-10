
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
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-primary">ISO</span>
            <span className="hidden sm:inline-block">|</span>
            <span className="hidden sm:inline-block text-lg">Instituto Seu Olhar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </NavLink>
            <NavLink 
              to="/sobre" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              Sobre
            </NavLink>
            <NavLink 
              to="/especialidades" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              Especialidades
            </NavLink>
            <NavLink 
              to="/equipe" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              Equipe
            </NavLink>
            <NavLink 
              to="/contato" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              Contato
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild>
              <Link to="/agendamento">Agende sua Consulta</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/sobre" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </NavLink>
              <NavLink 
                to="/especialidades" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Especialidades
              </NavLink>
              <NavLink 
                to="/equipe" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Equipe
              </NavLink>
              <NavLink 
                to="/contato" 
                className={({ isActive }) => cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </NavLink>
            </nav>
            <Button asChild className="w-full">
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
