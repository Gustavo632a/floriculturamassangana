# Floricultura Massangana

Landing page local em React 19, TypeScript strict, Vite e CSS Modules.

```sh
npm install
npm run dev
```

Abra a URL exibida pelo Vite. Verificações: `npm run typecheck`, `npm run lint`, `npm run build`.

## Conteúdo e identidade

O briefing recebido contém somente texto. As duas capturas de referência, a logo oficial e fotografias reais da empresa não estavam anexadas. O nome em texto é um fallback, não uma recriação da logo. Para usar a identidade oficial, coloque o arquivo original em `public/images/logo-massangana.png` e reinicie o Vite ou refaça o build. Header e footer usam o mesmo componente.

A galeria é explicitamente ilustrativa, não um portfólio da Massangana. Substitua as seis imagens por trabalhos autorizados e ajuste os textos em `src/data/gallery.ts` quando esses arquivos estiverem disponíveis. Nenhum preço, prazo, estoque, avaliação, número de imóvel ou condição comercial foi inventado.

## Imagens e fontes

Hero original criado com a ferramenta integrada Imagegen. Arquivos: `public/images/hero-buque.webp` e `hero-mobile.webp`. Original preservado em `assets/originals/hero.png`. Prompt: fotografia editorial realista de um buquê volumoso de flores creme, rosa e amarelo, segurado por uma mão na metade direita, céu azul suave e espaço livre à esquerda, luz natural, sem texto ou marca. Não representa uma fotografia de produtos reais da empresa.

Imagens complementares ilustrativas do Unsplash, IDs de origem: `photo-1525310072745-f49212b5ac6d` (flor rosa), `photo-1416879595882-3373a0480b5b` (jardinagem), `photo-1558904541-efa843a96f01` (jardim), `photo-1490750967868-88aa4486c946` (flores amarelas), `photo-1497250681960-ef046c08a56e` (folhagens), `photo-1457089328109-e5d9bd499191` (composição floral). Fontes Cormorant Garamond e DM Sans obtidas do Google Fonts, armazenadas localmente em WOFF2. CSS de origem preservado em `public/fonts/*-source.css`. Originais não são distribuídos pelo build.

## Configuração

Telefone, endereço, Instagram e mensagens em `src/config/site.ts`. Links WhatsApp são construídos com `encodeURIComponent`. Rotas usam o endereço informado, sem coordenadas inventadas. O mapa interativo é carregado automaticamente quando a seção se aproxima da tela e depende do Google Maps.

Copie `.env.example` para `.env.local` e defina `VITE_SITE_URL` com o domínio HTTPS definitivo. O build inclui canonical e URLs absolutas de Open Graph quando configurado. Sem domínio, o canonical é omitido para evitar um endereço fictício.

## Produção e segurança

Publique somente o conteúdo de `dist`. O arquivo `public/_headers` oferece uma política CSP e cabeçalhos para hosts compatíveis. Em outros hosts, replique-os na configuração HTTP. O JSON-LD estático já está autorizado por hash SHA-256 no `script-src`. Após editar o schema em `index.html`, execute `node scripts/security-headers.mjs` antes do build para atualizar esse hash. Não libere `unsafe-inline` para JavaScript. Ative HSTS no host após configurar HTTPS definitivo. A configuração de desenvolvimento do Vite precisa de WebSocket, portanto estes headers se destinam à produção.

## Validação

As verificações de navegador em `scripts/verify.mjs` usam Playwright com Microsoft Edge instalado. Elas verificam overflow em 320, 375, 390, 430, 768, 1024, 1440 e 1920 px, um único H1, imagens, menu mobile, lightbox com Escape/setas/restauração de foco, URLs WhatsApp e erros no console. Relatório: `validation.json`. Capturas: `desktop-preview.png` e `mobile-preview.png`. Não há alegação de pontuação Lighthouse; desempenho e acessibilidade devem ser reavaliados após inserir fotografias reais e escolher o host.
