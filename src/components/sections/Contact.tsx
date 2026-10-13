import { ArrowUpRight } from "lucide-react";
import { site } from "../../config/site";
import { InteractiveMap } from "../ui/InteractiveMap";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import s from "./Sections.module.css";
export function Contact() {
  return (
    <section id="contato" className={s.contact}>
      <div className={s.contactGrid}>
        <div>
          <span className="eyebrow">04 / VAMOS CONVERSAR</span>
          <h2>
            Estamos prontos para florescer sua próxima <em>ideia.</em>
          </h2>
          <address>
            Avenida Zequinha Barreto
            <br />
            Região da Praça Massangana
            <br />
            Jaboatão dos Guararapes/PE
            <br />
            CEP 54210-321
          </address>
          <a
            className={s.contactLink}
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.displayPhone} <ArrowUpRight size={18} />
          </a>
          <a
            className={s.contactLink}
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            @floricultura.massangana <ArrowUpRight size={18} />
          </a>
          <div className={s.openingHours}>
            <h3>Horários de funcionamento</h3>
            <dl>
              {site.openingHours.map(({ days, hours }) => (
                <div key={days}><dt>{days}</dt><dd>{hours}</dd></div>
              ))}
            </dl>
          </div>
          <div className={s.contactActions}>
            <Button href={createWhatsAppUrl()} external>
              Fazer pedido
            </Button>
            <Button
              secondary
              href={createWhatsAppUrl(site.gardenMessage)}
              external
            >
              Solicitar orçamento de jardim
            </Button>
          </div>
        </div>
        <InteractiveMap />
      </div>
      <div className={s.finalCta}>
        <h3>Leve mais flores e vida para os seus momentos.</h3>
        <Button secondary href={createWhatsAppUrl()} external>
          Falar pelo WhatsApp
        </Button>
      </div>
    </section>
  );
}
