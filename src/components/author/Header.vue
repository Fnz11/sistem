<template>
  <div class="py-[128px] bg-white-2 flex flex-col items-center justify-center relative">
    <div class="w-[66%] mx-auto">
      <div class="flex items-center gap-[32px]">
        <!-- Profile Image -->
        <div class="w-[251px] h-[294px]">
          <img
            :src="authorDetails.imageUrl"
            :alt="authorDetails.imageUrl"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Text Content -->
        <div class="flex flex-col w-[95%]">
          <h1 class="heading-1">
            Hey there, I’m Andrew Jonhson and welcome to my Blog
          </h1>
          <p class="body-1">
            {{ authorDetails.description }}
          </p>

          <!-- Social Links -->
          <div class="flex gap-4 mt-4">
            <a
              v-for="(link, index) in socialLinks"
              :key="index"
              :href="link.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                :src="link.img"
                alt="Social Icon"
                class="w-[1rem] h-[1rem] hover:brightness-[1.1] hover:scale-[1.1] transition-all duration-300 ease-out"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[66%] h-[24px] bg-secondary absolute bottom-0"/>
  </div>
</template>

<script setup lang="ts">
interface SocialLink {
  link: string;
  img: any;
}

interface AuthorDetails {
  imageUrl: string;
  description: string;
}

// Author details can be passed as props or managed in state
const authorDetails: AuthorDetails = {
  imageUrl: "/Author2.png",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
};

// Social media links
const socialLinks: SocialLink[] = [
  { img: "/facebook.svg", link: "https://facebook.com" },
  { img: "/twitter.svg", link: "https://twitter.com" },
  { img: "/instagram.svg", link: "https://instagram.com" },
  { img: "/linkedin.svg", link: "https://linkedin.com" },
];
</script>
