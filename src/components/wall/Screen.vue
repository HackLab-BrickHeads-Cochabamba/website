<script setup lang="ts">
import { Maximize, Minimize, Pause, Play, QrCode, X } from 'lucide-vue-next'
import { socialLinks } from '~/data/social-links'
import qrTargets from '~/data/wall-qr.json'

const phrases = [
  'Una idea en la mesa. Un cable. A ver qué pasa.',
  '¿Cómo lo hiciste? Acercá una silla y probemos juntos.',
  'El conocimiento crece cuando lo compartimos.',
  'Traé tu curiosidad. Lo demás lo aprendemos juntos.',
]
const wall = useTemplateRef<HTMLElement>('wall')
const dialog = useTemplateRef<HTMLDialogElement>('dialog')
const qrButton = useTemplateRef<HTMLButtonElement>('qrButton')
const paused = ref(true)
const hidden = ref(false)
const panelOpen = ref(false)
const phraseIndex = ref(0)
const time = ref('')
const fullscreen = ref(false)
const canFullscreen = ref(false)
const status = ref('')
const selected = ref('community')
const shortcutsEnabled = ref(true)
const running = computed(() => !paused.value && !hidden.value && !panelOpen.value)
const channels = [
  { id: 'community', name: 'Todas las redes', href: qrTargets.community },
  ...socialLinks.map(link => ({ id: link.icon, name: link.name, href: link.href })),
]
const current = computed(() => channels.find(link => link.id === selected.value) ?? channels[0]!)
let preference: MediaQueryList | undefined
let clockTimer: ReturnType<typeof setInterval> | undefined
const formatter = new Intl.DateTimeFormat('es-BO', {
  timeZone: 'America/La_Paz', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
})
const syncMotion = () => { paused.value = preference?.matches ?? true }
const syncVisibility = () => { hidden.value = document.hidden }
const syncFullscreen = () => { fullscreen.value = document.fullscreenElement === wall.value }

watch(running, (active, _, cleanup) => {
  if (!active) return
  const interval = setInterval(() => { phraseIndex.value = (phraseIndex.value + 1) % phrases.length }, 16000)
  cleanup(() => clearInterval(interval))
})

function openPanel() {
  if (!dialog.value || panelOpen.value) return
  dialog.value.showModal()
  panelOpen.value = true
}
function closePanel() { dialog.value?.close() }
function onClose() {
  panelOpen.value = false
  qrButton.value?.focus()
}
function onKey(event: KeyboardEvent) {
  if (!shortcutsEnabled.value) return
  if (event.ctrlKey || event.altKey || event.metaKey || event.repeat) return
  const target = event.target as HTMLElement | null
  if (target?.closest('input, textarea, select, [contenteditable="true"]')) return
  if (event.key.toLowerCase() === 'r') {
    event.preventDefault()
    if (panelOpen.value) closePanel()
    else openPanel()
  }
}
async function toggleFullscreen() {
  status.value = ''
  try {
    if (document.fullscreenElement) await document.exitFullscreen()
    else await wall.value?.requestFullscreen()
  } catch { status.value = 'No se pudo abrir pantalla completa en este navegador.' }
}

