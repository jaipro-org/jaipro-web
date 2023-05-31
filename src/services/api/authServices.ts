import AxiosClient from "../axiosClient"
import { changePassword } from "@/interfaces/ChangePassword.interfaces"

const authApi = {
  postLogin: "/auth/login",
  postCreateSpecialist: "/specialist",
  postCreateClient: "/customer",
  refreshToken: "/auth/refresh-token",
  forgotPassword: "/user-demands/forgot-password",
  forgotPasswordChange: "/user-demands/forgot-password/change",
  validateRecoverTicket: "/user-demands/validate/user-recover-ticket/"
}

export class AuthServices {
  async login(payload: { email: string; password: string }) {
    const { data } = await AxiosClient.axiosIns.post(authApi.postLogin, payload)
    return data
  }

  async createClient(payload: any) {
    const { data } = await AxiosClient.axiosIns.post(authApi.postCreateClient, {
      ...payload,
      document: null,
      identity: 0,
      gender: 2,
      phone: "999888780",
      profilePhoto: null,
      publicUrl: "mypublicurl",
      verifiedEmail: true,
      districtId: 1,
    })

    return data
  }

  async createSpecialist(payload: any) {
    const { data } = await AxiosClient.axiosIns.post(
      authApi.postCreateSpecialist,
      {
        ...payload,
        identity: 0,
        gender: 1,
        publicUrl: "mypublicurl",
        verified: true,
        districtId: 1,
      }
    )
    return data
  }

  async refreshToken(payload: string) {
    const { data } = await AxiosClient.axiosIns.post(authApi.refreshToken, { refreshToken: payload })
    return data
  }

  async forgotPassword(email: string) {
    const { data } = await AxiosClient.axiosIns.post(authApi.forgotPassword + "?email=" + email)
    return data
  }

  async forgotPasswordChange(payload: changePassword) {
    const { data } = await AxiosClient.axiosIns.post(authApi.forgotPasswordChange, payload)
    return data
  }

  async validateRecoverTicket(id: string, userId: string) {
    const { data } = await AxiosClient.axiosIns.get(authApi.validateRecoverTicket + id + "/user/" + userId)
    return data
  }
}
