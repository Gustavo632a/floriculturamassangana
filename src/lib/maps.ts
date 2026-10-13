import { site } from "../config/site";

// Sem origem fixa: o Google Maps permite usar a localização atual ou informar a saída.
export const mapsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(`${site.name}, ${site.address}`) +
  "&dir_action=navigate";

export const mapEmbedUrl =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent(`${site.name}, ${site.address}`) +
  "&output=embed";
