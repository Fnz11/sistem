<template>
  <footer class="bg-foreground text-white px-[80px] py-[56px]">
    <!-- Layer 1: Navigation Links -->
    <div class="flex justify-between items-center mb-8">
      <h2 class="heading-3 mb-4">{Finsweet</h2>
      <div class="flex space-x-[24px] body-1">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
      </div>
    </div>

    <!-- Layer 2: Subscribe Box -->
    <div
      class="bg-[#2E3040] flex flex-col md:flex-row justify-between mb-8 py-[80px] px-[64px]"
    >
      <div class="mb-4 md:mb-0">
        <h3 class="heading-2">
          Subscribe to our newsletter to get <br />
          the latest updates and news
        </h3>
      </div>
      <div class="flex gap-2">
        <Input type="email" class="h-14 !py-0 placeholder:text-dark-1" placeholder="Enter your email" />
        <Button size="lg"> Subscribe </Button>
      </div>
    </div>

    <!-- Layer 3: Contact Info -->
    <div class="flex flex-col md:flex-row justify-between body-1">
      <div class="mb-4 md:mb-0">
        <p>Address: 123 Main Street, City, Country</p>
        <p>Email: contact@example.com</p>
      </div>
      <div class="flex space-x-6">
        <a href="https://facebook.com" target="_blank"
          ><img src="/facebook.svg" alt="Facebook" class="w-4 h-4 brightness-[150%]"
        /></a>
        <a href="https://twitter.com" target="_blank"
          ><img src="/twitter.svg" alt="Twitter" class="w-4 h-4 brightness-[150%]"
        /></a>
        <a href="https://instagram.com" target="_blank"
          ><img src="/instagram.svg" alt="Instagram" class="w-4 h-4 brightness-[150%]"
        /></a>
        <a href="https://linkedin.com" target="_blank"
          ><img src="/linkedin.svg" alt="LinkedIn" class="w-4 h-4 brightness-[150%]"
        /></a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import NavLink from "../NavLink.vue";
import Input from "../../ui/input/Input.vue";
import Button from "../../ui/button/Button.vue";
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>
