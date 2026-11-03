<template>
  <footer class="border-t border-white/10 bg-black">
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div class="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <NuxtImg
            src="/images/letters_white.png"
            alt="HackLab BrickHeads"
            width="256"
            height="64"
            format="webp"
            sizes="128px"
            class="h-7 w-auto object-contain"
          />
          <p class="mt-4 max-w-sm font-mono text-xs leading-relaxed text-white/60">
            // Conocimiento libre, tecnología abierta, sociedad mejor
          </p>
        </div>

        <nav
          class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-white/60"
          aria-label="Enlaces del sitio"
        >
          <NuxtLink to="/" class="transition-colors hover:text-[#189C3B]">
            Inicio
          </NuxtLink>
          <NuxtLink to="/socials" class="transition-colors hover:text-[#189C3B]">
            Redes
          </NuxtLink>
          <NuxtLink
            to="/descargas"
            class="transition-colors hover:text-[#189C3B]"
          >
            Descargas
          </NuxtLink>
          <a
            href="mailto:hacklab.brickheads@gmail.com"
            class="transition-colors hover:text-[#189C3B]"
          >
            Email
          </a>
        </nav>
      </div>

      <div
        class="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 font-mono text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© 2026 HackLab BrickHeads Cochabamba</p>
        <p>
          <span class="text-[#189C3B]">{</span>
          Hecho con código abierto
          <span class="text-[#189C3B]">}</span>
        </p>
      </div>
    </div>
  </footer>
</template>
