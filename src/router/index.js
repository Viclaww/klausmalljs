import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact-us",
      name: "contact",
      component: () => import("../views/ContactUs.vue"),
    },
    {
      path: "/hamper-collections",
      name: "hamper",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HamperView.vue"),
    },
    {
      path: "/groceries",
      name: "groceries",
      component: () => import("../views/GroceriesView.vue"),
    },
  ],
});

export default router;
