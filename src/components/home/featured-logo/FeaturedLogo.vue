<template>
  <section class="px-[80px] mt-[96px]">
    <div class="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
      <div class="col-span-1 md:col-span-1 text-center md:text-left">
        <p class="body-2">We are</p>
        <p class="heading-4">Featured In</p>
      </div>
      <div
        v-for="(logo, index) in logos"
        :key="index"
        class="col-span-1 flex justify-center"
      >
        <img :src="logo.src" :alt="logo.alt" class="h-[2rem]" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Logo {
  src: string;
  alt: string;
}

const logos = ref<Logo[]>([
  { src: "LogoIpsum1.png", alt: "Logo 1" },
  { src: "LogoIpsum1.png", alt: "Logo 2" },
  { src: "LogoIpsum1.png", alt: "Logo 3" },
  { src: "LogoIpsum1.png", alt: "Logo 4" },
  { src: "LogoIpsum1.png", alt: "Logo 5" },
]);
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>
