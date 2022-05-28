export default {
  component: () =>
    import(
      /* webpackChunkName: "auth-layout" */ "@/modules/auth/layouts/AuthLayout.vue"
    ),
  children: [
    {
      path: "registrar",
      name: "register-specialist",
      meta: { layout: "basic-landing" },
      component: () =>
        import(
          /* webpackChunkName: "register-specialist" */ "@/modules/auth/views/RegisterSpecialist.vue"
        ),
    },
    {
      path: "login",
      name: "login",
      meta: { layout: "basic-landing" },
      component: () =>
        import(
          /* webpackChunkName: "register-specialist" */ "@/modules/auth/views/Login.vue"
        ),
    },
  ],
};
