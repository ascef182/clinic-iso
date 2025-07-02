import { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Create a simple embedded map using OpenStreetMap
    const mapContainer = mapRef.current;

    // Clear any existing content
    mapContainer.innerHTML = "";

    // Create iframe with OpenStreetMap embed
    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "0";
    iframe.style.borderRadius = "8px";
    iframe.loading = "lazy";
    iframe.allowFullscreen = true;
    iframe.src =
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.647236674208!2d-43.94173751271216!3d-19.939264990756854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699d0820f0905%3A0x7168d5f69177eec!2sR.%20Fernandes%20Tourinho%2C%20235%20-%20Funcion%C3%A1rios%2C%20Belo%20Horizonte%20-%20MG%2C%2030112-000!5e0!3m2!1spt-BR!2sbr!4v1750697728185!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

    mapContainer.appendChild(iframe);
  }, []);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
