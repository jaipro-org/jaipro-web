import { rest } from 'msw'
import { DataNewProyect } from "./interface/DataNewProyect"
const URL = process.env.VUE_APP_BACK_URL



export const handlers = [
  rest.post(URL + '/register/new-proyect', async (req, res, ctx) => {
    const requestData: DataNewProyect = await req.json();
    const response = {
      createdBy: requestData.customer.email,
      creationDate: "2023-05-16T22:24:11.919901",
      modifiedBy: requestData.customer.email,
      modifiedDate: "2023-05-16T22:24:11.919901",
      id: "fd8c2333-b2dc-40be-8de7-b8051de04291",
      name: requestData.customer.name,
      lastName: requestData.customer.lastName,
      identity: 0,
      gender: 2,
      address: null,
      email: requestData.customer.email,
      document: null,
      phone: "999888780",
      profilePhoto: null,
      publicUrl: "mypublicurl",
      verifiedEmail: true,
      districtId: requestData.projectRequest.districtId
    }
    return res(
      ctx.status(200),
      ctx.json(response)
    )
  }),
  rest.post(URL + '/register/new-proyect/photos', async (req, res, ctx) => {
    const response = {
      projectPhotos: [
        {
          name: "Excel.png",
          size: 0,
          url: "https://storage.cloud.google.com/jaipro/jaipro/specialist/f6100e89-fe1d-49a7-912d-8cc155f43726/gallery/Excel.png",
          date: "2023-05-22T19:49:55.340698"
        },
        {
          name: "Excel2.png",
          size: 0,
          url: "https://storage.cloud.google.com/jaipro/jaipro/specialist/f6100e89-fe1d-49a7-912d-8cc155f43726/gallery/Excel2.png",
          date: "2023-05-22T19:49:56.201784"
        },
        {
          name: "Excel3.png",
          size: 0,
          url: "https://storage.cloud.google.com/jaipro/jaipro/specialist/f6100e89-fe1d-49a7-912d-8cc155f43726/gallery/Excel3.png",
          date: "2023-05-22T19:49:56.201784"
        }
      ]
    }
    return res(
      ctx.status(200),
      ctx.json(response)
    )
  }),
]