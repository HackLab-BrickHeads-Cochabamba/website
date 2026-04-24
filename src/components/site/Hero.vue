<script setup lang="ts">
import { BookOpen, Cpu, Lightbulb, Users } from "lucide-vue-next";
import headsLogo from "~/assets/images/heads_white.png";
import lettersLogo from "~/assets/images/letters_white.png";

const pillars = [
  { icon: Cpu, label: "Tecnologia" },
  { icon: BookOpen, label: "Educacion" },
  { icon: Lightbulb, label: "Conocimiento" },
  { icon: Users, label: "Sociedad" },
];
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center bg-black relative overflow-hidden pt-16">
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#189C3B_1px,transparent_1px),linear-gradient(to_bottom,#189C3B_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    </div>

    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#189C3B]/10 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#189C3B]/5 rounded-full blur-[120px] animate-pulse [animation-delay:1s]"></div>
    </div>

    <div class="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(24,156,59,0.02)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mt-8 md:mt-10">
        <div class="mb-10">
          <div class="flex flex-col items-center gap-4">
            <img
              :src="headsLogo"
              alt="HackLab Logo"
              class="w-44 h-44 md:w-56 md:h-56 object-contain drop-shadow-[0_0_35px_rgba(24,156,59,0.35)]"
            />
            <img
              :src="lettersLogo"
              alt="HackLab BrickHeads"
              class="w-72 md:w-[28rem] object-contain drop-shadow-[0_0_30px_rgba(24,156,59,0.3)]"
            />
          </div>
        </div>

        <div class="max-w-3xl mx-auto mb-12 mt-8 border border-[#189C3B]/30 bg-[#189C3B]/5 p-6 backdrop-blur-sm">
          <p class="text-lg text-gray-300 font-mono leading-relaxed">
            <span class="text-[#189C3B]">></span> Espacio Hacker de conocimiento abierto,
            <br />
            experimentacion y aprendizaje colectivo
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <div
            v-for="pillar in pillars"
            :key="pillar.label"
            class="border border-[#189C3B]/40 bg-black/50 p-6 hover:bg-[#189C3B]/5 hover:border-[#189C3B]/60 transition-all duration-300 group"
          >
            <component
              :is="pillar.icon"
              class="w-10 h-10 text-[#189C3B] mb-3 mx-auto group-hover:drop-shadow-[0_0_10px_rgba(24,156,59,0.8)] transition-all"
            />
            <p class="text-white font-semibold uppercase tracking-wider text-sm">{{ pillar.label }}</p>
          </div>
        </div>

        <a
          href="https://forms.gle/VfR5R73zFp84ua5L8"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex px-8 py-4 bg-black border-2 border-[#189C3B] text-[#189C3B] font-bold uppercase tracking-wider hover:bg-[#189C3B] hover:text-[#189C3B] transition-all duration-300 shadow-[0_0_20px_rgba(24,156,59,0.3)] hover:shadow-[0_0_30px_rgba(24,156,59,0.6)]"
        >
          ÚNETE
        </a>

        <div class="mt-12 text-[#189C3B] text-2xl font-mono animate-pulse">▂</div>
      </div>
    </div>
  </section>
</template>
