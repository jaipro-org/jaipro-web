export default {
  component: () =>
    import(
      /* webpackChunkName: "specialist-layout" */ "@/modules/specialist/layouts/SpecialistLayout.vue"
    ),
  children: [
    {
      path: "perfil",
      name: "specialist-profile",
      meta: { layout: "specialist-landing" },
      component: () =>
        import(
          /* webpackChunkName: "specialist-profile" */ "@/modules/specialist/views/ProfilePage.vue"
        ),
    },
    {
      path: "trabajos",
      name: "jobs-list",
      meta: { layout: "specialist-landing" },
      component: () =>
        import(
          /* webpackChunkName: "jobs-list" */ "@/modules/specialist/views/JobsList.vue"
        ),
    },
    {
      path: "/",
      redirect: { name: "specialist-profile" },
    },
  ],
};
