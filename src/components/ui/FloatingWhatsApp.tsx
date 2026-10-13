import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import s from "./Ui.module.css";
export function FloatingWhatsApp() {
  return (
    <a
      className={s.floating}
      href={createWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Massangana pelo WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
