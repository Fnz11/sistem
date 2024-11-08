<template>
  <router-link :to="to" class="nav-link">
    <slot></slot>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  to: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
.nav-link {
  @apply text-background text-[1rem] cursor-pointer hover:scale-[1.05] hover:text-secondary transition-all duration-300 ease-out;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavLink",
});
</script>
