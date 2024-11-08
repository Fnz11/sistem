<template>
  <section class="container mx-auto px-4 py-8 pb-[64px] border-b">
    <h2 class="heading-2 mb-[64px]">What to read next</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <a
        v-for="(post, index) in posts"
        :key="index"
        href="/blog-post"
        class="overflow-hidden"
      >
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-[318px] object-cover"
        />
        <div class="p-4">
          <p class="label-1 mb-1">
            By
            <span class="text-secondary">
              {{ post.author }}
            </span>
            | {{ post.date }}
          </p>
          <h3 class="heading-3">
            {{ post.title }}
          </h3>
          <p class="body-1">
            {{ post.excerpt }}
          </p>
        </div>
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      posts: [
        {
          author: "John Doe",
          date: "Aug 23, 2021",
          title:
            "A UX Case Study Creating a Studious Environment for Students:",
          excerpt:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          image: "/Blog.png", // Replace with actual image URLs
        },
        {
          author: "John Doe",
          date: "Aug 23, 2021",
          title:
            "A UX Case Study Creating a Studious Environment for Students:",
          excerpt:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          image: "/Blog.png",
        },
        {
          author: "John Doe",
          date: "Aug 23, 2021",
          title:
            "A UX Case Study Creating a Studious Environment for Students:",
          excerpt:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          image: "/Blog.png",
        },
      ],
    };
  },
});
</script> 