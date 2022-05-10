import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/shared/views/HomePage.vue";
import AuthRouter from "@/modules/auth/router";
import BackofficeRouter from "@/modules/backoffice/router";
import ClientRouter from "@/modules/client/router";
import SpecialistRouter from "@/modules/specialist/router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    name: "home",
    meta: { layout: "master-landing" },
    component: Home,
  },
  {
    path: "/auth",
    meta: { layout: "master-landing" },
    ...AuthRouter,
  },
  {
    path: "/backoffice",
    meta: { layout: "master-landing" },
    ...BackofficeRouter,
  },
  {
    path: "/cliente",
    ...ClientRouter,
  },
  {
    path: "/especialista",
    meta: { layout: "master-landing" },
    ...SpecialistRouter,
  },
  {
    path: "/",
    redirect: { name: "home" },
  },
  {
    //Cualquier ruta que no coincida con las definidas previamente
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /* webpackChunkName: "not-page-found"*/ "@/shared/views/NotFoundPage.vue"
      ),
  },
  // {
  //   path: "/",
  //   name: "landing",
  //   meta: { layout: "master-landing" },
  //   component: () =>
  //     import ("../views/landing/Index.vue"),
  // },

  // {
  //   path: "/search-page",
  //   name: "search-page",
  //   meta: { layout: "master-landing" },
  //   component: () =>
  //     import ("../views/search-page/index.vue"),
  // },
  // {
  //   path: "/professional-profile",
  //   name: "professional-profile",
  //   meta: { layout: "master-landing" },
  //   component: () =>
  //     import ("../views/professional-profile"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
