<template>
  <div class="flex px-[80px] py-[80px]">
    <div class="flex px-[112px] py-[92px] bg-white-3">
      <!-- Section 1 (45%) -->
      <div class="w-full md:w-[40%] p-4 pr-[84px]">
        <div class="mb-4">
          <p class="cap-1 mb-2">Testimonials</p>
          <h2 class="heading-2 mb-4">What people say about our blog</h2>
          <p class="body-1 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>

      <!-- Section 2 (55%) -->
      <div
        class="w-full flex flex-col gap-[121px] pl-[96px] md:w-[60%] p-4 border-l-2 border-dark-2/20"
      >
        <h4 class="heading-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h4>
        <div class="flex items-center mb-4 justify-between">
          <div class="flex items-center justify-center">
            <img
              src="/Author1.png"
              alt="Author"
              class="w-[48px] h-[48px] rounded-full mr-4"
            />
            <div>
              <p class="heading-4">Jonathan Vallem</p>
              <p class="body-1">New york, USA</p>
            </div>
          </div>

          <div class="flex gap-[24px]">
            <div class="bg-white rounded-full aspect-square flex items-center justify-center p-[14px] hover:scale-[1.1] transition-all duration-300 ease-out">
              <img src="/ArrowLeft.png" alt="Arrow" class="w-[20px]" />
            </div>
            <div class="bg-dark-1 rounded-full aspect-square flex items-center justify-center p-[14px] hover:scale-[1.1] transition-all duration-300 ease-out">
              <img src="/ArrowRight.png" alt="Arrow" class="w-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>
