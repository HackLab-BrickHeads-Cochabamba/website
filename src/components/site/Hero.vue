<script setup lang="ts">
import { BookOpen, Cpu, Lightbulb, Users } from "lucide-vue-next";

const pillars = [
  { icon: Cpu, label: "Tecnologia" },
  { icon: BookOpen, label: "Educacion" },
  { icon: Lightbulb, label: "Conocimiento" },
  { icon: Users, label: "Sociedad" },
];
</script>

<template>
  <section id="hero" class="relative min-h-screen overflow-hidden bg-black pt-20">
    <h1 class="sr-only">HackLab BrickHeads — Espacio hacker en Cochabamba</h1>

    <div class="pointer-events-none absolute inset-0 opacity-[0.04]">
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#189C3B_1px,transparent_1px),linear-gradient(to_bottom,#189C3B_1px,transparent_1px)] bg-[size:64px_64px]"
      ></div>
    </div>
    <div
      class="pointer-events-none absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[#189C3B]/15 blur-[120px]"
    ></div>

    <div
      class="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-6 py-16 lg:px-8 lg:py-24"
    >
      <div class="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p
            class="font-mono text-xs uppercase tracking-[0.3em] text-[#189C3B]"
          >
            // Espacio hacker · Cochabamba
          </p>

          <NuxtImg
            src="/images/letters_white.png"
            alt="HackLab BrickHeads"
            width="896"
            height="224"
            format="webp"
            sizes="(min-width: 1024px) 560px, 288px"
            preload
            loading="eager"
            class="mt-6 w-full max-w-xl object-contain object-left"
          />

          <p
            class="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            <span class="text-[#189C3B]">></span> Espacio Hacker de conocimiento
            abierto, experimentacion y aprendizaje colectivo
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="https://forms.gle/VfR5R73zFp84ua5L8"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 bg-[#189C3B] px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#000] transition-colors hover:bg-[#20BC4A]"
            >
              Únete
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#services"
              class="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
            >
              Actividades
              <span
                aria-hidden="true"
                class="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>

        <div class="relative flex items-center justify-center lg:justify-end">
          <div
            class="absolute h-64 w-64 rounded-full border border-[#189C3B]/20 sm:h-80 sm:w-80"
          ></div>
          <div
            class="absolute h-80 w-80 rounded-full border border-[#189C3B]/10 sm:h-96 sm:w-96"
          ></div>

          <NuxtImg
            src="/images/heads_white.png"
            alt="HackLab Logo"
            width="448"
            height="448"
            format="webp"
            sizes="(min-width: 1024px) 320px, 224px"
            preload
            loading="eager"
            class="relative w-52 object-contain drop-shadow-[0_0_45px_rgba(24,156,59,0.35)] sm:w-64 lg:w-80"
          />

          <span
            class="absolute bottom-2 left-0 font-mono text-[11px] uppercase tracking-[0.2em] text-[#189C3B] sm:bottom-6"
          >
            hacklab@brickheads:~$
            <span class="motion-safe:animate-pulse" aria-hidden="true">▂</span>
          </span>
        </div>
      </div>

      <div
        class="mt-16 grid grid-cols-2 gap-px overflow-hidden border-y border-white/10 bg-white/10 sm:grid-cols-4"
      >
        <div
          v-for="pillar in pillars"
          :key="pillar.label"
          class="group flex items-center gap-3 bg-black px-5 py-5"
        >
          <component
            :is="pillar.icon"
            class="h-5 w-5 shrink-0 text-[#189C3B] transition-transform duration-300 group-hover:-translate-y-0.5"
          />
          <span
            class="font-mono text-xs uppercase tracking-[0.18em] text-white/70 transition-colors group-hover:text-white"
          >
            {{ pillar.label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
