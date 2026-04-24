<script setup lang="ts">
import { ref } from "vue";
import { Menu, X } from "lucide-vue-next";
import lettersLogo from "~/assets/images/letters_white.png";

const isOpen = ref(false);

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Manifiesto", href: "/#about" },
  { name: "Actividades", href: "/#services" },
  // { name: "Blog", href: "/#blog" },
  { name: "Galeria", href: "/#gallery" },
  { name: "Contacto", href: "/#contact" },
];
</script>

<template>
  <nav class="fixed top-0 w-full bg-black/90 backdrop-blur-lg z-50 border-b border-[#189C3B]/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img :src="lettersLogo" alt="HackLab BrickHeads" class="h-8 w-auto object-contain" />
        </NuxtLink>

        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-1">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              class="text-gray-400 hover:text-[#189C3B] hover:bg-[#189C3B]/10 px-3 py-2 transition-all duration-200 border border-transparent hover:border-[#189C3B]/30 font-medium"
            >
              {{ item.name }}
            </a>
          </div>
        </div>

        <div class="md:hidden">
          <button
            class="text-gray-300 hover:text-[#189C3B] border border-[#189C3B]/30 p-2"
            @click="isOpen = !isOpen"
          >
            <X v-if="isOpen" :size="24" />
            <Menu v-else :size="24" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="isOpen" class="md:hidden bg-black/95 backdrop-blur-lg border-t border-[#189C3B]/20">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="text-gray-300 hover:text-[#189C3B] hover:bg-[#189C3B]/10 block px-3 py-2 transition-all duration-200 border border-transparent hover:border-[#189C3B]/30"
          @click="isOpen = false"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>
