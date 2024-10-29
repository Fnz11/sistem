import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/blog", component: Blog },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/privacy-policy", component: PrivacyPolicy },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
