<template>
  <div class="spool" role="img" aria-label="HackLab BrickHeads">
    <svg
      v-for="end in ['inlet', 'outlet']"
      :key="end"
      :class="['lead', end]"
      viewBox="0 0 168 36"
      fill="none"
      aria-hidden="true"
    >
      <path class="wire" d="M1 32h47l27-27h84" />
      <path class="packet" d="M1 32h47l27-27h84" pathLength="100" />
      <circle cx="163" cy="5" r="4" />
    </svg>

    <div class="marks" aria-hidden="true">
      <NuxtImg
        src="/images/heads_white.png"
        alt=""
        width="944"
        height="950"
        format="png"
        densities="1x"
        sizes="64vw sm:480px lg:640px"
        loading="eager"
        fetchpriority="high"
        class="heads"
      />
      <div class="name">
        <NuxtImg
          v-for="half in ['upper', 'lower']"
          :key="half"
          :class="['strip', half]"
          src="/images/letters_white.png"
          alt=""
          width="1440"
          height="360"
          format="png"
          densities="1x"
          sizes="64vw sm:480px lg:850px"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.spool {
  container-type: size;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 0;
  color: #189C3B;
}
.marks {
  display: grid;
  place-items: center;
  position: absolute;
  inset: 0;
  animation: drift 13s ease-in-out infinite;
}
.heads, .name {
  grid-area: 1 / 1;
}
.heads {
  width: min(64cqw, 74cqh);
  height: auto;
  animation: dock 26s ease-in-out infinite;
}
.name {
  width: min(64cqw, 160cqh);
  display: grid;
  transform: translateX(9cqw);
}
.strip {
  grid-area: 1 / 1;
  width: 100%;
  height: auto;
  animation: assemble 26s ease-in-out infinite;
}
/* The space between the two printed lines sits at 58% of the PNG. */
.upper {
  --arrival: 18cqw;
  --exit: -9cqw;
  clip-path: inset(0 0 42% 0);
}
.lower {
  --arrival: -16cqw;
  --exit: 12cqw;
  clip-path: inset(58% 0 0 0);
  animation-delay: 0.6s;
  animation-fill-mode: backwards;
}
.lead {
  position: absolute;
  width: min(20cqw, 39cqh);
  overflow: visible;
  stroke: currentColor;
  stroke-width: 1.5;
}
.inlet { top: 16%; left: 4%; }
.outlet { bottom: 16%; right: 4%; transform: rotate(180deg); }
.wire, .lead circle { opacity: 0.42; }
.packet {
  stroke-width: 2.4;
  stroke-dasharray: 8 110;
  animation: transmit 4.7s linear infinite;
}
.outlet .packet { animation-delay: -2.35s; }
.spool :is(.marks, .heads, .strip, .packet) {
  animation-play-state: var(--wall-motion, paused);
}

@keyframes drift {
  0%, 100% { transform: translate(-1cqw, 1.5cqh); }
  50% { transform: translate(1cqw, -1.5cqh); }
}
@keyframes dock {
  0%, 100% { transform: translate(-2cqw, 1cqh) rotate(-5deg); }
  18% { transform: translate(5cqw, -2cqh) rotate(9deg) scale(1.03); }
  34% { transform: translate(-1cqw, 1cqh) rotate(-3deg) scale(0.95); }
  45%, 74% { transform: translateX(-33cqw) rotate(0deg) scale(0.26); }
  83% { transform: translate(-26cqw, -4cqh) rotate(-12deg) scale(0.34); }
  92% { transform: translate(0, 2cqh) rotate(6deg) scale(0.94); }
}
@keyframes assemble {
  0%, 38%, 100% { opacity: 0; transform: translateX(var(--arrival)); }
  49%, 73% { opacity: 1; transform: translateX(0); }
  83%, 94% { opacity: 0; transform: translateX(var(--exit)); }
}
@keyframes transmit {
  from { stroke-dashoffset: 8; }
  to { stroke-dashoffset: -110; }
}
@media (prefers-reduced-motion: reduce) {
  .spool :is(.marks, .heads, .strip, .packet) { animation: none; }
  .heads { transform: translateX(-33cqw) scale(0.26); }
  .packet { visibility: hidden; }
}
</style>
