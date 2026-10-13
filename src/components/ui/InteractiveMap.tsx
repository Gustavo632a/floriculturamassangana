import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MapPin, Maximize2 } from "lucide-react";
import { mapEmbedUrl, mapsUrl } from "../../lib/maps";
import s from "./InteractiveMap.module.css";

export function InteractiveMap() {
  const container = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, { rootMargin: "200px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={container} className={s.container}>
      <div className={s.canvas}>
        {!loaded && <div className={s.loading} role="status"><MapPin size={30} strokeWidth={1}/><span>{active ? "Carregando mapa…" : "Mapa da região da Massangana"}</span></div>}
        {active && <iframe
          title="Mapa interativo da região da Praça Massangana — amplie e arraste para explorar"
          src={mapEmbedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoaded(true)}
        />}
      </div>
      <div className={s.toolbar}>
        <div><MapPin size={17} aria-hidden="true"/><span>Região da Praça Massangana<small>Jaboatão dos Guararapes / PE</small></span></div>
        <button aria-label="Ampliar mapa em tela cheia" onClick={() => {
          if (document.fullscreenElement) void document.exitFullscreen();
          else if (container.current?.requestFullscreen) void container.current.requestFullscreen().catch(() => window.open(mapsUrl, "_blank", "noopener,noreferrer"));
          else window.open(mapsUrl, "_blank", "noopener,noreferrer");
        }}><Maximize2 size={18}/></button>
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer">Como chegar <ArrowUpRight size={16}/></a>
      </div>
    </div>
  );
}
