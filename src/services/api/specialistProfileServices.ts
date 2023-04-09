import AxiosClient from "../axiosClient"

//interface
import { WorkLocation } from "@/interfaces/WorkLocationSpecialist.interfaces"
import { BankAccountSpecialist } from "@/interfaces/BankAccountSpecialist.interfaces"


const generalApi = {
  getWorkLocation: "/work-location/",
  getBankAccount: "/specialist-bank-account/specialist/",
  postBankAccount: "/specialist-bank-account",
  postWorkLocation: "/work-location",
  putBankAccount: "/specialist-bank-account",
}

export class SpecialistServices {
  async getWorkLocation(idEspecialist: string) {
    const { data } = await AxiosClient.axiosIns.get(generalApi.getWorkLocation + idEspecialist)
    return data
  }
  async getBankAccount(idEspecialist: string) {
    const { data } = await AxiosClient.axiosIns.get(generalApi.getBankAccount + idEspecialist)
    return data
  }
  async postBankAccount(payload: BankAccountSpecialist) {
    const { data } = await AxiosClient.axiosIns.post(generalApi.postBankAccount, payload)
    return data
  }
  async postWorkLocation(payload: WorkLocation) {
    const { data } = await AxiosClient.axiosIns.post(generalApi.postWorkLocation, payload)
    return data
  }
  async putBankAccount(payload: BankAccountSpecialist) {
    const { data } = await AxiosClient.axiosIns.put(generalApi.putBankAccount, payload)
    return data
  }
}
