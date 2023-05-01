import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "@/shared/views/HomePage.vue";
import AuthRouter from "@/modules/auth/router";
import BackofficeRouter from "@/modules/backoffice/router";
import ClientRouter from "@/modules/client/router";
import SpecialistRouter from "@/modules/specialist/router";
import GeneralRouter from "@/modules/general/router";

import store from "@/modules/auth/store/state"


const myPageRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
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
    path: "/general",
    meta: { layout: "master-landing" },
    ...GeneralRouter,
  },
  {
    path: "/backoffice",
    meta: { layout: "master-landing" },
    ...BackofficeRouter,
  },
  {
    path: "/cliente",
    beforeEnter: async (to: any, from: any, next: any) => {
      const state = store()
      const userType = await state.security.profileName === "CUSTOMER";
      console.log(userType)
      if (userType) next();
      else next({ name: '' });
    },
    ...ClientRouter,
  },
  {
    path: "/especialista",
    beforeEnter: async (to: any, from: any, next: any) => {
      const state = store()
      const userType = await state.security.profileName === "SPECIALIST";
      console.log(userType)
      if (userType) next();
      else next({ name: '' });
    },
    meta: { layout: "master-landing" },
    ...SpecialistRouter,
  },
  // {
  //   path: "/",
  //   redirect: { name: "home" },
  // },
  {
    //Cualquier ruta que no coincida con las definidas previamente
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /* webpackChunkName: "not-page-found"*/ "@/shared/views/NotFoundPage.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myPageRoutes,
});

export default router;
