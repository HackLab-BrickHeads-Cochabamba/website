<script setup lang="ts">
import { Maximize2 } from "lucide-vue-next";

const images = [
  {
    url: "",
    title: "Espacio HackLab",
  },
  {
    url: "",
    title: "Proximamente",
  },
  {
    url: "",
    title: "Proximamente",
  },
  {
    url: "",
    title: "Proximamente",
  },
  {
    url: "",
    title: "Proximamente",
  },
  {
    url: "",
    title: "Proximamente",
  },
  {
    url: "",
    title: "Proximamente",
  },
  {
    url: "",
    title: "Proximamente",
  },
];
</script>

<template>
  <section id="gallery" class="relative bg-black py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SiteSectionHeader label="// Galeria" title="Nuestro" highlight="Espacio" />
        <p class="max-w-sm font-mono text-sm text-white/60">
          <span class="text-[#189C3B]">></span> Proyectos, eventos y momentos del
          HackLab
        </p>
      </div>

      <div class="mt-14 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="group relative aspect-square overflow-hidden bg-white/[0.03]"
        >
          <div
            class="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center"
          >
            <svg
              aria-hidden="true"
              class="h-8 w-8 text-[#189C3B]/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span
              class="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60"
            >
              {{ image.title }}
            </span>
          </div>

          <div
            class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <p class="font-mono text-xs uppercase tracking-[0.18em] text-white">
              {{ image.title }}
            </p>
            <Maximize2 class="mt-2 h-4 w-4 text-[#189C3B]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
