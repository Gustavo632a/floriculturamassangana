import { Brand } from "./Brand";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "../../config/site";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import s from "./Layout.module.css";
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
      <Brand />
      <nav aria-label="Navegação principal" className={s.desktop}>
        {navigation.map(([label, id]) => (
          <a key={id} href={"#" + id}>
            {label}
          </a>
        ))}
      </nav>
      <a
        className={s.order}
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
      >
        Fazer pedido <ArrowUpRight size={16} />
      </a>
      <button
        ref={trigger}
        className={s.menu}
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Abrir menu"
      >
        <Menu />
      </button>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className={s.mobile}
        onCancel={close}
      >
        <button onClick={close} aria-label="Fechar menu">
          <X />
        </button>
        <span className="eyebrow">FLORICULTURA MASSANGANA</span>
        <nav aria-label="Navegação mobile">
          {navigation.map(([label, id]) => (
            <a key={id} href={"#" + id} onClick={close}>
              {label}
            </a>
          ))}
        </nav>
        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          Fazer pedido ↗
        </a>
      </dialog>
    </header>
  );
}
