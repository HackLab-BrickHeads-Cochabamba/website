<script setup lang="ts">
usePublicPageSeo("/socials");
import { ArrowUpRight } from "lucide-vue-next";
import { socialLinks } from "~/data/social-links";

useSeoMeta({
  title: "Redes y comunidad — HackLab BrickHeads",
  description:
    "Sigue a HackLab BrickHeads en Facebook, Instagram, LinkedIn, YouTube y WhatsApp. Entérate de actividades y participa en la comunidad.",
  ogTitle: "Redes y comunidad — HackLab BrickHeads",
  ogDescription:
    "Sigue a HackLab BrickHeads en Facebook, Instagram, LinkedIn, YouTube y WhatsApp.",
  ogType: "website",
});


</script>

<template>
  <div class="min-h-screen bg-black pt-20">
    <div class="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <header class="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <NuxtImg
          src="/images/heads_white.png"
          alt="HackLab BrickHeads"
          width="4047"
          height="4070"
          format="png"
            densities="1x 2x"
          sizes="96px"
          class="h-24 w-24 object-contain"
        />
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.28em] text-[#189C3B]">
            // Redes y comunidad
          </p>
          <h1 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            HackLab BrickHeads
          </h1>
          <p class="mt-2 font-mono text-sm text-white/60">
            Proyecto mARTadero, Cochabamba
          </p>
        </div>
      </header>

      <p class="mt-6 font-mono text-sm text-white/60">
        <span class="text-[#189C3B]">></span> Conocimiento libre • Tecnología
        abierta
      </p>

      <div class="mt-12 divide-y divide-white/10 border-y border-white/10">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-between gap-4 py-5"
        >
          <div class="flex items-center gap-4">
            <SiteSocialIcon :name="social.icon" class="h-5 w-5 text-[#189C3B]" />
            <span
              class="text-base font-medium uppercase tracking-[0.12em] text-white/80 transition-colors group-hover:text-white"
            >
              {{ social.name }}
            </span>
          </div>
          <ArrowUpRight
            class="h-4 w-4 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#189C3B]"
          />
        </a>
      </div>

      <div
        class="mt-10 flex flex-wrap gap-8 font-mono text-xs uppercase tracking-[0.18em]"
      >
        <NuxtLink
          to="/"
          class="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-[#189C3B]"
        >
          [SITIO_WEB]
          <span
            aria-hidden="true"
            class="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </NuxtLink>
        <NuxtLink
          to="/downloads"
          class="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-[#189C3B]"
        >
          [DESCARGAS]
          <span
            aria-hidden="true"
            class="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </NuxtLink>
      </div>

      <div class="mt-12 border-t border-white/10 pt-6">
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
          // Contacto
        </p>
        <a
          href="mailto:hacklab.brickheads@gmail.com"
          class="mt-2 inline-block font-mono text-sm text-[#189C3B] transition-colors hover:text-white"
        >
          hacklab.brickheads@gmail.com
        </a>
      </div>
    </div>

    <SiteFooter />
  </div>
</template>
