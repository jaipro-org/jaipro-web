export interface DataNewProyect {
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