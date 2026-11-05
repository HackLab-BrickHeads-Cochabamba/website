<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const status = computed(() => {
  const value = Number(props.error.statusCode)
  return Number.isInteger(value) && value >= 400 && value <= 599 ? value : 500
})
const missing = computed(() => status.value === 404 || status.value === 410)
const unavailable = computed(() => status.value === 429 || status.value === 503)
const heading = computed(() => missing.value
  ? 'Esta dirección no está conectada.'
  : unavailable.value ? 'Necesitamos una pequeña pausa.' : 'Algo se desconectó por aquí.')
const description = computed(() => missing.value
  ? 'Puede que la página se haya movido o que el enlace esté incompleto. Volvamos al taller.'
  : unavailable.value
    ? 'El sitio no puede responder en este momento. Intenta de nuevo dentro de un rato.'
    : 'No pudimos cargar la página. Puedes intentarlo otra vez o volver al inicio.')

useHead({
  title: computed(() => `${status.value} — HackLab BrickHeads`),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
const goHome = () => clearError({ redirect: '/' })
const retry = () => window.location.reload()
</script>

<template>
  <main class="error-page">
    <header class="error-header">
      <a href="/" aria-label="HackLab BrickHeads — Inicio" @click.prevent="goHome">
        <img src="/images/letters_white.png" alt="HackLab BrickHeads" width="180" height="45" />
      </a>
      <span>// Cochabamba, Bolivia</span>
    </header>

    <section class="error-content" aria-labelledby="error-title">
      <p class="error-label">hacklab@brickheads:~$ <span>check_connection</span></p>
      <p class="error-code" aria-hidden="true">{{ status }}<span>_</span></p>
      <p class="error-label">// Error {{ status }}</p>
      <h1 id="error-title">{{ heading }}</h1>
      <p class="error-description">{{ description }}</p>
      <div class="error-actions">
        <a class="error-home" href="/" @click.prevent="goHome">Volver al inicio <span aria-hidden="true">↗</span></a>
        <button v-if="!missing" type="button" @click="retry">Intentar de nuevo <span aria-hidden="true">↻</span></button>
      </div>
    </section>

    <footer class="error-footer">
      <p>&gt; Seguimos aprendiendo, incluso cuando algo falla.</p>
      <a href="mailto:hacklab.brickheads@gmail.com">Avisanos del problema <span aria-hidden="true">↗</span></a>
    </footer>
  </main>
</template>

<style scoped>
.error-page { min-height:100svh; padding:0 clamp(1.25rem,5vw,5rem); background:#2D2D2E; color:#fff; display:flex; flex-direction:column; }
.error-header { display:flex; justify-content:space-between; align-items:center; gap:1.5rem; padding:1.5rem 0; border-bottom:1px solid #ffffff26; }
.error-header img { display:block; width:clamp(8rem,16vw,12rem); height:auto; }
.error-header>span,.error-label,.error-actions,.error-footer { font-family:ui-monospace,monospace; }
.error-header>span { color:#ffffffb3; font-size:.7rem; text-transform:uppercase; letter-spacing:.12em; text-align:right; }
.error-content { width:100%; max-width:72rem; margin:auto; padding:clamp(2.5rem,6vh,5rem) 0; }
.error-label { font-size:clamp(.7rem,1vw,.9rem); color:#ffffffb3; letter-spacing:.07em; }
.error-label>span { color:#fff; }
.error-code { font-size:clamp(6rem,19vw,15rem); line-height:1.1; letter-spacing:-.07em; font-weight:600; color:#189C3B; margin:.08em 0; }
.error-code>span { color:#fff; font-weight:400; }
h1 { max-width:20ch; font-size:clamp(1.8rem,4vw,3.5rem); font-weight:600; line-height:1.15; margin:.6rem 0 1rem; }
.error-description { max-width:52ch; color:#ffffffb3; line-height:1.65; font-size:clamp(1rem,1.4vw,1.15rem); }
.error-actions { display:flex; flex-wrap:wrap; gap:1rem 1.5rem; align-items:center; margin-top:2rem; font-size:.8rem; }
.error-actions a,.error-actions button { min-height:44px; display:inline-flex; gap:1rem; align-items:center; padding:.85rem 1.25rem; cursor:pointer; }
.error-home { background:#189C3B; color:#000; font-weight:700; }
.error-home:hover { background:#20BC4A; }
.error-actions button { border:1px solid #ffffff40; color:#fff; font-size:inherit; }
.error-actions button:hover { border-color:#20BC4A; }
a:focus-visible,button:focus-visible { outline:2px solid #20BC4A; outline-offset:5px; }
.error-footer { border-top:1px solid #ffffff26; padding:1.2rem 0; display:flex; justify-content:space-between; flex-wrap:wrap; gap:1rem; font-size:.72rem; line-height:1.6; color:#ffffffb3; }
.error-footer a { color:#fff; text-decoration:underline; text-underline-offset:4px; }
@media(max-width:480px) { .error-header>span { max-width:16ch; font-size:.6rem; }.error-content { padding:2rem 0 3rem; }.error-footer { flex-direction:column; } }
</style>
