export default {
  component: () =>
    import(/* webpackChunkName: "general-layout" */ '@/modules/general/layouts/GeneralLayout.vue'),
  children: [
    {
      path: "buscar-especialista",
      name: "search-specialist",
      meta: { layout: "basic-landing" },
      component: () =>
        import( /* webpackChunkName: "search-specialist" */ '@/modules/general/views/SearchSpecialist.vue'),
    },
    {
      path: "especialista",
      name: "specialist",
      meta: { layout: "basic-landing" },
      component: () =>
        import(
          /* webpackChunkName: "especialist" */ "@/modules/general/views/SpecialistProfile.vue"
        ),
    },
    {
      path: "/",
      redirect: { name: "search-specialist" },
    },
  ],
};
