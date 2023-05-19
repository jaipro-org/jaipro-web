import { rest } from 'msw'
const URL = process.env.VUE_APP_BACK_URL

interface DataNewProyect {
  customer: {
    name: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
  },
  projectRequest: {
    type: string,
    detail: string,
    email: string,
    password: string,
    confirmPassword: string,
    professionId: number,
    districtId: number,
    serviceTypeId: number
  },
};

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
]