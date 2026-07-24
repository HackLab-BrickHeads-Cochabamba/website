<script setup lang="ts">
import { ExternalLink, Facebook, Instagram, Linkedin, Youtube } from "lucide-vue-next";
import squareLogo from "~/assets/images/square_white.png";

const socials = [
  { name: "Facebook", link: "https://www.facebook.com/HackLabBrickHeads", icon: Facebook },
  { name: "@hacklab.brickheads", link: "https://www.instagram.com/hacklabbrickheads/", icon: Instagram },
  { name: "LinkedIn", link: "https://www.linkedin.com/company/hacklab-brickheads-cochabamba/", icon: Linkedin },
  { name: "YouTube", link: "https://www.youtube.com/@HackLabBrickHeads", icon: Youtube },
  { name: "Whatsapp", link: "https://chat.whatsapp.com/GVc1h8iHryGCeIaf8Ee8ke", icon: Whatsapp },
];
</script>

<template>
  <div class="min-h-screen bg-black pt-16">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,156,59,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,156,59,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

    <div class="max-w-2xl mx-auto px-4 py-20 relative z-10">
      <div class="text-center mb-12">
        <div class="mb-8 flex justify-center">
          <div class="border-2 border-[#189C3B]/40 p-6 bg-black/80 inline-block">
            <img :src="squareLogo" alt="HackLab BrickHeads" class="w-32 h-32 object-contain" />
          </div>
        </div>

        <p class="text-gray-400 font-mono text-sm mb-2">Proyecto mARTadero, Cochabamba</p>
        <p class="text-gray-500 font-mono text-xs border border-[#189C3B]/30 inline-block px-4 py-2 bg-[#189C3B]/5">> Conocimiento libre • Tecnologia abierta</p>
      </div>

      <div class="space-y-4 mb-12">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
          class="block border border-[#189C3B]/40 bg-black/80 p-6 hover:border-[#189C3B] hover:bg-[#189C3B]/10 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(24,156,59,0.3)]"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="border border-[#189C3B] w-12 h-12 flex items-center justify-center bg-black group-hover:bg-[#189C3B] transition-colors">
                <component :is="social.icon" class="w-6 h-6 text-[#189C3B] group-hover:text-[#189C3B] transition-colors" />
              </div>
              <span class="text-white font-bold uppercase tracking-wider text-lg">{{ social.name }}</span>
            </div>
            <ExternalLink class="w-5 h-5 text-[#189C3B]/60 group-hover:text-[#189C3B] transition-colors" />
          </div>
        </a>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <NuxtLink
          to="/"
          class="border border-[#189C3B]/40 bg-black/80 p-4 text-center hover:border-[#189C3B] hover:bg-[#189C3B]/10 transition-all duration-300 group"
        >
          <span class="text-[#189C3B] font-bold uppercase tracking-wider text-sm">{{ '[SITIO_WEB]' }}</span>
        </NuxtLink>
        <NuxtLink
          to="/descargas"
          class="border border-[#189C3B]/40 bg-black/80 p-4 text-center hover:border-[#189C3B] hover:bg-[#189C3B]/10 transition-all duration-300 group"
        >
          <span class="text-[#189C3B] font-bold uppercase tracking-wider text-sm">{{ '[DESCARGAS]' }}</span>
        </NuxtLink>
      </div>

      <div class="text-center mt-12">
        <p class="text-gray-500 font-mono text-xs mb-2">// CONTACTO</p>
        <a href="mailto:hacklab.brickheads@gmail.com" class="text-[#189C3B] hover:text-white transition-colors font-mono text-sm">
          hacklab.brickheads@gmail.com
        </a>
      </div>
    </div>

    <SiteFooter />
  </div>
</template>
