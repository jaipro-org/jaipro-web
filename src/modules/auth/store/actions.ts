/****************************************/
/*               AUTH - ACTIONS         */

import { AuthServices } from "../../../services/api/authServices"
import { encryptAuthStorage } from "../../../utils/Storage"

import { ISecurity } from "./type"
const authServices = new AuthServices()

/****************************************/

export const loginUser = async (
  { commit }: any,
  payload: { email: string; password: string }
) => {
  try {
    const response = await authServices.login(payload)

    //descodifica el JWT
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

    // setMultipleItems([
    //   ["token", security.token],
    //   ["tokenType", security.tokenType],
    //   ["refreshToken", security.refreshToken],
    // ])
    commit("setStatus", "authenticated")
    commit("setSecurity", security)
    commit("setUser", { email: payload.email })
    return true
  } catch (error) {
    commit("logout")
    throw error
  }
}
