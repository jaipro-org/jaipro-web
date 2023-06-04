import AxiosClient from "../axiosClient"

const generalApi = {
  getProfessionList: "/profession",
  getSpecializationList: "/specialization",
  getDistrictList: "/district",
  getBank: "/bank",
  getFilterSpecialist: "/specialist/filters",
  getSearch: "/specialist/search"
}

export class GeneralServices {
  async getProfessionList() {
    const { data } = await AxiosClient.axiosIns.get(
      generalApi.getProfessionList
    )
    return data
  }
  async getSpecializationList() {
    const { data } = await AxiosClient.axiosIns.get(
      generalApi.getSpecializationList
    )
    return data
  }
  async getDistrictList() {
    const { data } = await AxiosClient.axiosIns.get(generalApi.getDistrictList)
    return data
  }
  async getBank() {
    const { data } = await AxiosClient.axiosIns.get(generalApi.getBank)
    return data
  }
  async getFilterSpecialist() {
    const { data } = await AxiosClient.axiosIns.get(generalApi.getFilterSpecialist)
    return data
  }
  async getSearch(payload: string) {
    const { data } = await AxiosClient.axiosIns.get(generalApi.getSearch + payload.replace(/\s/g, ''))
    return data
  }
}
