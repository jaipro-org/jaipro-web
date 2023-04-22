import AxiosClient from "../axiosClient"

import { InformationClient } from "@/interfaces/InformationClient.interfaces"
import { LocationClient } from "@/interfaces/LocationClient.interfaces"
import { PasswordClient } from "@/interfaces/PasswordClient.interfaces"

const generalApi = {
  getDataClient: "/customer/",
  putInformation: "/customer/updateInformation",
  putLocation: "/customer/updateLocation",
  putPassword: "/customer/updatePassword",
}

export class ClientServices {
  async getDataClient(idClient: string) {
    const { data } = await AxiosClient.axiosIns.get(generalApi.getDataClient + idClient)
    return data
  }
  async putInformation(payload: InformationClient) {
    console.log(payload)
    const { data } = await AxiosClient.axiosIns.put(generalApi.putInformation, payload)
    return data
  }
  async putLocation(payload: LocationClient) {
    const { data } = await AxiosClient.axiosIns.put(generalApi.putLocation, payload)
    return data
  }
  async putPassword(payload: PasswordClient) {
    const { data } = await AxiosClient.axiosIns.put(generalApi.putPassword, payload)
    return data
  }
}
