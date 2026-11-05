<script setup lang="ts">
const manifesto = [
  "El conocimiento es fundamental para el desarrollo humano. Creemos en compartirlo de forma libre y abierta.",
  "La tecnología es un medio, no un fin. Nos interesa lo que podemos hacer con ella para mejorar la vida en comunidad.",
  "Defendemos la privacidad y la protección de los datos personales.",
  "La colaboración y la participación abierta nos ayudan a crear tecnología con conciencia y responsabilidad social.",
  "Queremos un espacio inclusivo, donde tengan lugar personas con experiencias y perspectivas distintas.",
  "Cultivamos la curiosidad, contrastamos ideas y estamos dispuestos a revisar lo que creemos saber.",
  "Usamos, enseñamos y compartimos tecnología de forma crítica y reflexiva.",
];
</script>

<template>
  <section id="about" class="relative bg-black py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div class="lg:sticky lg:top-28 lg:self-start">
          <SiteSectionHeader
            label="// Manifiesto hacker"
            title="Nuestros"
            highlight="Principios"
          />

          <SiteTecsPrinciples />

          <p class="mt-6 max-w-sm font-mono text-sm text-white/60">
            <span class="text-[#189C3B]">></span> Conocimiento libre, tecnología
            abierta, sociedad mejor
          </p>
        </div>

        <ol class="divide-y divide-white/10 border-t border-white/10">
          <li
            v-for="(principle, index) in manifesto"
            :key="index"
            class="group flex gap-6 py-6 sm:gap-8"
          >
            <span class="shrink-0 font-mono text-sm text-[#189C3B]">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <p
              class="text-base leading-relaxed text-white/70 transition-colors group-hover:text-white sm:text-lg"
            >
              {{ principle }}
            </p>
          </li>
        </ol>
      </div>

      <div
        class="mt-20 flex flex-col gap-4 border-y border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-lg text-white sm:text-xl">
          <span class="text-[#189C3B]">></span> Un espacio para aprender y compartir
        </p>
        <p
          class="font-mono text-xs uppercase tracking-[0.2em] text-white/60"
        >
          La tecnología en manos de la comunidad
        </p>
      </div>
    </div>
  </section>
</template>
