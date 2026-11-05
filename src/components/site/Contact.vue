<script setup lang="ts">
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Terminal,
} from "lucide-vue-next";
import { socialLinks } from "~/data/social-links";

const opportunities = [
  "Organizar actividades y encuentros",
  "Participar en proyectos y proponer ideas",
  "Compartir conocimientos en charlas y talleres",
  "Donar equipos y componentes para experimentar",
];
</script>

<template>
  <section
    id="contact"
    class="relative border-t border-white/5 bg-white/[0.015] py-24 sm:py-32"
  >
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl">
        <div>
          <SiteSectionHeader
            label="// Contacto"
            title="Conversemos"
            description="> Pregunta, propón una idea o ven a conocernos"
          />

          <div class="mt-12 divide-y divide-white/10 border-t border-white/10">
            <div class="flex gap-4 py-5">
              <Mail class="mt-0.5 h-5 w-5 shrink-0 text-[#189C3B]" />
              <div>
                <p
                  class="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60"
                >
                  Email
                </p>
                <p class="mt-1 text-sm text-white/80">
                  hacklab.brickheads@gmail.com
                </p>
              </div>
            </div>

            <div class="flex gap-4 py-5">
              <MapPin class="mt-0.5 h-5 w-5 shrink-0 text-[#189C3B]" />
              <div>
                <p
                  class="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60"
                >
                  Ubicación
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&amp;query=Proyecto+mARTadero%2C+Calle+27+de+Agosto+y+Ollantay%2C+Cochabamba%2C+Bolivia"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-1 inline-block text-sm leading-relaxed text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#189C3B]"
                >
                  Proyecto mARTadero<br />
                  Calle 27 de Agosto y Ollantay, Cochabamba<br />
                  <span class="text-xs">Ver ubicación en Google Maps ↗</span>
                </a>
              </div>
            </div>

            <div class="flex gap-4 py-5">
              <Terminal class="mt-0.5 h-5 w-5 shrink-0 text-[#189C3B]" />
              <div>
                <p
                  class="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60"
                >
                  Horarios
                </p>
                <p class="mt-1 text-sm leading-relaxed text-white/80">
                  Sábados de 15:00 a 18:00
                </p>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <p
              class="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60"
            >
              {{ "<SOCIAL_LINKS />" }}
            </p>
            <div class="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <SiteSocialIcon
                  :name="social.icon"
                  aria-hidden="true"
                  class="h-4 w-4 text-[#189C3B]"
                />
                {{ social.name }}
                <ArrowUpRight
                  class="h-3.5 w-3.5 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#189C3B]"
                />
              </a>
            </div>
          </div>

          <div class="mt-10 border-t border-white/10 pt-6">
            <p
              class="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60"
            >
              > Formas de participar
            </p>
            <ul class="mt-4 space-y-2 text-sm text-white/60">
              <li
                v-for="item in opportunities"
                :key="item"
                class="flex items-start gap-2"
              >
                <span class="text-[#189C3B]">▸</span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
