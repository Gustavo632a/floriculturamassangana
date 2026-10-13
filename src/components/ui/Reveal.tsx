import type { ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
export function Reveal({ children }: { children: ReactNode }) {
  return (
    <div ref={useScrollReveal()} className="reveal">
      {children}
    </div>
  );
}
