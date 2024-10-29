<template>
  <div class="flex flex-wrap px-[80px] mt-[50px]">
    <!-- Section 1 (60%) -->
    <div class="w-full md:w-3/5 p-4">
      <h2 class="heading-2">Featured Post</h2>
      <div class="border border-white-2 p-[2rem] gap-[1rem] flex flex-col mb-4">
        <img src="/Post1.png" alt="Featured" class="w-full h-[352px] object-cover mb-2" />
        <div class="flex items-center mb-2 mt-[1rem]">
          <span class="mr-2"
            >By
            <span class="text-secondary"> John Doe </span>
          </span>
          |
          <span class="ml-2">May 23, 2022</span>
        </div>
        <h3 class="heading-3 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </h3>
        <p class="mb-4 body-1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <Button class="w-fit"> Read More > </Button>
      </div>
    </div>

    <!-- Section 2 (40%) -->
    <div class="w-full md:w-2/5 p-4">
      <div class="flex justify-between items-center">
        <h2 class="heading-2">Other Posts</h2>
        <span class="text-secondary">View All</span>
      </div>
      <div v-for="(post, index) in posts" :key="index" class="mb-4 hover:bg-white-3 p-[32px] transition-colors ease-out duration-200 cursor-pointer">
        <div class="flex items-center mb-2">
          <span class="mr-2"
            >By
            <span class="text-secondary">
              {{ post.author }}
            </span>
          </span>
          |
          <span class="ml-2">{{ post.date }}</span>
        </div>
        <h3 class="heading-4">{{ post.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "@/components/ui/button/Button.vue";

interface Post {
  author: string;
  date: string;
  title: string;
}

const posts = ref<Post[]>([
  {
    author: "John Deo",
    date: "Aug 23, 2021",
    title: "8 Figma design systems that you can download for free today. ",
  },
  {
    author: "John Deo",
    date: "Aug 23, 2021",
    title: "8 Figma design systems that you can download for free today. ",
  },
  {
    author: "John Deo",
    date: "Aug 23, 2021",
    title: "8 Figma design systems that you can download for free today. ",
  },
  {
    author: "John Deo",
    date: "Aug 23, 2021",
    title: "8 Figma design systems that you can download for free today. ",
  },
]);
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>
