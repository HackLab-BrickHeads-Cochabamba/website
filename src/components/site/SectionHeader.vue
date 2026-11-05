<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    title: string;
    highlight?: string;
    description?: string;
    align?: "left" | "center";
  }>(),
  { align: "left" },
);
</script>

<template>
  <div :class="align === 'center' ? 'text-center' : ''">
    <p class="font-mono text-xs uppercase tracking-[0.28em] text-[#189C3B]">
      {{ label }}
    </p>
    <h2
      :aria-label="highlight ? `${title} ${highlight}` : title"
      class="mt-4 flex flex-wrap items-baseline gap-x-[0.25em] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
      :class="align === 'center' ? 'justify-center' : ''"
    >
      <span>{{ title }}</span>
      <span v-if="highlight" class="text-[#189C3B]">{{ highlight }}</span>
    </h2>
    <p
      v-if="description"
      class="mt-4 font-mono text-sm text-white/60 sm:text-base"
    >
      {{ description }}
    </p>
  </div>
</template>
