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
      path: "especialista",
      name: "client-especialist-profile",
      meta: { layout: "client-basic-landing" },
      component: () =>
        import(
          /* webpackChunkName: "client-especialist-profile" */ "@/modules/client/views/SpecialistProfile.vue"
        ),
    },
    {
      path: "detalle-proyecto",
      name: "project-detail",
      meta: { layout: "client-landing" },
      component: () =>
        import(
          /* webpackChunkName: "project-detail" */ "@/modules/client/views/ProjectDetail.vue"
        ),
    },
    {
      path: "chat-especialista",
      name: "specialist-chat",
      meta: { layout: "client-landing" },
      component: () =>
        import(
          /* webpackChunkName: "specialist-chat" */ "@/modules/client/views/SpecialistChat.vue"
        ),
    },
    {
      path: "/",
      redirect: { name: "client-profile" },
    },
  ],
};
