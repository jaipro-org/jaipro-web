export default {
  component: () =>
    import(
      /* webpackChunkName: "backoffice-layout" */ "@/modules/backoffice/layouts/BackofficeLayout.vue"
    ),
  children: [],
};
