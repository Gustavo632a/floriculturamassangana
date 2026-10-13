import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import s from "./Ui.module.css";
export function Button({
  href,
  children,
  secondary = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  external?: boolean;
}) {
  return (
    <a
      className={secondary ? s.secondary : s.button}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}
