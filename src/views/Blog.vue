<template>
  <section>
    <FeaturedPost />
    <AllPosts />
    <Category header-position="left" />
    <CTA/>
  </section>
</template>

<script setup lang="ts">
import FeaturedPost from "@/components/blog/featured-post/FeaturedPost.vue";
import AllPosts from "@/components/blog/featured-post/AllPosts.vue";
import Category from "@/components/home/category/Category.vue";
import CTA from "@/components/public/cta/CTA.vue";
</script>
