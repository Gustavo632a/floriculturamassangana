import { site } from "../config/site";
export function createWhatsAppUrl(
  message: string = site.generalMessage,
): string {
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;
}
