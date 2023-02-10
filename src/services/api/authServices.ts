import AxiosClient from "../axiosClient"

const authApi = {
  postLogin: "/auth/login",
  postCreateSpecialist: "/specialist",
  postCreateClient: "/customer",
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
}
