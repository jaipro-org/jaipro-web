import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "@/shared/views/HomePage.vue";
import AuthRouter from "@/modules/auth/router";
import BackofficeRouter from "@/modules/backoffice/router";
import ClientRouter from "@/modules/client/router";
import SpecialistRouter from "@/modules/specialist/router";
import GeneralRouter from "@/modules/general/router";
import { encryptAuthStorage } from "@/utils/Storage"

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
    beforeEnter: (to: any, from: any, next: any) => {
      const authData: string = window.localStorage.getItem("@AUTH:security") || "";
      if (Boolean(authData)) {
        let data = encryptAuthStorage.decryptValue(authData)
        if (data.profileName === "CUSTOMER") next();
        else next({ name: 'home' });
      }
    },
    ...ClientRouter,
  },
  {
    path: "/especialista",
    beforeEnter: (to: any, from: any, next: any) => {
      const authData: string = window.localStorage.getItem("@AUTH:security") || "";
      if (Boolean(authData)) {
        let data = encryptAuthStorage.decryptValue(authData)
        if (data.profileName === "SPECIALIST") next();
        else next({ name: 'home' });
      }
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
