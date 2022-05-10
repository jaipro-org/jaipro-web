import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueSmoothScroll from "vue2-smooth-scroll";
import vSelect from "vue-select";
import VueSweetalert2 from "vue-sweetalert2";

import MasterLanding from "./layouts/master-landing.vue";
import ClientLanding from "./layouts/client-landing.vue";
import SpecialistLanding from "./layouts/specialist-landing.vue";
import MasterSearchPage from "./layouts/master-search-page.vue";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "vue-select/dist/vue-select.css";
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";
// import "@/assets/style.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);
Vue.use(VueSmoothScroll, {
  duration: 1000,
  updateHistory: false,
  offset: -50,
});

Vue.config.productionTip = false;

Vue.component("v-select", vSelect);
Vue.component("master-landing", MasterLanding);
Vue.component("client-landing", ClientLanding);
Vue.component("specialist-landing", SpecialistLanding);
Vue.component("master-search-page", MasterSearchPage);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
