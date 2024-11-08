<template>
  <section class="container mx-auto px-4 py-8">
    <h1 class="heading-1">All posts</h1>
    <div class="w-full h-[0.01rem] bg-black/10 mt-[32px] mb-[64px]" />
    <div class="space-y-[64px]">
      <PostCard
        v-for="(post, index) in posts"
        :key="index"
        :category="post.category"
        :title="post.title"
        :description="post.description"
        :imageUrl="post.imageUrl"
      />
    </div>
    <div class="w-full flex items-center justify-center gap-4 mt-[69px]">
      <button
        class="heading-4 opacity-50 hover:opacity-100 transition-all duration-300 ease-out hover:scale-[0.9]"
      >
        < Prev
      </button>
      <button
        class="heading-4 opacity-50 hover:opacity-100 transition-all duration-300 ease-out hover:scale-[0.9]"
      >
        Next >
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostCard from "./PostCard.vue";

export default defineComponent({
  components: {
    PostCard,
  },
  data() {
    return {
      posts: [
        {
          category: "Startup",
          title: "Design tips for designers that cover everything you need",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          imageUrl: "/Blog.png",
        },
        {
          category: "Business",
          title: "How to build rapport with your web design clients",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          imageUrl: "/Blog.png",
        },
        {
          category: "Startup",
          title: "Logo design trends to avoid in 2022",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          imageUrl: "/Blog.png",
        },
        {
          category: "Startup",
          title: "Logo design trends to avoid in 2022",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          imageUrl: "/Blog.png",
        },
        {
          category: "Startup",
          title: "Logo design trends to avoid in 2022",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          imageUrl: "/Blog.png",
        },
      ],
    };
  },
});
</script>

<style scoped>
/* Add any scoped styles here if necessary */
</style>
