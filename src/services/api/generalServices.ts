import AxiosClient from "../axiosClient"

const generalApi = {
  getProfessionList: "/profession",
  getDistrictList: "/district",
}

export class GeneralServices {
  async getProfessionList() {
    const { data } = await AxiosClient.axiosIns.get(
      generalApi.getProfessionList
    )
    return data
  }

  async getDistrictList() {
    const { data } = await AxiosClient.axiosIns.get(generalApi.getDistrictList)
    return data
  }
}
