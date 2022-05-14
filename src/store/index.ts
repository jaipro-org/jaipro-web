import Vue from "vue";
import Vuex from "vuex";
import authModule from "@/modules/auth/store/index";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollY: 0,
  },
  actions,
  mutations,
  getters,
  modules: { authModule },
});
