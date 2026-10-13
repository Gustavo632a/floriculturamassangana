import { ArrowDown } from "lucide-react";
import { Button } from "../ui/Button";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import s from "./Sections.module.css";
export function Hero() {
  return (
    <section id="inicio" className={s.hero}>
      <picture>
        <source media="(max-width: 600px)" srcSet="/images/hero-mobile.webp" />
        <img
          className={s.heroImage}
          src="/images/hero-buque.webp"
          width="1536"
          height="1024"
          fetchPriority="high"
          alt="Buquê de flores creme, rosa e amarelo sob um céu azul — imagem ilustrativa"
        />
      </picture>
      <div className={s.heroContent}>
        <span className="eyebrow">
          FLORICULTURA MASSANGANA • JABOATÃO DOS GUARARAPES
        </span>
        <span className={s.goldLine} />
        <h1>
          Flores que transformam <em>sentimentos</em> em momentos especiais.
        </h1>
        <p>
          Buquês, plantas e cuidados com jardins para levar mais beleza e vida
          ao seu dia a dia.
        </p>
        <div className={s.heroActions}>
          <Button href={createWhatsAppUrl()} external>
            Fazer meu pedido
          </Button>
          <a href="#servicos">
            Conhecer serviços <ArrowDown size={16} />
          </a>
        </div>
      </div>
      <div className={s.heroBottom}>
        <span>NATUREZA, EM SUA FORMA MAIS SENSÍVEL.</span>
        <a href="#servicos" aria-label="Rolar até serviços">
          <ArrowDown size={20} />
        </a>
        <span>JABOATÃO & RECIFE</span>
      </div>
    </section>
  );
}
