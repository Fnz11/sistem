<template>
  <MainBlog />
  <RelatedPost />
  <CTA />
</template>

<script setup lang="ts">
import MainBlog from "@/components/BlogPost/MainBlog.vue";
import RelatedPost from "@/components/BlogPost/RelatedPost.vue";
import CTA from "@/components/public/cta/CTA.vue";
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
/* Add any scoped styles here if necessary */
</style>
