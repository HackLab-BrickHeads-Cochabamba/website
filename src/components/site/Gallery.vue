<script setup lang="ts">
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-vue-next'
import photos from '~/data/gallery.json'

const dialog = useTemplateRef<HTMLDialogElement>('viewer')
const activeIndex = ref<number | null>(null)
const current = computed(() => activeIndex.value === null ? null : photos[activeIndex.value]!)
let opener: HTMLButtonElement | null = null
let previousOverflow = ''
let scrollLocked = false
let pointer: { id: number; x: number; y: number } | null = null

async function openPhoto(id: string, event: MouseEvent) {
  if (dialog.value?.open) return
  opener = event.currentTarget as HTMLButtonElement
  activeIndex.value = photos.findIndex(photo => photo.id === id)
  await nextTick()
  if (!dialog.value) return
  dialog.value.showModal()
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  scrollLocked = true
}
function move(direction: number) {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + direction + photos.length) % photos.length
}
function onKey(event: KeyboardEvent) {
  if (event.altKey || event.ctrlKey || event.metaKey) return
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault()
    move(event.key === 'ArrowLeft' ? -1 : 1)
  }
}
function releaseScroll() {
  if (!scrollLocked) return
  document.body.style.overflow = previousOverflow
  scrollLocked = false
}
function onClose() {
  releaseScroll()
  activeIndex.value = null
  pointer = null
  opener?.focus({ preventScroll: true })
}
function startSwipe(event: PointerEvent) {
  if (!event.isPrimary || event.button !== 0 || (event.target as HTMLElement).closest('button')) return
  pointer = { id: event.pointerId, x: event.clientX, y: event.clientY }
  ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
}
function endSwipe(event: PointerEvent) {
  if (!pointer || pointer.id !== event.pointerId) return
  const x = event.clientX - pointer.x
  const y = event.clientY - pointer.y
  pointer = null
  if (Math.abs(x) >= 55 && Math.abs(x) > Math.abs(y) * 1.4) move(x < 0 ? 1 : -1)
}
onBeforeUnmount(releaseScroll)
</script>

<template>
  <section id="gallery" class="relative bg-black py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SiteSectionHeader label="// Galería" title="Nuestro" highlight="Espacio" />
        <p class="max-w-sm font-mono text-sm text-white/60">
          <span class="text-[#189C3B]">&gt;</span> Proyectos, encuentros y momentos que construimos en comunidad
        </p>
      </div>

      <div class="mt-12">
        <p class="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">// Un recorrido por nuestra comunidad</p>
        <div class="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 lg:grid-cols-4">
          <figure v-for="photo in photos" :key="photo.id" class="min-w-0">
            <button type="button" :aria-label="`Ampliar: ${photo.title}`" aria-haspopup="dialog" aria-controls="gallery-viewer"
              class="gallery-thumbnail group relative block aspect-square w-full overflow-hidden bg-white/[0.03] text-left"
              @click="openPhoto(photo.id, $event)">
              <img :src="photo.thumbnail" :srcset="photo.srcset" sizes="(min-width: 1280px) 290px, (min-width: 1024px) 23vw, (min-width: 640px) 30vw, 44vw"
                :alt="photo.alt" :width="photo.thumbnailWidth" :height="photo.thumbnailWidth" loading="lazy" decoding="async"
                class="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105" />
              <span class="expand-mark absolute bottom-3 right-3 grid h-10 w-10 place-items-center border border-white/40 bg-[#2D2D2E]/90 text-white" aria-hidden="true"><Maximize2 class="h-4 w-4" /></span>
            </button>
            <figcaption class="mt-3">
              <p v-if="photo.dateLabel" class="mb-1 font-mono text-[10px] uppercase tracking-wider text-white/60">{{ photo.dateLabel }}</p>
              <p class="text-sm leading-snug text-white/90">{{ photo.title }}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <dialog id="gallery-viewer" ref="viewer" class="gallery-viewer" aria-labelledby="gallery-viewer-title" aria-describedby="gallery-viewer-caption" @close="onClose" @keydown="onKey">
      <div v-if="current" class="viewer-layout">
        <header class="viewer-header">
          <div class="min-w-0"><p class="viewer-eyebrow">// Galería · HackLab BrickHeads</p><h2 id="gallery-viewer-title">{{ current.title }}</h2></div>
          <button type="button" class="viewer-control close-control" aria-label="Cerrar visor" autofocus @click="dialog?.close()"><X aria-hidden="true" /></button>
        </header>
        <figure class="viewer-figure">
          <div class="viewer-image-stage" @pointerdown="startSwipe" @pointerup="endSwipe" @pointercancel="pointer = null" @lostpointercapture="pointer = null">
            <img :key="current.id" :src="current.image" :alt="current.alt" :width="current.width" :height="current.height" draggable="false" decoding="async" />
          </div>
          <figcaption id="gallery-viewer-caption" class="viewer-caption">
            <p v-if="current.dateLabel" class="viewer-date">{{ current.dateLabel }}</p>
            <p>{{ current.description }}</p>
          </figcaption>
        </figure>
        <footer class="viewer-footer">
          <div class="viewer-navigation">
            <button type="button" class="viewer-control" aria-label="Foto anterior" @click="move(-1)"><ArrowLeft aria-hidden="true" /></button>
            <p class="viewer-counter" aria-live="polite" aria-atomic="true">{{ activeIndex! + 1 }} / {{ photos.length }}<span class="sr-only"> · {{ current.title }}</span></p>
            <button type="button" class="viewer-control" aria-label="Foto siguiente" @click="move(1)"><ArrowRight aria-hidden="true" /></button>
          </div>
          <p class="viewer-hint">Flechas o deslizamiento para explorar · Esc para cerrar</p>
        </footer>
      </div>
    </dialog>
  </section>
