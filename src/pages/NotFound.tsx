
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold mt-4 mb-6">Página não encontrada</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          A página que você está procurando não existe ou foi removida.
        </p>
        <Button asChild size="lg">
          <Link to="/">Voltar para o início</Link>
        </Button>
      </div>
    </div>
  );
}
