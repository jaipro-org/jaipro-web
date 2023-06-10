import AxiosClient from "../axiosClient"
//interface
import { WorkLocation } from "@/interfaces/WorkLocationSpecialist.interfaces"
import { BankAccountSpecialist } from "@/interfaces/BankAccountSpecialist.interfaces"
import { SpecializationSpecialist } from "@/interfaces/SpecializationSpecialist.interfaces"
import { ProfileSpecialistPayload } from "@/interfaces/ProfileSpecialist.interfaces";
import { GallerySpecialist } from "@/interfaces/GallerySpecialist.interfaces"

const generalApi = {
  getDataSpecialist: "/specialist/full/",
  getWorkLocation: "/work-location/",
  getSpecialization: "/specialist-specialization/specialist/",
  getBankAccount: "/specialist-bank-account/specialist/",
  postExperience: "/specialist-specialization/list",
  postExperienceTime: "/specialist/",
  postGallery: "/specialist-cv/gallery",
  postBankAccount: "/specialist-bank-account",
  putExperienceTime: "/specialist/",
  postWorkLocation: "/work-location",
  putBankAccount: "/specialist-bank-account",
  deleteSpecializations: "/specialist-specialization/delete/list",
  deleteWorkLocation: "/work-location/",
  deleteExperienceForProfession: "/specialist/",
  deleteBankAccount: "/specialist-bank-account/specialist-bank-account/",
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
  async deleteSpecializations(payload: Array<SpecializationSpecialist>) {
    const { data } = await AxiosClient.axiosIns.post(generalApi.deleteSpecializations, payload)
    return data
  }
  async postExperienceTime(idSpecialist: string, payload: any) {
    const { data } = await AxiosClient.axiosIns.post(generalApi.postExperienceTime + idSpecialist + "/experience", payload)
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

  async putPresentation(idSpecialist: string, payload: ProfileSpecialistPayload) {
    const { data } = await AxiosClient.axiosIns.put(generalApi.putExperienceTime + idSpecialist, payload)
    return data;
  }

  async postGallery(payload: GallerySpecialist) {
    const fileName = 'nombreArchivo1.jpg';
    const fileExtension = fileName.split('.').pop();
    const fileType = getFileTypeByExtension(fileExtension);
    const formData = new FormData();

    //imagen
    const file1 = new Blob([payload.images[0]], { type: fileType });
    formData.append('images', file1, fileName);

    //specialistGallery
    const jsonPart = new Blob([JSON.stringify(payload.specialistGallery)], { type: 'application/json' });
    formData.append("specialistGallery", jsonPart);

    const prueba = formData.get("specialistGallery")
    const prueba2 = formData.get("images")

    debugger
    const { data } = await AxiosClient.axiosIns.post(generalApi.postGallery, formData, { headers: { "Content-Type": undefined } })
    return data
  }

  async putExperienceTime(idSpecialist: string, payload: any) {
    const { data } = await AxiosClient.axiosIns.put(generalApi.putExperienceTime + idSpecialist + "/experience", payload)
    return data
  }
  async putBankAccount(payload: BankAccountSpecialist) {
    const { data } = await AxiosClient.axiosIns.put(generalApi.putBankAccount, payload)
    return data
  }
  async deleteWorkLocation(idSpecialist: string, idDistrict: number) {
    const { data } = await AxiosClient.axiosIns.delete(generalApi.deleteWorkLocation + idSpecialist + "/" + idDistrict)
    return data
  }
  async deleteExperienceForProfessionId(idSpecialist: string, idProfession: number) {
    const { data } = await AxiosClient.axiosIns.delete(generalApi.deleteExperienceForProfession + idSpecialist + "/experience/" + idProfession)
    return data
  }
  async deleteBankAccount(id: string) {
    const { data } = await AxiosClient.axiosIns.delete(generalApi.deleteBankAccount + id)
    return data
  }
}

function getFileTypeByExtension(extension: any) {
  const fileTypeMap: any = {
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    png: 'image/png',
    // Agrega más extensiones y tipos de contenido según sea necesario
  };

  return fileTypeMap[extension.toLowerCase()] || '';
}