<template>
  <div class="flex flex-col md:flex-row items-start gap-4 w-5/6">
    <img
      :src="imageUrl"
      alt="Post image"
      class="w-full md:w-[490px] h-[318px] object-cover"
    />
    <div class="md:w-2/3">
      <span
        class="cap-1 text-secondary"
        >{{ category }}</span
      >
      <h2 class="heading-2 mb-[1rem] mt-[20px]">{{ title }}</h2>
      <p class="body-1">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    category: {
      type: String as PropType<string>,
      required: true,
    },
    title: {
      type: String as PropType<string>,
      required: true,
    },
    description: {
      type: String as PropType<string>,
      required: true,
    },
    imageUrl: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style scoped>
/* Add any scoped styles here if necessary */
</style>