onMounted(() => {
  try { shortcutsEnabled.value = localStorage.getItem('hacklab.wall.shortcut') !== 'off' } catch { /* Preference is optional. */ }
  preference = matchMedia('(prefers-reduced-motion: reduce)')
  syncMotion()
  syncVisibility()
  syncFullscreen()
  canFullscreen.value = Boolean(document.fullscreenEnabled)
  const tick = () => { time.value = formatter.format(new Date()) }
  tick()
  clockTimer = setInterval(tick, 15000)
  preference.addEventListener('change', syncMotion)
  document.addEventListener('visibilitychange', syncVisibility)
  document.addEventListener('fullscreenchange', syncFullscreen)
  window.addEventListener('keydown', onKey)
})
watch(shortcutsEnabled, enabled => {
  try { localStorage.setItem('hacklab.wall.shortcut', enabled ? 'on' : 'off') } catch { /* Keep the current-session preference. */ }
})
onBeforeUnmount(() => {
  clearInterval(clockTimer)
  preference?.removeEventListener('change', syncMotion)
  document.removeEventListener('visibilitychange', syncVisibility)
  document.removeEventListener('fullscreenchange', syncFullscreen)
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <main ref="wall" class="experiment" :style="{ '--wall-motion': running ? 'running' : 'paused' }">
    <header class="topline">
      <NuxtLink to="/" class="brand" aria-label="HackLab BrickHeads — Inicio">
        <NuxtImg src="/images/letters_white.png" alt="" width="180" height="45" format="png" densities="1x 2x" />
      </NuxtLink>
      <div class="place"><span>Cochabamba, Bolivia</span><time :datetime="time || undefined">{{ time || '––:––' }}</time></div>
    </header>

    <h1 class="sr-only">HackLab BrickHeads — Conocimiento abierto</h1>
    <section class="animation-stage" aria-label="Animación ambiental del HackLab">
      <WallAnimation />
    </section>

    <div class="message"><span aria-hidden="true">&gt;</span><p>{{ phrases[phraseIndex] }}</p></div>
    <footer class="bottomline">
      <p class="location">// Proyecto mARTadero <span>· conocimiento abierto</span></p>
      <div class="tools">
        <button type="button" :aria-label="paused ? 'Reanudar animación' : 'Pausar animación'" @click="paused = !paused">
          <component :is="paused ? Play : Pause" aria-hidden="true" /><span>{{ paused ? 'Reanudar' : 'Pausa' }}</span>
        </button>
        <button ref="qrButton" type="button" aria-label="Redes y códigos QR" aria-haspopup="dialog" aria-controls="wall-socials" :aria-expanded="panelOpen" @click="openPanel">
          <QrCode aria-hidden="true" /><span>Redes / QR</span><kbd v-if="shortcutsEnabled">R</kbd>
        </button>
        <button v-if="canFullscreen" type="button" :aria-label="fullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'" @click="toggleFullscreen">
          <component :is="fullscreen ? Minimize : Maximize" aria-hidden="true" />
        </button>
      </div>
    </footer>
    <p v-if="status" role="status" class="fullscreen-status">{{ status }}</p>


    <dialog id="wall-socials" ref="dialog" class="social-panel" aria-labelledby="social-title" @close="onClose">
      <div class="panel-header">
        <div><p class="panel-label">// Sigamos en contacto</p><h2 id="social-title">Sumate al HackLab<span>.</span></h2></div>
        <button type="button" class="close" aria-label="Cerrar redes" @click="closePanel"><X aria-hidden="true" /></button>
      </div>
      <div class="panel-body">
        <div class="channel-list" role="group" aria-label="Elegir destino del QR">
          <button v-for="channel in channels" :key="channel.id" type="button" :aria-pressed="selected === channel.id" @click="selected = channel.id">
            <SiteSocialIcon v-if="channel.id !== 'community'" :name="channel.id as typeof socialLinks[number]['icon']" aria-hidden="true" />
            <QrCode v-else aria-hidden="true" />{{ channel.name }}<span aria-hidden="true">↗</span>
          </button>
        </div>
        <div class="qr-content">
          <p class="qr-name">{{ current.name }}</p>
          <img :src="`/images/qr/${current.id}.svg`" :alt="`QR para ${current.name}`" width="360" height="360" class="qr-image" />
          <a :href="current.href" target="_blank" rel="noopener noreferrer">{{ current.href.replace('https://', '') }}</a>
          <p class="scan-note">Escaneá y llevate un pedacito del HackLab.</p>
        </div>
      </div>
      <div class="panel-preferences">
        <label><input v-model="shortcutsEnabled" type="checkbox" /> Activar atajo de teclado R</label>
        <p class="panel-tip">{{ shortcutsEnabled ? 'R o Esc' : 'Esc' }} para volver al muro</p>
      </div>
    </dialog>
  </main>
</template>

<style scoped>
.experiment { --green:#189C3B; --wall-motion:paused; background:#2D2D2E; color:#fff; height:100svh; min-height:640px; display:flex; flex-direction:column; padding:0 clamp(1.1rem,4vw,4.5rem); isolation:isolate; }
.experiment:fullscreen { overflow-y:auto; }
.topline,.bottomline,.place,.tools,.tools button,.panel-header { display:flex; align-items:center; }
.topline,.bottomline { justify-content:space-between; gap:1rem; border-color:#ffffff20; }
.topline { padding:1.5rem 0; border-bottom:1px solid #ffffff20; }
.brand { width:clamp(8rem,13vw,12rem); display:block; }
.brand img { width:100%; height:auto; }
.place { gap:1.5rem; font-family:monospace; font-size:.75rem; text-transform:uppercase; letter-spacing:.12em; }
.place span { color:#ffffffa8; }.place time { font-size:1.4rem; font-variant-numeric:tabular-nums; }
.animation-stage { flex:1; height:0; min-height:0; display:grid; grid-template-rows:minmax(0,1fr); align-items:stretch; position:relative; margin:1rem 0; }
.message { display:flex; align-items:baseline; gap:1rem; min-height:3.5rem; padding:.5rem 0 1.25rem; font-size:clamp(1rem,1.6vw,1.5rem); }
.message>span { color:#20bc4a; font-family:monospace; }.message p { max-width:55ch; text-wrap:balance; }
.bottomline { border-top:1px solid #ffffff20; min-height:4rem; }
.location,.tools,.panel-label,.panel-tip,.qr-name { font-family:monospace; }.location { color:#ffffffa8; font-size:.72rem; text-transform:uppercase; letter-spacing:.07em; }
.tools { gap:.3rem; }.tools button { gap:.55rem; min-width:44px; min-height:44px; padding:.5rem .7rem; cursor:pointer; color:#ffffffb8; font-size:.78rem; }.tools svg { width:1rem;height:1rem; }.tools button:hover { color:#fff; background:#ffffff0a; }kbd { color:#ffffff70; font-size:.65rem; border:1px solid #ffffff30;padding:0 .25rem; }
button:focus-visible,a:focus-visible { outline:2px solid #20bc4a; outline-offset:4px; }
.fullscreen-status { font-size:.8rem; text-align:right; }
.social-panel { width:min(1000px,94vw); max-height:94svh; margin:auto; padding:clamp(1.1rem,3vw,2.5rem); overflow:auto; color:#fff; background:#2D2D2E; border:1px solid #ffffff40; }.social-panel::backdrop { background:#000c; }
.panel-header { justify-content:space-between; align-items:flex-start; gap:1rem; padding-bottom:1.5rem; border-bottom:1px solid #ffffff25; }.panel-label { color:#ffffffa8; font-size:.7rem; text-transform:uppercase; letter-spacing:.1em; }h2 { font-size:clamp(1.5rem,3vw,2.5rem); font-weight:600; margin-top:.4rem; }h2 span { color:var(--green); }.close { width:44px;height:44px;display:grid;place-items:center;cursor:pointer; }.close svg { width:20px; }
.panel-body { display:grid; grid-template-columns:1fr 1.3fr; gap:2rem; padding-top:1.5rem; }.channel-list { display:flex; flex-direction:column; }.channel-list button { display:flex; align-items:center; gap:.8rem; border-bottom:1px solid #ffffff20; padding:1rem .7rem; min-height:48px; cursor:pointer;text-align:left;font-size:.95rem; }.channel-list svg { width:18px;height:18px; }.channel-list button>span { margin-left:auto; }.channel-list button[aria-pressed=true] { background:#189c3b;color:#000; }.channel-list button:hover:not([aria-pressed=true]) { background:#ffffff08; }
.qr-content { text-align:center; min-width:0; }.qr-name { font-size:.8rem;text-transform:uppercase;letter-spacing:.1em; margin-bottom:.8rem; }.qr-image { width:min(100%,360px);height:auto;aspect-ratio:1; background:#fff;margin:0 auto;image-rendering:pixelated; }.qr-content a { display:block;overflow-wrap:anywhere;font-size:.85rem;margin:.8rem auto; max-width:40ch;color:#fff; }.scan-note { font-size:.85rem;color:#ffffffb8; }.panel-tip { color:#ffffff80;font-size:.65rem;text-align:right;margin-top:1.5rem; }
.panel-preferences { display:flex; flex-wrap:wrap; justify-content:space-between; gap:.5rem 1.5rem; margin-top:1rem; align-items:center; }.panel-preferences label { display:flex; gap:.6rem; align-items:center; min-height:44px; font: .75rem ui-monospace,monospace; color:#ffffffb8; cursor:pointer; }.panel-preferences input { width:18px; height:18px; accent-color:#189C3B; }.panel-preferences input:focus-visible { outline:2px solid #20BC4A; outline-offset:4px; }.panel-preferences .panel-tip { margin-top:0; }
@media(max-width:640px) { .topline { padding:1rem 0; }.place { flex-direction:column-reverse;align-items:flex-end;gap:.3rem;font-size:.58rem; }.place time { font-size:1.1rem; }.animation-stage { height:0;min-height:0; }.message { min-height:5rem;font-size:1rem; }.location { max-width:16ch;line-height:1.6; }.location span { display:none; }.tools button>span,.tools kbd { display:none; }.panel-body { grid-template-columns:1fr;gap:1.1rem; }.channel-list { display:grid;grid-template-columns:1fr 1fr;gap:.2rem; }.channel-list button { font-size:.8rem;padding:.6rem .4rem;gap:.4rem; }.channel-list button>span { display:none; }.qr-image { width:min(100%,260px); }.social-panel { max-height:95svh; }.panel-header { padding-bottom:1rem; } }
@media(orientation:landscape) and (max-height:550px) { .experiment { min-height:360px; } .topline { padding:.6rem 0; }.brand { width:7rem; }.animation-stage { height:0;min-height:0;margin:0; }.message { min-height:2rem;padding:.3rem 0;font-size:.9rem; }.bottomline { min-height:3rem; }.panel-body { grid-template-columns:1fr 1fr; }.qr-image { max-width:220px; } }
</style>
