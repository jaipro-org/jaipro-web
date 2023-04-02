import AxiosClient from "../axiosClient"

//interface
import BankAccountSpecialist from "@/interfaces/BankAccountSpecialist.interfaces"


const generalApi = {
  getWorkLocation: "/work-location/",
  getBankAccount: "/specialist-bank-account/specialist/",
  postBankAccount: "/specialist-bank-account"
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
}
