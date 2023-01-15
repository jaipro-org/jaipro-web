export default {
  component: () =>
    import(
      /* webpackChunkName: "auth-layout" */ "@/modules/auth/layouts/AuthLayout.vue"
    ),
  children: [
    {
      path: "tipo-registro",
      name: "register-type",
      meta: { layout: "basic-landing" },
      component: () =>
        import(
          /* webpackChunkName: "register-type" */ "@/modules/auth/views/RegisterType.vue"
        ),
    },
    {
      path: "registro-especialista",
      name: "register-specialist",
      meta: { layout: "basic-landing" },
      component: () =>
        import(
          /* webpackChunkName: "register-specialist" */ "@/modules/auth/views/RegisterSpecialist.vue"
        ),
    },
    {
      path: "registro-cliente",
      name: "register-client",
      meta: { layout: "basic-landing" },
      component: () =>
        import(
          /* webpackChunkName: "register-client" */ "@/modules/auth/views/RegisterClient.vue"
        ),
    },
    {
      path: "login",
      name: "login",
      meta: { layout: "basic-landing" },
      component: () =>
        import(
          /* webpackChunkName: "login" */ "@/modules/auth/views/Login.vue"
        ),
    },
    {
      path: "recuperar-password",
      name: "forgot-password",
      meta: { layout: "basic-landing" },
      component: () =>
        import(
          /* webpackChunkName: "forgot-password" */ "@/modules/auth/views/ForgotPassword.vue"
        ),
    },
  ],
}
