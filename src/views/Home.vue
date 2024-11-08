<template>
  <section>
    <Hero />
    <Featured />
    <About />
    <Category />
    <SpecialPost />
    <Authors :isTwice="false" />
    <FeaturedLogo />
    <Testimonials />
    <CTA />
  </section>
</template>

<script setup lang="ts">
import Hero from "@/components/home/hero/Hero.vue";
import Featured from "@/components/home/featured/Featured.vue";
import About from "@/components/home/about/About.vue";
import Category from "@/components/home/category/Category.vue";
import SpecialPost from "@/components/home/special-post/SpecialPost.vue";
import Authors from "@/components/home/authors/Authors.vue";
import FeaturedLogo from "@/components/home/featured-logo/FeaturedLogo.vue";
import Testimonials from "@/components/home/testimonials/Testimonials.vue";
import CTA from "@/components/public/cta/CTA.vue"; 
</script>
