import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "../../data/gallery";
import s from "./Ui.module.css";
export function ImageLightbox({
  index,
  onClose,
  onChange,
}: {
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const isOpen = index !== null;
  useEffect(() => {
    const dialog = ref.current;
    if (!isOpen || !dialog) return;
    const previous = document.activeElement as HTMLElement;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [isOpen]);
  if (index === null) return null;
  const item = gallery[index];
  const move = (direction: number) =>
    onChange((index + direction + gallery.length) % gallery.length);
  return (
    <dialog
      ref={ref}
      className={s.lightbox}
      aria-label="Galeria de fotografias ilustrativas"
      onCancel={onClose}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") move(-1);
        if (event.key === "ArrowRight") move(1);
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        className={s.close}
        onClick={onClose}
        aria-label="Fechar foto"
        autoFocus
      >
        <X />
      </button>
      <button onClick={() => move(-1)} aria-label="Foto anterior">
        <ChevronLeft />
      </button>
      <figure>
        <img src={item.src} alt={item.alt} />
        <figcaption>
          {index + 1} / {gallery.length} — {item.alt} · Imagem ilustrativa
        </figcaption>
      </figure>
      <button onClick={() => move(1)} aria-label="Próxima foto">
        <ChevronRight />
      </button>
    </dialog>
  );
}
