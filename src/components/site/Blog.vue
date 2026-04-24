<script setup lang="ts">
import { ArrowRight, Calendar, FileText } from "lucide-vue-next";

const posts = [
  {
    title: "IA y Etica: El Debate Necesario",
    excerpt: "Reflexiones sobre el desarrollo responsable de inteligencia artificial y su impacto social...",
    date: "2026-04-20",
    image: "https://images.unsplash.com/photo-1749006590324-d6b2e90ab1c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    category: "IA/Etica",
  },
  {
    title: "Taller: Introduccion a Linux",
    excerpt: "Resumen de nuestro ultimo taller sobre fundamentos de GNU/Linux y software libre...",
    date: "2026-04-18",
    image: "https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    category: "Workshop",
  },
  {
    title: "Hackathon Social 2026",
    excerpt: "Como desarrollamos soluciones tecnologicas para problematicas locales en 48 horas...",
    date: "2026-04-15",
    image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    category: "Evento",
  },
];

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
</script>

<template>
  <section id="blog" class="py-20 bg-black relative overflow-hidden">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,156,59,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,156,59,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="text-[#189C3B] font-mono text-sm border border-[#189C3B]/30 px-4 py-2 bg-[#189C3B]/5">{{ '// BLOG' }}</span>
        </div>
        <h2 class="text-4xl md:text-5xl mb-4 font-bold">
          <span class="text-white">Ultimas <span class="text-[#189C3B] drop-shadow-[0_0_15px_rgba(24,156,59,0.5)]">Publicaciones</span></span>
        </h2>
        <p class="text-gray-400 text-lg font-mono">> Articulos, tutoriales y experiencias de la comunidad</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article
          v-for="(post, index) in posts"
          :key="post.title"
          class="border border-[#189C3B]/30 bg-black/80 overflow-hidden hover:border-[#189C3B]/60 transition-all duration-300 group"
        >
          <div class="relative h-48 overflow-hidden border-b border-[#189C3B]/30">
            <SiteImageWithFallback
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div class="absolute top-4 left-4">
              <span class="border border-[#189C3B] bg-black/80 px-3 py-1 text-[#189C3B] font-mono text-xs uppercase tracking-wider">{{ post.category }}</span>
            </div>
            <div class="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#189C3B]/40"></div>
          </div>

          <div class="p-6 relative">
            <div class="flex items-center gap-2 text-gray-500 mb-3 font-mono text-xs">
              <Calendar class="w-4 h-4" />
              <span>{{ formatDate(post.date) }}</span>
            </div>

            <h3 class="text-white mb-2 font-bold uppercase tracking-wide">{{ post.title }}</h3>
            <p class="text-gray-400 mb-4 text-sm leading-relaxed">{{ post.excerpt }}</p>

            <button class="flex items-center gap-2 text-[#189C3B] hover:text-white transition-colors group/btn font-mono text-sm uppercase tracking-wider">
              <FileText class="w-4 h-4" />
              Leer mas
              <ArrowRight class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>

            <div class="absolute bottom-4 right-4 text-[#189C3B]/10 font-mono text-3xl font-bold">
              {{ String(index + 1).padStart(2, '0') }}
            </div>
          </div>
        </article>
      </div>

      <div class="text-center mt-12">
        <button class="border-2 border-[#189C3B] bg-black px-8 py-3 text-[#189C3B] hover:bg-[#189C3B] hover:text-[#189C3B] transition-all duration-300 font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(24,156,59,0.3)] hover:shadow-[0_0_30px_rgba(24,156,59,0.6)]">
          {{ '[VER_TODO_EL_BLOG]' }}
        </button>
      </div>
    </div>
  </section>
</template>
