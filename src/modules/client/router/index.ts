import { RouteLocationNormalized } from "vue-router";

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
      path: "mis-proyectos/:type",
      name: "my-projects",
      meta: { layout: "client-landing" },
      component: () =>
        import(
          /* webpackChunkName: "my-projects" */ "@/modules/client/views/MyProjects.vue"
        ),
      props: (route: RouteLocationNormalized) => {
        const type = route.params.type;
        return { type };
      },
    },
    {
      path: "detalle-proyecto/:projectId",
      name: "project-detail",
      meta: { layout: "client-landing" },
      component: () =>
        import(
          /* webpackChunkName: "project-detail" */ "@/modules/client/views/ProjectDetail.vue"
        ),
      props: (route: RouteLocationNormalized) => {
        const projectId = Number(route.params.projectId);
        return { projectId };
      },
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
      path: "notificaciones",
      name: "client-notifications",
      meta: { layout: "client-landing" },
      component: () =>
        import(
          /* webpackChunkName: "notifications" */ "@/modules/client/views/Notifications.vue"
        ),
    },
    {
      path: "pago-online",
      name: "pay-online",
      meta: { layout: "client-landing" },
      component: () =>
        import(
          /* webpackChunkName: "pay-online" */ "@/modules/client/views/PayOnLine.vue"
        ),
    },
    {
      path: "/",
      redirect: { name: "client-profile" },
    },
  ],
};
