<script setup lang="ts">
useSeoMeta({
  title: "HackLab BrickHeads — Espacio hacker en Cochabamba",
  description:
    "Espacio hacker de conocimiento abierto, experimentación y aprendizaje colectivo en el Proyecto mARTadero, Cochabamba.",
  ogTitle: "HackLab BrickHeads",
  ogDescription:
    "Espacio hacker de conocimiento abierto, experimentación y aprendizaje colectivo en Cochabamba.",
  ogType: "website",
  twitterCard: "summary",
});
</script>

<template>
  <div>
    <SiteHero />
    <SiteAbout />
    <SiteServices />
    <!-- <SiteBlog /> -->
    <SiteGallery />
    <SiteContact />
    <SiteFooter />
  </div>
</template>
