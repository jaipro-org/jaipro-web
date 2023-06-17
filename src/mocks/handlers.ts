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
  rest.get(URL + '/customer/proyects', async (req, res, ctx) => {
    const queryParams = req.params;
    const response = [
      {
        professionName: "Carpintero",
        detail: "asdasdasdsa",
        creationDate: "2023-05-16T22:24:11.919901",
        proposalsCounter: 5,
        rating: 4,
        enabledRating: false,
        ratingDone: true
      },
      {
        professionName: "Electricista",
        detail: "asdasdasdsa",
        creationDate: "2023-05-16T22:24:11.919901",
        proposalsCounter: 3,
        rating: 2,
        enabledRating: false,
        ratingDone: true
      }
    ]
    return res(
      ctx.status(200),
      ctx.json(response)
    )
  }),
  rest.get(URL + '/specialist/proposals', async (req, res, ctx) => {
    const queryParams = req.params;
    const response = {
      totalRows: 30,
      data: [{
        projectDetail: {
          projectId: "b08c1fcf-aae1-4167-bcb6-1325351796aa",
          status: 1,
          professionName: "Carpintero",
          district: "Los Olivos",
          detail: "Se busca realizar la reparacion...",
          creationDate: "2021-01-01 15:34:21"
        },
        statusProposal: 1,
        proposal: "Te cobraria X soles",
        profName: "Pedro Pablo",
        profLastName: "Castle",
        profPublicUrl: "https://....com",
        minCost: 100,
        maxCost: 200
      }, {
        projectDetail: {
          projectId: "b08c1fcf-aae1-4167-bcb6-1325351796ss",
          status: 2,
          professionName: "Limpieza",
          district: "Lima",
          detail: "Se busca realizar la limpieza de...",
          creationDate: "2023-01-01 15:34:21"
        },
        statusProposal: 2,
        proposal: "Te cobraria X dolares",
        profName: "Jesner Ramirez",
        profLastName: "Castle",
        profPublicUrl: "https://....com",
        minCost: 300,
        maxCost: 500
      }]
    }
    return res(
      ctx.status(200),
      ctx.json(response)
    )
  }),
  rest.get(URL + '/specialist/proposals/details', async (req, res, ctx) => {
    const queryParams = req.params;
    const response = {
      projectDetail: {
        projectId: "b08c1fcf-aae1-4167-bcb6-1325351796aa",
        status: 1,
        professionName: "Carpintero",
        district: "Los Olivos",
        detail: "Se busca realizar la reparacion...",
        creationDate: "2021-01-01 15:34:21"
      },
      payment: {
        type: 1,
        modality: 1,
        amount: 999.99
      },
      statusProposal: 1,
      proposal: "Te cobraria X soles",
      profName: "Pedro Pablo",
      profLastName: "Castle",
      profPublicUrl: "https://....com",
      minCost: 100,
      maxCost: 200
    }
    return res(
      ctx.status(200),
      ctx.json(response)
    )
  }),
]