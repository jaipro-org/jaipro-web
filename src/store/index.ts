import { defineStore } from 'pinia'
import { AuthServices } from "@/services/api/authServices"
import { encryptAuthStorage } from "@/utils/Storage"
import { IStateAuth, ISecurity } from "@/interfaces/StateLoginPinia.interfaces"

const authData: string = window.localStorage.getItem("@AUTH:security") || "";
var data = { id: "", email: "", profileName: "", token: "", tokenType: "", refreshToken: "" }

if (Boolean(authData)) {
  data = encryptAuthStorage.decryptValue(authData)
}

const authServices = new AuthServices()

export const useLoginStore = defineStore('store', {
  state: (): IStateAuth => ({
    status: "authenticating",
    user: {
      email: data.email,
    },
    security: {
      id: data.id,
      email: data.email,
      profileName: data.profileName,
      token: data.token,
      tokenType: data.tokenType,
      refreshToken: data.refreshToken,
    },
  }),
  actions: {
    async loginUser(payload: { email: string; password: string }) {
      try {

        const response = await authServices.login(payload)
        const decoded = JSON.parse(atob(response.token.split('.')[1]));

        const security: ISecurity = {
          id: decoded.sub,
          email: payload.email,
          profileName: response.profileName,
          token: response.token,
          tokenType: response.tokenType,
          refreshToken: response.refreshToken,
        }

        encryptAuthStorage.setItem("security", security)

        this.status = "authenticated"
        this.security = security
        this.user.email = payload.email

      } catch (error) {
        throw error
      }
    },
    logout() {
      encryptAuthStorage.clear()
      this.$state.status = "no-authenticated"
      this.$state.user = {
        email: "",
      }
      this.$state.security = {
        id: "",
        email: "",
        profileName: "",
        token: "",
        tokenType: "",
        refreshToken: "",
      }
    },
    getData() {
      return this.$state
    }
  }
})




