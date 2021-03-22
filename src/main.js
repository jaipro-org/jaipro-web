import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueSmoothScroll from 'vue2-smooth-scroll';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';


import MasterLanding from "./layouts/master-landing.vue";
import MasterSearchPage from "./layouts/master-search-page.vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSmoothScroll, {
  duration: 1000,
  updateHistory: false,
  offset: -50,
})
Vue.config.productionTip = false;

Vue.component('v-select', vSelect)
Vue.component("master-landing", MasterLanding);
Vue.component("master-search-page", MasterSearchPage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
