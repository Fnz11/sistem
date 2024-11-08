<template>
  <section class="px-[80px] mt-[128px]">
    <div class="relative h-[705px] w-full flex items-end justify-end">
      <!-- Background Image -->
      <img
        src="/Post2.png"
        alt="Background"
        class="absolute inset-0 w-[949px] h-full object-cover"
      />

      <!-- Content on Top of the Image -->
      <div
        class="relative z-10 bg-white bg-opacity-90 p-[80px] pr-0 w-[706px] mt-20"
      >
        <p class="cap-1 mb-2">Why we started </p>
        <h1 class="heading-1 mb-4">It started out as a simple idea and evolved into our passion</h1>
        <p class="body-1 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <Button>Discover Out Story > </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>
