import AxiosClient from "../axiosClient"

const generalApi = {
  getDataClient: "/customer/",
}

export class ClientServices {
  async getDataClient(idClient: string) {
    const { data } = await AxiosClient.axiosIns.get(generalApi.getDataClient + idClient)
    return data
  }
}
