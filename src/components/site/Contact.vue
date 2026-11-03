<script setup lang="ts">
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  Terminal,
} from "lucide-vue-next";
import { reactive } from "vue";

const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleSendEmail = () => {
  const recipient = "hacklab.brickheads@gmail.com";
  const subject = encodeURIComponent(formData.subject || "Contacto desde HackLab");
  const body = encodeURIComponent(
    `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`,
  );
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
};

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/HackLabBrickHeads",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hacklabbrickheads/",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/hacklab-brickheads-cochabamba/",
    icon: "linkedin",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@HackLabBrickHeads",
    icon: "youtube",
  },
] as const;

const opportunities = [
  "Patrocinio de eventos y actividades",
  "Proyectos colaborativos open source",
  "Charlas tecnicas y workshops",
  "Donacion de equipos y recursos",
];
</script>

<template>
  <section
    id="contact"
    class="relative border-t border-white/5 bg-white/[0.015] py-24 sm:py-32"
  >
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SiteSectionHeader
            label="// Contacto"
            title="Unete al"
            highlight="HackLab"
            description="> Colabora, aprende y construye con nosotros"
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
                  Ubicacion
                </p>
                <p class="mt-1 text-sm text-white/80">
                  Proyecto mARTadero, Cochabamba
                </p>
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
                  Sabados 15:00 - 18:00
                  <br />
                  Miercoles (virtual) 21:00 - 22:00
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
                v-for="social in socials"
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
              > Oportunidades de Colaboracion
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

        <div
          class="border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:mt-16"
        >
          <p class="font-mono text-xs text-[#189C3B]">
            > root@hacklab:~$ send_message --to=admin
          </p>

          <form class="mt-8 space-y-6" @submit.prevent="handleSendEmail">
            <div>
              <label
                for="name"
                class="block font-mono text-[11px] uppercase tracking-[0.2em] text-white/60"
              >
                Nombre
              </label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="mt-2 w-full border-b border-white/15 bg-transparent py-2 text-sm text-white placeholder:text-white/60 focus:border-[#189C3B] focus:outline-none"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                for="email"
                class="block font-mono text-[11px] uppercase tracking-[0.2em] text-white/60"
              >
                Email
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="mt-2 w-full border-b border-white/15 bg-transparent py-2 text-sm text-white placeholder:text-white/60 focus:border-[#189C3B] focus:outline-none"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label
                for="subject"
                class="block font-mono text-[11px] uppercase tracking-[0.2em] text-white/60"
              >
                Asunto
              </label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                class="mt-2 w-full border-b border-white/15 bg-transparent py-2 text-sm text-white placeholder:text-white/60 focus:border-[#189C3B] focus:outline-none"
                placeholder="En que estas interesado?"
              />
            </div>

            <div>
              <label
                for="message"
                class="block font-mono text-[11px] uppercase tracking-[0.2em] text-white/60"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="5"
                required
                class="mt-2 w-full resize-none border-b border-white/15 bg-transparent py-2 text-sm text-white placeholder:text-white/60 focus:border-[#189C3B] focus:outline-none"
                placeholder="Cuentanos sobre tu idea..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="inline-flex w-full items-center justify-center gap-2 bg-[#189C3B] px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#000] transition-colors hover:bg-[#20BC4A]"
            >
              <Send class="h-5 w-5" />
              {{ "[ENVIAR_MENSAJE]" }}
            </button>

            <p class="text-center font-mono text-xs text-white/60">
              > Responderemos en menos de 48 horas
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
