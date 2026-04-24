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
  <section id="gallery" class="py-20 bg-black relative overflow-hidden">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,156,59,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,156,59,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="text-[#189C3B] font-mono text-sm border border-[#189C3B]/30 px-4 py-2 bg-[#189C3B]/5">{{ '// GALERIA' }}</span>
        </div>
        <h2 class="text-4xl md:text-5xl mb-4 font-bold">
          <span class="text-white">Nuestro <span class="text-[#189C3B] drop-shadow-[0_0_15px_rgba(24,156,59,0.5)]">Espacio</span></span>
        </h2>
        <p class="text-gray-400 text-lg font-mono">> Proyectos, eventos y momentos del HackLab</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="relative aspect-square overflow-hidden border border-[#189C3B]/30 hover:border-[#189C3B]/60 transition-all duration-300 group cursor-pointer bg-black"
        >
          <div class="w-full h-full flex flex-col items-center justify-center bg-[#189C3B]/5 border-2 border-dashed border-[#189C3B]/30">
            <svg class="w-12 h-12 text-[#189C3B]/40 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="text-[#189C3B]/60 font-mono text-xs uppercase">{{ image.title }}</span>
          </div>

          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
            <p class="text-white font-mono text-sm uppercase tracking-wider mb-2">{{ image.title }}</p>
            <Maximize2 class="w-5 h-5 text-[#189C3B]" />
          </div>

          <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#189C3B]/0 group-hover:border-[#189C3B]/60 transition-all duration-300"></div>
          <div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#189C3B]/0 group-hover:border-[#189C3B]/60 transition-all duration-300"></div>
          <div class="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(24,156,59,0.03)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

          <div class="absolute top-2 left-2 text-[#189C3B] font-mono text-xs border border-[#189C3B]/40 bg-black/80 px-2 py-1">
            {{ String(index + 1).padStart(2, '0') }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
