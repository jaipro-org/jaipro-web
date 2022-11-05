import { createLogger, createStore } from "vuex";

export interface IGeneralState {
  scrollY: number;
}

export const store = createStore({
  plugins: [createLogger()],
  state: {
    scrollY: 0,
  },
  mutations: {
    setScroll(state, scrollY) {
      state.scrollY = scrollY;
    },
  },
  actions: {
    updateScroll({ commit }, scrollY) {
      commit("setScroll", scrollY);
    },
  },
  modules: {},
});
