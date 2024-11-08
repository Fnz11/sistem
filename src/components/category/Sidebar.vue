<!-- components/Sidebar.vue -->
<template>
  <div class="w-[296px]">
    <!-- Categories Section -->
    <div class="bg-white p-6 mb-6">
      <h3 class="heading-3 mb-[30px]">Categories</h3>
      <ul>
        <li v-for="category in categories" :key="category" class="mb-[24px]">
          <button
            class="w-full h-[70px] flex items-center px-5 gap-[1rem] hover:bg-primary transition-all duration-300 ease-out heading-3 hover:text-white border border-dark-1/30"
          >
            <div
              class="bg-white-3 aspect-square size-[48px] rounded-md flex items-center justify-center"
            >
              <img
                src="/Rocket.svg"
                alt="Author"
                class="size-[23px] rounded-full"
              />
            </div>
            <span class="text-[20px]">
              {{ category }}
            </span>
          </button>
        </li>
      </ul>
    </div>

    <!-- Tags Section -->
    <div class="bg-white p-6">
      <h3 class="heading-3 mb-[30px]">All Tags</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-sm border border-dark-1/30 rounded-full px-6 py-2 cursor-pointer hover:bg-blue-600 hover:text-white transition"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      categories: ["Startup", "Business", "Economy", "Technology"],
      tags: [
        "Business",
        "Experience",
        "Screen",
        "Technology",
        "Marketing",
        "Life",
      ],
    };
  },
});
</script>
