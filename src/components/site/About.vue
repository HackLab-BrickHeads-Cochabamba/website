<script setup lang="ts">
import { CheckCircle2 } from "lucide-vue-next";

const manifesto = [
  "El conocimiento es un pilar fundamental del desarrollo humano, es libre y no deberia privarse.",
  "La tecnologia es un medio, mas no el fin. Es una herramienta de las muchas para la transformacion y evolucion a una sociedad mejor.",
  "La privacidad y los datos personales son derechos humanos fundamentales.",
  "La colaboracion, contribucion y participacion abierta son clave para el desarrollo de tecnologia con conciencia y responsabilidad social.",
  "Es importante fomentar la inclusion y diversidad en todos los aspectos.",
  "Nada es absolutamente cierto, ni absolutamente falso, las respuestas mas interesantes se encuentran en el terreno de lo matizado.",
  "Debemos manejar, ensenar y difundir tecnologia de forma critica y reflexiva.",
];
</script>

<template>
  <section id="about" class="py-20 bg-black relative overflow-hidden">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,156,59,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,156,59,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#189C3B]/50 to-transparent"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="text-[#189C3B] font-mono text-sm border border-[#189C3B]/30 px-4 py-2 bg-[#189C3B]/5">{{ '// MANIFIESTO HACKER' }}</span>
        </div>
        <h2 class="text-4xl md:text-5xl mb-6 font-bold">
          <span class="text-white">Nuestros <span class="text-[#189C3B] drop-shadow-[0_0_15px_rgba(24,156,59,0.5)]">Principios</span></span>
        </h2>
      </div>

      <div class="space-y-6">
        <div
          v-for="(principle, index) in manifesto"
          :key="index"
          class="border border-[#189C3B]/30 bg-black/50 p-6 hover:border-[#189C3B]/60 hover:bg-[#189C3B]/5 transition-all duration-300 group backdrop-blur-sm"
        >
          <div class="flex gap-4 items-start">
            <div class="flex-shrink-0 mt-1">
              <div class="w-6 h-6 border border-[#189C3B] flex items-center justify-center group-hover:bg-[#189C3B] transition-colors">
                <span class="text-[#189C3B] group-hover:text-[#189C3B] font-mono text-xs">{{ String(index + 1).padStart(2, '0') }}</span>
              </div>
            </div>
            <p class="text-gray-300 leading-relaxed flex-1">{{ principle }}</p>
            <CheckCircle2 class="w-5 h-5 text-[#189C3B]/50 group-hover:text-[#189C3B] transition-colors flex-shrink-0 mt-1" />
          </div>
        </div>
      </div>

      <div class="mt-16 text-center border border-[#189C3B]/40 bg-[#189C3B]/10 p-8 backdrop-blur-sm">
        <p class="text-white text-xl font-mono"><span class="text-[#189C3B]">></span> Unete a la revolucion del conocimiento libre</p>
        <p class="text-gray-400 mt-2 font-mono text-sm">La tecnologia en manos de la comunidad</p>
      </div>
    </div>
  </section>
</template>
