export default {
  component: () =>
    import(
      /* webpackChunkName: "auth-layout" */ "@/modules/auth/layouts/AuthLayout.vue"
    ),
  children: [
    {
      path: "registrar",
      name: "register-specialist",
      component: () =>
        import(
          /* webpackChunkName: "register-specialist" */ "@/modules/auth/views/RegisterSpecialist.vue"
        ),
    },
  ],
};
