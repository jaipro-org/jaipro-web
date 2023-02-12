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

    const security: ISecurity = {
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
