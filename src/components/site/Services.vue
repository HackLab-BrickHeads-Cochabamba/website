<script setup lang="ts">
import { Code2, Globe, GraduationCap, Rocket, Users2, Wrench } from "lucide-vue-next";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Open Source",
    description: "Creamos y contribuimos a proyectos de codigo abierto para impulsar la tecnologia libre",
  },
  {
    icon: GraduationCap,
    title: "Talleres & Workshops",
    description: "Educacion practica en tecnologias emergentes, programacion y hacking etico",
  },
  {
    icon: Users2,
    title: "Hackatones",
    description: "Eventos colaborativos donde la comunidad resuelve problemas reales con tecnologia",
  },
  {
    icon: Wrench,
    title: "Laboratorio de Experimentacion",
    description: "Espacio equipado para prototipado, IoT, electronica y proyectos maker",
  },
  {
    icon: Rocket,
    title: "Proyectos de Impacto Social",
    description: "Desarrollo de soluciones tecnologicas para problematicas sociales locales",
  },
  {
    icon: Globe,
    title: "Comunidad Global",
    description: "Conexion con hacklabs y comunidades tech de todo el mundo",
  },
];
</script>

<template>
  <section id="services" class="relative border-y border-white/5 bg-white/[0.015] py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SiteSectionHeader label="// Actividades" title="Que" highlight="Hacemos" />
        <p class="max-w-sm font-mono text-sm text-white/60">
          <span class="text-[#189C3B]">></span> Iniciativas para democratizar la
          tecnologia
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
