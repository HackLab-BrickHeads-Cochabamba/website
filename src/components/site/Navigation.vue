<script setup lang="ts">
import { ref } from "vue";
import { Menu, X } from "lucide-vue-next";

const isOpen = ref(false);
const menuButton = useTemplateRef<HTMLButtonElement>("menuButton");

const closeWithEscape = () => {
  if (!isOpen.value) return;
  isOpen.value = false;
  menuButton.value?.focus();
};

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
  <nav
    @keydown.esc="closeWithEscape"
    class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#2D2D2E]/80 backdrop-blur-xl"
  >
    <div
      class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
    >
      <NuxtLink to="/" class="flex items-center gap-3">
        <NuxtImg
          src="/images/letters_white.png"
          alt="HackLab BrickHeads"
          width="256"
          height="64"
          format="png"
            densities="1x 2x"
          sizes="128px"
          class="h-7 w-auto object-contain sm:h-8"
        />
      </NuxtLink>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="group relative py-2 font-mono text-xs uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
        >
          {{ item.name }}
          <span
            class="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#189C3B] transition-transform duration-300 group-hover:scale-x-100"
          ></span>
        </a>

        <a
          href="https://forms.gle/VfR5R73zFp84ua5L8"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 border border-[#189C3B] px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#189C3B] transition-colors hover:bg-[#189C3B] hover:text-[#000]"
        >
          Únete
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="md:hidden">
        <button
          ref="menuButton"
          type="button"
          class="border border-white/15 p-2 text-white/70 transition-colors hover:border-[#189C3B] hover:text-[#189C3B]"
          :aria-label="isOpen ? 'Cerrar menú' : 'Abrir menú'"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          @click="isOpen = !isOpen"
        >
          <X v-if="isOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>
    </div>

    <div
      v-if="isOpen"
      id="mobile-menu"
      class="border-t border-white/10 bg-[#2D2D2E] md:hidden"
    >
      <div class="space-y-1 px-6 py-6">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="block border-b border-white/5 py-3 font-mono text-sm uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-[#189C3B]"
          @click="isOpen = false"
        >
          {{ item.name }}
        </a>

        <a
          href="https://forms.gle/VfR5R73zFp84ua5L8"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-6 inline-flex items-center gap-2 border border-[#189C3B] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#189C3B] transition-colors hover:bg-[#189C3B] hover:text-[#000]"
        >
          Únete
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </nav>
</template>
