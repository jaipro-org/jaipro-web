import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import MasterLanding from "./layouts/master-landing.vue";
import MasterSearchPage from "./layouts/master-search-page.vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

Vue.component("master-landing", MasterLanding);
Vue.component("master-search-page", MasterSearchPage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
