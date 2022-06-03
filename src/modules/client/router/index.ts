export default {
  component: () =>
    import(
      /* webpackChunkName: "client-layout" */ "@/modules/client/layouts/ClientLayout.vue"
    ),
  children: [
    {
      path: "perfil",
      name: "client-profile",
      meta: { layout: "client-landing" },
      // meta: { layout: "client-landing" },
      component: () =>
        import(
          /* webpackChunkName: "client-profile" */ "@/modules/client/views/ProfilePage.vue"
        ),
    },
    {
      path: "nuevo-proyecto",
      name: "new-project",
      meta: { layout: "basic-landing" },
      component: () =>
        import(
          "@/modules/client/views/NewProject.vue"
        ),
    },
    {
      path: "/",
      redirect: { name: "client-profile" },
    },
  ],
};
