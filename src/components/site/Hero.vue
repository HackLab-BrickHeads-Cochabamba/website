<script setup lang="ts">
const pillars = [
  { initial: "T", rest: "ecnología" },
  { initial: "E", rest: "ducación" },
  { initial: "C", rest: "onocimiento" },
  { initial: "S", rest: "ociedad" },
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
            format="png"
            densities="1x 2x"
            sizes="100vw sm:576px lg:560px"
            preload
            loading="eager"
            class="mt-6 w-full max-w-xl object-contain object-left"
          />

          <p
            class="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            <span class="text-[#189C3B]">></span> Somos HackLab BrickHeads, una comunidad de Cochabamba donde
            aprendemos, experimentamos y compartimos conocimiento.
          </p>

          <p class="mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Cualquier persona puede participar en nuestras reuniones e involucrarse
            en las actividades y proyectos del HackLab. Nos encontramos los sábados
            de 15:00 a 18:00 en el mARTadero.
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-6">
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

        <div class="heads-stage" aria-hidden="true">
          <div class="heads-orbit heads-orbit-inner"></div>
          <div class="heads-orbit heads-orbit-outer"></div>
          <NuxtImg
            src="/images/heads_white.png"
            alt=""
            width="4047"
            height="4070"
            format="png"
            densities="1x 2x"
            sizes="240px sm:288px lg:352px"
            fetchpriority="high"
            preload
            loading="eager"
            class="heads-art"
          />
        </div>
      </div>

      <div class="tecs" aria-label="TECS: Tecnología, Educación, Conocimiento y Sociedad. Principios del HackLab.">
        <p class="tecs-caption">// Nuestros principios</p>
        <ul class="tecs-words">
          <li v-for="(pillar, index) in pillars" :key="pillar.initial" :style="{ '--step': index }">
            <span class="tecs-initial">{{ pillar.initial }}</span><span>{{ pillar.rest }}</span>
          </li>
        </ul>
        <div class="tecs-result" aria-hidden="true">
          <span class="tecs-thread"></span>
          <span class="tecs-acronym">TECS</span>
          <span class="tecs-equals">↳</span>
          <span class="tecs-signature">Lo que nos mueve como <strong>HackLab<span>.</span></strong></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.heads-stage {
  position: relative;
  display: grid;
  place-items: center;
  width: min(100%, 28rem);
  aspect-ratio: 1;
  justify-self: center;
  isolation: isolate;
}
.heads-art { width: 78%; height: auto; position: relative; filter: drop-shadow(0 0 32px rgb(24 156 59 / .2)); }
.heads-orbit { position: absolute; border: 1px solid rgb(24 156 59 / .15); border-radius: 50%; }
.heads-orbit-inner { width: 88%; height: 88%; }
.heads-orbit-outer { width: 100%; height: 100%; border-color: rgb(24 156 59 / .08); }
.tecs { margin-top: 4rem; border-top: 1px solid rgb(255 255 255 / .1); padding-top: 1.5rem; }
.tecs-caption { font-family: monospace; font-size: .7rem; text-transform: uppercase; letter-spacing: .18em; color: rgb(255 255 255 / .5); }
.tecs-words { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem 2rem; margin-top: 1.25rem; list-style: none; padding: 0; }
.tecs-words li { color: rgb(255 255 255 / .75); font-size: clamp(1rem, 1.8vw, 1.4rem); }
.tecs-initial { color: #189C3B; font-weight: 700; }
.tecs-result { display: flex; flex-wrap: wrap; align-items: center; gap: .75rem; margin-top: 1.5rem; min-height: 2rem; }
.tecs-thread { width: 2rem; height: 1px; background: #189C3B; transform-origin: left; }
.tecs-acronym { color: #189C3B; font-family: monospace; font-size: 1rem; letter-spacing: .2em; }
.tecs-equals { color: rgb(255 255 255 / .4); }
.tecs-signature { color: rgb(255 255 255 / .55); font-size: .875rem; }
.tecs-signature strong { color: rgb(255 255 255 / .85); font-weight: 500; }
.tecs-signature strong span { color: #189C3B; }
@media (max-width: 639px) {
  .heads-stage { width: min(100%, 19rem); }
  .tecs-words { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
  .tecs-thread { width: 1rem; }
}
@media (prefers-reduced-motion: no-preference) {
  .tecs-words li { animation: word-arrives .7s both; animation-delay: calc(.5s + var(--step) * .4s); }
  .tecs-initial { display: inline-block; animation: initial-inks 1.2s both; animation-delay: calc(2.4s + var(--step) * .18s); }
  .tecs-result { animation: word-arrives .8s 3.8s both; }
  .tecs-thread { animation: thread-draws .8s 3.8s both; }
  .tecs-signature { animation: word-arrives .8s 4.6s both; }
}
@keyframes word-arrives { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
@keyframes initial-inks { 0%, 100% { color: #189C3B; } 45% { color: #fff; text-shadow: 0 0 12px rgb(24 156 59 / .55); } }
@keyframes thread-draws { from { transform: scaleX(0); } to { transform: scaleX(1); } }
</style>
