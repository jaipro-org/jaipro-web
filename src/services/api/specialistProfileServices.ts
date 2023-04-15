import AxiosClient from "../axiosClient"
//interface
import { WorkLocation } from "@/interfaces/WorkLocationSpecialist.interfaces"
import { BankAccountSpecialist } from "@/interfaces/BankAccountSpecialist.interfaces"
import { SpecializationSpecialist } from "@/interfaces/SpecializationSpecialist.interfaces"

const generalApi = {
  getDataSpecialist: "/specialist/full/",
  getWorkLocation: "/work-location/",
  getSpecialization: "/specialist-specialization/specialist/",
  getBankAccount: "/specialist-bank-account/specialist/",
  postExperience: "/specialist-specialization/list",
  postBankAccount: "/specialist-bank-account",
  postWorkLocation: "/work-location",
  putBankAccount: "/specialist-bank-account",
}

export class SpecialistServices {
  async getDataSpecialist(idEspecialist: string) {
    const { data } = await AxiosClient.axiosIns.get(generalApi.getDataSpecialist + idEspecialist)
    return data
  }
  async getWorkLocation(idEspecialist: string) {
    const { data } = await AxiosClient.axiosIns.get(generalApi.getWorkLocation + idEspecialist)
    return data
  }
  async getSpecialization(idEspecialist: string) {
    const { data } = await AxiosClient.axiosIns.get(generalApi.getSpecialization + idEspecialist)
    return data
  }
  async getBankAccount(idEspecialist: string) {
    const { data } = await AxiosClient.axiosIns.get(generalApi.getBankAccount + idEspecialist)
    return data
  }
  async postExperience(payload: Array<SpecializationSpecialist>) {
    const { data } = await AxiosClient.axiosIns.post(generalApi.postExperience, payload)
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
