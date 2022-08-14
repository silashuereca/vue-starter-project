import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../pages/HomePage.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  // this always needs to be the last item in the array
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../pages/404Page.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
