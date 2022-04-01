import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome-introduction",
      component: () => import("../views/WelcomeIntroductionView.vue"),
    },
    {
      path: "/create-password",
      name: "create-password",
      component: () => import("../views/CreatePasswordView.vue"),
    },
  ],
});

export default router;
