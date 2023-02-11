import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { BootstrapVue3 } from "bootstrap-vue-3"
import VueSmoothScroll from "v-smooth-scroll"
import vSelect from "vue-select"
import VueSweetalert2 from "vue-sweetalert2"

import MasterLanding from "./layouts/master-landing.vue"
import ClientBasicLanding from "./layouts/client-basic-landing.vue"
import ClientLanding from "./layouts/client-landing.vue"
import SpecialistLanding from "./layouts/specialist-landing.vue"
import MasterSearchPage from "./layouts/master-search-page.vue"
import BasicLanding from "./layouts/basic-landing.vue"

import "bootstrap-vue-3/dist/bootstrap-vue-3.css"
import "bootstrap/dist/css/bootstrap.css"
import "vue-select/dist/vue-select.css"
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css"
import AxiosClient from "./services/axiosClient"
import store from "./store"
// import "@/assets/style.css";
// create an instance using the function

new AxiosClient(process.env.VUE_APP_BACK_URL).createClient()

createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapVue3)
  .use(VueSweetalert2)
  .use(VueSmoothScroll, {
    duration: 1000,
    updateHistory: false,
    offset: -50,
  })
  .component("v-select", vSelect)
  .component("master-landing", MasterLanding)
  .component("client-basic-landing", ClientBasicLanding)
  .component("client-landing", ClientLanding)
  .component("specialist-landing", SpecialistLanding)
  .component("basic-landing", BasicLanding)
  .component("master-search-page", MasterSearchPage)
  .mount("#app")
