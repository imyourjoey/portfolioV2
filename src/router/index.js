// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Joey from "@/Joey.vue";
import LandingPage from "@/components/LandingPage/index.vue";
import Education from "@/pages/Education/Index.vue";
import Experience from "@/pages/Experience/Index.vue";
import Project from "@/pages/Project/Index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
  },
  {
    path: "/edu",
    name: "Education",
    component: Education,
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
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
