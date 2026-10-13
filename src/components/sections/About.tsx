import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import s from "./Sections.module.css";
export function About() {
  return (
    <section id="sobre" className={s.about}>
      <Reveal>
        <div className={s.aboutImage}>
          <img
            src="/images/sobre.webp"
            width="900"
            height="1000"
            alt="Flores delicadas em luz natural — fotografia ilustrativa"
            loading="lazy"
          />
          <span>O cuidado está nos detalhes.</span>
        </div>
      </Reveal>
      <Reveal>
        <div className={s.aboutCopy}>
          <span className="eyebrow">02 / ESSÊNCIA MASSANGANA</span>
          <h2>
            Beleza que floresce em cada <em>detalhe.</em>
          </h2>
          <span className={s.goldLine} />
          <p>
            A Floricultura Massangana reúne flores, plantas e cuidados com
            jardins para valorizar espaços e tornar diferentes momentos ainda
            mais especiais.
          </p>
          <p>
            Uma forma de aproximar pessoas da natureza por meio de cores, formas
            e vida.
          </p>
          <Button secondary href={createWhatsAppUrl()} external>
            Conversar com a Massangana
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
