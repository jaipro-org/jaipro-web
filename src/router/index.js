import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "landing",
      meta: { layout: "master-landing" },
      component: () =>
        import ("../views/landing"),
    },
    {
      path: "/search-page",
      name: "search-page",
      meta: { layout: "master-search-page" },
      component: () =>
        import ("../views/search-page"),
    },
  ],
});

export default router;
