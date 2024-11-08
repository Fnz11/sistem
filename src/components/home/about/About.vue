<template>
  <section class="px-[80px] mt-[128px] mb-[128px]">
    <div class="w-full flex flex-col">
        <div class="h-[23px] flex justify-end w-full">
        <div class="h-full w-[50%] bg-secondary"/>
        <div class="h-full w-[30%] bg-primary"/>

        </div>
      <div class="w-full flex bg-white-2 flex-wrap px-[80px] py-[96px]">
        <!-- Section 1 (50%) -->
        <div class="w-full md:w-1/2 p-4">
          <div class="mb-4">
            <p class="cap-1 mb-[24px]">ABOUT US</p>
            <h1 class="heading-2 mb-4">
              We are a community of <br />
              content writers who share their learnings
            </h1>
            <p class="mb-4 body-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h1 class="link-2">Read More ></h1>
          </div>
        </div>

        <!-- Section 2 (50%) -->
        <div class="w-full md:w-1/2 p-4">
          <div class="mb-4">
            <p class="cap-1 mb-[24px]">Our mision</p>
            <h1 class="heading-3 mb-4">
              Creating valuable content for creatives all around the world
            </h1>
            <p class="mb-4 body-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
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
