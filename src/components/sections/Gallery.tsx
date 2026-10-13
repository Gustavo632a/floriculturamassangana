import { useState, useCallback } from "react";
import { Plus } from "lucide-react";
import { gallery } from "../../data/gallery";
import { site } from "../../config/site";
import { SectionHeading } from "../ui/SectionHeading";
import { ImageLightbox } from "../ui/ImageLightbox";
import { Button } from "../ui/Button";
import s from "./Sections.module.css";
export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  return (
    <section id="galeria" className="section">
      <div className={s.galleryHeading}>
        <SectionHeading
          eyebrow="03 / NOSSO UNIVERSO FLORAL"
          title="Um universo de flores e possibilidades."
        />
        <Button secondary href={site.instagram} external>
          Ver mais no Instagram
        </Button>
      </div>
      <p className={s.galleryNote}>
        Uma inspiração de cores, formas e natureza. Imagens ilustrativas;
        conheça os trabalhos reais da Massangana no Instagram.
      </p>
      <div className={s.gallery}>
        {gallery.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setIndex(i)}
            aria-label={"Ampliar: " + item.alt}
          >
            <img
              src={item.src}
              alt={item.alt + " — imagem ilustrativa"}
              width="800"
              height="900"
              loading="lazy"
            />
            <span>
              <Plus size={20} />
            </span>
          </button>
        ))}
      </div>
      <ImageLightbox index={index} onClose={close} onChange={setIndex} />
    </section>
  );
}
