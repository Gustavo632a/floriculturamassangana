import { services } from "../../data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import s from "./Sections.module.css";
export function Services() {
  return (
    <section id="servicos" className="section">
      <Reveal>
        <SectionHeading
          eyebrow="01 / FLORES E CUIDADO"
          title="Natureza para cada momento."
          subtitle="Conheça o que a Floricultura Massangana oferece."
        />
      </Reveal>
      <div className={s.services}>
        {services.map((item, index) => (
          <Reveal key={item.title}>
            <article>
              <div className={s.serviceImage}>
                <img
                  src={"/images/" + item.image + ".webp"}
                  srcSet={`/images/${item.image}-small.webp 480w, /images/${item.image}.webp 900w`}
                  sizes="(max-width: 700px) 90vw, 30vw"
                  alt={item.title + " — fotografia ilustrativa"}
                  width="900"
                  height="1100"
                  loading="lazy"
                />
                <span>0{index + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Button secondary href={createWhatsAppUrl(item.message)} external>
                {item.cta}
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
