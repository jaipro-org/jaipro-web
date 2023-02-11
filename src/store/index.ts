// import users from "./namesSpaces/users";
import { createStore } from "vuex"
import authModule from "../modules/auth/store/index"

const store = createStore({
  modules: {
    authModule,
  },
})

export default store
