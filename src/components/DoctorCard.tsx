
import { Card, CardContent } from "@/components/ui/card";
import { Doctor } from "@/data/doctors";

interface DoctorCardProps {
  doctor: Doctor;
  detailed?: boolean;
}

export function DoctorCard({ doctor, detailed = false }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden h-full">
      <div className={`aspect-[4/5] relative`}>
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
        <p className="text-primary mb-3">{doctor.specialty}</p>
        <p className="text-sm text-muted-foreground mb-3">CRM: {doctor.crm}</p>
        
        {detailed ? (
          <div className="space-y-4">
            <div>
              <h4 className="text-base font-semibold mb-2">Formação</h4>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                {doctor.education.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">{doctor.bio}</p>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground line-clamp-3">{doctor.bio}</p>
        )}
      </CardContent>
    </Card>
  );
}
