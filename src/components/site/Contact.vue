<script setup lang="ts">
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Terminal,
  Youtube,
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
    `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
  );
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
};
</script>

<template>
  <section id="contact" class="py-20 bg-black relative overflow-hidden">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,156,59,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,156,59,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#189C3B]/50 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="text-[#189C3B] font-mono text-sm border border-[#189C3B]/30 px-4 py-2 bg-[#189C3B]/5">{{ '// CONTACTO' }}</span>
        </div>
        <h2 class="text-4xl md:text-5xl mb-4 font-bold">
          <span class="text-white">Unete al <span class="text-[#189C3B] drop-shadow-[0_0_15px_rgba(24,156,59,0.5)]">HackLab</span></span>
        </h2>
        <p class="text-gray-400 text-lg font-mono">> Colabora, aprende y construye con nosotros</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="space-y-6">
          <div class="border border-[#189C3B]/30 bg-black/80 p-6">
            <div class="flex items-start gap-4 mb-6">
              <div class="border border-[#189C3B] w-12 h-12 flex items-center justify-center bg-black">
                <Mail class="w-6 h-6 text-[#189C3B]" />
              </div>
              <div>
                <h3 class="text-white font-bold mb-1 uppercase tracking-wide">Email</h3>
                <p class="text-gray-400 font-mono text-sm">hacklab.brickheads@gmail.com</p>
              </div>
            </div>

            <div class="flex items-start gap-4 mb-6">
              <div class="border border-[#189C3B] w-12 h-12 flex items-center justify-center bg-black">
                <MapPin class="w-6 h-6 text-[#189C3B]" />
              </div>
              <div>
                <h3 class="text-white font-bold mb-1 uppercase tracking-wide">Ubicacion</h3>
                <p class="text-gray-400 font-mono text-sm">Proyecto mARTadero, Cochabamba</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="border border-[#189C3B] w-12 h-12 flex items-center justify-center bg-black">
                <Terminal class="w-6 h-6 text-[#189C3B]" />
              </div>
              <div>
                <h3 class="text-white font-bold mb-1 uppercase tracking-wide">Horarios</h3>
                <p class="text-gray-400 font-mono text-sm">
                  Sabados 15:00 - 18:00
                  <br />
                  Miercoles (virtual) 21:00 - 22:00
                </p>
              </div>
            </div>
          </div>

          <div class="border border-[#189C3B]/30 bg-black/80 p-6">
            <h3 class="text-white font-bold mb-4 uppercase tracking-wide">{{ '<SOCIAL_LINKS />' }}</h3>
            <div class="grid grid-cols-2 gap-4">
              <a
                href="https://www.facebook.com/HackLabBrickHeads"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 border border-[#189C3B]/40 p-3 hover:bg-[#189C3B]/10 hover:border-[#189C3B] transition-all duration-300 group"
              >
                <Facebook class="w-5 h-5 text-[#189C3B] group-hover:text-[#189C3B] transition-colors" />
                <span class="text-gray-300 text-sm font-medium group-hover:text-[#189C3B] transition-colors">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/hacklabbrickheads/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 border border-[#189C3B]/40 p-3 hover:bg-[#189C3B]/10 hover:border-[#189C3B] transition-all duration-300 group"
              >
                <Instagram class="w-5 h-5 text-[#189C3B] group-hover:text-[#189C3B] transition-colors" />
                <span class="text-gray-300 text-sm font-medium group-hover:text-[#189C3B] transition-colors">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/hacklab-brickheads-cochabamba/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 border border-[#189C3B]/40 p-3 hover:bg-[#189C3B]/10 hover:border-[#189C3B] transition-all duration-300 group"
              >
                <Linkedin class="w-5 h-5 text-[#189C3B] group-hover:text-[#189C3B] transition-colors" />
                <span class="text-gray-300 text-sm font-medium group-hover:text-[#189C3B] transition-colors">LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/@HackLabBrickHeads"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 border border-[#189C3B]/40 p-3 hover:bg-[#189C3B]/10 hover:border-[#189C3B] transition-all duration-300 group"
              >
                <Youtube class="w-5 h-5 text-[#189C3B] group-hover:text-[#189C3B] transition-colors" />
                <span class="text-gray-300 text-sm font-medium group-hover:text-[#189C3B] transition-colors">YouTube</span>
              </a>
            </div>
          </div>

          <div class="border border-[#189C3B]/30 bg-[#189C3B]/5 p-6">
            <h3 class="text-white font-bold mb-3 uppercase tracking-wide">> Oportunidades de Colaboracion</h3>
            <ul class="text-gray-400 space-y-2 font-mono text-sm">
              <li class="flex items-start"><span class="text-[#189C3B] mr-2">▸</span>Patrocinio de eventos y actividades</li>
              <li class="flex items-start"><span class="text-[#189C3B] mr-2">▸</span>Proyectos colaborativos open source</li>
              <li class="flex items-start"><span class="text-[#189C3B] mr-2">▸</span>Charlas tecnicas y workshops</li>
              <li class="flex items-start"><span class="text-[#189C3B] mr-2">▸</span>Donacion de equipos y recursos</li>
            </ul>
          </div>
        </div>

        <div>
          <div class="border border-[#189C3B]/30 bg-black/80 p-8">
            <div class="mb-6">
              <p class="text-[#189C3B] font-mono text-sm mb-4">> root@hacklab:~$ send_message --to=admin</p>
            </div>

            <div class="space-y-6">
              <div>
                <label for="name" class="block text-white mb-2 font-mono uppercase text-sm tracking-wider">Nombre</label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="w-full px-4 py-3 bg-black border border-[#189C3B]/40 text-white focus:border-[#189C3B] focus:outline-none focus:shadow-[0_0_10px_rgba(24,156,59,0.3)] transition-all font-mono"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label for="email" class="block text-white mb-2 font-mono uppercase text-sm tracking-wider">Email</label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="w-full px-4 py-3 bg-black border border-[#189C3B]/40 text-white focus:border-[#189C3B] focus:outline-none focus:shadow-[0_0_10px_rgba(24,156,59,0.3)] transition-all font-mono"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label for="subject" class="block text-white mb-2 font-mono uppercase text-sm tracking-wider">Asunto</label>
                <input
                  id="subject"
                  v-model="formData.subject"
                  type="text"
                  class="w-full px-4 py-3 bg-black border border-[#189C3B]/40 text-white focus:border-[#189C3B] focus:outline-none focus:shadow-[0_0_10px_rgba(24,156,59,0.3)] transition-all font-mono"
                  placeholder="En que estas interesado?"
                />
              </div>

              <div>
                <label for="message" class="block text-white mb-2 font-mono uppercase text-sm tracking-wider">Mensaje</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  class="w-full px-4 py-3 bg-black border border-[#189C3B]/40 text-white focus:border-[#189C3B] focus:outline-none focus:shadow-[0_0_10px_rgba(24,156,59,0.3)] transition-all resize-none font-mono"
                  placeholder="Cuentanos sobre tu idea..."
                ></textarea>
              </div>

              <button
                type="button"
                @click="handleSendEmail"
                class="w-full px-6 py-4 bg-black border-2 border-[#189C3B] text-[#189C3B] hover:bg-[#189C3B] hover:text-[#189C3B] transition-all duration-300 flex items-center justify-center gap-2 font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(24,156,59,0.3)] hover:shadow-[0_0_30px_rgba(24,156,59,0.6)]"
              >
                <Send class="w-5 h-5" />
                {{ '[ENVIAR_MENSAJE]' }}
              </button>

              <p class="text-gray-500 text-sm font-mono text-center">> Responderemos en menos de 48 horas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
