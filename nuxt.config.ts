import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-04-24",
  srcDir: "src/",
  routeRules: {
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
