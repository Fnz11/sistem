<template>
  <section
    class="px-[80px] flex flex-col items-center justify-center w-full"
  >
    <h2 :class="['heading-2 mb-8', headerPosition === 'left' ? 'mr-auto' : '']">
      Choose a Category
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="p-[32px] h-[228px] border border-dark-1/30 hover:border-transparent hover:bg-primary hover:text-white-1 group transition-colors duration-300 ease-out"
      >
        <div
          class="bg-white-3 aspect-square size-[48px] rounded-md flex items-center justify-center"
        >
          <img
            src="/Rocket.svg"
            alt="Author"
            class="size-[23px] rounded-full"
          />
        </div>
        <h3 class="heading-3">{{ category.name }}</h3>
        <p
          class="body-1 group-hover:text-white-1 transition-colors duration-300 ease-out"
        >
          {{ category.desc }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

interface Social {
  img: string;
  link: string;
}

interface Author {
  img: string;
  name: string;
  desc: string;
  socials: Social[];
}

import { PropType } from "vue";

const props = defineProps({
  headerPosition: {
    type: String as PropType<"left" | "center">,
    default: "center",
  },
});

const categories = ref<Author[]>([
  {
    img: "/Author1.png",
    name: "Floyd Miles",
    desc: "Content Writer @Company",
    socials: [
      { img: "/facebook.svg", link: "https://facebook.com" },
      { img: "/twitter.svg", link: "https://twitter.com" },
      { img: "/instagram.svg", link: "https://instagram.com" },
      { img: "/linkedin.svg", link: "https://linkedin.com" },
    ],
  },
  {
    img: "/Author1.png",
    name: "Dianne Russell",
    desc: "Content Writer @Company",
    socials: [
      { img: "/facebook.svg", link: "https://facebook.com" },
      { img: "/twitter.svg", link: "https://twitter.com" },
      { img: "/instagram.svg", link: "https://instagram.com" },
      { img: "/linkedin.svg", link: "https://linkedin.com" },
    ],
  },
  {
    img: "/Author1.png",
    name: "Jenny Wilson",
    desc: "Content Writer @Company",
    socials: [
      { img: "/facebook.svg", link: "https://facebook.com" },
      { img: "/twitter.svg", link: "https://twitter.com" },
      { img: "/instagram.svg", link: "https://instagram.com" },
      { img: "/linkedin.svg", link: "https://linkedin.com" },
    ],
  },
  {
    img: "/Author1.png",
    name: "Leslie Alexander",
    desc: "Content Writer @Company",
    socials: [
      { img: "/facebook.svg", link: "https://facebook.com" },
      { img: "/twitter.svg", link: "https://twitter.com" },
      { img: "/instagram.svg", link: "https://instagram.com" },
      { img: "/linkedin.svg", link: "https://linkedin.com" },
    ],
  },
]);
</script>
