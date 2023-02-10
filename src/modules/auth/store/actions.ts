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
    const { data } = await authServices.login(payload)

    const security: ISecurity = {
      token: data.token,
      tokenType: data.tokenType,
      refreshToken: data.refreshToken,
    }

    encryptAuthStorage.setMultipleItems([
      ["token", security.token],
      ["tokenType", security.tokenType],
      ["refreshToken", security.refreshToken],
    ])
    commit("setSecurity", security)
    commit("setUser", { email: payload.email })
    return true
  } catch (error) {
    commit("logout")
    throw error
  }
}
