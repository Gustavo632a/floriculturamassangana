import { Brand } from "./Brand";
import { site, navigation } from "../../config/site";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import s from "./Layout.module.css";
export function Footer() {
  return (
    <footer className={s.footer}>
      <div>
        <Brand />
        <p>
          Floricultura Massangana — Transformando espaços em ambientes vivos.
        </p>
      </div>
      <nav aria-label="Navegação do rodapé">
        {navigation.slice(1).map(([label, id]) => (
          <a key={id} href={"#" + id}>
            {label}
          </a>
        ))}
      </nav>
      <div>
        <a href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
          {site.displayPhone}
        </a>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer">
          @floricultura.massangana
        </a>
        <p>{site.address}</p>
      </div>
      <div className={s.copyright}>
        © {new Date().getFullYear()} Floricultura Massangana{" "}
        <span>Feito para florescer.</span>
      </div>
    </footer>
  );
}
