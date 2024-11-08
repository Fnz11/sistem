<!-- App.vue -->
<template>
  <div class="min-h-screen">
    <Header />
    <div class="px-[208px] py-[128px] mx-auto">
      <h2 class="heading-1">My Posts</h2>
      <div class="space-y-[64px] mt-[64px]">
        <PostCard
          v-for="(post, index) in posts"
          :key="index"
          :category="post.category"
          :title="post.title"
          :description="post.description"
          :imageUrl="post.imageUrl"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from "@/components/author/Header.vue";
import PostCard from "@/components/blog/featured-post/PostCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Header, PostCard },
  data() {
    return {
      posts: [
        {
          category: "BUSINESS",
          title: "Font sizes in UI design: The complete guide to follow",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          imageUrl: "/Blog.png",
        },
        {
          category: "ECONOMY",
          title: "How to build rapport with your web design clients",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          imageUrl: "/Blog.png",
        },
      ],
    };
  },
});
</script>
