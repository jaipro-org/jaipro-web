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
      path: "afiliacion",
      name: "affiliation-page",
      meta: { layout: "basic-landing" },
      component: () =>
        import(
          /* webpackChunkName: "especialist" */ "@/modules/general/views/AffiliationPage.vue"
        ),
    },
    {
      path: "nuevo-proyecto",
      name: "new-project",
      meta: { layout: "basic-landing" },
      component: () => import("@/modules/general/views/NewProject.vue"),
    },
    {
      path: "/",
      redirect: { name: "search-specialist" },
    },
  ],
};
