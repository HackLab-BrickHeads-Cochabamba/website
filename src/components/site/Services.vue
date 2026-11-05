<script setup lang="ts">
import { Code2, Globe, GraduationCap, Rocket, Users2, Wrench } from "lucide-vue-next";

const services = [
  {
    icon: Code2,
    title: "Proyectos compartidos",
    description: "Nos reunimos para probar ideas y construir proyectos entre varias personas, compartiendo lo que aprendemos durante el proceso.",
  },
  {
    icon: GraduationCap,
    title: "Talleres para aprender",
    description: "Compartimos conocimientos de tecnología con personas de distintas edades: desde capacitación digital para mujeres hasta talleres de inteligencia artificial para niños.",
  },
  {
    icon: Users2,
    title: "Cine HackLab",
    description: "Vemos películas como punto de partida para conversar sobre tecnología, sociedad y las preguntas que nos dejan.",
  },
  {
    icon: Wrench,
    title: "Experimentación y reutilización",
    description: "Exploramos la electrónica y damos nuevos usos a equipos y componentes: desde un CanSat con materiales reciclados hasta un proyecto con pantallas CRT.",
  },
  {
    icon: Rocket,
    title: "Actividades comunitarias",
    description: "También nos encontramos fuera del laboratorio. Cada Navidad llevamos regalos a niños de comunidades rurales, una actividad que compartimos año tras año.",
  },
  {
    icon: Globe,
    title: "Charlas y encuentros",
    description: "Conversamos sobre temas como ciberseguridad y participamos en espacios como FLISoL, Hackmeeting y ferias de comunidades para compartir experiencias.",
  },
];
</script>

<template>
  <section id="services" class="relative border-y border-white/5 bg-white/[0.015] py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SiteSectionHeader label="// Actividades" title="Qué" highlight="Hacemos" />
        <p class="max-w-sm font-mono text-sm text-white/60">
          <span class="text-[#189C3B]">></span> Proyectos, conversaciones y ganas de aprender en comunidad
        </p>
      </div>

      <div
        class="mt-16 grid grid-cols-1 gap-x-10 border-b border-white/10 sm:grid-cols-2 lg:grid-cols-3"
      >
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="group border-t border-white/10 py-8 transition-colors hover:border-[#189C3B]/60"
        >
          <div class="flex items-center gap-4">
            <span class="font-mono text-xs text-[#189C3B]">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <component
              :is="service.icon"
              class="h-5 w-5 text-[#189C3B] transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </div>

          <h3
            class="mt-5 text-lg font-bold uppercase tracking-wide text-white transition-colors group-hover:text-[#189C3B]"
          >
            {{ service.title }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-white/60">
            {{ service.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
