// import Vue from "vue";
// import Vuex from "vuex";
// import authModule from "@/modules/auth/store/index";
// import GeneralModule from "@/store/modules/general";
// import * as actions from "./actions";
// import * as getters from "./getters";
// import * as mutations from "./mutations";

// Vue.use(Vuex);

// export default new Vuex.Store({
  
//   // state: {
//   //   scrollY: 0,
//   // },
//   // actions,
//   // mutations,
//   // getters,
//   modules: { general: GeneralModule },
// });

import Vue from 'vue'
import Vuex from 'vuex'
import { IGeneralState } from './modules/general'
Vue.use(Vuex)

export interface IRootState {
  app: IGeneralState

}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
