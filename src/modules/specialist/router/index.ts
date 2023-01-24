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
      path: "pagos",
      name: "payments",
      meta: { layout: "specialist-landing" },
      component: () =>
        import(
          /* webpackChunkName: "payments" */ "@/modules/specialist/views/Payments.vue"
        ),
    },
    {
      path: "lista-pagos",
      name: "payment-list",
      meta: { layout: "specialist-landing" },
      component: () =>
        import(
          /* webpackChunkName: "payment-list" */ "@/modules/specialist/views/PaymentList.vue"
        ),
    },
    {
      path: "cobros",
      name: "charge-project",
      meta: { layout: "specialist-landing" },
      component: () =>
        import(
          /* webpackChunkName: "charge-project" */ "@/modules/specialist/views/ChargeProject.vue"
        ),
    },
    {
      path: "comision",
      name: "pay-comision",
      meta: { layout: "specialist-landing" },
      component: () =>
        import(
          /* webpackChunkName: "pay-comision" */ "@/modules/specialist/views/PayComision.vue"
        ),
    },
    {
      path: "notificaciones",
      name: "specialist-notifications",
      meta: { layout: "specialist-landing" },
      component: () =>
        import(
          /* webpackChunkName: "notifications" */ "@/modules/specialist/views/Notifications.vue"
        ),
    },
    {
      path: "propuestas",
      name: "proposals",
      meta: { layout: "specialist-landing" },
      component: () =>
        import(
          /* webpackChunkName: "proposals" */ "@/modules/specialist/views/Proposals.vue"
        ),
    },
    {
      path: "/",
      redirect: { name: "specialist-profile" },
    },
  ],
}
