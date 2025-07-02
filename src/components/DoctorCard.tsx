import { Card, CardContent } from "@/components/ui/card";
import { Doctor } from "@/data/doctors";

interface DoctorCardProps {
  doctor: Doctor;
  detailed?: boolean;
}

export function DoctorCard({ doctor, detailed = false }: DoctorCardProps) {
  return (
    <Card className="group overflow-hidden h-full bg-gradient-to-br from-black to-zinc-900 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(251,191,36,0.1)] transition-all duration-500 rounded-2xl border border-zinc-700">
      <div className="relative overflow-hidden">
        <div className="aspect-[4/5] relative">
          <img
            src={doctor.photo.replace(/^\.\/?/, "/")}
            alt={doctor.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Floating specialty badge */}
          <div className="absolute top-4 left-4 bg-gradient-to-br from-[#FFD700] via-[#FFC300] to-[#B8860B] text-black px-3 py-1 rounded-full text-sm font-semibold shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-neue-haas">
            {doctor.specialty}
          </div>
        </div>
      </div>

      <CardContent className="p-6 relative">
        {/* Accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] via-[#FFC300]/40 to-transparent" />

        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-bold mb-1 text-white group-hover:text-[#FFD700] transition-colors duration-300 font-neue-haas">
              {doctor.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-white/60 font-neue-haas">
              <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
              <span>CRM: {doctor.crm}</span>
            </div>
          </div>

          {detailed ? (
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold mb-2 text-white font-neue-haas">
                  Formação
                </h4>
                <ul className="text-sm text-white/80 space-y-1 font-neue-haas">
                  {doctor.education.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-zinc-700">
                <p className="text-sm text-white/80 leading-relaxed font-neue-haas">
                  {doctor.bio}
                </p>
              </div>
            </div>
          ) : (
            <div className="pt-2">
              <p className="text-sm text-white/80 line-clamp-3 leading-relaxed font-neue-haas">
                {doctor.bio}
              </p>
            </div>
          )}
        </div>

        {/* Hover corner indicator */}
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-[#FFD700]/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
      </CardContent>
    </Card>
  );
}
