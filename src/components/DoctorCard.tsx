
import { Card, CardContent } from "@/components/ui/card";
import { Doctor } from "@/data/doctors";

interface DoctorCardProps {
  doctor: Doctor;
  detailed?: boolean;
}

export function DoctorCard({ doctor, detailed = false }: DoctorCardProps) {
  return (
    <Card className="group overflow-hidden h-full bg-gradient-to-br from-background to-muted/50 hover:shadow-2xl hover:shadow-custom-gold/10 transition-all duration-500 border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <div className={`aspect-[4/5] relative`}>
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-custom-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating specialty badge */}
          <div className="absolute top-4 left-4 bg-custom-gold text-black px-3 py-1 rounded-full text-sm font-semibold shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {doctor.specialty}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 relative">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-custom-gold via-custom-gold/50 to-transparent"></div>
        
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-custom-gold transition-colors duration-300">
              {doctor.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-custom-gold"></div>
              <span>CRM: {doctor.crm}</span>
            </div>
          </div>
          
          {detailed ? (
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold mb-2 text-foreground">Formação</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {doctor.education.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-custom-gold mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">{doctor.bio}</p>
              </div>
            </div>
          ) : (
            <div className="pt-2">
              <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{doctor.bio}</p>
            </div>
          )}
        </div>
        
        {/* Hover effect indicator */}
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-custom-gold/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
      </CardContent>
    </Card>
  );
}
