import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Specialty } from "@/data/specialties";

interface SpecialtyCardProps {
  specialty: Specialty;
}

export function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video relative">
        <img
          src={specialty.image}
          alt={specialty.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 font-neue-haas">
          {specialty.name}
        </h3>
        <p className="text-muted-foreground mb-4 flex-grow line-clamp-3 font-neue-haas">
          {specialty.description}
        </p>
        <Button asChild variant="outline" className="w-full font-neue-haas">
          <Link to={`/especialidades`} state={{ activeTab: specialty.id }}>
            Saiba mais
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
