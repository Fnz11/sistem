<template>
  <Header />
  <div class="min-h-screen my-[128px] px-[81px]">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Blog Section -->
      <div class="lg:col-span-2 flex flex-col gap-[32px]">
        <BlogCard v-for="post in posts" :key="post.id" :post="post" />
      </div>

      <!-- Sidebar Section -->
      <Sidebar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/category/Header.vue";
import BlogCard from "@/components/category/BlogCard.vue";
import Sidebar from "@/components/category/Sidebar.vue";

export default defineComponent({
  components: { BlogCard, Sidebar, Header },
  data() {
    return {
      posts: [
        {
          id: 1,
          img: "/Post1.png",
          title: "Top 6 free website mockup tools 2022",
          category: "Business",
        },
        {
          id: 2,
          img: "/Post1.png",
          title: "Step-by-step guide to choosing great font pairs",
          category: "Business",
        },
        {
          id: 3,
          img: "/Post1.png",
          title: "Ten free google fonts that you should use",
          category: "Business",
        },
        {
          id: 4,
          img: "/Post1.png",
          title: "Ten free google fonts that you should use",
          category: "Business",
        },
        {
          id: 4,
          img: "/Post1.png",
          title: "Ten free google fonts that you should use",
          category: "Business",
        },
      ],
    };
  },
});
</script>
