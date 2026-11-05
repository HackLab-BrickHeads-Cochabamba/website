import tailwindcss from "@tailwindcss/vite";

// Nuxt emits inline bootstrap scripts and styles in prerendered HTML.
// Keep those working while restricting resources to this site's origin.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
  "frame-src 'none'",
  "frame-ancestors 'self'",
].join("; ");

export default defineNuxtConfig({
  compatibilityDate: "2026-04-24",
  srcDir: "src/",
  routeRules: {
    "/**": {
      headers: {
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "X-Frame-Options": "SAMEORIGIN",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=(), fullscreen=(self)",
        // Development needs Vite's websocket and development tools.
        ...(process.env.NODE_ENV === "production"
          ? { "Content-Security-Policy": contentSecurityPolicy }
          : {}),
      },
    },
    "/descargas": { redirect: { to: "/downloads", statusCode: 301 } },
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: ["/", "/socials", "/downloads", "/wall"],
      crawlLinks: false,
    },
  },
  modules: ["@nuxt/fonts", "@nuxt/image"],
  css: ["~/styles/index.css"],
  devtools: { enabled: process.env.NODE_ENV === "development" },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      { name: "Oxanium", provider: "google", weights: [400, 500, 600, 700] },
    ],
  },
  image: {
    quality: 80,
  },
  app: {
    head: {
      htmlAttrs: { lang: "es" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [{ name: "theme-color", content: "#189C3B" }],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },
});
