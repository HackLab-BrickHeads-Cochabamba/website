<script setup lang="ts">
usePublicPageSeo("/");
useSeoMeta({
  title: "HackLab BrickHeads — Espacio hacker en Cochabamba",
  description:
    "Espacio hacker de conocimiento abierto, experimentación y aprendizaje colectivo en el Proyecto mARTadero, Cochabamba.",
  ogTitle: "HackLab BrickHeads",
  ogDescription:
    "Espacio hacker de conocimiento abierto, experimentación y aprendizaje colectivo en Cochabamba.",
  ogType: "website",
});
</script>

<template>
  <div>
    <SiteHero />
    <LazySiteAbout hydrate-never />
    <LazySiteServices hydrate-never />
    <!-- <SiteBlog /> -->
    <LazySiteGallery hydrate-on-visible />
    <LazySiteContact hydrate-never />
    <SiteFooter />
  </div>
</template>
