<template>
  <nav
    class="flex items-center justify-between px-[112px] py-[1rem] bg-foreground text-background"
  >
    <a href="/" class="flex items-center">
      <img src="/Logo.svg" alt="Logo" class="h-[28px] mt-[-8px]" />
    </a>
    <div class="flex space-x-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </div>
    <a href="/contact">
      <Button class="rounded-full"> Contact Us </Button>
    </a>
  </nav>
</template>

<script setup lang="ts">
import NavLink from "../NavLink.vue";
import Button from "../../ui/button/Button.vue";
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>