</template>

<style scoped>
.gallery-thumbnail { cursor:zoom-in; }
.gallery-thumbnail:focus-visible,.viewer-control:focus-visible { outline:2px solid #20BC4A; outline-offset:4px; }
.gallery-thumbnail:hover .expand-mark { border-color:#20BC4A; }
.gallery-viewer { position:fixed; inset:0; width:100%; height:100%; height:100dvh; max-width:none; max-height:none; margin:0; padding:0; border:0; color:#fff; background:#2D2D2E; }
.gallery-viewer::backdrop { background:#000e; }
.viewer-layout { height:100%; display:flex; flex-direction:column; padding:0 clamp(1rem,3vw,3rem); }
.viewer-header { display:flex; justify-content:space-between; gap:1rem; align-items:center; padding:1rem 0; border-bottom:1px solid #ffffff25; }
.viewer-eyebrow,.viewer-date,.viewer-counter,.viewer-hint { font-family:ui-monospace,monospace; }
.viewer-eyebrow { color:#ffffffb3; font-size:.65rem; text-transform:uppercase; letter-spacing:.12em; }
.viewer-header h2 { font-size:clamp(1rem,2vw,1.65rem); line-height:1.3; margin-top:.3rem; font-weight:600; }
.viewer-control { min-width:48px; height:48px; display:grid; place-items:center; border:1px solid #ffffff40; cursor:pointer; flex-shrink:0; }
.viewer-control svg { width:20px; height:20px; }.viewer-control:hover { border-color:#20BC4A; background:#ffffff08; }
.viewer-figure { flex:1; min-height:0; display:flex; flex-direction:column; }
.viewer-image-stage { flex:1; min-height:0; display:grid; grid-template-rows:minmax(0,1fr); place-items:center; padding:1rem 0; touch-action:pan-y pinch-zoom; user-select:none; }
.viewer-image-stage img { width:100%; height:100%; min-height:0; object-fit:contain; }
.viewer-caption { max-height:24dvh; overflow-y:auto; padding:.2rem 0 1rem; color:#ffffffcf; font-size:clamp(.9rem,1.3vw,1.05rem); line-height:1.55; }
.viewer-date { font-size:.7rem; color:#ffffffa8; margin-bottom:.3rem; text-transform:uppercase; letter-spacing:.08em; }
.viewer-footer { display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:.6rem 1rem; border-top:1px solid #ffffff25; padding:.75rem 0; }
.viewer-navigation { display:flex; align-items:center; gap:1rem; }.viewer-counter { min-width:5ch; text-align:center; font-size:.8rem; }.viewer-hint { color:#ffffffa8; font-size:.65rem; }
@media(max-width:640px) { .viewer-header { padding:.8rem 0; }.viewer-caption { font-size:.88rem; max-height:25dvh; }.viewer-footer { justify-content:center; }.viewer-hint { width:100%; text-align:center; font-size:.6rem; }.viewer-image-stage { padding:.7rem 0; } }
@media(orientation:landscape) and (max-height:500px) { .viewer-header { padding:.4rem 0; }.viewer-header h2 { font-size:1rem; }.viewer-eyebrow,.viewer-hint { display:none; }.viewer-control { min-width:44px;height:44px; }.viewer-caption { max-height:22dvh; font-size:.78rem; padding-bottom:.3rem; }.viewer-footer { padding:.4rem 0; } }
</style>
