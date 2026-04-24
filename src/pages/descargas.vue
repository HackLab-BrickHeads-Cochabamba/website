<script setup lang="ts">
import { Download, FileImage, Package } from "lucide-vue-next";
import headsLogo from "~/assets/images/heads_white.png";
import lettersLogo from "~/assets/images/letters_white.png";
import squareLogo from "~/assets/images/square_white.png";

const downloads = [
  {
    title: "Logo Completo (Cuadrado)",
    description: "Logo con heads de LEGO en formato cuadrado",
    image: squareLogo,
    filename: "hacklab_logo_square.png",
    category: "Logos",
  },
  {
    title: "Logo Letras",
    description: 'Texto "BRICK-HEADS" en verde',
    image: lettersLogo,
    filename: "hacklab_letters.png",
    category: "Logos",
  },
  {
    title: "Heads Iconos",
    description: "Iconos de heads de LEGO",
    image: headsLogo,
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
  <div class="min-h-screen bg-black pt-16">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,156,59,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,156,59,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

    <div class="absolute top-16 left-0 w-32 h-32 border-t-2 border-l-2 border-[#189C3B]/40"></div>
    <div class="absolute top-16 right-0 w-32 h-32 border-t-2 border-r-2 border-[#189C3B]/40"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="text-[#189C3B] font-mono text-sm border border-[#189C3B]/30 px-4 py-2 bg-[#189C3B]/5">{{ '// RECURSOS' }}</span>
        </div>
        <h1 class="text-4xl md:text-6xl mb-6 font-bold">
          <span class="text-white">Centro de <span class="text-[#189C3B] drop-shadow-[0_0_15px_rgba(24,156,59,0.5)]">Descargas</span></span>
        </h1>
        <p class="text-gray-400 text-lg font-mono max-w-3xl mx-auto">> Logos, materiales y recursos del HackLab BrickHeads</p>
        <p class="text-gray-500 text-sm font-mono mt-4 border border-[#189C3B]/20 inline-block px-6 py-3 bg-[#189C3B]/5">
          Todos los recursos son de uso libre para la comunidad
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div
          v-for="(item, index) in downloads"
          :key="item.filename"
          class="border border-[#189C3B]/30 bg-black/80 overflow-hidden hover:border-[#189C3B]/60 transition-all duration-300 group"
        >
          <div class="relative h-64 bg-white/5 border-b border-[#189C3B]/30 flex items-center justify-center p-8">
            <img :src="item.image" :alt="item.title" class="max-w-full max-h-full object-contain" />
            <div class="absolute top-4 left-4">
              <span class="border border-[#189C3B] bg-black/80 px-3 py-1 text-[#189C3B] font-mono text-xs uppercase tracking-wider">{{ item.category }}</span>
            </div>
            <div class="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#189C3B]/20 group-hover:border-[#189C3B]/60 transition-colors"></div>
          </div>

          <div class="p-6">
            <div class="flex items-start gap-3 mb-3">
              <FileImage class="w-5 h-5 text-[#189C3B] flex-shrink-0 mt-1" />
              <div>
                <h3 class="text-white font-bold uppercase tracking-wide mb-1">{{ item.title }}</h3>
                <p class="text-gray-400 text-sm">{{ item.description }}</p>
              </div>
            </div>

            <button
              class="w-full mt-4 px-6 py-3 bg-black border-2 border-[#189C3B] text-[#189C3B] hover:bg-[#189C3B] hover:text-[#189C3B] transition-all duration-300 flex items-center justify-center gap-2 font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(24,156,59,0.3)] hover:shadow-[0_0_30px_rgba(24,156,59,0.6)]"
              @click="handleDownload(item.image, item.filename)"
            >
              <Download class="w-5 h-5" />
              {{ '[DESCARGAR]' }}
            </button>

            <p class="text-gray-600 font-mono text-xs mt-3 text-center">{{ item.filename }}</p>
          </div>
        </div>
      </div>

      <div class="border border-[#189C3B]/40 bg-[#189C3B]/10 p-8 text-center">
        <div class="flex items-center justify-center gap-3 mb-4">
          <Package class="w-8 h-8 text-[#189C3B]" />
          <h2 class="text-2xl font-bold text-white uppercase tracking-wider">Pack Completo</h2>
        </div>
        <p class="text-gray-300 mb-6 font-mono">Descarga todos los recursos en un solo archivo comprimido</p>
        <button class="px-8 py-4 bg-black border-2 border-[#189C3B] text-[#189C3B] hover:bg-[#189C3B] hover:text-[#189C3B] transition-all duration-300 font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(24,156,59,0.4)] hover:shadow-[0_0_40px_rgba(24,156,59,0.7)] inline-flex items-center gap-3">
          <Download class="w-6 h-6" />
          {{ '[DESCARGAR_TODO]' }}
        </button>
      </div>

      <div class="mt-12 border border-[#189C3B]/30 bg-black/80 p-8">
        <h3 class="text-white font-bold mb-4 uppercase tracking-wide text-xl">> Guia de Uso</h3>
        <ul class="text-gray-400 space-y-2 font-mono text-sm">
          <li class="flex items-start"><span class="text-[#189C3B] mr-2">▸</span>Los logos pueden ser usados libremente para promocionar el HackLab</li>
          <li class="flex items-start"><span class="text-[#189C3B] mr-2">▸</span>Manten los colores oficiales: verde (#189C3B), negro y blanco</li>
          <li class="flex items-start"><span class="text-[#189C3B] mr-2">▸</span>No modifiques las proporciones de los logos</li>
          <li class="flex items-start"><span class="text-[#189C3B] mr-2">▸</span>Para usos comerciales, contacta a hacklab.brickheads@gmail.com</li>
        </ul>
      </div>
    </div>

    <SiteFooter />
  </div>
</template>
