<template>
  <section class="container mx-auto px-4 py-12 relative">
    <div class="relative w-full h-[100vh] flex flex-col justify-end">
      <!-- About Us Section -->
      <div
        class="w-[92%] h-full absolute left-1/2 -translate-x-1/2 top-0 z-[100] flex flex-col items-center justify-start"
      >
        <div class="grid grid-cols-2 h-full w-full">
          <div class="flex flex-col justify-between h-full">
            <div class="bg-white p-[64px]">
              <p class="cap-3">About Us</p>
              <h2 class="heading-1 mt-[1rem]">
                We are a team of content writers who share their learnings
              </h2>
            </div>
            <div
              class="bg-blue-600 text-white px-[48px] py-[32px] flex justify-between"
            >
              <div class="text-center">
                <p class="display">12+</p>
                <p class="body-1 !text-white">Blogs Published</p>
              </div>
              <div class="text-center">
                <p class="display">18K+</p>
                <p class="body-1 !text-white">Views on Finsweet</p>
              </div>
              <div class="text-center">
                <p class="display">30K+</p>
                <p class="body-1 !text-white">Total active Users</p>
              </div>
            </div>
          </div>
          <p class="body-1 mb-auto p-[64px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="w-[78%] h-[23px] bg-secondary mr-auto" />
      </div>

      <!-- Image and Statistics Section -->
      <img src="/About2.png" alt="Team" class="w-full h-[444px] object-cover" />
    </div>

    <!-- Mission and Vision Section -->
    <div class="grid md:grid-cols-2 gap-8 text-center md:text-left bg-white-2 px-[108px] pb-[64px] pt-[128px]">
      <div class="space-y-4">
        <p class="cap-1">Our Mission</p>
        <h3 class="heading-3">
          Creating valuable content for <br/> creatives all around the world
        </h3>
        <p class="body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </p>
      </div>
      <div class="space-y-4">
        <p class="cap-1">Our Vision</p>
        <h3 class="heading-3">
          A platform that empowers <br/> individuals to improve
        </h3>
        <p class="body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutUsHero",
});
</script>

<style scoped>
/* Add any additional styling here if necessary */
</style>
