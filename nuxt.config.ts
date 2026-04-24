import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-04-24",
  srcDir: "src/",
  modules: ["@vueuse/motion/nuxt"],
  css: ["~/styles/index.css"],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
});
