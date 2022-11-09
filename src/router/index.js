import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/landing" },
    {
      path: "/landing",
      name: "landing",
      component: () => import("../views/TheLanding.vue"),
    },
    {
      path: "/identify",
      name: "identify",
      component: () => import("../views/TheIdentify.vue"),
    },
    {
      path: "/questionnaire",
      name: "questionnaire",
      component: () => import("../views/TheQuestionnaire.vue"),
    },
    {
      path: "/vaccine",
      name: "vaccine",
      component: () => import("../views/TheVaccine.vue"),
    },
    {
      path: "/advices",
      name: "advices",
      component: () => import("../views/TheAdvices.vue"),
    },
    {
      path: "/thanks",
      name: "thanks",
      component: () => import("../views/TheThanks.vue"),
    },
  ],
});

export default router;
