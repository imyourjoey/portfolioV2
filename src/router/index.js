// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Joey from "@/Joey.vue";
import LandingPage from "@/components/LandingPage/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
  },
  {
    path: "/joey",
    name: "Joey",
    component: Joey,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
