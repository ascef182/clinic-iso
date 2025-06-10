
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export function Map() {
  useEffect(() => {
    // Certifique-se de que o mapa só é criado no cliente (não em SSR)
    if (typeof window !== "undefined") {
      // Verificar se o mapa já existe e removê-lo para evitar duplicação
      const container = L.DomUtil.get("map");
      if (container != null) {
        // @ts-ignore
        if (container._leaflet_id) {
          // @ts-ignore
          container._leaflet_id = null;
        }
      }

      // Definir a posição da clínica (use as coordenadas reais na produção)
      const clinicPosition = [-19.917299, -43.934559]; // Exemplo: Belo Horizonte

      // Inicializar o mapa
      const map = L.map("map").setView(clinicPosition, 15);

      // Adicionar os tiles do OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Adicionar marcador personalizado
      const clinicIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Adicionar o marcador ao mapa
      const marker = L.marker(clinicPosition, { icon: clinicIcon }).addTo(map);

      // Adicionar popup ao marcador
      marker.bindPopup("<b>ISO - Instituto Seu Olhar</b><br>Rua Exemplo, 123, Centro<br>Belo Horizonte - MG").openPopup();
    }
  }, []);

  return <div id="map" className="w-full h-full" />;
}
