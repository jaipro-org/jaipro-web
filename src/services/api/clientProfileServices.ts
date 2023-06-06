import AxiosClient from "../axiosClient"

import { InformationClient } from "@/interfaces/InformationClient.interfaces"
import { LocationClient } from "@/interfaces/LocationClient.interfaces"
import { PasswordClient } from "@/interfaces/PasswordClient.interfaces"
import { PhotoClient } from "@/interfaces/PhotoClient.interfaces"

const generalApi = {
  getDataClient: "/customer/",
  putInformation: "/customer/updateInformation",
  putLocation: "/customer/updateLocation",
  putPassword: "/customer/updatePassword",
  putPhoto: "/customer/updatePhoto",
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
  async putPhoto(payload: PhotoClient) {
    const formData = new FormData();
    formData.append("id", payload.id);
    formData.append("extension", payload.extension!);

    if(payload.photo != null)
      formData.append("file", payload.photo);

    const { data } = await AxiosClient.axiosIns.post(generalApi.putPhoto, formData, {headers: {"Content-Type": "multipart/form-data"}})
    return data
  }
}