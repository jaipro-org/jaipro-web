import { encryptAuthStorage } from "../../../utils/Storage"
import { ISecurity, IUser, IStateAuth } from "./type"
/****************************************/
/*             AUTH - MUTATIONS         */
/****************************************/
export const setStatus = (state: IStateAuth, status: string) => {
  state.status = status
}
export const setUser = (state: IStateAuth, user: IUser) => {
  state.user = user
}
export const setSecurity = (state: IStateAuth, security: ISecurity) => {
  state.security = security
}

export const logout = (state: IStateAuth) => {
  encryptAuthStorage.clear()
  state.status = "no-authenticated"
  state.user = {
    email: "",
  }
  state.security = {
    email: "",
    profileName: "",
    token: "",
    tokenType: "",
    refreshToken: "",
  }
}
