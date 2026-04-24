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
  <section id="services" class="py-20 bg-black relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#189C3B_1px,transparent_1px),linear-gradient(to_bottom,#189C3B_1px,transparent_1px)] bg-[size:30px_30px]"></div>
    </div>

    <div class="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#189C3B]/40"></div>
    <div class="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#189C3B]/40"></div>
    <div class="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#189C3B]/40"></div>
    <div class="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#189C3B]/40"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="text-[#189C3B] font-mono text-sm border border-[#189C3B]/30 px-4 py-2 bg-[#189C3B]/5">{{ '// ACTIVIDADES' }}</span>
        </div>
        <h2 class="text-4xl md:text-5xl mb-4 font-bold">
          <span class="text-white">Que <span class="text-[#189C3B] drop-shadow-[0_0_15px_rgba(24,156,59,0.5)]">Hacemos</span></span>
        </h2>
        <p class="text-gray-400 text-lg font-mono max-w-3xl mx-auto">> Iniciativas para democratizar la tecnologia</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="border border-[#189C3B]/30 bg-black/80 p-6 hover:border-[#189C3B]/60 hover:bg-[#189C3B]/5 transition-all duration-300 group relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#189C3B]/20 group-hover:border-[#189C3B]/60 transition-colors"></div>

          <div class="border border-[#189C3B]/40 w-16 h-16 flex items-center justify-center mb-4 bg-black group-hover:bg-[#189C3B] group-hover:shadow-[0_0_20px_rgba(24,156,59,0.5)] transition-all duration-300">
            <component :is="service.icon" class="w-8 h-8 text-[#189C3B] group-hover:text-[#189C3B] transition-colors" />
          </div>

          <h3 class="text-white font-bold mb-2 uppercase tracking-wide">{{ service.title }}</h3>
          <p class="text-gray-400">{{ service.description }}</p>

          <div class="absolute bottom-4 right-4 text-[#189C3B]/20 group-hover:text-[#189C3B]/40 font-mono text-4xl font-bold transition-colors">
            {{ String(index + 1).padStart(2, '0') }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
