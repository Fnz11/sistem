<template>
  <div
    class="relative bg-center h-[519px] overflow-hidden bg-white-2 flex justify-between"
  >
    <div
      class="relative z-10 flex flex-col justify-center h-full p-8 max-w-5xl"
    >
      <p class="mb-2 cap-1">Featured Post</p>
      <h1 class="heading-2">
        Step-by-step guide to choosing great <br />
        font pairs
      </h1>
      <div class="flex items-center mb-4">
        <span class="mr-2"
          >By
          <span class="text-primary"> James West </span>
        </span>
        | <span class="ml-2">May 23, 2022</span>
      </div>
      <p class="mb-6 body-1">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat <br />
        nulla pariatur. Excepteur sint occaecat cupidatat non proident.
      </p>
      <Button class="w-fit"> Read More > </Button>
    </div>
    <div class="p-[80px]">
      <img src="/Post3.png" class="w-[515px] h-[359px]" alt="Post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
</script>
