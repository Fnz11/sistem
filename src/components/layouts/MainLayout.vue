<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./navbar/Navbar.vue";
import Footer from "./footer/Footer.vue";
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
});
</script>
