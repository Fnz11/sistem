<template>
  <section class="container mx-auto px-4 py-[128px] space-y-[128px]">
    <!-- Our Team of Creatives Section -->
    <div class="grid md:grid-cols-2 gap-[120px] items-center">
      <!-- Text Content -->
      <div class="space-y-4">
        <h3 class="heading-2">Our team of creatives</h3>
        <p class="heading-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <p class="body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </div>
      <!-- Image with Decoration -->
      <div class="relative">
        <div
          class="absolute -left-[50px] top-[114px] rounded-tl-[3rem] w-[103px] h-[116px] bg-blue-500"
        ></div>
        <img
          src="/Post1.png"
          alt="Team hands"
        class="w-full h-[480px]"
        />
      </div>
    </div>

    <!-- Why We Started This Blog Section -->
    <div class="grid md:grid-cols-2 gap-[120px] items-center">
      <!-- Image with Decoration -->
      <div class="relative">
        <img
          src="/Post1.png"
          alt="People on stairs"
        class="w-full h-[480px]"
        />
        <div
          class="absolute bottom-[-35px] left-[100px] size-[74px] bg-secondary rounded-full"
        ></div>
      </div>
      <!-- Text Content -->
      <div class="space-y-4">
        <h3 class="heading-2">Why we started this Blog</h3>
        <p class="heading-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <p class="body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OurTeam",
});
</script>

<style scoped>
/* Additional styling if needed */
</style>
