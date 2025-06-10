
import { useEffect, useRef } from 'react';

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Create a simple embedded map using OpenStreetMap
    const mapContainer = mapRef.current;
    
    // Clear any existing content
    mapContainer.innerHTML = '';
    
    // Create iframe with OpenStreetMap embed
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = '0';
    iframe.style.borderRadius = '8px';
    iframe.loading = 'lazy';
    iframe.allowFullscreen = true;
    iframe.src = 'https://www.openstreetmap.org/export/embed.html?bbox=-43.9445%2C-19.9267%2C-43.9245%2C-19.9067&layer=mapnik&marker=-19.9167%2C-43.9345';
    
    mapContainer.appendChild(iframe);
  }, []);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
