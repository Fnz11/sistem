<template>
  <Hero />
  <OurTeam />
  <Authors :is-twice="true" />
  <CTA />
</template>

<script setup lang="ts">
import Hero from "@/components/about/Hero.vue";
import OurTeam from "@/components/about/OurTeam.vue";
import CTA from "@/components/public/cta/CTA.vue";
import Authors from "@/components/home/authors/Authors.vue";
</script>
