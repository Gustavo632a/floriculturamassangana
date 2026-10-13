import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const raw = env.VITE_SITE_URL;
  const url = raw ? new URL(raw) : null;
  if (url && url.protocol !== "https:")
    throw new Error("VITE_SITE_URL deve usar HTTPS.");
  const canonical = url?.href.replace(/\/$/, "");
  return {
    plugins: [
      react(),
      {
        name: "site-seo",
        transformIndexHtml(html: string) {
          if (!canonical) return html;
          return html
            .replace(
              '<meta property="og:image" content="/images/hero-buque.webp"',
              `<meta property="og:image" content="${canonical}/images/hero-buque.webp"`,
            )
            .replace(
              "</head>",
              `<link rel="canonical" href="${canonical}/"/><meta property="og:url" content="${canonical}/"/></head>`,
            );
        },
      },
    ],
  };
});
