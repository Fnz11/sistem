<template>
  <div class="relative bg-center h-[720px] overflow-hidden">
    <img
      src="/HeroCover.png"
      class="absolute size-full object-cover top-0 left-0 z-[0]"
      alt=""
    />
    <div
      class="relative z-10 flex flex-col justify-center h-full p-8 text-white max-w-5xl"
    >
      <p class="mb-2 cap-1">
        Posted on
        <span class="font-bold"> startup </span>
      </p>
      <h1 class="text-[56px] font-bold mb-4 leading-[4.5rem]">
        Step-by-step guide to choosing great font pairs
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
        dolore eu <br />
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
      </p>
      <Button class="w-fit"> Read More > </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
</script>
