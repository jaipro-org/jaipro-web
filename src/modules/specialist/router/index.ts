export default {
  component: () =>
    import(
      /* webpackChunkName: "specialist-layout" */ "@/modules/specialist/layouts/SpecialistLayout.vue"
    ),
  children: [
    {
      path: "perfil",
      name: "specialist-profile",
      meta : {layout : "specialist-landing"},
      component: () =>
        import(
          /* webpackChunkName: "specialist-profile" */ "@/modules/specialist/views/ProfilePage.vue"
        ),
    },
  ],
};
