<script setup lang="ts">
import { Download, FileImage, Package } from "lucide-vue-next";

useSeoMeta({
  title: "Centro de descargas — HackLab BrickHeads",
  description:
    "Descargá los logos y recursos de HackLab BrickHeads. Materiales libres para la comunidad.",
  ogTitle: "Centro de descargas — HackLab BrickHeads",
  ogDescription:
    "Descargá los logos y recursos de HackLab BrickHeads. Materiales libres para la comunidad.",
  ogType: "website",
  twitterCard: "summary",
});

const downloads = [
  {
    title: "Logo Completo (Cuadrado)",
    description: "Logo con heads de LEGO en formato cuadrado",
    image: "/images/square_white.png",
    width: 256,
    height: 256,
    filename: "hacklab_logo_square.png",
    category: "Logos",
  },
  {
    title: "Logo Letras",
    description: 'Texto "BRICK-HEADS" en verde',
    image: "/images/letters_white.png",
    width: 512,
    height: 128,
    filename: "hacklab_letters.png",
    category: "Logos",
  },
  {
    title: "Heads Iconos",
    description: "Iconos de heads de LEGO",
    image: "/images/heads_white.png",
    width: 256,
    height: 256,
    filename: "hacklab_heads.png",
    category: "Logos",
  },
];

const handleDownload = (imageSrc: string, filename: string) => {
  const link = document.createElement("a");
  link.href = imageSrc;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <div class="min-h-screen bg-black pt-20">
    <div class="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.28em] text-[#189C3B]">
            // Recursos
          </p>
          <h1 class="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Centro de <span class="text-[#189C3B]">Descargas</span>
          </h1>
          <p class="mt-4 max-w-xl font-mono text-sm text-white/60">
            <span class="text-[#189C3B]">></span> Logos, materiales y recursos del
            HackLab BrickHeads
          </p>
        </div>
        <p class="max-w-xs font-mono text-xs leading-relaxed text-white/60">
          Todos los recursos son de uso libre para la comunidad
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="item in downloads" :key="item.filename" class="group">
          <div
            class="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-white/[0.03] p-10"
          >
            <NuxtImg
              :src="item.image"
              :alt="item.title"
              :width="item.width"
              :height="item.height"
              format="webp"
              class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <span
              class="absolute left-4 top-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60"
            >
              <FileImage class="h-3.5 w-3.5" />
              {{ item.category }}
            </span>
          </div>

          <div class="mt-4">
            <h2 class="text-base font-bold uppercase tracking-wide text-white">
              {{ item.title }}
            </h2>
            <p class="mt-1 text-sm text-white/60">{{ item.description }}</p>
            <p class="mt-2 font-mono text-[11px] text-white/60">
              {{ item.filename }}
            </p>
            <button
              type="button"
              class="mt-4 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#189C3B] transition-colors hover:text-white"
              @click="handleDownload(item.image, item.filename)"
            >
              <Download class="h-4 w-4" />
              {{ "[DESCARGAR]" }}
            </button>
          </div>
        </article>
      </div>

      <div
        class="mt-20 flex flex-col gap-6 border-y border-white/10 py-10 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex items-center gap-4">
          <Package class="h-8 w-8 shrink-0 text-[#189C3B]" />
          <div>
            <h2 class="text-xl font-bold uppercase tracking-wide text-white">
              Pack Completo
            </h2>
            <p class="mt-1 font-mono text-sm text-white/60">
              Descarga todos los recursos en un solo archivo comprimido
            </p>
          </div>
        </div>

        <button
          type="button"
          class="inline-flex items-center justify-center gap-3 bg-[#189C3B] px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#000] transition-colors hover:bg-[#20BC4A]"
        >
          <Download class="h-5 w-5" />
          {{ "[DESCARGAR_TODO]" }}
        </button>
      </div>

      <div class="mt-16 grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
        <h3 class="text-xl font-bold uppercase tracking-wide text-white">
          > Guia de Uso
        </h3>
        <ul class="divide-y divide-white/10 border-t border-white/10">
          <li class="flex items-start gap-3 py-4 text-sm text-white/60">
            <span class="text-[#189C3B]">▸</span>
            Los logos pueden ser usados libremente para promocionar el HackLab
          </li>
          <li class="flex items-start gap-3 py-4 text-sm text-white/60">
            <span class="text-[#189C3B]">▸</span>
            Manten los colores oficiales: verde (#189C3B), negro y blanco
          </li>
          <li class="flex items-start gap-3 py-4 text-sm text-white/60">
            <span class="text-[#189C3B]">▸</span>
            No modifiques las proporciones de los logos
          </li>
          <li class="flex items-start gap-3 py-4 text-sm text-white/60">
            <span class="text-[#189C3B]">▸</span>
            Para usos comerciales, contacta a hacklab.brickheads@gmail.com
          </li>
        </ul>
      </div>
    </div>

    <SiteFooter />
  </div>
</template>
