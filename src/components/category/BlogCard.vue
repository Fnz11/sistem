<!-- components/BlogCard.vue -->
<template>
  <div class="flex items-center justify-center mb-6 gap-[32px] bg-white">
    <img
      class="w-[294px] h-[312px] object-cover"
      :src="post.img"
      alt="blog image"
    />
    <div class="p-4">
      <p class="cap-1 text-secondary">
        {{ post.category }}
      </p>
      <h2 class="heading-2">{{ post.title }}</h2>
      <p class="body-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
        enim nec.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Post {
  id: number;
  title: string;
  img: string;
  category: string;
}

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
});
</script>
