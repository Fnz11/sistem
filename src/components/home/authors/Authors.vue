<template>
  <section
    class="px-[80px] mt-[128px] flex flex-col items-center justify-center w-full"
  >
    <h2 class="heading-2 mb-8">List of Authors</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
      <div
        v-for="(author, index) in authors"
        :key="index"
        class="px-[20px] py-[40px] bg-white-1 hover:bg-white-3"
      >
        <img
          :src="author.img"
          alt="Author"
          class="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h3 class="heading-3 text-center">{{ author.name }}</h3>
        <p class="body-2 text-center mb-6">{{ author.desc }}</p>
        <div class="flex justify-center space-x-4">
          <a
            v-for="(icon, idx) in author.socials"
            :key="idx"
            :href="icon.link"
            target="_blank"
          >
            <img
              :src="icon.img"
              alt="Social Icon"
              class="w-[1rem] h-[1rem] hover:brightness-[1.1] hover:scale-[1.1] transition-all duration-300 ease-out"
            />
          </a>
        </div>
      </div>
      <template v-if="isTwice">
        <div
          v-for="(author, index) in authors"
          :key="'twice-' + index"
          class="px-[20px] py-[40px] bg-white-1 hover:bg-white-3"
        >
          <img
            :src="author.img"
            alt="Author"
            class="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 class="heading-3 text-center">{{ author.name }}</h3>
          <p class="body-2 text-center mb-6">{{ author.desc }}</p>
          <div class="flex justify-center space-x-4">
            <a
              v-for="(icon, idx) in author.socials"
              :key="idx"
              :href="icon.link"
              target="_blank"
            >
              <img
                :src="icon.img"
                alt="Social Icon"
                class="w-[1rem] h-[1rem] hover:brightness-[1.1] hover:scale-[1.1] transition-all duration-300 ease-out"
              />
            </a>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults } from "vue";

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

const props = withDefaults(defineProps<{ isTwice: boolean }>(), {
  isTwice: false,
});

const authors = ref<Author[]>([
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
