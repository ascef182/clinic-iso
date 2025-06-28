import { useState } from "react";
import { Play } from "lucide-react";
import { VideoModal } from "./VideoModal";

export function HeroButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ID do vídeo do YouTube (substitua por um ID real da clínica)
  const videoId = "dQw4w9WgXcQ"; // Exemplo - substituir pelo ID real do vídeo da clínica

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="group inline-flex items-center gap-4 text-amber-500 font-semibold transition-all hover:scale-105 duration-300 font-neue-haas"
      >
        {/* Círculo com ícone de play */}
        <div className="relative h-12 w-12 rounded-full border-2 border-amber-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-amber-400">
          {/* Efeito de pulse */}
          <div className="absolute inset-0 rounded-full border-2 border-amber-500 animate-ping opacity-20"></div>
          <Play className="h-5 w-5 text-amber-500 ml-0.5" fill="currentColor" />
        </div>

        {/* Texto com underline animado - oculto em mobile */}
        <span className="relative text-lg lg:text-xl font-neue-haas hidden md:block">
          <span className="relative z-10">Conheça nossa clínica</span>
          {/* Linha de progresso animada */}
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-amber-500 transition-all duration-500 ease-out group-hover:w-full"></span>
          {/* Efeito de brilho sutil */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12"></span>
        </span>
      </button>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={videoId}
      />
    </>
  );
}
